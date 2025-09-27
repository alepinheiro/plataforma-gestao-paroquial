/**
 * Array enum que representa as regiões do Brasil
 */
export const BrazilianRegionsArray = [
  'sul',
  'norte',
  'sudeste',
  'nordeste',
  'centroOeste',
] as const;

/**
 * Tipo que representa as regiões do Brasil
 */
export type BrazilianRegions = (typeof BrazilianRegionsArray)[number];

