import { FirebaseAuthWithEmailAndPassword } from '@/shared/firebaseClient/interface/FirebaseClient';

export interface User {
  id: string | null;
  email: string | null;
  name: string | null;
  avatar: string | null;
}

export interface UserStore {
  currentUser: User | null;

  signIn(data: FirebaseAuthWithEmailAndPassword): Promise<void>;
  logOut(): Promise<void>;
}
