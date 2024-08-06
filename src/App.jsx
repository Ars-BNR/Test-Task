import React from 'react'
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Page from './Components/Page'
import UsersTable from './Components/UsersTable/UsersTable';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Page />}>
        <Route index element={<UsersTable />} />
        <Route path="*" element={"Loading"} />
      </Route>
    </Routes>
  )
}

export default App