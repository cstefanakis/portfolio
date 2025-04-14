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
    
    <aside class="sidebar">
      <SidebarLeft />
    </aside>

    <main>
      <aside class="dmenu">
       <TopNavbar />
      </aside>
      <MainContent />
    </main>

    
    
  </div>
</template>

<style scoped>

  .app-container {
    max-width: 800px;
    float: left;
    margin-left: 330px;
    
  }

  .sidebar {
    
    border-radius: 20px;
    border: 1px solid #565656;
    position:fixed;
    left: 20px;
    width: 315px;
    height: 95vh;
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


@media screen and (max-width: 1250px) {
  .dmenu {
    all: unset;
  }
}
@media screen and (max-width: 980px) {

  .sidebar {
    display: none;
  }

  .app-container {
    margin-left: 0;
  }
}

</style>
