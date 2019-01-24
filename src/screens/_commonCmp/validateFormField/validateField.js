const validateService = (values, props, config) => {
    let error={};
    Object.keys(config).forEach(validateType => {
        switch (validateType) {
            case 'required':
                error = isRequired(values, config.required);
        }
    });
    return error;
}

const isRequired = (values, field) => {
    const errorResponse={};
    const listFields = field;

    listFields.forEach(fieldItem => {
        if(values[fieldItem] == undefined) {
            return;
        }
        if(values[fieldItem].length < 3 ) {
            errorResponse[fieldItem] = 'Min 3 characters';
        }
    })
    return errorResponse;
}

export default validateService
