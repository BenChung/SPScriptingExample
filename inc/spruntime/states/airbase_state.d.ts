import { Position, Region } from "../protocol/types";
import { Unit } from "../wrappers/agent";
import { State } from "../wrappers/state";
export declare class AirbaseState extends State<Unit, {
    naircraft: number;
    points: Array<Position>;
    defendedRegion: Region;
}, void> {
    private launch;
    protected run(params: {
        naircraft: number;
        points: Array<Position>;
        defendedRegion: Region;
    }): Promise<void>;
}
