
import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './component/auth';
import {db} from './config/firebase'
import {getDoc} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])

  useEffect(()=>{
    const getMovieList = async () => {

    }
  })

  return (
    <div className="App">
     <Auth/>
    </div>
  );
}

export default App;
