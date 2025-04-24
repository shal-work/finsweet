const INITIAL_LOADING_CHOOSE = 'INITIAL-LOADING-CHOOSE';
const ACTIV_CHOOSE = 'ACTIV-CHOOSE';



let initialState = {
    items: [
        {
            id: 1,
            picture: 'business',
            subtitle: 'Why we started',
            title: 'It started out as a simple idea and evolved into our passion',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            href: '#1',
            active: true
        },
        {
            id: 2,
            picture: 'startup',
            subtitle: '2 Why we started',
            title: '2 It started out as a simple idea and evolved into our passion',
            text: '2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            href: '#2',
            active: true
        },
        {
            id: 3,
            picture: 'economy',
            subtitle: '3 Why we started',
            title: '3 It started out as a simple idea and evolved into our passion',
            text: '3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            href: '#3',
            active: true
        },
        {
            id: 4,
            picture: 'technology',
            subtitle: '4 Why we started',
            title: '4 It started out as a simple idea and evolved into our passion',
            text: '4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
            href: '#4',
            active: true
        },
        
    ],
    currentNumber: 0,
}


const choseReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_CHOOSE: 
            return state;
        case ACTIV_CHOOSE: 
            if(action.currentNumber > 0 && action.currentNumber <= state.items.length) {
                state.items = state.items.map(u => {
                    if (u.active !== false) {
                        return {...u, active: false}
                    }
                    return u;
                });
                const numArr2 = state.items.findIndex(e => e.id == action.currentNumber);
                state.items[numArr2].active = true;
                state.currentNumber = numArr2 + 1;
            }
            return state;
        default:
            return state;
    } 
}

export const initialLoadingChooseCreator = () => ({ type: INITIAL_LOADING_CHOOSE});
export const activChooseCreator = (currentNumber) => ({ type: ACTIV_POST, currentNumber: currentNumber});

export default choseReducer;
