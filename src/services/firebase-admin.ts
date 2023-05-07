import * as admin from 'firebase-admin';
import {getFirestore} from 'firebase-admin/firestore';
import {getStorage} from 'firebase-admin/storage';

import * as serviceAccount from './firebase-application-credentials.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export const db = getFirestore();

db.settings({ignoreUndefinedProperties: true});

export const storage = getStorage();

export default admin;
