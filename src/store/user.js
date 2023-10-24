import { defineStore } from 'pinia';
import axiosClient from '../axios';

export const useUserStore = defineStore('user', {
    state: () => ({
        user: {
            data: {},
            token: 'null',
        },
    }),

    getters: {},

    actions: {
        async login(data) {
            return await axiosClient.post('/login', data)
            .then(({ data }) => {
                this.setUser(data.user);
                this.setToken(data.token);
                return data;
            });
        },

        async logout() {
            return await axiosClient.post('/logout')
            .then((response) => {
                this.setUser({});
                this.setToken(null);
                return response;
            });
        },

        async getUser(data) {
            return await axiosClient.get('/user', data)
            .then(({ data }) => {
                this.setUser(data);
                return data;
            });
        },

        setUser(user) {
            this.user.data = user;
        },

        setToken(token) {
            this.user.token = token;
            if (token) {
                this.user.token = token;
            } else {
                this.user.token = null;
            }
        },
    },

    persist: [
        {
            paths: ['user.data', 'user.token'],
            storage: localStorage,
        },
    ],
});
