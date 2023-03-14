export interface User {
    id?: string;
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

export interface PartVideo {
    id: string;
    name: string;
    course_id: string;
}

export interface Video {
    id: string;
    title: string;
    description: string;
    link: string;
    duration: string;
    date_posted: string;
    part_id: string;
}

export interface Comment {
    id?: string;
    content: string;
    date_posted: string;
    account_id: string;
    video_id: string;
}

export interface EditComment {
    id: string;
    state: boolean
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