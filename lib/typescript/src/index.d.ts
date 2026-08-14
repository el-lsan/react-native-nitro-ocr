import type { RecognizeOptions, OCRResult } from './NitroOcr.nitro';
export type { RecognizeOptions, OCRResult, OCRBlock, OCRLine, OCRElement, OCRSymbol, BoundingBox, Point, RecognitionLevel, ScriptHint, } from './NitroOcr.nitro';
export type OCRErrorCode = 'INVALID_SOURCE' | 'IMAGE_LOAD_FAILED' | 'RECOGNITION_FAILED' | 'UNSUPPORTED_LANGUAGE' | 'MODEL_NOT_AVAILABLE' | 'CANCELLED';
export declare class OCRError extends Error {
    readonly code: OCRErrorCode;
    constructor(code: OCRErrorCode, message: string);
}
export declare function recognize(source: string, options?: RecognizeOptions): Promise<OCRResult>;
export declare function recognizeText(source: string, options?: RecognizeOptions): Promise<string>;
export declare function getSupportedLanguages(): Promise<string[]>;
//# sourceMappingURL=index.d.ts.map