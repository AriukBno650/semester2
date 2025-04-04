
import React from 'react';
import { useRouter } from "next/router";

export default function Cv(){
    const router = useRouter();
    return(
        
        <div className="w-screen h-screen bg-slate-600 flex justify-center items-center ">
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg   hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>
        <div className="w-1/5 h-1/2 bg-white rounded-xl flex flex-col items-center shadow-black-500/50">
            <div className="w-full h-1/2 flex flex-col justify-end items-center translate-y-4">
                <div className="bg-[url('https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg')] bg-center bg-cover w-40 aspect-square rounded-full border"></div>
                <h1 className="text-black font-bold text-2xl">Ariuk bno</h1>
                <h2 className="font-normal text-xl text-black">Software Engineer</h2>
            </div>
            <div className="w-full h-2/5 flex flex-col justify-start items-center translate-y-8">
                <p className="font-light text-lg text-black">999-999-9999</p>
                <p className="font-light text-lg text-black">nest22261002@nhs.edu.mn</p>
                <p className="font-light text-lg text-black">ID - 22261002</p>
            </div>
            <footer className="w-full h-1/5 flex justify-center items-start translate-y-2">
                <i className="fa-brands fa-facebook text-black text-2xl px-2"></i>
                <i className="fa-brands fa-instagram text-black text-2xl px-2"></i>
                <i className="fa-brands fa-linkedin text-black text-2xl px-2"></i>
                <i className="fa-brands fa-twitter text-black text-2xl px-2"></i>
            </footer>
        </div>
    </div>
    );
    
};