import featuredPostsReducer from './featured-posts-reduser';
import choseReducer from './choose-reduser'
import usersReducer from './users-reduser'
import pageAllPostsReducer from './all-posts-reduser'
import {initialLoadingPostCreator} from './featured-posts-reduser'
import {initialLoadingChooseCreator} from './choose-reduser'
import {initialLoadingUsers} from './users-reduser'
import {initialPageAllPostsReducer} from './all-posts-reduser'

let store = {
    state: {
        featuredPosts: {},
        choose: {},
        users: {},
        pageAllPost: {}
    },
    getState() {
        let featuredPosts = featuredPostsReducer(initialLoadingPostCreator());
        this.state.featuredPosts = {...featuredPosts};

        let choose = choseReducer(initialLoadingChooseCreator());
        this.state.choose = {...choose};

        let users = usersReducer(initialLoadingUsers());
        this.state.users = {...users};

        let pageAllPost = pageAllPostsReducer(initialPageAllPostsReducer());
        this.state.pageAllPost = {...pageAllPost};

        return this.state;
    },
    dispatch (action) {
        this.state.featuredPosts = featuredPostsReducer(action, this.state.featuredPosts);
    }
};

export default store;
