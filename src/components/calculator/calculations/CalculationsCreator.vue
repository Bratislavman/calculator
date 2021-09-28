<template>
  <div v-if="fractionsList.length > 0" class="calculations-creator">
    <fraction-expression :fractions="fractionsList" :answer="answer" :fraction-component="fractionComponent"/>
    <button @click="addFraction" class="button add-fraction" :disabled="!canAddFraction">Добавить дробь</button>
    <br>
    <button @click="saveCalculations" class="button_style2" :disabled="isCalculationsInvalid">Сохранить расчёты</button>
  </div>
</template>

<script>
import FractionExpression from '../fraction/FractionExpression';
import FractionEditable from '../fraction/FractionEditable';

export default {
  name: 'CalculationsCreator',
  components: {
    FractionExpression,
  },
  data() {
    return {
      fractions: [],
      fractionsCounter: 0,
      math: null,
      answer: null,
      fractionComponent: FractionEditable
    }
  },
  created() {
    this.reloadForm();
    this.math = this.$createMath('Fraction');
  },
  computed: {
    fractionsLength() {
      return this.fractions.length;
    },
    fractionsList() {
      return this.fractions.map((fraction) => {
        fraction.canRemove = this.canRemoveFraction;
        return fraction;
      });
    },
    canAddFraction() {
      return this.fractionsLength < 5;
    },
    canRemoveFraction() {
      return this.fractionsLength > 2;
    },
    isCalculationsInvalid() {
      return this.fractions.some((fraction) => !fraction.numerator || !fraction.denominator);
    },
  },
  provide() {
    return {
      removeFraction: this.removeFraction,
      updateFraction: this.updateFraction,
    }
  },
  inject: ['addCalculations'],
  methods: {
    reloadForm() {
      this.fractions = [];
      this.answer = null;
      for (let i = 0; i < 2; i++) {
        this.addFraction();
      }
    },
    addFraction() {
      this.fractions.push(
          {
            numerator: '',
            denominator: '',
            canRemove: true,
            canBeEdited: true,
            id: this.fractionsCounter,
          }
      );
      this.fractionsCounter++;
      this.calculate();
    },
    removeFraction(index) {
      this.fractions.splice(index, 1)
      this.calculate();
    },
    updateFraction(index, field, value) {
      this.fractions[index][field] = value;
      this.calculate();
    },
    saveCalculations() {
      this.addCalculations({
        fractions: [...this.fractions],
        answer: {...this.answer},
      });
      this.reloadForm();
    },
    calculate() {
      if (this.isCalculationsInvalid) {
        this.answer = {value: '?'};
        return;
      }

      let expression = '';

      this.fractions.forEach((fraction, index) => {
        expression += `${fraction.numerator}/${fraction.denominator}`;
        if (index < this.fractionsLength - 1) expression += '+';
      });

      let value = this.math.evaluate(expression).toFraction(true);

      if (value.indexOf(' ') > -1) {
        const [wholePart, fraction] = value.split(' ');
        const [numerator, denominator] = fraction.split('/');
        this.answer = {
          wholePart,
          numerator,
          denominator
        }
        return;
      }

      if (value.indexOf('/') > -1) {
        const [numerator, denominator] = value.split('/');
        this.answer = {
          numerator,
          denominator
        }
        return;
      }

      this.answer = {value};
    },
  }
}
</script>
<style lang="scss" scoped>
.calculations-creator {
  .add-fraction {
    margin: 20px 0px;
  }
}
</style>