import { useState } from "react";
import "./Faq.css";

function Faq() {
  const qanda = [
    {
      Question: "What services does your architectural firm provide?",
      Answer:
        "We offer comprehensive services including architectural design, interior design, 3D visualization, construction planning, project management, and renovation solutions tailored to residential, commercial, and industrial projects.",
    },
    {
      Question: "How long does the design and planning process take?",
      Answer:
        "The timeline depends on project size and complexity. Concept design typically takes 1–3 weeks, while detailed planning and revisions may take an additional 3–6 weeks.",
    },
    {
      Question: "Do you help with obtaining building permits?",
      Answer:
        "Yes. We prepare all necessary drawings, documents, and compliance reports, and assist clients throughout the permission and approval process with local authorities.",
    },
    {
      Question: "Can you design based on my ideas and requirements?",
      Answer:
        "Absolutely. We combine your vision, lifestyle needs, and aesthetic preferences with our expertise to create a functional and personalized design.",
    },
    {
      Question: "How much does an architectural project usually cost?",
      Answer:
        "Costs vary depending on project size, materials, design complexity, and service scope. We provide a transparent quotation after understanding your requirements in detail.",
    },
  ];
  return (
    <>
      <div className="faqquestionandanswersection" id="FAQ">
        <div className="headingtagsection">
            <h1 className="Faqsectionheading">Frequently Asked Question</h1>
            <h2 className="answerheadingoftheqaq">Helpful Answers to Your Most Important Architecture-Related Questions </h2>
        </div>
        {qanda.map((item, index) => {
          return (
            <div className="fullfaqcompp" key={index}>
              <FaqComp q={item.Question} a={item.Answer} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Faq;

import { IoIosArrowDown } from "react-icons/io";

export function FaqComp({ q, a }) {
  const [isopen, setopen] = useState(false);
  return (
    <>
      <div className="fullcomponentsectiondivv">
        <div className="questiondivvsection" onClick={() => setopen(!isopen)}>
          <h1 className="questionheadingtag">{q}</h1>
          <IoIosArrowDown className="downarrowicons" />
        </div>
        <div className={isopen ? "answerdivsection" : "answerdivsectionn"}>
          <h2 className="answertaggheading">{a}</h2>
        </div>
      </div>
    </>
  );
}
