"use client";
import React from "react";
import { useEffect, useState } from "react";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/getCookie");
//   console.log("🚀 ~ file: page.js:5 ~ getData ~ res:", res.json());

//   let resData = await res.json();
//   if (resData.status === 200) {
//     return resData;
//   }
// }

const page = () => {
  //const mycookie = await getData();
  const [themeData, setThemeData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // Fetch data from the API route

      const res = await fetch("http://localhost:3000/api/getCookie");

      let resData = await res.json();
      //if (resData.status === 200) {
      setThemeData(resData);
      //}
    };
    fetchData();
  }, []);
  //   const cookie = cookies();
  //   const name = cookie.get("name");
  //console.log(mycookie);
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {/* <h2>Cookie Name:{cookie["name"]}</h2>
      <h2>Cookie Value: {cookie.value}</h2> */}
      <h2>Cookie Name: {themeData.name}</h2>
      <h2>Cookie Value: {themeData.value}</h2>
    </div>
  );
};

export default page;
