import react from 'react'
import ReactDOM from 'react-dom'
import FooApp from './FooApp'
import './index.css'

const divRoot = document.querySelector('#root')

ReactDOM.render(<FooApp greeting={'hellow there'} /> , divRoot );