import { Auth, UserCredential } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';

export interface FirebaseClientAuth {
  getAuthData(): void;
  signInEmail(data: FirebaseAuthWithEmailAndPassword): Promise<UserCredential>;
}

export interface FirebaseAuthWithEmailAndPassword {
  email: string;
  password: string;
}

export interface FirebaseClient {
  firebaseApp: FirebaseApp | null;
  firebaseClient: Auth | null;
  initialize(): void;
  auth(): FirebaseClientAuth;
}
