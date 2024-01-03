const initialState = {
  slider_content: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_ELEMENT":
      return {
        ...state,
        slider_content: [
          ...state.slider_content,
          {
            element_type: "",
            element_content: "",
            element_color: "",
            element_additional_class: "",
            element_additional_css: "",
            element_sort: "1",
            element_position: "",
            element_effect_direction: "bottom",
            element_effect_duration: "400",
            code: action.payload.code,
          },
        ],
      };
    case "DELETE_ELEMENT":
      return {
        ...state,
        slider_content: recursiveDelete(
          state.slider_content,
          action.payload.code
        ),
      };
    case "CHANGE_ELEMENT":
      return {
        ...state,
        slider_content: recursiveMap(
          state.slider_content,
          action.payload.name,
          action.payload.value,
          action.payload.code
        ),
      };
    case "INSERT_ELEMENT":
      return {
        ...state,
        slider_content: insertElement(
          state.slider_content,
          action.payload.code
        ),
      };
  }
}

function recursiveMap(elements, name, value, code) {
  if (elements.length === 0) return value;
  return elements.map((element) => {
    if (Array.isArray(element.element_content)) {
      // Si element_content es un array, aplicar recursión
      return {
        ...element,
        element_content: recursiveMap(
          element.element_content,
          name,
          value,
          code
        ),
      };
    } else {
      // Si element_content no es un array, realizar cambios según tus condiciones
      if (element.code === code) {
        // Cambiar según tus necesidades, por ejemplo, actualizando name y value
        const updatedElement = {
          ...element,
          [name]: value,
        };

        // Convertir element_content a un string si es un array
        if (Array.isArray(updatedElement.element_content)) {
          updatedElement.element_content = ""; // Cambiar esto según tus necesidades
        }

        return updatedElement;
      } else {
        // No hay cambio necesario
        return element;
      }
    }
  });
}

function recursiveDelete(elements, code) {
  return elements.reduce((acc, element) => {
    if (element.code === code) {
      // Si encuentra el elemento con el código, elimina el elemento
      return acc;
    } else if (Array.isArray(element.element_content)) {
      // Si element_content es un array, aplicar recursión
      return [
        ...acc,
        {
          ...element,
          element_content: recursiveDelete(element.element_content, code),
        },
      ];
    } else {
      // No hay cambio necesario si no coincide el código y element_content no es un array
      return [...acc, element];
    }
  }, []);
}

function insertElement(elements, code) {
  return elements.map((element) => {
    if (element.code === code) {
      // Si encuentra el elemento con el código, inserta el nuevo objeto en element_content
      return {
        ...element,
        element_content: [
          ...(element.element_content || []), // Asegura que element_content sea un array
          {
            element_type: "",
            element_content: "",
            element_color: "",
            element_additional_class: "",
            element_additional_css: "",
            element_sort: "1",
            element_position: "",
            element_effect_direction: "bottom",
            element_effect_duration: "400",
            code: Math.floor(Math.random() * 1000).toString(),
          },
        ],
      };
    } else if (Array.isArray(element.element_content)) {
      // Si element_content es un array, aplicar recursión
      return {
        ...element,
        element_content: insertElement(element.element_content, code),
      };
    } else {
      // No hay cambio necesario si no coincide el código
      return element;
    }
  });
}

/* export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE":
      let newState = { ...state };
      let array = Array.isArray(
        state.slider_content[action.payload.index].element_content
      )
        ? [...state.slider_content[action.payload.index].element_content]
        : [];

      newState.slider_content[action.payload.index][action.payload.name] =
        action.payload.value;
      return newState;
    case "STRING_TO_ARRAY":
      if (!action.payload.position) {
        return {
          ...state,
          element_content: action.payload.string,
        };
      } else {
        let element_content = state.slider_content.element_content;
        let array = [...element_content];
        let res = array.push(action.payload.string);
        return {
          ...state,
          element_content: JSON.parse(res),
        };
      }
    case "NEW_ELEMENT":
      return {
        ...state,
        slider_content: [
          ...state.slider_content,
          {
            element_type: "",
            element_content: "",
            element_color: "",
            element_additional_class: "",
            element_additional_css: "",
            element_sort: "1",
            element_position: "",
            element_effect_direction: "bottom",
            element_effect_duration: "400",
          },
        ],
      };
    default:
      return state;
  }
}
 */
