const MSGS = {
  SHOW_FORM: "SHOW_FORM"
};

export const showFormMsg = showForm => {
  return {
    type: MSGS.SHOW_FORM,
    showForm
  };
};

const update = (msg, model) => {
  switch (msg.type) {
    case MSGS.SHOW_FORM:
      const { showForm } = msg;
      return { ...model, showForm };
    default:
      return model;
  }
};

export default update;
