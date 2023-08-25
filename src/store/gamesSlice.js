import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GamesService from "../API/GamesService";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (_, thunkAPI) => {
    const gamesArray = await GamesService.getGameList(thunkAPI);
    return gamesArray;
  }
);

export const fetchGamesById = createAsyncThunk(
  "games/fetchGamesById",
  async (id) => {
    const oneGame = await GamesService.getGameById(id);

    return oneGame;
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    array: [],
    error: null,
    status: null,
    oneGame: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGames.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchGames.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.array = action.payload;
    },
    [fetchGames.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },

    [fetchGamesById.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchGamesById.fulfilled]: (state, action) => {
      state.status = "resolved";
      console.log(action);
      state.oneGame = action.payload;
    },
    [fetchGamesById.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export default gamesSlice.reducer;
