import { Agent } from "./agent";
export declare enum TransitionType {
    Soft = 1,// the transition occurs once all scheduled tasks have been completed
    Forced = 2,// scheduled tasks are cancelled and then transition occurs
    Immediate = 3
}
export declare abstract class State<A extends Agent<A>, P, R> {
    private localTarget;
    private subprocess_number;
    private in_flight;
    private finished_handlers;
    protected target: A;
    protected parentSignal?: AbortSignal;
    protected aborter: AbortController;
    constructor(target: A, parentSignal?: AbortSignal);
    exec(params: P): Promise<R>;
    terminate(type?: TransitionType): Promise<void>;
    transition<PN, RN>(next: (target: A, parentSignal?: AbortSignal) => State<A, PN, RN>, params: PN, type?: TransitionType): Promise<RN>;
    protected subprocess<T>(action: () => Promise<T>): Promise<T>;
    protected abstract run(params: P): Promise<R>;
}
