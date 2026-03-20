// ROTA: src/types/property.ts
export interface Property {
  id: number;
  title: string;
  price: string;
  neighborhood: string;
  city: string;
  sqft: number;
  beds: number;
  baths: number;
  parking: number;
  image: string;
  tag?: string;
}
