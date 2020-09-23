<template>
  <v-card>
    <v-footer :padless="padless">
      <v-card flat width="100%" class="grey lighten-3 text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 footer-icon" icon>
            <v-icon size="24px">{{ icon }}</v-icon>
          </v-btn>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          {{ new Date().getFullYear() }} —
          <strong>arileskinen.com</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-mail", "mdi-facebook", "mdi-instagram"],
    padless: true
  })
};
</script>

<style scoped>
.footer-icon:hover {
  transform: scale(1.2);
  transition: ease-in-out 0.3s;
}
</style>