export class GuessInfo {
  constructor(
    private _id: number,
    private _guess: string,
    private _answer: [number, number, number]
  ) {}

  get id(): number | undefined {
    return this._id;
  }

  get guess(): string | undefined {
    return this._guess;
  }

  get answer(): [number, number, number] | undefined {
    return this._answer;
  }

  get ball(): number | undefined {
    let b = 0;
    const numbers = this._guess.split("").map(Number);
    for (let i = 0; i < 3; i++) {
      if (this._answer.includes(numbers[i]) && numbers[i] != this._answer[i]) {
        b++;
      }
    }
    return b;
  }

  get strike(): number | undefined {
    let s = 0;
    const numbers = this._guess.split("").map(Number);
    for (let i = 0; i < 3; i++) {
      if (numbers[i] === this._answer[i]) {
        s++;
      }
    }
    return s;
  }
}
