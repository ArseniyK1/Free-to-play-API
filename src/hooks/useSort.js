import { useMemo } from "react";

const sortByReleaseDate = (a, b) =>
  new Date(b.release_date) - new Date(a.release_date);

// Функция для сортировки по названию
const sortByTitle = (a, b) => a.title.localeCompare(b.title);

export const useSortPlatform = (array, sort) => {
  const sortedGames = useMemo(() => {
    const { platform } = sort;
    if (platform) {
      return arr.filter((element) => element.platform.includes(platform));
    }
    return arr;
  }, [array, sort]);

  return sortedGames;
};
