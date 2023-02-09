import { defineStore } from "pinia";
import { ref } from 'vue'
import piniaStore from "..";

const useUserStore = defineStore('user', () => {
    // state
    const username = ref('')

    return {
        username
    }
})


export const userStore = useUserStore(piniaStore)