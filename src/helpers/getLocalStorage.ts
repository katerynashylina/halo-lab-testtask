export function getDataFromLocalStorage(key: string, defaultValue: any) {
  const storageData = localStorage.getItem(key);
  return storageData ? JSON.parse(storageData) : defaultValue;
}