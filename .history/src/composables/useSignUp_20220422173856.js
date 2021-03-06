import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

function signup(email, password) {
  projectAuth.createUserWithEmailAndPassword(email, password);
}

export function useSignUp() {
  return {};
}
