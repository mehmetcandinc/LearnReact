import React,{ Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>Hello React!</h1>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
//*********** same output *******************
const heading = <h1 className="site-heading">Hello, React. .</h1>

const heading2 = React.createElement('h1', {className: 'site-heading'},'Hello React. . .')
//*********** same output *******************

const name = 'Can'
const heading3 = <h1>Hello, {name}</h1>