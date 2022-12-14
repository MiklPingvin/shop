const SET_BUY_MODAL = 'SET_BUY_MODAL'
const SET_CARDS = 'SET_CARDS'

const initialState = {
    cards: [
        {
            "name": "orange Juice",
            "category": "Drinks",
            "price": 14.99
        },
        {
            "name": "Apples",
            "category": "fruits",
            "price": 4.99
        },
        {
            "name": "Tomatos",
            "category": "vegetables",
            "price": 6.39
        },
        {
            "name": "Coffee",
            "category": "Drinks",
            "price": 3.15
        },
        {
            "name": "Sweet Paper",
            "category": "Vegetables",
            "price": 12.15
        },
        {
            "name": "Grapes",
            "category": "FRUITS",
            "price": 20.49
        },
        {
            "name": "Pears",
            "category": "Fruits",
            "price": 1.35
        },
        {
            "name": "Team",
            "category": "Drinks",
            "price": 2.4
        }
    ],
    modal: {
        on: false,
        card: {
            "name": "Team",
            "category": "Drinks",
            "price": 0.4
        }
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BUY_MODAL:
            return {
                ...state,
                modal: {
                    ...state.modal,
                    on: action.status,
                    card: action.card
                }

            }
        case SET_CARDS:
            return {
                ...state,
                cards: action.cards
            }
        default:
            return {...state}
    }
}

export const setBuyModal = (status, card = {}) => ({
    type: SET_BUY_MODAL,
    status: status,
    card: card
})

export const setCards = (cards) => ({
    type: SET_CARDS,
    cards: cards
})


export default reducer