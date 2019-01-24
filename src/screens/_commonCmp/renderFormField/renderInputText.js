import React from "react";

import { Item, Input, Text, Label } from 'native-base';
import fieldStye from './renderFieldStyle';

const RenderInput = ({
    input: { onChange, ...restInput }, 
    label, 
    type,
    style,
    placeholder,
    meta: { touched, error, warning }}) => {
    var hasError= false;
    if(error !== undefined){
      hasError= true;
    }

    return( 
      <Item error= {hasError} style={[fieldStye.fieldItem, style]}>
        <Label style={fieldStye.fieldLabel}>{label}</Label>
        <Input
            {...restInput}
            onChangeText={onChange}
            placeholder={placeholder}
            style={[fieldStye.fieldInput , hasError ? fieldStye.fieldInputError : fieldStye.fieldInputNormal ]}/>
        {hasError ? <Text style={fieldStye.errorText}>{error}</Text> : <Text />}
      </Item>
    )
}

export default RenderInput