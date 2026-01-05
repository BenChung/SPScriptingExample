import { ClientRuntime } from "./protocol/client_runtime";
export * from "./protocol/index";
export * from "./wrappers/index";
export { encode_client, decode_client, register_extension } from "./protocol/serialization/pickling";
export declare const runtime: ClientRuntime;
export declare class UnitCreatorService {
    private context;
    register(builder: (runtime: ClientRuntime, obj: any) => any | null): void;
    construct(runtime: ClientRuntime, obj: any): any;
}
export declare const unit_creator: UnitCreatorService;
