import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from "@/composables/core/useCustomToast";
const { showToast } = useCustomToast();

const credential = {
  email: ref(""),
  password: ref(""),
};

export const useLogin = () => {
  const router = useRouter();
  const loading = ref(false);

  const isFormDisabled = computed(() => {
    return (
      loading.value || !credential.email.value || !credential.password.value
    );
  });

  const login = async () => {
    loading.value = true;

    const res = await auth_api.$_login({
      email: credential?.email?.value?.toLowerCase(),
      password: credential.password.value,
    });
    // window.location.href = "/dashboard"
    console.log(res, "res here outside");

    if (res.status == 200 || res.status == 201) {
      console.log(res, "res here");
      useUser().createUser(res.data);
      showToast({
        title: "Success",
        message: "Login was successful!",
        toastType: "success",
        duration: 3000,
      });
      router.push("/dashboard");
      window.location.href = "/dashboard"
    } else {
      showToast({
        title: "Error",
        message: res.data.message,
        toastType: "error",
        duration: 3000,
      });
    }
    loading.value = false;
  };

  return { credential, login, loading, isFormDisabled };
};
