import { Link } from "react-router-dom";



const StartingPageComponent = () => {

    return (
        <>
            <section className="main-container">
                <h1>Välkommen till en blogg där man får dela med sig av sina tankar!</h1>
                <button><Link to='/newpost'>Skriva ett inlägg</Link></button>
                <button><Link to='/allposts'>Läsa alla inlägg</Link></button>
            </section>
        </>
    )
}

export default StartingPageComponent;