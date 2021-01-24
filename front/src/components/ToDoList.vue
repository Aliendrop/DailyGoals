<template>
  <div>
    <NewToDo />
    <div v-for="(item, index) of toDoList" :key="index">
      {{ index + 1 }}. <ToDoItem :title="item.title" :done="item.done"/>
    </div>
    <Error v-if="loadError" :message="loadError" />
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem'
import NewToDo from '@/components/NewToDo'
import Error from '@/components/Error'
import { mapActions, mapState } from 'vuex'

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
    ...mapState({
      loadError: state => state.toDoList.error,
      toDoList: state => state.toDoList.data
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
