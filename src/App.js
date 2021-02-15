import logo from './logo.svg';
import './App.css';
import './MyComponent';
import MyComponent from './MyComponent';


function App() {
  const value = "고정값이지만 이건 맘에드는군요";
  const intvalue = 1;
  return <MyComponent name="what?" test="우ㅡ와아앙" num = {12222} >이런식으로 넘기라는건가</MyComponent>;
  // return (
  //   //return 안이 완전히 비어있는 경우에는 오류가 납니다.


  //     <div>
  //       { intvalue == 2 ? (
  //       <h1>
  //         지금 이거 테스트 중인데...
  //       </h1>)
  //         :
  //         (<h2>
  //           {MyComponent}
  //         </h2>)

  //       }
  //     </div>

  // );
}

export default App;
