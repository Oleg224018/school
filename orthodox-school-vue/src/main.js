import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './styles/main.css'

import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import EducationPage from './pages/EducationPage.vue'
import UpbringingPage from './pages/UpbringingPage.vue'
import NewsPage from './pages/NewsPage.vue'
import ParentsPage from './pages/ParentsPage.vue'
import ContactsPage from './pages/ContactsPage.vue'
import AdmissionPage from './pages/AdmissionPage.vue'
import HistoryPage from './pages/HistoryPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/education', component: EducationPage },
  { path: '/upbringing', component: UpbringingPage },
  { path: '/news', component: NewsPage },
  { path: '/parents', component: ParentsPage },
  { path: '/contacts', component: ContactsPage },
  { path: '/admission', component: AdmissionPage },
  { path: '/history', component: HistoryPage }
]

createApp(App).use(createRouter({ history: createWebHistory(), routes })).mount('#app')
