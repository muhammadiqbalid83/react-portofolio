import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import devEd from "./assets/dev-ed-wave.png";
// import "./App.css";

function App() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Muhammad Iqbal</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl">
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-2xl py-2 text-teal-600 font-medium">
            Muhammad Iqbal
          </h2>
          <h3>Frontend Engineer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">
            Freelancer providing services for programming and needs. Join me
            down below and let's get cracking
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>

        <div className="relative bg-gradient-to-b from-teal-500">
          <img src={devEd} alt="person" />
        </div>
      </section>
    </main>
  );
}

export default App;
