export const stringToCharArrayConverter = value => Array.from(value);

export const filterCards = (array, index, arg) => array.filter(obj => !(obj.index === index && obj.value === arg));

export const parseInputValue = inputObj => {
    let inputVal = '';
    inputObj.forEach(element => {
        inputVal += element.value
    });
    return inputVal;
}

export const parseCardsValue = inputObj => {
    const parsedValue = parseInputValue(inputObj);
    return stringToCharArrayConverter(parsedValue);
}

export const convertStringToObj = input => {
    const array = stringToCharArrayConverter(input);
    const parsedValue = array.map((value, index) => ({ index: index, value: value }))
    return parsedValue;
}