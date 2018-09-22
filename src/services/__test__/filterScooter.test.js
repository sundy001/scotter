import React from 'react';
import { isScooterMatch } from '../filterScooters';

describe('isScooterMatch', () => {
  it('should return correct value', () => {
    const result = isScooterMatch({model: 'exact', energy_level: 0}, 'exact', null, null);

    expect(result).toBe(true);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'exact', energy_level: 0}, 'fail', null, null);

    expect(result).toBe(false);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'long-string-partial', energy_level: 0}, 'partial', null, null);

    expect(result).toBe(true);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'SHOULD_NOT_caseSeNsitive', energy_level: 0}, 'casesensitive', null, null);

    expect(result).toBe(true);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'ignore', energy_level: 90}, '', 30, null);

    expect(result).toBe(true);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'ignore', energy_level: 30}, '', 30, null);

    expect(result).toBe(true);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'ignore', energy_level: 29}, '', 30, null);

    expect(result).toBe(false);
  });

  it('should return correct value', () => {
    const result = isScooterMatch({model: 'ignore', energy_level: 31}, '', null, 30);

    expect(result).toBe(false);
  });
});

