import { Unit } from "../../wrappers/agent";
import { State } from "../../wrappers/state";
export declare class DefaultCarrierController extends State<Unit, {}, void> {
    protected run(params: {}): Promise<void>;
    protected Patrol(aircraftNumber: number, task: string, behaviour: (unit: Unit) => (Promise<void>)): () => Promise<void>;
    private launch;
    private SelectAircraftByTask;
}
