<template>
    <div>
      <Home />
      <Profile />
      <Experience />
      <Contact />
      <Navbar />
      <Footer />
      <router-view />   
    </div>
</template>
  
  <script>
  import { createRouter, createWebHistory } from 'vue-router';
  
  import Home from './components/Home/HomeComp.vue';
  import Profile from './components/Profile/ProfileComp.vue';
  import Experience from './components/Experience/ExperienceComp.vue';
  import Contact from './components/Contact/ContactComp.vue';
  import Navbar from './components/Navbar/NavbarComp.vue';
  import Footer from './components/Footer/FooterComp.vue';
  

  const routes = [
    { path: '/home', component: Home },
    { path: '/profile', component: Profile },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
    { path: '/navbar', component: Navbar },
    { path: '/footer', component: Footer },
    
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default {
    components: {
      Home,
      Profile,
      Experience,
      Contact,
      Navbar,
      Footer,
      
    },
    router
  }
  </script>
  
  <style> 
  .home-container-fluid {
    width: 100%;
    height: 100%;
  }
  </style>
  