const INITIAL_USERS = 'INITIAL-USERS';

let initialState = {
    items: [
        {
            id: 1,
            name: 'Floyd Miles',
            photo: 'floyd_miles',
            nick: '@Company',
            country: 'USA',
            city: 'New york',
            message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo necessitatibus odit error repellat libero nobis consectetur corrupti dolore tempora eveniet ab delectus illum, optio tenetur repudiandae deleniti quidem modi.'
        },
        {
            id: 2,
            name: 'Dianne Russell',
            photo: 'dianne_russell',
            nick: '@Company2',
            country: 'USA',
            city: 'New york',
            message: '2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo necessitatibus odit error repellat libero nobis consectetur corrupti dolore tempora eveniet ab delectus illum, optio tenetur repudiandae deleniti quidem modi.'
        },
        {
            id: 3,
            name: 'Jenny Wilson',
            photo: 'jenny_wilson',
            nick: '@Company3',
            country: 'USA',
            city: 'New york',
            message: '3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo nemo necessitatibus odit error repellat libero nobis consectetur corrupti dolore tempora eveniet ab delectus illum, optio tenetur repudiandae deleniti quidem modi.Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        },
        {
            id: 4,
            name: 'Leslie Alexander',
            photo: 'leslie_alexander',
            nick: '@Company4',
            country: 'USA',
            city: 'New york',
            message: '4 Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
        }
    ],
    amountUsers: 0,
}


const usersReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_USERS: 
            state.amountUsers = Object.keys(state.items).length;
            return state;
        default:
            return state;
    } 
}

export const initialLoadingUsers = () => ({ type: INITIAL_USERS});

export default usersReducer;
