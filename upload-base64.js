  const imageUploader = async (e) => {
        const base64 = await convertBase64(e.target.files[0]);
        setSaveImage(base64)
    }
    
    const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result)
        }
        fileReader.onerror = ((error) => {
            reject(error);
        })
    })
}
