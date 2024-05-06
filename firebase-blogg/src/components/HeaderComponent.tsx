import { Link } from "react-router-dom";


const HeaderComponent = () => {

    return (
        <>
            <section className="header-container">
                <nav>
                    <ul>
                        <li><Link to='/'>Startsida</Link></li>
                        <li><Link to='/newpost'>Skriv ett inlägg</Link></li>
                        <li><Link to='/allposts'>Läs inlägg</Link></li>
                    </ul>
                </nav>
            </section>
        </>
    )
}

export default HeaderComponent;