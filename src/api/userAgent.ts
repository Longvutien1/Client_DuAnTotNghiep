import { UserAgentType } from "../types/userAgent";
import instance from "./instance";


export const listUserAgent = () => {
    const url = `/user-agent`;
    return instance.get(url);
}

export const addUserAgent = (userAgent:UserAgentType) => {
    const url = `/user-agent`;
    return instance.post(url, userAgent);
}
export const editUserAgent = (userAgent:UserAgentType) => {
    const url = `/user-agent/${userAgent._id}`;
    return instance.put(url, userAgent);
}

export const removeUserAgent = (id:any) => {
    const url = `/user-agent/${id}`;
    return instance.delete(url);
}
export const getUserAgent = (id:any) => {
    const url = `/user-agent/${id}`;
    return instance.get(url);
}
