import CONSTANTS from '../config/constants';

export const getSlotTypeName =  type => CONSTANTS.SLOT_TYPES[type.toString()];
export const getSlotTypes =  () => CONSTANTS.SLOT_TYPES;
export const getFormRules = () => {
    
    const rules = [];

    rules.push({
        name: 'name',
        required: true,
        regex: /[\w\W]{2,200}/,
        message: 'Please enter a valid name',
        type: 'string'
    });

    rules.push({
        name:'format',
        required: true,
        regex: /^[1-9][0-9]{0,3}x[1-9][0-9]{0,3}$/,
        message: 'Please enter a valid format e.g 200x300',
        type: 'string'
    });

    rules.push({
        name: 'price',
        required: true,
        regex: /^[1-9][0-9]{0,5}$/,
        message: 'Please enter price',
        type: 'number'
    });

    rules.push({
        name: 'type',
        required: true,
        regex: false,
        message: 'Please select type',
        type: 'number'
    })

    rules.push({
        name: 'url',
        required: true,
        regex: /((https?:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/,
        message: 'Please enter a valid URL',
        type: 'string'
    });

    rules.push({
        name: 'fallback',
        required: false,
        regex: false,
        message: '',
        type: 'boolean'
    });

    return rules;
};

export const getAPIRequestHeader = (payload, id) => {
    return {
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'content-type': 'application/json;charset=utf-8'
        },
        credentials: 'same-origin',
        cache: 'no-cache',
        mode: 'cors',
        method: id ? 'PATCH' : 'POST'
    };
}