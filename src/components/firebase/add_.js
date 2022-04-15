import { collection, addDoc } from 'firebase/firestore';
import { db } from './credentials_';

export async function AddInventory(item) {
	await addDoc(collection(db, 'inventory'), item);
}
