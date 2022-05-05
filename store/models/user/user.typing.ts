import { v4 } from "uuid";

export interface IUser {
  id: typeof v4;
  first_name: string;
  last_name: string;
  user_name: string;
}

export type UserList = Array<IUser> | null;
