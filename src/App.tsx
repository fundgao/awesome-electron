import { Routes, Route, useParams, useSearchParams } from 'react-router'
import Layout from '@/pages/layout'
import Home from '@/pages/home'
import DailyGoldRush from '@/pages/daily-gold-rush'
import './App.css'

function App() {
  // 获取动态参数 :id
  const { userId } = useParams()

  // 获取查询参数 ?name=robin&age=25
  const [searchParams, _setSearchParams] = useSearchParams()
  const _name = searchParams.get('name') // 'robin'
  const _age = searchParams.get('age') // '25'

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="daily-gold-rush" element={<DailyGoldRush />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  )
}

export default App
