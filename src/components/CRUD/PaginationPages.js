import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

const PaginationPages = ({pages, setPages, setData, api ,params}) => {
    return (

        <nav aria-label="...">
            <Pagination
                className="pagination justify-content-end mb-0"
                listClassName="justify-content-end mb-0"
            >
                {pages && pages.map((page) => (
                    <PaginationItem className={((!page.url) ? "disabled" : '') + (page.active ? "active" : '')}>
                        <PaginationLink
                            onClick={() => {
                                if (page.url) {
                                    params.page = page.url.substring(page.url.lastIndexOf('=') + 1);
                                    api(params).then((data) => {
                                        setData(data.data.data);
                                        setPages(data.data.links);
                                    });
                                }
                            }}
                        >
                            {(page.label.includes('Next')) ?
                                <i className="fa fa-angle-left"/> : (page.label.includes('Prev')) ?
                                    <i className="fa fa-angle-right"/> : page.label ?? page.label}
                        </PaginationLink>
                    </PaginationItem>
                ))}

            </Pagination>
        </nav>
    );
}

export default PaginationPages;
