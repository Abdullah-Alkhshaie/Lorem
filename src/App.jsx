import React, { useState } from "react";
import { useEffect } from "react";
import data from "./data";
function App() {
  const [para, setPara] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(1);
  }, []);
  const handleGenreate = (e) => {
    e.preventDefault();
    let amount = parseInt(index);
    if (index <= 0) {
      amount = 1;
    }
    if (index > 8) {
      amount = 8;
    }
    const genreatePara = data.slice(0, amount);
    setPara(genreatePara);
  };
  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipusme</h3>
      <form className="lorem-form" onSubmit={handleGenreate}>
        <label htmlFor="amount">Paragraphs</label>
        <input
          type="number"
          name="amount"
          value={index}
          id="amount"
          min={1}
          max={data.length}
          onChange={(event) => setIndex(event.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article className="result">
        {para.map((para, index) => {
          return <p key={index}> {para}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
