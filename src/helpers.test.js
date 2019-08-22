import React from "react";
// import ReactDOM from 'react-dom';
import { noteDistance, notePosition } from "./helpers.js";

describe("notePosition", () => {
  it("gets the correct position", () => {
    expect(notePosition("A")).toBe(0);
    expect(notePosition("B")).toBe(2);
    expect(notePosition("G♯")).toBe(11);
    expect(notePosition("G♭")).toBe(9);
  });
});

describe("noteDistance", () => {
  it("gets correct answer if distance is zero", () => {
    expect(noteDistance("A", "A")).toBe(0);
    expect(noteDistance("A♭", "A♭")).toBe(0);
    expect(noteDistance("D♯", "D♯")).toBe(0);
  });

  it("gets correct answer if distance is positive", () => {
    expect(noteDistance("A", "B")).toBe(2);
    expect(noteDistance("C♯", "E♭")).toBe(2);
    expect(noteDistance("C♯", "G♯")).toBe(7);
  });

  it("gets correct answer if distance is negative", () => {
    expect(noteDistance("B", "A")).toBe(10);
    expect(noteDistance("E♭", "C♯")).toBe(10);
    expect(noteDistance("G♯", "C♯")).toBe(5);
  });
});
