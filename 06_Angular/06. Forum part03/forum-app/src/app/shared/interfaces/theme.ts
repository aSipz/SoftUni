import { IPost } from "./post";
import { IUser } from "./user";

export interface ITheme {
    _id: string;
    themeName: string;
    subscribers: string[];
    userId: IUser
    posts: IPost[];
    created_at: string;
    updatedAt: string;
    __v: number;
}