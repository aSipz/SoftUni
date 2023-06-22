import { IUser } from "./user";

export interface ITheme {
    _id: string;
    themeName: string;
    subscribers: string[];
    userId: IUser
    posts: string[];
    created_at: string;
    updatedAt: string;
    __v: number;
}