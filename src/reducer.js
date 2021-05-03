const INITIAL_STATE = {
    age: 25,
    dogimg: 'https://images.dog.ceo/breeds/shihtzu/n02086240_968.jpg'
};

const reducer = (state = INITIAL_STATE, action) => {
    const newstate = {...state};
    
    switch(action.type) {
        case 'AGE_UP_ASYNC':
            newstate.age = newstate.age + action.value;
            break;
        case 'AGE_DOWN_ASYNC':
            newstate.age = newstate.age - action.value;
            break;
        case 'CHANGE_DOGIMG_ASYNC':
            newstate.dogimg = action.value;
            break;
        default:
            return newstate;
        
    }
    return newstate;
}

export default reducer;


