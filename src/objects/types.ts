export interface Pokemon {
  name: string;
  id: number;
  description?: string;
  type: string;
  weakToTypes: string[];
  height: number;
  weight: number;
  localImageUrl?: string;
  color: string;
}
