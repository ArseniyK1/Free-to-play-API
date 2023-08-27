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
    sortGame: [],
  },
  reducers: {
    sortGames: (state, action) => {
      console.log(action.payload.typeSort);
      switch (action.payload.typeSort) {
        case "Платформа":
          state.sortGame = [...state.array].filter((element) =>
            element.platform.includes(action.payload.platform)
          );
          break;
        case "Жанр":
          state.sortGame = [...state.array].filter((element) =>
            element.genre.includes(action.payload.genre)
          );
          break;
        // case "Сортировка":
        //   state.sortGame = [...state.array].filter((element) =>
        //     element.genre.includes(action.payload.platform)
        //   );
        //   break;

        default:
          state.sortGame = [...state.array];
          break;
      }
    },
  },
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
      state.oneGame = action.payload;
    },
    [fetchGamesById.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
  },
});

export const { sortGames } = gamesSlice.actions;

export default gamesSlice.reducer;
