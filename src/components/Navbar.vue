<template>
  <div>
    <v-app-bar app flat>
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = true"></v-app-bar-nav-icon>

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2 d-none d-md-flex"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="30"
      />

      <v-toolbar-title class="text-uppercase d-none d-md-flex">{{ title }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn-toggle class="d-none d-md-flex" v-model="text" color="accent-3" group>
        <v-btn x-large>Työvuorot</v-btn>

        <v-btn x-large>Matkalukut</v-btn>

        <v-btn x-large>Työsuoritteet</v-btn>

        <v-btn x-large>Kalenteri</v-btn>
      </v-btn-toggle>

      <v-spacer></v-spacer>

      <v-avatar color="grey lighten-2" size="40">
        <span class="white--text headline">CJ</span>
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
  name: "Navbar",
  data: () => ({
    // Title
    title: "Työvuor.ot",
    drawer: false,
    group: null
  })
};
</script>
