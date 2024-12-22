import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const credential = {
  email: ref(""),
  password: ref(""),
};

export const useAdminLogin = () => {
  const router = useRouter();
  const loading = ref(false);

  const isFormDisabled = computed(() => {
    return (
      loading.value || !credential.email.value || !credential.password.value
    );
  });

  const login = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_admin_login({
        email: credential?.email?.value?.toLowerCase(),
        password: credential.password.value,
      });
      // window.location.href = "/dashboard"

      if(res.status == 200 || res.status == 201){
        console.log(res, 'res here');
        useUser().createUser(res.data);
        showToast({
          title: "Success",
          message: "Admin Login was successful!",
          toastType: "success",
          duration: 3000
        });
        router.push("/admin/dashboard");
        window.location.href = "/dashboard"
      }

    } catch (error) {
      showToast({
        title: "Error",
        message: "Login Error",
        toastType: "error",
        duration: 3000
      });
    } finally {
      loading.value = false;
    }
  };

  return { credential, login, loading, isFormDisabled };
};
