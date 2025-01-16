import apiFetch from "./apiFetch";

export const createUser = ({username, password}) => (
    apiFetch('POST', '/users', {
        username,
        password
    })
)

export const createSession = ({username, password}) => (
    apiFetch('POST', '/users/session', {
        username,
        password
    })
)

const SESSION_TOKEN_STORAGE_KEY = "session_token";

export const setSessionTokenStorage = (session_token) => 
    localStorage.setItem(SESSION_TOKEN_STORAGE_KEY, session_token)

export const getSessionTokenStorage = () => 
    localStorage.getItem(SESSION_TOKEN_STORAGE_KEY)

export const removeSessionTokenStorage = () => 
    localStorage.removeItem(SESSION_TOKEN_STORAGE_KEY)
