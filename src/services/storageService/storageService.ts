import { ProductModel } from 'models';

/**
 * localStorage관련 서비스
 */

export const storageService = {
  getItem(key: string) {
    return localStorage.getItem(key);
  },

  setItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  },

  removeItem(key: string) {
    return localStorage.removeItem(key);
  },

  clear() {
    return localStorage.clear();
  },

  checkCart(id: ProductModel['id']): boolean {
    const cart = storageService.getItem('cart-class101');
    if (!cart) return false;
    const cartItems = JSON.parse(
      storageService.getItem('cart-class101') as string,
    );
    if (cartItems.includes(id)) return true;

    return false;
  },
};
