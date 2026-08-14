"use strict";

import { NitroModules } from 'react-native-nitro-modules';
export class OCRError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'OCRError';
    this.code = code;
    Object.setPrototypeOf(this, OCRError.prototype);
  }
}

// Must stay in sync with the OCRErrorCode type union above.
const VALID_ERROR_CODES = new Set(['INVALID_SOURCE', 'IMAGE_LOAD_FAILED', 'RECOGNITION_FAILED', 'UNSUPPORTED_LANGUAGE', 'MODEL_NOT_AVAILABLE', 'CANCELLED']);
function isOCRErrorCode(value) {
  return VALID_ERROR_CODES.has(value);
}
function parseNativeError(error) {
  const message = error instanceof Error ? error.message : String(error);
  const match = message.match(/^([A-Z_]+): ([\s\S]+)$/);
  if (match?.[1] && match[2] && isOCRErrorCode(match[1])) {
    return new OCRError(match[1], match[2]);
  }
  return new OCRError('RECOGNITION_FAILED', message);
}
const NitroOcrHybridObject = NitroModules.createHybridObject('NitroOcr');
export async function recognize(source, options) {
  try {
    return await NitroOcrHybridObject.recognize(source, options);
  } catch (error) {
    throw parseNativeError(error);
  }
}
export async function recognizeText(source, options) {
  try {
    return await NitroOcrHybridObject.recognizeText(source, options);
  } catch (error) {
    throw parseNativeError(error);
  }
}
export async function getSupportedLanguages() {
  try {
    return await NitroOcrHybridObject.getSupportedLanguages();
  } catch (error) {
    throw parseNativeError(error);
  }
}
//# sourceMappingURL=index.js.map