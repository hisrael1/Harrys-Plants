import { POT_COLORS } from "shared/util";
export type PotColor = keyof typeof POT_COLORS;

export type Image = {
  pot_color: PotColor;
  src: string;
};

export interface Plant {
  botanical_name: string;
  care_instructions: string;
  description: string;
  id: number;
  images: Image[];
  name: string;
  price: number;
}
