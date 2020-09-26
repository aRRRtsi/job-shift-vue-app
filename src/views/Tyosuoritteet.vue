<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Työsuoritteet</h1>
        <Jobs />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Jobs from '../components/Jobs';

export default {
  name: 'Tyosuoritteet',
  components: {
    Jobs,
  },
};
</script>
