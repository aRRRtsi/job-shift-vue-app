<template>
  <v-card class="mx-auto pa-5" outlined>
    <v-text-field
      label="Työvuorot tunteina"
      placeholder="Lisää uusi työvuoro numeroina esim 8"
      v-model="jobShift"
      v-on:keyup.enter="addJobShift"
    >
      <template v-slot:append>
        <v-btn large text @click="addJobShift">Lisää</v-btn>
      </template>
    </v-text-field>
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-list-item v-for="jobShift in allJobShifts" :key="jobShift.id">
          <v-list-item-content>
            <v-list-item-title>
              {{ jobShift.date | moment('D.M.YYYY') }} |
              {{ jobShift.hours }} tuntia
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "JobShifts",
  data() {
    return {
      jobShift: ""
    };
  },
  methods: {
    addJobShift() {
      this.allJobShifts.push({
        id: this.allJobShifts.length,
        hours: parseInt(this.jobShift),
        date: new Date()
      });
      this.jobShift = "";
    }
  },
  computed: mapGetters(["allJobShifts"])
};
</script>
