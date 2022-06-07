import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  const response = await projectAuth.createUserWithEmailAndPassword(
    email,
    password
  );
  if (!response) throw new Error("Không thể tạo tài khoản");
}

export function useSignUp() {
  return {};
}
