const initialState = {
  slider_content: [
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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE":
      let newState = { ...state };
      console.log(action.payload);
      let array = Array.isArray(
        state.slider_content[action.payload.index].element_content
      )
        ? [...state.slider_content[action.payload.index].element_content]
        : [];
      /* array[action.payload.position][action.payload.name] =
          action.payload.value; */

      console.log(array);

      /*         return {
          ...state,
          slider_content: {
            ...res,
            element_content: array,
          },
        }; */
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
        console.log(string);
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
