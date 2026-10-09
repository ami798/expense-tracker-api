// An error that carries an HTTP status code, so services can say "this is a 404" without knowing about Express.
export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}
