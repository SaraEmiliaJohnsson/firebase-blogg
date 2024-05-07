import { useEffect, useState } from "react";
import { BloggPost } from "./NewBloggPost";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import db from "../features/firebaseConfig";




const SeeAllBloggPosts = () => {
    const [bloggPosts, setBloggPosts] = useState<BloggPost[]>([]);

    useEffect(() => {

        const unsubscribe = onSnapshot(collection(db, 'bloggposts'), (snapshot) => {
            const bloggPostList: BloggPost[] = snapshot.docs.map(doc => ({ ...doc.data() as BloggPost, id: doc.id }));
            setBloggPosts(bloggPostList);
        })

        return () => unsubscribe();
    }, []);

    const handleDelete = async (bloggpost: BloggPost) => {
        if (!bloggpost.id) {
            console.error('Error');
            return;
        }
        const confirmDelete = window.confirm(`Är du säker på att du vill radera inlägget?: ${bloggpost.rubrik}?`)
        if (confirmDelete) {
            const docRef = doc(db, 'bloggposts', bloggpost.id);
            try {
                await deleteDoc(docRef);
            } catch (error) {
                console.error('Error removing document: ', error);
            }
        }
    };

    const content = bloggPosts.map(bloggpost => (
        <li key={bloggpost.id}>
            {bloggpost.rubrik}
            <br /><br />{bloggpost.text}
            <br /><br />{bloggpost.createdAt}
            <br /><br />
            <button onClick={() => handleDelete(bloggpost)}>Radera inlägg</button>

        </li>
    ))

    return (
        <>
            <section className="main-allposts-container">
                <ul className="blogg-post-container">
                    {content}
                </ul>
            </section>
        </>
    )
}

export default SeeAllBloggPosts;