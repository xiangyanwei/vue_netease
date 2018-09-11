import {
  RECEIVE_MAIN_MSG,
  RECEIVE_MATTER_MSG,
  RECEIVE_CATEGORY_MSG
} from './mutation-types' ;
import {
  reqMainMsg,
  reqMatterMsg,
  reqCategoryMsg
} from '../api';

export default {
  async getMainMsg({commit}, cb){
    const result = await reqMainMsg() ;
    if(result.code === 0 ){
      const mainMsg = result.home
      commit(RECEIVE_MAIN_MSG, {mainMsg})
      cb && cb() ;
    }
  },
  async getMatterMsg({commit}){
    const result = await reqMatterMsg() ;
    if(result.code === 0){
      const matterMsg = result.detail;
      commit(RECEIVE_MATTER_MSG, {matterMsg});

    }
  },
  async getCategoryMsg({commit}){
    const result = await reqCategoryMsg() ;
    if(result.code === 0){
      const categoryMsg = result.nav;
      commit(RECEIVE_CATEGORY_MSG, {categoryMsg});

    }
  }
}
