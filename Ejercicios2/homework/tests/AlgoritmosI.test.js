/* eslint-disable no-undef */
"use strict";
const { factorear } = require("../homework");

describe("factorear(num)", function () {
  it("Debería devolver ...?", function () {
    expect(factorear(180)).toEqual([1, 2, 2, 3, 3, 5]);
    expect(factorear(32)).toEqual([1, 2, 2, 2, 2, 2]);
    expect(factorear(33)).toEqual([1, 3, 11]);
    expect(factorear(1)).toEqual([1]);
  });
});
