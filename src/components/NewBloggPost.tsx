import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import db from "../features/firebaseConfig";


export interface BloggPost {
    id?: string,
    rubrik: string,
    text: string,
    createdAt: string
}



const NewBloggPost = () => {
    const [rubrik, setRubrik] = useState('');
    const [text, setNewText] = useState('');

    const handleSave = async () => {

        const bloggPost: BloggPost = {
            rubrik: rubrik,
            text: text,
            createdAt: new Date().toISOString()
        };

        try {
            await addDoc(collection(db, 'bloggposts'), bloggPost);
            setRubrik('');
            setNewText('');
        } catch (error) {
            console.error('Error adding document', error);
        }

    }

    return (
        <>
            <section className="main-container">
                <h2>Skriv ett inlägg!</h2>
                <label>Rubrik:</label>
                <input id="heading" type="text" placeholder="Rubrik..." value={rubrik} onChange={e => setRubrik(e.target.value)} />
                <br />
                <label htmlFor="blogg-text">Skriv din text här:</label>
                <textarea name="blogg-text" id="blogg-text" placeholder="Skriv din text här..." value={text} onChange={e => setNewText(e.target.value)}></textarea>
                <button type="button" onClick={handleSave}>Skicka</button>
            </section >
        </>

    )
}

export default NewBloggPost;