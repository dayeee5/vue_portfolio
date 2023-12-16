import { createWebHistory, createRouter } from "vue-router";

import Navbar from "../components/Navbar/NavbarComp.vue";

import HomeComp from "../components/Home/HomeComp.vue";
import ProfileComp from "../components/Profile/ProfileComp.vue";
import ExperienceComp from "../components/Experience/ExperienceComp.vue";
import Contact from "../components/Contact/ContactComp.vue";
import Footer from "../components/Footer/FooterComp.vue";

const routes = [
  { path: "/", component: Navbar },
  { path: "/home", component: HomeComp },
  { path: "/profile", component: ProfileComp },
  { path: "/experience", component: ExperienceComp },
  { path: "/contact", component: Contact },
  { path: "/footer", component: Footer },
];

  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;
