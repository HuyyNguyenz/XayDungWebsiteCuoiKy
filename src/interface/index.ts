export interface User {
    username: string;
    email: string;
    password: string;
    image?: string;
    role_id: string;
    firstName?: string;
    lastName?: string;
}

export interface Course {
    id: string;
    name: string;
    price: number;
    price_sale: number;
    image: string;
    description: string;
    category_id: string;
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