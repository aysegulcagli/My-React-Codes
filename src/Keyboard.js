import { useState, useContext } from "react";
import Key from "./Key";
import { AppContext } from "./Wordle";
import React, { useEffect } from 'react';

function Keyboard() {
  const keys1 = ["A", "B", "C", "Ç", "D", "E", "F", "G", "Ğ", "H", "I", "İ", "J", "K", "L"];
  const keys2 = ["M", "N", "O", "Ö", "P", "R", "S", "Ş", "T", "U", "Ü", "V", "Y", "Z"];

  const { board, secretWord, guess, guessedLetters } = useContext(AppContext);
  const [keyColors, setKeyColors] = useState({});
  //const guessedLetters = guess.split('');
  useEffect(() => {

    const newKeyColors = {};

    for (let m = 0; m < 6; ++m) {
      for (let i = 0; i < secretWord.length + 1; ++i) {
        if (board[m].includes(secretWord[i])) {
          newKeyColors[secretWord[i]] = "yellow";
        }
        else {
          newKeyColors[board[m][i]] = "grey";
        }
        if (board[m][i] === secretWord[i]) {
          newKeyColors[secretWord[i]] = "green";
        }
      }
    }

    setKeyColors(newKeyColors);

    for (let i = 0; i < 6; i++) {
      if (board[i][0] === secretWord[0] &&
        board[i][1] === secretWord[1] &&
        board[i][2] === secretWord[2] &&
        board[i][3] === secretWord[3] &&
        board[i][4] === secretWord[4]
      ) {
        alert("Congrulations, you won");
      }
    }




  }, [board, secretWord]);




  return (
    <div className="keyboard">
      <div className="line1">
        {keys1.map((key) => (
          <Key
            key={key}
            keyVal={key}
            bgColor={keyColors[key]}

          />
        ))}

      </div>
      <div className="line2">
        {keys2.map((key) => (
          <Key
            key={key}
            keyVal={key}
            bgColor={keyColors[key]}

          />
        ))}
      </div>
    </div>

  );

}

export default Keyboard;