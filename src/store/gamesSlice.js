import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GamesService from "../API/GamesService";

export const fetchGames = createAsyncThunk("games/fetchGames", async () => {
  const gamesArray = await GamesService.getGameList();
  return gamesArray;
});

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    array: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.array = action.payload;
    });
  },
});

export default gamesSlice.reducer;
