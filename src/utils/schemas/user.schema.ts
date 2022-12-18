
interface userRegisterSchema {
    username: string | null,
    password: string | null,
    email: string | null,
}

interface userLoginSchema {
    username: string,
    password: string,
}

export interface userSchema{
    id: number | string,
    username: string,
    password: string,
    email: string,
    createdAt: Date,
    lastUpdatedAt: Date,
    orders: any,
    orderCart: any,
}

export type user = userSchema | null;
export type userRegister = userRegisterSchema | null;
export type userLogin = userLoginSchema | null;