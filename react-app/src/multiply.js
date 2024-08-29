class 사람 {
    constructor(이름, 나이, 성별){
        this.이름 = 이름;
        this.나이 = 나이;
        this.성별 = 성별;
    }
    말하기(){
         console.log(this.이름 + ": " + "안녕하세요!");
    }
}

const 최준원 = new 사람('최준원',30,'남');
console.log(최준원);
최준원.말하기();

class 학생 extends 사람{
    constructor(이름, 나이, 성별, 성적){
        super(이름, 나이, 성별);
        this.성적 = 성적;
    }
    공부하기(){
        console.log(`${this.이름}: 공부중...`)
    }
}
const 유학생 = new 학생('유학생',19,'남','1등급')
console.log(유학생);
유학생.말하기();
유학생.공부하기();


//함수형 컴포넌트
function App() {
    return (
      <>
        <h1> React 컴포넌트에는 두 가지 종류가 있죠. </h1>
        <div>
          이것은 함수형 컴포넌트입니다.
          <p>React 너무나도 재밌죠 !?</p>
          <p>JavaScript와는 다른 새로운 세계가 펼쳐집니다 </p>
          <span>기 대 된 다 ~</span>
        </div>
      </>
    );
  }
class App {
    render(){
        return(
        <>
        <h1>안녕하세요!</h1>
        <div>
            이것은 함수형 컴포넌트입니다.
            <p>React 너무나도 재밌죠 !?</p>
            <p>JavaScript와는 다른 새로운 세계가 펼쳐집니다</p>
            <span>기 대 된 다 ~</span>
        </div>
        </>
        )
    }
}


//클래스형 컴포넌트
class App extends Comment {
    render() {
      return (
        <>
          <h1>이건 클래스형 컴포넌트입니다 </h1>;
          <p> JavaScript의 클래스 문법을 활용하지요! </p>;
        </>
      );
    }
  }
  export default App;

// 이 아래에 함수형 컴포넌트로 변경한 코드를 작성해주세요
function App(){
    return(
        <>
            <h1>이건 함수형 컴포넌트입니다 </h1>
            <p>JavaScript의 함수 문법을 활용하지요! </p>
        </>
    )
}
