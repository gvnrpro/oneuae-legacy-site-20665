/// <reference types="vite/client" />

interface CloudinaryGalleryWidget {
  render(): void;
}

interface CloudinaryInstance {
  galleryWidget(config: {
    container: string;
    cloudName: string;
    mediaAssets: Array<{ tag: string }>;
    [key: string]: any;
  }): CloudinaryGalleryWidget;
}

declare global {
  interface Window {
    cloudinary?: CloudinaryInstance;
  }
}
