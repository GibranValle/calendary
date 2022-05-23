import React, { PureComponent } from 'react'
import './Input.css'

class InputRow extends PureComponent {
    static defaultProps={
        data: [
            {
                name: 'defaul',
                id: '0001',
                type: 'text',
                text: 'Default:'
            }
        ]
    }
    create(className) {
        // create array if single object
        const iterable=typeof this.props.data.length==='undefined'? [this.props.data]:this.props.data
        return iterable.map((row, index) => {
            return (
                <div className={className} key={index}>
                    <label className='form-label' htmlFor={row.id}>{row.text}</label>
                    <input className='form-control' name={row.name} id={row.id} type={row.type} />
                </div>
            )
        })
    }
    render() {
        return this.create('InputRow')
    }
}

class InputCol extends InputRow {
    render() {
        return this.create('InputCol')
    }
}

export { InputRow, InputCol }

/**
 *                 <InputRow data={[
                    { text: 'Año:', type: 'date', name: 'year', id: 'year' },
                    { text: 'Año:', type: 'date', name: 'year', id: 'year' },
                ]} />
                <InputCol data={{ text: 'Año:', type: 'date', name: 'year', id: 'year' }} />
 */