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

  function getRecord() {
    // const response = await projectFirestore.collection("transactions").get();
    // return await response.docs.map((doc) => {
    //   return { ...doc.data(), id: doc.id };
    // });
    return "abc";
  }

  return { error, addRecord, getRecord };
};

export default useCollection;
