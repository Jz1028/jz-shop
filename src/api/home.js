import {request} from "@/lib/request";

export const getHomeMultidata = () => {
  return request({
    url: '/home/multidata'
  })
}
export const getHomeGoods = (type, page) => {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
