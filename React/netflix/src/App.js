import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes , Route} from 'react-router-dom';
import Hompage from './page/Hompage';
import Movie from './page/Movie'
import MovieDtail from './page/MovieDetail';
import Naviation from './components/Naviation';


// 1. 3개페이지 필요 홈페이지, movie 페이지, movie detail
// 2. 홈페이지에서 배너를 볼수 있다.
// 3. 3가지 세션의 영화를 볼 수 있다. (popular, top rated, upcoming)
// 4. 각 영화에 마우스에 올려두면, 제목, 장르, 점수, 인기도, 청불 여부
// 5. 영화 슬라이드로 넘기면서 볼수 있다.

// 6. 영화 디테일 페이지에서 영화에 대한 디테일한 정보를 볼수 있다.(포스터, 재목, 줄거리 , 점수, 인기도, 청불여부, 예산 , 등등)
// 7. trailer 를 누르면 예고편을 볼수 있다.
// 8. 영화에 리뷰를 볼 수 있다. 
// 9.추천 관련된 영화도 볼 수 있다.
// 10. 영화 검색
// 11. 영화 정렬
// 12. 영화를 필터링 할수 있다.

function App() {



  return (
    <div className="App">
      <Naviation />
        <Routes>
          <Route path="/" element={<Hompage/>} /> 
          <Route path="/movie" element={<Movie/>} /> 
          <Route path="/movie/:id" element={<MovieDtail />} />
        </Routes>
    </div>
  );
}

export default App;
