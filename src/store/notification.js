import { defineStore } from 'pinia';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        isOpenNotification: false,
        typeNotification: '',
        messageNotification: '',
    }),

    getters: { },

    actions: {
        notification(type, message) {
            this.typeNotification = type;
            this.messageNotification = message;
            this.isOpenNotification = true;
      
            setTimeout(() => {
              this.isOpenNotification = false;
            }, 3000);
        },
    },
    
});
