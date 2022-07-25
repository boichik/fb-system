import { Auth } from 'firebase/auth';
import { FirebaseApp } from 'firebase/app';

export interface FirebaseStore {
  client: FirebaseApp | null;
  app: Auth | null;
}
