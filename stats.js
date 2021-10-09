const fs = require("fs");
const filename = "./_metadata.json";
var tally = {};

var res = require(filename);

//console.log(res);
res.forEach((element) => {
  element.attributes.forEach((el) => {
    if (tally[el.trait_type] == void 0) {
      tally[el.trait_type] = {};
    }
    if (tally[el.trait_type][el.value] == void 0) {
      tally[el.trait_type][el.value] = 0;
    }
    tally[el.trait_type][el.value]++;
  });
});

for (let i in tally) {
  let attrib = tally[i];
  console.log("--");
  console.log(i, ":");
  // console.log(attrib);
  let total = sum(attrib);

  if (total == 0) {
    console.log("nothing to sum?");
    process.exit();
  }
  let multiplier = 100 / total;
  for (let v in attrib) {
    let val = attrib[v];
    // console.log(v, val, multiplier);
    console.log(`${v}: ${parseInt(attrib[v]) * multiplier}%`);
  }
}

function sum(el) {
  let sum = 0;
  for (let i in el) {
    sum += el[i];
  }
  return sum;
}
