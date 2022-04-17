const startButton= document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-box')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startQuiz )
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })



function startQuiz(){
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()


}


function setNextQuestion(){
    resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }
  
  function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
  }







function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
  
  function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }





const questions = [

    {
        question : 'What does CSS stand for?',
        answers: [
            { text: 'cascading style sheet', correct: true},
            { text: 'calculated style sheet', correct: false}
        ]
    },
    {
        question: 'What is tys dogs name?',
        answers: [
          { text: 'Brick', correct: true },
          { text: 'Scout', correct: false },
          { text : 'Woody', coorect: false},
          { text : 'gwen', correct : false}
    ]
  },
  {
    question: 'Is web development hard?',
    answers: [
      { text: 'maybe', correct: false },
      { text: 'YES!', correct: true },
      { text: ' no', correct: false },
      { text: 'web development? like a spider?', correct: false }
    ]
  },
  {
    question: 'What is your mothers maiden name?',
    answers: [
      { text: 'mary', correct: false },
      { text: 'bob', correct: true },
      { text: 'joanna', correct: false},
      { text : 'jimmy', correct: false}
    ]
  }




]