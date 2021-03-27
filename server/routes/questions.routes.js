const { Router } = require("express");
const Answers = require("../models/Answers");
const Users = require("../models/User");
// const config = require("config");
const mailjet = require("node-mailjet").connect(
  "2fb47407f40ab4a752ac9618fff795d9",
  "556df58c2f5d68388c122b1dac0a1396"
);
const auth = require("../middleware/auth.middleware");
const router = Router();

const mailHtml = `
<div
      style="
        width: 800px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        background-color: #999;
      "
    >
      <div
        style="
          font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial,
            sans-serif;
        "
      >
        <h1 style="text-align: center; color: rgb(83, 0, 83)">
          Դերենիկ ջան դու ավարտել ես JavaScript Advanced փուլը։
        </h1>
        <h4 style="text-align: center">
          Ստորև ներկայացված են թեստի արդյունքները
        </h4>
        <ul
          style="
            width: 700px;
            margin: 0 auto;
            list-style: none;
            padding-left: 0;
          "
        >
          <li
            style="
              border: 2px solid purple;
              margin: 15px;
              padding: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <span>Ճիշտ պատասխանները՝ </span>
            <span>30</span>
          </li>
          <li
            style="
              border: 2px solid purple;
              margin: 15px;
              padding: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <span>Սխալ պատասխանները՝ </span>
            <span>30</span>
          </li>
          <li
            style="
              border: 2px solid purple;
              margin: 15px;
              padding: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <span>Հարցերի քանակը՝ </span>
            <span>30</span>
          </li>
          <li
            style="
              border: 2px solid purple;
              margin: 15px;
              padding: 10px;
              display: flex;
              justify-content: space-between;
            "
          >
            <div>
              <span>Միավորները՝ </span>
              <span>30</span>
            </div>
            <div>
              <span>30</span>
              <span>հանրավորից</span>
            </div>
          </li>
        </ul>
        <h5 style="text-align: center;">
          <em
            >Լավ սովորի, լիքը կարդա, նոր բաներ փորձի ու հիշի  
            <strong style="font-weight: 700; font-size: 18px;">\`   PhP֊ն լավ բան չի </strong>
          </em>
        </h5>
      </div>
    </div>`

router.post("/userAnswer", auth, async (req, res) => {
  try {
    // const baseUrl = config.get("baseUrl");
    const { info } = req.body;
    // const code = shortId.generate();

    // const existing = await Answers.findOne({ from });
    // if (existing) {
    //   return res.json({ link: existing });
    // }

    const user = await Users.findOne({ _id: req.user.userId });
    console.log(user);

    const answer = new Answers({
      ...info,
      owner: req.user.userId,
    });

    const request = mailjet
      .post("send", {'version': 'v3.1'})
      .request({
        "Messages":[
          {
            "From": {
              "Email": "deren.kha@gmail.com",
              "Name": "Derenik Khachatryan"
            },
            "To": [
              {
                "Email": user.email,
                "Name": user.name
              }
            ],
            "Subject": "JavaScript Advanced: Քննության արդյունքներ",
            "TextPart": "JavaScript Advanced: Քննության արդյունքներ",
            "HTMLPart": mailHtml,
            "CustomID": "AppGettingStartedTest"
          }
        ]
      })

    await answer.save();
    request
      .then((result) => {
        console.log(result.body)
      })
      .catch((err) => {
        console.log(err.statusCode)
      })
    res.status(201).json({ answer });


  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, try again",
    });
  }
});

router.get("/", auth, async (req, res) => {
  try {
    const answers = await Answers.find({ owner: req.user.userId });

    res.json(answers);
  } catch (e) {
    res.status(500).json({
      message: "Something went wrong, try again",
    });
  }
});
// router.get("/:id", auth, async (req, res) => {
//   try {
//     const link = await Link.findById(req.params.id);
//     res.json(link);
//   } catch (e) {
//     res.status(500).json({
//       message: "Something went wrong, try again",
//     });
//   }
// });

module.exports = router;
