export interface Agent<T> {
    withHandle(t: AbortSignal): T;
}
