export const MSGS = {
  SHOW_FORM: "SHOW_FORM"
};

const update = (msg, model) => {
  switch (msg) {
    case MSGS.SHOW_FORM:
      return { ...model, showForm: true };
    default:
      return model;
  }
};

export default update;
