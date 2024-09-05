//test file for jest tests
import { metersToFeetAndInches } from '../tools.ts';

describe('metricToImperialFeetAndInches', () => {
  it('should convert 1.8 meters to 5 feet 11 inches', () => {
    expect(metersToFeetAndInches(1.8)).toBe("5' 11\"");
  });
  it('should not return 0 feet', () => {
    expect(metersToFeetAndInches(0.04)).toBe("2\"");
  });
});
