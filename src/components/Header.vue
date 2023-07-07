<script setup>
import {RouterLink} from "vue-router";
</script>

<template>
    <header>
      <img alt="SimpleClient logo" class="logo" src="@/assets/icon.ico" width="50" height="50"/>

      <div class="wrapper">
        <nav>
          <RouterLink class="header-item-link-routerlink" to="/"><span class="header-item-link">Home</span></RouterLink>
          <RouterLink class="header-item-link-routerlink" to="/download"><span class="header-item-link">Download</span></RouterLink>
          <RouterLink class="header-item-link-routerlink" to="/team"><span class="header-item-link">Team</span></RouterLink>
          <RouterLink class="header-item-link-routerlink" to="/discord"><span class="header-item-link">Discord</span></RouterLink>
          <RouterLink class="header-item-link-routerlink" to="/github"><span class="header-item-link">Github</span></RouterLink>
        </nav>
      </div>
    </header>
</template>

<style scoped>
  header {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    right: 0;
    min-width: 95%;
    max-width: 95%;
    max-height: 70px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .logo {
    position: relative;
    top: 10px;
    left: 20px;
  }

  .header-item-link {
    margin-left: 15px;
    margin-outside: 15px;
    gap: 20px;
    color: #ffffff;
    font-size: 30px;
    text-decoration: none;
    background: var(--color-background-mute);
    padding: 5px;
    padding-top: 2px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 5px;
    transition: 0.5s ease-in-out;
    font-family: Consolas;
    background: #2d2d2d;
    background-size: 400%;
  }

  .header-item-link:hover {
    background: #5d009b;
  }

  .header-item-link-routerlink {
    text-decoration: none;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    gap: 20px;
    position: relative;
    top: -45px;
  }
</style>