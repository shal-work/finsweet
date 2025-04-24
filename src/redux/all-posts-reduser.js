const INITIAL_LOADING_PAGE_ALLPOST = 'INITIAL-LOADING-PAGE-ALLPOST';


let initialState = {
    items: [
        {
            id:1,
            picture: 'startup1_490',
            subtitle:'Startup',
            title: 'Design tips for designers that cover everything you need',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            href: 'post'
        },
        {
            id:2,
            picture: 'business_490',
            subtitle:'BUSINESS',
            title: 'How to build rapport with your web design clients',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            href: 'business'
        },
        {
            id:3,
            picture: 'startup2_490',
            subtitle:'Startup',
            title: 'Logo design trends to avoid in 2022',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. ',
            href: 'post'
        },
        {
            id:4,
            picture: 'startup1_490',
            subtitle:'TECHNOLOGY',
            title: '8 Figma design systems you can download for free today',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            href: 'post'
        },
        {
            id:5,
            picture: 'technology_490',
            subtitle:'ECONOMY',
            title: 'Font sizes in UI design: The complete guide to follow',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            href: 'business'
        },
        {
            id:6,
            picture: 'business_490',
            subtitle:'Startup',
            title: 'Font sizes in UI design: The complete guide to follow',
            text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
            href: 'business'
        },
    ]
}


const pageAllPostsReducer = (action, state = initialState) => {
    switch (action.type) {
        case INITIAL_LOADING_PAGE_ALLPOST: 
            return state;
        default:
            return state;
    } 
}


export const initialPageAllPostsReducer = () => ({ type: INITIAL_LOADING_PAGE_ALLPOST});


export default pageAllPostsReducer;
