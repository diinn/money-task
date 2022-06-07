import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useCollection = (name) => {
  async function addRecord() {
    const error = ref(null);
    error.value = null;
    try {
      const response = await projectAuth.signOut();
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return { addRecord };
};

export default { useCollection };
