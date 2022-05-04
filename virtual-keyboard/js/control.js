class Control {
  constructor(parent, tag) {
    const elem = document.createElement(tag);
    parent.append(elem);
    this.node = elem;
  }

  destroy() {
    this.node.remove();
  }
}

export default Control;
