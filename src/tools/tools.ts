/**
 * Converts a metric value to imperial feet and inches
 * @example metersToFeetAndInches(1.8) // "5' 11""
 * @param meters
 */
export const metersToFeetAndInches = (meters: number) => {
  const feet = Math.floor(meters * 3.28084);
  const inches = Math.round((meters * 3.28084 - feet) * 12);
  if (feet === 0) { return `${inches}"`; }
  return `${feet}' ${inches}"`;
};
