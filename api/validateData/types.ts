export type Errors = {
  [key: string]: Array<string>;
};

export class ValidationError extends Error {
  public readonly details?: Errors;

  constructor(message: string, details?: Errors) {
    super(message);
    this.details = details;
  }
}
