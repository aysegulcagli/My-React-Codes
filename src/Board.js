import React, {Component, useState} from "react";
import { boardDefault } from "./WordsMatrix";
import Letter from "./Letter";

function Board () {
   

 
  
 return(
  <div className ="board">
  
 <div className="row1">
  <Letter letterPos={0} attempt={0}></Letter>
  <Letter letterPos={1} attempt={0}></Letter>
  <Letter letterPos={2} attempt={0}></Letter>
  <Letter letterPos={3}attempt={0}></Letter>
  <Letter letterPos={4} attempt={0}></Letter>
 </div>
 
 <div className="row1">
 <Letter  letterPos={0} attempt={1}></Letter>
  <Letter letterPos={1} attempt={1}></Letter>
  <Letter letterPos={2} attempt={1}></Letter>
  <Letter letterPos={3}attempt={1}></Letter>
  <Letter letterPos={4} attempt={1}></Letter>
 </div>
 
 <div className="row1">
 <Letter letterPos={0} attempt={2}></Letter>
  <Letter letterPos={1} attempt={2}></Letter>
  <Letter letterPos={2} attempt={2}></Letter>
  <Letter letterPos={3}attempt={2}></Letter>
  <Letter letterPos={4} attempt={2}></Letter>
 </div>
 
 <div className="row1">
 <Letter letterPos={0} attempt={3}></Letter>
  <Letter letterPos={1} attempt={3}></Letter>
  <Letter letterPos={2} attempt={3}></Letter>
  <Letter letterPos={3}attempt={3}></Letter>
  <Letter letterPos={4} attempt={3}></Letter>
 </div>
 
 <div className="row1">
 <Letter letterPos={0} attempt={4}></Letter>
  <Letter letterPos={1} attempt={4}></Letter>
  <Letter letterPos={2} attempt={4}></Letter>
  <Letter letterPos={3}attempt={4}></Letter>
  <Letter letterPos={4} attempt={4}></Letter>
 </div>
 
 <div className="row1">
 <Letter letterPos={0} attempt={5}></Letter>
  <Letter letterPos={1} attempt={5}></Letter>
  <Letter letterPos={2} attempt={5}></Letter>
  <Letter letterPos={3}attempt={5}></Letter>
  <Letter letterPos={4} attempt={5}></Letter>
 </div>
  
  </div>

 );
   
}
export default Board;

