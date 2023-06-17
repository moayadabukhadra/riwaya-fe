import QuoteApi from "./api/Quote";
import React, {useEffect, useState} from "react";
import {Container} from "reactstrap";
import QuoteCard from "../src/components/QuoteCard";
import LoadingScreen from "../src/components/LoadingScreen";
import {Helmet} from "react-helmet-async";
import Head from "next/head";

const Quotes = () => {
    const [quotes, setQuotes] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        QuoteApi.getAllQuotes().then(({data}) => {
            setQuotes(data)
            setLoading(false);
        });
    }, [])

    return (
        <>
            <Head>
                <title>
                    عبارات ملهمة لإضاءة يومك | اكتشف حكمة من الأدباء الرائعين
                </title>
                <meta name={"description"}
                      content={"انغمس في عبارات ملهمة لتجعل يومك أكثر إشراقًا | اكتشف حكمة من أعمدة الكتابة المشهورين"}/>
            </Head>
            <LoadingScreen loading={loading}/>
            <Container className={"content row justify-content-center gap-3 mx-auto"}>
                {quotes && quotes.map((quote) => {
                    return (
                        <QuoteCard quote={quote}/>
                    );
                })}
            </Container>
        </>
    );
}
export default Quotes