


const NewBloggPost = () => {


    return (
        <>
            <h2>Skriv ett inlägg!</h2>
            <label>Rubrik:</label>
            <input id="heading" type="text" placeholder="Rubrik..." />
            <textarea name="blogg-text" id="blogg-text" placeholder="Skriv din text här..."></textarea>
        </>
    )
}

export default NewBloggPost;