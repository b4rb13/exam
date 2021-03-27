// export const quiz =  {
//   "quizTitle": "React Quiz Component Demo",
//   "quizSynopsis": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
//   "questions": [
//     {
//       "question": "How can you access the state of a component from inside of a member function?",
//       "questionType": "text",
//       // "questionPic": "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
//       "answerSelectionType": "single",
//       "answers": [
//         "this.getState()",
//         "this.prototype.stateValue",
//         "this.state",
//         "this.values"
//       ],
//       "correctAnswer": "3",
//       "messageForCorrectAnswer": "Correct answer. Good job.",
//       "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//       "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "point": "20"
//     },
//     {
//       "question": "ReactJS is developed by _____?",
//       "questionType": "text",
//       "answerSelectionType": "single",
//       "answers": [
//         "Google Engineers",
//         "Facebook Engineers"
//       ],
//       "correctAnswer": "2",
//       "messageForCorrectAnswer": "Correct answer. Good job.",
//       "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//       "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "point": "20"
//     },
//     {
//       "question": "ReactJS is an MVC based framework?",
//       "questionType": "text",
//       "answerSelectionType": "single",
//       "answers": [
//         "True",
//         "False"
//       ],
//       "correctAnswer": "2",
//       "messageForCorrectAnswer": "Correct answer. Good job.",
//       "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//       "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "point": "10"
//     },
//     // {
//     //   "question": "Which of the following concepts is/are key to ReactJS?",
//     //   "questionType": "text",
//     //   "answerSelectionType": "single",
//     //   "answers": [
//     //     "Component-oriented design",
//     //     "Event delegation model",
//     //     "Both of the above",
//     //   ],
//     //   "correctAnswer": "3",
//     //   "messageForCorrectAnswer": "Correct answer. Good job.",
//     //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//     //   "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     //   "point": "30"
//     // },
//     // {
//     //   "question": "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
//     //   "questionType": "text",
//     //   "answerSelectionType": "single",
//     //   "answers": [
//     //     "lorem 1",
//     //     "lorem 2",
//     //     "lorem 3",
//     //     "lorem 4",
//     //
//     //   ],
//     //   "correctAnswer": "1",
//     //   "messageForCorrectAnswer": "Correct answer. Good job.",
//     //   "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//     //   "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     //   "point": "20"
//     // },
//     {
//       "question": "What are the advantages of React JS?",
//       "questionType": "text",
//       "answerSelectionType": "multiple",
//       "answers": [
//         "React can be used on client and as well as server side too",
//         "Using React increases readability and makes maintainability easier. Component, Data patterns improves readability and thus makes it easier for manitaining larger apps",
//         "React components have lifecycle events that fall into State/Property Updates",
//         "React can be used with any other framework (Backbone.js, Angular.js) as it is only a view layer"
//       ],
//       "correctAnswer": [1, 2, 4],
//       "messageForCorrectAnswer": "Correct answer. Good job.",
//       "messageForIncorrectAnswer": "Incorrect answer. Please try again.",
//       "psum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       "point": "20"
//     },
//   ]
// }

