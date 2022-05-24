import React, { PureComponent } from 'react'
import './Input.css'

class SelectRow extends PureComponent {
    static defaultProps={
        text: 'Año:',
        id: '0001',
        value: '2022',
        options: [
            { value: '2022', text: '2022' },
            { value: '2021', text: '2021' },
        ],
        selectValue: (name, value) => {
            console.log(name, value)
        }
    }
    constructor(props) {
        super(props);
        this.state={ value: this.props.value };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value
        this.setState({ value });
        this.props.selectValue(this.props.text, value)
    }

    createMonthSelect(){
        return [
            {value:'1', text:'enero'},
            {value:'2', text:'febrero'},
            {value:'3', text:'marzo'},
            {value:'4', text:'abril'},
            {value:'5', text:'mayo'},
            {value:'6', text:'junio'},
            {value:'7', text:'julio'},
            {value:'8', text:'agosto'},
            {value:'9', text:'septiembre'},
            {value:'10', text:'octubre'},
            {value:'11', text:'noviembre'},
            {value:'12', text:'diciembre'},
        ]
    }

    createDefaultOptions() {
        let options
        if (this.props.options==='fillMonths') options=this.createMonthSelect()
        else options=typeof this.props.options.length==='undefined'? [this.props.options]:this.props.options

        return options.map((option, index) => {
            return <option key={`${index}-${option.id}`} value={option.value}>{option.text}</option>
        })
    }

    createSelect(className) {
        return (
            <div className={className}>
                <label htmlFor="">{this.props.text}</label>
                <select className='form-select' id={this.props.id} value={this.state.value} onChange={this.handleChange}>
                    {this.createDefaultOptions()}
                </select>
            </div>
        )
    }

    render() {
        return this.createSelect('SelectRow')
    }
}

class SelectCol extends SelectRow {
    render() {
        return this.createSelect('SelectCol')
    }
}

export { SelectRow, SelectCol }

/**
    <SelectRow text='Año' id='yearSelect' selectValue={this.getSelectValue} value={this.state.Año} options={[
        { value: '2022', text: '2022' },
        { value: '2021', text: '2021' }
    ]} />

    <SelectRow text='Mes' id='monthSelect' value={this.state.Mes} selectValue={this.getSelectValue} options='fillMonths' />
 */