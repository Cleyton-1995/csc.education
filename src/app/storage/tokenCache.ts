import * as SecureStore from "expo-secure-store";

async function getToken(key: string) {
  try {
    return SecureStore.getItemAsync(key);
  } catch (error) {
    throw error;
  }
}

async function saveToken(key: string, value: string) {
  try {
    return SecureStore.setItemAsync(key, value);
  } catch (error) {
    throw error;
  }
}

const tokenCache = { getToken, saveToken };

export default tokenCache;
