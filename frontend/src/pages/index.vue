<template>
  <div>
    <app-header />
    <h1>Hello Vuetify</h1>
    {{ foo  }}
    <v-btn color="primary">Hello ore</v-btn>
    <app-footer />
  </div>
</template>

<script setup lang="ts">
const foo = useFoo()
</script>