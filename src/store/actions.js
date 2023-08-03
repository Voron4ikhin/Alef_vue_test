export function addInputChild({commit}){
    commit('addInputChild')
}

export function deleteInputChild({commit}, childId){
    commit('deleteInputChild', childId)
}

export function saveUser({commit} , userData){
    commit('saveUser', userData)
}

export function saveChildren({commit} , childrenData){
    commit('saveChildren', childrenData)
}

export function addChildrenBuffer({commit}, child){
    commit('addChildrenBuffer', child)
}