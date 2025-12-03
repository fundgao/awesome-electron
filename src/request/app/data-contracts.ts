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

export interface ApiSuccessResponse {
  /** Response code */
  code: number;
  /** Message */
  message: string;
  /** Current time timestamp */
  timestamp: number;
  /** Data */
  data: object;
}

export type Boolean = object;

export interface RegisterAppDto {
  /** 邮箱注册参数 */
  email: string;
  /**
   * 注册密码(md5)
   * @minLength 32
   * @maxLength 32
   */
  password: string;
  /**
   * 邮箱验证码
   * @minLength 6
   * @maxLength 6
   */
  verCode: string;
  /** 邀请码 */
  inviteCode?: string;
}

export interface BindOtpInfoOutput {
  /** 是否启用Otp */
  isEnable: boolean;
  /** otp 信息uri */
  uri: string;
  /** otp 密钥 */
  secret: string;
}

export interface AuthOutput {
  /** Jwt token */
  accessToken: string | null;
  /** Jwt refresh token */
  refreshToken?: string | null;
  /** refresh token ttl */
  expires_in?: number | null;
  /** refresh token ttl */
  refresh_expires_in?: number | null;
  /**
   * 是否绑定了OTP验证
   * @default false
   */
  boundOtp: boolean;
  /** OTP验证临时token */
  otpToken: string | null;
  /** OPT信息 */
  otpInfo?: BindOtpInfoOutput | null;
}

/** 登陆方式 */
export enum AccountLoginMethodEnum {
  Phone = 'phone',
  Email = 'email',
  OtpAuth = 'otp_auth',
  EmailCode = 'email_code',
  PhoneCode = 'phone_code',
}

export interface LoginAppDto {
  /** 邮箱注册参数 */
  email: string;
  /**
   * 注册密码(md5)
   * @minLength 32
   * @maxLength 32
   */
  password: string;
  /** 登陆方式 */
  loginMethod: AccountLoginMethodEnum;
  /** otp登陆的token */
  optToken?: string;
  /** 验证码，目前是opt码 */
  code: string;
  /** 免验证登录 */
  laissezPasser: boolean;
}

export interface AppForgetPsdDto {
  /**
   * 邮箱
   * @minLength 3
   * @maxLength 50
   */
  account: string;
  /** 验证码 */
  verCode: string;
  /**
   * 修改的密码(md5)
   * @minLength 32
   * @maxLength 32
   */
  password: string;
}

export interface TokenOuput {
  /** access token */
  accessToken: string;
  /** refresh token */
  refreshToken: string;
  /** refresh token ttl */
  expires_in?: number | null;
  /** refresh token ttl */
  refresh_expires_in?: number | null;
}

/** 验证码方式 */
export enum CodeVerificationMethodEnum {
  Phone = 'phone',
  Email = 'email',
  OtpAuth = 'otp_auth',
}

export interface RefreshTokenInput {
  /** GA/短信/手机验证码 */
  verCode: string;
  /** 验证码方式 */
  codeType: CodeVerificationMethodEnum;
  /** refresh token */
  refreshToken: string;
}

export interface RefreshTokenBiometricInput {
  /** refresh token of biometric */
  refreshTokenBiometric: string;
}

export interface RefreshTokenBiometricOuput {
  /** refresh token */
  refreshTokenBiometric: string;
  /** refresh token ttl */
  refresh_expires_in_biometric?: number | null;
}

/** 账户类型 */
export enum AccountTypeEnum {
  Enterprise = 'enterprise',
  SelfEmployed = 'self_employed',
  Person = 'person',
}

/** aml状态 */
export enum AmlStatusEnum {
  Na = 'na',
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
}

/** vaKyb状态 */
export enum KyStatusEnum {
  Na = 'na',
  Completed = 'completed',
  Pending = 'pending',
  Canceled = 'canceled',
  Request = 'request',
}

export interface BaseUserOutput {
  /** 用户ID */
  id: string;
  /** 用户昵称 */
  nickname: string;
  /** 注册邮箱 */
  email: string;
  /** 注册手机号 */
  phone: string;
  /** 手机号前缀 */
  areaCode: string;
}

/** 客户状态 */
export enum AccountStatusEnum {
  Active = 'active',
  Ban = 'ban',
  Deleted = 'deleted',
  Read = 'read',
  Clearance = 'clearance',
}

export interface AccountOutput {
  /** 账户ID */
  id: string;
  /** 账户类型 */
  type: AccountTypeEnum;
  /** aml状态 */
  amlStatus: AmlStatusEnum;
  /** vaKyb状态 */
  kycStatus: KyStatusEnum;
  /** vaKyb状态 */
  cardKybStatus: KyStatusEnum;
  /** vaKyb状态 */
  cwKybStatus: KyStatusEnum;
  /** vaKyb状态 */
  vaKybStatus: KyStatusEnum;
  /** 账户识别ID */
  identifierId: string;
  /** 实体名称 */
  legalName: string;
  /** 实体名称(英文) */
  legalNameEn: string;
  /**
   * 注册时间
   * @format date-time
   */
  createdAt: string;
  /** 账户主用户 */
  user: BaseUserOutput;
  /** 销售名称 */
  saleName: string;
  /** 客户状态 */
  status: AccountStatusEnum;
  /** 白标ID */
  whiteLabelId: string;
}

