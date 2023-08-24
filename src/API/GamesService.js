import axios from "axios";

export default class GamesService {
  static async getGameList() {
    try {
      const corsProxyUrl = "https://cors-anywhere.herokuapp.com/";
      const apiUrl = "https://www.freetogame.com/api/games";

      const response = await axios.get(corsProxyUrl + apiUrl);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
