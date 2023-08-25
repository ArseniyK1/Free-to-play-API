import axios from "axios";

export default class GamesService {
  static async getGameList() {
    try {
      const apiUrl =
        "https://cors-anywhere.herokuapp.com/https://www.freetogame.com/api/games";

      const response = await axios.get(apiUrl, {
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
