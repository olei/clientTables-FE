import axios from 'axios'
import types from '../../types'
import { Ihome } from '../../../interface'
/**
 * Created by olei on 2017/12/30.
 */
const type = types as any

export const getListData = (limit: number, offset: number) => ({
  type: type.GET_LIST_ITEMS,
  payload: {
    promise: axios.get(`http://10.30.30.16:8088/clientList?limit=${limit}&offset=${offset}`)
  }
})