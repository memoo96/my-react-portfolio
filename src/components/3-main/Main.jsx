import { useState } from "react";
import "./main.css";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "motion/react";

export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const smallArr = item.category.find((myitem) => {
        return myitem === buttonCategory;
      });
      return smallArr === buttonCategory;
    });
    setArr(newArr);
  };

  return (
    <main className="flex">
      <section className="flex left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("javascript");
          }}
          className={currentActive === "javascript" ? "active" : null}
        >
          Javascript
        </button>
        <button
          onClick={() => {
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React
        </button>
      </section>

      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ damping: 8,type:"spring",stiffness:50 }}
                key={item.imgPath}
                className="card"
              >
                <img src={item.imgPath} alt="" />
                <div className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.projectDesc}</p>
                  <div className="icons flex">
                    <div style={{ gap: "11px" }} className="flex">
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="more flex" href={item.link} target="blank">
                      more <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
