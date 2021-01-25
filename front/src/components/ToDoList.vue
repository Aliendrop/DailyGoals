<template>
  <div class="todo-list-bg">
    <NewToDo />
    <Error v-if="loadError" :message="loadError" />
    <div class="todo-list-wrapper">
      <div v-for="(item, index) of toDoList" :key="index">
        <ToDoItem :index="index" :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'
import NewToDo from '@/components/NewToDo'
import Error from '@/components/Error'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  name: 'ToDoList',
  components: {
    ToDoItem,
    NewToDo,
    Error
  },
  data: () => {
    return {
      toDo: {
        title: 'Hello From Data',
        checked: true,
      }
    }
  },
  computed: {
    ...mapGetters({
      toDoList: 'toDoList/getData'
    }),
    ...mapState({
      loadError: state => state.toDoList.error,
    }),
  },
  methods: {
  ...mapActions({
    collectToDo: 'toDoList/collectToDo',
  }),
},
  created () {
    this.collectToDo()
  }
}
</script>

<style>
.todo-list-bg {
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}
.todo-list-wrapper {
  color: #fff;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 20px;
  margin: 30px auto;
  text-align: left;
  padding-left: 40px;
  padding-bottom: 40px;
}
</style>