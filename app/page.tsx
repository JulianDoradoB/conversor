"use client";

import { useState } from 'react';

const convertLength = (meters: number, toUnit: string) => {
  switch (toUnit) {
    case 'inches': return meters * 39.3701;
    case 'centimeters': return meters * 100;
    default: return meters;
  }
};

const convertWeight = (kilograms: number, toUnit: string) => {
  switch (toUnit) {
    case 'pounds': return kilograms * 2.20462;
    case 'ounces': return kilograms * 35.274;
    default: return kilograms;
  }
};

const convertTemperature = (celsius: number, toUnit: string) => {
  switch (toUnit) {
    case 'fahrenheit': return (celsius * 9/5) + 32;
    case 'kelvin': return celsius + 273.15;
    default: return celsius;
  }
};

export default function Home() {
  const [length, setLength] = useState({ meters: '', inches: '', centimeters: '' });
  const [weight, setWeight] = useState({ kilograms: '', pounds: '', ounces: '' });
  const [temperature, setTemperature] = useState({ celsius: '', fahrenheit: '', kelvin: '' });

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLength(prev => {
      const meters = name === 'meters' ? value : (parseFloat(value) / 39.3701).toFixed(2);
      return {
        ...prev,
        meters,
        inches: convertLength(parseFloat(meters), 'inches').toFixed(2),
        centimeters: convertLength(parseFloat(meters), 'centimeters').toFixed(2),
      };
    });
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setWeight(prev => {
      const kilograms = name === 'kilograms' ? value : (parseFloat(value) / 2.20462).toFixed(2);
      return {
        ...prev,
        kilograms,
        pounds: convertWeight(parseFloat(kilograms), 'pounds').toFixed(2),
        ounces: convertWeight(parseFloat(kilograms), 'ounces').toFixed(2),
      };
    });
  };

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTemperature(prev => {
      const celsius = name === 'celsius' ? value : ((parseFloat(value) - 32) * 5/9).toFixed(2);
      return {
        ...prev,
        celsius,
        fahrenheit: convertTemperature(parseFloat(celsius), 'fahrenheit').toFixed(2),
        kelvin: convertTemperature(parseFloat(celsius), 'kelvin').toFixed(2),
      };
    });
  };

  return (
    <div className="w-full flex flex-col h-screen">
      <header className="w-full h-20 bg-blue-400 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl">Conversor Fácil</h1>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center p-4 sm:p-8 lg:p-12 gap-12">
        {/* Conversor de longitud */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10">
          <div className="text-center">
            <h2 className="text-xl mb-4">Conversor de longitud</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-left">Metros</label>
                <input
                  name="meters"
                  value={length.meters}
                  onChange={handleLengthChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Pulgadas</label>
                <input
                  name="inches"
                  value={length.inches}
                  onChange={handleLengthChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Centímetros</label>
                <input
                  name="centimeters"
                  value={length.centimeters}
                  onChange={handleLengthChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Conversor de peso */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10">
          <div className="text-center">
            <h2 className="text-xl mb-4">Conversor de peso</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-left">Kilogramos</label>
                <input
                  name="kilograms"
                  value={weight.kilograms}
                  onChange={handleWeightChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Libras</label>
                <input
                  name="pounds"
                  value={weight.pounds}
                  onChange={handleWeightChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Onzas</label>
                <input
                  name="ounces"
                  value={weight.ounces}
                  onChange={handleWeightChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Conversor de temperatura */}
        <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 sm:p-8 lg:p-10 mb-6 sm:mb-8 lg:mb-10">
          <div className="text-center">
            <h2 className="text-xl mb-4">Conversor de temperatura</h2>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-left">Celsius</label>
                <input
                  name="celsius"
                  value={temperature.celsius}
                  onChange={handleTemperatureChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Fahrenheit</label>
                <input
                  name="fahrenheit"
                  value={temperature.fahrenheit}
                  onChange={handleTemperatureChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
              <div>
                <label className="block text-left">Kelvin</label>
                <input
                  name="kelvin"
                  value={temperature.kelvin}
                  onChange={handleTemperatureChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="number"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
