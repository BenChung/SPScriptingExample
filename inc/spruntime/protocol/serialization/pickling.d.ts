import { JSONRPCClient } from "json-rpc-2.0";
export type ClassOf<T> = new (...args: any[]) => T;
export interface Extension<T, R> {
    Class: ClassOf<T>;
    tag: number;
    encode(value: T, encodeFn: (data: R) => Uint8Array): Buffer | Uint8Array;
    decode(item: R): T;
}
export declare function register_extension<T, R>(extension: Extension<T, R>): void;
export declare function encode_client(client: JSONRPCClient): Promise<Buffer<ArrayBufferLike>>;
export declare function decode_client(pack: Buffer | Uint8Array): Promise<{
    idToResolveMap: any;
    id: any;
}>;
