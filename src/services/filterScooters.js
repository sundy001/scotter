const filterScooters = (scooters, modelFilter, minBattery, maxBattery) => {
  return scooters.filter(scooters => isScooterMatch(scooters, modelFilter, minBattery, maxBattery));
};

export const isScooterMatch = ({ model, energy_level }, modelFilter, minBattery, maxBattery) => {
  const isModelMatch = (modelFilter === '' || model.toLowerCase().indexOf(modelFilter) !== -1);
  const isMinBatteryInRange = minBattery === null || energy_level >= minBattery;
  const isMaxBatteryInRange = maxBattery === null || energy_level <= maxBattery;

  return isModelMatch && isMinBatteryInRange && isMaxBatteryInRange;
};

export default filterScooters;
