import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { CategoryPage } from './pages/CategoryPage'
import { ItemPage } from './pages/ItemPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="colecoes/:slug" element={<CategoryPage />} />
          <Route path="colecoes/:slug/:itemIndex" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
