import request from '@/utils/request'

// 查询租户列表
export function listTenant(query) {
  return request({
    url: '/system/tenant/list',
    method: 'get',
    params: query
  })
}

// 查询租户详细
export function getTenant(id) {
  return request({
    url: '/system/tenant/' + id,
    method: 'get'
  })
}

// 新增租户
export function addTenant(data) {
  return request({
    url: '/system/tenant',
    method: 'post',
    data: data
  })
}

// 修改租户
export function updateTenant(data) {
  return request({
    url: '/system/tenant',
    method: 'put',
    data: data
  })
}

// 删除租户
export function delTenant(id) {
  return request({
    url: '/system/tenant/' + id,
    method: 'delete'
  })
}
