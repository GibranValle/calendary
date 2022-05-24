import React, { PureComponent } from 'react'
import './RadioButton.css'

class RadioButton extends PureComponent {
    static defaultProps={
        id: 'radiogroup',
        checkedChild: 0,
        data: [
            { name: 'radioGroup', value: 'A' },
            { name: 'radioGroup', value: 'B' },
            { name: 'radioGroup', value: 'C' }
        ],
        radioValue: (value) => {
            console.log(value)
        }
    }

    constructor(props) {
        super(props)
        this.state={
            clicked: false
        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(e) {
        const value=e.target.value
        this.setState({ clicked: true })
        this.props.radioValue(value)
    }

    createButtons() {
        const data=typeof this.props.data.length==='undefined'? [this.props.data]:this.props.data
        return (
            <div className='RadioGroup'>
                {data.map((item, index) => {
                    const id=`${index}`+this.props.id
                    return (
                        <div key={id+'d'}>
                            {(index===this.props.checkedChild&&!this.state.clicked)
                                ? <input className='RadioButton' type="radio" onChange={this.handleChange} name={this.props.id} id={id} value={item.value} checked />
                                :<input className='RadioButton' type="radio" onChange={this.handleChange} name={this.props.id} id={id} value={item.value} />
                            }
                            <label className='RadioLabel' htmlFor={id} key={id+'l'}>{item.value}</label>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return this.createButtons()
    }
}

export default RadioButton

/**
 * <RadioButton checkedChild={0} radioValue={this.getRadioValue}
                    data={[{ name: 'Mensual', value: 'Mensual' }, { name: 'Semanal', value: 'Semanal' }]} />
 */