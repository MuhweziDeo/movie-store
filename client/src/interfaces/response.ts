import { IMovie } from "./movie";

export interface IShards {
    total: number;
    successful: number;
    skipped: number;
    failed: number;
}

export interface ITotal {
    value: number;
    relation: string;
}


export interface Hits {
    total: ITotal;
    max_score: number;
    hits: IMovie[];
}

export interface IResponse {
    took: number;
    timed_out: boolean;
    _shards: IShards;
    hits: Hits;
}