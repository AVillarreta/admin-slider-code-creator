import "./module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
export default function Preview() {
  const state = useSelector((state) => state);
  const [renderedContent, setRenderedContent] = useState([]);
  useEffect(() => {
    const contentArray = state?.slider_content
      ?.map((element, index) => {
        return type_element(element, index);
      })
      .filter(Boolean);
    setRenderedContent(contentArray);
  }, [state]);

  return (
    <div key={state?.slider_content.lenght} className="content-container">
      <div
        className="preview-container"
        style={{ background: localStorage.getItem("background") }}
      >
        {renderedContent}
      </div>
    </div>
  );
}

function type_element(element) {
  switch (element.element_type) {
    case "div":
      return (
        <div
          className={`${element?.element_additional_class}`}
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
          className={`scrollE ${element?.element_additional_class} k2-title-h1`}
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
    case "h1-title":
      return (
        <h1
          className={`scrollE ${element?.element_additional_class} k2-title-h1-bold`}
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
          className={`k2-title-h2 scrollE ${element?.element_additional_class}`}
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
          className={`scrollE k2-title-text ${element?.element_additional_class}`}
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
    case "p-small":
      return (
        <p
          className={`scrollE k2-title-text-small ${element?.element_additional_class}`}
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
    case "img":
      return (
        <img
          srcSet={localStorage.getItem("image_url") + element.element_content}
          className={`scrollE ${element?.element_additional_class}`}
          alt={element.element_content}
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
        />
      );
    case "list":
      return (
        <p
          className={`scrollE k2-title-text-small ${element?.element_additional_class}`}
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
    case "span":
      return (
        <span
          className={`scrollE ${element?.element_additional_class}`}
          key={element.id}
          style={{
            width: "100%",
            textAlign: "left",
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
        </span>
      );
    default:
      return <div key={element.id}></div>;
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
