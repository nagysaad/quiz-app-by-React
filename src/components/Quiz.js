
import { useState , useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/QusetionsBank";


function Quiz( ) {
    const {score , setScore , setGameState} = useContext(QuizContext);
    
    const [currQuestion , setCurrQuestion] = useState(0);
    const [optionChosen , setOptionChosen] = useState("");

    const nextQuestion = () => {
        if(Questions[currQuestion].asnwer === optionChosen){
            setScore(score + 1);
        }
        console.log(score + 1);

       
        setCurrQuestion(currQuestion + 1);

    }

    const finishQuiz = () => {
        if(Questions[currQuestion].asnwer === optionChosen){
            setScore(score + 1);
        }

        console.log(score + 1);
      
        setGameState("endScreen");

    }

    return(
        <div className="Quiz"> 
        <h1>{Questions[currQuestion].prompt}</h1>

        <div className="Options">
            <button className="active" onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>

        
      
         {currQuestion === Questions.length - 1 ? <button onClick={finishQuiz}>Finish Quiz</button> : <div className="next" onClick={nextQuestion}>Next Question</div>}

         
        </div>
    )
 }

 export default Quiz;