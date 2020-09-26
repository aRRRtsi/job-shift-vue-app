<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Kalenteri</h1>
        <Calendar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Calendar from '../components/Calendar';

export default {
  name: 'Kalenteri',
  components: {
    Calendar,
  },
};
</script>
