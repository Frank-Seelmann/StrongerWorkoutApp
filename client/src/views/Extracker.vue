<template>
  <div class="container is-fluid">
    <section class="section">
      <h1 class="title">Exercise Tracker</h1>
      <h2 class="subtitle">Log your exercise progress.</h2>
    </section>

    <div class="columns is-centered">
      <div class="column is-half">
        <h2 class="subtitle">Log your workout for today!</h2>
        <add-task :new-task="newTask" @add="add()" />
        <br />
        <div class="container">
          Check out your workout <a href="summary.html">summary and reports</a>!
        </div>
      </div>

      <div class="column is-half">
        <h2 class="subtitle">Past Workouts</h2>
        <div class="table-container">

          <div class="task" v-for="p in tasks" :key="p.src">
            <task :task="p" />
          </div>

        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import { Add, GetAll } from "../services/task";
import AddTask from "../components/addTask.vue";
import Session from "../services/session";
import Task from "../components/Task.vue";

export default {
  components: {
    AddTask,
    Task,
  },
  data: () => ({
    tasks: [],
    activetab: 1,
    email: null,
    password: null,
    Session,
    NAME: "",
    CAL: "",
    TIME: "",
    newTask: { name: "", calories: "", time: "" },
  }),
  async mounted() {
    this.newTask.name = this.NAME;
    this.newTask.calories = this.CAL;
    this.newTask.time = this.TIME;
    this.tasks = await GetAll(Session.user.handle);
  },
  methods: {
    submit() {
      this.$oruga.notification.open({
        message: "Workout Succesfully Recorded!",
        variant: "info",
        position: "top",
        closable: true,
      });
    },
    async add() {
      console.log('Please work');
      await Add(this.newTask);
    },
  },
};
</script>

<style>
</style>