import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import questions from './Questions.js';

function App() {

  const [activeContent, setActiveContent] = useState(null);
  function openContent(contentID) {
    setActiveContent(contentID);
    // Sets activeContent to the contentID
  }

  function ContentDisplay({ displayThis }) {
    switch (displayThis) {
      case 'terminology':
        return <div><p>Content for Terminology</p></div>;
      case 'verbtobe':
        return <div><p>Content for Verb To Be</p></div>;
      case 'inf':
        return <div><p>Content for The Infinitive Mood</p></div>
      case 'imp':
        return <div><p>Content for The Imperative Mood</p></div>
      case 'pres':
        return <div><p>Content for The Present Tense</p></div>
      case 'fut':
        return <div><p>Content for The Future Tense</p></div>
      case 'impf':
        return <div><p>Content for The Imperfect Tense</p></div>
      case 'perf':
        return <div><p>Content for The Perfect Tense</p></div>
      case 'plup':
        return <div><p>Content for The Pluperfect Tense</p></div>
      case 'futperf':
        return <div><p>Content for The Future Perfect Tense</p></div>
      default:
        return <div><p>Default content or an instructional message</p></div>;
    }
  }

  function AppContents() {
    return (
      <div>
        <button className="App-contents-buttons" onClick={() => openContent('terminology')}>Essential Terminology for Latin Verbs</button>
        <button className="App-contents-buttons" onClick={() => openContent('verbtobe')}>Verb To Be</button>
        <button className="App-contents-buttons" onClick={() => openContent('inf')}>The Infinitive Mood</button>
        <button className="App-contents-buttons" onClick={() => openContent('imp')}>The Imperative Mood</button>
        <button className="App-contents-buttons" onClick={() => openContent('pres')}>The Present Tense</button>
        <button className="App-contents-buttons" onClick={() => openContent('fut')}>The Future Tense</button>
        <button className="App-contents-buttons" onClick={() => openContent('impf')}>The Imperfect Tense</button>
        <button className="App-contents-buttons" onClick={() => openContent('perf')}>The Perfect Tense</button>
        <button className="App-contents-buttons" onClick={() => openContent('plup')}>The Pluperfect Tense</button>
        <button className="App-contents-buttons" onClick={() => openContent('futperf')}>The Future Perfect Tense</button>
      </div>
    );
  }

  // Properties for the quiz
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setQuiz] = useState(false);

  {/* Show Final results */ }
  function ShowResults() {
    return (
      < div className="Final-results">
      <h1>Final Results</h1>
      <h2>
        {score} out of 5 correct
      </h2>
      <button onClick={() => restartGame()}className="Restart">Restart Game</button>
      </div>
    );
  }

  // Show the quiz card
  function ShowQuiz() {
    return (
      <div className="Question-card">
        <h2>Question {currentQuestion + 1} out of 5</h2>
        <h3>{questions[currentQuestion].question}</h3>
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
    if (option == questions[currentQuestion].answer) {
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

  return (
    <div className="App">
      {/* Section 1: Header */}
      <header className="App-header">
        <h1>
          Introductory Latin for Kids: A Straightforward Course for Young Beginners
        </h1>
      </header>

      {/* Section 2: Description */}
      <div className="Intro-text">
        <h5>
          Welcome to the site! Feel free to browse through the different chapters and download any content that would be useful for you. To test your knowledge, complete the quizzes associated with each chapter!
        </h5>
      </div>

      {/* Section 3: Contents / Links to Latin Chapters */}
      <main>
        <div className="App-contents">
          <AppContents />
        </div>
        <ContentDisplay displayThis={activeContent} />
      </main>

      {/* Section 4: Testing */}
      <div className="Testing-section">
        <button className="Testing-button"> Test my knowledge! </button>
      </div>

      {showFinalResults ? (
        <ShowResults />
      ) : (
        <ShowQuiz />
      )
}


    </div >
  );
    
}

export default App;
