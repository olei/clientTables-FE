import types from '../../types'
import { createReducer } from '../../util'
import InitState from './listInitState'
/**
 * Created by olei on 2017/12/29.
 */
const type = types as any

export default createReducer(new InitState, {
  [`${type.GET_LIST_ITEMS}_SUCCESS`]: (state: any, data: any) => {
    return state.set('data', data)
  },
  [`${type.GET_SEARCH_LIST_ITEMS}_SUCCESS`]: (state: any, data: any) => {
    return state.set('data', data)
  }
})