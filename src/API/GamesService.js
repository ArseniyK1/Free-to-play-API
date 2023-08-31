import axios from "axios";

export default class GamesService {
  static async getGameList(thunkAPI) {
    try {
      const apiUrl = "http://localhost:3002/api/games";
      console.log(apiUrl);

      const response = await axios.get(apiUrl);
      if (response.status !== 200) {
        throw new Error("Request failed with status: " + response.status);
      }

      return response ? response.data : "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  static async getGameById(id, thunkAPI) {
    console.log("id = ", id);

    try {
      const apiUrl = `http://localhost:3002/api/byId/${id}`;
      console.log(apiUrl);

      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        throw new Error("Request failed with status: " + response.status);
      }

      return response ? response.data : "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  static async sortGameByPopularity() {
    try {
      const apiUrl =
        "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";

      const response = await axios.get(apiUrl, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        params: {
          "sort-by": "popularity",
        },
      });

      return response ? response.data : "";
    } catch (error) {
      console.error(error);
    }
  }
}
