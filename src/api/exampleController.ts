// @ts-ignore
/* eslint-disable */
import request from '@/request'

/** 此处后端没有提供注释 POST /example/hello */
export async function example(options?: { [key: string]: any }) {
  return request<API.BaseResponseString>('/example/hello', {
    method: 'POST',
    ...(options || {}),
  })
}
