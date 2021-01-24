<template>
  <label class="container">
    <span
      class="title"
      :class="{done: item.done}"
    >{{ item.title }}</span>
    <input
      type="checkbox"
      :checked="item.done"
      :disabled="item.dummy"
      @click="changeStatus(index)"
    >
    <span class="checkmark" />
  </label>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "ToDoItem",
  props: {
    index: Number,
    item: Object,
  },
  methods: {
    ...mapActions({
      changeStatus: 'toDoList/changeStatus',
    }),
  },
}
</script>

<style scoped>
.done,
.container:hover {
  text-decoration: line-through;
  text-decoration-color: #BCFE2F;

}
/* The container */
.container {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #BCFE2F;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #3121E6;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #fff;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
