
import './App.scss';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return(
  
  <Router>
    <Header />
    <Routes>
      <Route path='/' element = {<Home />}/>
    </Routes>
    </Router>
  );
}

export default App;



// 97a05db20f5b36e24dd1d8c56deeb9d3
// curl --request GET \
    //  --url 'https://api.themoviedb.org/3/account/20265540/rated/movies?language=en-US&page=1&sort_by=created_at.asc' \
    //  --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5N2EwNWRiMjBmNWIzNmUyNGRkMWQ4YzU2ZGVlYjlkMyIsInN1YiI6IjY0ZDA5ZTIwNmQ0Yzk3MDBjYjdlOWRkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VkCeE0iOTgGilVwdO2xyvT41t4FRmOnCs13rzRtNuDw' \
    //  --header 'accept: application/json'
