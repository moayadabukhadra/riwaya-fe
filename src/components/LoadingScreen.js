import React from "react";

const LoadingScreen = ({loading}) => {
    if(!loading) return null;
    return (
        <div className={"loading-screen-container"}>
            <div className="book">
                <div className="book__page"></div>
                {
                    [...Array(10)].map((_, i) => (
                        <div className="page" key={i} sec={i}
                             style={{
                                 animationDelay: `${i * 0.6}s`,
                                 zIndex: 10 - i,
                             }}>
                            <img src="/images/logo/riwaya-logo.png" alt="" width={150} style={{
                                transform: "translate(-10px,20px)",
                            }}/>


                            <div className={"loading-screen-text me-2"}>
                                <span> الكتاب الجيد صديق حميم<span className="dots"></span></span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default LoadingScreen;