export interface Region {
}
export interface Position {
}
export interface GeoPosition extends Position {
    latitude: number;
    longitude: number;
    height?: number;
}
export interface UnitPosition extends Position {
    unitid: number;
}
export interface VehiclePosition extends Position {
    vehicleid: number;
}
export interface RelativePosition extends Position {
    relative: Position;
    rotating: boolean;
    height?: number;
    relative_height?: number;
}
export interface PolarRelativePosition extends RelativePosition {
    heading: number;
    distance: number;
}
export interface CartesianRelativePosition extends RelativePosition {
    northing: number;
    easting: number;
}
export declare class Circle implements Region {
    type: string;
    center: Position;
    radius: number;
    constructor(init?: Partial<Circle>);
}
export interface VehicleInfo {
    name: string;
    location: GeoPosition;
    taskforce: string;
    vehicleID: number;
    objectID: number;
    destroyed: boolean;
}
export interface ObjectInfo {
    name: string;
    taskforce: string;
    objectID: number;
}
export declare enum AltitudeType {
    Number = "Number",
    Periscope = "Periscope",
    Current = "Current",
    Parent = "Parent",
    VeryLow = "VeryLow",
    Low = "Low",
    Medium = "Medium",
    High = "High",
    VeryHigh = "VeryHigh",
    Cruise = "Cruise",
    Ceiling = "Ceiling",
    Surface = "Surface"
}
export declare enum RelationsState {
    Unknown = "Unknown",
    Hostile = "Hostile",
    Neutral = "Neutral",
    Friendly = "Friendly"
}
export declare enum WeaponStatus {
    Tight = "Tight",
    Free = "Free",
    Hold = "Hold"
}
export declare enum SensorType {
    None = "None",
    Visual = "Visual",
    AirSearchRadar = "AirSearchRadar",
    SurfaceSearchRadar = "SurfaceSearchRadar",
    Sonar = "Sonar",
    TowedSonar = "TowedSonar"
}
export interface VehicleOnBoard {
    name: string;
    loadouts: Array<{
        name: string;
        ammunitionAmounts: object;
    }>;
    number: number;
}
