import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SessionContext from "contexts/SessionContext";

const RedirectToPlantsIfSignedIn = (props) => {
    const { username } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (username !== null) {
            navigate('/plants')
        }
    }, [username, navigate])

    return props.children
} 

export default RedirectToPlantsIfSignedIn;