<template>
    <el-dropdown @command="handleCommand" size="medium">
        <div class="el-dropdown-link">
            <img class="dropdown-lang" src="../assets/lang.png" />
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item v-for="item in langs" :key="item.id" :command="item.id">
                    {{ item.val }}
                </el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { configStore } from '../store/modules/config';
import { useI18n } from 'vue-i18n'


export default defineComponent({


    setup() {
        const i18n = useI18n()
        console.log('locale', i18n, i18n.messages.value)

        // state 
        const name = configStore.locale

        // computed
        const langs = computed(() => {
            let langs = []
            for (const el in i18n.messages.value) {

                const item = i18n.messages.value[el]
                langs.push({
                    id: el,
                    val: item.message.language
                })
                console.log('el:', el, item.message.language)
            }
            return langs
        })
        console.log('langslangslangslangs:', langs.value)
        // function
        function handleCommand(comand: String) {
            console.log('command:', comand)
        }
        return {
            langs,
            name,
            handleCommand
        }
    }
})

</script>
<style>
.el-dropdown-link {
    float: right;
    margin-right: 50px;
    width: 30px;
    height: 30px;
}

.dropdown-lang {
    margin-right: 10px;
    width: 100%;
    /* height: 30px; */
}

.example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;

}
</style>