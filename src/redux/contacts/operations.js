import { createAsyncThunk } from "@reduxjs/toolkit";

import api, { setAuthHeader } from "../../api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      setAuthHeader(`Bearer ${token}`);
      const response = await api.get("/contacts");
      console.log(response);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      setAuthHeader(`Bearer ${token}`);
      const response = await api.post("/contacts", contact);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      setAuthHeader(`Bearer ${token}`);
      const response = await api.delete(`/contacts/${contactID}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactID, Data }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      setAuthHeader(`Bearer ${token}`);
      const response = await api.patch(`/contacts/${contactID}`, Data);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
