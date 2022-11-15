<script setup lang="ts">
import { computed } from "vue";
import buttonConfig from "./classConfig";

// Props
const props = withDefaults(
  defineProps<{
    label: string;
    color?: "primary" | "attention";
    variant?: "contained" | "outlined" | "text";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
  }>(),
  {
    color: "primary",
    variant: "contained",
    size: "medium",
    disabled: false,
  }
);

// Emits
const emits = defineEmits<{
  (e: "click"): void;
}>();

// Computed
const buttonClass = computed(() => [
  buttonConfig.size[props.size],
  buttonConfig[props.color][props.variant].base,
  buttonConfig[props.color][props.variant].border,
  buttonConfig[props.color][props.variant].hover,
  props.disabled ? buttonConfig.disabled : "",
  buttonConfig.font,
]);

// Methods
const onClick = () => {
  emits("click");
};
</script>

<template>
  <button
    type="button"
    :class="[...buttonClass]"
    :disabled="props.disabled"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>
