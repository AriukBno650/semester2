
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter();
  return (
    <div className="h-sc w-full bg-gradient-to-r from-gray-900 via-violet-950 to-gray-900 flex flex-col items-center text-white">

      <nav className=" z-60 fixed top-4 w-[70%] bg-black/25 backdrop-blur-lg rounded-3xl text-md flex justify-between items-center px-8 py-3 shadow-lg">
        <img src="https://images.scalebranding.com/modern-a-letter-logo-2de95217-e409-4e33-847f-631a0e666caf.jpg" className="h-10 w-10  rounded-full shadow-xl" />
        <ul className="flex gap-6 text-sm font-semibold">
          <li><a href="#home" className="hover:text-gray-300 duration-300 transition-all ease-in">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300 duration-300 transition-all ease-in">About</a></li>
          <li><a href="#skills" className="hover:text-gray-300 duration-300 transition-all ease-in">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-300 duration-300 transition-all ease-in">Projects</a></li>
        </ul>
      </nav>


      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-6">
        <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          Hi, Im Ariunbayar
        </h1>
        <p className="text-gray-200 mt-4 text-lg w-xl">
          I create, develop modern websites and designs.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 rounded-xl shadow-lg hover:bg-purple-700 duration-300 transition-all ease-in-out">
          <a href="#projects">View My Projects</a>
        </button>
      </section>

      <section id="about" className="bg-white flex flex-col items-center justify-center h-200 w-full text-center px-6">
        <div className="flex flex-col justify-center items-center">
        <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">About Me</h2>
        <p className="text-black mt-4 text-lg w-2xl">
          Im a passionate programmer and  UI/UX designer who loves developing 
          fancy and modern websites. With <span className="font-bold">2 years of experience</span> in programming and UI/UX design, 
          Im capable to develop <span className="font-bold">websites</span> and some small <span className="font-bold">projects</span>.
        </p>
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-violet-600 rounded-xl shadow-lg hover:bg-violet-700 duration-300 transition-all ease-in-out">
            <a href="#skills">Learn More</a>
          </button>
          <button className="px-6 py-3 bg-gray-700 rounded-xl shadow-lg hover:bg-gray-800 duration-300 transition-all ease-in-out">
            <a href="#footer">Contact Me</a>
          </button>
        </div>
        </div>
      </section>
      <section id="skills" className="w-full h-screen bg-gradient-to-r from-blue-950 via-indigo-800 to-indigo-950 flex flex-col items-center justify-around">
        <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500 translate-y-16 z-10">My Skills</h2>
        <p className="text-white mt-4 text-lg text-center w-xl">
          During those 2 years, I have mastered many programs and coding languages to craft my projects.
          You can see it below.
        </p>
        <div className="w-1/3 h-3/5  grid grid-cols-4 gap-8 ">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-15"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/1532/1532556.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png" className="w-22 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/6132/6132222.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png" className="w-28 h-20 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/226/226777.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://static-00.iconduck.com/assets.00/flutter-icon-1651x2048-ojswpayr.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968472.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        <img src="https://static-00.iconduck.com/assets.00/apps-figma-icon-2048x2048-ctjj5ab7.png" className="w-24 h-24 transition-all ease-in duration-300 hover:saturate-25"></img>
        </div>
      </section>
      
      <section id="projects" className="w-full h-screen bg-gradient-to-r from-sky-900 via-teal-800 to-teal-950 flex flex-col items-center justify-center text-white">
        <div className="flex flex-col items-center justify-center h-1/3 w-full" >
        <h2 className="text-3xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-teal-500">
          My Projects
        </h2>
        <p className="text-gray-200 mt-4 text-lg text-center w-xl translate-y-6">
          Here are some of the projects I have worked on. Check them out and explore!
        </p>
        </div>
        <div className=" w-8/9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 -translate-y-6 px-6">
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">CV Card</h3>
            <p className="text-gray-500 mt-2">Probably my first project using NextJs.</p>
            <button onClick={() =>router.push("cv")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Color Button</h3>
            <p className="text-gray-500 mt-2">If you click the one of the buttons, background will change color.</p>
            <button onClick={() =>router.push("color")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Weather Web</h3>
            <p className="text-gray-500 mt-2">I converted a web front-end, that i made last year, into nextJs.</p>
            <button onClick={() =>router.push("tsagagaar")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Search Engine</h3>
            <p className="text-gray-500 mt-2">You can search any member you want from MongolZ.</p>
            <button onClick={() =>router.push("data2")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Grid Engine</h3>
            <p className="text-gray-500 mt-2">Click grid, you can see the boxes in grid. Click again, boxes will get back to its default form.</p>
            <button onClick={()=> router.push("data")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Mongol API</h3>
            <p className="text-gray-500 mt-2">I fetched the data from Mongol API, and made it better looking.</p>
            <button onClick={() =>router.push("idid")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
          <div className="bg-white p-6 flex flex-col items-start justify-between rounded-xl shadow-lg hover:shadow-2xl duration-300 ease-in transition-all">
            <h3 className="text-xl font-semibold text-black">Seconds</h3>
            <p className="text-gray-500 mt-2">I did what teacher told us to do.</p>
            <button onClick={() =>router.push("timer")} className="bg-teal-700 py-2 px-4 rounded-xl mt-3 hover:bg-teal-900 duration-300 ease-in transition-all">View Project</button>
          </div>
        </div>
      </section>
      <footer class="flex flex-col space-y-10 justify-center m-10">

    <nav class="flex justify-center gap-6 font-semibold">
        <a class="hover:text-gray-300 duration-300 ease-in transition-all text-white" href="#home">Home</a>
        <a class="hover:text-gray-300 duration-300 ease-in transition-all text-white" href="#about">About</a>
        <a class="hover:text-gray-300 duration-300 ease-in transition-all text-white" href="#skills">Skills</a>
        <a class="hover:text-gray-300 duration-300 ease-in transition-all text-white" href="#projects">Projects</a>
    </nav>

    <div class="flex justify-center space-x-8">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" >
            <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" className="w-10 h-10 transition-all ease-in duration-300 hover:saturate-15" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" className="w-10 h-10 transition-all ease-in duration-300 hover:saturate-15" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" className="w-10 h-10 transition-all ease-in duration-300 hover:saturate-15" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/fluent/30/000000/twitter.png" className="w-10 h-10 transition-all ease-in duration-300 hover:saturate-15" />
        </a>
    </div>
    <p class="text-center text-white font-medium">&copy; 2025 My Portfolio Web. All rights reservered.</p>
</footer>
    </div>
  );
}