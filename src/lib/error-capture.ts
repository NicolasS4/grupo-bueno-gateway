let lastError: Error | undefined;

export function captureError(error: Error) {
  lastError = error;
}

export function consumeLastCapturedError(): Error | undefined {
  const err = lastError;
  lastError = undefined;
  return err;
}