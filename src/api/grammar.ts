import { GrammarType } from "../types/grammar";
import instance from "./instance";


export const listGrammar = () => {
    const url = `/grammar`;
    return instance.get(url)
}

export const getGrammarDetail = (id:string) => {
    const url = `/grammar/${id}`;
    return instance.get(url)
}

export const createGrammar = (grammar : GrammarType) => {
    const url = `grammar`;
    return instance.post(url, grammar)
}

export const editGrammar = (grammar : GrammarType) => {
    const url = `/grammar/${grammar._id}`
    return instance.put(url, grammar)
}

export const removeGramma = (id :any) => {
    const url = `/grammar/${id}`
    return instance.delete(url)
}
