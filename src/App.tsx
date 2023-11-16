import {Button} from '@/components/ui/button'
import Icon from '../public/assets/icons/loader.svg'

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img className='m-3' src={Icon} alt="Add Post Icon" />
      <Button className="shad-button_primary">Click me</Button>
    </div>
  )
}

export default App
