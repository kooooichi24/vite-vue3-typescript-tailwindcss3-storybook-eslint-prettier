<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button/Button.vue";

defineProps<{ msg: string }>();

const count = ref(0);

const handleClick = () => {
  count.value += 1;
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>Count: {{ count }}</h2>
  <Button label="Button" @click="handleClick" />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
