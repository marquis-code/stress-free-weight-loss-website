import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useUpdatePassword = () => {
  const { showToast } = useCustomToast();
  const loading = ref(false);

  const updatePassword = async (payload: any) => {
    loading.value = true;
    try {
      const res = await auth_api.$_update_password(payload);
      showToast({
        title: "Success",
        message: "Password updated successfully!",
        toastType: "success",
        duration: 3000,
      });
      return res.data;
    } catch (error) {
      showToast({
        title: "Error",
        message: "Password update failed.",
        toastType: "error",
        duration: 3000,
      });
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { updatePassword, loading };
};
