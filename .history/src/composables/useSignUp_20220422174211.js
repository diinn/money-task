import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  error.value = null;

  const response = await projectAuth.createUserWithEmailAndPassword(
    email,
    password
  );
  if (!response) throw new Error("Không thể tạo tài khoản!");
  return response;
}

export function useSignUp() {
  return {};
}
