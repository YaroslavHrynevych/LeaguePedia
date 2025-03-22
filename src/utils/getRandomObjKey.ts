export const getRandomKey =(obj: {}) => {
    const keys = Object.keys(obj);
    if (keys.length === 0) return null;


    const randomIndex = Math.floor(Math.random() * keys.length);
    return keys[randomIndex];
}
