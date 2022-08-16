class Calculator {
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  add(a,b){
    return this.a+this.b;
  }
  subtract(a,b){
    return this.a-this.b
  }
  devide (){
    return this.a / this.b;
  }
  multiply(){
    return this.a * this.b;
  }

  };
  
  describe('Calculator', () => {
    test('add', () => {
      expect(new Calculator(3,2).add()).toBe(5);
    });
  
    test('substract', () => {
      expect( new Calculator(3,2).subtract()).toBe(1);
    });
    test('devide', () => {
      expect(new Calculator(3,3).devide()).toBe(1);
    });
    test('multiply', () => {
      expect(new Calculator(3,2).multiply()).toBe(6);
    });
  });