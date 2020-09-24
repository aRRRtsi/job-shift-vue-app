<template>
  <v-card class="mx-auto pa-5" outlined>
    <v-text-field
      label="Työvuorot"
      placeholder="Lisää uusi työvuoro numeroina esim 8"
      v-model="job"
      v-on:keyup.enter="addJobShift"
    >
      <template v-slot:append>
        <v-btn large text @click="addJobShift">Lisää</v-btn>
      </template>
    </v-text-field>
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-list-item v-for="job in allJobs" :key="job.id">
          <v-list-item-content>
            <v-list-item-title>{{
              job.date | moment('D.M.YYYY')
            }}</v-list-item-title>
            <v-list-item-subtitle>{{ job.content }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Jobs',
  data() {
    return {
      job: '',
    };
  },
  methods: {
    addJobShift() {
      this.allJobs.push({
        id: this.allJobs.length,
        date: Date.now(),
        content: this.job,
      });
    },
  },
  computed: mapGetters(['allJobs']),
};
</script>
