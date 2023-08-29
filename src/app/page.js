"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { setCookie } from "./api-call/set-cookie";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/setCookie");
//   if (res.status === 201) {
//     return res;
//   }
// }

// useEffect()

const page = async () => {
  // const setCookie = await getData();

  const handleCookie = () => {
    setCookie();
  };
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <button onClick={handleCookie}>Set Cookie</button>
      <Link href="/cookie">View Cookie</Link>
    </div>
  );
};

export default page;
