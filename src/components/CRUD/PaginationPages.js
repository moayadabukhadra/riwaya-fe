import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const PaginationPages = ({pages, setPages, setData, api ,params}) => {
    return (
        <nav aria-label="...">
            <Pagination
                className="pagination justify-content-end mb-0"
                listClassName="justify-content-end mb-0">
                {pages && pages.map((page) => (
                    <PaginationItem className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')} key={page.label}>
                        <PaginationLink className={"rounded-circle"}
                            onClick={() => {
                                if (page.url) {
                                    params.page = page.url.substring(page.url.lastIndexOf('=') + 1);
                                    console.log(params.page);
                                    api(params).then(({data}) => {
                                        setData(data.data);
                                        setPages(data.links);
                                    });
                                }
                            }}
                        >
                            {(page.label.includes('next')) ?
                                <i className="fa fa-angle-left"/> : (page.label.includes('prev')) ?
                                    <i className="fa fa-angle-right"/> : page.label ?? page.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}

            </Pagination>
        </nav>
    );
}

export default PaginationPages;
