const INITIAL_LOADING_POST = 'INITIAL-LOADING-POST';
const UPDATE_CURRENT_POST = 'UPDATE-CURRENT-POST';
const ACTIV_POST = 'ACTIV-POST';



let initialState = {
    items: [
        {
            id:1,
            picture: 'featured_post',
            name: 'John Doe',
            date: 'May 23, 2022',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            href: '#',
            active: true
        },
        {
            id:2,
            picture: 'featured_post_1',
            name: 'Andrew Jonson',
            date: 'Apr 20, 2022',
            title: '2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: '#',
            active: false
        },
        {
            id:3,
            picture: 'featured_post',
            name: 'John Doe2',
            date: 'Jun 20, 2022',
            title: '3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: '3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: '#',
            active: false
        },
        {
            id:4,
            picture: 'featured_post',
            name: 'John Doe3',
            date: 'Jul 20, 2022',
            title: '4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: '4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: '#',
            active: true
        },
        {
            id:5,
            picture: 'featured_post',
            name: 'Andrew Jonson4',
            date: 'Jul 20, 2022',
            title: '5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: '5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: '#',
            active: false
        },
        {
            id:6,
            picture: 'featured_post_1',
            name: 'John Doe6',
            date: 'Jul 20, 2022',
            title: '6-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            text: '6-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: '#',
            active: false
        },
    ],
    currentNumber: 0,
}


const featuredPostsReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_POST: 
            return state;
        case ACTIV_POST: 
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

export const initialLoadingPostCreator = () => ({ type: INITIAL_LOADING_POST});
export const activPostCreator = (currentNumber) => ({ type: ACTIV_POST, currentNumber: currentNumber});

export default featuredPostsReducer;
