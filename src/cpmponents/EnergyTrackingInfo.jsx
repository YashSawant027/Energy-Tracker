import { faChartLine, faLightbulb, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Element } from 'react-scroll';
import React from 'react';

const EnergyTrackingInfo = () => {
  const points = [
    {
      icon: <FontAwesomeIcon icon={faLightbulb}/>,
      title: 'Reduce Costs',
      description:'One of the most immediate and noticeable benefits of energy tracking is cost reduction. By monitoring where, when, and how much energy is being used, individuals and businesses can pinpoint exactly which appliances or systems are consuming the most power. This insight allows for informed decisions, such as unplugging idle electronics, adjusting thermostat settings, or replacing outdated equipment with energy-efficient alternatives. Additionally, identifying peak usage times helps users shift their consumption to off-peak hours, often when electricity rates are lower. Over time, these small changes can lead to significant savings on monthly utility bills. In commercial settings, energy tracking can even influence operational strategies, leading to reduced overhead and increased profitability.'

    },
    {
      icon: <FontAwesomeIcon icon={faChartLine}/>,
      title: 'Improve Efficiency',
      description:'Energy tracking plays a key role in improving overall efficiency by revealing how effectively energy is being used within a home or business. With detailed insights, users can identify underperforming appliances, systems that consume energy even when idle, or patterns of unnecessary usage. This knowledge enables targeted improvements, such as upgrading to energy-efficient lighting or appliances, optimizing HVAC operation, and automating energy controls. By ensuring that every unit of energy serves a clear purpose, energy tracking helps minimize waste and maximize performance. In the long run, enhanced efficiency not only conserves resources but also extends the lifespan of equipment and supports more sustainable living or business operations.'
    },
    {
      icon: <FontAwesomeIcon icon={faShieldAlt}/>,
      title: 'Protect the Environment',
      description:'Energy tracking contributes significantly to environmental protection by promoting conscious and efficient energy use. When individuals and organizations monitor their energy consumption, they become more aware of wasteful habits and are more likely to adopt sustainable practices. Reduced energy usage directly translates to lower demand on power plants, many of which burn fossil fuels like coal and natural gas. This leads to a decrease in harmful greenhouse gas emissions, air pollution, and resource depletion. By cutting down on energy waste, users help slow climate change, preserve natural ecosystems, and reduce their overall carbon footprint—making energy tracking a simple yet powerful tool for environmental stewardship.'  },
  ];

  return (
   <Element name="about"> <div
      className="max-w-[1170px] mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg min-h-[200vh]  sm:min-h-[50vh] "
    >
      <div className="flex flex-col h-full">
        {/* Header Section */}
        <h2 className="text-3xl font-bold mb-7 sm:text-2xl text-[rgb(2_90_2)]">
          Why Energy Tracking Matters
        </h2>

        {/* Brief Info Section */}
        <p className="text-lg text-gray-700 mb-7 flex-shrink-0 sm:text-base">
        Energy tracking is essential because it empowers individuals and organizations to understand their electricity usage, identify inefficiencies, and take steps to reduce waste. By monitoring consumption, users can lower their energy bills, improve appliance efficiency, and make smarter decisions about usage patterns. It also plays a vital role in environmental sustainability by helping reduce carbon emissions and reliance on non-renewable energy sources. Ultimately, tracking energy is a key step toward achieving both financial savings and a greener future.</p>

        {/* Main Content Section */}
        <div className="flex-1">
          <div className="">
            <div className="grid grid-cols-1  gap-8 sm:gap-2 ">
              {points.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col mb-4 bg-[rgb(212_238_212)] p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  
                  <h3 className="text-xl font-semibold mt-2 mb-2 sm:text-lg">
                    {point.title}  {point.icon}
                  </h3>
                  <p className="text-sm text-gray-600  sm:text-xs">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div></Element>
  );
};

export default EnergyTrackingInfo;
