<template>
  <div class="new-todo-wrapper">
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  name: "NewTodo",
  data: () => {
    return {
      newTodo: null,
    }
  },
  methods: {
    addTodo () {
      // TODO:
    }
  }
}
</script>

<style scoped>
.new-todo-wrapper {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  margin: 30px auto;
}
.new-todo {
  display: inline-block;
  padding: 16px 16px 16px 60px;
  height: 50px;
  width: calc(100% - 76px);
	border-width: 0px;
  border: none;
  font-size: 32px;
  font-weight: 600;
}
input:focus {
  color: #020202;
  caret-color: #e2306c;
  outline: none;
}
</style>
