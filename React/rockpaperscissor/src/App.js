import { useState } from 'react';
import './App.css';
import Box from './component/Box';
import { Paper, Rock, Scissors} from './img'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4번의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패의 결과에 따라 테두리 색이 바뀐다(이기면-초록, 지면-빨강, 비기면-검정)


// 아이템과 숫자를 연결 시키는 방법은 배열 index 번호 안에 있는 아이템을 가져오면 된다. 객체를 먼저 배열화 시켜야한다.
const choice = {
    rock: { // key 
        name:"Rock",
        img : Rock
    },
    scissors: {
        name:"Scissors",
        img : Scissors
    },
    paper: {
        name:"Paper",
        img : Paper
    }
}

function App() {
    // 유저가 선택하기전 값은 null이다. 
    const [userSelect, setUserSelect] = useState(null) ;
    const [ComputerSelect, setComputerSelect] = useState(null);
    const [result, setResult] = useState(null);
    const [computerResult, computerSetResult] = useState(null);


    const play = (userChoice) => { 
        setUserSelect(choice[userChoice]) // 객체 배열을 가져오기 위해 [userChoice]를쓴다.

        let computerChoice = randomChoice()
        setComputerSelect(computerChoice);
        let playerResult = judgement(choice[userChoice], computerChoice);
        setResult(playerResult);
        computerJudgement(playerResult)
    };

    // 승 패
    const judgement = (user, computer) => {
        console.log("user" , user , "computer", computer)

        // user == computer tie
        // user == rock , computer == "scissors" user 가 이긴경우.
        // user == "rock" , computer == paper user 가 진 경우
        // user == scissors , computer == "paper" user 이긴경우
        // user == scissors , computer == "rock" user 진 경우
        // user == paper , computer == scissors user 가 이긴 경우 

        // 플레이어 와 컴퓨터 리설트가 같음으로 따로 만들어야함
        // 플레이어가 윈이 면 

        if (user.name == computer.name ) {
            return "tie"
        // 주먹
        } else if ( user.name == "Rock" )  {
            return  computer.name == "Scissors"  ? <div className='box-win'> win</div> : <div className='box-lose'>lose</div> 
        }
        // 보
        else if ( user.name == "Paper") {
            return  computer.name == "Rock" ? "win" : "lose"
        }
        // 가위
        else if ( user.name == "Scissors") {
            return  computer.name == "Paper" ? "win" : "lose"
        }
    }

    const computerJudgement = (playerResult) => {
        // 컴퓨터만의 judgement 
        // 조건으로 뭐가들어가는지 확인
        //  
        if (playerResult == "tie" ){
            return "tie"
        }else if (playerResult == "win"){
            return "lose"
        }else if (playerResult == "lose") {
            return "win"
        }
    }

    const randomChoice = () => { // 객체의 키값이 배열의 아이템으로 들어간다. 
        let itemArray = Object.keys(choice); //오브젝트 내부함수 안에 keys와 values가 있다. 아이템에 배열형태로 key이 담기는데 rock si paper 스트링 형태로 담긴다. [0,1,2] 객체의 키값만 뽑아서 array로 만들어 내는 함수
        console.log("item Array", itemArray);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem]
        return choice[final];
        // console.log("final item : ",final);
        // console.log("random value", randomItem )
    }

    return (
        <div>
            <div className='main'>
                <Box title="You" img={choice.scissors.img} item={userSelect} result={result}/>  {/*userSelect는 내가 선택하기 전까지 null이다. */}
                <Box title="Computer" item={ComputerSelect} result={result}/>
            </div> 
            <div className='main'>
                <button onClick={() => play("scissors")}>가위</button>
                <button onClick={() => play("rock")}>바위</button>
                <button onClick={() => play("paper")}>보</button>
            </div>
        </div>
        );
}

export default App;
