function pt() {
    const elementos = document.querySelectorAll('[class*="k2-pt-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-pt-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const paddingSize = match[1];
          elemento.style.paddingTop = paddingSize;
        }
      });
    });
  }
  
  function padding() {
    const elementos = document.querySelectorAll('[class*="k2-p-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(
          /k2-p-\[\s*([\d.]+[a-zA-Z%]*)\s*(?:,\s*([\d.]+[a-zA-Z%]*))?\s*\]/
        );
        if (match) {
          const py = match[1];
          const px = match[2] || py;
          elemento.style.padding = `${py} ${px}`;
        }
      });
    });
  }
  
  function margin() {
    const elementos = document.querySelectorAll('[class*="k2-m"]');
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const doble = clase.match(
          /k2-m-\[\s*([\d.]+[a-zA-Z%]*)(?:\s*,\s*([\d.]+[a-zA-Z%]*)(?:\s*,\s*[\d.]+[a-zA-Z%]*)*)?\s*\]/
        );
        const match = clase.match(/k2-m-\[\s*([^\]]*)\s*\]/);
        const mb = clase.match(/k2-mb-\[\s*([^\]]*)\s*\]/);
        const mt = clase.match(/k2-mt-\[\s*([^\]]*)\s*\]/);
        const ml = clase.match(/k2-ml-\[\s*([^\]]*)\s*\]/);
        const mr = clase.match(/k2-mr-\[\s*([^\]]*)\s*\]/);
        const mx = clase.match(/k2-mx-\[\s*([^\]]*)\s*\]/);
        const my = clase.match(/k2-my-\[\s*([^\]]*)\s*\]/);
  
        if (mb) {
          const py = mb[1];
          elemento.style.marginBottom = py;
          return;
        }
        if (mt) {
          const py = mt[1];
          elemento.style.marginTop = py;
          return;
        }
        if (ml) {
          const px = ml[1];
          elemento.style.marginLeft = px;
          return;
        }
        if (mr) {
          const px = mr[1];
          elemento.style.marginRight = px;
          return;
        }
        if (mx) {
          const px = mx[1];
          elemento.style.marginLeft = px;
          elemento.style.marginRight = px;
          return;
        }
        if (my) {
          const py = my[1];
          elemento.style.marginTop = py;
          elemento.style.marginBottom = py;
          return;
        }
        if (doble) {
          const py = doble[1];
          let px = doble[2];
          if (!px) {
            px = py;
          }
          elemento.style.margin = `${py} ${px}`;
          return;
        }
        if (match) {
          const marginSize = match[1];
          elemento.style.margin = marginSize;
        }
      });
    });
  }
  
  function pb() {
    const elementos = document.querySelectorAll('[class*="k2-pb-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-pb-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const paddingSize = match[1];
          elemento.style.paddingBottom = paddingSize;
        }
      });
    });
  }
  function pl() {
    const elementos = document.querySelectorAll('[class*="k2-pt-"]');
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-pl-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const paddingSize = match[1];
          elemento.style.paddingLeft = paddingSize;
        }
      });
    });
  }
  function pr() {
    const elementos = document.querySelectorAll('[class*="k2-pt-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-pr-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const paddingSize = match[1];
          elemento.style.paddingRight = paddingSize;
        }
      });
    });
  }
  
  function width() {
    const elementos = document.querySelectorAll('[class*="k2-w-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-w-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const width = match[1];
          elemento.style.width = width;
        }
      });
    });
  }
  function maxWidth() {
    const elementos = document.querySelectorAll('[class*="k2-mw-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-mw-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const width = match[1];
          elemento.style.maxWidth = width;
        }
      });
    });
  }
  
  function height() {
    const elementos = document.querySelectorAll('[class*="k2-h-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-h-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const height = match[1];
          elemento.style.height = height;
        }
      });
    });
  }
  function maxHeight() {
    const elementos = document.querySelectorAll('[class*="k2-mh-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-mh-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const height = match[1];
          elemento.style.maxHeight = height;
        }
      });
    });
  }
  
  function color() {
    const elementos = document.querySelectorAll('[class*="k2-color-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-color-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const color = match[1];
          elemento.style.color = color;
        }
      });
    });
  }
  function fontFamily() {
    const elementos = document.querySelectorAll('[class*="k2-ff-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-ff-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const fontFamily = match[1];
          elemento.style.fontFamily = fontFamily;
        }
      });
    });
  }
  
  function border() {
    const elementos = document.querySelectorAll('[class*="k2-b-"]');
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-b-\[([^\]]+),\s*([^\]]+)\]/);
        if (match) {
          const pixels = match[1];
          const color = match[2];
          elemento.style.border = `${pixels} solid ${color}`;
        }
      });
    });
  }
  function borderSides() {
    const elementos = document.querySelectorAll('[class*="k2-b"]');
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-b[a-z]*-\[([^\]]+),\s*([^\]]+)\]/);
        if (match) {
          const direccion = match[0][4]; // 'b', 'bl', 'br', 'bt' o 'bb'
          const pixels = match[1];
          const color = match[2];
  
          switch (direccion) {
            case "l":
              elemento.style.borderLeft = `${pixels} solid ${color}`;
              break;
            case "r":
              elemento.style.borderRight = `${pixels} solid ${color}`;
              break;
            case "t":
              elemento.style.borderTop = `${pixels} solid ${color}`;
              break;
            case "b":
              elemento.style.borderBottom = `${pixels} solid ${color}`;
              break;
            // Puedes agregar más casos según sea necesario
          }
        }
      });
    });
  }
  function bg() {
    const elementos = document.querySelectorAll('[class*="k2-bg-"]');
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const match = clase.match(/k2-bg-\[\s*([^\]]*)\s*\]/);
        if (match) {
          const background = match[1];
          elemento.style.background = background;
        }
      });
    });
  }
  
  function transition() {
    const elementos = document.querySelectorAll('[class*="k2-transition-"]');
  
    elementos.forEach((elemento) => {
      const clases = elemento.classList;
      clases.forEach((clase) => {
        const doble = clase.match(
          /k2-transition-\[\s*([\d.]+[a-zA-Z%]*)(?:\s*,\s*([\d.]+[a-zA-Z%]*)(?:\s*,\s*[\d.]+[a-zA-Z%]*)*)?\s*\]/
        );
        /* const match = clase.match(/k2-transition-\[\s*([^\]]*)\s*\]/); */
        if (doble) {
          const py = doble[1];
          let px = doble[2];
          if (!doble[2]) {
            px = "ease";
          }
          elemento.style.transition = `all ${py} ${px}`;
          return;
        }
      });
    });
  }
  
  const executer = (event) => {
    const exist_element = document.querySelectorAll('[class*="k2-"]');
  
    if (exist_element) {
      pt(event);
      pb(event);
      pl(event);
      pr(event);
      width(event);
      height(event);
      color(event);
      fontFamily(event);
      border(event);
      borderSides(event);
      bg(event);
      padding(event);
      margin(event);
      transition(event);
      maxHeight(event);
      maxWidth(event);
    } else {
      return;
    }
  };
  
  document.addEventListener("DOMContentLoaded", executer);
  