import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useTransaction = async (id) => {
  const transaction = await userCollection.doc(id).get();
  return transaction.exists ? transaction.data() : null;
};
const useLoadTransactions = () => {
  const transactions = ref([]);
  const close = userCollection.onSnapshot((snapshot) => {
    userCollection.value = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  });
  onUnmounted(close);
  return userCollection;
};

export default { useTransaction, useLoadTransactions };
