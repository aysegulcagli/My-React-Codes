import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import List from "./List";
import Board from "./Board";
import WordsMatrix, { boardDefault } from "./WordsMatrix";
import { createContext } from "react";
import Key from "./Key";
import Keyboard from "./Keyboard";
import Letter from "./Letter";

export const AppContext = createContext();

var i = 0;
function Wordle() {
  const [wordList, setWordList] = useState(["RADYO", "SEHPA", "DOLAP", "KALEM", "KAVUN", "KÖPEK", "MERAK", "GAZAP", "SEHPA", "ROMAN", "CEVİZ"]);
  const [secretWord, setSecretWord] = useState(wordList[Math.floor(Math.random() * wordList.length)]);
  const [board, setBoard] = useState(boardDefault);
  const [guess, setGuess] = useState("");
  const [currAttempt, setCurrAttempt] = useState({ attempt: 0, letterPos: 0 });
  const guessedLetters = guess.split('');
  const handleGuessChange = (evt) => {
    setGuess(evt.target.value);
  }

  const pressClick = () => {
    if (i < 6) {
      let newBoard = [...board];

      for (let i = 0; i < guessedLetters.length ; i++) {
        newBoard[currAttempt.attempt][i] = guessedLetters[i].toUpperCase();


      }

      setBoard(newBoard);
      setCurrAttempt({ attempt: currAttempt.attempt + 1, letterPos: 0 });
      i++;
    }
    else (
      alert("Game over, you lost. SECRET WORD WAS: " + secretWord)

    )




  }

  const handleClick = (char) => {
    let newBoard = [...board];
    newBoard[currAttempt.attempt][currAttempt.letterPos] = char;
    setBoard(newBoard);
    setCurrAttempt({ attempt: currAttempt.attempt, letterPos: currAttempt.letterPos + 1 });
  }

  return (
    <div className="form">
      <Form>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Label htmlFor="inlineFormInput">
              Enter your guess:
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Control onChange={handleGuessChange} />
          </Col>
          <Col xs="auto">
            <Button onClick={pressClick}>
              Check!
            </Button>
          </Col>
        </Row>
      </Form>
      <br />
      <AppContext.Provider value={{ board, setBoard, currAttempt, secretWord, guess, guessedLetters }}>
        <Board />
        <br />
        <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default Wordle;