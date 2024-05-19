import { Link } from "react-router-dom";



const StartingPageComponent = () => {

    return (
        <>
            <section className="main-container">
                <h2>Välkommen till en blogg där man får dela med sig av sina tankar!</h2>
                <section>
                    <button><Link to='/login'>Logga in</Link></button>

                </section>

            </section>
        </>
    )
}

export default StartingPageComponent;