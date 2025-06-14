import { createAsyncThunk } from "@reduxjs/toolkit";
import api, { setAuthHeader } from "../../api";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      console.log("Token before fetching contacts:", token);

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await api.get("/contacts");
      console.log("Contacts fetched from API:", response.data);

      return response.data;
    } catch (error) {
      console.log("Error fetching contacts:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      console.log("Contact to add:", contact);
      console.log("Token used:", token);

      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await api.post("/contacts", contact);
      console.log("Response from server:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error while adding contact:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactID, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      console.log("Token before deleting contact:", token);
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await api.delete(`/contacts/${contactID}`);
      console.log("Deleted contact:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error while deleting contact:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ contactID, Data }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      console.log("Token before editing contact:", token);
      if (!token) {
        return thunkAPI.rejectWithValue("No token found");
      }

      setAuthHeader(token);

      const response = await api.patch(`/contacts/${contactID}`, Data);
      console.log("Edited contact:", response.data);

      return response.data;
    } catch (error) {
      console.error("Error while editing contact:", error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
