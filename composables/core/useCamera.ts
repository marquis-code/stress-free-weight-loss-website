import { ref, Ref } from 'vue';

export const useCamera = () => {
  const stream = ref<MediaStream | null>(null);
  const videoRef: Ref<HTMLVideoElement | null> = ref(null);
  const mediaRecorder = ref<MediaRecorder | null>(null);
  const isRecording = ref(false);
  const recordedChunks = ref<Blob[]>([]);

  const startCamera = async (deviceId?: string) => {
    try {
      // Stop any existing stream
      if (stream.value) {
        stream.value.getTracks().forEach(track => track.stop());
      }

      // Set constraints for the camera
      const constraints: MediaStreamConstraints = {
        video: deviceId ? { deviceId: { exact: deviceId } } : true,
        audio: true,
      };

      // Request camera stream
      stream.value = await navigator.mediaDevices.getUserMedia(constraints);

      // Assign stream to video element
      if (videoRef.value) {
        videoRef.value.srcObject = stream.value;
        await videoRef.value.play(); // Ensure video starts playing
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
      throw error;
    }
  };

  /**
   * Stop the camera and release resources.
   */
  const stopCamera = () => {
    if (stream.value) {
      stream.value.getTracks().forEach(track => track.stop());
      stream.value = null;
    }
    if (videoRef.value) {
      videoRef.value.srcObject = null;
    }
  };

  /**
   * Capture a photo and return it as a MediaFile object.
   */
  const takePhoto = (): Promise<MediaFile> => {
    return new Promise((resolve, reject) => {
      if (!videoRef.value || !stream.value) {
        reject('Camera not initialized');
        return;
      }

      const canvas = document.createElement('canvas');
      canvas.width = videoRef.value.videoWidth;
      canvas.height = videoRef.value.videoHeight;
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        reject('Could not get canvas context');
        return;
      }

      ctx.drawImage(videoRef.value, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) {
          reject('Could not create blob');
          return;
        }

        const file = new File([blob], `photo-${Date.now()}.jpg`, { type: 'image/jpeg' });
        const preview = canvas.toDataURL('image/jpeg');
        resolve({ file, preview });
      }, 'image/jpeg');
    });
  };

  /**
   * Start recording video.
   */
  const startRecording = () => {
    if (!stream.value) return;

    recordedChunks.value = [];
    mediaRecorder.value = new MediaRecorder(stream.value);

    mediaRecorder.value.ondataavailable = (e) => {
      if (e.data.size > 0) {
        recordedChunks.value.push(e.data);
      }
    };

    mediaRecorder.value.start();
    isRecording.value = true;
  };

  /**
   * Stop recording video and return it as a MediaFile object.
   */
  const stopRecording = (): Promise<MediaFile> => {
    return new Promise((resolve, reject) => {
      if (!mediaRecorder.value) {
        reject('No recording in progress');
        return;
      }

      mediaRecorder.value.onstop = () => {
        const blob = new Blob(recordedChunks.value, { type: 'video/webm' });
        const file = new File([blob], `video-${Date.now()}.webm`, { type: 'video/webm' });
        const preview = URL.createObjectURL(blob);
        resolve({ file, preview });
      };

      mediaRecorder.value.stop();
      isRecording.value = false;
    });
  };

  return {
    videoRef,
    isRecording,
    stream,
    startCamera,
    stopCamera,
    takePhoto,
    startRecording,
    stopRecording,
  };
};
