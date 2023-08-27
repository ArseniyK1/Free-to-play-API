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
    error: null,
    status: null,
    oneGame: null,
    sortGame: [],
  },
  reducers: {
    sortGames: (state, action) => {
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
        case "По дате релиза":
          state.sortGame = [...state.array].sort(
            (current, next) =>
              new Date(next.release_date) - new Date(current.release_date)
          );
          break;
        case "По названию":
          state.sortGame = [...state.array].sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;

        default:
          state.sortGame = [...state.array];
          break;
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
        state.sortGame = action.payload;
      })
      .addCase(fetchGamesByPopularity.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export const { sortGames } = gamesSlice.actions;

export default gamesSlice.reducer;
