import Calculator from '../../src/app/services/Calculator';

describe('calculator', () => {
  // describe('sum', () => {
  //   it('should sum two numbers when...', () => {
  //     expect.assertions(1);

  //     const calculator = new Calculator();
  //     const result = calculator.sum(2, 2);

  //     expect(result).toBe(4);
  //   });

  //   it('should sum two negative numbers...', () => {
  //     expect.assertions(1);

  //     const calculator = new Calculator();
  //     const result = calculator.sum(10, -2);

  //     expect(result).toBe(8);
  //   });

  //   it('it should sum two strings', () => {
  //     expect.assertions(1);

  //     const calculator = new Calculator();
  //     const result = calculator.sum('a', 1);

  //     expect(result).toBeNaN();
  //   });
  // });

  it('should sum two numbers', () => {
    expect.assertions(1);
    const calculator = new Calculator();

    const result = calculator.sum(2, 2);
    expect(result).toBe(4);
  });

  describe('bulk sum', () => {
    it('should sum a list of values', () => {
      expect.assertions(1);

      const calculator = new Calculator();

      const values = [1, 2, 3];
      const result = calculator.bulkSum(values);

      expect(result).toBe(6);
    });
  });
});
