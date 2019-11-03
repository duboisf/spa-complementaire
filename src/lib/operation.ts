export enum Operator {
  Plus,
  Minus,
  Obelus,
  Times,
}

export function randNumInRange(to: number): number {
  return Math.round(Math.random() * to)
}

const pickOne = <A>(as: A[]) => as[randNumInRange(as.length - 1)];

export function randOp(operators: Operator[], min: number, max: number): Operation {
  const operator = pickOne(operators);
  const x = randNumInRange(max - min) + min;
  const y = randNumInRange(max - min) + min;
  return new BinaryOperation(x, y, operator);
}

export function opToString(op: Operator): string {
  switch (op) {
    case Operator.Plus:
      return "+";
    case Operator.Minus:
      return "−";
    case Operator.Obelus:
      return "÷";
    case Operator.Times:
      return "×";
  }
}

export interface Operation extends Readonly<{
  x: number
  y: number
  operator: Operator
}> {
  output(): number
}

export class BinaryOperation implements Operation {

  constructor(
    readonly x: number,
    readonly y: number,
    readonly operator: Operator
  ) { }

  output(): number {
    switch (this.operator) {
      case Operator.Plus:
        return this.x + this.y;
      case Operator.Minus:
        return this.x - this.y;
      case Operator.Times:
        return this.x * this.y;
      case Operator.Obelus:
        return this.x / this.y;
    }
  }

  toString(): string {
    return `${this.x} ${opToString(this.operator)} ${this.y}`;
  }
}
