import axios from "axios";
export async function Search() {
  const apiKey = process.env.API_KEY;
  const defaultUrl = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";

  const keyword = "スターバックス"; //ここをstateで変えたい
  const format = "json";
  const start = 1;
  const count = 5;
  const apiUrl = `${defaultUrl}?key=${apiKey}&keyword=${keyword}&format=${format}&start=${start}&count=${count}`;

  try {
    const res = await axios.get(apiUrl);

    const restaurantNames = res.data.results.shop.map((item, i) => (
      <div key={i}>{`${item.name}`}</div>
    ));
    return restaurantNames;
  } catch (error) {
    console.log("失敗しました", error);
  }

  return <></>;
}
