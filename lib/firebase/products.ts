import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function addProduct(product: {
  name: string;
  price: string;
  image: string;
}) {
  const docRef = await addDoc(collection(db, "products"), product);
  return docRef.id;
}
