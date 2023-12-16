import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App).use(router);

app.use(router);             // 라우팅
app.mount("#app");       // 마운팅
