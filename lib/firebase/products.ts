import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  limit as limitFn,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "@lib/types";

const productsRef = collection(db, "products");

export async function getProducts(): Promise<Product[]> {
  const snapshot = await getDocs(productsRef);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Product));
}

export async function getProduct(id: string): Promise<Product | null> {
  const ref = doc(db, "products", id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() } as Product;
}

export async function addProduct(product: Omit<Product, "id">) {
  await addDoc(productsRef, product);
}

export async function updateProduct(id: string, updated: Partial<Product>) {
  const ref = doc(db, "products", id);
  await updateDoc(ref, updated);
}

export async function deleteProduct(id: string) {
  const ref = doc(db, "products", id);
  await deleteDoc(ref);
}

export async function getProductsPaginated(
  limit: number,
  lastDoc: QueryDocumentSnapshot<DocumentData> | null
) {
  let q = query(productsRef, orderBy("name"), limitFn(limit));
  if (lastDoc) {
    q = query(
      productsRef,
      orderBy("name"),
      startAfter(lastDoc),
      limitFn(limit)
    );
  }
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Product)
  );
  const lastVisible = snapshot.docs[snapshot.docs.length - 1];
  return { data, lastDoc: lastVisible };
}
