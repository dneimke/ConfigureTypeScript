import { HttpFetchService } from "./HttpFetchService";
import { SampleService } from "./SampleService";

export const services = [HttpFetchService, SampleService];

export * from "./HttpFetchService";
export * from "./SampleService";