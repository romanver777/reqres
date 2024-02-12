import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type TUser = {
  id: number | null;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};


interface IUsersState {
  data: TUser;
  loading: boolean;
  error: string | null;
}

const initialState: IUsersState = {
  data: {
    id: null,
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  },
  loading: true,
  error: null,
};

export const loadUser = createAsyncThunk(
  "loadUser",
  async (id: string, thunkApi) => {

    try {
      const resp = await fetch(`https://reqres.in/api/users/${id}`);

      if (!resp.ok) return thunkApi.rejectWithValue("Что-то пошло не так...");

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue("failed to load data");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Что-то пошло не так";
      });
  },
});

export default userSlice.reducer;
