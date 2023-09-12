export interface ConnectedUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  cityName: string;
  cityLat: number;
  cityLong: number;
  address1: string;
  address2?: string;
}
