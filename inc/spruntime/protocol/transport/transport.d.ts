export interface Transport {
    onMessage?: (msg: any) => void;
    onClose?: (reason: string) => void;
    onError?: (reason: string) => void;
    onOpen?: () => void;
    connect(): void;
    send(data: any): void;
}
