import { ChangeEvent } from "react";
class FileUtils {
  static getLoadedImages = (event: ChangeEvent<HTMLInputElement>, callback: (images:string[])=>void): string[] => {
    const imagesSRC: string[] = [];
    const selectedFiles = event.target.files;
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        if (file.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageSrc = e.target?.result as string;
              imagesSRC.push(imageSrc);
              callback(imagesSRC);
          };
          reader.readAsDataURL(file);
        }
      }
    }
    return imagesSRC;
  };
}

export default FileUtils;
