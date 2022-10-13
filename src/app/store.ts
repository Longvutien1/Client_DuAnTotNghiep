import { ThunkMiddleware } from 'redux-thunk';
import { configureStore, ThunkAction, Action, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  persistReducer,
   persistStore
 
 } from "redux-persist";
 import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";
import authSlide from '../features/Slide/auth/authSlide';
import CategorySlide from '../features/Slide/category/CategorySlide';
import CountSlide from '../features/Slide/count/CountSlide';
import ProductSlide from '../features/Slide/product/ProductSlide';
import QuizSlide from '../features/Slide/quiz/QuizSlide';
import History from '../features/Slide/history/History';
import UserQuiz from '../features/Slide/userQuiz/UserQuiz';
import ListenWrite from '../features/Slide/listenWrite/ListenWriteSlice';
import ContactSlide from '../features/Slide/contact/ContactSlide';
import UserListenWriteSlice from '../features/Slide/userListenWrite/UserListenWriteSlice';
import CommentSlice from '../features/Slide/comment/CommentSlice';
import TimeLimitCountdownSlice from '../features/Slide/timeLimitCountdown/timeLimitCountdown';
import GrammarSlice from '../features/Slide/grammar/Grammar'

const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    // "user" // những state ko muốn lưu ở trên local thì cho vào đây, tên theo tên của slide
  ],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer:{
    count: CountSlide,
    product: ProductSlide,
    category: CategorySlide,
    quiz: QuizSlide,
    userQuiz: UserQuiz,
    history: History,
    listenWrite: ListenWrite,
    contact: ContactSlide,
    grammar : GrammarSlice,
    comment: CommentSlice,
    userListenWrite: UserListenWriteSlice,
    answerQuiz: AnswerQuizSlide,
    user: authSlide,
    time: TimeLimitCountdownSlice
    // product
    // cart
    // user
  }
  reducer: persistedReducer,
});
export default persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