export interface UserOutput {
  /** 用户ID */
  id: string;
  /** 用户昵称 */
  nickname: string;
  /** 注册邮箱 */
  email: string;
  /** 注册手机号 */
  phone: string;
  /** 手机号前缀 */
  areaCode: string;
  /** 账户信息 */
  account: AccountOutput | null;
  /**
   * 创建时间
   * @format date-time
   */
  created_at: string | null;
  /** 部门ID */
  department_id: string | null;
  /** 部门名称 */
  department_name: string | null;
}

export interface BindOtpDto {
  /** 验证码，目前是opt码 */
  code: string;
}

/** 验证码用途 */
export enum CodeTypeEnum {
  Register = 'register',
  Login = 'login',
  RefreshToken = 'refreshToken',
  Forget = 'forget',
  UpdatePsd = 'update_psd',
  UpdateEmail = 'update_email',
  Payout = 'payout',
  CryptoWithdrawal = 'crypto_withdrawal',
  AppCreateCard = 'app_create_card',
  AppViewCard = 'app_view_card',
}

export interface UserSendCodeInput {
  /**
   * email or phone
   * @default "email"
   */
  type: string;
  /** 验证码用途 */
  codeType: CodeTypeEnum;
}

export interface FCMTokenInput {
  /** fcm token of firebase */
  token: string;
}

/**
 * 用户使用的语言
 * @default "en"
 */
export enum LangEnum {
  En = 'en',
  Zh = 'zh',
}

export interface MetadataInput {
  /** 用户使用的语言 */
  lang: LangEnum;
}

export interface InviteCodeOutput {
  /** 邀请码 */
  code: string;
  /** 活动描述 */
  linkUrl: string;
}

export enum CommissionOrderEnum {
  DESC = 'DESC',
  ASC = 'ASC',
}

/** 交易类型 */
export enum TransactionTypeEnum {
  Account2Card = 'account_2_card',
  Card2Account = 'card_2_account',
  Account2Budget = 'account_2_budget',
  BudgetTransferInAccount = 'budget_transfer_in_account',
  CreateCardFee = 'create_card_fee',
  CardDebit = 'card_debit',
  CardAuthFee = 'card_auth_fee',
  CardRefund = 'card_refund',
  CardReversal = 'card_reversal',
  CardSettlementDebit = 'card_settlement_debit',
  CardSettlementRefund = 'card_settlement_refund',
  AccountTransferIn = 'account_transfer_in',
  AccountTransferOut = 'account_transfer_out',
  AccountRecharge = 'account_recharge',
  AccountRechargeRebate = 'account_recharge_rebate',
  Rebate2Account = 'rebate_2_account',
  InternalTransfer = 'internal_transfer',
  CryptoDeposit = 'crypto_deposit',
  CryptoWithdrawal = 'crypto_withdrawal',
  CryptoExchange = 'crypto_exchange',
  VaDeposit = 'va_deposit',
  VaPayout = 'va_payout',
  CwPayout = 'cw_payout',
  CommissionWithdrawal = 'commission_withdrawal',
  Va2Ca = 'va_2_ca',
  Ca2Va = 'ca_2_va',
  Cw2Va = 'cw_2_va',
  Va2Cw = 'va_2_cw',
  Cw2Ca = 'cw_2_ca',
  Ca2Cw = 'ca_2_cw',
  Va2VaOut = 'va_2_va_out',
  Va2VaIn = 'va_2_va_in',
  Cw2Budget = 'cw_2_budget',
  Budget2Cw = 'budget_2_cw',
  Com2Cw = 'com_2_cw',
  Com2Budget = 'com_2_budget',
}

export interface ClientCommissionWithdrawalInput {
  /** 交易类型 */
  type: TransactionTypeEnum;
  /**
   * 钱包ID
   * @example "1234567890"
   */
  cryptoWalletId: string;
}

export interface AppRegisterData {
  data?: Boolean;
}

export interface AppLoginData {
  data?: AuthOutput;
}

export interface AppForgetPasswordData {
  data?: Boolean;
}

export interface AppRefreshAllTokenData {
  data?: TokenOuput;
}

export interface AppRefreshAllTokenBiometricData {
  data?: TokenOuput;
}

export interface AppCreateNewTokenData {
  data?: TokenOuput;
}

export interface AppCreateRefreshTokenBiometricData {
  data?: RefreshTokenBiometricOuput;
}

export interface AppInfoData {
  data?: UserOutput;
}

export interface AppBindOtpData {
  data?: Boolean;
}

export interface AppGetOtpInfoData {
  data?: BindOtpInfoOutput;
}

export interface AppSendCodeData {
  data?: Boolean;
}

export interface AppUpdateFcmTokenData {
  data?: Boolean;
}

export interface AppUpdateMetaData {
  data?: Boolean;
}

export interface AppGetInviteCodeData {
  data?: InviteCodeOutput;
}

export interface AppGetInviteListParams {
  /** @default 1 */
  page?: number;
  /** @default 10 */
  take?: number;
  /** 排序方向 */
  order?: CommissionOrderEnum;
}

export type AppGetInviteListData = any;

export interface AppGetCommissionListParams {
  /** @default 1 */
  page?: number;
  /** @default 10 */
  take?: number;
  /** 排序方向 */
  order?: CommissionOrderEnum;
}

export type AppGetCommissionListData = any;

export type AppGetCommissionData = any;

export interface AppCommissionWithdrawalData {
  data?: Boolean;
}
