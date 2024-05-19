import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../features/firebaseConfig";


const HeaderComponent = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log('Utloggad');
            navigate('/')

        } catch (error) {
            console.error('Error logging out', error);
        }
    };

    return (
        <>
            <section className="header-container">
                <nav>
                    <ul>
                        <li><Link to='/'>Startsida</Link></li>
                        {isLoggedIn ? (
                            <li className="login-link" onClick={handleLogout}><Link to='/'>Logout</Link></li>
                        ) : (
                            <li className="login-link"><Link to='/login'>Login</Link></li>
                        )}


                        <li><Link to='/newpost'>Skriv ett inlägg</Link></li>
                        <li><Link to='/allposts'>Läs inlägg</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default HeaderComponent;