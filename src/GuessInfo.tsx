export class GuessInfo {
  _ball: number;
  _strike: number;
  constructor(
    private _id: number,
    private _guess: string,
    private _answer: [number, number, number]
  ) {
    this._ball = 0;
    this._strike = 0;
  }

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
    const numbers = this._guess.split("").map(Number);
    for (let i = 0; i < 3; i++) {
      if (this._answer.includes(numbers[i]) && numbers[i] != this._answer[i]) {
        this._ball++;
      }
    }
    return this.ball;
  }

  get strike(): number | undefined {
    const numbers = this._guess.split("").map(Number);
    for (let i = 0; i < 3; i++) {
      if (numbers[i] === this._answer[i]) {
        this._strike++;
      }
    }

    return this.strike;
  }
}
