export default {
  getNavBar(state){
    if(state.mainMsg){
      return state.mainMsg.headCateList
    }
  },
  getCarousel(state){
    if(state.mainMsg){
      return state.mainMsg.cateList
    }
  },
  getTopicList(state){
    if(state.mainMsg){
      return state.mainMsg.topicList
    }
  },
  getPolicyDescList(state){
    if(state.mainMsg){
      return state.mainMsg.policyDescList
    }
  },
  getPopularItemNewUserList(state){
    if(state.mainMsg){
      return state.mainMsg.popularItemNewUserList
    }
  },
  getPopularItemList(state){
    if(state.mainMsg){
      return state.mainMsg.popularItemList
    }
  },


}
