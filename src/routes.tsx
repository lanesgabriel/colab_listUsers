import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { ListUsers } from './pages/ListUsers'

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        
        {/* Rota filha que será renderizada pelo <Outlet /> presente no componente de DefaultLayout */}
        <Route index element={<ListUsers />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

