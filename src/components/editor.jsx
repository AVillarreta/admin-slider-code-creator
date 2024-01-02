import { createElement, useEffect, useState } from "react";
import "./module.css";
import { useSelector, useDispatch } from "react-redux";
import { handleChange, newElement } from "../redux/actions";

let position = 0;

const el_type = {
  element_type: "",
  element_content: "",
  element_color: "",
  element_additional_class: "",
  element_additional_css: "",
  element_sort: "1",
  element_position: "",
  element_effect_direction: "bottom",
  element_effect_duration: "400",
};

export default function Editor() {
  const dispatch = useDispatch();
  const element = useSelector((state) => state.slider_content[0]);
  const state = useSelector((state) => state.slider_content) || [];
  const [elements, setElements] = useState(state);
  const [newElements, setNewElements] = useState([]);
  let num = 0;
  useEffect(() => {
    setElements(state);
    state.map((element) => {
      if (
        element.element_content[0] == "[" &&
        element.element_content[element.element_content.length - 1] == "]"
      ) {
        dispatch(
          handleChange(
            "element_content",
            JSON.parse(element.element_content),
            element.position,
            element.id
          )
        );
      }
    });
  }, [state]);
  useEffect(() => {
    if (newElements.length >= 0) {
      newElements?.map((element) => {
        dispatch(
          handleChange(
            "element_content",
            JSON.stringify(newElements),
            position - 1,
            element.id
          )
        );
      });
    }
  }, [newElements]);

  return (
    <div className="editor-container">
      <input
        type="text"
        placeholder="background"
        onChange={(e) => {
          document.querySelector(".preview-container").style.background =
            e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="padding"
        onChange={(e) => {
          document.querySelector(".preview-container").style.padding =
            e.target.value;
        }}
      />
      {elements?.map((element, ind) => (
        <form
          key={ind}
          action=""
          className="form-editor"
          style={{ position: "relative" }}
        >
          <input
            type="button"
            className="close"
            value={"X"}
            style={{
              padding: "5px",
              left: "-0.6rem",
              width: "20px",
              top: "-2rem",
            }}
            onClick={() => {
              setElements(elements.filter((_, index) => index !== ind));
            }}
          />
          <select
            name="element_type"
            id="element_tyoe"
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          >
            <option value="">element_type</option>
            <option value="div">div</option>
            <option value="h1">h1</option>
            <option value="h2">h2</option>
            <option value="p">p</option>
            <option value="list">list</option>
          </select>
          <input
            type="text"
            name="element_color"
            placeholder="element_color"
            value={element?.element_color}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_additional_class"
            placeholder="element_additional_class"
            value={element?.element_additional_class}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_additional_css"
            placeholder="element_additional_css"
            value={element?.element_additional_css}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_sort"
            placeholder="element_sort"
            value={element?.element_sort}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_position"
            placeholder="element_position"
            value={element?.element_position}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_effect_direction"
            placeholder="element_effect_direction"
            value={element?.element_effect_direction}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_effect_duration"
            placeholder="element_effect_duration"
            value={element?.element_effect_duration}
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="text"
            name="element_content"
            placeholder="element_content"
            className="fill-col"
            onChange={(e) => {
              dispatch(handleChange(e.target.name, e.target.value, null, ind));
            }}
          />
          <input
            type="submit"
            value="Insertar nuevo elemento"
            className="fill-col btn"
            onClick={(e) => {
              e.preventDefault();
              setNewElements([
                ...newElements,
                { ...element, id: ind, position: position++ },
              ]);
            }}
          />
          <input
            type="submit"
            value="Crear nuevo elemento"
            className="fill-col btn"
            onClick={(e) => {
              e.preventDefault();
              dispatch(newElement("string"));
            }}
          />
          <div className="new-container">
            {newElements.map((element, index) => {
              if (element.id === ind) {
                return (
                  <div className="form-editor-new" key={index + 1}>
                    <div
                      className="close"
                      onClick={() =>
                        setNewElements(
                          newElements.filter((_, i) => i !== index)
                        )
                      }
                    >
                      X
                    </div>
                    <select
                      name="element_type"
                      id="element_type"
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    >
                      <option value="">element_type</option>
                      <option value="div">div</option>
                      <option value="h1">h1</option>
                      <option value="h2">h2</option>
                      <option value="p">p</option>
                      <option value="list">list</option>
                    </select>
                    <input
                      type="text"
                      name="element_color"
                      placeholder="element_color"
                      value={element?.element_color}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_additional_class"
                      placeholder="element_additional_class"
                      value={element?.element_additional_class}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;

                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_additional_css"
                      placeholder="element_additional_css"
                      value={element?.element_additional_css}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_sort"
                      placeholder="element_sort"
                      value={element?.element_sort}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_position"
                      placeholder="element_position"
                      value={element?.element_position}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_effect_direction"
                      placeholder="element_effect_direction"
                      value={element?.element_effect_direction}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_effect_duration"
                      placeholder="element_effect_duration"
                      value={element?.element_effect_duration}
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="text"
                      name="element_content"
                      placeholder="element_content"
                      className="fill-col"
                      onChange={(e) => {
                        setNewElements((prev) => {
                          const updatedElements = [...prev];
                          updatedElements[index][e.target.name] =
                            e.target.value;
                          updatedElements["position"] =
                            updatedElements.length - 1;
                          return updatedElements;
                        });
                      }}
                    />
                    <input
                      type="submit"
                      value="Insertar nuevo elemento"
                      className="fill-col btn"
                      onClick={(e) => {
                        e.preventDefault();
                        setNewElements([
                          ...newElements,
                          { ...element, id: ind, position: position++ },
                        ]);
                      }}
                    />
                  </div>
                );
              }
            })}
          </div>
        </form>
      ))}
      <textarea
        className="json"
        disabled
        value={JSON.stringify(elements, null, 2)
          .split(",")
          .join(",\n")
          .split("{")
          .join("{\n")
          .split("}")
          .join("\n}")}
      ></textarea>
    </div>
  );
}
