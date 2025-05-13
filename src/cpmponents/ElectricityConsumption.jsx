import React, { useState } from 'react';
import { Element } from 'react-scroll';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import formbg from './hero/Assets/formbg1.jpg';

const ElectricityConsumptionCalculator = () => {
  const [step, setStep] = useState(1);
  const [energySource, setEnergySource] = useState('');
  const [energyProvider, setEnergyProvider] = useState('');
  const [appliances, setAppliances] = useState([
    { name: 'Light', kwh: '', hours: '' },
    { name: 'Fan', kwh: '', hours: '' },
  ]);
  const [peakUsage, setPeakUsage] = useState('');
  const [highSeason, setHighSeason] = useState('');
  const [monthlyBill, setMonthlyBill] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);
  const [result, setResult] = useState({});

  const addAppliance = () => {
    setAppliances([...appliances, { name: '', kwh: '', hours: '' }]);
  };

  const handleApplianceChange = (index, field, value) => {
    const newAppliances = [...appliances];
    newAppliances[index][field] = value;
    setAppliances(newAppliances);
  };

  const calculateResults = () => {
    const totalKWh = appliances.reduce((acc, appliance) => {
      return (
        acc +
        (parseFloat(appliance.kwh || 0) * parseFloat(appliance.hours || 0) * 30)
      );
    }, 0);

    const expectedUsage = totalKWh * 0.9;
    const expectedBill = expectedUsage * 7;
    const actualBill = totalKWh * 7;
    const savings = expectedBill > 0 ? (((expectedBill - actualBill) / expectedBill) * 100).toFixed(2) : 0;
    const carbonFootprint = (totalKWh * 0.85).toFixed(2);

    setResult({
      totalKWh: totalKWh.toFixed(2),
      expectedUsage: expectedUsage.toFixed(2),
      actualUsage: totalKWh.toFixed(2),
      expectedBill: expectedBill.toFixed(2),
      actualBill: actualBill.toFixed(2),
      savings,
      carbonFootprint,
    });

    setShowDashboard(true);
  };

  const handleTrackAgain = () => {
    setShowDashboard(false);
    setStep(1);
  };

  const totalSteps = 4;
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <Element name = "track"><div
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: `url(${formbg})` }}
    >
      <div className="bg-white/30 backdrop-blur-md rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          Electricity Consumption Calculator
        </h1>

        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>

        <div className="space-y-4">
          {!showDashboard && (
            <div>
              {step === 1 && (
                <>
                  <label className="block mb-1 font-medium">Energy Source</label>
                  <select
                    className="w-full border p-2 rounded mb-4"
                    value={energySource}
                    onChange={(e) => setEnergySource(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="electricity">Electricity</option>
                    <option value="solar">Solar</option>
                    <option value="gas">Gas</option>
                    <option value="other">Other</option>
                  </select>

                  <label className="block mb-1 font-medium">Energy Provider</label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded mb-4"
                    value={energyProvider}
                    onChange={(e) => setEnergyProvider(e.target.value)}
                    placeholder="Enter provider name"
                  />

                  <button
                    onClick={() => setStep(2)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Next
                  </button>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-lg font-semibold mb-2">Appliances</h2>
                  {appliances.map((appliance, index) => (
                    <div key={index} className="grid grid-cols-3 gap-2 mb-2">
                      <input
                        type="text"
                        placeholder="Name"
                        value={appliance.name}
                        onChange={(e) => handleApplianceChange(index, 'name', e.target.value)}
                        className="border p-2 rounded"
                      />
                      <input
                        type="number"
                        placeholder="kWh"
                        value={appliance.kwh}
                        onChange={(e) => handleApplianceChange(index, 'kwh', e.target.value)}
                        className="border p-2 rounded"
                      />
                      <input
                        type="number"
                        placeholder="Hours"
                        value={appliance.hours}
                        onChange={(e) => handleApplianceChange(index, 'hours', e.target.value)}
                        className="border p-2 rounded"
                      />
                    </div>
                  ))}
                  <button onClick={addAppliance} className="text-blue-600 underline text-sm mb-4">
                    + Add More Appliances
                  </button>
                  <div className="flex justify-between">
                    <button onClick={() => setStep(1)} className="bg-gray-500 text-white px-4 py-2 rounded">
                      Previous
                    </button>
                    <button onClick={() => setStep(3)} className="bg-blue-500 text-white px-4 py-2 rounded">
                      Next
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <label className="block mb-1 font-medium">Peak Usage Time</label>
                  <select
                    className="w-full border p-2 rounded mb-4"
                    value={peakUsage}
                    onChange={(e) => setPeakUsage(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="24/7">24/7</option>
                  </select>

                  <label className="block mb-1 font-medium">High Consumption Season</label>
                  <select
                    className="w-full border p-2 rounded mb-4"
                    value={highSeason}
                    onChange={(e) => setHighSeason(e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="summer">Summer</option>
                    <option value="winter">Winter</option>
                    <option value="monsoon">Monsoon</option>
                    <option value="spring">Spring</option>
                  </select>

                  <div className="flex justify-between">
                    <button onClick={() => setStep(2)} className="bg-gray-500 text-white px-4 py-2 rounded">
                      Previous
                    </button>
                    <button onClick={() => setStep(4)} className="bg-blue-500 text-white px-4 py-2 rounded">
                      Next
                    </button>
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <label className="block mb-1 font-medium">Average Monthly Bill (₹)</label>
                  <input
                    type="number"
                    className="w-full border p-2 rounded mb-4"
                    value={monthlyBill}
                    onChange={(e) => setMonthlyBill(e.target.value)}
                    placeholder="e.g., 1200"
                  />
                  <div className="flex justify-between">
                    <button onClick={() => setStep(3)} className="bg-gray-500 text-white px-4 py-2 rounded">
                      Previous
                    </button>
                    <button onClick={calculateResults} className="bg-green-500 text-white px-4 py-2 rounded">
                      Submit
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {showDashboard && (
            <div className="mt-10 bg-white/80 p-4 sm:p-6 rounded-xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-center mb-4">🌱 EcoTrack Dashboard</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-xl shadow">
                  <p className="text-gray-500 text-sm">Current Usage</p>
                  <p className="text-lg sm:text-xl font-semibold">{result.totalKWh} kWh</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <p className="text-gray-500 text-sm">Estimated Monthly Savings</p>
                  <p className="text-lg sm:text-xl font-semibold">{result.savings}%</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow">
                  <p className="text-gray-500 text-sm">Carbon Footprint</p>
                  <p className="text-lg sm:text-xl font-semibold">{result.carbonFootprint} kg CO₂</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-2">Usage vs Bill Analysis</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={[
                        {
                          label: 'Expected',
                          usage: result.expectedUsage,
                          bill: result.expectedBill,
                        },
                        {
                          label: 'Actual',
                          usage: result.actualUsage,
                          bill: result.actualBill,
                        },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="label" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="usage" stroke="#3b82f6" name="Usage (kWh)" />
                      <Line type="monotone" dataKey="bill" stroke="#ef4444" name="Bill (₹)" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-4">Energy Distribution (%)</h3>
                  <div className="text-sm space-y-1">
                    {appliances.map((appliance, index) => {
                      const percent = (
                        (parseFloat(appliance.kwh || 0) * parseFloat(appliance.hours || 0) * 30) /
                        parseFloat(result.totalKWh || 1)
                      ) * 100;
                      return (
                        <div key={index}>
                          {appliance.name || 'Appliance'} – {isNaN(percent) ? 0 : percent.toFixed(1)}%
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-xl shadow">
                  <h3 className="text-lg font-semibold mb-4">Eco Recommendations</h3>
                  <div className="text-sm space-y-2">
                    <div>Use LED lights — Save up to 10%</div>
                    <div>Unplug devices when not in use — Save around 5%</div>
                    <div>Use energy-efficient appliances — Save 15% or more</div>
                    <div>Shift heavy usage from peak hours — Save up to 7%</div>
                    <div>Consider solar panels — Long-term savings of 20%+</div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8 space-x-4">
                <button
                  onClick={() => window.print()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
                >
                  Download Report
                </button>
                <button
                  onClick={handleTrackAgain}
                  className="bg-gray-600 text-white px-6 py-2 rounded-full hover:bg-gray-700"
                >
                  Track Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div></Element>
  );
};

export default ElectricityConsumptionCalculator;