import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useTransaction = async (id) => {
  const transaction = await userCollection.doc(id).get();
  return transaction.exists ? transaction.data() : null;
};

export default useTransaction;
