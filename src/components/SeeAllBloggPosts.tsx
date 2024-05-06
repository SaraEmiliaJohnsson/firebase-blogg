import { useEffect, useState } from "react";
import { BloggPost } from "./NewBloggPost";
import { collection, onSnapshot } from "firebase/firestore";
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


    const content = bloggPosts.map(bloggpost => (
        <li key={bloggpost.id}>
            {bloggpost.rubrik} {bloggpost.text} {bloggpost.createdAt}

        </li>
    ))

    return (
        <>
            <section>
                <ul>
                    {content}
                </ul>
            </section>
        </>
    )
}

export default SeeAllBloggPosts;