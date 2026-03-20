//  this time using the question using the html and css , js question 

let quizzes = {
    html: [
        {
            question: "Which of the following is the correct HTML tag for inserting an image?",
            choices: ["<img>", "<image>", "<src>", "<picture>"],
            correctAnswer: "<img>"
        },
        {
            question: "What does the <a> tag in HTML stand for?",
            choices: ["Anchor", "Action", "Article", "Audio"],
            correctAnswer: "Anchor"
        },
        {
            question: "Which tag is used to define a table in HTML?",
            choices: ["<table>", "<thead>", "<tbody>", "<tr>"],
            correctAnswer: "<table>"
        },
        {
            question: "What is the default alignment of text in an HTML page?",
            choices: ["Left", "Right", "Center", "Justified"],
            correctAnswer: "Left"
        },
        {
            question: "Which of the following HTML tags is used to define a hyperlink?",
            choices: ["<link>", "<a>", "<hyperlink>", "<url>"],
            correctAnswer: "<a>"
        },
        {
            question: "Which tag is used to create an unordered (bulleted) list in HTML?",
            choices: ["<ul>", "<ol>", "<li>", "<dl>"],
            correctAnswer: "<ul>"
        },
        {
            question: "Which HTML tag is used to define an input field where the user can type data?",
            choices: ["<input>", "<textarea>", "<form>", "<button>"],
            correctAnswer: "<input>"
        },
        {
            question: "Which tag is used to define a division or section in HTML?",
            choices: ["<section>", "<div>", "<article>", "<main>"],
            correctAnswer: "<div>"
        },
        {
            question: "Which HTML tag is used to display the largest heading?",
            choices: ["<h1>", "<h6>", "<header>", "<head>"],
            correctAnswer: "<h1>"
        },
        {
            question: "Which tag is used to create a comment in HTML?",
            choices: ["<!-- comment -->", "// comment", "/* comment */", "<comment>"],
            correctAnswer: "<!-- comment -->"
        }
    ],
    css: [
        {
            question: "Which property is used to change the background color in CSS?",
            choices: ["background-color", "bg-color", "color", "background"],
            correctAnswer: "background-color"
        },
        {
            question: "Which CSS property controls the text size?",
            choices: ["font-size", "text-size", "font", "text-style"],
            correctAnswer: "font-size"
        },
        {
            question: "How do you select an element with the class 'container' in CSS?",
            choices: [".container", "#container", "container", "<container>"],
            correctAnswer: ".container"
        },
        {
            question: "What is the default value of the position property in CSS?",
            choices: ["static", "relative", "absolute", "fixed"],
            correctAnswer: "static"
        },
        {
            question: "Which CSS property is used to change the font of an element?",
            choices: ["font-family", "text-font", "font-style", "text-font-family"],
            correctAnswer: "font-family"
        },
        {
            question: "How do you add a shadow effect to a box in CSS?",
            choices: ["box-shadow", "shadow", "text-shadow", "box-effect"],
            correctAnswer: "box-shadow"
        },
        {
            question: "How do you center a div element in CSS?",
            choices: ["text-align: center;", "margin: auto;", "align: center;", "position: center;"],
            correctAnswer: "margin: auto;"
        },
        {
            question: "Which of the following is the correct CSS syntax for adding a border to a div?",
            choices: ["border: 1px solid black;", "border: solid black;", "border-width: 1px;", "border-style: black;"],
            correctAnswer: "border: 1px solid black;"
        },
        {
            question: "How do you make text bold in CSS?",
            choices: ["font-weight: bold;", "font-style: bold;", "text-weight: bold;", "bold: true;"],
            correctAnswer: "font-weight: bold;"
        },
        {
            question: "What property is used to change the color of text in CSS?",
            choices: ["color", "text-color", "font-color", "text-style"],
            correctAnswer: "color"
        }
    ],
    js: [
        {
            question: "Which of the following is used to declare a variable in JavaScript?",
            choices: ["let", "var", "const", "all of the above"],
            correctAnswer: "all of the above"
        },
        {
            question: "How do you write a comment in JavaScript?",
            choices: ["// comment", "<!-- comment -->", "/* comment */", "# comment"],
            correctAnswer: "// comment"
        },
        {
            question: "Which method is used to parse a string into an integer in JavaScript?",
            choices: ["parseInt()", "parseFloat()", "Number()", "toInteger()"],
            correctAnswer: "parseInt()"
        },
        {
            question: "How do you create a function in JavaScript?",
            choices: ["function myFunction()", "function:myFunction()", "function = myFunction()", "create function myFunction()"],
            correctAnswer: "function myFunction()"
        },
        {
            question: "Which operator is used for equality check in JavaScript?",
            choices: ["=", "==", "===", "!="],
            correctAnswer: "=="
        },
        {
            question: "How do you create an array in JavaScript?",
            choices: ["[]", "{}", "<array>", "Array()"],
            correctAnswer: "[]"
        },
        {
            question: "Which of the following is NOT a valid JavaScript data type?",
            choices: ["String", "Boolean", "Number", "Float64"],
            correctAnswer: "Float64"
        },
        {
            question: "How do you add a new element to the end of an array in JavaScript?",
            choices: ["push()", "pop()", "shift()", "unshift()"],
            correctAnswer: "push()"
        },
        {
            question: "Which method is used to remove the last element of an array in JavaScript?",
            choices: ["pop()", "shift()", "remove()", "delete()"],
            correctAnswer: "pop()"
        },
        {
            question: "How do you write a conditional statement in JavaScript?",
            choices: ["if(condition)", "if{condition}", "if condition()", "if: condition"],
            correctAnswer: "if(condition)"
        }
    ]
};


