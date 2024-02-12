import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TUser = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type TUsers = {
  data: TUser[];
  page: number | null;
  per_page: number | null;
  total: number | null;
  total_pages: number | null;
}

interface IUsersState extends TUsers {
  loading: boolean;
  error: string | null;
}

const initialState: IUsersState = {
  data: [],
  page: null,
  per_page: null,
  total: null,
  total_pages: null,
  loading: true,
  error: null,
};

export const loadUsers = createAsyncThunk(
  "loadUsers",
  async (_, thunkApi) => {

    try {
      const resp = await fetch("https://reqres.in/api/users");

      if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue("failed to load data");
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.page = action.payload.page;
        state.per_page = action.payload.per_page;
        state.total = action.payload.total;
        state.total_pages = action.payload.total_pages;
        state.loading = false;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export default usersSlice.reducer;
