import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useForgotPassword = () => {
  const { showToast } = useCustomToast();
  const loading = ref(false);

  const forgotPassword = async (payload: any) => {
    loading.value = true;
    try {
      const res = await auth_api.$_forgot_password(payload);
      showToast({
        title: "Success",
        message: "Password reset link sent!",
        toastType: "success",
        duration: 3000,
      });
      return res.data;
    } catch (error) {
      showToast({
        title: "Error",
        message: "Failed to send reset link.",
        toastType: "error",
        duration: 3000,
      });
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { forgotPassword, loading };
};
