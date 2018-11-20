import hh from "hyperscript-helpers";
import { h } from "virtual-dom";
import { MSGS } from "./Update";

//the pre function creates the pre tag which is used for
//preformatted text
const { pre, div, h1, button, form, label, input } = hh(h);

const fieldSet = (labelText, inputValue) =>
  div([
    label({ className: "db m1" }, labelText),
    input({
      className: "pa2 input-reset ba w100 mb2",
      type: "text",
      value: inputValue
    })
  ]);

const buttonSet = dispatch =>
  div([
    button(
      {
        className: "f3 pv2 ph3 bg-blue white bn mr2 dim",
        type: "submit"
      },
      "Save"
    ),
    button(
      {
        className: "f3 pv2 ph3 bg-light-gray bn dim",
        type: "button"
      },
      "Cancel"
    )
  ]);

const formView = (dispatch, model) => {
  const { description, calories, showForm } = model;
  if (showForm) {
    return form({ className: "w-100 mv2" }, [
      fieldSet("Meal", description),
      fieldSet("Calories", calories || ""),
      buttonSet(dispatch)
    ]);
  } else {
    return button(
      {
        className: "f3 pv2 ph3 bg-blue white bn mr2 dim",
        onclick: () => dispatch(MSGS.SHOW_FORM)
      },
      "Add Meal"
    );
  }
};

const view = (dispatch, model) =>
  div({ className: "mw6 center" }, [
    h1({ className: "f2 pv2 bb" }, "Calorie Counter"),
    formView(dispatch, model),
    pre(JSON.stringify(model, null, 2))
  ]);

export default view;
