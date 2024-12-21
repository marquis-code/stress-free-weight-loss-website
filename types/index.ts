// types/index.ts
export default interface MediaFile {
    file: File;
    preview: string;
  }
  
  export default interface Activity {
    name: string;
    image: MediaFile | null;
    video: MediaFile | null;
    timestamp: Date;
  }
  
  export default interface Meal {
    name: string;
    image: MediaFile | null;
    video: MediaFile | null;
    timestamp: Date;
  }
  