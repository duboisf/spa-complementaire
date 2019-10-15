export enum Operator {
    Plus,
    Minus,
    Obelus,
    Times,
}

export function operatorToString(op: Operator): string {
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
}
