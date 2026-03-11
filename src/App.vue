<script setup lang="ts">
import BasicLayout from './layouts/BasicLayout.vue'
import { example } from './api/exampleController.ts'

example().then((res) => {
  console.log(res)
})
</script>

<template>
  <BasicLayout />
</template>
