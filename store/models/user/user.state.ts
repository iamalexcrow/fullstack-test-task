import { v4 } from "uuid";
import { IUser, UserList } from "./user.typing";

export const initUserListState: UserList = null;

export const initUserState: IUser = {

    id: v4() as unknown as typeof v4,
    first_name: "",
    last_name: "",
    user_name: "",

};
