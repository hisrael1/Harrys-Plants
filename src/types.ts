export type Method = "GET" | "POST" | "DELETE";
export type Path = string;

export interface User {
  username: string;
  password: string;
}

export interface Plant {
  quantity: number;
  pot_color: string;
  id: number;
}

export type PlantBody = Omit<Plant, 'id'>;

export type Body = User | PlantBody | null;
