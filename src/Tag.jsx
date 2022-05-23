import React, { PureComponent } from 'react'
import './Tag.css'

class Tag extends PureComponent {
    static defaultProps={
        id: 't0001',
        options: [
            { value: 'Seleccionar', text: 'Seleccionar' },
            { value: 'TODOS', text: 'TODOS' },
            { value: 'IMSS', text: 'IMSS' },
            { value: 'ISSSTE', text: 'ISSSTE' },
            { value: 'GARANTIA', text: 'GARANTIA' },
            { value: 'ISAPEG', text: 'ISAPEG' },
            { value: 'OTROS', text: 'OTROS' },
            { value: 'NINGUNO', text: 'NINGUNO' },
        ],
    }

    constructor(props) {
        super(props)
        this.state={
            selected: ['IMSS', 'ISSSTE', 'GARANTIA']
        }
    }

    createDefaultOptions() {
        let options=typeof this.props.options.length==='undefined'? [this.props.options]:this.props.options
        return options.map((option, index) => {
            return <option key={`${index}-${option.id}`} value={option.value}>{option.text}</option>
        })
    }

    createSelectedTags() {
        return this.state.selected.map(tag => <span className='tag'>
            <span>{tag}</span>
            <button className='tagButton'>&times;</button>
        </span>)
    }

    render() {
        return (
            <div className='Tags'>
                <label htmlFor="">Clientes:</label>
                <div className='SelectedTags'>{this.createSelectedTags()}</div>
                <select className='form-select' id={this.props.id}>
                    {this.createDefaultOptions()}
                </select>
            </div>
        )
    }
}

export default Tag