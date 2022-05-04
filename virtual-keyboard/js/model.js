class CounterModel {
  constructor(initial) {
    this.state = initial;
  }

  getState() {
    return this.state;
  }

  setState(value) {
    const last = this.state;
    this.state = value;
    this.onChange(value, last);
  }
}

export default CounterModel;
