<template>
  <v-container>
    <v-row>
      <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
        <JobShifts />
      </v-col>
      <v-col cols="12" xl="4" lg="4" md="6" sm="6" xs="12">
        <TravelExp />
      </v-col>
      <v-col cols="12" xl="4" lg="4" md="12" sm="12" xs="12">
        <Jobs />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <Calendar />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import JobShifts from "../components/JobShifts";
import TravelExp from "../components/TravelExp";
import Jobs from "../components/Jobs";
import Calendar from "../components/Calendar";

export default {
  name: "Home",
  components: {
    JobShifts,
    TravelExp,
    Jobs,
    Calendar
  }
};
</script>
