import { useEffect, useState } from "react";
import "./module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  createElement,
  deleteElement,
  changeElement,
  insertElement,
  updateAllElements,
} from "../redux/actions.js";

export default function Editor() {
  const [background, setBackground] = useState(
    localStorage.getItem("background")
  );
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {}, [state]);

  return (
    <div className="editor-container">
      <input
        type="text"
        placeholder="background"
        className="background"
        value={background}
        onChange={(e) => {
          localStorage.setItem("background", e.target.value);
          setBackground(e.target.value);
          document.querySelector(".preview-container").style.background =
            e.target.value;
        }}
      />
      <input
        type="text"
        placeholder="padding"
        style={{ marginBottom: "3rem" }}
        onChange={(e) => {
          document.querySelector(".preview-container").style.padding =
            e.target.value;
        }}
      />
      {state?.slider_content ? (
        <div>
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
      <button
        className="fill-col btn"
        onClick={() => copiarContenido(state.slider_content)}
      >
        COPIAR
      </button>

      <p style={{ color: "white" }}>
        Introduce tu codigo JSON para convertirlo y editar.
      </p>

      <textarea
        name=""
        id=""
        className="json"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
        }}
        placeholder="Introduce tu codigo JSON para convertirlo y editar."
        value={
          state?.slider_content ? JSON.stringify(state?.slider_content) : ""
        }
        onChange={(e) => {
          dispatch(updateAllElements(e.target.value));
        }}
      ></textarea>
    </div>
  );
}

const copiarContenido = async (text) => {
  try {
    await navigator.clipboard.writeText(JSON.stringify(text));
    window.alert("Contenido copiado al portapapeles");
  } catch (err) {
    window.alert("Error al copiar: ", err);
  }
};

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
        value={element.element_type}
        onChange={(e) => {
          dispatch(changeElement("element_type", e.target.value, element.code));
        }}
      >
        <option value="">element_type</option>
        <option value="div">div</option>
        <option value="h1-title">h1-title</option>
        <option value="h1">h1</option>
        <option value="h2">h2</option>
        <option value="span">span</option>
        <option value="p">p</option>
        <option value="img">image</option>

        <option value="list">list</option>
      </select>
      <input
        type="text"
        name="element_color"
        placeholder="element_color"
        value={element.element_color}
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
        value={element.element_additional_class}
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
        value={element.element_additional_css}
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
        value={element.element_sort}
        onChange={(e) => {
          dispatch(changeElement("element_sort", e.target.value, element.code));
        }}
      />
      <input
        type="text"
        name="element_position"
        placeholder="element_position"
        value={element.element_position}
        onChange={(e) => {
          dispatch(
            changeElement("element_position", e.target.value, element.code)
          );
        }}
      />
      <input
        type="text"
        name="element_effect_direction"
        value={element.element_effect_direction}
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
        value={element.element_effect_duration}
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
        value={element.element_content}
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
