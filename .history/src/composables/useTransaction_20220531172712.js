import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useTransaction = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export default useTransaction;
