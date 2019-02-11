import React from 'react'
import { Checkbox } from 'semantic-ui-react'

const Checkbox2 = () => (
    <div>
        <Checkbox label='This checkbox comes pre-checked' defaultChecked />
        <Checkbox label='Unlocks' />
        <Checkbox label='Filter' />
        <Checkbox label='Something else' />
    </div>
)

export default Checkbox2