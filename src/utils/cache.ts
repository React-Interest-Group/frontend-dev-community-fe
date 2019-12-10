// 读取缓存中的Key值
export const getKeyFromCache = (key: string) => {
  return localStorage.getItem(key);
};

// 设置缓存中的Key值
export const setKeyInCache = (key: string, value: string) => {
  return localStorage.setItem(key, value);
};
