import { ref } from "vue";
import { projectStorage } from "@/configs/firebase";
import { useUser } from "@/composables/useUser";

const {} = useUser();

const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref(null);
  const url = ref(null);

  async function uploadFile(record) {
    filePath.value = `${name}/`;
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
