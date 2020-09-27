<template>
  <v-card class="mx-auto pa-5" outlined>
    <v-text-field
      label="Matkakulut kilometreinä"
      placeholder="Lisää uusi matkakulu numeroina esim 25"
      v-model="travelExp"
      v-on:keyup.enter="addTravelExp"
    >
      <template v-slot:append>
        <v-btn large text @click="addTravelExp">Lisää</v-btn>
      </template>
    </v-text-field>
    <v-list shaped>
      <v-list-item-group color="primary">
        <v-list-item v-for="travelExp in allTravelExps" :key="travelExp.id">
          <v-list-item-content>
            <v-list-item-title>
              {{ travelExp.date | moment('D.M.YYYY') }} |
              {{ travelExp.distance }} km |
              {{ travelExp.price }}
              €
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
  name: "TravelExp",
  data() {
    return {
      travelExp: ""
    };
  },
  methods: {
    addTravelExp() {
      this.allTravelExps.push({
        id: this.allTravelExps.length,
        distance: parseInt(this.travelExp),
        price: Math.floor(this.travelExp * 0.2),
        date: new Date()
      });
      this.travelExp = "";
    }
  },
  computed: mapGetters(["allTravelExps"])
};
</script>
