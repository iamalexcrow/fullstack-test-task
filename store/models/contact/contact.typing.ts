import { v4 } from "uuid";

export interface IContact {
  id: typeof v4;
  email: string;
  phone: string;
  website: string;
  user_id: typeof v4;
};

export type ContactList = Array<IContact> | null;
