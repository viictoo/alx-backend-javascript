const expect = require('chai').expect;
const { it, describe } = require("mocha");
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function() {
    
        it('should return 6', function() {
            expect(calculateNumber('SUM', 1, 5)).to.equal(6);
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.4444, 4.555)).to.equal(6);
        });
        it('should return -4', function() {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
        });
        it('should return 0.2', function() {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
        });
        it('sga hould return Error', function() {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');

            it('should return 0', function() {
            expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
        });
    }
    );
  });
