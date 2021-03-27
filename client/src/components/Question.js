import React from "react";

const Question = ({
  question,
  answers,
  correctAnswer,
  index,
  userAnswers,
  // correct,
  // userInput,
}) => {
  // console.log(question, "question");
  // console.log(answers, "answer");
  // console.log(correctAnswer, "correctAnswer");
  // const correctAnswerIndexes = () => {
  //   if (Array.isArray(correctAnswer)) {
  //     return correctAnswer.map((a) => Number(a) - 1);
  //   }
  //   return [Number(correctAnswer) - 1];
  // };

  // const incorrectAnswerIndexes = () => {
  //   if (Array.isArray(correctAnswer)) {
  //     return userAnswers.map((a) => Number(a) - 1);
  //   }
  //   return [Number(correctAnswer) - 1];
  // };

  const isAnswerCorrect = (index) => {

    if (Array.isArray(correctAnswer)) {
      return correctAnswer.every((ans, i) => userAnswers[i] === Number(ans));
    }
    return Number(correctAnswer) === Number(userAnswers);
  };


  return (
    <>
      <h3>
        {index + 1}: {question}
      </h3>
      {answers.map((answer, idx) => (
        <button
          key={idx}
          disabled={isAnswerCorrect()}
          style={{
            pointerEvents: "none",
          }}
          className={`answerBtn btn ${
            isAnswerCorrect() ? "correct" : "incorrect"
          }`}
        >
          {answer}
        </button>
      ))}
    </>
  );
};

export default Question;
