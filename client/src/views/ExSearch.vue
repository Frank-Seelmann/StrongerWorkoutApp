<template>
  <section>
    <p class="content"><b>Selected:</b> {{ selected }}</p>
    <o-field label="Find a JS framework">
      <o-autocomplete
        rounded
        expanded
        v-model="name"
        :data="filteredDataArray"
        placeholder="e.g. jQuery"
        icon="search"
        clearable
        @select="(option) => (selected = option)"
      >
        <template v-slot:empty>No results found</template>
      </o-autocomplete>
    </o-field>
  </section>
</template>

<script>
//import Task from "../components/Task.vue";

export default {
  data() {
    return {
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
};
</script>

<style>
</style>