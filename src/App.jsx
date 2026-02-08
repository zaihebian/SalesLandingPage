import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Lazy load pages for better performance
const LandingPage = lazy(() => import('./pages/LandingPage'))
const SimulatedLogin = lazy(() => import('./pages/SimulatedLogin'))

// Loading component
function LoadingFallback() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontSize: '1.25rem',
      color: '#6b7280'
    }}>
      Loading...
    </div>
  )
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<SimulatedLogin />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  )
}

export default App
