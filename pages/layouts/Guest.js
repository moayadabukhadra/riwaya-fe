import React from 'react';
import store from "/src/store";
import {useRouter} from "next/router";

const Guest = ({children}) => {
    const user = store.getState().user;
    const router = useRouter();
    const content = React.useRef(null);

    return (
        <div className="content d-flex container" ref={content} dir={"rtl"}>
            {user && user.token && router.push('/')}
            {children}
        </div>
    );
}

export default Guest;
