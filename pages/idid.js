import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";




export default function Id() {
  const router = useRouter();
  const [data, setData] = useState({
    touristAttractions: [],
    clothes: [],
    instruments: [],
    provinces: [],
    historicalTools: [],
    ethnicGroups: [],
    historicalFigures: [],
  });
  const [search, setSearch] = useState("");
  const [grid, setGrid] = useState(true);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://mongol-api-rest.vercel.app/touristAttractions");
        const response1 = await fetch("https://mongol-api-rest.vercel.app/clothes");
        const response2 = await fetch("https://mongol-api-rest.vercel.app/instruments");
        const result = await response.json();
        const result1 = await response1.json();
        const result2 = await response2.json();
        const response3 = await fetch("https://mongol-api-rest.vercel.app/provinces");
        const result3 = await response3.json();
        const response4 = await fetch("https://mongol-api-rest.vercel.app/historicalTools");
        const result4 = await response4.json();
        const response5 = await fetch("https://mongol-api-rest.vercel.app/ethnicGroups");
        const result5 = await response5.json();
        const response6 = await fetch("https://mongol-api-rest.vercel.app/historicalFigures");
        const result6 = await response6.json();
        setData({
          touristAttractions: result.touristAttractions,
          clothes: result1.clothes,
          instruments: result2.instruments,
          provinces: result3.provinces,
          historicalTools: result4.historicalTools,
          ethnicGroups: result5.ethnicGroups,
          historicalFigures: result6.historicalFigures,
        });
      } catch (error) {
        console.log(error);
      }
    };




    fetchData();
  }, []);








  const filterData = (category) => {
    if (!search) return category;
    return category.filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  };




  return (
    <div className="w-screen h-full bg-gray-400 flex flex-col items-center justify-around px-4">
      <div className="flex items-center justify-evenly w-screen h-24">
      <button className=" bg-white text-black font-mono px-5 py-2 border rounded-lg   hover:shadow-xl hover:bg-gray-300 mx-3" onClick={() =>router.back()}>Back</button>
        <div className="flex items-start justify-center h-1/5 w-screen">
          <input
            type="search"
            placeholder="Search by name"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-300 transition -translate-y-3 text-black ease-out delay-250 hover:shadow-md hover:shadow-gray-500 rounded-2xl px-3 py-2 w-1/2"
          />
        </div>
        <button
          className="bg-white flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl"
          onClick={() => {
            setGrid(!grid);
          }}
        >
          {grid ? "Hide Grid" : "Show Grid"}
        </button>
      </div>




      <div className={grid ? "items-center xl:grid-cols-4 grid-cols-1 grid gap-6 h-scroll md:grid-cols-3 sm:grid-cols-2" : "justify-center w-5/6 h-1/2 space-y-4 "}>
      {filterData.length >0 ? (
        filterData(data.touristAttractions).map((data) => (
          <div key={data?.id} className={grid ? "items-center justify-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-between bg-gray-100 w-full  px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black h-44"}>
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500 w-4/5 my-2 text-start"}>{data?.description}</p>
              <p className={grid ? "text-gray-500 mx-4 my-2 text-center" : "text-gray-500  my-2 text-center"}>{data?.address?.country}</p>
            </div>
            <button onClick={() =>router.push(`/details/${data.id}`)}
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(
          <div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
      )}
 




  {filterData.length >0 ? (filterData(data.clothes).map((data) => (
          <div key={data?.id} className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black h-44"}>
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.description}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.timePeriod}</p>
           
            </div>
            <button onClick={() =>router.push(`/details/${data.id}`)}
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(
        <div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
      )}




{filterData.length >0 ? (filterData(data.instruments).map((data) => (
          <div key={data?.id}  className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full h-44 px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black "}>
            <img src={data?.images}  className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.description}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.timePeriod}</p>
            </div>
            <button onClick={() => router.push(`/details/${data.id}`)}
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(
        <div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
      )}




{filterData.length >0 ? (filterData(data.historicalFigures).map((data) => (
          <div key={data?.id} className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full h-44 px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black "}>
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.accomplishment}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.timePeriod}</p>
            </div>
            <button
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(
        <div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
      )}




{filterData.length >0 ? (filterData(data.historicalTools).map((data) => (
          <div key={data?.id} className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full h-44 px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black"}>
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.description}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.timePeriod}</p>
            </div>
            <button
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(
        <div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
      )}
{filterData.length >0 ? (filterData(data.ethnicGroups).map((data) => (
          <div key={data?.id} className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full h-44 px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black "} >
            <img src={data?.images} className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id}</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.linguistic}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.population} people</p>
            </div>
            <button
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))
      ):(<div className="w-full h-5/6 flex flex-col justify-start items-center">
        <p className="text-gray-700">No results found</p>
    </div>)}




    {filterData.length >0 ? (filterData(data.provinces).map((data) => (
          <div key={data?.id }  className={grid ? "items-center bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-col rounded-xl text-black h-1/7" : "justify-start bg-gray-100 w-full h-full px-4 py-5 transition ease-out delay-250 hover:shadow-lg hover:shadow-gray-500 flex flex-row rounded-xl text-black h-1/7"} >
            <img src="https://scontent.fuln1-1.fna.fbcdn.net/v/t39.30808-6/326498436_1574880736364874_3080204893058889679_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=GAP-FFnTzAYQ7kNvgETWHX2&_nc_oc=AdmGyZ0cWu_qcqu2TcCHodx5RZ4C3S0m3RFqGzvB-KKHlssUP7ke_YPo8DfJoLc62oM&_nc_zt=23&_nc_ht=scontent.fuln1-1.fna&_nc_gid=V-h_VX1T1qOlkB3NoKjrpQ&oh=00_AYFUkCJnXPauJXkBRaBe7wloVyrwH5qEMFuxgkva-rHGpQ&oe=67ED91D8" className={grid ? "w-64 h-44 object-cover rounded-xl" : "object-cover rounded-xl h-22 w-32"}></img>
            <div className={grid?"flex flex-col items-center":"w-4/5 mx-4 flex flex-col items-start"}>
            <h1 className="text-xl font-bold text-black">{data?.name}</h1>
            <h2 className="text-lg font-medium text-gray-700">Id: {data?.id }</h2>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.capital}</p>
            <p className={grid ? "text-gray-500 mx-4 my-2 text-center":"text-gray-500  my-2 text-start"}>{data?.population} people and {data?.area} square kilometers</p></div>
            <button
          className="bg-gray-300 flex justify-center items-center transition ease-out delay-250 hover:shadow-md hover:shadow-gray-500 text-black w-32 h-12 border rounded-xl "
        >
          See more
        </button>
          </div>
        ))):(
<div className="w-full h-5/6 flex flex-col justify-start items-center">
                      <p className="text-gray-700">No results found</p>
                  </div>
        )}
     
      </div>
    </div>
  );
}
