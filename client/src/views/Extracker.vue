<template>
  <div class="container is-fluid">
    <section class="section">
      <h1 class="title">Exercise Tracker</h1>
      <h2 class="subtitle">Log your exercise progress.</h2>
    </section>

    <div class="columns is-centered">
      <div class="column is-half">
        <h2 class="subtitle">Log your workout for today!</h2>
        <div class="control" id="workout">
          <label class="label">Enter Workout:</label>
          <input class="input" type="text" placeholder="Workout" />
          <Button text="Add Task" type="link"/>
        </div>
        <br />
        <Tasks :tasks="tasks"/>
        <br />
        <div class="container">
          Check out your workout <a href="summary.html">summary and reports</a>!
        </div>
      </div>

      <div class="column is-half">
        <h2 class="subtitle">Workout Schedule</h2>
        <div class="table-container">
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="Sunday">Sunday</abbr></th>
                <th><abbr title="Monday">Monday</abbr></th>
                <th><abbr title="Tuesday">Tuesday</abbr></th>
                <th><abbr title="Wednesday">Wednesday</abbr></th>
                <th><abbr title="Thursday">Thursday</abbr></th>
                <th><abbr title="Friday">Friday</abbr></th>
                <th><abbr title="Saturday">Saturday</abbr></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
    <foot />
  </div>
</template>

<script>
import foot from "../components/Footer.vue";
import Button from "../components/Button.vue";
import Tasks from "../components/Tasks.vue";

export default {
  name: "Extracker",
  components: {
    foot,
    Button,
    Tasks
  },
  //temporary
  data() {
    return {
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Ab Workout',
        day: 'November 7th at 11:00am',
        reminder: true,
      },
      {
        id: 2,
        text: 'Arm Workout',
        day: 'November 8th at 12:00pm',
        reminder: true,
      },
      {
        id: 3,
        text: 'Chest Workout',
        day: 'November 9th at 1:00pm',
        reminder: true,
      }
    ]
  }
};
</script>

<style>
</style>