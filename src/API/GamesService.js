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
      const apiUrl = "http://localhost:3002/api/games/popularity";

      const response = await axios.get(apiUrl);

      return response ? response.data : "";
    } catch (error) {
      console.error(error);
    }
  }
}
