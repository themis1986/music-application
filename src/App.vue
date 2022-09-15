<template>
  <AppHeader />

  <router-view></router-view>

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

<style></style>
