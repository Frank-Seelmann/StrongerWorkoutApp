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
            <div v-if="p.user_handle === newTask.user_handle">
              <task :task="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import { Add, GetFeed } from "../services/task";
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
    Session,
    newTask: {
      name: "",
      repsAndSets: "",
      weight: "",
      user_handle: Session.user.handle,
    },
  }),
  async mounted() {
    this.tasks = await GetFeed(Session.user.handle);
  },
  methods: {
    async add() {
      console.log("Please work");
      const response = await Add(this.newTask);
      if (response) {
        this.tasks.unshift(response);
        this.$oruga.notification.open({
        message: "Workout Succesfully Recorded!",
        variant: "success",
        position: "top",
        closable: true,
      });
      }
    },
  },
};
</script>

<style>
</style>