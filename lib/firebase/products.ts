import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  description: string;
}

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(collection(db, "products"));
  return snapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name ?? "",
      price: data.price ?? "",
      image: data.image ?? "",
      description: data.description ?? "",
    };
  });
}

export async function addProduct(
  product: Omit<Product, "id">
): Promise<string> {
  const docRef = await addDoc(collection(db, "products"), product);
  return docRef.id;
}
