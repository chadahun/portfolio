import './App.css';
import { FaGithub } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className='text'>
        <h3>안녕하세요</h3>
        <h3>프론트엔드 개발자</h3>
        <h3>차다훈입니다.</h3>
      </div>
      <div className='nav'>
        <div className='email'>cdhqw@naver.com</div>
        <div className='stack'>stack</div>
        <a rel='github' href='https://github.com/chadahun/portfolio.git' target='_blank'><FaGithub fontSize={'50px'} color='white' cursor={'pointer'}/></a>
        <div></div>
      </div>
    </div>
  );
}

export default App;
