export interface Category {
    allCategories: string[];
}

export interface Post {
    posts: Array<Posts>;
}

export interface Posts {
    meta: Meta;
    path: string;
}

export interface Meta {
    title: string;
    description: string;
    date: Date;
    categories: string[];
}
export interface Slug {
    title: string;
    description: string;
    date: Date;
    categories: string[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any;
}