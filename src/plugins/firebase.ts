import * as firebase from "firebase/app"
import "firebase/firestore"
import "firebase/firestorage"
import "firebase/auth"
import "firebase/functions"
import "firebase/analytics"

import { firebaseConfig } from "@/config/firebase-config.ts";

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const functions = firebase.functions();
export const analytics = firebase.analytics();
export const firestore = firebase.firestore;
export const authObject = firebase.auth;