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
          <Route path="/services" element={<Home />} />
          <Route path="/first-section" element={<Home />} />
          <Route path="/second-section" element={<Home />} />
          <Route path="/third-section-section" element={<Home />} />
          <Route path="/concept" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/thanks-contact" element={<ThanksContact />} />
      </Routes>
    </>
  )
}
