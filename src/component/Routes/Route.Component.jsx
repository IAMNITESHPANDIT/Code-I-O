import React from 'react'
import { Routes, Route} from "react-router-dom";
import AboutPage from '../../pages/AboutUs/AboutPage';
import ContactusComponent from '../../pages/ContactUs/ContactusComponent';
import ErrorPage from '../../pages/Error/ErrorPage';
import FormComponent from '../../component/Form/FormComponent';
import FormSignComponent from '../../component/Form/FormSignComponent';
import PasswordReset from '../../component/PasswordReset/PasswordReset';
import HomePage from '../../pages/Home/Home.Page';
function RouteComponent() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactusComponent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/formsign" element={<FormSignComponent />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </div>
  )
}

export default RouteComponent