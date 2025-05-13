import apiFetch from "./apiFetch";
import { User } from "../types";

export const createUser = ({username, password}: User) => (
    apiFetch('POST', '/users', {
        username,
        password
    })
)

export const createSession = ({username, password}: User) => (
    apiFetch('POST', '/users/session', {
        username,
        password
    })
)

const SESSION_TOKEN_STORAGE_KEY = "session_token";

export const setSessionTokenStorage = (session_token: string) => 
    localStorage.setItem(SESSION_TOKEN_STORAGE_KEY, session_token)

export const getSessionTokenStorage = () => 
    localStorage.getItem(SESSION_TOKEN_STORAGE_KEY)

export const removeSessionTokenStorage = () => 
    localStorage.removeItem(SESSION_TOKEN_STORAGE_KEY)