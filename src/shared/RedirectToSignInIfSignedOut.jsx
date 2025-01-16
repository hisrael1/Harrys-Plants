import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToSignInIfSignedOut = (props) => {
    const { username } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (username == null) {
            navigate('/')
        }
    }, [username, navigate])

    return props.children
} 

export default RedirectToSignInIfSignedOut;