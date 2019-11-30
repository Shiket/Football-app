import app from 'firebase/app';
import 'firebase/auth'
import FirebaseContext, { withFirebase } from './context';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    doCreateUserWithEmailAndPassword = async (email, password) =>
        await this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = async (email, password) =>
        await this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = async () => await this.auth.signOut();
    doPasswordReset = async email => await this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = async password => await this.auth.currentUser.updatePassword(password);

    getUserById = async uid => await this.db.ref(`users/${uid}`);
    getAllUsers = async () => await this.db.ref('users');

    getRefToFav = async uid => {
        await this.db.ref(`users/${uid}/favourites`)
    }

    getAllFavouriteTeams = async uid => {
        const fav = await this.db.ref(`users/${uid}/favourites`).on("value", snapshot => {
            const favourite = snapshot.val();
            // console.log(fav)
            // console.log(favourite)
        })
    }
    addTeamToFavorite = async (userId, teamId) => {
        const user = await this.db.ref(`users/${userId}`).push({ favourites: teamId })
        //console.log(user);
    }
}

export default Firebase;

export { FirebaseContext, withFirebase };
