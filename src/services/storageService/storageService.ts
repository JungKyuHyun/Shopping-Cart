/**
 * localStorage에 접근하기 위해 만든 서비스
 */

export const storageService = {
  getItem(key: string) {
    return localStorage.getItem(key);
  },

  setItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  },

  clear() {
    return localStorage.clear();
  },
};
