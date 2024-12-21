import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useResetPassword = () => {
  const { showToast } = useCustomToast();
  const loading = ref(false);

  const resetPassword = async (payload: any) => {
    loading.value = true;
    try {
      const res = await auth_api.$_reste_password(payload);
      showToast({
        title: "Success",
        message: "Password reset successful!",
        toastType: "success",
        duration: 3000,
      });
      return res.data;
    } catch (error) {
      showToast({
        title: "Error",
        message: "Password reset failed.",
        toastType: "error",
        duration: 3000,
      });
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { resetPassword, loading };
};
