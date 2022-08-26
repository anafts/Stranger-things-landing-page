import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'
import app from "./app.js"

export async function subscribeToHellfireClub(subscription) {

    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-club');
    const docRef = await addDoc(hellfireClubCollection, subscription)

    return docRef.id
};