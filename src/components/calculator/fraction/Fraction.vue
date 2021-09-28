<template>
  <div class="fraction">
    <div v-if="fraction.wholePart" class="fraction__whole-part">{{ fraction.wholePart }}</div>
    <div class="container">
      <div class="numerator fraction-value fraction-value_disabled">{{ fraction.numerator }}</div>
      <div class="line"/>
      <div class="denominator fraction-value fraction-value_disabled">{{ fraction.denominator }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fraction',
  props: {
    fraction: {
      type: Object,
      required: false
    },
  },
}
</script>