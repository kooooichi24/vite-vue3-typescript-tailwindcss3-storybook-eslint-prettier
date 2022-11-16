<script setup lang="ts">
import { computed, useSlots } from "vue";
import buttonConfig from "./classConfig";

// Props
const props = withDefaults(
  defineProps<{
    color?: "primary" | "attention";
    variant?: "contained" | "outlined" | "text";
    size?: "small" | "medium" | "large";
    shape?: "default" | "circle" | "round";
    disabled?: boolean;
  }>(),
  {
    color: "primary",
    variant: "contained",
    size: "medium",
    shape: "default",
    disabled: false,
  }
);

// Emits
const emits = defineEmits<{
  (e: "click"): void;
}>();

// Slots
const slots = useSlots();

// Computed
const buttonSizeClass = computed(() => {
  if (slots.left) {
    return buttonConfig.size[props.size].withLeft;
  }
  if (slots.right) {
    return buttonConfig.size[props.size].withRight;
  }
  return buttonConfig.size[props.size].base;
});
const buttonClass = computed(() => [
  buttonSizeClass.value,
  buttonConfig[props.color][props.variant].base,
  buttonConfig[props.color][props.variant].border,
  buttonConfig[props.color][props.variant].hover,
  props.disabled ? buttonConfig.disabled[props.variant] : "",
  props.shape !== "default" ? buttonConfig.shape[props.shape] : "",
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
    class="flex items-center"
    :class="[...buttonClass]"
    :disabled="props.disabled"
    @click="onClick"
  >
    <!-- icon left -->
    <span v-if="$slots.left">
      <slot name="left" />
    </span>

    <!-- default -->
    <span>
      <slot></slot>
    </span>

    <!-- icon right -->
    <span v-if="$slots.right">
      <slot name="right"></slot>
    </span>
  </button>
</template>
