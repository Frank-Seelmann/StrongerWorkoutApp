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
        <section>
          <p class="content"><b>Selected:</b> {{ selected }}</p>
          <o-field label="Find a workout">
            <o-autocomplete
              rounded
              expanded
              v-model="name"
              :data="filteredDataArray"
              placeholder="e.g. Squats"
              icon="search"
              clearable
              @select="(option) => (selected = option)"
            >
              <template v-slot:empty>No results found</template>
            </o-autocomplete>
          </o-field>
        </section>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    newTask: Object,
  },
  data() {
    return {
      task: this.newTask,
      data: [
        "Angular",
        "Angular 2",
        "Aurelia",
        "Backbone",
        "Ember",
        "jQuery",
        "Meteor",
        "Node.js",
        "Polymer",
        "React",
        "RxJS",
        "Vue.js",
      ],
      name: "",
      selected: null,
    };
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