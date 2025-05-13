import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', units: 320, bill: 1800 },
  { name: 'Feb', units: 280, bill: 1600 },
  { name: 'Mar', units: 350, bill: 2000 },
  { name: 'Apr', units: 400, bill: 2300 },
  { name: 'May', units: 450, bill: 2500 },
  { name: 'Jun', units: 500, bill: 2800 },
  { name: 'Jul', units: 480, bill: 2700 },
  { name: 'Aug', units: 460, bill: 2600 },
  { name: 'Sep', units: 420, bill: 2400 },
  { name: 'Oct', units: 390, bill: 2250 },
  { name: 'Nov', units: 360, bill: 2100 },
  { name: 'Dec', units: 340, bill: 2000 }
];

export default class Example extends PureComponent {
  render() {
    return (
      <div className='w-[100%] m-auto bg-[rgb(212_238_212)] h-[88vh] px-5'>
        <div className='mt-[20px]'>
          <h1 className='text-center text-[32px] p-[3rem_0_1.5rem_0] font-bold text-[rgb(2_90_2)]'>
            Your Energy Usage
          </h1>
          <h4 className='text-center font-bold font-[poppins] text-[16px]'>Monthly Energy Consumption & Bill</h4>
        </div>
        <div className='max-w-[900px] m-auto h-[58vh] bg-white flex justify-center mt-9 items-center'>
          <div className='w-[800px] m-auto h-[50vh]'>
            <ResponsiveContainer width='100%' height='100%'>
              <LineChart
                width={500}
                height={300}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip formatter={(value, name) => (name === 'bill' ? `₹${value}` : `${value} kWh`)} />
                <Legend />
                <Line
                  type='monotone'
                  dataKey='units'
                  name='Units (kWh)'
                  stroke='#8884d8'
                  activeDot={{ r: 8 }}
                />
                <Line
                  type='monotone'
                  dataKey='bill'
                  name='Bill (₹)'
                  stroke='#82ca9d'
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
  }
}
