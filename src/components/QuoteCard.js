import React from "react";

const QuoteCard = ({quote}) => {


    return (
        <div className={"box shadow-sm bg-light text-muted"}>
            <div className={"text"}>
                <p className={"mt-1 d-flex align-items-center gap-2 fs-4"}>
                    <i className={"fas fa-quote-right fa2 text-primary"} style={{
                        transform: 'translateY(-0.5rem)'

                    }}></i>
                    {quote?.body}
                    <i style={{transform: 'translateY(0.5rem)'}}
                       className={"fas fa-quote-left fa2 text-primary"}></i>
                </p>
                <div>
                    <img alt={"quote-author"} className={"rounded-circle"} width={"30"}
                         src={quote?.author?.image ? "https://riwaya.rf.gd/riwaya/storage/app/public/images/" + quote.author?.image.path : "/images/placeholders/placeholder.jpg"}/>
                    <small className={"fs-6"}>
                        {quote?.author?.name}
                    </small>
                </div>
            </div>
        </div>
    );
}
export default QuoteCard;