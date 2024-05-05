


const NewBloggPost = () => {


    return (
        <>
            <section className="main-container">
                <h2>Skriv ett inlägg!</h2>
                <label>Rubrik:</label>
                <input id="heading" type="text" placeholder="Rubrik..." />
                <br />
                <textarea name="blogg-text" id="blogg-text" placeholder="Skriv din text här..."></textarea>
            </section >
        </>

    )
}

export default NewBloggPost;