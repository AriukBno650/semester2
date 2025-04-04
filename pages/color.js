
import React, {useState} from "react";
import { useRouter } from "next/router";

export default function Color() {
  const [color, setColor]= useState("");
  const router = useRouter();
  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg h-12   hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>
      <p>Change Color</p>
      <button className="border bg-red-800 py-4 px-6" onClick={() => {setColor("red");}}>Red</button>
      <button className="border bg-blue-800 py-4 px-6" onClick={() => {setColor("blue");}}>Blue</button>
      <button className="border bg-green-800 py-4 px-6" onClick={() => {setColor("green");}}>Green</button>
    </div>
  );
};