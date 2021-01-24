<template>
  <div>
    <Layout>
      <Header slot="header" header="DailyGoals" />
      <ToDoList slot="content" />
    </Layout>
  </div>
</template>

<script>
import Layout from '@/templates/Layout'
import Header from '@/components/Header'
import ToDoList from '@/components/ToDoList'

export default {
  name: 'Index',
  components: {
    Layout,
    Header,
    ToDoList
  }
}
</script>
