<template>
    <div class="login-container">
        404{{ $t('hello') }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({

    data() {
        // console.log('xxxxxxxttttttttt:', $t)
        return {
            form: {},
            rules: {}
        }
    },
})
</script>

<style lang="scss" scoped>
.login-container {
    width: 100%;
    height: 100%;
    background: url('../assets/images/login_background.jpg') center center fixed no-repeat;
    background-size: cover;

}
</style>
