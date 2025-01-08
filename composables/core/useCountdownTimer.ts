import { ref, onMounted, onUnmounted } from "vue";

export function useCountdownTimer(createdAt: string, subscriptionExpiry: string) {
  const timeLeft = ref<string>("");
  const isExpired = ref(false);
  let timer: ReturnType<typeof setInterval>;

  const calculateTimeLeft = () => {
    const now = new Date();
    const expiryDate = new Date(subscriptionExpiry);
    const remainingTime = expiryDate.getTime() - now.getTime();

    if (remainingTime <= 0) {
      isExpired.value = true;
      timeLeft.value = "Expired";
      clearInterval(timer);
      return;
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    // Dynamically adjust the output based on remaining time
    if (days > 0) {
      timeLeft.value = `${days}d ${hours}h`;
    } else if (hours > 0) {
      timeLeft.value = `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
      timeLeft.value = `${minutes}m ${seconds}s`;
    } else {
      timeLeft.value = `${seconds}s`;
    }
  };

  onMounted(() => {
    calculateTimeLeft();
    timer = setInterval(calculateTimeLeft, 1000);
  });

  onUnmounted(() => {
    clearInterval(timer);
  });

  return { timeLeft, isExpired };
}
