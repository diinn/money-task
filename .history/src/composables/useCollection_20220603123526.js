import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

const useCollection = (name) => {
  const error = ref(null);

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

  async function getRecord() {
    const response = await projectFirestore.collection("transactions").get();
    const result = await response.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    return result;
  }

  return { error, addRecord, getRecord };
};

export default useCollection;
