import { VehicleInfo } from "../protocol/types";
import { Unit } from "../wrappers/agent";
import { State } from "../wrappers/state";
export declare class AttackState<PN, RN> extends State<Unit, {
    target: VehicleInfo;
    resume: (target: Unit, parentSignal?: AbortSignal) => State<Unit, PN, RN>;
    resumeParams: PN;
}, void> {
    protected run(params: {
        target: VehicleInfo;
        resume: (target: Unit, parentSignal?: AbortSignal) => State<Unit, PN, RN>;
        resumeParams: PN;
    }): Promise<void>;
}
