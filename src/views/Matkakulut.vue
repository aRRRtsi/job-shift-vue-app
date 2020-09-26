<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Matkakulut</h1>
        <TravelExp />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TravelExp from '../components/TravelExp';

export default {
  name: 'Matkakulut',
  components: {
    TravelExp,
  },
};
</script>
