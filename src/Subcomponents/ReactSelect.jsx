import React from 'react';
import './ReactSelect.css'

import Select from 'react-select';
const options=[
    { value: 'IMSS', label: 'IMSS' },
    { value: 'ISSSTE', label: 'ISSSTE' },
    { value: 'Garantia', label: 'Garantia' },
    { value: 'ISAPEG', label: 'ISAPEG' },
]

export default () => (
    <div className='ReactSelect'>
        <label htmlFor="">Cliente</label>
        <Select
            placeholder='Elegir Cliente...'
            isMulti
            name="colors"
            options={options}
        />
    </div>
);