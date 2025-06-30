import './App.css';
import Nav from './Nav/Nav';
import Heroo from './cpmponents/hero/Heroo';
import Graphh from './cpmponents/Graphh';
import ElectricityConsumption from './cpmponents/ElectricityConsumption';
import EnergyTrackingInfo from './cpmponents/EnergyTrackingInfo';
import Footer from './cpmponents/Footer';
import Review from './cpmponents/Review';

function App() {
  return (
    <>
      <div className='bg-[rgb(212_238_212)] md:min-h-96 md:min-[60vh] min-h-[100vh] max-w-[100vw] py-10 px-4 overflow-hidden'>
        <Nav />
        <Heroo />
      </div>
      <EnergyTrackingInfo />
      <Graphh />
      <Review />
      <ElectricityConsumption />
      <Footer />
    </>
  );
}

export default App;
