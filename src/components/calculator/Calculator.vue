<template>
  <div class="calculator">
    <container title="Калькулятор">
      <calculations-creator/>
    </container>
    <container title="Расчёты" class="">
      <calculations-list :calculations-list="calculations"/>
    </container>
  </div>
</template>

<script>
import Container from '../containers/Container';
import CalculationsCreator from '../calculator/calculations/CalculationsCreator';
import CalculationsList from '../calculator/calculations/CalculationsList';

export default {
  name: 'Calculator',
  components: {
    Container,
    CalculationsCreator,
    CalculationsList
  },
  data() {
    return {
      calculations: [],
      calculationsCounter: 0,
    }
  },
  mounted() {
    const calculationsFromStorage = localStorage.getItem('calculations');
    if (calculationsFromStorage) {
      try {
        this.calculations = JSON.parse(calculationsFromStorage);
      } catch (e) {
        localStorage.removeItem('calculations');
      }
    }
  },
  methods: {
    addCalculations(calculations) {
      this.calculations.push({...calculations, id: this.calculationsCounter});
      this.calculationsCounter++;
      this.saveCalculations();
    },
    removeCalculations(index) {
      this.calculations.splice(index, 1);
      this.saveCalculations();
    },
    saveCalculations() {
      const parsed = JSON.stringify(this.calculations);
      localStorage.setItem('calculations', parsed);
    }
  },
  provide() {
    return {
      addCalculations: this.addCalculations,
      removeCalculations: this.removeCalculations,
    }
  },
}
</script>