export const quiz = {
  quizTitle: "Javascript Advanced",
  quizSynopsis:
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
  questions: [
    {
      question: `What is printed in the console ? 
        <pre>
          <code>
            switch(1) {
                case 2 : console.log(2); break;
                default: console.log(3);
                case 4: console.log(4)
            }
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["error", "undefined", "2, 3", "3, 4"],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>
            Promise.reject()
              .then(() => {
                  console.log('then1')
              })
              .catch(() => {
                  console.log('catch')
              })
              .then(() => {
                  console.log('then2')
              })
   
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["then1 then2", "then1 catch", "Error", "catch then2"],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>
            Promise.resolve()
              .then(() => {
                  setTimeout(() => {
                      console.log('setTimeout 1')
                  }, 0)
              })
              .then(() => {
                  console.log('then')
              })
              setTimeout(() => {
                  console.log('setTimeout 2')
              }, 0)
   
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        "then, setTimeout 2, setTimeout 1",
        "then, setTimeout 1, setTimeout 2",
        "setTimeout 2, setTimeout 1, then",
        "then, setTimeout 2, null",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>
            
            function foo() {
                console.log(this)
            }
            
            function goo() {
                return arguments[0]()
            }   
            goo(foo)
        
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["window", "undefined", "Arguments in goo", "error"],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>'
            const obj1 = {
                x: 10
            }
            const obj2 = obj1;
            obj1.x = 20;
            console.log(obj2.x)
                 
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["undefined", "10", "20", "error"],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>
              const foo = (n) => {
                  for(var i = 0; i < n; i++) {
                      setTimeout(() => {
                      console.log(i)
                      }, i * 100 )   
                  }
              }
              foo(5)
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["5 item 5", "1, 2, 3, 4", "error", "1, 2, 3, 4, 5"],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is the result of this expression? 
        <pre>
          <code>
              
            (function(x, f = () => x) {
                var x;
                var y = x;
                x = 2;
                return [x, y, f()];
            })(1)
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        "[2, 1, 1]",
        "[2, undefined, 1]",
        "[2, 1, 2]",
        "[2, undefined, 2]",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ?
        <pre>
          <code>
              
            if(!![]) {
                console.log([] === false)
            }else {
                console.log(!!{} + !![])
            }
        
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["false", "true", "undefined", "NaN"],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>    
            
            const arr = [NaN, 4, 6, 9];
            console.log(arr.indexOf(4));
            console.log(arr.indexOf(NaN)) 
        
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["1, 1", "NaN, 1", "2, 1", "1, -1"],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>"    
            
            var x = 22;
            
            const obj = {
                x: 55,
                bar: {
                    x: 6,
                    baz: function() {
                        return this.x;
                    }
                }
            }
            const foo = obj.bar.baz;
            
            alert(foo());
            alert(obj.bar.baz());
                    
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["22, 55", "6, 55", "22, 6", "error"],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
               
            function foo(...args) {
                console.log(typeof args);
            }      
            foo()
     
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["object", "number", "undefined", "error"],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>" 
             
            var x = 10
            const obj = {
                x: 20,
                foo: function() {
                    setTimeout(() => {
                        console.log(this.x)
                    }, 0)
                }
            }
            obj.foo()
              
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["10", "undefined", "20", "error"],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>"
             
            function A() {};
            function B() {};
            
            A.prototype = B.prototype = {};
            let a = new A();
            console.log(a instanceof A);
            console.log(a instanceof B);
                    
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["true, false", "false true", "true true", "error"],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            class DataBase {
                constructor(data) {
                    if(DataBase.exists) {
                        return DataBase.demo
                    }
                    DataBase.demo = this;
                    DataBase.exists = true;
                    this.data = data;
                }
            }
            const mongo = new DataBase('MongoDB');
            const mysql = new DataBase('MySQL');
            console.log(mysql)
                         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        '{data: "MongoDB"}',
        '{data: "MySQL"}',
        "{data: true}",
        "error",
      ],
      correctAnswer: "1",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    // =========
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            class Counter {
            constructor() {
              this.count = 0;
            }
          
            increment() {
              this.count++;
            }
          }
          
          const counterOne = new Counter();
          counterOne.increment();
          counterOne.increment();
          
          const counterTwo = counterOne;
          counterTwo.increment();
          
          console.log(counterOne.count);
                         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: ["0", "1", "2", "3"],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            const myPromise = Promise.resolve("Woah some cool data");

            (async () => {
            try {
                  console.log(await myPromise);
            } catch {
                  throw new Error(\`Oops didn't work\`);
            } finally {
                  console.log("Oh finally!");
                }
            })();      
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        "Woah some cool data",
        "Oh finally!",
        "Woah some cool data Oh finally!",
        "Oops didn't work Oh finally!",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            const groceries = ["banana", "apple", "peanuts"];

            if (groceries.indexOf("banana")) {
            console.log("We have to buy bananas!");
            } else {
            console.log("We don't have to buy bananas!");
            }          
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'We have to buy bananas!',
        'We don\'t have to buy bananas',
        "undefined",
        "1",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> "
            
            const person = {
            firstName: "Lydia",
            lastName: "Hallie",
            pet: {
            name: "Mara",
            breed: "Dutch Tulip Hound"
            },
            getFullName() {
            return "this.firstName" + "this.lastName";
            }
            };
            
            console.log(person.pet?.name);
            console.log(person.pet?.family?.name);
            console.log(person.getFullName?.());
            console.log(member.getLastName?.());           
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'undefined undefined undefined undefined',
        'Mara undefined Lydia Hallie undefined',
        "Mara null Lydia Hallie null",
        "ull ReferenceError null ReferenceError",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>" 
            
            const person = {
              name: "Lydia",
              age: 21
            }
            
            const changeAge = (x = { ...person }) => x.age += 1
            const changeAgeAndName = (x = { ...person }) => {
              x.age += 1
              x.name = "Sarah"
            }
            
            changeAge(person)
            changeAgeAndName()
            
            console.log(person)         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        '{name: "Sarah", age: 22}',
        '{name: "Sarah", age: 23}',
        '{name: "Lydia", age: 22}',
        '{name: "Lydia", age: 23}',
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code>" 
            
            function compareMembers(person1, person2 = person) {
              if (person1 !== person2) {
                console.log("Not the same!")
              } else {
                console.log("They are the same!")
              }
            }
            
            const person = { name: "Lydia" }
            
            compareMembers(person)
                                     
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'Not the same!',
        'They are the same!',
        "ReferenceError",
        "SyntaxError",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            const myPromise = () => Promise.resolve('I have resolved!')

              function firstFunction() {
                myPromise().then(res => console.log(res))
                console.log('second')
              }
              
              async function secondFunction() {
                console.log(await myPromise())
                console.log('second')
              }
              
              firstFunction()
              secondFunction()        
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'I have resolved!, second and I have resolved!, second',
        'second, I have resolved! and second, I have resolved!',
        "I have resolved!, second and second, I have resolved!",
        "second, I have resolved! and I have resolved!, second",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> '
            
            function checkAge(data) {
              if (data === { age: 18 }) {
                console.log("Ты взрослый!");
              } else if (data == { age: 18 }) {
                console.log("Ты все еще взрослый.");
              } else {
                console.log(\`Хмм.. Кажется, у тебя нет возраста.\`);
              }
            }
            
            checkAge({ age: 18 });         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'Ты взрослый!',
        'Ты все еще взрослый.',
        "Хмм.. Кажется, у тебя нет возраста.",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            function sum(num1, num2 = num1) {
              console.log(num1 + num2)
            }
            
            sum(10)    
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'NaN',
        '20',
        "ReferenceError",
        "undefined",
      ],
      correctAnswer: "2",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> '
            
            const colorConfig = {
              red: true,
              blue: false,
              green: true,
              black: true,
              yellow: false,
            }
            
            const colors = ["pink", "red", "blue"]
            
            console.log(colorConfig.colors[1])
                         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'true',
        'false',
        "undefined",
        "TypeError",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            const name = "Lydia Hallie";

            console.log(!typeof name === "object");
            console.log(!typeof name === "string");
                         
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        'false true',
        'true false',
        "false false",
        "true true",
      ],
      correctAnswer: "3",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
    {
      question: `What is printed in the console ? 
        <pre>
          <code> 
            
            const randomValue = 21;

            function getInfo() {
              console.log(typeof randomValue);
              const randomValue = "Lydia Hallie";
            }
            
            getInfo();
          </code>
        </pre>
        
      `,
      questionType: "text",
      answers: [
        '"number"',
        '"string"',
        "undefined",
        "ReferenceError",
      ],
      correctAnswer: "4",
      messageForCorrectAnswer: "maladec",
      messageForIncorrectAnswer: "chmaladec",

      point: "20",
    },
  ],
};
