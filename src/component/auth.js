import {auth, googleProvider} from '../config/firebase'
import {createUserWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react'


export const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const signIn = async () => {
      await createUserWithEmailAndPassword(auth, email, password)
    }

    
    const signInWithGoogle = async () => {
      await signInWithPopup(auth, googleProvider)
    }

    
    const logOut = async () => {
        await signOut(auth)
      }

    return (
        <div>
            <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="password.."  onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={signIn}>Sign in</button>
            <button onClick={signInWithGoogle}>Sign with google</button>
            <button onClick={logOut}>log out</button>

        </div>
    )
}