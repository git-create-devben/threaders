"use client"

import React, { useState, useEffect } from "react";

const Page: React.FC = () => {
  const [username, setUsername] = useState("");
  const [data, setData] = useState<null | string>();

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://meta-threads.p.rapidapi.com/v1/user/id/?username=${username}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "7dd1c7dee4mshcfec6817a02ae0cp191b12jsn491b5cf51ed9",
          "X-RapidAPI-Host": "meta-threads.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  function fetchData() {
    fetchData();
  }

  return (
    <div className=" flex h-[50rem]">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            fetchData();
          }
        }}
        className="input input-bordered w-full max-w-xs m-auto block"
      />
      {data === null ? (
        <div className=" text-center m-auto text-4xl">Loading...</div>
      ) : data === "" ? (
        <div className=" text-white text-2xl">No data found.</div>
      ) : (
        <div className=" text-center m-auto text-4xl text-white" >{data} this is it</div>
      )}
    </div>
  );
};

export default Page;


