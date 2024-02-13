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
  page: number;
  per_page: number | null;
  total: number | null;
  total_pages: number;
};

interface IUsersState extends TUsers {
  loading: boolean;
  error: string | null;
}

const initialState: IUsersState = {
  data: [],
  page: 1,
  per_page: null,
  total: null,
  total_pages: 1,
  loading: true,
  error: null,
};

export const loadUsers = createAsyncThunk(
  "loadUsers",
  async (page: number, thunkApi) => {
    try {
      const resp = await fetch(`https://reqres.in/api/users?page=${page}`);

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
  reducers: {
    deleteUsers: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUsers.fulfilled, (state, action) => {
        const { data, page, per_page, total, total_pages } = action.payload;

        state.loading = false;

        state.data = [...state.data, ...data];
        state.page = page;
        state.per_page = per_page;
        state.total = total;
        state.total_pages = total_pages;
      })
      .addCase(loadUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export const { deleteUsers } = usersSlice.actions;
export default usersSlice.reducer;
