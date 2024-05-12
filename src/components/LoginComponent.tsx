import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../features/firebaseConfig";


const LogInComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCrediential) => {
                console.log('Inloggad', userCrediential);
                navigate('/start');

            })
            .catch((error) => {
                console.log(error.message);

            });
    }

    const signInUser = async () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredinteial) => {
                console.log('Inloggad', userCredinteial);
                navigate('/start');
            })
            .catch((error) => {
                console.log(error.message);

            })
    }

    return (
        <>
            <section className="main-container">
                <label>E-mail:</label>
                <input type="text" placeholder="Email.." id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Lösenord:</label>
                <input type="password" placeholder="Lösenord.." value={password} onChange={(e) => setPassword(e.target.value)} />
                <section>
                    <button onClick={signInUser}>LogIn</button>
                    <button onClick={createUser}>SignUp</button>
                </section>
            </section>

        </>
    )
}

export default LogInComponent;