<template>
    <div v-if="type === 'success'">
    <button class="button is-success" @click="onClick()">
        {{ text }}
    </button>
    </div>
    <div v-else-if="type === 'link'">
    <button class="button is-link" @click="onClick()">
        {{ text }}
    </button>
    </div>
    <div v-else>
    <button class="button is-danger" @click="onClick()">
        {{ text }}
    </button>
    </div>
</template>

<script>

export default {
  name: 'Button',
  props: {
    text: String,
    type: String,
  },
  methods: {
    onClick() {
      this.$emit('btn-click')
    },
  },
}
</script>

<style>

</style>