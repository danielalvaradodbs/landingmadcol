import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { MeetTheTeam } from "../pages/meet-the-team/MeetTheTeam";
import { TermsConditions } from "../pages/terms-conditions/TermsConditions";
import { ThanksContact } from "../pages/thanks-contact/ThanksContact";

export const AppRouter = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/servicios" element={<Home />} />
          <Route path="/nosotros" element={<Home />} />
          <Route path="/contacto" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
      </Routes>
    </>
  )
}
