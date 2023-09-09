import { TextIn } from "./TextIn";

export async function Search() {
  const axios = require("axios");
  const apiKey = process.env.API_KEY;
  const defaultUrl = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
  const keyword = "スシロー";
  const format = "json";
  const start = 1;
  const count = 3;
  const apiUrl = `${defaultUrl}?key=${apiKey}&keyword=${keyword}&format=${format}&start=${start}&count=${count}`;

  function fetchData() {
    return axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data;

        return data;
      })
      .catch((error) => {
        console.error("APIリクエストエラー:", error.message);
      });
  }
  fetchData().then((data) => {
    const { results } = data;
    const shop = results.shop;
    const names = shop.map((shopItem) => shopItem.name);
    console.log(names);
    // namesをdivに渡したい
    return names;
  });

  return (
    <>
      <div>
        <TextIn />
      </div>
    </>
  );
}
