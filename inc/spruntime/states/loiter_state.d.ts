import { Position, Region } from "../protocol/types";
import { Unit } from "../wrappers/agent";
import { State } from "../wrappers/state";
export declare class LoiterState extends State<Unit, {
    points: Array<Position>;
    defendedRegion: Region;
    done: () => void;
}, void> {
    protected run(params: {
        points: Array<Position>;
        defendedRegion: Region;
        done: () => void;
    }): Promise<void>;
}
