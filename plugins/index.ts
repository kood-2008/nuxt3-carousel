import { defineNuxtPlugin } from "#app";
//全局引入elementplus的ui库
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    // Doing something with nuxtApp

    nuxtApp.vueApp.use(ElementPlus);
})
