import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

const credentials = ({
    name: ref(''),
    email: ref(''),
    phone: ref(''),
    password: ref('')
  })



export const useSignup = () => {
  const { showToast } = useCustomToast();
  const loading = ref(false);
  const router = useRouter()

  const signup = async () => {
    loading.value = true;
    const res = await auth_api.$_signup(
        {
            email: credentials?.email?.value?.toLowerCase(),
            password: credentials.password.value,
            phone: credentials.phone.value,
            name: credentials.name.value,
          }
      );
      if(res.status == 200 || res.status == 201){
        showToast({
            title: "Success",
            message: "Signup successful!",
            toastType: "success",
            duration: 3000,
          });
          router.push('/login')
      } else {
        router.push('/login')
      }
      loading.value = false
      router.push('/login')
    // try {
    //   const res = await auth_api.$_signup(
    //     {
    //         email: credentials?.email?.value?.toLowerCase(),
    //         password: credentials.password.value,
    //         phone: credentials.phone.value,
    //         name: credentials.name.value,
    //       }
    //   );
    //   showToast({
    //     title: "Success",
    //     message: "Signup successful!",
    //     toastType: "success",
    //     duration: 3000,
    //   });
    //   return res.data;
    // } catch (error) {
    //   showToast({
    //     title: "Error",
    //     message: "Signup failed.",
    //     toastType: "error",
    //     duration: 3000,
    //   });
    //   throw error;
    // } finally {
    //   loading.value = false;
    // }
  };

  const isFormDisabled = computed(() => {
    return (
      loading.value || !credentials.email.value || !credentials.password.value || !credentials.name.value || !credentials.phone.value
    );
  });

  return { signup, loading, credentials, isFormDisabled };
};
