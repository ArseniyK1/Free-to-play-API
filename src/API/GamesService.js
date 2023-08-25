import axios from "axios";

export default class GamesService {
  static async getGameList(thunkAPI) {
    try {
      const apiUrl =
        "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";

      const response = await axios.get(apiUrl, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });

      return response ? response.data : "";
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  static async getGameById(id) {
    try {
      const apiUrl =
        "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/game/";

      const response = await axios.get(apiUrl, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
        params: {
          id: id,
        },
      });

      console.log(response.data);

      return response ? response.data : "";
    } catch (error) {
      console.error(error);
    }
  }
}