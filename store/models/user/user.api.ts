import { UserList } from "./user.typing";

export default class UserAPI {
  private static BASE_ENDPOINT = "/api/v1/users";

  public static async fetchList(): Promise<UserList> {
    try {
      const response = await fetch(this.BASE_ENDPOINT);

      const { users } = (await response.json()) as { users: UserList };

      return users;
    } catch (error) {
      console.error(`An error occured when fetching user list: ${error}`);

      return null;
    }
  }
}
