import Header from "./Header.js";
import Card from "./Card.js";
import { useState } from "react";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Davlatov Muhriddin",
      description: "Lorem, ipsum dolor.",
      like: 0,
      dislike: 0,
    },
    {
      id: 2,
      title: "Davlatov Asilbek",
      description: "Lorem ipsum dolor sit.",
      like: 0,
      dislike: 0,
    },
    {
      id: 3,
      title: "Adizov G'olibbek",
      description: "Lorem ipsum dolor sit amet.",
      like: 0,
      dislike: 0,
    },
    {
      id: 4,
      title: "Qosimov Akobir",
      description: "Lorem ipsum dolor sit amet consectetur.",
      like: 0,
      dislike: 0,
    },
    {
      id: 5,
      title: "Karimov Abduvali",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing.",
      like: 0,
      dislike: 0,
    },
    {
      id: 6,
      title: "Shukurov Rizobek",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      like: 0,
      dislike: 0,
    },
  ]);

  return (
    <>
      <Header />
      <Card data={data} />
    </>
  );
}

export default App;
