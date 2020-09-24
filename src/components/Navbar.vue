<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 d-none d-md-flex"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="30"
      />

      <v-toolbar-title class="text-uppercase d-none d-md-flex">
        <router-link class="toolbar-title" to="/">{{ title }}</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn-toggle class="d-none d-md-flex" color="accent-3" group>
        <v-btn x-large to="/tyovuorot">Työvuorot</v-btn>

        <v-btn x-large to="/matkakulut">Matkalukut</v-btn>

        <v-btn x-large to="/tyosuoritteet">Työsuoritteet</v-btn>

        <v-btn x-large to="/kalenteri">Kalenteri</v-btn>
      </v-btn-toggle>

      <v-spacer></v-spacer>

      <v-avatar color="grey lighten-2 profile-link-avatar" size="40">
        <router-link class="white--text headline profile-link" to="/profiili"
          >CJ</router-link
        >
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="text--accent-3">
          <v-list-item>
            <v-list-item-title>Työvuorot</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Matkalukut</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Työsuoritteet</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Kalenteri</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    // Title
    title: 'Työvuor.ot',
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped>
.toolbar-title {
  text-decoration: none !important;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-size: 1.2em;
}
.profile-link {
  text-decoration: none !important;
}
.profile-link-avatar {
  transition: ease-in-out 0.3s;
}
.profile-link-avatar:hover {
  transform: scale(1.2);
  transition: ease-in-out 0.3s;
}
</style>
