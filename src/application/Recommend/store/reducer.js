 // 存放 initialState 和 reducer 函数
 //  初始化 state

 import * as actionTypes from './constants';
 import {
     fromJS
 } from 'immutable'; // 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构

 const defaultState = fromJS({
     bannerList: [],
     recommendList: [],
 });