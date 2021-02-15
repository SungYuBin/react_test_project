import logo from './logo.svg';
import './App.css';

function App() {
  const value = "고정값이지만 이건 맘에드는군요";
  const intvalue = 1;
  return (
    //return 안이 완전히 비어있는 경우에는 오류가 납니다.


      <div>
        { intvalue == 2 ? (
        <h1>
          지금 이거 테스트 중인데...
        </h1>)
          :
          (<h2>
            잘되고 있긴한건가;
            {value}
    우와아아아 이거 다시 실행안해도 디자인 수정된다니
    너무신기하다
          </h2>)

        }
      </div>

  );
}

export default App;
