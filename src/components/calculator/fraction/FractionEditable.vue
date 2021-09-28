<template>
  <div class="fraction">
    <div class="container">
      <button v-if="fraction.canRemove" class="fraction__remove" @click="removeFraction(index)">×</button>
      <fraction-editable-input name="numerator" :value="fraction.numerator" :index="index"/>
      <div class="line"/>
      <fraction-editable-input name="denominator" :value="fraction.denominator" :index="index"/>
    </div>
  </div>
</template>

<script>
import FractionEditableInput from './FractionEditableInput';

export default {
  name: 'FractionEditable',
  components: {FractionEditableInput},
  inject: ['removeFraction'],
  props: {
    fraction: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
  },
}
</script>
