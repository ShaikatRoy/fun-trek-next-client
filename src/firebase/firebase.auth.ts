import firebase from "./firebase.config";
import "firebase/compat/auth";

const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export default auth;
