import React, { useState } from "react";
import style from "../Components/ScoreboardPage.module.css";

const ScoreboardPage = () => {
  const [total, setTotal] = useState(0);
  const [total1, setTotal1] = useState(0);
  const [array, setArray] = useState([]);
  const [array1, setArray1] = useState([]);

  let sum = 0;

  const hit = () => {
    for (let i = 0; i < 10; i++) {
      let arr = [];
      while (arr.length < 6) {
        let x = Math.floor(Math.random() * Number(7));
        if (x == 5) {
          x = 2;
        } else if (x == 0) {
          arr.push(x);
          break;
        }
        arr.push(x);
      }

      console.log(array);

      let obj = {
        data: arr,
      };
      // setPlayers(obj);
      setArray([...array, obj]);
    }
  };

  const hit2 = () => {
    for (let i = 0; i < 10; i++) {
      let arr = [];
      while (arr.length < 6) {
        let x = Math.floor(Math.random() * Number(7));
        if (x == 5) {
          x = 2;
        } else if (x == 0) {
          arr.push(x);
          break;
        }
        arr.push(x);
      }
      let obj = {
        data: arr,
      };
      // setPlayers(obj);
      setArray1([...array1, obj]);
    }
  };
  console.log(array[0] === undefined ? "" : array[0].data);
  return (
    <div>
      <div className={style.heading}>
        <h1>BOOK CRICKET</h1>
      </div>
      <div className={style.Container1}>
        <div className={style.middleSection}>
          <div>
            <p>CSK</p>
            <h3>0</h3>
            <div>
              <button onClick={hit}>Press 1</button>
            </div>
          </div>

          <div>
            <div>
              <p>Hit the value here to score</p>
              <p>Timer</p>
              <h1>60</h1>
            </div>
          </div>

          <div>
            <p>MI</p>
            <h3>0</h3>
            <div>
              <button onClick={hit2}>Press 2</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.Container1}>
        <div className={style.teamname1}>
          <p>CSK</p>
          <div>
            {" "}
            <button>Start Game</button>
          </div>
          <p>MI</p>
        </div>
      </div>
      <hr />

      <h1>A Scoreboard Table</h1>

      <div className={style.Container}>
        <div>
          {" "}
          <h1>Chennai Super Kings</h1>
          <table className={style.customers}>
            <tr>
              <th scope="col">Players</th>
              <th scope="col">B-1</th>
              <th scope="col">B-2</th>
              <th scope="col">B-3</th>
              <th scope="col">B-4</th>
              <th scope="col">B-5</th>
              <th scope="col">B-6</th>
              <th scope="col">Totoal</th>
            </tr>
            <tr>
              <th scope="row">player 1</th>
              {array[0]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 2</th>
              {array[1]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 3</th>
              {array[2]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 4</th>
              {array[3]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 5</th>
              {array[4]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 6</th>
              {array[5]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 7</th>
              {array[6]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 8</th>
              {array[7]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 9</th>
              {array[8]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 10</th>
              {array[9]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
          </table>
        </div>

        <div>
          {" "}
          <h1>Mumbai Indians</h1>
          <table className={style.customers}>
            <tr>
              <th scope="col">Players</th>
              <th scope="col">B-1</th>
              <th scope="col">B-2</th>
              <th scope="col">B-3</th>
              <th scope="col">B-4</th>
              <th scope="col">B-5</th>
              <th scope="col">B-6</th>
              <th scope="col">Totoal</th>
            </tr>
            <tr>
              <th scope="row">player 1</th>
              {array1[0]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 2</th>
              {array1[1]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 3</th>
              {array1[2]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 4</th>
              {array1[3]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 5</th>
              {array1[4]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 6</th>
              {array1[5]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 7</th>
              {array1[6]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 8</th>
              {array1[7]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 9</th>
              {array1[8]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
            <tr>
              <th scope="row">player 10</th>
              {array1[9]?.data.map((ele) => {
                return <td>{ele}</td>;
              })}
            </tr>
          </table>
        </div>
      </div>

      <hr />
      <br />

      <div className={style.genrateButton}>
        <button>Generate Result</button>
      </div>
    </div>
  );
};

export default ScoreboardPage;
