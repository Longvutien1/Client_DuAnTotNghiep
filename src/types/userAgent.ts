export type UserAgentType = {
    confirmPassword(confirmPassword: any)
    _id?: string | number,
    username?: String,
    email: String,
    password?: string | number,
    phone?:string,
    address?:string,
    img?:string,
    role?: string,
    sex?:number,
    updatedAt?: string,
    createdAt?: string
}