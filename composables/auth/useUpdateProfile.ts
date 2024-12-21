import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

export const useUpdateProfile = () => {
  const { showToast } = useCustomToast();
  const loading = ref(false);

  const updateProfile = async (payload: any) => {
    loading.value = true;
    try {
      const res = await auth_api.$_update_profile(payload);
      showToast({
        title: "Success",
        message: "Profile updated successfully!",
        toastType: "success",
        duration: 3000,
      });
      return res.data;
    } catch (error) {
      showToast({
        title: "Error",
        message: "Profile update failed.",
        toastType: "error",
        duration: 3000,
      });
      throw error;
    } finally {
      loading.value = false;
    }
  };

  return { updateProfile, loading };
};
