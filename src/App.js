import "./App.css";
import React, { useRef } from "react";
import { useState } from "react";

function App() {
  let count4 = 0;

  function task1() {
    return console.log("task2");
  }
  const task2Class = useRef();
  //const [task2Class, setTask2Class] = useState("");
  function task2() {
    // setTask2Class("active");
    task2Class.current.classList.add("active");
  }
  //let inputRef = useRef();
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    console.log(count4++);
  }

  const out5 = useRef();
  function task5(event) {
    if (event.target.checked) {
      out5.current.innerHTML = event.target.value;
    } else {
      out5.current.innerHTML = 0;
    }
    //console.log(event.target);
  }
  const [task6Class, setTask6Class] = useState("");
  const t6 = useRef(null);
  const out6 = useRef(null);
  function task6() {
    setTask6Class(t6.current.value);
    if (out6.current) {
      out6.current.innerHTML = t6.current.value;
    }
  }
  function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const out7 = useRef(null);
  function task7() {
    out7.current.style.background = `rgb(${randomValue(0, 255)}, ${randomValue(
      0,
      255
    )}, ${randomValue(0, 255)})`;
  }
  const [out8StateClass, setOut8State] = useState("");
  const out8 = useRef(null);
  function task8(event) {
    console.log(event);
    let res = !isNaN(event.key)
      ? (out8.current.innerHTML += 1)
      : (out8.current.innerHTML += 0);
    return res && setOut8State(res);
  }
  const t9 = useRef(null);
  const out9 = useRef(null);
  function task9() {
    out9.current.innerHTML = t9.current.value;
  }
  const t10 = useRef(null);

  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(parseInt(t10.current.value));
    console.log(ar10);
    t10.current.value = "";
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div
          className={`task-2 ${task2Class}`}
          onMouseEnter={task2}
          ref={task2Class}
        ></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" defaultValue="55" onChange={task5} />
        <div className="out-5" ref={out5}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={t6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={out6}>
          {task6Class}
        </div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={out7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyUp={task8}></input>
        <div className="out-8" ref={out8}>
          {out8StateClass}
        </div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9} ref={t9}></input>
        <div className="out-9" ref={out9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={t10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
