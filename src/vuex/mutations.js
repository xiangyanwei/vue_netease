import {
  RECEIVE_MAIN_MSG,
  RECEIVE_MATTER_MSG,
  RECEIVE_CATEGORY_MSG
} from './mutation-types'
export default {
  [RECEIVE_MAIN_MSG](state, {mainMsg}){
    state.mainMsg = mainMsg ;
  },
  [RECEIVE_MATTER_MSG](state, {matterMsg}){
    state.matterMsg = matterMsg ;
  },
  [RECEIVE_CATEGORY_MSG](state, {categoryMsg}){
    state.categoryMsg = categoryMsg ;
  }
}
