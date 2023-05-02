import { defineStore } from "pinia";

export default defineStore("userStore", {
    state: () => ({
        username: "",
    }),

    actions: {
        updateName(string) {
            this.username = string;
        },
    },
});
