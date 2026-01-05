import { Transport } from "./transport";
export declare class VuplexTransport implements Transport {
    private vuplex;
    onMessage?: (msg: any) => void;
    onClose?: (reason: string) => void;
    onError?: (reason: string) => void;
    onOpen?: () => void;
    constructor();
    connect(): void;
    send(data: any): void;
}
