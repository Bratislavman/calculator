import {create, all} from 'mathjs';

const FractionArithmetic = {};
FractionArithmetic.install = function (Vue) {
    Vue.prototype.$createMath = function (numberType = 'number') {
        return create(all, {number: numberType});
    }
}

export default FractionArithmetic;