<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Työvuorot</h1>
        <JobShifts />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobShifts from '../components/JobShifts';

export default {
  name: 'Tyovuorot',
  components: {
    JobShifts,
  },
};
</script>
