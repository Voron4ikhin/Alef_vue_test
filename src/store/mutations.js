export function addInputChild(state){
    state.childrenInputs += 1;
}

export function deleteInputChild(state, childId){
    state.childrenInputs -= 1;
    let newBuffer = []
    if(state.userChildrenBuffer[childId]){
        state.userChildrenBuffer.forEach((item, key) => {
            if(key !== childId){
                newBuffer.push(item)
            }
        })
    }
    state.userChildrenBuffer = newBuffer
}

export function saveUser(state, userData){
    state.userData = userData
}

export function saveChildren(state, childrenData){
    state.userChildren = childrenData
}

export function addChildrenBuffer(state, child){
    state.userChildrenBuffer.push(child)
}