let quiz = document.querySelector(".quiz");
let index = document.querySelector(".index");
let quizSection = document.querySelector(".quiz-section");
let scoreSection = document.querySelector(".score-section");
let heading = document.querySelector(".heading");

let currentQuizName = 'html';
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

quizSection.style.display = 'none';
scoreSection.style.display = 'none';

let currentquiz = quizzes[currentQuizName];

// OPEN QUIZ
function openquiz(subject) {
    quizSection.style.display = 'flex';
    quiz.style.display = 'none';

    heading.innerHTML = subject.toUpperCase();
    currentQuizName = subject;
    currentQuestionIndex = 0;
    score = 0;

    loadQuestion();
}

// BACK
function back() {
    quizSection.style.display = 'none';
    quiz.style.display = 'flex';
}

// LOAD QUESTION
function loadQuestion() {
    answered = false;

    currentquiz = quizzes[currentQuizName];
    let question = currentquiz[currentQuestionIndex];

    const options = document.querySelector(".options");
    options.innerHTML = "";

    index.innerHTML = currentQuestionIndex + 1;
    document.getElementById('question').innerText = question.question;

    question.choices.forEach((choice) => {
        const button = document.createElement('button');

        button.innerText = choice;
        button.className = "option";

        button.onclick = function () {
            if (!answered) {
                selectOption(button, choice);
            }
        };

        options.appendChild(button);
    });

    document.getElementById('quiz-title').innerText =
        `${currentQuizName.toUpperCase()} Quiz`;
}

// SELECT OPTION (COLOR + LOCK)
function selectOption(button, selectedAnswer) {
    let options = document.querySelectorAll(".option");
    const correctAnswer = quizzes[currentQuizName][currentQuestionIndex].correctAnswer;

    options.forEach(opt => {
        opt.disabled = true;

        // show correct answer
        if (opt.innerText === correctAnswer) {
            opt.style.backgroundColor = "green";
            opt.style.color = "white";
        }
    });

    // wrong answer → red
    if (selectedAnswer !== correctAnswer) {
        button.style.backgroundColor = "red";
        button.style.color = "white";
    } else {
        score++;
    }

    answered = true;
}

// NEXT
function nextQuestion() {
    const quiz = quizzes[currentQuizName];

    currentQuestionIndex++;

    if (currentQuestionIndex < quiz.length) {
        loadQuestion();
    } else {
        finishQuiz();
    }
}

// PREVIOUS (FIXED)
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// FINISH
function finishQuiz() {
    quizSection.style.display = 'none';
    scoreSection.style.display = "block";

    document.getElementById("score").innerText =
        `${score} / ${quizzes[currentQuizName].length}`;
}

// HOME
function home() {
    scoreSection.style.display = 'none';
    quiz.style.display = 'flex';
}
