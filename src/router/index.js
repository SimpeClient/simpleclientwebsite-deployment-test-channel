import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from "@/views/TeamView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    {
      path: '/discord',
      // eslint-disable-next-line no-unused-vars
      redirect: to => {
        window.open('https://discord.gg/HY9b9XDqTN', '_blank').focus();
      }
    },
    {
      path: '/github',
      // eslint-disable-next-line no-unused-vars
      redirect: to => {
        window.location.href = "https://github.com/SimpeClient"
      }
    },
    {
      path: '/download',
      // eslint-disable-next-line no-unused-vars
      redirect: async to => {
        const owner = 'FabiPunktExe'; // Replace with the owner/organization name
        const repo = 'SimpleLauncher'; // Replace with the repository name

        try {
          const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases`);
          if (!response.ok) {
            throw new Error('Failed to fetch releases');
          }
          const releases = await response.json();
          const downloadUrl = releases[0].assets[0].browser_download_url;
          window.location.href = downloadUrl;
        } catch (error) {
          console.error(error); // Handle the error
        }
      }
    }
  ]
})
export default router
