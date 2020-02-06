import firebase from 'firebase/app';
import 'firebase/firestore';



firebase.initializeApp({
    apiKey: "AIzaSyDyjvoLjVI6ouAWq55DLBX56cwGASejAHs",
    authDomain: "tandil-mercado.firebaseapp.com",
    projectId: "tandil-mercado",
});

let db = firebase.firestore();

db.settings({}); // saque esto porque se supone que ya es por defecto asi timestampsInSnapshots: true

export default db;