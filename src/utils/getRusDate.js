export default function getRusDate(date) {
  const releaseDate = new Date(date);
  const day = releaseDate.getDate();
  const month = releaseDate.getMonth() + 1;
  const year = releaseDate.getFullYear();

  // Добавление ведущего нуля, если день месяца состоит из одной цифры
  const formattedDay = day < 10 ? `0${day}` : day;
  const formattedMonth = month < 10 ? `0${month}` : month;

  const formattedReleaseDate = `${formattedDay}.${formattedMonth}.${year}`;

  return formattedReleaseDate;
}
