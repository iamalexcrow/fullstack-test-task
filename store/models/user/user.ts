import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initUserListState } from "./user.state";
import UserAPI from "./user.api";
import { UserList } from "./user.typing";

export const fetchUserList = createAsyncThunk("users/fetchList", async () => {
  const users = await UserAPI.fetchList();

  return users;
});

export const userListSlice = createSlice({
  name: "users",
  initialState: initUserListState,
  reducers: {
    setItems: (state, action: PayloadAction<UserList>) => {
      state = action.payload;
    },
    appendItems: (state, action: PayloadAction<UserList>) => {
      Object.assign(state, action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserList.fulfilled, (state, { payload: users }) => {
      return users;
    });
  },
});

export const { setItems, appendItems } = userListSlice.actions;

export const userListReducer = userListSlice.reducer;
