<template>
  <div v-if="calculationsList.length > 0" class="calculations-list">
    <div class="calculations" v-for="(calculations, index) in calculationsList" :key="calculations.id">
      <fraction-expression :fractions="calculations.fractions" :answer="calculations.answer"
                           :fraction-component="fractionComponent"/>
      <button @click="removeCalculations(index)" class="button calculations__remove">Удалить</button>
    </div>
  </div>
</template>

<script>
import FractionExpression from '../fraction/FractionExpression';
import Fraction from '../fraction/Fraction';

export default {
  name: 'CalculationsCreator',
  components: {
    FractionExpression,
  },
  props: {
    calculationsList: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      fractionComponent: Fraction
    }
  },
  inject: ['removeCalculations'],
}
</script>
<style lang="scss" scoped>
.calculations {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0px;
  }

  &__remove {
    min-width: 175px;
  }
}
</style>