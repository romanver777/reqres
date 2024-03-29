import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { TFormData } from "../../components/sign-up-form/sign-up-form";

interface IAuthState {
  id: number | null;
  token: string | null;
  isAuth: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  id: null,
  token: null,
  isAuth: false,
  loading: true,
  error: null,
};

export const auth = createAsyncThunk(
  "auth",
  async (data: TFormData, thunkApi) => {
    const { email, password } = data;

    try {
      const resp = await fetch("https://reqres.in/api/register/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!resp.ok) {
        const data = await resp.json();
        return thunkApi.rejectWithValue(data.error);
      }

      return resp.json();
    } catch (err) {
      thunkApi.rejectWithValue(err);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    init: (state) => {
      const token = localStorage.getItem("token");
      if (token) {
        state.token = localStorage.getItem("token");
        state.isAuth = true;
      }
      state.loading = false;
    },
    signOut: () => {
      localStorage.removeItem("token");

      return { ...initialState, loading: false };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(auth.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(auth.fulfilled, (state, action) => {
        state.id = action.payload.id;
        state.token = action.payload.token;
        state.isAuth = true;
        state.loading = false;

        localStorage.setItem("token", action.payload.token);
      })
      .addCase(auth.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { init, signOut } = authSlice.actions;
export default authSlice.reducer;
