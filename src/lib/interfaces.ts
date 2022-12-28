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
