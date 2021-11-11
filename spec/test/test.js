let Calculator = require('../src/calculator/calculator')

describe("Test Calculator class", function() {
    let calc = null;

    beforeEach(function() {
        calc = new Calculator();
    })
    
  
    it('Test sum function with usual parametrs', function() {
      calc.plus(5);
      expect(calc.result).toBe(5);
    });

    it('Test minus function with usual parametrs', function() {
        calc.minus(10);
        expect(calc.result).toBe(-10);
    });

    it('Test multiple function with usual parametrs', function() {
        calc.multiple(10);
        expect(calc.result).toBe(0); 
    });

    it('Test div function with usual parametrs', function() {
        calc.div(10);
        expect(calc.result).toBe(0);   
    });
     
    it('Test plus function with usual parametrs', function() {
        calc.plus(5);
        const res = calc.getResult();
        expect(res).toBe(5);   
    });
    
    it('Test multiple function *0', function() {
        calc.multiple(0);
        expect(calc.result).toBe(0); 
    });

    it('Test div function with usual parametrs', function() {
        calc.div(0);
        expect(calc.result).toBeNaN();   
    });

    it('Multiple first', function() {
        calc.multFirst(10);
        expect(calc.result).toBe(32);   
    });

    it('Div first', function() {
        calc.divFirst(9);
        expect(calc.result).toBe(5);   
    });

    it('Brackets first', function() {
        calc.bracketsFirst();
        expect(calc.result).toBe(70);   
    });

    it('Remainder of division', function(){
        calc.remainder(3);
        let remainder = calc.result % 1
        expect(remainder).not.toBe(0) ;
    })

    
    it('Square', function() {
        calc.square(6);
        expect(calc.result).toBe(36);   
    });

    it('Sqrt', function() {
        calc.sqrt(36);
        expect(calc.result).toBe(6);   
    });

    
});