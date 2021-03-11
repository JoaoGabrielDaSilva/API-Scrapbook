export default class Calculator {
  bulkSum(list) {
    const result = list.reduce((current, next) => current + next);

    return result;
  }

  sum(value1, value2) {
    return value1 + value2;
  }
}
