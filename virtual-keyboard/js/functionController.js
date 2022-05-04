import buttons from './buttons';
import textarea from './index';

class FunctionController {
  constructor(model) {
    this.model = model;
  }

  lower() {
    textarea.focus();
    textarea.value += buttons[num].content.en;
  }

  upper() {
    textarea.focus();
    textarea.value += buttons[num].content.en.toUpperCase();
  }
}

export default FunctionController;
