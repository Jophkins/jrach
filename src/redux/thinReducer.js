const ADD_PRODUCT = 'ADD-PRODUCT';
// const REMOVE_PRODUCT = 'REMOVE-PRODUCT';

let initialState = {
    products: [
        {productId: 1, name: 'Grecha', calories: 220},
        {productId: 2, name: 'Bread', calories: 500},
        {productId: 3, name: 'Snickers', calories: 670},
        {productId: 4, name: 'EON', calories: 450},
        {productId: 5, name: 'SALO', calories: 990},
    ],
    breakfast: [],
    lunch: [
        {productId: 1, name: 'Grecha', calories: 220}
    ],
    dinner: []
}

const thinReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                lunch: [...state.lunch, {id: 4, name: action.name, calories: action.calories}]
            };
        default:
            return state;
    }
}

export const addProductAC = (name, calories) => ({ type: ADD_PRODUCT, name, calories });
// export const removeProductAC = (name) => ({ type: REMOVE_PRODUCT, name });

export default thinReducer;