import { v4 } from "uuid";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initContactListState } from "./contact.state";
import ContactAPI from "./contact.api";
import { ContactList } from "./contact.typing";

export const fetchUserContacts = createAsyncThunk(
  "contacts/fetchItem",
  async (userId: typeof v4) => await ContactAPI.fetchItem(userId)
);

export const contactListSlice = createSlice({
  name: "contacts",
  initialState: initContactListState,
  reducers: {
    setItems: (state, action: PayloadAction<ContactList>) => {
      state = action.payload;
    },
    appendItems: (state, action: PayloadAction<ContactList>) => {
      state?.concat(action.payload ?? []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserContacts.fulfilled,
      (state, { payload: contact }) => {
        return contact ? [...(state ?? []), contact] : state;
      }
    );
  },
});

export const { setItems, appendItems } = contactListSlice.actions;

export const contactListReducer = contactListSlice.reducer;
