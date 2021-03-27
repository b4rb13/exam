import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ExamPage from "./pages/ExamPage";
// import CreatePage from "./pages/CreatePage";
// import DetailPage from "./pages/DetailPage";
import AuthPage from "./pages/AuthPage";

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Switch>
        <Route path={"/exam"} exact>
          <ExamPage />
        </Route>
        {/*<Route path={"/create"} exact>*/}
        {/*  <CreatePage />*/}
        {/*</Route>*/}
        {/*<Route path={"/detail/:id"} exact>*/}
        {/*  <DetailPage />*/}
        {/*</Route>*/}
        <Redirect to={"/exam"} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={"/"} exact>
        <AuthPage />
      </Route>
      <Redirect to={"/"} />
    </Switch>
  );
};

