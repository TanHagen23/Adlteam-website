import { Route, Routes } from "react-router-dom"
import { Home } from "../../module/home/home.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
