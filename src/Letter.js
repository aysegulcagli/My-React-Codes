import { useContext, useState} from "react";
import { AppContext } from "./Wordle";
import Board from "./Board";



function Letter ({letterPos, attempt}) {
   const {board, secretWord, currAttempt} = useContext(AppContext);
   const letter = board[attempt][letterPos];
   const correct = secretWord.toUpperCase()[letterPos] === letter;
   const almost =
     !correct && letter !== "" && secretWord.toUpperCase().includes(letter);
   const letterState =
     currAttempt.attempt > attempt &&
     (correct ? "correct" : almost ? "almost" : "error");
 
   return (
     <div className="letter" id={letterState}>{letter}</div>
   );
 }
 
   

export default Letter;

