import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import UserApi from "api/User";

const Redirector = (props) => {
    const history = useHistory();
    useEffect(() => {
        UserApi.getRole().then((response) => {
            if (response.data.success.role === 'admin') {
                history.push('/admin/index');
            } else if (response.data.success.role === 'content_creator') {
                history.push('/admin/books');
            }
        });
    }, []);
}

export default Redirector