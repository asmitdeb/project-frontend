import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layouts/MainLayout.tsx";
import LoginPage from "./pages/Login.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import Search from "./pages/Search.tsx";
import CreateOffer from "./pages/CreateOffer.tsx";
import Negotiation from "./pages/Negotiation.tsx";
import Settings from "./pages/Settings.tsx";
import Notification from "./components/Notification.tsx";
import NotFound from "./pages/NotFound.tsx";
import LandingPage from "./pages/LandingPage.tsx";

const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
          <>
          <Route path= "/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Layout />}>   
            <Route index element={<Dashboard />} />
            <Route path="search" element={<Search />} />
            <Route path="create-offer" element={<CreateOffer />} />
            <Route path="negotiations" element={<Negotiation />} />
            <Route path="settings" element={<Settings />} />
            <Route path="notifications" element={<Notification />} />
          </Route>
          <Route path="login" element = {<LoginPage />} />
          <Route path="*" element={<NotFound />}/>
          </>
        )
      );
      return <RouterProvider router={router} />
}

export default App
