import { defineStore } from 'pinia';
import axiosClient from '../axios';
import { useNotificationStore } from './notification';


export const useNoticeStore = defineStore('notice', {
  state: () => ({
    notices: [],
    currentNotice: {},
    modalViewNotice: false,
    modalDeleteNotice: false,
    errorsMessage: [],
    isOpenNotification: false,
    typeNotification: '',
    messageNotification: '',
  }),

  getters: {},
  
  actions: {
    async getNotices() {
      return await axiosClient.get('/notices')
      .then((response) => {
        this.notices = response.data;
      })
      .catch((error) => {
        console.log(error.response);
        return error.response.data;
      });
    },


    async createNotice(notice) {
      const storeNotification = useNotificationStore();
      if(notice.image){
        notice = this.formData(notice); 
      }
      return await axiosClient.post('/notices/store', notice)
      .then((response) => {
          storeNotification.notification(response.data.status, response.data.message);
          console.log(response.data);
      })
    },


    async updateNotice(notice) {
      const id = notice.id;
      if(notice.image){
        let form = new FormData();
      
        form.append('title', notice.title);
        form.append('slug', notice.slug);
        form.append('description', notice.description);
        form.append('image', notice.image);
        form.append('status', notice.status);
        notice = form;
      }
      return await axiosClient.post(`/notices/update/${id}`, notice)
      .then(() => {
        this.notification('success', 'Noticia actualizada con éxito');
      })
      .catch((error) => {
        this.notification('error', 'Error al actualizar la noticia');
        console.log(error.response);
      });
    },


    async getNotice(notice) {
      return await axiosClient.get(`/notices/show/${notice}`)
      .then((response) => {
        this.currentNotice = response.data;
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    },


    viewNotice(notice) {
      this.modalViewNotice = false;
      setTimeout(() => {
        this.currentNotice = this.notices.find((not) => not.id === notice);
        this.modalViewNotice = true;
      }, 100);
    },


    modalDelete(notice) {
      this.modalDeleteNotice = false;
      setTimeout(() => {
        this.currentNotice = this.notices.find((not) => not.id === notice);
        this.modalDeleteNotice = true;
      }, 100);
    },


    async deleteNotice(notice) {
      return await axiosClient.post(`/notices/delete/${notice}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {
        this.modalDeleteNotice = false;
        this.getNotices();
      });
    },
    

    formData(notice) {
      let form = new FormData();
      form.append('title', notice.title);
      form.append('slug', notice.slug);
      form.append('description', notice.description);
      form.append('image', notice.image);
      form.append('status', notice.status);
      return form;
    }

  },
});
