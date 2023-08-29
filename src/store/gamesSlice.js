import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import GamesService from "../API/GamesService";
import { useMemo } from "react";

export const fetchGames = createAsyncThunk(
  "games/fetchGames",
  async (_, thunkAPI) => {
    const gamesArray = await GamesService.getGameList(thunkAPI);
    return gamesArray;
  }
);

export const fetchGamesById = createAsyncThunk(
  "games/fetchGamesById",
  async (id, thunkAPI) => {
    const oneGame = await GamesService.getGameById(id, thunkAPI);

    return oneGame;
  }
);

export const fetchGamesByPopularity = createAsyncThunk(
  "games/fetchGamesByPopularity",
  async () => {
    const gamesPopularity = await GamesService.sortGameByPopularity();

    return gamesPopularity;
  }
);

export const gamesSlice = createSlice({
  name: "games",
  initialState: {
    array: [],
    sortArray: [],
    error: null,
    status: null,
    oneGame: null,
  },
  reducers: {
    sortGames: (state, action) => {
      state.sortArray = state.array;
      let startArr = state.sortArray;
      const { platform, genre, etc } = action.payload;
      console.log(action.payload);

      if (action.payload) {
        if (platform) {
          startArr = startArr.filter((element) =>
            element.platform.includes(platform)
          );
        }
        if (genre) {
          startArr = startArr.filter((element) => element.genre === genre);
        }
        if (etc === "По дате релиза") {
          startArr = [...startArr].sort(
            (current, next) =>
              new Date(next.release_date) - new Date(current.release_date)
          );
        }
        if (etc === "По названию") {
          startArr = [...startArr].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
        state.sortArray = startArr;
      }
    },
  },

  extraReducers: (builder) => {
    builder
      // получение всех игр без сортировки
      .addCase(fetchGames.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = "resolved";
        state.array = action.payload;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      // получение одной игры без сортировки
      .addCase(fetchGamesById.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGamesById.fulfilled, (state, action) => {
        state.status = "resolved";
        state.oneGame = action.payload;
      })
      .addCase(fetchGamesById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      })
      // получение всех игр с сортировкой по популярности
      .addCase(fetchGamesByPopularity.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchGamesByPopularity.fulfilled, (state, action) => {
        state.status = "resolved";
        state.array = action.payload;
      })
      .addCase(fetchGamesByPopularity.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { sortGames } = gamesSlice.actions;

export default gamesSlice.reducer;
