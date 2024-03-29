import * as React from "react";
import { Routes, Route } from "react-router-dom";
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
import { Registration } from "./pages/UserManagment/Registration";
import{ ForgotPassword } from "./pages/UserManagment/ForgotPassword";
import{ ChangePassword } from "./pages/UserManagment/ChangePassword";
import{ SignIn } from "./pages/UserManagment/SignIn";
const App = () => {
  return (

    <Routes>

      {/* <Route path="/incometax/caselaw/sccases" element={<LandingLayout />} /> */}
      <Route path="/:parent/:submenu1/:submenu2/:submenu3/details" element={<DetailedLayout />} />
      <Route path="/:parent/:submenu1/:submenu2/:submenu3" element={<LandingLayout />} />
      <Route path="/:parent/:submenu1/:submenu2/details" element={<DetailedLayout />} />
      <Route path="/:parent/:submenu1/:submenu2" element={<LandingLayout />} />
      <Route path="/:parent/:submenu1/details" element={<DetailedLayout />} />
      <Route path="/:parent/:submenu1" element={<LandingLayout />} />
      <Route path="/:parent/details" element={<DetailedLayout />} />
      <Route path="/:parent/news" element={<NewsLandingLayout />} />
      <Route path="/:parent" element={<LandingLayout />} />
      <Route path="/bookmark" element={<CaselawBookMark />} />
      {/* <Route path="/notification" element={<NotificationLandingLayout />} /> */}
      <Route path="/notification/details" element={<NotificationDetailedLayout />} />
      <Route path="/newsdetails" element={<NewsDetailedLayout />} />
      <Route path="/CommonSearch" element={<CommonSearch />} />
      <Route path="/tiol-web" element={<Home />} />
      <Route path="/incometax/notifications" element={<LandingLayout />} />
      <Route path="/search/column" element={<ColumnSearch />} />
      <Route path="/search/circulars" element={<NotificaionsCirculars />} />
      <Route path="/gst/sgst" element={<SGSTPage />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/changepassword" element={<ChangePassword />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>

  );
}

export default App;
