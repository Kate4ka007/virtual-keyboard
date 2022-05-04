import Control from './control';
import Button from './class_button';

class ButtonView extends Control {
  constructor(parent, model, controller) {
    super(parent, 'div');
    this.ticks = new Control(this.node, 'div');

    this.KeyBotton = new Button(this.node, 'up', () => {
      controller.up();
    });
    this.downButton = new Button(this.node, 'down', () => {
      controller.down();
    });

    model.onChange = (current, last) => {
      this.update(current);
    }
    this.update(model.getState());
  }

  update(current) {
    this.ticks.node.textContent = current;
  }
}