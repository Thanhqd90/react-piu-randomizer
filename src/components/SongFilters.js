import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import CheckboxGroup from './Checkbox';
import Checkbox2 from './Checkbox2';
const songOptions = [
    { key: 'XX', value: 'XX', text: 'XX' },
    { key: 'P2', value: 'P2', text: 'Prime 2' }
]

const numberOfResults = [
    { key: 'XX', value: 'XX', text: 'XX' },
    { key: 'P2', value: 'P2', text: 'Prime 2' }
]

const DropdownExampleSearchSelectionTwo = () => (
    <div>
        <span>Game Version < Dropdown placeholder='Version' search selection options={songOptions} /></span>
        <span>Singles Charts < Dropdown placeholder='Number' search selection options={numberOfResults} /></span>
        <span>Doubles Charts < Dropdown placeholder='Number' search selection options={numberOfResults} /></span>
        <span>Min Difficulty < Dropdown placeholder='Difficulty' search selection options={numberOfResults} /></span>
        <span>Max Difficulty < Dropdown placeholder='Difficulty' search selection options={numberOfResults} /></span>
        <span>Min Difficulty < Dropdown placeholder='Difficulty' search selection options={numberOfResults} /></span>
        <span>Max Difficulty < Dropdown placeholder='Difficulty' search selection options={numberOfResults} /></span>
        <CheckboxGroup />
        <Checkbox2 />
    </div>
)

export default DropdownExampleSearchSelectionTwo