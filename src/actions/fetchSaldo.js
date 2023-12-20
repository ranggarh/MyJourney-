import { getDatabase, ref, get } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const fetchUserSaldoFromFirebase = async () => {
  try {
    const auth = getAuth();
    const currentUserPromise = new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error('No user is currently signed in'));
        }
      });
    });

    const currentUser = await currentUserPromise;
    const userId = currentUser.uid;

    const db = getDatabase();
    const userRef = ref(db, `users/${userId}`);
    const snapshot = await get(userRef);

    if (!snapshot.exists()) {
      console.error(`User with ID ${userId} not found`);
      return 0; // Default to 0 if user not found
    }

    const userData = snapshot.val();
    const userSaldo = userData.saldo || 0;

    console.log('Fetched User Saldo Data:', userData);

    return userSaldo;
  } catch (error) {
    console.error('Error fetching user saldo from Firebase:', error);
    throw error;
  }
};
