import './App.css';
import React, { useState } from 'react';
import questions from './Questions.js';
import Contents from './Contents.js';
import 'bootstrap/dist/css/bootstrap.min.css';
<style>
@import url('https://fonts.cdnfonts.com/css/fredoka-one');
</style>
                

function App() {

  // Properties for the quiz
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [startQuiz, setStartQuiz] = useState(false);

  // Show Final results
  function ShowResults() {
    return (
      < div className="final-results">
        <h2>Final Results</h2>
        <h4>
          {score} out of 5 correct
        </h4>
        <div>
          <button onClick={() => restartGame()} className="restart">Restart Game</button>
        </div>
        <div>
          <button onClick={() => {setStartQuiz(false); setFinalResults(false); restartGame();}} className="close">Close</button>
        </div>
      </div>
    );
  }

  // Show the quiz card
  function ShowQuiz() {
    shuffleArray(questions);
    return (
      <div className="question-card">
        <h2>Question {currentQuestion + 1} out of 5</h2>
        <h4>{questions[currentQuestion].question}</h4>
        <ul>
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <li onClick={() => optionClicked(option)} key={index}>{option}</li>
            );
          })}
        </ul>
      </div>
    );
  }

  function optionClicked(option) {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < 5) {
      setCurrentQuestion(currentQuestion + 1);
    }
    else {
      setFinalResults(true);
    }
  }

  function restartGame() {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  }

  // Durstenfeld shuffling algorithm
  function shuffleArray(questions) {
    for (let i = questions.length - 1; i >0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  
  return (
    <div className="app">
      {/* Section 1: Header */}
      <header className="app-header">
        <h1 className="typed">
          Introduction to Latin Verbs
        </h1>
      </header>

      {/* Section 2: Description
      <div className="intro-text">
        <h5 className="fade-in">
          This website provides an introduction to Latin verbs. Click on each button to access a detailed textbook chapter (written by me!) on the relevant subject matter. Feel free to quiz yourself below to consolidate your knowledge!
        </h5>
      </div> */}

      {/* Section 3: Contents / Links to Latin Chapters */}
      <main>
        <div className="app-contents">
          <Contents />
        </div>
      </main>

      {/* Section 4: Testing */}
      <div className="testing-section">
        <button onClick={() => setStartQuiz(true)} className="testing-button"> Test my knowledge! </button>
      </div>

      {
      startQuiz && (
      showFinalResults ? <ShowResults /> : <ShowQuiz />
      )
      }


    </div >
  );

}

export default App;
