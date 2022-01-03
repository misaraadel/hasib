<template>
<p v-if="errors && errors[input]" class="mx-4 v-error text-sm italic" style="color:#e92131">
  {{errors[input][0]}}
</p>
</template>

<script>
export default {
  props: {
    input: { type: String, required: true }
  }
}
</script>
