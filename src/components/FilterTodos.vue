<template>
<form>
  <div>
    Filter Comment:
    <select v-on:change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: "FilterTodos",
  methods: {
    ...mapActions(["filterTodos"])
  }
}
</script>

<style scoped>
form {
  background-color: rgb(79, 82, 233);
  background-size: 10px;
}
  select {
    border: 1px solid #41b883;
  }
</style>