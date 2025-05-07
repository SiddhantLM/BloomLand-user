import {
  createSlice,
  createAsyncThunk,
  //   isRejectedWithValue,
} from "@reduxjs/toolkit";
import axios from "axios";
import { authEndpoints } from "../../services/apis";

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async ({ token, rejectWithValue }) => {
    if (!token) return;
    try {
      const response = await axios.get(authEndpoints.FETCH_USER, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response ? error.response.data.message : error.message
      );
    }
  }
);

const initialState = {
  level: 0,
  requests: [],
  approved: [],
  events: [],
  name: "",
  email: "",
  phone: "",
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.level = action.payload.allowed;
      state.requests = action.payload.requests;
      state.events = action.payload.joined;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.level = action.payload.allowed;
      state.requests = action.payload.requests;
      state.events = action.payload.joined;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.approved = action.payload.approved;
      state.loading = false;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
    });
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;
export default userSlice.reducer;
