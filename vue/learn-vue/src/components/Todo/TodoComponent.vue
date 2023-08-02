<template>
  <div id="header">
    <h3>My Todo Lists</h3>
  </div>

  <div id="createTodo">
    <input @keypress.enter="submitTodo" type="text" placeholder="todo item" v-model="todoItem" />
    <button v-on:click="submitTodo">Submit</button>
  </div>

  <div style="margin: 10px 0px" v-for="(todo, index) in todos" :key="todo + index">
    <span>{{ index + 1 }}. {{ todo }}</span>
    <button @click="deleteTodo(index)">Delete</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let todos = ref([])
let todoItem = ref('')

const deleteTodo = (i) => {
  todos.value = todos.value.filter((_, index) => {
    return i !== index
  })
}

const submitTodo = () => {
  if (todoItem.value?.trim().length > 0) {
    todos.value.push(todoItem.value)
    todoItem.value = null
  }
}
</script>

<style></style>
