import { useState } from "react";
import { useRouter } from "next/router";

const usersData = [
    { "id": 1, "name": "Mzinho", "email": "mzinho@gmail.com"},
    { "id": 2, "name": "Senzu", "email": "Senzu@gmail.com"},
    { "id": 3, "name": "Blitz", "email": "blitz@gmail.com"},
    { "id": 4, "name": "Maaraa", "email": "maaraa@gmail.com"},
    { "id": 5, "name": "Mzinho", "email": "mzinho@gmail.com"},
    { "id": 6, "name": "Blitz", "email": "blitz@gmail.com"},
    { "id": 7, "name": "Senzu", "email": "senzu@gmail.com"},

];

export default function Data2(){
    const [search, setSearch] = useState(" ");
    const router = useRouter();

    const filteredData = usersData.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
    console.log("Search", search);

    return (
        <div className="h-screen w-screen bg-white p-8 flex flex-col items-center overflow-y-scroll overflow-x-hidden">
            <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg  -translate-y-5 hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>
            <h1 className="text-4xl text-black font-bold">Players list</h1>
            <div className="flex items-start justify-center h-1/5 my-6  w-screen">
                <input type="search" onChange={(test) => setSearch(test.target.value)} className="border-2 text-black border-black rounded w-5/6"></input>

            </div>
            {filteredData.length > 0 ? (
                <div className="w-full h-5/6 flex flex-col items-center">
                <div className= " w-full space-y-4">
                    {filteredData.map((filteredData, index) => {return <div key={index} className="  w-full px-4 py-8 flex flex-col border border-black rounded-xl text-black h-1/7"> 
                        <h1 className="text-xl font-bold text-black ">{filteredData.name}</h1>
                        <p className="text-gray-700">{filteredData.email}</p>
                    </div>
                })}
                </div>
            </div>
            ) : (
                <div className="w-full h-5/6 flex flex-col justify-start items-center">
                    <p className="text-gray-700">User not found</p>
                </div>
            )}
        </div>
    );
}