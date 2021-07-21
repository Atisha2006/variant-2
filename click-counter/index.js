class Panel {

  constructor(){
    this.counter = 0;
  }

  init(el){
    const classEl = el.className;
    const counterBlock = document.querySelector(`.${classEl}-counter`);    

    el.addEventListener('click', (e) => {
      this.counter++;
      counterBlock.textContent = this.counter;
    });
  }

}

function main () {
  const panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    const panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;