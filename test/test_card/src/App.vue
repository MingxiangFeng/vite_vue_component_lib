<script setup>
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { loadScirptFn, loadCssFn } from '@/utils/async'

onMounted(() => {
  loadCssFn('http://127.0.0.1:8080/style.css?v=4', () => {
    console.log('加载css成')
  })
  loadScirptFn('http://127.0.0.1:8080/lib.umd.js?v=4', () => {
    console.log('加载js完成')

    setTimeout(() => {
      window.HonorEcgCardInit.mountEntry('#ecgCardEntry', {
        theme: 'light'
      })
    }, 3000)
  })
})

const changeTheme = () => {
  window.HonorEcgCardInit.mountEntry('#ecgCardEntry', {
    theme: 'dark'
  })
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <div id="ecgCardEntry"></div>

      <br />
      <button @click="changeTheme">更改颜色</button>

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
