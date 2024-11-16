export function useClipboard() {
    const copyToClipboard = async (text: string): Promise<void> => {
      try {
        await navigator.clipboard.writeText(text);
        console.log("Text copied to clipboard:", text);
      } catch (error) {
        console.error("Failed to copy text:", error);
      }
    };
  
    return {
      copyToClipboard,
    };
  }
  