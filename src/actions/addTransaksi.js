import { getDatabase, ref, push, set } from 'firebase/database';

const addTransaksi = async (userId, transactionDetails) => {
  const db = getDatabase();
  const userTransactionsRef = ref(db, `users/${userId}/transaksi`);
  const newTransactionRef = push(userTransactionsRef);

  await set(newTransactionRef, transactionDetails);

  return newTransactionRef.key;
};



export default addTransaksi;
