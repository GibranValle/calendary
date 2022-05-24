import React, { PureComponent } from 'react'
import './Container.css'

class Container extends PureComponent {
  static defaultProps={
    title: 'Titulo',
    body: 'Cuerpo',
    footer: 'Notas'
  }

  render() {
    return (
      <div className='Container'>
        <div className='Container-header'>{this.props.title}</div>
        <div className='Container-body'>
          {this.props.body}
        </div>
        <div className='Container-footer'>{this.props.footer}</div>
      </div>
    )
  }
}

export default Container