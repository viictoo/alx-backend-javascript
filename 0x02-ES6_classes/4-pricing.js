import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() { return this._amount; }

  set amount(amount) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a Number');
    }
    this._amount = amount;
  }

  get currency() { return this._currency; }

  set currency(currency) {
    if (!(currency instanceof Currency)) {
      throw TypeError('Value must be a CUrrency');
    }
    this._currency = currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== typeof conversionRate !== 'number') {
      throw TypeError('Value must be a Number');
    }
    return amount * conversionRate;
  }
}
