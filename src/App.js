import * as React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/index";
import { LandingLayout } from "./pages/landinglayout";
import { DetailedLayout } from "./pages/detaillayout";
import { CaselawBookMark } from "./pages/shared/bookmark/caselawBookMark";
import { NewsLandingLayout } from "./pages/landinglayout/landing/news/newsLayout";
import { NewsDetailedLayout } from "./pages/landinglayout/landing/news/details/newsDetailsLayout";
import { CommonSearch } from "./pages/home/coomonDate/commonSearch";
import { NotificationLandingLayout } from "./pages/landinglayout/landing/notification/notificationLayout";
import { NotificationDetailedLayout } from "./pages/landinglayout/landing/notification/detailsNotification/notificationDetailsLayout";
import { ColumnSearch } from "./pages/Search/ColumnSearch";
import { NotificaionsCirculars } from "./pages/Search/NotificationsCirculars";
import { SGSTPage } from "./pages/SGST";
import { Registration } from "./pages/UserManagment/register/Registration";
import{ ForgotPassword } from "./pages/UserManagment/ForgotPassword";
import{ ChangePassword } from "./pages/UserManagment/ChangePassword";
import{ SignIn } from "./pages/UserManagment/SignIn";
import ProtectedRoute from "./utill/ProtectedRoute";
const App = () => {
  return (
      <Routes>
        
        {/* <Route path="/incometax/caselaw/sccases" element={<LandingLayout />} /> */}
        <Route path="/:parent/:submenu1/:submenu2/:submenu3/details" element={<ProtectedRoute><DetailedLayout /></ProtectedRoute>} />
        <Route path="/:parent/:submenu1/:submenu2/:submenu3" element={<ProtectedRoute><LandingLayout /></ProtectedRoute>} />
        <Route path="/:parent/:submenu1/:submenu2/details" element={<ProtectedRoute><DetailedLayout /></ProtectedRoute>} />
        <Route path="/:parent/:submenu1/:submenu2" element={<ProtectedRoute><LandingLayout /></ProtectedRoute>} />
        <Route path="/:parent/:submenu1/details" element={<ProtectedRoute><DetailedLayout /></ProtectedRoute>} />
        <Route path="/:parent/:submenu1" element={<ProtectedRoute><LandingLayout /></ProtectedRoute>} />
        <Route path="/:parent/details" element={<ProtectedRoute><DetailedLayout /></ProtectedRoute>} />
        <Route path="/:parent/news" element={<NewsLandingLayout />} />
        <Route path="/:parent" element={<ProtectedRoute><LandingLayout /></ProtectedRoute>} />
        <Route path="/bookmark" element={<ProtectedRoute><CaselawBookMark /></ProtectedRoute>} />
        {/* <Route path="/notification" element={<ProtectedRoute><NotificationLandingLayout /></ProtectedRoute>} /> */}
        <Route path="/notification/details" element={<ProtectedRoute><NotificationDetailedLayout /></ProtectedRoute>} />
        <Route path="/newsdetails" element={<ProtectedRoute><NewsDetailedLayout /></ProtectedRoute>} />
        <Route path="/CommonSearch" element={<ProtectedRoute><CommonSearch /></ProtectedRoute>} />
        <Route path="/" element={<Home />} />
        <Route path="/incometax/notifications" element={<ProtectedRoute><LandingLayout /></ProtectedRoute>} />
        <Route path="/search/column" element={<ProtectedRoute><ColumnSearch /></ProtectedRoute>} />
        <Route path="/search/circulars" element={<ProtectedRoute><NotificaionsCirculars /></ProtectedRoute>} />
        <Route path="/gst/sgst" element={<ProtectedRoute><SGSTPage /></ProtectedRoute>} />

        <Route path="/registration" element={<Registration />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
  );
}

export default App;
