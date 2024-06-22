export interface Post {
    id: number;
    title: string;
    body: string;
    user_id: number;
    user: User;
    comments: Comment[];
  }
  
  export interface User {
    id: number;
    name: string;
  }
  
  export interface Comment {
    name: string;
    body: string;
    post_id:number;
  }
  