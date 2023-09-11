"use client";

import { useState } from "react";

export function TextIn() {
  const [inputValue, setInputValue] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleInputChange = (event) => {
    //入力されたテキストをstateに入れる
    setInputValue(event.target.value);
  };
  //ボタンを押したらstateを変数に入れて返す
  const handelSearchClick = () => {
    setDisplayText(inputValue);
    console.log(inputValue);
    return displayText;
  };
  return (
    <>
      <div className="mt-2 flex justify-center space-x-1">
        <input
          className="border border-black"
          type="text"
          onChange={handleInputChange}
          placeholder="お店の名前を入力"
        />
        <button className="border border-black" onClick={handelSearchClick}>
          検索
        </button>
      </div>
    </>
  );
}
