import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import ServiceDetail from '@/components/ServiceDetail';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollTop from '@/components/ScrollTop';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmet/:id" element={<ServiceDetail />} />
      </Routes>
      <ScrollTop />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
