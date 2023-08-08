const hi=require("lodash")

let iniarr=[1,[2,[3,[4]]]]

let finarr=hi.flattenDeep(iniarr);

console.log(finarr)