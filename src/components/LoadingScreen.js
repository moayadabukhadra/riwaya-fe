import React from "react";

const LoadingScreen = ({loading}) => {
    if (!loading) return null;
    return (

        <div style={{
            position:'absolute',
            inset:'0',zIndex:'9999',
            background:'#fff',
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>

        <div className={"book"} >
            <div className={"inner"}>
                <div className={"left"}></div>
                <div className={"middle"}></div>
                <div className={"right"}></div>
                <ul>
                    {
                        [...Array(18)].map((_, i) => (
                           <li></li>
                        ))
                    }
                </ul>
            </div>
        </div>
        </div>
    );
}

export default LoadingScreen;