import { v4 } from "uuid";

import { IContact } from "./contact.typing";

export default class ContactAPI {
  private static BASE_ENDPOINT = "/api/v1/contacts";

  public static async fetchItem(userId: typeof v4): Promise<IContact | null> {
    try {
      const response = await fetch(
        `${this.BASE_ENDPOINT}?filter[user_id]=${userId}`
      );

      const { contacts } = (await response.json()) as {
        contacts: IContact | null;
      };

      return contacts;
    } catch (error) {
      console.error(`An error occured when fetching user contacts: ${error}`);

      return null;
    }
  }
}
