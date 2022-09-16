<template>
  <AppHeader />

  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" mode="out-in"></component>
    </transition>
  </router-view>

  <AppPlayer />

  <Auth />
</template>

<script>
import { mapWritableState } from "pinia";
import AppHeader from "./components/AppHeader.vue";
import Auth from "./components/Auth.vue";
import AppPlayer from "./components/Player.vue";
import useUserStore from "@/stores/user";
import { auth } from "@/includes/firebase";

export default {
  name: "App",
  components: { AppHeader, Auth, AppPlayer },
  computed: {
    ...mapWritableState(useUserStore, ["userLoggedIn"]),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    }
  },
};
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
