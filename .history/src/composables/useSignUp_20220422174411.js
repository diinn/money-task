import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!response) throw new Error("Không thể tạo tài khoản!");
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.Message
  } finally
}

export function useSignUp() {
  return {};
}
