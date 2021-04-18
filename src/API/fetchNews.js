export default async function fetchNews(query) {
  const apiKey = "19a55dd2e1794c1b95df5fa8420418e8";
  // const apiKey = "fba9f5931dd5400080368938a8ec863f";
  const url =
    "https://newsapi.org/v2/top-headlines?" +
    "country=tr&" +
    `apiKey=${apiKey}` +
    `&q=${query}`;


  const response = await fetch(url)
  return response.json()
}

