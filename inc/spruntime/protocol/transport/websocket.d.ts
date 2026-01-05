import { Transport } from "./transport";
export declare class WebsocketTransport implements Transport {
    private address;
    private webSocket?;
    onMessage?: (msg: any) => void;
    onClose?: (reason: string) => void;
    onError?: (reason: string) => void;
    onOpen?: () => void;
    constructor(server: string);
    connect(): void;
    send(data: any): void;
}
