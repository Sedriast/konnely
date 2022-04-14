import { auth } from './credentials_';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export function login_() {
	return signInWithPopup(auth, provider).then();
}

export function logout_() {
	auth.signOut();
}
