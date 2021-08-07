<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link class="navbar-logo" to="/">{{ title }}</router-link>
        <ul class="navbar-list">
          <li class="navbar-item" v-for="link in links" :key="link.alias">
            <router-link :to="link.url" class="navbar-link">{{
              link.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import { app, links } from "@/_config";

export default {
  data() {
    return {
      title: app.title,
      links: links,
    };
  },
};
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  padding: 20px 0;
  background-color: #fff;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
}
.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navbar-logo {
  color: #000;
  font-weight: 700;
}
.navbar-list {
  display: flex;
  align-items: center;
  justify-content: center;
}
.navbar-item {
  margin-right: 30px;
  cursor: pointer;
}
.navbar-item:last-child {
  margin-right: 0;
}
.navbar-link {
  display: block;
  transition: all 0.2s ease;
  color: #aa8ad6;
}
.navbar-link.isActive,
.navbar-link.router-link-active,
.navbar-link.router-link-exact-active {
  text-decoration: underline;
}
</style>