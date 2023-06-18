export interface Post {
    id: number;
    title: string;
    text: string;
    published_at: Date;
}
export default class PostsStore {
    all(): Promise<Post[]>;
    find(id: number): Promise<Post | undefined>;
}
