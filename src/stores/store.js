// store.js
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
  }),
  actions: {
    login() {
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
    },
  },
});

export const useItemStore = defineStore({
  id: 'item',
  state: () => ({
    selectedItem: null,
  }),
  actions: {
    selectItem(item) {
      this.selectedItem = item;
    },
    clearSelectedItem() {
      this.selectedItem = null;
    },
  },
});
