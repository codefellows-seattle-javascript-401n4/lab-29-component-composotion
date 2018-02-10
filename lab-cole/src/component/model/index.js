import React from 'react'

let modelStyles = (props) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: props.show ? 'block' : 'none',
  background: 'blue',
})

let modelMainStyles = {
  position: 'fixed',
  background: 'white',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}

// is it Stateful? no
// will it have props? yes (show, children)
// does it need props? yes (show, children)
class Model extends React.Component {
  render(){
    return (
      <div style={modelStyles(this.props)} className='model'>
        <button onClick={this.props.onClose}> close </button>
        <main style={modelMainStyles} >
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default Model