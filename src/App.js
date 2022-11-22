import React, {useState} from 'react';
import FlascardList from './FlascardList';
import './app.css'

function App() {
  
  const [flashcards, setFlashcards] = useState(Sample_Flashcards)
  return (
    <FlascardList flashcards = {flashcards} />
  );
}

const Sample_Flashcards = [
  {
    id: 1,
    question: 'What is 2 + 2',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ]
  },
  {
    id: 2,
    question: 'Question 2',
    answer: 'Answer',
    options: [
      'Answer',
      'Answer 1',
      'Answer 2',
      'Answer 3'
    ]
  }
]

export default App;
