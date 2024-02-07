import './App.css'
import { Dashboard } from './Dashboard'
import { MainPage } from './MainPage'
import { UserPreference } from './UserPreference'

function App() {

  return (
    <div className='user-interface'>
      <Dashboard />
      <MainPage />
      <UserPreference />
    </div>
  )
}

export { App }
