import { ref } from "vue";
import { projectFirestore } from "@/configs/firebase";

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

const useCollection = () => {
  return { addRecord };
};

export default { useCollection };
