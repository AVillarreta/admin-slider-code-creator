import "./module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
export default function Preview() {
  const state = useSelector((state) => state);
  const [renderedContent, setRenderedContent] = useState("");
  useEffect(() => {
    const contentArray = state.slider_content
      ?.map((element, index) => {
        return type_element(element, index);
      })
      .filter(Boolean);
    setRenderedContent(contentArray);
  }, [state]);

  return (
    <div key={state.slider_content.lenght} className="preview-container">
      {renderedContent}
    </div>
  );
}

function type_element(element) {
  switch (element.element_type) {
    case "div":
      return (
        <div
          className={`scrollE ${element?.element_additional_class}`}
          key={element.id}
          style={{
            ...parseStyles(element?.element_additional_css),
            color: element.element_color,
            ...(element.element_position
              ? {
                  position: "absolute",
                  ...parsePosition(element.element_position),
                }
              : {}),
          }}
        >
          {print_element(element)}
        </div>
      );
    case "h1":
      return (
        <h1
          className={`scrollE ${element?.element_additional_class}`}
          key={element.id}
          style={{
            ...parseStyles(element?.element_additional_css),
            color: element.element_color,
            ...(element.element_position
              ? {
                  position: "absolute",
                  ...parsePosition(element.element_position),
                }
              : {}),
          }}
        >
          {print_element(element)}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={`scrollE ${element?.element_additional_class}`}
          key={element.id}
          style={{
            ...parseStyles(element?.element_additional_css),
            color: element.element_color,
            ...(element.element_position
              ? {
                  position: "absolute",
                  ...parsePosition(element.element_position),
                }
              : {}),
          }}
        >
          {print_element(element)}
        </h2>
      );
    case "p":
      return (
        <p
          className={`scrollE ${element?.element_additional_class}`}
          key={element.id}
          style={{
            ...parseStyles(element?.element_additional_css),
            color: element.element_color,
            ...(element.element_position
              ? {
                  position: "absolute",
                  ...parsePosition(element.element_position),
                }
              : {}),
          }}
        >
          {print_element(element)}
        </p>
      );
    case "list":
      return <list></list>;
    default:
      return <div>div</div>;
  }
}

function print_element(element) {
  if (typeof element.element_content === "string") {
    return element.element_content;
  }

  if (Array.isArray(element.element_content)) {
    return element.element_content.map((nestedElement, index) =>
      type_element(nestedElement)
    );
  }

  return "";
}

// ...
function parseStyles(styles) {
  if (!styles) return {};

  return styles.split(";").reduce((acc, style) => {
    const [key, value] = style.split(":");
    if (key && value) {
      acc[key.trim()] = value.trim();
    }
    return acc;
  }, {});
}
function parsePosition(positionString) {
  // Implementa la lógica para analizar la cadena de posición y devolver un objeto de estilo
  // Ejemplo: Si la cadena de posición es "top: 0; left: 0;", esto devolverá { top: 0, left: 0 }
  const styleObject = {};

  if (positionString) {
    const positionProperties = positionString.split(";");

    positionProperties.forEach((property) => {
      const [key, value] = property.split(":").map((part) => part.trim());
      if (key && value) {
        styleObject[key] = value;
      }
    });
  }
  return styleObject;
}
