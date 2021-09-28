<template>
  <input :class="classes" @input="input" placeholder="00" ref="input"/>
</template>

<script>
export default {
  name: 'FractionEditableInput',
  props: {
    name: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
  },
  data() {
    return {
      min: 1,
      max: 99,
    }
  },
  inject: ['updateFraction'],
  methods: {
    input(event) {
      const oldValue = this.value;
      let newValue = event.target.value;

      if (newValue !== '') {
        newValue = Number(newValue);
        if (isNaN(newValue)) {
          newValue = oldValue;
        } else {
          if (newValue > this.max) newValue = this.max;
          else if (newValue < this.min) newValue = this.min;
        }
      }

      if (newValue !== oldValue) {
        this.updateFraction(this.index, this.name, newValue);
      }

      this.$refs.input.value = newValue;
    },
  },
  computed: {
    classes() {
      return [
        'fraction-value',
        this.name
      ];
    },
  },
}
</script>
