import { defineStore } from "pinia";

export default defineStore("userStore", {
    state: () => ({
        username: "不具名的你",
    }),

    actions: {
        updateName(string) {
            this.username = string;
        },
    },
});
