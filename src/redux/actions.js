/* export function handleChange(name, value, position = null, index = 0) {
  return (dispatch) => {
    if (value[0] == "[" && value[value.length - 1] == "]") {
      value = JSON.parse(value);
    }
    return dispatch({
      type: "CHANGE",
      payload: {
        name,
        value,
        position,
        index,
      },
    });
  };
}

export function stringToArray(string) {
  return (dispatch) => {
    return dispatch({
      type: "STRING_TO_ARRAY",
      payload: {
        string: JSON.parse(string),
      },
    });
  };
}

export function newElement(element) {
  return (dispatch) => {
    return dispatch({
      type: "NEW_ELEMENT",
      payload: {
        element,
      },
    });
  };
}
 */
export function createElement(code) {
  return (dispatch) => {
    return dispatch({
      type: "CREATE_ELEMENT",
      payload: {
        code,
      },
    });
  };
}

export function deleteElement(code) {
  return (dispatch) => {
    return dispatch({
      type: "DELETE_ELEMENT",
      payload: {
        code,
      },
    });
  };
}

export function changeElement(name, value, code) {
  return (dispatch) => {
    return dispatch({
      type: "CHANGE_ELEMENT",
      payload: {
        name,
        value,
        code,
      },
    });
  };
}

export function insertElement(code) {
  return (dispatch) => {
    return dispatch({
      type: "INSERT_ELEMENT",
      payload: {
        code,
      },
    });
  };
}

export function updateAllElements(elements) {
  return (dispatch) => {
    return dispatch({
      type: "UPDATE_ALL_ELEMENTS",
      payload: elements,
    });
  };
}
