import React, { PureComponent } from 'react'
import { SelectRow } from './Select'
import './Filter.css'
import RadioButton from './RadioButton'
import ReactSelect from './ReactSelect';

class Filter extends PureComponent {
    static defaultProps={
        Año: '2022',
        Mes: '5',
        Semana: '26'
    }
    constructor(props) {
        super(props)
        this.state={
            size: 'Mensual',
            Año: this.props.Año,
            Mes: this.props.Mes,
            Semana: this.props.Semana
        }
        this.handleChange=this.handleChange.bind(this)
        this.getRadioValue=this.getRadioValue.bind(this)
        this.getSelectValue=this.getSelectValue.bind(this)
    }

    getRadioValue(value) {
        console.log(value)
        this.setState({ size: value })
    }

    getSelectValue(name, value) {
        console.log(name, value)
        this.setState({
            [name]: value
        })
    }

    handleChange() {

    }
    render() {
        return (
            <div className='Filter'>
                <RadioButton checkedChild={0} radioValue={this.getRadioValue} id='size'
                    data={[{ name: 'Mensual', value: 'Mensual' }, { name: 'Semanal', value: 'Semanal' }]} />

                <SelectRow text='Año' id='yearSelect' selectValue={this.getSelectValue} value={this.state.Año} options={[
                    { value: '2022', text: '2022' },
                    { value: '2021', text: '2021' }
                ]} />

                <SelectRow text='Mes' id='monthSelect' value={this.state.Mes} selectValue={this.getSelectValue} options='fillMonths' />

                {this.state.size==='Semanal'&&
                    <SelectRow text='Semana' id='weekSelect' value={this.state.Semana} selectValue={this.getSelectValue} options={[
                        { value: '28', text: '28' },
                        { value: '29', text: '29' },
                        { value: '30', text: '30' },
                        { value: '31', text: '31' },
                    ]} />
                }
                <ReactSelect />
                <RadioButton checkedChild={0} radioValue={this.getRadioValue} id='type'
                    data={[
                        { name: 'Preventivo', value: 'Preventivo' },
                        { name: 'Correctivo', value: 'Correctivo' },
                        { name: 'Ambos', value: 'Ambos' }]} />
            </div>
        )
    }
}

export default Filter