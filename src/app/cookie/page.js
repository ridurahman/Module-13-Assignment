import React from "react";

async function getData() {
  const res = await fetch("http://localhost:3000/api/getCookie");
  console.log("🚀 ~ file: page.js:5 ~ getData ~ res:", res.json());

  let resData = await res.json();
  if (res.status === 200) {
    return resData;
  }
}

const page = async () => {
  const mycookie = await getData();

  //   const cookie = cookies();
  //   const name = cookie.get("name");
  console.log(mycookie);
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      {/* <h2>Cookie Name:{cookie["name"]}</h2>
      <h2>Cookie Value: {cookie.value}</h2> */}
      <h2>Cookie Name:{mycookie["name"]}</h2>
      <h2>Cookie Value: {mycookie["value"]}</h2>
    </div>
  );
};

export default page;
