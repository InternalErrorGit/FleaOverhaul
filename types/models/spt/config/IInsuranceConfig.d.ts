import { IBaseConfig } from "./IBaseConfig";
export interface IInsuranceConfig extends IBaseConfig {
    kind: "aki-insurance";
    insuranceMultiplier: Record<string, number>;
    returnChancePercent: Record<string, number>;
    runIntervalSeconds: number;
}
