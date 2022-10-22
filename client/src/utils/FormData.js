export default function convertFormData(formData) {
    const convertedData = {};
    formData.forEach((value, key) => convertedData[key] = value);
    return convertedData;
}