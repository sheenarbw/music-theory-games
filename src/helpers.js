export const flat = "♭";
export const sharp = "♯";
export const notes = [
  ["A"],
  ["A♯", "B♭"],
  ["B"],
  ["C"],
  ["C♯", "D♭"],
  ["D"],
  ["D♯", "E♭"],
  ["E"],
  ["F"],
  ["F♯", "G♭"],
  ["G"],
  ["G♯", "A♭"]
];

export function notePosition(note) {
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].indexOf(note) !== -1) {
      console.log(`${note} => ${i}`);
      return i;
    }
  }
}

export function noteDistance(note1, note2) {
  let distance = notePosition(note2) - notePosition(note1);
  if (distance < 0) return distance + 12;
  return distance;
}

function randomIndices(arr, num) {
  let result = [];
  while (result.length < num) {
    let i = Math.floor(Math.random() * arr.length);
    if (result.indexOf(i) === -1) result.push(i);
  }
  return result;
}

function pickOne(arr) {
  let index = randomIndices(arr, 1)[0];
  return arr[index];
}

export function randomNotes(num = 1) {
  const selection = randomIndices(notes, num).map(i => notes[i]);
  return selection.map(pickOne);
}
