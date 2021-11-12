import { GLOBALTYPES } from '../actions/globalTypes'

const feedReducer = (state = false, action) => {
   switch (action.type){
       case GLOBALTYPES.FEED:
           return action.payload;
        default:
           return state;
   }
} 

export default feedReducer