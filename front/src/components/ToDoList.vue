<template>
  <div>
    <NewToDo />
    <div><Checkbox title="Hello" :checked="false"/></div>
    <div><Checkbox title="Hello" :checked="true"/></div>
    <div><Checkbox title="Hello" :checked="true"/></div>
    <div><Checkbox :title="toDo.title" :checked="toDo.checked"/></div>
  </div>
</template>

<script>
import Checkbox from '@/components/Checkbox'
import NewToDo from '@/components/NewToDo'

export default {
  name: 'ToDoList',
  components: {
    Checkbox,
    NewToDo
  },
  data: () => {
    return {
      toDo: {
        title: 'Hello From Data',
        checked: true,
      }
    }
  }
}
</script>