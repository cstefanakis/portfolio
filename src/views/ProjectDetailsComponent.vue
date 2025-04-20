<script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default defineComponent({
    name: 'ProjectDetailComponent',
    setup() {
        const route = useRoute();
        const project = ref<any>(null);
        
  
      onMounted(async () => {
        try {
          const response = await fetch('/projects.json');
          const projects = await response.json();
          project.value = projects.find((p: any) => p.id === parseInt(route.params.id as string));
        } catch (error) {
          console.error('Error loading project:', error);
        }
      });
  
        const goToGithub = (url: string) => {
            window.open(url, '_blank');
        };

        const getGithubOwner = (url: string): string | null => {
        const match = url.match(/github\.com\/([^/]+)/);
        return match ? match[1] : null;
        };
    
      return { project, goToGithub, getGithubOwner};
    },
  });
</script>


<template>
<div class="article-content">
    <div v-if="project">
      <h2>{{ project.title }}</h2>
      <img :src="project.img" :alt="project.title" class="detail-image" />
      <p v-html="project.description"></p>
      <button @click="goToGithub(project.github)">GitHub</button>

        <div v-if = "project.developers">
            <h3>Developers</h3>
                <div class="developer-container">
                    <div v-for="(developer, index) in project.developers" :key="index">
                        <a :href = developer.github > 
                            <div class = "developer">{{ getGithubOwner(developer.github) }}</div></a>
                    </div>
            </div>
        </div>

        <div v-if="project.videos && project.videos.length > 0">
            <h3>Presentation</h3>
                <div class="video-container">
                    <div v-for="(video, index) in project.videos" :key="index">
                        <a :href="video.url">
                            <div class = "video-box">
                                    <img class="icons" src="https://img.icons8.com/?size=96&id=19318&format=png"/>
                                    <div class ="video-title">{{ video.title }}</div>
                            </div>
                        </a>
                    </div>
                </div>
        </div>

        <div v-if="project.technologies">
        <h3>Technologies</h3>
            <div class="container">
                <div v-for="(category, index) in project.technologies" :key="index">
     
                    <div class="box-container">
                        <h3>{{ category.category }}</h3>
                        <div class="skills-container">
                            <div v-for="technology in category.technologies" :key="technology" class="technology-item">
                                <div class="skill-item">
                                    <img :src="technology.icon" :alt="technology.name" class="icons" />
                                    <p>{{ technology.name }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div v-else>
      <p>Loading project...</p>
    </div>
</div>
</template>

<style scoped>
.container, .developer-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 10px;
}

.developer-container {
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 10px;
    
}

.video-box{
    border: 1px solid white;
    border-radius: 10px;
    padding: 10px;
    background-color: #2e2c2c;
}

.video-box:hover{
    border: 1px solid #565656;
}

.video-title{
    color: white;
    text-decoration: none;
    text-align: center;
}

.video-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.developer{
    text-decoration: none;
    color: white;
    border: 1px solid white;
    padding: 10px;
    border-radius: 10px;
}
.developer:hover {
    border: 1px solid #00FF84;
}
  .detail-image {
    width: 100%;
    max-width: 400px;
    margin-bottom: 15px;
    border-radius: 10px;
  }

  @media screen and (max-width: 810px) {

.icons {
  height: 30px;
}

}

@media screen and (max-width: 570px) {
.container{
  flex-direction: column;
}

}
  </style>
  