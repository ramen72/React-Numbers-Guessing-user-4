import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const HomeComponent = () => {
    
    // const data = useSelector((state) => state.todo.value)
    


    // const dispatch = useDispatch()
    

    return (
        <>
            <div id="main">
                <h5 id="timer"></h5>
                <div id="mainInnerDive">
                    <div className="titleWrapper">
                        <h1 className="title">Number Guessing Game</h1>
                    </div>
                    <h1 className="titleForFinal">Final Result in details</h1>
                    <h2 id="winner1"></h2>
                    <h2 id="winner"></h2>
                    <h1 className="playerName">Player-1</h1>
                    <img src="./images/congratulation.gif" alt="congratulationImage" id="congratulation"/><br/>
                    <h3 id="chance">Chance remaining: <span id="chanceCount"></span></h3>
                    <button id="details">Result in Details</button>
                    <a href="./index.html" id="playAgain">Play Again</a>
                    <div className="playerResultText">
                        <h2 id="inputArrayPlayer1">Player-1 number  : <span id="inputArrayPlayerValue1"></span></h2>
                        <h2 id="inputArrayPlayer2">Player-2 guessed : <span id="inputArrayPlayerValue2"></span></h2>
                        <h2 id="inputArrayPlayer3">Player-3 guessed : <span id="inputArrayPlayerValue3"></span></h2>
                        <h2 id="inputArrayPlayer4">Player-4 guessed : <span id="inputArrayPlayerValue4"></span></h2>
                    </div>

                    <input type="password" name="Numbers" id="playerInput1" placeholder="Please Enter Number (1-10)"/>
                    <button id="playerInputBtn1">Start</button><br/>
                    
                    {/* <input type="text" name="Numbers" id="playerInput2" placeholder="Please Enter Guessing Number (1-10)"/>
                    <button id="playerInputBtn2">Guess</button>
                    
                    <input type="text" name="Numbers" id="playerInput3" placeholder="Please Enter Guessing Number (1-10)"/>
                    <button id="playerInputBtn3">Guess</button>
                    
                    <input type="text" name="Numbers" id="playerInput4" placeholder="Please Enter Guessing Number (1-10)"/>
                    <button id="playerInputBtn4">Guess</button>
                    <span id="errorMessage"></span> */}
                </div>
            </div>
        </>
    );
};

export default HomeComponent;