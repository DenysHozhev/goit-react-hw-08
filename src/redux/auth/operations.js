import { createAsyncThunk } from "@reduxjs/toolkit";

import api, { escAuthHeader, setAuthHeader } from "../../api";

export const registration = createAsyncThunk(
  "auth/register",
  async (userData, thunkApi) => {
    try {
      const response = await api.post("/users/signup", userData);
      setAuthHeader(`Bearer ${response.data.token}`);
      // localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userData, thunkApi) => {
    try {
      const response = await api.post("/users/login", userData);
      setAuthHeader(`Bearer ${response.data.token}`);
      // localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    setAuthHeader(`Bearer ${reduxState.auth.token}`);
    const res = await api.get("/users/current");
    return res.data;
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const response = await api.post("/users/logout");
    escAuthHeader();
    // localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
