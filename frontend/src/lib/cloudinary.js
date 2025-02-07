export const uploadImageToCloudinary = async (imageFile) => {
    const uploadPreset = import.meta.env.VITE_PRESET
    const cloudName = import.meta.env.VITE_CLOUD_NAME
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("upload_preset", uploadPreset); // Set up in Cloudinary

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        return data.secure_url; // Get the URL of the uploaded image
    } catch (error) {
        console.error("Image upload failed", error);
        return null;
    }
};
