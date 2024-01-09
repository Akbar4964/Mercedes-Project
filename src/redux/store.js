import { combineReducers, createStore } from "redux";
import { storeType } from "../const";

const initialState = {
  count: 0,
  color: "green",
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case storeType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case storeType.DICREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  } 
}

const initialState2 = {
  count2: 0,
  color2: "green",
};

function counterReducer2(state = initialState2, action) {
  switch (action.type) {
    case storeType.INCREMENT:
      return { ...state, count: state.count + 1 };
    case storeType.DICREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}

const comRed = combineReducers({
  counters: counterReducer,
  counters2: counterReducer2,
});

export const store = createStore(comRed);
