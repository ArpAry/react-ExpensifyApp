import React from "react";
import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
import ExpensifyAdd from "../js-component/ExpensifyAdd";
import ExpensifyDashboard from "../js-component/ExpensifyDashboard";
import ExpensifyEdit from "../js-component/ExpensifyEdit";
import ExpensifyHelp from "../js-component/ExpensifyHelp";
import Error404 from "../js-component/ExpensifyError";
import Header from "../js-component/ExpensifyHeader";

const AppRouterFun = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<ExpensifyDashboard> </ExpensifyDashboard>}
          exact={true}
        />
        <Route path="create" element={<ExpensifyAdd> </ExpensifyAdd>} />
        <Route path="edit/:id" element={<ExpensifyEdit> </ExpensifyEdit>} />
        <Route path="/help" element={<ExpensifyHelp> </ExpensifyHelp>} />
        <Route path="*" element={<Error404> </Error404>} />
      </Routes>
    </div>
  </BrowserRouter>
);
export default AppRouterFun;
