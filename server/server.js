import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const PORT = 3002;

app.use(cors());

// Маршрут для получения списка игр
app.get("/api/games", async (req, res) => {
  try {
    const response = await axios.get("https://www.freetogame.com/api/games");

    return res.json(response.data);
  } catch (error) {
    console.error("Error fetching game list:", error); // Добавь эту строку
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.get("/api/byId/:id", async (req, res) => {
  const { id } = req.params; // Извлекаем параметр id из запроса

  try {
    const response = await axios.get(
      `https://www.freetogame.com/api/game?id=${id}`
    );

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching game by ID:", error);
    res.status(500).json({ error: "An error occurred while fetching data." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
