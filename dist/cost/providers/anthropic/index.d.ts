/**
 *
 * DO NOT EDIT THIS FILE UNLESS IT IS IN /costs
 */
import { ModelDetailsMap, ModelRow } from "../../interfaces/Cost";
export declare const costs: ModelRow[];
export declare const modelDetails: ModelDetailsMap;
export declare const anthropicProvider: {
    costs: ModelRow[];
    modelDetails: ModelDetailsMap;
    reverseModelMap: {
        [key: string]: string;
    };
};
