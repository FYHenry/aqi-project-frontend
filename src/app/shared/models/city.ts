import { Department } from "./department";

export interface City {
  latitude: number;
  longitude: number;
  department: Department;
  insee: string;
  name: string;
}
