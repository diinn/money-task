import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref("");
  const url = ref(null);

  async function addRecord(record) {
    error.value = null;
    try {
      const response = await projectFirestore.collection(name).add(record);
      return response;
    } catch (err) {
      console.log(err);
      error.value = err.message;
    }
  }
  return { error, addRecord };
};

export default useStorage;
