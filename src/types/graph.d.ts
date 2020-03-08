export const typeDefs = ["type Route {\n  id: Int!\n  infectedNo: Int!\n  routeLat: [Float]!\n  routeLng: [Float]!\n  routeAddress: [String]!\n}\n\ntype InsertStatusResponse {\n  ok: Boolean!\n  error: String\n}\n\ntype Mutation {\n  InsertStatus: InsertStatusResponse!\n}\n\ntype RecentStatusResponse {\n  ok: Boolean!\n  error: String\n  result: [Status]\n}\n\ntype Query {\n  RecentStatus: RecentStatusResponse!\n  AllVirus: AllVirusResponse!\n}\n\ntype Status {\n  confirmation: Int!\n  release: Int!\n  dead: Int!\n  inspection: Int!\n  date: String!\n}\n\ntype AllVirusResponse {\n  ok: Boolean!\n  error: String\n  virus: [Virus]\n}\n\ntype Virus {\n  id: Int!\n  lng: Float!\n  lat: Float!\n  address: String!\n  createdAt: String!\n}\n"];
/* tslint:disable */

export interface Query {
  RecentStatus: RecentStatusResponse;
  AllVirus: AllVirusResponse;
}

export interface RecentStatusResponse {
  ok: boolean;
  error: string | null;
  result: Array<Status> | null;
}

export interface Status {
  confirmation: number;
  release: number;
  dead: number;
  inspection: number;
  date: string;
}

export interface AllVirusResponse {
  ok: boolean;
  error: string | null;
  virus: Array<Virus> | null;
}

export interface Virus {
  id: number;
  lng: number;
  lat: number;
  address: string;
  createdAt: string;
}

export interface Mutation {
  InsertStatus: InsertStatusResponse;
}

export interface InsertStatusResponse {
  ok: boolean;
  error: string | null;
}

export interface Route {
  id: number;
  infectedNo: number;
  routeLat: Array<number>;
  routeLng: Array<number>;
  routeAddress: Array<string>;
}
