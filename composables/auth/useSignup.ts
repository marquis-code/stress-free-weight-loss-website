import { ref } from 'vue';
import { auth_api } from "@/api_factory/modules/auth";
import { useCustomToast } from '@/composables/core/useCustomToast';

const credentials = ({
    name: ref(''),
    email: ref(''),
    phone: ref(''),
    password: ref(''),
    subscriptionPlan: ref('')
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
            subscriptionPlan: credentials.subscriptionPlan.value,
          }
      );
      console.log(res, 'res here')
      if(res.status == 200 || res.status == 201){
        showToast({
            title: "Success",
            message: "Signup successful!",
            toastType: "success",
            duration: 3000,
          });
          router.push('/login')
      } else {
        showToast({
          title: "Error",
          message: res.data.messages[0],
          toastType: "error",
          duration: 3000,
        });
      }
      loading.value = false
  };

  const isFormDisabled = computed(() => {
    return (
      loading.value || !credentials.email.value || !credentials.password.value || !credentials.name.value || !credentials.phone.value
    );
  });

  return { signup, loading, credentials, isFormDisabled };
};
