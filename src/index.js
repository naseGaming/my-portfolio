import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom'
import 'animate.css'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)