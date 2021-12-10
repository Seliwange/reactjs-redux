import { ADD_POST} from "./actions";
import POSTS_DATA from '../components/Posts/Data';

const initialState = {
    posts: POSTS_DATA,
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            const newPost = action.payload;
            const posts = [newPost, ...state.posts];
            return {
                ...state,
                posts,
            }
        default:
            return state;
    }
};