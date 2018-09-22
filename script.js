const json = require("./dom-event-types.json");
const fs = require("fs");

Object.keys(json).forEach(k => {
  json[k] = json[k].interfaces;
});

fs.writeFileSync(
  require.resolve("./dom-event-types.json"),
  JSON.stringify(json, null, 2)
);
