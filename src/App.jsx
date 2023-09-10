import "./App.css";
import Website from "./pages/Website";
import Layout from "./components/Layout/Layout";
import Eventlist from "./pages/Eventlist/Eventlist";
import OurTeam from "./pages/OurTeam/OurTeam";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from 'react-query';
function App() {

  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}> 
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Website />} />
          <Route path="Events" element={<Eventlist />} />
          <Route path="Ourteam" element={<OurTeam />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
