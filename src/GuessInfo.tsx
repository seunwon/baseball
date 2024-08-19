export class GuessInfo {
  private _id?: number;
  private _guess?: string;
  private _ball?: number;
  private _strike?: number;

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  get guess(): string | undefined {
    return this._guess;
  }

  set guess(value: string | undefined) {
    this._guess = value;
  }

  get ball(): number | undefined {
    return this._ball;
  }

  get strike(): number | undefined {
    return this._strike;
  }
}
