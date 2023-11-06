import { defineStore } from "pinia";
import { useNotificationStore } from "./notification";
import axiosClient from "../axios";

export const useDocumentStore = defineStore("document", {
  state: () => ({
    documents: [],
    currentDocument: {},
    modalViewDocument: false,
    modalDeleteDocument: false,
  }),

  getters: {},
  
  actions: {
    async getDocuments() {
      return await axiosClient.get('/documents')
      .then((response) => {
        this.documents = response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    },


    async createDocument(document) {
      const storeNotification = useNotificationStore()
      let form = new FormData();
      
      form.append('title', document.title);
      form.append('description', document.description);
      form.append('file', document.file);
      form.append('date_document', document.date_document);
      form.append('status', document.status);
      document = form;

      return await axiosClient.post('/documents/store', document)
      .then(() => {
        storeNotification.notification('success', 'Documento creado con éxito');
      })
      .catch(() => {
        storeNotification.notification('error', 'Error al crear el documento');
      });
    },


    async updateDocument(document) {
      const storeNotification = useNotificationStore();
      const id = document.id;
      if(document.file){
        let form = new FormData();
      
        form.append('title', document.title);
        form.append('description', document.description);
        form.append('file', document.file);
        form.append('date_document', document.date_document);
        form.append('status', document.status);
        document = form;
      }
      return await axiosClient.post(`/documents/update/${id}`, document)
      .then(() => {
        storeNotification.notification('success', 'Documento actualizado con éxito');
        console.log('Documento actualizado con éxito');
      })
      .catch((error) => {
        storeNotification.notification('error', 'Error al actualizar el documento');
        console.log(error.response);
      });
    },


    async getDocument(document) {
      return await axiosClient.get(`/documents/show/${document}`)
      .then((response) => {
        this.currentDocument = response.data;
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    },


    viewDocument(document) {
      this.modalViewDocument = false;
      setTimeout(() => {
        this.currentDocument = this.documents.find((doc) => doc.id === document);
        this.modalViewDocument = true;
      }, 100);
    },


    modalDelete(document) {
      this.modalDeleteDocument = false;
      setTimeout(() => {
        this.currentDocument = this.documents.find((doc) => doc.id === document);
        this.modalDeleteDocument = true;
      }, 100);
    },


    async deleteDocument(document) {
      return await axiosClient.post(`/documents/delete/${document}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error.response);
      })
      .finally(() => {
        this.modalDeleteDocument = false;
        this.getDocuments();
      });
    },


  },

});
