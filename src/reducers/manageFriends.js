export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      let friends = state.friends
      friends.push(action.friend)
      return {friends: friends}
    case 'REMOVE_FRIEND':
      let f = state.friends.filter(fr => fr.id !== action.id)
      return {friends: f}
    default:
      return state
  }
}
