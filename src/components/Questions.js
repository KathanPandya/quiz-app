import React, { useEffect, useState } from "react";
import ResetGame from "./ResetGame";
const Questions = () => {
  var questions = [
    {
      Question:
        "Which was the 1st non Test playing country to beat India in an international match?",
      OptionA: "Canada",
      OptionB: "SriLanka",
      OptionC: "Zimbabwe",
      OptionD: "India",
    },
    {
      Question: "Which county did Ravi Shastri play for?",
      OptionA: "Glamorgan",
      OptionB: "Leicestershire",
      OptionC: "Gloucestershire",
      OptionD: "Lancashire",
    },
    {
      Question:
        "Who is the first Indian woman to win an Asian Games gold in 400m run?",
      OptionA: "M.L.Valsamma",
      OptionB: "P.T.Usha",
      OptionC: "Kamaljit Sandhu",
      OptionD: "K.Malleshwari",
    },
    {
      Question: "Ricky Ponting is also known as what?",
      OptionA: "The Rickster",
      OptionB: "Ponts",
      OptionC: "Ponter",
      OptionD: "Punter",
    },
  ];

  const [userPoints, setUserPoints] = useState(0);
  const [buttonState, setButtonState] = useState(
    Array(questions.length).fill(null)
  );

  useEffect(() => {
    console.log("Count in useEffect:", buttonState);
  }, [buttonState]);

  //to check the answer and update the points as well as disable the buttons
  const answerCheck = (userAnswer, index) => {
    const answers = ["Zimbabwe", "Lancashire", "P.T.Usha", "The Rickster"];

    if (answers[index] === userAnswer) {
      pointCalculator();
      const updatedButtonState = [...buttonState];
      updatedButtonState[index] = true;
      setButtonState(updatedButtonState);
      console.log(buttonState);
      return true;
    } else {
      const updatedButtonState = [...buttonState];
      updatedButtonState[index] = false;
      setButtonState(updatedButtonState);
      console.log(buttonState);
      return false;
    }
  };

  //to calculate the points of user
  const pointCalculator = () => {
    setUserPoints((prev) => prev + 1);
  };
  return (
    <div className="questions">
      <div>
        <h3>User Points:- {userPoints}</h3>
      </div>
      <div>
        {questions.map((question, index) => {
          return (
            <div key={index} className = "quesContainer">
              <h5>{question.Question}</h5>
              <div className="buttons">
                <button
                  disabled={buttonState[index] || buttonState[index] === false}
                  onClick={() => answerCheck(question.OptionA, index)}
                >
                  {question.OptionA}
                </button>
                <button
                  disabled={buttonState[index] || buttonState[index] === false}
                  onClick={() => answerCheck(question.OptionB, index)}
                >
                  {question.OptionB}
                </button>
                <button
                  disabled={buttonState[index] || buttonState[index] === false}
                  onClick={() => answerCheck(question.OptionC, index)}
                >
                  {question.OptionC}
                </button>
                <button
                  disabled={buttonState[index] || buttonState[index] === false}
                  onClick={() => answerCheck(question.OptionD, index)}
                >
                  {question.OptionD}
                </button>
              </div>

              {buttonState[index] === true && <div>"Correct Answer"</div>}
              {buttonState[index] === false && <div>"Wrong Answer"</div>}
            </div>
          );
        })}
      </div>
      <ResetGame
        setButtonState={setButtonState}
        setUserPoints={setUserPoints}
        questions={questions}
      />
    </div>
  );
};

export default Questions;
