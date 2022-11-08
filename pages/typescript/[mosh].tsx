let sales: number = 123_456_789;
let course: string = "TypeScript";
let is_published = true;
let level;

let number: number[] = [1, 2, 3];

number.forEach((n) => n); // . intellisense

let user: [number, string] = [1, "Mosh"]; // This is a tuple, each element has a fixed type.

user[1]; // . intellisense

// Enums, list of related constants.
const small = 1;
const medium = 2;
const large = 3;

const enum Size {
  Small = 0,
  Medium = 1,
  Large = 3,
}
// enum Size { Small = 's', Medium = 'm', Large = 'l' }
//
let mySize: Size = Size.Medium;
// console.log(mySize)   -> 2

// Functions
function calculateTax(
  income: number,
  taxYear?: number,
  anotherArgument = 2022
): number {
  return 0;
}

// Objects
let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Mosh",
  retire: (date: Date) => {
    console.log("");
  },
};

// Type Alias
type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

// Union Types
function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") {
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2;
  }
}

// Intersection
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
type Quantity = 50 | 100;
// let quantity: 50 | 100 = 50
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Null Values
function greet(name: string | null) {
  if (name) console.log(name.toUpperCase);
  else console.log("Hola!");
}

greet(null);

// Custom

const Mosh = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Mosh;
