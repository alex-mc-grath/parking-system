import { Routes, Route } from 'react-router-dom'

import HomePage from '../HomePage/Loadable'
import Header from '../../components/theme/Header'

const App = () => {
  return (
    <>
      <Header
        layout={{
          logo: [
            { image: '/favicon3.svg', height: '70px' },
            { text: 'Parking System' },
          ],
        }}
      />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
