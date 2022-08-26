import { Address } from './address';
import { Post } from './post';

export interface User {
  id?: number;
  email: string;
  name: string;
  password: string;
  address: Address;
  stripeCustomerId?: string;
  posts?: Post[];
}
