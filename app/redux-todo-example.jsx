var redux = require('redux');

console.log('Start todo redux example');



var nextTodoId = 1;
var todoReducer = (state = '', action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return action.searchText;
      break;
      case 'CHANGE_SHOW_COMPLETED':
        return action.searchText;
        break;
    default:
      return state;
  };
};

var reducer = redux.combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
));

store.subscribe(()=>{
  var state = store.getState();
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch ({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cat'
});
store.dispatch ({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Gog'
});
store.dispatch ({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Cow'
});
