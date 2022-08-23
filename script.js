
const quizData = [
    {
        question: "1. Which component is used to compile, debug and execute the java programs?",
        a: "JRE",
        b: "JIT",
        c: "JDK",
        d: "JVM",
        correct: "c",
    },
    {
        question: "2. Which of the following is not an OOPS concept in Java?",
        a: "Polymorphism",
        b: "Inheritance",
        c: "Compilation",
        d: "Encapsulation",
        correct: "c",
    },
    {
        question: "3. Which of the following is a type of polymorphism in Java Programming?",
        a: "Multiple polymorphism",
        b: "Compile time polymorphism",
        c: "Multilevel polymorphism",
        d: "Execution time polymorphism",
        correct: "b",
    },

    {
        question: "4. Who invented Java Programming?",
        a: "Guido van Rossum",
        b: "James Gosling",
        c: "Dennis Ritchie",
        d: "Bjarne Stroustrup",
        correct: "b",
    },

    {
        question: "5. What is Truncation in Java?",
        a: "Floating-point value assigned to a Floating type",
        b: "Floating-point value assigned to an integer type",
        c: "Integer value assigned to floating type",
        d: " Integer value assigned to floating type",
        correct: "b",
    },

    {
        question: "6. Which exception is thrown when java is out of memory?",
        a: "MemoryError",
        b: "OutOfMemoryError",
        c: "MemoryOutOfBoundsException",
        d: "MemoryFullException",
        correct: "b",
    },
    {
        question: "7. Which of these are selection statements in Java?",
        a: "break",
        b: "continue",
        c: "for()",
        d: "if()",
        correct: "d",
    },
    {
        question: "8. Which of these keywords is used to define interfaces in Java?",
        a: "intf",
        b: "Intf",
        c: "interface",
        d: "Interface",
        correct: "c",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

let message= "Well try....Keep practicing"


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(score>5)
       {
        message="congratulations"
       }

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
              quiz.innerHTML = `
               <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <p>  ${message}</p>
                     <button onclick="location.reload()">Reload</button>`
           
       }
    }
})