import React, { useContext } from "react";
import snoop from "../assets/snoop.webp";
import Quiz from "react-quiz-component/lib/Quiz";
import { quiz } from "../quiz";
import ResultPage from "../pages/ResultPage";
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
// import mailjet from 'node-mailjet'

const LinksList = ({ name, text }) => {
  const auth = useContext(AuthContext);
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   mailjet.connect('2fb47407f40ab4a752ac9618fff795d9', '556df58c2f5d68388c122b1dac0a1396')
  //   const request = mailjet
  //     .post("send", {'version': 'v3.1'})
  //     .request({
  //       "Messages":[
  //         {
  //           "From": {
  //             "Email": "deren.kha@gmail.com",
  //             "Name": "Derenik"
  //           },
  //           "To": [
  //             {
  //               "Email": "deren.kha@gmail.com",
  //               "Name": "Derenik"
  //             }
  //           ],
  //           "Subject": "Greetings from Mailjet.",
  //           "TextPart": "My first Mailjet email",
  //           "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
  //           "CustomID": "AppGettingStartedTest"
  //         }
  //       ]
  //     })
  //
  //   request
  //     .then((result) => {
  //       console.log(result.body)
  //     })
  //     .catch((err) => {
  //       console.log(err.statusCode)
  //     })
  //
  // }, [])

  const { request } = useHttp();

  // useEffect(() => {
  //   const getInfo = async () => {
  //     if (data) {
  //       const info = await request("/api/answers", "GET", null, {
  //         Authorization: `Bearer ${auth.token}`,
  //       });
  //       console.log(info, "info");
  //     }
  //   };
  //   getInfo();
  // }, [data]);

  const handleComplete = async ({
    correctPoints,
    numberOfCorrectAnswers,
    numberOfIncorrectAnswers,
    numberOfQuestions,
    totalPoints,
  }) => {
    try {
      await request(
        "/api/answers/userAnswer",
        "POST",
        {
          info: {
            correctPoints,
            numberOfCorrectAnswers,
            numberOfIncorrectAnswers,
            numberOfQuestions,
            totalPoints,
          },
        },
        {
          Authorization: `Bearer ${auth.token}`,
        }
      );
      // setData(data);
    } catch (e) {}
  };

  return (
    <Quiz
      quiz={quiz}
      showDefaultResult={false}
      showInstantFeedback={true}
      onComplete={handleComplete}
      customResultPage={(props) => (
        <ResultPage image={snoop} name={name} text={text} {...props} />
      )}
    />
  );
};

export default LinksList;
