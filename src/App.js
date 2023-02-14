
import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './component/auth';
import {db} from './config/firebase'
import {getDocs, collection, addDoc} from 'firebase/firestore'

function App() {
  const [movieList, setMovieList] = useState([])


  // new movie state
  const [newMovieTitle, setNewMovieTitle] = useState("")
  const [newReleaseDate, setNewReleaseDate] = useState(0)
  const [isNewMovieOscar, setIsNewMovieOscar] = useState(false)


  const movieCollectionRef = collection(db, "movies")


  const getMovieList = async () => {
    try{
      const data = await getDocs(movieCollectionRef)
      const filterData = data.docs.map((doc) => ({...doc.data() , id: doc.id}))

      setMovieList(filterData)
    }catch(err){
      console.error(err)
    }
  }

  useEffect(()=>{
    getMovieList()
  }, [])


  const onSubmitMovie = async () => {

    try {
      await addDoc(movieCollectionRef, {
        title: newMovieTitle, 
        releaseDate: newReleaseDate, 
        recivedAnOscar: isNewMovieOscar
      })
    getMovieList()

    } catch(err){
      console.error(err)
    }
   
  }

  return (
    <div className="App">
     <Auth/>

     <div>
      <input placeholder='Movie title..' onChange={(e) => setNewMovieTitle(e.target.value)}/>
      <input placeholder='Release Date..' type="number" onChange={(e) => setNewReleaseDate(Number(e.target.value))}/>
      <input type="checkbox" checked={isNewMovieOscar} onChange={(e) => setIsNewMovieOscar(e.target.value)}/>
      <label>recived oscar</label>
      <button onClick={onSubmitMovie}>submit movie</button>
     </div>

     <div>{movieList.map((movie) => (
      <div>
          <h1 style={{color: movie.recivedAnOscar ? "green" : "red"}} >{movie.title}</h1>
        <p>Date:{movie.releaseDate}</p>
      </div> 
     ))}</div>
    </div>
  );
}

export default App;
