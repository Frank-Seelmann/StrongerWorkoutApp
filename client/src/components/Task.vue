<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{ task.name }}</p>
    </header>
    <div class="card-content">
      <div class="content">
          <p>
            {{ task.repsAndSets }}
          </p>
          <p>
            {{ task.weight }}
          </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
  data() {
    return {
      isActive: false,
    };
  },
};
</script>

<style scope>
.fas {
  color: blue;
}
.task {
  background: #f4f4f4;
  margin: 2px;
  padding: 2px 4px;
}
</style>