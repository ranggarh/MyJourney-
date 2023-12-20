import FIREBASE from '../config/FIREBASE';

const addSaldoFunc = async (topUpAmount) => {
  try {
    // Check if Firebase is initialized
    if (!FIREBASE.apps.length) {
      throw new Error('Firebase is not initialized');
    }

    // Get the current user from Firebase Authentication
    const currentUser = FIREBASE.auth().currentUser;

    // Check if a user is signed in
    if (currentUser) {
      const userId = currentUser.uid;

      // Assuming you have a reference to the 'users' node in your database
      const userRef = FIREBASE.database().ref(`users/${userId}`);

      // Retrieve the current saldo
      const snapshot = await userRef.once('value');
      const currentSaldo = snapshot.val().saldo || 0; // Default to 0 if saldo doesn't exist

      // Calculate the new saldo by adding the top-up amount
      const newSaldo = currentSaldo + topUpAmount;

      // Update the saldo for the user as a number
      await userRef.update({ saldo: newSaldo });

      console.log('Saldo Berhasil Ditambahkan');
    } else {
      throw new Error('No user is currently signed in');
    }
  } catch (error) {
    console.error('Gagal Menambahkan Saldo:', error);
    throw error;
  }
};

export default addSaldoFunc;
