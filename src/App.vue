<script lang="ts">
import { defineComponent } from 'vue';
import SidebarLeft from '@/components/SidebarLeft.vue';
import MainContent from '@/components/MainContent.vue';
import TopNavbar from '@/components/TopNavbar.vue';

export default defineComponent({
  name: 'App',
  components: {
    SidebarLeft,
    MainContent,
    TopNavbar
  }
});
</script>

<template>
  <div class="app-container">
    
    
    <aside class="dmenu">
       <TopNavbar />
    </aside>

    <aside class="sidebar">
      <SidebarLeft />
    </aside>
    
    <main class="main-content">
      <MainContent />
    </main>

    
    
  </div>
</template>

<style scoped>

.app-container {
  width: 1120px;
  float: left;
  margin: 0 auto;
}

.sidebar {
  
  border-radius: 30px;
  border: 1px solid #565656;
  position:fixed;
  left: 20px;
  width: 300px;
  height: 80vh;
  top:50%;
  transform: translateY(-50%);
  z-index: 10;
}

.dmenu {
  flex-direction: column;
  border-radius: 100px;
  border: 1px solid #565656;
  position:fixed;
  right: 68px;
  text-align: center;
  gap: 20px;
  padding :20px 0;
  background: #1f1f1f;
  z-index: 20;
  width:55px;
  top: 50%;
  transform: translateY(-50%);
}

.main-content {
  margin-left: auto;
  max-width: 770px;
  background-color: #1f1f1f;
  margin-top: 40px;
}

</style>
