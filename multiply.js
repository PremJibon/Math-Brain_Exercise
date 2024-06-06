document.addEventListener('DOMContentLoaded', () => {
  const num1Element = document.getElementById('num1');
  const num2Element = document.getElementById('num2');
  const option1Element = document.getElementById('option1');
  const option2Element = document.getElementById('option2');
  const option3Element = document.getElementById('option3');
  const audioElement = document.getElementById('myAudio');

  let num1, num2, correctAnswer;

  function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;

    num1Element.textContent = num1;
    num2Element.textContent = num2;

    const answers = [correctAnswer, generateWrongAnswer(), generateWrongAnswer()];
    answers.sort(() => Math.random() - 0.5);

    option1Element.textContent = answers[0];
    option2Element.textContent = answers[1];
    option3Element.textContent = answers[2];
  }

  function generateWrongAnswer() {
    let wrongAnswer;
    do {
      wrongAnswer = Math.floor(Math.random() * 100) + 1;
    } while (wrongAnswer === correctAnswer);
    return wrongAnswer;
  }

  function checkAnswer(selectedAnswer) {
    if (selectedAnswer === correctAnswer) {
      generateQuestion();
    } else {
      audioElement.play();
    }
  }

  option1Element.addEventListener('click', () => checkAnswer(parseInt(option1Element.textContent)));
  option2Element.addEventListener('click', () => checkAnswer(parseInt(option2Element.textContent)));
  option3Element.addEventListener('click', () => checkAnswer(parseInt(option3Element.textContent)));

  // Generate the first question
  generateQuestion();
});
