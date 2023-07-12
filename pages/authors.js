import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import AuthorApi from './api/Author';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import 'swiper/css';
import AuthorCard from '../src/components/AuthorCard';
import LoadingScreen from '../src/components/LoadingScreen';
import parse from 'html-react-parser';
import BookCard from '../src/components/BookCard';
import QuoteApi from './api/Quote';
import QuoteCard from '../src/components/QuoteCard';
import AdSense from 'react-adsense';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Authors = ({ selectedAuthor, selectedAuthorBooks }) => {
  const [authors, setAuthors] = useState();
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState();
  const [modal, setModal] = useState(false);
  const [quote, setQuote] = useState();
  const toggle = () => setModal(!modal);
  const router = useRouter();
  const [params, setParams] = useState({
    'with': 'image',
    'paginate': '6'
  });

  const authorSelectedCallback = (author) => {
    router.push({
      pathname: '/authors',
      query: { 'page': params.page, 'author': author.id }
    });
  };

  useEffect(() => {
    AuthorApi.getAllAuthors(params).then(({ data }) => {
      setAuthors(data.data);
      setPages(data.links);
      setLoading(false);
    });

    QuoteApi.getRandomQuote().then(({ data }) => {
      setQuote(data);
    });
  }, [params]);

  return (
    <>
      <Head>
        <title>{selectedAuthor ? 'تحميل وقراءة كتب ' + selectedAuthor.name : ' المؤلفين - رواية'}</title>
        <meta name="description" content="Your meta description goes here" />
      </Head>
      <LoadingScreen loading={loading} />
      <div className="content row justify-content-center justify-content-md-around align-self-center" style={{ margin: '100px  auto', alignSelf: 'center' }}>
        <div className="col-md-3 row border-start">
          <div className="bg-white rounded-2 p-3">
            <div className="d-flex flex-column gap-3">
              <label className="position-relative d-flex align-items-center position-relative">
                <input type="text" className="main-search-input" placeholder="ابحث عن كتاب ,مؤلف , تصنيف..." />
              </label>
              <button onClick={() => {
                setParams({
                  ...params,
                  page: 1,
                  query: document.querySelector('.main-search-input').value
                });
              }} className="btn btn-primary w-100 mt-3 my-3 text-white d-flex align-items-center justify-content-center gap-2 mt-auto">
                <i className="fa fa-search" />
                بحث
              </button>
            </div>
            <div className="d-none d-md-block">
              <QuoteCard quote={quote} />
            </div>
          </div>
          <ins className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-2029155588392824"
            data-ad-slot="6204165593"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
        <div className="col-md-9 row gap-1 justify-content-center">
          {authors && authors.map((author, index) => (
            <AuthorCard key={index} callBack={authorSelectedCallback} author={author} />
          ))}
          <nav className="col-12" aria-label="...">
            <Pagination
              className="pagination justify-content-center my-2"
              listClassName="justify-content-center gap-1 flex-wrap"
            >
              {pages && pages.map((page) => (
                <PaginationItem
                  className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}
                  key={page.label}
                >
                  <PaginationLink className="rounded-2"
                    onClick={() => {
                      if (page.url) {
                        params.page = page.url.substring(page.url.lastIndexOf('=') + 1);
                        AuthorApi.getAllAuthors(params).then(({ data }) => {
                          setAuthors(data.data);
                          setPages(data.links);
                        });
                        router.push('?page=' + params.page + (selectedAuthor ? "?author=" + selectedAuthor?.id : ""));
                      }
                    }}
                  >
                    {(page.label.includes('next')) ? <i className="fa fa-angle-left" /> : (page.label.includes('prev')) ? <i className="fa fa-angle-right" /> : page.label ?? page.label}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </Pagination>
          </nav>
        </div>
      </div>
      <Modal className="modal-dialog-scrollable modal-lg" isOpen={modal} toggle={toggle}>
        <ModalHeader className="d-flex align-items-center justify-content-between w-100" toggle={toggle}>{selectedAuthor?.name}</ModalHeader>
        <ModalBody className="custom-scroll">
          <div className="d-flex align-items-start gap-2 flex-column">
            <img className="rounded-1 image-thumbnail" width="150" src={selectedAuthor?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + selectedAuthor.image.path : "/images/placeholders/placeholder.jpg"} alt={selectedAuthor?.name} />
            {selectedAuthor && parse(selectedAuthor?.bio)}
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="book-section-title mb-4">
                كتب ل{selectedAuthor?.name}
              </div>
            </div>
            {selectedAuthorBooks && selectedAuthorBooks.map((book) => (
              <div className="col-6 col-md-4 col-lg-3 mb-3">
                <BookCard book={book} />
              </div>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="light" onClick={toggle}>الغاء</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export async function getServerSideProps(context) {
  const { query } = context;
  const id = query.author;
  let selectedAuthor = null;
  let selectedAuthorBooks = null;

  if (id) {
    try {
      const response = await AuthorApi.getAuthor(id);
      const authorBookResponse = await AuthorApi.getAuthorBooks(id);
      selectedAuthor = response.data;
      selectedAuthorBooks = authorBookResponse.data.data;
    } catch (error) {
      console.error('Error fetching author data:', error);
    }
  }

  return {
    props: {
      selectedAuthor,
      selectedAuthorBooks
    },
  };
}

export default Authors;
