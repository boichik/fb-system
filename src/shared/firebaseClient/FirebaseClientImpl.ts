import {
  FirebaseAuthWithEmailAndPassword,
  FirebaseClient,
  FirebaseClientAuth,
} from './interface/FirebaseClient';

import { FirebaseApp, initializeApp } from 'firebase/app';
import { Auth, getAuth, signInWithCredential, EmailAuthProvider } from 'firebase/auth';
import { injectable } from 'inversify-props';

@injectable()
export class FirebaseClientImpl implements FirebaseClient {
  private _app: FirebaseApp | null = null;
  private _auth: Auth | null = null;

  get firebaseApp() {
    return this._app;
  }

  get firebaseClient() {
    return this._auth;
  }

  initialize(): void {
    this._app = initializeApp({
      apiKey: FB_API_KEY,
      authDomain: FB_AUTH_DOMAIN,
      projectId: FB_PROJECT_ID,
      storageBucket: FB_STORAGE_BUCKET,
      messagingSenderId: FB_MESSAGE_SD_ID,
      appId: FB_APP_ID,
      measurementId: FB_MEASUREMENT_ID,
    });
  }

  auth(): FirebaseClientAuth {
    return {
      getAuthData: () => this._getAuth(),

      signInEmail: (data: FirebaseAuthWithEmailAndPassword) => this._signInEmail(data),
    };
  }

  private _getAuth() {
    this._auth = getAuth(this._app!);
  }

  private _signInEmail(data: FirebaseAuthWithEmailAndPassword) {
    const { email, password } = data;

    const provider = EmailAuthProvider.credential(email, password);

    return signInWithCredential(this._auth!, provider);
  }
}
