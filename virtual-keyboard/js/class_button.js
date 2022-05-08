import Control from './control';

class Button extends Control {
  constructor(parent, caption, onClick, classes) {
    super(parent, 'div');
    this.node.classList.add(classes);
    this.node.textContent = caption;
    this.node.onclick = () => { onClick(); };
  }
}

export default Button;
