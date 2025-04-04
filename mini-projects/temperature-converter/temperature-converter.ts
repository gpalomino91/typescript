// --- temperatureConverter.ts ---

class TemperatureConverter {
  
  constructor(private temp: number) {}

  convertCelsiusToFahrenheit(): number {
    return this.temp * (9/5) + 32;
  }

  convertFahrenheitToCelsius(): number {
    return (this.temp - 32) * (5/9);
  }
}
