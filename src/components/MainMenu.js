import { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

function MainMenu( ) {
    const {gameState , setGameState} = useContext(QuizContext);

    return(

        <div className="Menu">
            <button onClick={() => {setGameState("quiz")}}>Start Quiz</button>
        </div>
    )
 }

 export default MainMenu;