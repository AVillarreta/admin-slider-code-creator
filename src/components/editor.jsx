import { useEffect, useState } from "react";
import "./module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  createElement,
  deleteElement,
  changeElement,
  insertElement,
} from "../redux/actions.js";

export default function Editor() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className="editor-container">
      {state?.slider_content ? (
        <div>
          <input
            type="text"
            placeholder="background"
            onChange={(e) => {
              document.querySelector(".preview-container").style.background =
                e.target.value;
            }}
            value={""}
          />
          <input
            type="text"
            placeholder="padding"
            onChange={(e) => {
              document.querySelector(".preview-container").style.padding =
                e.target.value;
            }}
          />
          {state?.slider_content?.map((element, ind) => form(element, ind))}
          <input
            type="submit"
            value="Crear nuevo elemento"
            className="fill-col btn"
            onClick={(e) => {
              e.preventDefault();
              let code = Math.floor(Math.random() * 1000).toString();
              dispatch(createElement(code));
            }}
          />
        </div>
      ) : (
        <div>
          <input
            type="submit"
            value="Crear nuevo elemento"
            className="fill-col btn"
            onClick={(e) => {
              e.preventDefault();
              let code = Math.floor(Math.random() * 1000).toString();
              dispatch(createElement(code));
            }}
          />
        </div>
      )}
      <textarea
        className="json"
        disabled
        value={JSON.stringify(state?.slider_content, null, 2)
          ?.split(",")
          .join(",\n")
          .split("{")
          .join("{\n")
          .split("}")
          .join("\n}")}
      ></textarea>
    </div>
  );
}

const form = (element, ind) => {
  const dispatch = useDispatch();
  return (
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
          dispatch(deleteElement(element.code));
        }}
      />
      <select
        name="element_type"
        id="element_tyoe"
        onChange={(e) => {
          dispatch(changeElement("element_type", e.target.value, element.code));
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
        onChange={(e) => {
          dispatch(
            changeElement("element_color", e.target.value, element.code)
          );
        }}
      />
      <input
        type="text"
        name="element_additional_class"
        placeholder="element_additional_class"
        onChange={(e) => {
          dispatch(
            changeElement(
              "element_additional_class",
              e.target.value,
              element.code
            )
          );
        }}
      />
      <input
        type="text"
        name="element_additional_css"
        placeholder="element_additional_css"
        onChange={(e) => {
          dispatch(
            changeElement(
              "element_additional_css",
              e.target.value,
              element.code
            )
          );
        }}
      />
      <input
        type="text"
        name="element_sort"
        placeholder="element_sort"
        onChange={(e) => {
          dispatch(changeElement("element_sort", e.target.value, element.code));
        }}
      />
      <input
        type="text"
        name="element_position"
        placeholder="element_position"
        onChange={(e) => {
          dispatch(
            changeElement("element_position", e.target.value, element.code)
          );
        }}
      />
      <input
        type="text"
        name="element_effect_direction"
        placeholder="element_effect_direction"
        onChange={(e) => {
          dispatch(
            changeElement(
              "element_effect_direction",
              e.target.value,
              element.code
            )
          );
        }}
      />
      <input
        type="text"
        name="element_effect_duration"
        placeholder="element_effect_duration"
        onChange={(e) => {
          dispatch(
            changeElement(
              "element_effect_duration",
              e.target.value,
              element.code
            )
          );
        }}
      />
      <input
        type="text"
        name="element_content"
        placeholder="element_content"
        className="fill-col"
        onChange={(e) => {
          dispatch(
            changeElement("element_content", e.target.value, element.code)
          );
        }}
      />
      <input
        type="submit"
        value="Insertar nuevo elemento"
        className="fill-col btn"
        onClick={(e) => {
          e.preventDefault();
          dispatch(insertElement(element.code));
        }}
      />
      <div className="new-container">
        {Array.isArray(element.element_content)
          ? element.element_content?.map((nestedElement, index) => {
              return form(nestedElement, index); // Aplicar recursión para cada elemento
            })
          : null}
      </div>
    </form>
  );
};

/* let position = 0;

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

  
 */
