import * as admin from 'firebase-admin';
import {getFirestore} from 'firebase-admin/firestore';
import {getStorage} from 'firebase-admin/storage';
import serviceAccount from '../config/serviceAccount';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = getFirestore();

db.settings({ignoreUndefinedProperties: true});

export const storage = getStorage();

export default admin;
