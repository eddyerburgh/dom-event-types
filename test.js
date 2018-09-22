const eventTypes = require("./index");

test("can be used to create DOM events", () => {
  const eventInterface = eventTypes["click"][0];
  new window[eventInterface]("click");
});
