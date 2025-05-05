import {createApp} from 'vue'  //引入createApp創建一個 Vue 應用
import App from './App.vue'  //專案的主元件檔案，相當於整個網站/應用的起點。

const app = createApp(App)  //這個 `app` 就是一個完整的 Vue 應用，內容為 App 組件。
app.mount('#app')  //讓 App 元件的內容出現在這個 <div> 裡。