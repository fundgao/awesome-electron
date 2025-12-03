/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type {
  AppCommissionWithdrawalData,
  AppGetCommissionData,
  AppGetCommissionListData,
  AppGetCommissionListParams,
  AppGetInviteCodeData,
  AppGetInviteListData,
  AppGetInviteListParams,
  ClientCommissionWithdrawalInput,
  RegisterAppDto,
  AppRegisterData,
  UserSendCodeInput,
  AppSendCodeData,
} from './data-contracts'
import { ContentType, type HttpClient, type RequestParams } from './http-client'

export class App<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http
  }

  /**
   * No description
   *
   * @tags Invite
   * @name AppGetInviteCode
   * @summary 获取邀请码信息
   * @request GET:/app/core/invite/code
   */
  appGetInviteCode = (params: RequestParams & { h5Token?: string } = {}) =>
    this.http.request<AppGetInviteCodeData, any>({
      path: `/app/core/invite/code`,
      method: 'GET',
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags Invite
   * @name AppGetInviteList
   * @summary 获取邀请码用户的列表信息
   * @request GET:/app/core/invite/list
   */
  appGetInviteList = (
    query: AppGetInviteListParams,
    params: RequestParams & { h5Token?: string } = {},
  ) =>
    this.http.request<AppGetInviteListData, any>({
      path: `/app/core/invite/list`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags Invite
   * @name AppGetCommissionList
   * @summary 获取当前用户的佣金列表信息
   * @request GET:/app/core/invite/commission/list
   */
  appGetCommissionList = (
    query: AppGetCommissionListParams,
    params: RequestParams & { h5Token?: string } = {},
  ) =>
    this.http.request<AppGetCommissionListData, any>({
      path: `/app/core/invite/commission/list`,
      method: 'GET',
      query: query,
      ...params,
    })
  /**
   * No description
   *
   * @tags Invite
   * @name AppGetCommission
   * @summary 获取当前用户奖励统计信息
   * @request GET:/app/core/invite/commission/analytics
   */
  appGetCommission = (params: RequestParams & { h5Token?: string } = {}) =>
    this.http.request<AppGetCommissionData, any>({
      path: `/app/core/invite/commission/analytics`,
      method: 'GET',
      ...params,
    })
  /**
   * No description
   *
   * @tags Invite
   * @name AppCommissionWithdrawal
   * @summary 奖励提现
   * @request POST:/app/core/invite/commission/withdrawal
   */
  appCommissionWithdrawal = (
    data: ClientCommissionWithdrawalInput,
    params: RequestParams & { h5Token?: string } = {},
  ) =>
    this.http.request<AppCommissionWithdrawalData, any>({
      path: `/app/core/invite/commission/withdrawal`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })

  /**
   * No description
   *
   * @tags 用户
   * @name AppRegister
   * @summary 用户注册
   * @request POST:/app/core/user/register
   */
  appRegister = (data: RegisterAppDto, params: RequestParams = {}) =>
    this.http.request<AppRegisterData, any>({
      path: `/app/core/user/register`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
  /**
   * No description
   *
   * @tags 用户
   * @name AppSendCode
   * @summary 获取用户手机/邮箱验证码
   * @request POST:/app/core/user/send-code
   * @secure
   */
  appSendCode = (data: UserSendCodeInput, params: RequestParams = {}) =>
    this.http.request<AppSendCodeData, any>({
      path: `/app/core/user/send-code`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    })
}
