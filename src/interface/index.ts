export interface User {
    username: string;
    email: string;
    password: string;
    image?: string;
    role: string;
    firstName?: string;
    lastName?: string;
}

export interface Course {
    name: string;
    price: number;
    priceSale: number;
    image: string;
    subscribers: number;
}

export interface PostsType {
    title: string;
    image: string;
    author: User;
    views: number;
}

export interface RouteType {
    path: string;
    component: React.FC;
}

export interface FormValidate {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
}