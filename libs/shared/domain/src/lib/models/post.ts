import { User } from './user';

export interface Post {
  id: number;
  content: string;
  title: string;
  category: string;
  author: User;
}
