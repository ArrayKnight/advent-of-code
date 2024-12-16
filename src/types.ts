export type ArrowDirection = "^" | ">" | "v" | "<";

export type CardinalDirection = "N" | "E" | "S" | "W";

export type Direction = ArrowDirection | CardinalDirection;

export type Grid<T = string> = T[][];

export type Position = [number, number];
