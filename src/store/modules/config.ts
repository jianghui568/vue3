import { defineStore } from "pinia";
import { ref, computed } from "vue";
import piniaStore from "..";

const useConfigStore = defineStore('config', () => {
    // state
    const size = ref('small')
    const locale = ref('zh-cn')
    const systemTitle = ref('工单ViteVue')

    // getters 
    const getLocale = computed(() => { return locale })

    return {
        size,
        locale,
        systemTitle,
        getLocale
    }
})

export const configStore = useConfigStore(piniaStore)