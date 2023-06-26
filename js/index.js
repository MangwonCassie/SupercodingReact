
const rAnswer = "APPLE";
let index = 0;
let attempts = 0;
let timer; 


function appStart(){
const displayGameOver = () => {
    const div = document.createElement("div");
    div.innerHTML = "게임이 종료됐습니다. ";
    div.style = "display:flex; justify-content: center; align-items:center; position:absolute; top:40vh; left:38vw; background-color:white; width:200px; height:100px;";
    document.body.appendChild(div);
};

    //로직들
    const nextLine = () => {
        //줄바꾸는 로직
        //attempts를 1로 올려주면 된다고함
        //조건 추가 
        if (attempts === 6) return;
        attempts += 1;
        index = 0;
    }

    const gameOver = () => {
        //키입력 안 먹게 이벤트지워줌
        window.removeEventListener("keydown", handleKeydown);
        displayGameOver();
        clearInterval(timer);
    }

    const handleEnterKey = () => {
        let 맞은개수 = 0;

        //정답확인 로직
        for(let i = 0; i<5; i++){
            const block = document.querySelector(`.board-column[data-index='${attempts}${i}']`
            );
            const 입력글자 = block.innerText;
            const 정답글자 = rAnswer[i];
            if(입력글자 === 정답글자) {
                맞은개수 += 1;
                block.style.background = "#6AAA64";
             }
            else if (rAnswer.includes(입력글자)) block.style.background = "#C9B458";
            else block.style.background = "#787C7E";
            block.style.color = "white";
            }
       

        if(맞은개수 === 5) gameOver();
        else{
            nextLine();
        }
   
    };

    const handleBackSpace = () => {
        if (index > 0) {
        const preBlock = document.querySelector(`.board-column[data-index='${attempts}${index-1}']`
        );
        //밑에서 thisBlock를 매개변수로 줘서 이걸 쓸 필요x
        preBlock.innerText = "";
        }

        if(index !== 0)  index -= 1;
        //인덱스 0 아닐때만 
    }


    const handleKeydown = (e) =>{

        const key = event.key.toUpperCase();
        const keyCode = event.keyCode;
        const thisBlock = document.querySelector(`.board-column[data-index='${attempts}${index}']`
        );

    

    if (event.key === "Backspace") handleBackSpace();
    else if (index === 5) {
        if(event.key === "Enter") handleEnterKey();
        else return;
         }else if(65 <= keyCode && keyCode <= 90){
            thisBlock.innerHTML = key;
            index += 1;
        }
    }

    const startTimer = () => {
        const 시작_시간 = new Date();

        function setTime() {
            const 현재_시간 = new Date();
            const 흐른_시간 = new Date(현재_시간 - 시작_시간);
            const  분 = 흐른_시간.getMinutes().toString().padStart(2, "0");
            const  초 = 흐른_시간.getSeconds().toString().padStart(2, "0");
            const timeDiv = document.querySelector("#timer");
            timeDiv.innerText = `${분}:${초}`;
        }

        //주기성
        timer = setInterval(setTime,1000);
        console.log(timer);
    }

    startTimer();
    window.addEventListener("keydown", handleKeydown);

}

appStart();