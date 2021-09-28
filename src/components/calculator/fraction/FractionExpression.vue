<template>
  <div class="fraction-expression">
    <div class="fractions">
      <div class="fraction-container" v-for="(fraction, index) in fractions" :key="fraction.id">
        <component :is="fractionComponent" :fraction="fraction" :index="index"/>
        <div v-if="index < fractions.length-1" class="plus">+</div>
      </div>
    </div>

    <div class="equals">=</div>

    <template v-if="answer">
      <div v-if="answerFraction.value" class="value">{{ answerFraction.value }}</div>
      <fraction v-else :fraction="answerFraction"/>
    </template>
  </div>
</template>

<script>
import Fraction from './Fraction';

export default {
  name: 'FractionExpression',
  props: {
    answer: {
      type: Object,
      required: true
    },
    fractions: {
      type: Array,
      required: true
    },
    fractionComponent: {
      type: Object,
      required: true
    },
  },
  components: {
    Fraction
  },
  computed: {
    answerFraction() {
      return {
        ...this.answer,
        canRemove: false,
        canBeEdited: false,
      };
    },
  },
}
</script>

<style lang="scss">
.fractions {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fraction {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    margin: 10px 0px;
    height: 1px;
    background: #383129;
  }

  &-expression {
    display: flex;
    align-items: center;

    .equals {
      margin: 0px 20px;
    }
  }

  &-container {
    display: flex;
    justify-content: center;
    align-items: center;

    .plus {
      margin: 0px 20px;
    }
  }

  &-value {
    border: 1px solid #CBC9C9;
    border-radius: 5px;
    padding: 13px 0px;
    text-align: center;
    color: #9D9C9C;
    display: inline-block;
    width: 59px;

    &::placeholder {
      color: #9D9C9C;
    }

    &:hover {
      border-color: #9D9C9C;
    }

    &:active {
      border-color: #383129;
      color: #383129;
    }

    &:disabled, &_disabled {
      border-color: transparent !important;
      color: #9D9C9C;
    }

    &_disabled {

    }
  }

  &__remove {
    position: absolute;
    top: -27px;
    right: 0px;
    border: none;
    background: none;
    padding: 0px;
    font-size: 30px;
    color: #9D9C9C;
    height: 28px;
  }

  &__whole-part {
    margin-right: 10px;
  }
}
</style>