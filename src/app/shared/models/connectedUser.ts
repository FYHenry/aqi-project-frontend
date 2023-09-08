export interface ConnectedUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cityName: string;
  cityLat: number;
  cityLong: number;
  adress1: string;
  adress2?: string;
}
