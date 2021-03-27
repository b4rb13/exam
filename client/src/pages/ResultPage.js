import React, { useEffect } from "react";
// import Question from "../components/Question";

const ResultPage = ({ name, image, text, point, ...props }) => {

  // correctPoints: 20
  // numberOfCorrectAnswers: 1
  // numberOfIncorrectAnswers: 1
  // numberOfQuestions: 2
  // questions: (2) [{…}, {…}]
  // totalPoints: 40
  // userInput: (2) [1, 2]

  useEffect(() => {
      window.M.Collapsible.init(document.querySelectorAll(".collapsible"), {
        accordion: true,
      }
    );
  }, []);

  // const correctAnswers = (questions, answers) => {
  //   return questions.filter((q, i) => {
  //     if (typeof q.correctAnswer === "string") {
  //       return answers[i] === +q.correctAnswer;
  //     } else {
  //       return answers[i]
  //         .sort((a, b) => a - b)
  //         .every((answer) => q.correctAnswer.includes(answer));
  //     }
  //   });
  // };
  // const incorrectAnswers = (questions, answers) => {
  //   return questions.filter((q, i) => {
  //     if (typeof q.correctAnswer === "string") {
  //       return answers[i] !== +q.correctAnswer;
  //     } else {
  //       return answers[i]
  //         .sort((a, b) => a - b)
  //         .some((answer) => !q.correctAnswer.includes(answer));
  //     }
  //   });
  // };

  // console.log(props)
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-image">
              <img alt="snoop" src={image} />
              <span className="card-title">{name}</span>
            </div>
            <div className="card-content">
              <span className="resultPoints">
                Դու հավաքել ես <strong> {props.correctPoints} </strong> միավոր{" "}
                <strong> {props.totalPoints} </strong> հնարավորից
              </span>
              <ul className="collection with-header">
                <li className="collection-header">
                  <h4>Մանրամասներ</h4>
                </li>
                <li className="collection-item">
                  <div>
                    Հարցերի քանակը{" "}
                    <span className="secondary-content">
                      {props.numberOfQuestions}
                    </span>
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    Ճիշտ պարասխաններ{" "}
                    <span className="secondary-content">
                      {props.numberOfCorrectAnswers}
                    </span>
                  </div>
                </li>
                <li className="collection-item">
                  <div>
                    Սխալ պատասխաններ{" "}
                    <span className="secondary-content">
                      {props.numberOfIncorrectAnswers}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*<ul className="collapsible">*/}
        {/*<li>*/}
        {/*  <div className="collapsible-header">*/}
        {/*    <i className="material-icons icon-green">check</i>Տեսնել Ճիշտ*/}
        {/*    պատասխանները*/}
        {/*  </div>*/}
        {/*  <div className="collapsible-body">*/}
        {/*    {correctAnswers(props.questions, props.userInput).map(*/}
        {/*      (question, idx) => (*/}
        {/*        <Question*/}
        {/*          question={question}*/}
        {/*          answers={question.answers}*/}
        {/*          correctAnswer={question.correctAnswer}*/}
        {/*          index={idx}*/}
        {/*          correct*/}
        {/*        />*/}
        {/*      )*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <div className="collapsible-header">*/}
        {/*    <i className="material-icons icon-red">clear</i>Տեսնել սխալ*/}
        {/*    պատասխանները*/}
        {/*  </div>*/}
        {/*  <div className="collapsible-body">*/}
        {/*    {incorrectAnswers(props.questions, props.userInput).map(*/}
        {/*      (question, idx) => (*/}
        {/*        <Question*/}
        {/*          question={question}*/}
        {/*          answers={question.answers}*/}
        {/*          correctAnswer={question.correctAnswer}*/}
        {/*          userAnswers={props.userInput}*/}
        {/*          index={idx}*/}
        {/*        />*/}
        {/*      )*/}
        {/*    )}*/}
        {/*  </div>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <div className="collapsible-header">*/}
        {/*    <i className="material-icons icon-default">done_all</i>Տեսնել բոլոր*/}
        {/*    պատասխանները*/}
        {/*  </div>*/}
        {/*  <div className="collapsible-body">*/}
        {/*    <div>*/}
        {/*      <div className="questionWrapperBody">*/}
        {/*        {props.questions.map((question, idx) => (*/}
        {/*          <Question*/}
        {/*            question={question.question}*/}
        {/*            answers={question.answers}*/}
        {/*            correctAnswer={question.correctAnswer}*/}
        {/*            userAnswers={props.userInput[idx]}*/}
        {/*            index={idx}*/}
        {/*          />*/}
        {/*        ))}*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</li>*/}
      {/*</ul>*/}
    </>
  );
};

export default ResultPage;

// correctPoints: 20
// numberOfCorrectAnswers: 1
// numberOfIncorrectAnswers: 1
// numberOfQuestions: 2
// questions: (2) [{…}, {…}]
// totalPoints: 40
// userInput: (2) [1, 2]

// answerSelectionType: "single"
// answers: Array(4)
// 0: "this.getState()"
// 1: "this.prototype.stateValue"
// 2: "this.state"
// 3: "this.values"
// length: 4
// __proto__: Array(0)
// correctAnswer: "3"
// explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
// messageForCorrectAnswer: "Correct answer. Good job."
// messageForIncorrectAnswer: "Incorrect answer. Please try again."
// point: "20"
// question: "How can you access the state of a component from inside of a member function?"
// questionIndex: 1
// questionType: "text"
