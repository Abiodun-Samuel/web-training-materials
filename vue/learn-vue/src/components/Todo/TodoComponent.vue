<template>
  <div id="header">
    <h3>My Todo Lists</h3>
  </div>

  <div id="createTodo">
    <input @keypress.enter="submitTodo" type="text" placeholder="todo item" v-model="todoItem" />
    <button v-on:click="submitTodo">Submit</button>
    <button @click="clearTodo">Clear</button>
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

const clearTodo = () => {
  todos.value = []
}

const submitTodo = () => {
  let validate = todoItem.value?.trim().length > 0

  // let check = todos.value.includes(todoItem.value)
  let check = todos.value.filter((item) => {
    return item.toLowerCase() == todoItem.value.toLowerCase()
  })

  if (validate && check.length == 0) {
    //(validate === true && check === false
    todos.value.push(todoItem.value)
    todoItem.value = null
  }
  if (check.length > 0) {
    alert(`${todoItem.value} already exist in your todo list`)
  }
}
</script>

<style></style>
