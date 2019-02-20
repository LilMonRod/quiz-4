//
// tabs(): Proporciona un widget de pestañas.
//

function tabs(selector) {
  function applyTabs(element) {
    // linkClicked(): Event handler - Click sobre el tab.
    function linkClicked(event) {
      // Cancela comportamiento default del enlace.
      event.preventDefault();
      // Obtiene el elemento cuyo id hace match con el href del enlace.
      const contentSelector = event.target.getAttribute('href');
      const content = element.querySelector(contentSelector);
      // Llama a setDefaultState() para limpiar las clases y ocultar todos los bloques de contenido.
      setDefaultState();
      // Asigna las clases al tab y al bloque de contenido seleccionados.
      event.target.className = 'tab-active';
      content.className = 'content-visible';
    }
    // setDefaultState(): Oculta todos los bloques de contenido y limpia las clases de los tabs.
    function setDefaultState() {
      for (let link of links) {
        link.className = '';
      }
      for (let item of contentItems) {
        item.className = 'content-hidden';
      }
    }

    // Tabs.
    const links = element.querySelectorAll('ul > li > a');
    // Bloques de contenido.
    const contentItems = element.querySelectorAll('div');

    // Llama a setDefaultState() para ocultar todos los bloques de contenido.
    setDefaultState();
    // Asigna las clases correctas para que se muestre el primer tab.
    links[0].className = 'tab-active';
    contentItems[0].className = 'content-visible';

    // Agrega el event handler para todos los links.
    for (let link of links) {
      link.addEventListener('click', linkClicked);
    }
  }

  let elements = document.querySelectorAll(selector);

  for (let element of elements) {
    applyTabs(element);
  }
}
tabs('#tabs');
