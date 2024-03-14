import * as React from 'react';
import Button from '@mui/material/Button';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { FrequencyType } from '../../enums/FrequencyType.tsx';

type FrequencyToggleButtonProps = {
  frequency:FrequencyType,
  setFrequency:(frequency: FrequencyType) => void,
}

const FrequencyToggleButton = (props:FrequencyToggleButtonProps) => {
    const handleChange = (event, value) => {
        props.setFrequency(value);
    };
  
  return (
    <ToggleButtonGroup
        color="primary"
        value={props.frequency}
        exclusive
        onChange={handleChange}
        aria-label="Platform">
        <ToggleButton value={FrequencyType.Daily}>Daily</ToggleButton>
        <ToggleButton value={FrequencyType.Weekly}>Weekly</ToggleButton>
        <ToggleButton value={FrequencyType.Monthly}>Monthly</ToggleButton>
        <ToggleButton value={FrequencyType.Unscheduled}>{FrequencyType.Unscheduled.toString()}</ToggleButton>
    </ToggleButtonGroup>
  )
}

export default FrequencyToggleButton;

