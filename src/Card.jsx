import React, { PureComponent } from 'react'
import './Card.css'

class Card extends PureComponent {
  static defaultProps={
    title: 'Titulo de carta',
    body: 'Cuerpo de carta',
    footer: 'Notas'
  }
  render() {
    return (
      <div className='Card draggable' draggable='true'>
        <div className="Card-header">{this.props.title}</div>
        <div className="Card-body">{this.props.body}</div>
        <div className="Card-footer">{this.props.footer}</div>
      </div>
    )
  }
}

export default Card