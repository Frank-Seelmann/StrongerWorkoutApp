<template>
  <div class="box">
    <form class="card" @submit.prevent="$emit('add')">
      <div class="box">
        <div class="field">
          <div class="control">
            <label class="label">Enter your workout</label>
            <input
              class="input"
              type="text"
              placeholder="Ex. Dumbbell Curls"
              v-model="task.name"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Number of Reps x Sets</label>
            <input
              class="input"
              placeholder="Ex. 10 x 4"
              v-model="task.repsAndSets"
            />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <label class="label">Weight</label>
            <input
              class="input"
              placeholder="Ex. 20lbs"
              v-model="task.weight"
            />
          </div>
        </div>
        <div class="field is-grouped" id="buttons">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <button class="button is-link is-light" type="reset">Cancel</button>
          </div>
        </div>
        <br />
        <div class="field">
          <p class="content"><b>Who'd you work out with?</b> {{ selected }}</p>
          <o-field label="Who'd you work out with?">
            <o-autocomplete
              rounded
              expanded
              v-model="name"
              :data="filteredDataArray"
              placeholder="e.g. @JewPaltz"
              icon="search"
              clearable
              @select="(option) => (selected = option)"
            >
              <template v-slot:empty>No results found</template>
            </o-autocomplete>
          </o-field>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { GetAll } from "../services/users";

export default {
  props: {
    newTask: Object,
  },
  data() {
    return {
      task: this.newTask,
      data: [],
      name: "",
      selected: null,
    };
  },
  async mounted() {
    this.data = GetAll();
  },
  computed: {
    filteredDataArray() {
      return this.data.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  watch: {
    newTask() {
      this.task = this.newTask;
    },
  },
};
</script>

<style>
</style>