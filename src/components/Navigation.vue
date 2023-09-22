<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
   <div class="nav_wrapper">
      <nav class="nav_container">
          <div>
            <RouterLink to="/">
            <h1>Uptify</h1>
          </RouterLink>
          </div>
          <div class="hamburger_menu">
            <img src="../assets/hamburger.svg" alt="">
          </div>
      </nav>
   </div>
</template>
  
  <style scoped lang="scss">
    .nav_wrapper {
      padding: 10px;
      width: 100%;
      z-index: 100;
      color: var(--color-white);

      a {
        text-decoration: none;
        color: var(--color-white);
      }

      @media only screen and (max-width: 900px) {
        padding: 0;
      }

      h1 {
        font-weight: 900;
        margin-top: -20px;
        font-size: 30px;

        @media only screen and (max-width: 900px) {
          margin: 0;
        }
      }
    }
    .nav_container {
      display: flex;
      flex-direction: row;
      padding: 13px;
      align-items: center;
      justify-content: space-between;
    }
    .hamburger_menu {
      background: var(--color-gradient);
      width: 64px;
      cursor: pointer;
      display: flex;
      border-radius: 50%;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 64px;

      @media only screen and (max-width: 900px)  {
          background: none;
      }
    }


  </style>
  
