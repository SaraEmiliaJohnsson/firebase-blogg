import { Link } from "react-router-dom"



const LandingPage = () => {

    return (
        <>
            <section className="main-container">
                <h2>Välkommen till en blogg där man får dela med sig av sina tankar!</h2>
                <h3>Välj om du vill skriva ett inlägg eller läsa vad andra har skrivit:</h3>
                <section>
                    <button><Link to='/newpost'>Skriv ett inlägg</Link></button>
                    <button><Link to='/allposts'>Läs alla inlägg</Link></button>
                </section>

            </section>
        </>
    )
}

export default LandingPage;