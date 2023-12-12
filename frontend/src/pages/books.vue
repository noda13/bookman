<template>
  <div>
    <v-text-field v-model="search" label="Search for books" @keyup.enter="fetchBooks" />
    <v-list>
      <v-list-item v-for="book in books" :key="book.id">
        <v-list-item-title>{{ book.volumeInfo.title }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const search = ref('')
const books = ref([])

const fetchBooks = async () => {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search.value}`)
  books.value = response.data.items
}
</script>