import '@/assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';

import TheHeader from '@/components/layout/TheHeader.vue';
import TheMain from '@/components/layout/TheMain.vue';

const app = createApp(App);

app.component('TheHeader', TheHeader);
app.component('TheMain', TheMain);

app.mount('#app');
