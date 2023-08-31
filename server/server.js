import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3002;

app.use(cors());

app.get("/api/games", async (req, res) => {
  try {
    const response = await axios.get("https://www.freetogame.com/api/games");

    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching game list:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.get("/api/byId/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(`https://www.freetogame.com/api/game`, {
      params: {
        id: id,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching game by ID:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.get("/api/games/popularity", async (req, res) => {
  try {
    const response = await axios.get("https://www.freetogame.com/api/games", {
      params: {
        "sort-by": "popularity",
      },
    });
    console.log(response);

    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching game list:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
