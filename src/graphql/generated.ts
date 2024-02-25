import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateEnd: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeUtc: { input: any; output: any; }
  Decimal: { input: any; output: any; }
  EMAIL: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Mixed: { input: any; output: any; }
  StringInteger: { input: any; output: any; }
};

/**
 * Аккаунты
 * Banking -> Account -> Account List
 */
export type Account = {
  __typename?: 'Account';
  /** Имя аккаунта */
  account_name: Scalars['String']['output'];
  /** Номер аккаунта */
  account_number?: Maybe<Scalars['String']['output']>;
  /** Состояние аккаунта */
  account_state?: Maybe<AccountState>;
  /** Тип аккаунта */
  account_type?: Maybe<AccountType>;
  activated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить или индивидуала или компании */
  client?: Maybe<Client>;
  /** Все аккаунты клиента */
  client_accounts: Array<ClientAccountsDetails>;
  /** Получить связанный шаблон комиссии */
  commission_template?: Maybe<CommissionTemplate>;
  /** Компания которой принадлежит аккаунт */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить связанный код валюты */
  currency?: Maybe<Currencies>;
  /** Получить групроле */
  group?: Maybe<GroupRole>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** Получить связанного платежного провайдера iban */
  iban_provider?: Maybe<PaymentProviderIban>;
  id: Scalars['ID']['output'];
  /** Основной или нет */
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  last_charge_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** лимит минимального баланса */
  max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  /** Получить менеджера */
  member?: Maybe<Members>;
  /** лимит максимального баланса */
  min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  /** Получить связанного владельца */
  owner?: Maybe<ApplicantIndividual>;
  /** Получить банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Получить связанного платежного провайдера */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанного Пеймент систем */
  payment_system?: Maybe<PaymentSystem>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type AccountClient = {
  __typename?: 'AccountClient';
  client: Client;
  id: Scalars['ID']['output'];
};

export enum AccountClientsType {
  Company = 'COMPANY',
  Individual = 'INDIVIDUAL'
}

export type AccountGenerateIbanResponse = {
  __typename?: 'AccountGenerateIbanResponse';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

/**
 * Аккаунты
 * Banking -> Account -> Account Limit
 */
export type AccountLimit = {
  __typename?: 'AccountLimit';
  /** Получить Account */
  account?: Maybe<Account>;
  /** ID account */
  account_id?: Maybe<Scalars['ID']['output']>;
  /** Сумма лимита */
  amount?: Maybe<Scalars['Decimal']['output']>;
  /** Получить события лимита */
  commission_template_limit_action_type?: Maybe<CommissionTemplateLimitActionType>;
  /** ID события лимита */
  commission_template_limit_action_type_id?: Maybe<Scalars['ID']['output']>;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** ID периода лимита */
  commission_template_limit_period_id?: Maybe<Scalars['ID']['output']>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id?: Maybe<Scalars['ID']['output']>;
  /** Получить типы лимита */
  commission_template_limit_type?: Maybe<CommissionTemplateLimitType>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** ID валюты лимита */
  currency_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']['output']>;
};

/** A paginated list of AccountLimit items. */
export type AccountLimitPaginator = {
  __typename?: 'AccountLimitPaginator';
  /** A list of AccountLimit items. */
  data: Array<AccountLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of Account items. */
export type AccountPaginator = {
  __typename?: 'AccountPaginator';
  /** A list of Account items. */
  data: Array<Account>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * AccountReachedLimit
 * Banking -> Account -> Account Limit
 */
export type AccountReachedLimit = {
  __typename?: 'AccountReachedLimit';
  /** Получить Account */
  account?: Maybe<Account>;
  /** ID account */
  account_id: Scalars['ID']['output'];
  /** Сумма */
  amount: Scalars['Decimal']['output'];
  /** Имя аппликанта */
  client_name: Scalars['String']['output'];
  /** Тип аппликанта */
  client_type: Scalars['String']['output'];
  /** Тип */
  group_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Валюта лимита */
  limit_currency: Scalars['String']['output'];
  /** Тип лимита */
  limit_type: Scalars['String']['output'];
  /** Значение лимита */
  limit_value: Scalars['Int']['output'];
  /** Период */
  period: Scalars['Int']['output'];
  /** Тип трансфера */
  transfer_direction: Scalars['String']['output'];
};

/** A paginated list of AccountReachedLimit items. */
export type AccountReachedLimitPaginator = {
  __typename?: 'AccountReachedLimitPaginator';
  /** A list of AccountReachedLimit items. */
  data: Array<AccountReachedLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type AccountState = {
  __typename?: 'AccountState';
  active: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type AccountStatement = {
  __typename?: 'AccountStatement';
  account_currency?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  closing_balance?: Maybe<Scalars['Float']['output']>;
  closing_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  credit_turnover?: Maybe<Scalars['Float']['output']>;
  date_from: Scalars['DateTimeUtc']['output'];
  debit_turnover?: Maybe<Scalars['Float']['output']>;
  opening_balance?: Maybe<Scalars['Float']['output']>;
  opening_balance_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  transactions?: Maybe<Array<Maybe<AccountStatementTransaction>>>;
};

export type AccountStatementTransaction = {
  __typename?: 'AccountStatementTransaction';
  account_balance?: Maybe<Scalars['Float']['output']>;
  account_client?: Maybe<Scalars['String']['output']>;
  account_number?: Maybe<Scalars['String']['output']>;
  amount: Scalars['Float']['output'];
  created_at: Scalars['DateTimeUtc']['output'];
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  reason?: Maybe<Scalars['String']['output']>;
  sender_recipient?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  transaction_id: Scalars['ID']['output'];
};

export enum AccountType {
  Business = 'Business',
  Private = 'Private'
}

export type ActiveSession = {
  __typename?: 'ActiveSession';
  /** Браузер */
  browser?: Maybe<Scalars['String']['output']>;
  /** Версия браузера */
  browser_version?: Maybe<Scalars['String']['output']>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  /** Название компании */
  company: Scalars['String']['output'];
  /** Страна */
  country?: Maybe<Scalars['String']['output']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc']['output'];
  /** Устройство */
  device_type?: Maybe<Scalars['String']['output']>;
  /** Домен */
  domain: Scalars['String']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** IP */
  ip?: Maybe<Scalars['String']['output']>;
  /** Модель */
  model?: Maybe<Scalars['String']['output']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']['output']>;
  /** Группа */
  provider: Scalars['String']['output'];
  /** доверенный */
  trusted?: Maybe<Scalars['Boolean']['output']>;
};

export type ActiveSessionMutatorResponse = {
  __typename?: 'ActiveSessionMutatorResponse';
  message: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

export type ActiveSessions = {
  __typename?: 'ActiveSessions';
  data?: Maybe<Array<ActiveSession>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  /** Изменения */
  changes?: Maybe<Scalars['String']['output']>;
  /** Название компании */
  company: Scalars['String']['output'];
  /** Дата создания */
  created_at: Scalars['DateTimeUtc']['output'];
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  /** Домен */
  domain: Scalars['String']['output'];
  /** Группа */
  group: Scalars['String']['output'];
  /** ID */
  id: Scalars['String']['output'];
  /** Группа */
  member: Scalars['String']['output'];
};

export type ActivityLogs = {
  __typename?: 'ActivityLogs';
  data?: Maybe<Array<ActivityLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

/** Дополнительные поля */
export type AdditionalFieldInput = {
  field_name?: InputMaybe<Scalars['String']['input']>;
  field_type?: InputMaybe<FieldTypes>;
  field_value?: InputMaybe<Scalars['StringInteger']['input']>;
};

export type ApplicantAccount = {
  __typename?: 'ApplicantAccount';
  /** Имя */
  account_name: Scalars['String']['output'];
  /** Аккаунт/Карта */
  account_number?: Maybe<Scalars['String']['output']>;
  /** Тип аккаунта */
  account_type: Scalars['String']['output'];
  /** Получить связанный код валюты */
  currency?: Maybe<Currencies>;
  /** Баланс */
  current_balance?: Maybe<Scalars['Decimal']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Первичный аккаунт */
  is_primary?: Maybe<Scalars['Boolean']['output']>;
  /** Показать на главной */
  is_show?: Maybe<Scalars['Boolean']['output']>;
};

/** Access for Online Banking */
export type ApplicantBankingAccess = {
  __typename?: 'ApplicantBankingAccess';
  /** Получить связанного applicant company */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Получить связанного applicant individual */
  applicant_individual?: Maybe<ApplicantIndividual>;
  /** Contact administrator */
  contact_administrator: Scalars['Boolean']['output'];
  create_payments?: Maybe<Scalars['Boolean']['output']>;
  /** Ежедневный лимит */
  daily_limit: Scalars['Decimal']['output'];
  /** Доступ */
  grant_access?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  /** Получить связанного Member */
  member?: Maybe<Members>;
  /** Ежемесячный лимит */
  monthly_limit: Scalars['Decimal']['output'];
  /** Лимит операций */
  operation_limit: Scalars['Decimal']['output'];
  /** Получить роль */
  role?: Maybe<Role>;
  sign_payments?: Maybe<Scalars['Boolean']['output']>;
  /** Ежедневный использованный лимит */
  used_daily_limit: Scalars['Decimal']['output'];
  /** Ежемесячный использованный лимит */
  used_monthly_limit: Scalars['Decimal']['output'];
};

export type ApplicantBankingAccesses = {
  __typename?: 'ApplicantBankingAccesses';
  data?: Maybe<Array<ApplicantBankingAccess>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export enum ApplicantClientType {
  Corporate = 'Corporate',
  Private = 'Private'
}

/**
 * Компания пользователя
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompany = {
  __typename?: 'ApplicantCompany';
  /** Адрес */
  address?: Maybe<Scalars['String']['output']>;
  /** Адрес2 */
  address2?: Maybe<Scalars['String']['output']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Дополнительные поля Basic info */
  basic_info_additional_field?: Maybe<Scalars['JSON']['output']>;
  /** Получить тип бизнеса */
  business_type?: Maybe<ApplicantCompanyBusinessType>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  company?: Maybe<Company>;
  /** Дополнительные поля Company Info */
  company_info_additional_fields?: Maybe<Scalars['JSON']['output']>;
  company_position?: Maybe<ApplicantIndividualCompany>;
  /** Тип компании */
  company_type?: Maybe<Scalars['String']['output']>;
  /** Контактный email */
  contact_email?: Maybe<Scalars['EMAIL']['output']>;
  /** Контактный телефон */
  contact_phone?: Maybe<Scalars['String']['output']>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Статус верецификации email */
  email_verification?: Maybe<ApplicantVerificationStatus>;
  /** Дата окончания регистрации */
  expires_at?: Maybe<Scalars['Date']['output']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  /** Дата включуения */
  incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить KYC level */
  kyc_level?: Maybe<ApplicantRiskLevel>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantCompanyLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Номер лицензии */
  license_number?: Maybe<Scalars['String']['output']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Модули */
  modules?: Maybe<Array<Maybe<ApplicantCompanyModules>>>;
  /** Название */
  name?: Maybe<Scalars['String']['output']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantCompanyNotes>>>;
  /** Адрес офиса */
  office_address?: Maybe<Scalars['String']['output']>;
  /** Получить создателя */
  owner?: Maybe<ApplicantIndividual>;
  owner_position?: Maybe<ApplicantIndividualCompany>;
  owner_relation?: Maybe<ApplicantIndividualCompany>;
  /** Телефон */
  phone?: Maybe<Scalars['String']['output']>;
  /** Статус верецификации телефона */
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  /** Получить фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Проект */
  project?: Maybe<Project>;
  /** Дата регистрации */
  reg_at?: Maybe<Scalars['Date']['output']>;
  /** Регистрационный номер */
  reg_number?: Maybe<Scalars['String']['output']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Штат / область */
  state?: Maybe<Scalars['String']['output']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Налоговый номер */
  tax?: Maybe<Scalars['String']['output']>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']['output']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']['output']>;
};

/**
 * Типы бизнеса для компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyBusinessType = {
  __typename?: 'ApplicantCompanyBusinessType';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantCompanyBusinessType items. */
export type ApplicantCompanyBusinessTypePaginator = {
  __typename?: 'ApplicantCompanyBusinessTypePaginator';
  /** A list of ApplicantCompanyBusinessType items. */
  data: Array<ApplicantCompanyBusinessType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantCompanyLabel = {
  __typename?: 'ApplicantCompanyLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название метки */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantCompanyLabel items. */
export type ApplicantCompanyLabelPaginator = {
  __typename?: 'ApplicantCompanyLabelPaginator';
  /** A list of ApplicantCompanyLabel items. */
  data: Array<ApplicantCompanyLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули компании
 * Dashboard -> Applicants -> Company -> Full Profile -> Settings
 */
export type ApplicantCompanyModules = {
  __typename?: 'ApplicantCompanyModules';
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * Заметки компания
 * Dashboard -> Applicants -> Company
 */
export type ApplicantCompanyNotes = {
  __typename?: 'ApplicantCompanyNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantCompany>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Заметка */
  note: Scalars['String']['output'];
};

/** A paginated list of ApplicantCompanyNotes items. */
export type ApplicantCompanyNotesPaginator = {
  __typename?: 'ApplicantCompanyNotesPaginator';
  /** A list of ApplicantCompanyNotes items. */
  data: Array<ApplicantCompanyNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantCompany items. */
export type ApplicantCompanyPaginator = {
  __typename?: 'ApplicantCompanyPaginator';
  /** A list of ApplicantCompany items. */
  data: Array<ApplicantCompany>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * История уровней риска Applicant Company
 * Applicants -> Individual -> Individual Company Full Profile -> General
 */
export type ApplicantCompanyRiskLevelHistory = {
  __typename?: 'ApplicantCompanyRiskLevelHistory';
  /** Получить аппликанта */
  applicant_company?: Maybe<ApplicantCompany>;
  /** Комментарий */
  comment: Scalars['String']['output'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantCompanyRiskLevelHistory items. */
export type ApplicantCompanyRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantCompanyRiskLevelHistoryPaginator';
  /** A list of ApplicantCompanyRiskLevelHistory items. */
  data: Array<ApplicantCompanyRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDetailsRequisites = {
  __typename?: 'ApplicantDetailsRequisites';
  address: Scalars['String']['output'];
  bank_address: Scalars['String']['output'];
  bank_country: Scalars['String']['output'];
  bank_name: Scalars['String']['output'];
  beneficiary: Scalars['String']['output'];
  country: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  iban: Scalars['String']['output'];
  swift_code: Scalars['String']['output'];
};

export type ApplicantDevice = {
  __typename?: 'ApplicantDevice';
  /** Браузер */
  browser?: Maybe<Scalars['String']['output']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc']['output'];
  /** Устройство */
  device_type?: Maybe<Scalars['String']['output']>;
  /** Дата истечения */
  expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** IP */
  ip?: Maybe<Scalars['String']['output']>;
  /** Модель */
  model?: Maybe<Scalars['String']['output']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']['output']>;
  /** Доверенное устройство */
  trusted: Scalars['Boolean']['output'];
};

/** Документы аппдиканта */
export type ApplicantDocument = {
  __typename?: 'ApplicantDocument';
  /** Добавлено из */
  added_from?: Maybe<Scalars['String']['output']>;
  applicant_id: Scalars['ID']['output'];
  applicant_type: ApplicantType;
  company?: Maybe<Company>;
  /** Получить страну */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  document_state?: Maybe<DocumentState>;
  document_state_id?: Maybe<Scalars['ID']['output']>;
  document_type?: Maybe<DocumentType>;
  document_type_id?: Maybe<Scalars['ID']['output']>;
  /** Получить файл */
  file?: Maybe<Files>;
  /** ID */
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  /** Получить внутренние заметки документа */
  internal_notes?: Maybe<Array<Maybe<ApplicantDocumentInternalNote>>>;
  /** Получить детали отклонения документа */
  reject_details?: Maybe<Array<Maybe<ApplicantDocumentRejectDetail>>>;
  /** Получить теги */
  tags?: Maybe<Array<Maybe<ApplicantDocumentTag>>>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** Внутренние заметки к документам аппликанта */
export type ApplicantDocumentInternalNote = {
  __typename?: 'ApplicantDocumentInternalNote';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить документ */
  document?: Maybe<ApplicantDocument>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Получить Мембера */
  member?: Maybe<Members>;
  /** Текст заметки */
  note?: Maybe<Scalars['String']['output']>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of ApplicantDocumentInternalNote items. */
export type ApplicantDocumentInternalNotePaginator = {
  __typename?: 'ApplicantDocumentInternalNotePaginator';
  /** A list of ApplicantDocumentInternalNote items. */
  data: Array<ApplicantDocumentInternalNote>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantDocument items. */
export type ApplicantDocumentPaginator = {
  __typename?: 'ApplicantDocumentPaginator';
  /** A list of ApplicantDocument items. */
  data: Array<ApplicantDocument>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantDocumentRejectDetail = {
  __typename?: 'ApplicantDocumentRejectDetail';
  /** Документ */
  applicant_document: ApplicantDocument;
  /** Тег */
  applicant_document_tag?: Maybe<Array<ApplicantDocumentTag>>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Мембер */
  member?: Maybe<Members>;
  /** Дата обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** Теги документов аппликанта */
export type ApplicantDocumentTag = {
  __typename?: 'ApplicantDocumentTag';
  /** Категория */
  category?: Maybe<ApplicantDocumentTagCategory>;
  /** дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** member */
  member?: Maybe<Members>;
  /** Имя */
  name: Scalars['String']['output'];
};

/** Категории тегов документов аппликанта */
export type ApplicantDocumentTagCategory = {
  __typename?: 'ApplicantDocumentTagCategory';
  /** ID */
  id: Scalars['ID']['output'];
  /** Имя категории */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantDocumentTagCategory items. */
export type ApplicantDocumentTagCategoryPaginator = {
  __typename?: 'ApplicantDocumentTagCategoryPaginator';
  /** A list of ApplicantDocumentTagCategory items. */
  data: Array<ApplicantDocumentTagCategory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantDocumentTag items. */
export type ApplicantDocumentTagPaginator = {
  __typename?: 'ApplicantDocumentTagPaginator';
  /** A list of ApplicantDocumentTag items. */
  data: Array<ApplicantDocumentTag>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Частный пользователь
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividual = {
  __typename?: 'ApplicantIndividual';
  /** Адрес */
  address?: Maybe<Scalars['String']['output']>;
  /** Дополнительные поля */
  address_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить компании к которым принадлежит апликант */
  applicant_companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  /** Applicant Banking Access */
  banking_access?: Maybe<Array<Maybe<ApplicantBankingAccess>>>;
  /** Дата рождения */
  birth_at?: Maybe<Scalars['Date']['output']>;
  /** Город рождения */
  birth_city?: Maybe<Scalars['String']['output']>;
  /** Получить связанную страну рождения */
  birth_country?: Maybe<Country>;
  /** Штат/область рождения */
  birth_state?: Maybe<Scalars['String']['output']>;
  /** Получить связанную страну гражданства */
  citizenship_country?: Maybe<Country>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  /** Название компании держателя applicant */
  company?: Maybe<Company>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Статус верецификации email */
  email_verification?: Maybe<ApplicantVerificationStatus>;
  /** Имя */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']['output']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  /** IP адрес */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Applicant KYC Level */
  kyc_level?: Maybe<ApplicantKycLevel>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Фамилия */
  last_name?: Maybe<Scalars['String']['output']>;
  /** время последний просмотренный */
  last_screened_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']['output']>;
  /** Получить модули */
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  /** Национальность */
  nationality?: Maybe<Scalars['String']['output']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  /** Дополнительные поля для Personal info */
  personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Телефон */
  phone?: Maybe<Scalars['String']['output']>;
  /** Статус верецификации телефона */
  phone_verification?: Maybe<ApplicantVerificationStatus>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить проект */
  project?: Maybe<Project>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']['output']>;
  /** Пол */
  sex?: Maybe<Sex>;
  /** Штат / область */
  state?: Maybe<Scalars['String']['output']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Получить two factor auth */
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  /** Время обновления */
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']['output']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']['output']>;
};

export type ApplicantIndividualCompany = {
  __typename?: 'ApplicantIndividualCompany';
  applicant_company?: Maybe<ApplicantCompany>;
  applicant_company_id: Scalars['ID']['output'];
  applicant_id: Scalars['ID']['output'];
  applicant_individual_company_position_id: Scalars['ID']['output'];
  applicant_individual_company_relation_id: Scalars['ID']['output'];
  applicant_type: Scalars['String']['output'];
  /** Получить индивидуала или компанию индивидуала */
  client?: Maybe<Client>;
  percentage_owned?: Maybe<Scalars['Float']['output']>;
  position_in_company?: Maybe<ApplicantIndividualCompanyPosition>;
  relation_to_company?: Maybe<ApplicantIndividualCompanyRelation>;
};

/**
 * Должности компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyPosition = {
  __typename?: 'ApplicantIndividualCompanyPosition';
  /** Компания */
  company?: Maybe<Company>;
  id: Scalars['ID']['output'];
  /** Название должности */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantIndividualCompanyPosition items. */
export type ApplicantIndividualCompanyPositionPaginator = {
  __typename?: 'ApplicantIndividualCompanyPositionPaginator';
  /** A list of ApplicantIndividualCompanyPosition items. */
  data: Array<ApplicantIndividualCompanyPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Отношения компании
 * Management -> New Applicant -> Create Company
 */
export type ApplicantIndividualCompanyRelation = {
  __typename?: 'ApplicantIndividualCompanyRelation';
  /** Компания */
  company?: Maybe<Company>;
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantIndividualCompanyRelation items. */
export type ApplicantIndividualCompanyRelationPaginator = {
  __typename?: 'ApplicantIndividualCompanyRelationPaginator';
  /** A list of ApplicantIndividualCompanyRelation items. */
  data: Array<ApplicantIndividualCompanyRelation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Метки пользователя
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantIndividualLabel = {
  __typename?: 'ApplicantIndividualLabel';
  /** HEX код метки */
  hex_color_code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название метки */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantIndividualLabel items. */
export type ApplicantIndividualLabelPaginator = {
  __typename?: 'ApplicantIndividualLabelPaginator';
  /** A list of ApplicantIndividualLabel items. */
  data: Array<ApplicantIndividualLabel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Модули аппликанта
 * Dashboard -> Applicants -> Individual -> Full Profile -> Settings
 */
export type ApplicantIndividualModules = {
  __typename?: 'ApplicantIndividualModules';
  /** ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название */
  name?: Maybe<Scalars['String']['output']>;
};

/**
 * Заметки частный пользователь
 * Dashboard -> Applicants -> Individual
 */
export type ApplicantIndividualNotes = {
  __typename?: 'ApplicantIndividualNotes';
  /** Получить пользователя */
  applicant?: Maybe<ApplicantIndividual>;
  /** Получить автора */
  author?: Maybe<Members>;
  /** Дата и время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Заметка */
  note: Scalars['String']['output'];
};

/** A paginated list of ApplicantIndividualNotes items. */
export type ApplicantIndividualNotesPaginator = {
  __typename?: 'ApplicantIndividualNotesPaginator';
  /** A list of ApplicantIndividualNotes items. */
  data: Array<ApplicantIndividualNotes>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantIndividual items. */
export type ApplicantIndividualPaginator = {
  __typename?: 'ApplicantIndividualPaginator';
  /** A list of ApplicantIndividual items. */
  data: Array<ApplicantIndividual>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Уровни KYC
 * Management -> New Applicant
 */
export type ApplicantKycLevel = {
  __typename?: 'ApplicantKycLevel';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantKycLevel items. */
export type ApplicantKycLevelPaginator = {
  __typename?: 'ApplicantKycLevelPaginator';
  /** A list of ApplicantKycLevel items. */
  data: Array<ApplicantKycLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantLinkedCompany = {
  __typename?: 'ApplicantLinkedCompany';
  company?: Maybe<ApplicantCompany>;
  company_position?: Maybe<ApplicantIndividualCompanyPosition>;
  company_relation?: Maybe<ApplicantIndividualCompanyRelation>;
  percentage_owned?: Maybe<Scalars['Float']['output']>;
};

/**
 * Управление модулями
 * Dashboard -> Applicants -> Company->Full Profile -> Settings
 */
export type ApplicantModules = {
  __typename?: 'ApplicantModules';
  id: Scalars['ID']['output'];
  /** Название модуля */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantModules items. */
export type ApplicantModulesPaginator = {
  __typename?: 'ApplicantModulesPaginator';
  /** A list of ApplicantModules items. */
  data: Array<ApplicantModules>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantProfile = {
  __typename?: 'ApplicantProfile';
  /** Адрес */
  address?: Maybe<Scalars['String']['output']>;
  /** Получить состояния */
  applicant_state?: Maybe<ApplicantState>;
  /** Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  /** Дата рождения */
  birth_at?: Maybe<Scalars['Date']['output']>;
  /** Город рождения */
  birth_city?: Maybe<Scalars['String']['output']>;
  /** Получить связанную страну рождения */
  birth_country?: Maybe<Country>;
  /** Штат/область рождения */
  birth_state?: Maybe<Scalars['String']['output']>;
  /** Получить связанную страну гражданства */
  citizenship_country?: Maybe<Country>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  /** Получить компании */
  companies?: Maybe<Array<Maybe<ApplicantCompany>>>;
  /** Название компании держателя applicant */
  company?: Maybe<Company>;
  /** Дополнительные поля блока контакты */
  contacts_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить связанную страну */
  country?: Maybe<Country>;
  /** Время создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** email */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Имя */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']['output']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  /** IP адрес */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Верецифиорован телефон true/false */
  is_verification_phone?: Maybe<Scalars['Boolean']['output']>;
  /** Получить метки */
  labels?: Maybe<Array<Maybe<ApplicantIndividualLabel>>>;
  /** Получить язык */
  language?: Maybe<Languages>;
  /** Фамилия */
  last_name?: Maybe<Scalars['String']['output']>;
  /** Получить менеджера */
  manager?: Maybe<Members>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']['output']>;
  /** Получить модули */
  modules?: Maybe<Array<Maybe<ApplicantIndividualModules>>>;
  /** Национальность */
  nationality?: Maybe<Scalars['String']['output']>;
  /** Получить заметки */
  notes?: Maybe<Array<Maybe<ApplicantIndividualNotes>>>;
  /** Оповещения об устройствах на email */
  notify_device_email?: Maybe<Scalars['Boolean']['output']>;
  /** Дополнительные поля для Personal info */
  personal_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Телефон */
  phone?: Maybe<Scalars['String']['output']>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Дополнительные поля Profile data */
  profile_additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Получить уровни рисков */
  risk_level?: Maybe<ApplicantRiskLevel>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']['output']>;
  /** Пол */
  sex?: Maybe<Sex>;
  /** Штат / область */
  state?: Maybe<Scalars['String']['output']>;
  /** Получить причины */
  state_reason?: Maybe<ApplicantStateReason>;
  /** Получить статусы */
  status?: Maybe<ApplicantStatus>;
  /** Получить two factor auth */
  two_factor_auth?: Maybe<TwoFactorAuthSettings>;
  /** Адрес сайта */
  url?: Maybe<Scalars['String']['output']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']['output']>;
};

/** Реквизиты */
export type ApplicantRequisites = {
  __typename?: 'ApplicantRequisites';
  /** IBAN */
  account_number: Scalars['String']['output'];
  /** Связанный банк */
  bank?: Maybe<PaymentBank>;
  /** Валюта */
  currency?: Maybe<Currencies>;
  /** Account ID */
  id: Scalars['ID']['output'];
  /** Создатель */
  owner?: Maybe<ApplicantProfile>;
};

/**
 * Уровни риска
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantRiskLevel = {
  __typename?: 'ApplicantRiskLevel';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * История уровней риска Applicant Individual
 * Applicants -> Individual -> Individual Full Profile -> General
 */
export type ApplicantRiskLevelHistory = {
  __typename?: 'ApplicantRiskLevelHistory';
  /** Получить аппликанта */
  applicant?: Maybe<ApplicantIndividual>;
  /** Комментарий */
  comment: Scalars['String']['output'];
  /** Дата создания сообщения */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Получить владельца */
  manager?: Maybe<Members>;
  /** Получить уровень риска */
  risk_level?: Maybe<ApplicantRiskLevel>;
};

/** A paginated list of ApplicantRiskLevelHistory items. */
export type ApplicantRiskLevelHistoryPaginator = {
  __typename?: 'ApplicantRiskLevelHistoryPaginator';
  /** A list of ApplicantRiskLevelHistory items. */
  data: Array<ApplicantRiskLevelHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of ApplicantRiskLevel items. */
export type ApplicantRiskLevelPaginator = {
  __typename?: 'ApplicantRiskLevelPaginator';
  /** A list of ApplicantRiskLevel items. */
  data: Array<ApplicantRiskLevel>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ApplicantSettingsProfile = {
  __typename?: 'ApplicantSettingsProfile';
  /** email */
  email?: Maybe<Scalars['EMAIL']['output']>;
  email_confirm_url?: Maybe<Scalars['String']['output']>;
  /** Имя */
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Фамилия */
  last_name?: Maybe<Scalars['String']['output']>;
  /** Отчество */
  middle_name?: Maybe<Scalars['String']['output']>;
};

/**
 * Состояния
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantState = {
  __typename?: 'ApplicantState';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantState items. */
export type ApplicantStatePaginator = {
  __typename?: 'ApplicantStatePaginator';
  /** A list of ApplicantState items. */
  data: Array<ApplicantState>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * State reason
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStateReason = {
  __typename?: 'ApplicantStateReason';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantStateReason items. */
export type ApplicantStateReasonPaginator = {
  __typename?: 'ApplicantStateReasonPaginator';
  /** A list of ApplicantStateReason items. */
  data: Array<ApplicantStateReason>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Статусы
 * Management -> New Applicant -> Create Individual -> General
 */
export type ApplicantStatus = {
  __typename?: 'ApplicantStatus';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of ApplicantStatus items. */
export type ApplicantStatusPaginator = {
  __typename?: 'ApplicantStatusPaginator';
  /** A list of ApplicantStatus items. */
  data: Array<ApplicantStatus>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export enum ApplicantType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual'
}

export type ApplicantVerificationStatus = {
  __typename?: 'ApplicantVerificationStatus';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

export type AuthenticationLog = {
  __typename?: 'AuthenticationLog';
  /** Браузер */
  browser?: Maybe<Scalars['String']['output']>;
  /** Версия браузера */
  browser_version?: Maybe<Scalars['String']['output']>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  /** Тип */
  client_type: Scalars['String']['output'];
  /** Название компании */
  company: Scalars['String']['output'];
  /** Страна */
  country?: Maybe<Scalars['String']['output']>;
  /** Дата создания */
  created_at: Scalars['DateTimeUtc']['output'];
  /** Устройство */
  device_type?: Maybe<Scalars['String']['output']>;
  /** Домен */
  domain: Scalars['String']['output'];
  /** Почта */
  email: Scalars['String']['output'];
  /** Дата истечения */
  expired_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Группа */
  group: Scalars['String']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Инфо */
  info?: Maybe<Scalars['String']['output']>;
  /** IP */
  ip?: Maybe<Scalars['String']['output']>;
  /** Member email */
  member: Scalars['String']['output'];
  /** Модель */
  model?: Maybe<Scalars['String']['output']>;
  /** Платформа */
  platform?: Maybe<Scalars['String']['output']>;
  /** Тип */
  provider: Scalars['String']['output'];
  /** Статус */
  status?: Maybe<Scalars['String']['output']>;
};

export type AuthenticationLogs = {
  __typename?: 'AuthenticationLogs';
  data?: Maybe<Array<AuthenticationLog>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

/** Bank correspondents */
export type BankCorrespondent = {
  __typename?: 'BankCorrespondent';
  /** Адрес */
  address: Scalars['String']['output'];
  /** Счет банка корреспондента */
  bank_account: Scalars['String']['output'];
  /** SWIFT */
  bank_code: Scalars['String']['output'];
  /** Получить валюты */
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Активность */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название */
  name: Scalars['String']['output'];
  /** Получить регионы */
  regions?: Maybe<Array<Maybe<Region>>>;
};

/** A paginated list of BankCorrespondent items. */
export type BankCorrespondentPaginator = {
  __typename?: 'BankCorrespondentPaginator';
  /** A list of BankCorrespondent items. */
  data: Array<BankCorrespondent>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Business Activity
 * Banking -> Commission Templates -> Template Settings
 */
export type BusinessActivity = {
  __typename?: 'BusinessActivity';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of BusinessActivity items. */
export type BusinessActivityPaginator = {
  __typename?: 'BusinessActivityPaginator';
  /** A list of BusinessActivity items. */
  data: Array<BusinessActivity>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Client = ApplicantCompany | ApplicantIndividual;

export type ClientAccountsDetails = {
  __typename?: 'ClientAccountsDetails';
  /** Текущий баланс */
  available_balance: Scalars['Decimal']['output'];
  /** Получить связанный код валюты */
  currency: Currencies;
  /** Текущий баланс */
  current_balance: Scalars['Decimal']['output'];
  id: Scalars['ID']['output'];
  /** лимит минимального баланса */
  max_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  /** лимит максимального баланса */
  min_limit_balance?: Maybe<Scalars['Decimal']['output']>;
  /** Текущий баланс */
  reserved_balance: Scalars['Decimal']['output'];
};

/** Client ip address */
export type ClientIpAddress = {
  __typename?: 'ClientIpAddress';
  /** Client ID */
  client_id?: Maybe<Scalars['ID']['output']>;
  /** Client type */
  client_type?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** ip_address */
  ip_address?: Maybe<Scalars['String']['output']>;
};

export enum ClientType {
  Administration = 'Administration',
  Client = 'Client'
}

export type Clientable = ApplicantCompany | ApplicantIndividual | Members;

export enum Column {
  CreatedAt = 'CREATED_AT',
  ExpiredAt = 'EXPIRED_AT',
  Id = 'ID'
}

/**
 * Прайс лист комиссий
 * Banking -> Commission Price List
 */
export type CommissionPriceList = {
  __typename?: 'CommissionPriceList';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Получить связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить связанные цены */
  fees?: Maybe<Array<Maybe<PriceListFee>>>;
  id: Scalars['ID']['output'];
  /** Название шаблона */
  name: Scalars['String']['output'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
  /** Получить Регион */
  region?: Maybe<Region>;
};

/** A paginated list of CommissionPriceList items. */
export type CommissionPriceListPaginator = {
  __typename?: 'CommissionPriceListPaginator';
  /** A list of CommissionPriceList items. */
  data: Array<CommissionPriceList>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplate = {
  __typename?: 'CommissionTemplate';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Получить список бизнесов */
  business_activity?: Maybe<Array<Maybe<BusinessActivity>>>;
  commission_template_limits?: Maybe<Array<Maybe<CommissionTemplateLimit>>>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** массив ID стран */
  country_id?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** массив ID валют */
  currency_id?: Maybe<Array<Maybe<Scalars['ID']['output']>>>;
  /** Описание шаблона */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название шаблона */
  name: Scalars['String']['output'];
  /** Получить связанного мембера */
  owner?: Maybe<Array<Maybe<ApplicantIndividual>>>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  regions?: Maybe<Array<Maybe<Region>>>;
};

/**
 * Лимиты комиссий
 * Banking -> Commission Templates -> Template List
 */
export type CommissionTemplateLimit = {
  __typename?: 'CommissionTemplateLimit';
  /** Сумма лимита */
  amount: Scalars['Decimal']['output'];
  /** Получить шаблон комиссии */
  commission_template: CommissionTemplate;
  /** Получить события лимита */
  commission_template_limit_action_type: CommissionTemplateLimitActionType;
  /** Получить периоды лимита */
  commission_template_limit_period?: Maybe<CommissionTemplateLimitPeriod>;
  /** Получить направления лимита */
  commission_template_limit_transfer_direction: CommissionTemplateLimitTransferDirection;
  /** Получить типы лимита */
  commission_template_limit_type: CommissionTemplateLimitType;
  /** Валюта */
  currency: Currencies;
  id: Scalars['ID']['output'];
  /** Получить платежную систему */
  payment_system: PaymentSystem;
  /** количество срабатываний лимита */
  period_count?: Maybe<Scalars['Int']['output']>;
  /** Получить регион */
  region: Region;
};

/**
 * Типы событий шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitActionType = {
  __typename?: 'CommissionTemplateLimitActionType';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of CommissionTemplateLimitActionType items. */
export type CommissionTemplateLimitActionTypePaginator = {
  __typename?: 'CommissionTemplateLimitActionTypePaginator';
  /** A list of CommissionTemplateLimitActionType items. */
  data: Array<CommissionTemplateLimitActionType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplateLimit items. */
export type CommissionTemplateLimitPaginator = {
  __typename?: 'CommissionTemplateLimitPaginator';
  /** A list of CommissionTemplateLimit items. */
  data: Array<CommissionTemplateLimit>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Периоды шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitPeriod = {
  __typename?: 'CommissionTemplateLimitPeriod';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of CommissionTemplateLimitPeriod items. */
export type CommissionTemplateLimitPeriodPaginator = {
  __typename?: 'CommissionTemplateLimitPeriodPaginator';
  /** A list of CommissionTemplateLimitPeriod items. */
  data: Array<CommissionTemplateLimitPeriod>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Направления переводов лимитов шаблонов комиссий
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitTransferDirection = {
  __typename?: 'CommissionTemplateLimitTransferDirection';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of CommissionTemplateLimitTransferDirection items. */
export type CommissionTemplateLimitTransferDirectionPaginator = {
  __typename?: 'CommissionTemplateLimitTransferDirectionPaginator';
  /** A list of CommissionTemplateLimitTransferDirection items. */
  data: Array<CommissionTemplateLimitTransferDirection>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Типы лимитов шаблонов
 * Banking -> Commission Templates -> Template Settings
 */
export type CommissionTemplateLimitType = {
  __typename?: 'CommissionTemplateLimitType';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of CommissionTemplateLimitType items. */
export type CommissionTemplateLimitTypePaginator = {
  __typename?: 'CommissionTemplateLimitTypePaginator';
  /** A list of CommissionTemplateLimitType items. */
  data: Array<CommissionTemplateLimitType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of CommissionTemplate items. */
export type CommissionTemplatePaginator = {
  __typename?: 'CommissionTemplatePaginator';
  /** A list of CommissionTemplate items. */
  data: Array<CommissionTemplate>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Компания
 * Administration->Company Info
 * error codes: 500, 400
 */
export type Company = {
  __typename?: 'Company';
  /** Дополнительные поля основные */
  additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительные поля данные */
  additional_fields_data?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительные поля */
  additional_fields_info?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  /** Адресс */
  address?: Maybe<Scalars['String']['output']>;
  /** Backoffice forgot password URL */
  backoffice_forgot_password_url?: Maybe<Scalars['String']['output']>;
  /** Backoffice login URL */
  backoffice_login_url?: Maybe<Scalars['String']['output']>;
  /** Backoffice support EMAIL */
  backoffice_support_email?: Maybe<Scalars['EMAIL']['output']>;
  /** Backoffice support URL */
  backoffice_support_url?: Maybe<Scalars['String']['output']>;
  /** Город */
  city?: Maybe<Scalars['String']['output']>;
  /** Модули компании */
  company_modules?: Maybe<Array<Maybe<CompanyModule>>>;
  /** Регистрационный номер компании */
  company_number?: Maybe<Scalars['String']['output']>;
  /** Контактное лицо */
  contact_name?: Maybe<Scalars['String']['output']>;
  /** Страна */
  country?: Maybe<Country>;
  created_at: Scalars['DateTimeUtc']['output'];
  /** Департаменты компании */
  departments?: Maybe<Array<Maybe<Department>>>;
  /** E-mail компании */
  email: Scalars['EMAIL']['output'];
  /** Количество сотрудниуов */
  employees?: Maybe<Employee>;
  /** Тип сущности */
  entity_type?: Maybe<Scalars['String']['output']>;
  /** Дата окончания лицензии */
  exp_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  incorporate_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Номер лицензии */
  license_number?: Maybe<Scalars['String']['output']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Url верификации мембера */
  member_verify_url?: Maybe<Scalars['String']['output']>;
  /** Участники компании */
  members?: Maybe<Array<Maybe<Members>>>;
  /** Количество участников в компании */
  members_count?: Maybe<Scalars['Int']['output']>;
  /** Название компании */
  name: Scalars['String']['output'];
  /** Телефон */
  phone?: Maybe<Scalars['String']['output']>;
  /** Должности компании */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
  /** Департаменты компании */
  projects?: Maybe<Array<Maybe<Project>>>;
  /** Количество проектов */
  projects_count?: Maybe<Scalars['Int']['output']>;
  /** Адрес регистрации */
  reg_address?: Maybe<Scalars['String']['output']>;
  /** Регистрационный номер */
  reg_number?: Maybe<Scalars['String']['output']>;
  /** Состояние */
  state?: Maybe<State>;
  /** Причина состояния */
  state_reason?: Maybe<StateReason>;
  tax_id?: Maybe<Scalars['String']['output']>;
  /** Область деятельности */
  type_of_industry?: Maybe<TypeOfIndustry>;
  updated_at: Scalars['DateTimeUtc']['output'];
  /** URL компании */
  url?: Maybe<Scalars['String']['output']>;
  /** Токен для видеоверификации */
  vv_token?: Maybe<Scalars['String']['output']>;
  /** Индекс */
  zip?: Maybe<Scalars['String']['output']>;
};

/** Модули компаний */
export type CompanyModule = {
  __typename?: 'CompanyModule';
  /** IBAN провайдеры */
  iban_providers?: Maybe<Array<Maybe<CompanyModuleIbanProvider>>>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Активность */
  is_active: Scalars['Boolean']['output'];
  /** Модуль */
  module?: Maybe<Module>;
  /** Платежные провайдеры */
  payment_providers?: Maybe<Array<Maybe<CompanyModulePaymentProvider>>>;
};

/** Company Module IBAN Provider */
export type CompanyModuleIbanProvider = {
  __typename?: 'CompanyModuleIbanProvider';
  /** ID модуля компании */
  company_module_id: Scalars['ID']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Активность */
  is_active: Scalars['Boolean']['output'];
  /** ID IBAN провайдера */
  payment_provider_iban: PaymentProviderIban;
};

export type CompanyModuleIbanProviderPassword = {
  __typename?: 'CompanyModuleIbanProviderPassword';
  /** ID */
  id: Scalars['ID']['output'];
  /** Пароль */
  password: Scalars['String']['output'];
};

/** Company Module Payment Provider */
export type CompanyModulePaymentProvider = {
  __typename?: 'CompanyModulePaymentProvider';
  /** ID модуля компании */
  company_module_id: Scalars['ID']['output'];
  /** ID */
  id: Scalars['ID']['output'];
  /** Активность */
  is_active: Scalars['Boolean']['output'];
  /** ID платежного провайдера */
  payment_provider: PaymentProvider;
};

export type CompanyModulePaymentProviderPassword = {
  __typename?: 'CompanyModulePaymentProviderPassword';
  /** ID */
  id: Scalars['ID']['output'];
  /** Пароль */
  password: Scalars['String']['output'];
};

/** A paginated list of Company items. */
export type CompanyPaginator = {
  __typename?: 'CompanyPaginator';
  /** A list of Company items. */
  data: Array<Company>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type ConnectImageableInput = {
  id: Scalars['ID']['input'];
  type: Scalars['String']['input'];
};

/** Страна */
export type Country = {
  __typename?: 'Country';
  id: Scalars['ID']['output'];
  /** 3х значный ISO код */
  iso: Scalars['String']['output'];
  /** Название страны */
  name: Scalars['String']['output'];
};

/** A paginated list of Country items. */
export type CountryPaginator = {
  __typename?: 'CountryPaginator';
  /** A list of Country items. */
  data: Array<Country>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Валюты */
export type Currencies = {
  __typename?: 'Currencies';
  /** ISO код валюты */
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Количество знаков после запятой */
  minor_unit?: Maybe<Scalars['Int']['output']>;
  /** Название валюты */
  name: Scalars['String']['output'];
};

/** A paginated list of Currencies items. */
export type CurrenciesPaginator = {
  __typename?: 'CurrenciesPaginator';
  /** A list of Currencies items. */
  data: Array<Currencies>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type DateRange = {
  from: Scalars['Date']['input'];
  to: Scalars['DateEnd']['input'];
};

export type DateTimeRange = {
  from: Scalars['DateTimeUtc']['input'];
  to: Scalars['DateTimeUtc']['input'];
};

/**
 * Департаменты
 * Administration->Company Info->Full Profile->Department
 */
export type Department = {
  __typename?: 'Department';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Дата создания Департамент */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Название департамента */
  name: Scalars['String']['output'];
  /** Получить должность */
  positions?: Maybe<Array<Maybe<DepartmentPosition>>>;
};

/** A paginated list of Department items. */
export type DepartmentPaginator = {
  __typename?: 'DepartmentPaginator';
  /** A list of Department items. */
  data: Array<Department>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Должности */
export type DepartmentPosition = {
  __typename?: 'DepartmentPosition';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить департамент */
  department?: Maybe<Array<Maybe<Department>>>;
  id: Scalars['ID']['output'];
  /** Активен = true или не активный = false */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Назварие должности */
  name: Scalars['String']['output'];
};

/** A paginated list of DepartmentPosition items. */
export type DepartmentPositionPaginator = {
  __typename?: 'DepartmentPositionPaginator';
  /** A list of DepartmentPosition items. */
  data: Array<DepartmentPosition>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Состояния документа */
export type DocumentState = {
  __typename?: 'DocumentState';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** DocumentStateEnum */
export enum DocumentStateEnum {
  /** 3 */
  Approve = 'Approve',
  /** 4 */
  Declined = 'Declined',
  /** 1 */
  Pending = 'Pending',
  /** 2 */
  Processing = 'Processing'
}

/** Типы документов */
export type DocumentType = {
  __typename?: 'DocumentType';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Notifications
 */
export type EmailNotification = {
  __typename?: 'EmailNotification';
  /** Получить клиента ApplicantIndividual | ApplicantCompany | Members */
  clientable?: Maybe<Clientable>;
  /** Получить компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить Group Role */
  group_role?: Maybe<GroupRole>;
  /** Тип Группы */
  group_type?: Maybe<GroupType>;
  id: Scalars['ID']['output'];
  /** Тип получателя */
  recipient_type?: Maybe<RecipientType>;
  /** Получить templates */
  templates?: Maybe<Array<Maybe<EmailTemplate>>>;
  /** Тип */
  type?: Maybe<NotifyType>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of EmailNotification items. */
export type EmailNotificationPaginator = {
  __typename?: 'EmailNotificationPaginator';
  /** A list of EmailNotification items. */
  data: Array<EmailNotification>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailSmtp = {
  __typename?: 'EmailSmtp';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** почта */
  from_email?: Maybe<Scalars['String']['output']>;
  /** От кого */
  from_name?: Maybe<Scalars['String']['output']>;
  /** Имя хоста */
  host_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Определяем отправлять через данные настройки всю почту или нет */
  is_sending_mail?: Maybe<Scalars['Boolean']['output']>;
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Название шаблона */
  name?: Maybe<Scalars['String']['output']>;
  /** пароль */
  password: Scalars['String']['output'];
  /** Порт */
  port: Scalars['Int']['output'];
  /** ответить кому */
  replay_to?: Maybe<Scalars['String']['output']>;
  /** Защита */
  security?: Maybe<Securities>;
  /** логин */
  username: Scalars['String']['output'];
};

/**
 * Шаблоны электронной почты
 * Banking-> Email Templates Settings
 */
export type EmailTemplate = {
  __typename?: 'EmailTemplate';
  /** Получить Компанию */
  company?: Maybe<Company>;
  /** Контент */
  content: Scalars['String']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Получить Компанию */
  layout?: Maybe<EmailTemplateLayout>;
  /** Название */
  name: Scalars['String']['output'];
  /** Тип сервиса */
  service_type: ServiceType;
  /** Тема */
  subject: Scalars['String']['output'];
  /** Тип */
  type: ClientType;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  use_layout?: Maybe<Scalars['Boolean']['output']>;
};

export type EmailTemplateLayout = {
  __typename?: 'EmailTemplateLayout';
  /** Ид компании */
  company_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Footer */
  footer: Scalars['String']['output'];
  /** Header */
  header: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type EmailTemplateOnCompanyResponse = {
  __typename?: 'EmailTemplateOnCompanyResponse';
  data: Array<EmailTemplate>;
  layout?: Maybe<EmailTemplateLayout>;
};

export enum EmailVerification {
  NotVerified = 'NOT_VERIFIED',
  Requested = 'REQUESTED',
  Verified = 'VERIFIED'
}

export type Employee = {
  __typename?: 'Employee';
  /** Номер */
  employees_number: Scalars['String']['output'];
  /** ID */
  id: Scalars['ID']['output'];
};

export type Fee = {
  __typename?: 'Fee';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Клиент (Индивидуал или Компани) */
  client?: Maybe<Client>;
  /** Дата */
  created_at: Scalars['DateTimeUtc']['output'];
  fee: Scalars['Decimal']['output'];
  fee_amount: Scalars['Decimal']['output'];
  fee_pp: Scalars['Decimal']['output'];
  /** Получить связанного мембера */
  member?: Maybe<Members>;
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  price_list_fee?: Maybe<PriceListFee>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  /** Трансфер */
  transfer_outgoing?: Maybe<TransferOutgoing>;
  /** Тип трансфера */
  transfer_type: Scalars['String']['output'];
};

export type FeeItem = {
  __typename?: 'FeeItem';
  amount_from?: Maybe<Scalars['Int']['output']>;
  amount_to?: Maybe<Scalars['Int']['output']>;
  fee?: Maybe<Scalars['Int']['output']>;
  mode: Scalars['String']['output'];
  percent?: Maybe<Scalars['Int']['output']>;
};

export type FeeMode = {
  __typename?: 'FeeMode';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** Периоды комиссий */
export type FeePeriod = {
  __typename?: 'FeePeriod';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Типы платежей */
export type FeeType = {
  __typename?: 'FeeType';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/** Типы полей */
export enum FieldTypes {
  /** ID страны */
  CountryList = 'CountryList',
  /** Тип поля строка */
  Text = 'Text',
  /** Тип поля текстовое поле */
  TextArea = 'TextArea'
}

export enum FileEntityTypeEnum {
  Applicant = 'APPLICANT',
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Company = 'COMPANY',
  Document = 'DOCUMENT',
  File = 'FILE',
  Member = 'MEMBER',
  Project = 'PROJECT'
}

/** Файлы */
export type Files = {
  __typename?: 'Files';
  /** Кто загружал файл */
  author_id: Scalars['Int']['output'];
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Тип сущности для которой загружается файл */
  entity_type: FileEntityTypeEnum;
  /** Исходное имя файла */
  file_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Ссылка на файл */
  link: Scalars['String']['output'];
  /** Тип файла */
  mime_type: Scalars['String']['output'];
  /** Размер загружаемого файла */
  size: Scalars['Int']['output'];
  /** Название файла на ovh */
  storage_name: Scalars['String']['output'];
  /** Путь к загруженному файлу на ovh */
  storage_path: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of Files items. */
export type FilesPaginator = {
  __typename?: 'FilesPaginator';
  /** A list of Files items. */
  data: Array<Files>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type FilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<FilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<FilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']['input']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

export type GroupRole = {
  __typename?: 'GroupRole';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Описание группы */
  description?: Maybe<Scalars['String']['output']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** ID типа группы */
  group_type_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** Активная и не активная группа */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Получить связанный модуль */
  module?: Maybe<Module>;
  /** ID модуля */
  module_id?: Maybe<Scalars['ID']['output']>;
  /** Название группы */
  name?: Maybe<Scalars['String']['output']>;
  /** Получить провайдеров */
  providers?: Maybe<Array<Maybe<GroupRoleProvider>>>;
  /** Получить связанную роль */
  role?: Maybe<Role>;
  /** ID роли */
  role_id?: Maybe<Scalars['ID']['output']>;
};

/** A paginated list of GroupRole items. */
export type GroupRolePaginator = {
  __typename?: 'GroupRolePaginator';
  /** A list of GroupRole items. */
  data: Array<GroupRole>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type GroupRoleProvider = {
  __typename?: 'GroupRoleProvider';
  /** Получить связанный шаблон комиссий */
  commission_template?: Maybe<CommissionTemplate>;
  /** ID роль групп */
  group_role_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** По умолчанию */
  is_default?: Maybe<Scalars['Boolean']['output']>;
  /** Получить связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
};

export type GroupRoleView = {
  __typename?: 'GroupRoleView';
  /** ID шаблона коммиссии */
  commission_template_id?: Maybe<Scalars['ID']['output']>;
  /** Имя шаблона коммиссии */
  commission_template_name?: Maybe<Scalars['String']['output']>;
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Описание группы */
  description?: Maybe<Scalars['String']['output']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** ID типа группы */
  group_type_id?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  /** Активная и не активная группа */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Получить связанный модуль */
  module?: Maybe<Module>;
  /** ID модуля */
  module_id?: Maybe<Scalars['ID']['output']>;
  /** Название группы */
  name?: Maybe<Scalars['String']['output']>;
  /** ID провайдера */
  payment_provider_id?: Maybe<Scalars['ID']['output']>;
  /** Имя провайдера */
  payment_provider_name?: Maybe<Scalars['String']['output']>;
  /** Получить связанную роль */
  role?: Maybe<Role>;
  /** ID роли */
  role_id?: Maybe<Scalars['ID']['output']>;
};

/** A paginated list of GroupRoleView items. */
export type GroupRoleViewPaginator = {
  __typename?: 'GroupRoleViewPaginator';
  /** A list of GroupRoleView items. */
  data: Array<GroupRoleView>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Группы */
export type GroupType = {
  __typename?: 'GroupType';
  id: Scalars['ID']['output'];
  /** Название группы */
  name: GroupsEntities;
};

export enum GroupTypeMode {
  All = 'ALL',
  Clients = 'CLIENTS'
}

/** A paginated list of GroupType items. */
export type GroupTypePaginator = {
  __typename?: 'GroupTypePaginator';
  /** A list of GroupType items. */
  data: Array<GroupType>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type Groups = {
  __typename?: 'Groups';
  /** @deprecated No longer supported */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID']['output'];
  /** Название группы */
  name: GroupsEntities;
};

/**
 * Список групп
 * Settings->Manager Groups->Groups List
 */
export enum GroupsEntities {
  Company = 'Company',
  Individual = 'Individual',
  Member = 'Member'
}

export type ImageableMorphToTable = {
  connect?: InputMaybe<ConnectImageableInput>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputAccount = {
  /** Имя аккаунта */
  account_name: Scalars['String']['input'];
  /** Номер аккаунта */
  account_number?: InputMaybe<Scalars['String']['input']>;
  /** clientable */
  clientableAttach?: InputMaybe<PivotTable>;
  /** ID шаблона комиссии */
  commission_template_id: Scalars['ID']['input'];
  /** ID компании */
  company_id: Scalars['ID']['input'];
  /** ID валюты */
  currency_id: Scalars['ID']['input'];
  /** ID групроле */
  group_role_id: Scalars['ID']['input'];
  /** ID группы */
  group_type_id: Scalars['ID']['input'];
  /** ID провайдера iban */
  iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  /** Основной или нет */
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
  /** лимит минимального баланса */
  max_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  /** лимит максимального баланса */
  min_limit_balance?: InputMaybe<Scalars['Decimal']['input']>;
  /** ID владельца */
  owner_id: Scalars['ID']['input'];
  /** ID банка */
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID провайдера */
  payment_provider_id: Scalars['ID']['input'];
  /** ID платежной системы */
  payment_system_id: Scalars['ID']['input'];
};

export type InputCommissionTemplate = {
  /** массив ID бизнесов */
  business_activity?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** массив ID лимитов */
  commission_template_limit_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** ID компании */
  company_id?: InputMaybe<Scalars['ID']['input']>;
  /** массив ID валют */
  currency_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** Описание шаблона */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Активен или нет */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Название шаблона */
  name: Scalars['String']['input'];
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID платежной системы */
  payment_system_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  /** массив ID регионов */
  region_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputCommissionTemplateLimit = {
  /** Сумма лимита */
  amount: Scalars['Decimal']['input'];
  /** ID шаблона комиссии */
  commission_template_id: Scalars['ID']['input'];
  /** ID события лимита */
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID периода лимита */
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID направления платежа */
  commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  /** ID типа лимита */
  commission_template_limit_type_id: Scalars['ID']['input'];
  /** ID валюты лимита */
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID количество срабатываний лимита */
  period_count?: InputMaybe<Scalars['ID']['input']>;
  /** ID региона */
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModuleIbanProvider = {
  /** ID модуля компании */
  company_module_id?: InputMaybe<Scalars['ID']['input']>;
  /** Активность */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID IBAN провайдера */
  payment_provider_iban_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputCompanyModulePaymentProvider = {
  /** ID модуля компании */
  company_module_id?: InputMaybe<Scalars['ID']['input']>;
  /** Активность */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputGroupRoleProvider = {
  /** ID шаблона комиссий */
  commission_template_id: Scalars['ID']['input'];
  /** По умолчанию */
  is_default?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID платежного провайдера */
  payment_provider_id: Scalars['ID']['input'];
};

export type InputMemberAccessLimitation = {
  /** ID компании */
  company_id: Scalars['ID']['input'];
  /** ID Груп Роль */
  groupRoles?: InputMaybe<PivotTable>;
  /** ID Груп type */
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID Мембера */
  member_id: Scalars['ID']['input'];
  /** ID модуля */
  module_id: Scalars['ID']['input'];
  /** ID платежного провайдера */
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  /** ID проекта */
  project_id?: InputMaybe<Scalars['ID']['input']>;
  /** Показать только своих аппликантов */
  see_own_applicants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InputPaymentBank = {
  /** Адрес банка */
  address: Scalars['String']['input'];
  /** Код банка */
  bank_code?: InputMaybe<Scalars['String']['input']>;
  /** ID страны */
  country_id: Scalars['ID']['input'];
  /** Активный не активный (true/false) */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Название банка */
  name: Scalars['String']['input'];
  /** ID платежного провидера */
  payment_provider_id: Scalars['ID']['input'];
  /** Код платежной системы */
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  /** ID платежного системы */
  payment_system_id: Scalars['ID']['input'];
};

export type InputPaymentProvider = {
  /** Ид компании */
  company_id: Scalars['ID']['input'];
  /** Описание провайдера */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Активен или нет */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Лого */
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  /** Название провайдера */
  name: Scalars['String']['input'];
  /** массив ID платежных систем */
  payment_systems?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InputPaymentProviderIban = {
  /** ID компании */
  company_id: Scalars['ID']['input'];
  /** ID валюты */
  currency_id: Scalars['ID']['input'];
  /** Активность */
  is_active: Scalars['Boolean']['input'];
  /** Название */
  name: Scalars['String']['input'];
};

export type InputPaymentSystem = {
  /** массив ID Реквизитов */
  banks?: InputMaybe<PivotTable>;
  /** массив ID валют */
  currencies?: InputMaybe<PivotTable>;
  /** Описание */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Активный не активный (true/false) */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Лого */
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  /** Название платежной системы */
  name: Scalars['String']['input'];
  /** массив типов операций */
  operations?: InputMaybe<PivotTable>;
  /** массив ID провайдеров */
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  /** массив ID стран */
  regions?: InputMaybe<PivotTable>;
};

export type InputProject = {
  /** Дополнительные поля */
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  /** Аватар */
  avatar_id?: InputMaybe<Scalars['ID']['input']>;
  /** URL клиента */
  client_url?: InputMaybe<Scalars['String']['input']>;
  /** Компания */
  company_id: Scalars['ID']['input'];
  /** Описание */
  description?: InputMaybe<Scalars['String']['input']>;
  /** URL восстановления пароля */
  forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  /** URL входа */
  login_url?: InputMaybe<Scalars['String']['input']>;
  /** Модуль */
  module_id: Scalars['ID']['input'];
  /** Название */
  name: Scalars['String']['input'];
  /** Настройки */
  project_settings?: InputMaybe<Array<InputMaybe<InputProjectSettings>>>;
  /** Имя отправителя SMS */
  sms_sender_name?: InputMaybe<Scalars['String']['input']>;
  /** Состояние */
  state_id?: InputMaybe<Scalars['ID']['input']>;
  /** Email поддержки */
  support_email?: InputMaybe<Scalars['String']['input']>;
  /** URL */
  url?: InputMaybe<Scalars['String']['input']>;
};

export type InputProjectApiSetting = {
  /** API ключ */
  api_key: Scalars['String']['input'];
  /** is_active */
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Пароль */
  password: Scalars['String']['input'];
  /** payment_provider_id */
  provider_id: Scalars['ID']['input'];
  /** payment_provider_type */
  provider_type: ProviderTypeEnum;
  /** Кошелек */
  wallet: Scalars['String']['input'];
};

export type InputProjectSettings = {
  applicant_type: ApplicantType;
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  group_role_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  iban_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};

export type InputRegion = {
  /** ID компании */
  company_id: Scalars['ID']['input'];
  /** Массив стран */
  countries?: InputMaybe<PivotTable>;
  /** Название региона */
  name: Scalars['String']['input'];
};

/** KYC Timeline */
export type KycTimeline = {
  __typename?: 'KycTimeline';
  /** Действие */
  action: Scalars['String']['output'];
  /** Новые значения */
  action_new_value?: Maybe<Scalars['JSON']['output']>;
  /** Старые значения */
  action_old_value?: Maybe<Scalars['JSON']['output']>;
  action_type: KycTimelineActionType;
  /** Аппликант */
  applicant?: Maybe<Client>;
  /** ID аппликанта */
  applicant_id: Scalars['ID']['output'];
  /** Тип аппликанта */
  applicant_type: ApplicantType;
  /** Браузер */
  browser: Scalars['String']['output'];
  /** Компания */
  company?: Maybe<Company>;
  /** Дата добавления */
  created_at: Scalars['DateTimeUtc']['output'];
  /** Мембер */
  creator?: Maybe<Members>;
  /** Документ */
  document?: Maybe<ApplicantDocument>;
  /** ID */
  id: Scalars['ID']['output'];
  /** IP адрес */
  ip: Scalars['String']['output'];
  /** ОС */
  os: Scalars['String']['output'];
  /** Тег */
  tag: Scalars['String']['output'];
};

export enum KycTimelineActionType {
  DocumentState = 'DOCUMENT_STATE',
  DocumentUpload = 'DOCUMENT_UPLOAD',
  Email = 'EMAIL',
  Profile = 'PROFILE',
  Verification = 'VERIFICATION'
}

export type KycTimelines = {
  __typename?: 'KycTimelines';
  data?: Maybe<Array<KycTimeline>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

/** Языки */
export type Languages = {
  __typename?: 'Languages';
  id: Scalars['ID']['output'];
  /** ISO код языка */
  iso: Scalars['String']['output'];
  /** Язык */
  name: Scalars['String']['output'];
};

/** A paginated list of Languages items. */
export type LanguagesPaginator = {
  __typename?: 'LanguagesPaginator';
  /** A list of Languages items. */
  data: Array<Languages>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Участники
 * Administration->Members->MemberAccessLimitation
 */
export type MemberAccessLimitation = {
  __typename?: 'MemberAccessLimitation';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить GroupType */
  group?: Maybe<GroupType>;
  /** Получить groupRole */
  group_roles?: Maybe<Array<Maybe<GroupRole>>>;
  id: Scalars['ID']['output'];
  /** Получить Group */
  member?: Maybe<Members>;
  /** Получить модуль */
  module?: Maybe<Module>;
  /** Получить проект */
  project?: Maybe<Project>;
  /** Получить связанный платежный провайдер */
  provider?: Maybe<PaymentProvider>;
  /** Показать только своих аппликантов */
  see_own_applicants?: Maybe<Scalars['Boolean']['output']>;
};

/** A paginated list of MemberAccessLimitation items. */
export type MemberAccessLimitationPaginator = {
  __typename?: 'MemberAccessLimitationPaginator';
  /** A list of MemberAccessLimitation items. */
  data: Array<MemberAccessLimitation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type MemberProfile = {
  __typename?: 'MemberProfile';
  /** Access limitation groups */
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  /** Дополнительны поля */
  additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительны поля для member info */
  additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  /** Member Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  /** получить компанию участника */
  company: Company;
  /** получить страну участника */
  country?: Maybe<Country>;
  /** Получить департамент */
  department?: Maybe<Department>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']['output']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  /** Получить группу участника */
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  /** Member ip address */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** Активен = true или не активный = false участник */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** если true видит только своих аппликантов */
  is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  /** Подписывать или нет транзакцию */
  is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  /** Получить язык участника */
  language?: Maybe<Languages>;
  /** Последняя авторизация */
  last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']['output']>;
  /** Получить должность */
  position?: Maybe<DepartmentPosition>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']['output']>;
  /** Пол участника */
  sex?: Maybe<Sex>;
  /** ID настройки двухфактороной авторизации */
  two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  /** Получить настройки двухфакторной авторизации */
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

/** Статусы мембера */
export type MemberStatus = {
  __typename?: 'MemberStatus';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * Участники
 * Administration->Members
 */
export type Members = {
  __typename?: 'Members';
  /** Access limitation groups */
  access_groups?: Maybe<Array<Maybe<MemberAccessLimitation>>>;
  /** Дополнительны поля */
  additional_fields?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительны поля для member info */
  additional_info_fields?: Maybe<Scalars['JSON']['output']>;
  /** Member Backup Codes */
  backup_codes?: Maybe<Scalars['JSON']['output']>;
  /** получить компанию участника */
  company?: Maybe<Company>;
  /** получить страну участника */
  country?: Maybe<Country>;
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить департамент */
  department?: Maybe<Department>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Верификация email */
  email_verification?: Maybe<EmailVerification>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']['output']>;
  /** Google Secret */
  google2fa_secret?: Maybe<Scalars['String']['output']>;
  /** Получить группу участника */
  group?: Maybe<GroupRole>;
  id: Scalars['ID']['output'];
  /** Member ip address */
  ip_addresses?: Maybe<Array<Maybe<ClientIpAddress>>>;
  /** если true видит только своих аппликантов */
  is_show_owner_applicants?: Maybe<Scalars['Boolean']['output']>;
  /** Подписывать или нет транзакцию */
  is_sign_transaction?: Maybe<Scalars['Boolean']['output']>;
  /** Должность */
  job_title?: Maybe<Scalars['String']['output']>;
  /** Получить язык участника */
  language?: Maybe<Languages>;
  /** Последняя авторизация */
  last_login_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']['output']>;
  /** Статус участника */
  member_status?: Maybe<MemberStatus>;
  /** Фото */
  photo?: Maybe<Files>;
  /** Получить должность */
  position?: Maybe<DepartmentPosition>;
  /** Security PIN */
  security_pin?: Maybe<Scalars['String']['output']>;
  /** Пол участника */
  sex?: Maybe<Sex>;
  /** ID настройки двухфактороной авторизации */
  two_factor_auth_setting_id?: Maybe<Scalars['ID']['output']>;
  /** Получить настройки двухфакторной авторизации */
  two_factor_auth_settings?: Maybe<TwoFactorAuthSettings>;
};

/** A paginated list of Members items. */
export type MembersPaginator = {
  __typename?: 'MembersPaginator';
  /** A list of Members items. */
  data: Array<Members>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Управление модулями
 * Dashboard -> Applicants -> Company->Full Profile -> Settings
 */
export type Module = {
  __typename?: 'Module';
  id: Scalars['ID']['output'];
  /** Название модуля */
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Добавить модули */
  addCompanyModule?: Maybe<Company>;
  /** Создать метку компании */
  attachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Прикрепить тег к документу */
  attachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  /** Создать метку аппликанту */
  attachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Отменить исходящий FEE перевод */
  cancelTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Создать аккаунт */
  createAccount: Array<Account>;
  /** Создать лимит */
  createAccountLimit?: Maybe<AccountLimit>;
  /** Регистрация частного пользователя */
  createApplicant?: Maybe<ApplicantSettingsProfile>;
  /** Создать applicant company */
  createApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Создать applicant company */
  createApplicantCompany?: Maybe<ApplicantCompany>;
  /** Создать бизнес тип */
  createApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Создать метку */
  createApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Создать модуль компании */
  createApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Создать заметку */
  createApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Добавить запись */
  createApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Добавить документ */
  createApplicantDocument?: Maybe<ApplicantDocument>;
  /** Добавить заметку к документу */
  createApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  /** Создать отклонение документа */
  createApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Добавить тег */
  createApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Добавить категорию */
  createApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Создать частного пользователя */
  createApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Добавить связь Individual с Company */
  createApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Создать должность */
  createApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Создать отношение */
  createApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Создать метку */
  createApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Создать модуль аппликанта */
  createApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Создать заметку */
  createApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Создать модуль */
  createApplicantModule?: Maybe<ApplicantModules>;
  /** Добавить запись */
  createApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Создать причину */
  createApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Создать банк корреспондент */
  createBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Создание Business Activity */
  createBusinessActivity?: Maybe<BusinessActivity>;
  /** Создать прай лист */
  createCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Создание шаблона комиссий */
  createCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Создать лимит */
  createCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Создать компанию */
  createCompany?: Maybe<Company>;
  /** Добавить IBAN провайдер к модулю компании */
  createCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Добавить пеймент провайдер к модулю компании */
  createCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Создать департамент */
  createDepartment?: Maybe<Department>;
  /** Создание должности */
  createDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Добавить тип документа */
  createDocumentType?: Maybe<DocumentType>;
  /** Создать уведомление */
  createEmailNotification?: Maybe<EmailNotification>;
  /** Создать смтп */
  createEmailSmtp?: Maybe<EmailSmtp>;
  /** Создать электронную почту */
  createEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  /** Создать электронную почту */
  createEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Создать группу */
  createGroupSettings?: Maybe<GroupRole>;
  /** Создать участника */
  createMember?: Maybe<Members>;
  /** Создать ограничение доступа */
  createMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Создать модуль */
  createModule?: Maybe<Module>;
  /** Создать платеж */
  createPayment?: Maybe<Payments>;
  /** Создать банк */
  createPaymentBank?: Maybe<PaymentBank>;
  /** Создать платежный провайдер */
  createPaymentProvider?: Maybe<PaymentProvider>;
  /** Создать */
  createPaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Создать платежную систему */
  createPaymentSystem?: Maybe<PaymentSystem>;
  /** Создать Цен */
  createPriceListFees?: Maybe<PriceListFee>;
  /** Создать проект */
  createProject?: Maybe<Project>;
  createRegion?: Maybe<Region>;
  createRole?: Maybe<Role>;
  /** Создать компанию */
  createTicket?: Maybe<Ticket>;
  /** Создать комментарии */
  createTicketComment?: Maybe<TicketComments>;
  /** Создать исходящий перевод */
  createTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Создать исходящий Fee перевод */
  createTransferOutgoingFee?: Maybe<TransferOutgoing>;
  /** Удалить аккаунт */
  deleteAccount?: Maybe<Account>;
  /** Удалить лимит */
  deleteAccountLimit?: Maybe<AccountLimit>;
  /** Отозвать доступ */
  deleteApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Удалить пользователя */
  deleteApplicantBankingMember?: Maybe<ApplicantBankingAccess>;
  /** Удалить applicant company */
  deleteApplicantCompany?: Maybe<ApplicantCompany>;
  /** Удалит метку */
  deleteApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Удалить модуль */
  deleteApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Удалит заметку */
  deleteApplicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /** Удалить запись */
  deleteApplicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistory>;
  /** Удалить устройство */
  deleteApplicantDevice?: Maybe<ApplicantDevice>;
  /** Удалить документ */
  deleteApplicantDocument?: Maybe<ApplicantDocument>;
  /** Удалить заметку */
  deleteApplicantDocumentInternalNote?: Maybe<ApplicantDocumentInternalNote>;
  /** Удалить отклонение документа */
  deleteApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Удалить тег */
  deleteApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Удалить категорию */
  deleteApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Удалить пользователя */
  deleteApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Удалить связь Individual с Company */
  deleteApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Удаление должности */
  deleteApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Удалить отношения */
  deleteApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Удалить метку */
  deleteApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Удалить модуль */
  deleteApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Удалит заметку */
  deleteApplicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /** Удалить запись */
  deleteApplicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistory>;
  /** Удалит метку */
  deleteApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Удалить банк корреспондент */
  deleteBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Удалить прайс лист */
  deleteCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Удалить шаблон */
  deleteCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Удалить лимит */
  deleteCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Удалить компанию */
  deleteCompany?: Maybe<Company>;
  /** Удалить модули */
  deleteCompanyModule?: Maybe<Company>;
  /** Удалить IBAN провайдер */
  deleteCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Удалить пеймент провайдер */
  deleteCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Удалить департамент */
  deleteDepartment?: Maybe<Department>;
  /** Удалить должность */
  deleteDepartmentPosition?: Maybe<DepartmentPosition>;
  /** Удалить тип документа */
  deleteDocumentType?: Maybe<DocumentType>;
  /** Удалить запись */
  deleteEmailNotification?: Maybe<EmailNotification>;
  /** Удалить запись */
  deleteEmailSmtp: Array<EmailSmtp>;
  /** Удалить запись */
  deleteEmailTemplate?: Maybe<EmailTemplate>;
  /** Удалить запись */
  deleteEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Удалить файл */
  deleteFile?: Maybe<Files>;
  /** Удаление группы */
  deleteGroup?: Maybe<GroupRole>;
  /** Удалить участника */
  deleteMember?: Maybe<Members>;
  /** Удалить ограничение доступа */
  deleteMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Удалить платеж */
  deletePayment?: Maybe<Payments>;
  /** Удалить платежную систему */
  deletePaymentBank?: Maybe<PaymentBank>;
  /** Удалить платежный провайдер */
  deletePaymentProvider?: Maybe<PaymentProvider>;
  /** Удалить */
  deletePaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Удалить платежную систему */
  deletePaymentSystem?: Maybe<PaymentSystem>;
  /** Удалить Цен */
  deletePriceListFees?: Maybe<PriceListFee>;
  /** Удалить проект */
  deleteProject?: Maybe<Project>;
  deleteRegion?: Maybe<Region>;
  deleteRole?: Maybe<Role>;
  /** Удалить тег из отклонения документа */
  deleteTagApplicantDocumentRejectDetail?: Maybe<ApplicantDocumentRejectDetail>;
  /** Удалить метку */
  detachApplicantCompanyLabel?: Maybe<ApplicantCompany>;
  /** Открепить тег от документа */
  detachApplicantDocumentTag?: Maybe<ApplicantDocument>;
  /** Удалить метку */
  detachApplicantIndividualLabel?: Maybe<ApplicantIndividual>;
  /** Генерация iban individual */
  generateIban: AccountGenerateIbanResponse;
  /** Предоставить доступ */
  grantApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Сбросить пароль участнику */
  resetMemberPassword?: Maybe<Members>;
  /** Отправить письмо с подтверждением смены email */
  sendConfirmChangeEmail?: Maybe<StatusType>;
  sendEmail?: Maybe<StatusType>;
  /** Отправить ссылку на регистрацию */
  sendEmailRegistation?: Maybe<ApplicantIndividual>;
  /** Сбросить пароль участнику */
  sendEmailResetPassword?: Maybe<ApplicantIndividual>;
  /** Отправить ссылку для подтверждения email */
  sendEmailVerification?: Maybe<ApplicantIndividual>;
  /** Отправить ссылку для подтверждения email */
  sendEmailVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  sendEmailWithTemplate?: Maybe<StatusType>;
  /** Отправить ссылку для подтверждения email */
  sendMemberEmailVerification?: Maybe<Members>;
  /** Отправить подтверждение телефона */
  sendPhoneVerification?: Maybe<ApplicantIndividual>;
  /** Отправить подтверждение телефона */
  sendPhoneVerificationApplicantCompany?: Maybe<ApplicantCompany>;
  /** Установить пароль */
  setApplicantIndividualPassword?: Maybe<ApplicantIndividual>;
  /** Установить PIN пользователю */
  setApplicantSecurityPin?: Maybe<ApplicantIndividual>;
  /** Установить пароль */
  setApplicantSettingsPassword?: Maybe<TwoFactorAuthToken>;
  /** Установить пароль c OTP */
  setApplicantSettingsPasswordWithOtp?: Maybe<ApplicantSettingsProfile>;
  /** Установить статус aActive */
  setMemberActive?: Maybe<Members>;
  /** Добавить группу мемберу */
  setMemberGroup?: Maybe<GroupRole>;
  /** Установить статус Inactive */
  setMemberInactive?: Maybe<Members>;
  /** Установить пароль участника */
  setMemberPassword?: Maybe<Members>;
  /** Установить PIN участнику */
  setMemberSecurityPin?: Maybe<Members>;
  /** Установить статус Suspended */
  setMemberSuspended?: Maybe<Members>;
  /** Редактирование аккаунта */
  updateAccount?: Maybe<Account>;
  /** Обновить лимит */
  updateAccountLimit?: Maybe<AccountLimit>;
  /** Изменение Active Session */
  updateActiveSession: ActiveSessionMutatorResponse;
  /** Изменение аккаунта */
  updateApplicantAccount: ApplicantAccount;
  /** Редактирование applicant banking access */
  updateApplicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /** Редактирование applicant company */
  updateApplicantCompany?: Maybe<ApplicantCompany>;
  /** Редактирование отнощения */
  updateApplicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessType>;
  /** Редактирование метки */
  updateApplicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /** Активировать модуль applicant company */
  updateApplicantCompanyModule?: Maybe<ApplicantCompany>;
  /** Изменить статус applicant company */
  updateApplicantCompanyVerificationStatus?: Maybe<ApplicantCompany>;
  /** Изменение устройства */
  updateApplicantDevice: TwoFactorAuthToken;
  /** Подтверждение изменения устройства c OTP */
  updateApplicantDeviceWithOtp: ApplicantDevice;
  /** Обновить документ */
  updateApplicantDocument?: Maybe<ApplicantDocument>;
  /** Обновить тег */
  updateApplicantDocumentTag?: Maybe<ApplicantDocumentTag>;
  /** Обновить категорию */
  updateApplicantDocumentTagCategory?: Maybe<ApplicantDocumentTagCategory>;
  /** Редактирование частного пользователя */
  updateApplicantIndividual?: Maybe<ApplicantIndividual>;
  /** Редактировать связь Individual с Company */
  updateApplicantIndividualCompany?: Maybe<ApplicantIndividualCompany>;
  /** Редактирование должности */
  updateApplicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /** Редактирование отношения */
  updateApplicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /** Редактирование метки */
  updateApplicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /** Активировать или деактивировать модуль аппликанту */
  updateApplicantIndividualModule?: Maybe<ApplicantIndividual>;
  /** Изменить статус аппликанта */
  updateApplicantIndividualVerificationStatus?: Maybe<ApplicantIndividual>;
  /** Обновить профиль пользователя */
  updateApplicantProfile?: Maybe<ApplicantProfile>;
  /** Редактирование причины */
  updateApplicantStateReason?: Maybe<ApplicantStateReason>;
  /** Обновить банк корреспондент */
  updateBankCorrespondent?: Maybe<BankCorrespondent>;
  /** Изменение Business Activity */
  updateBusinessActivity?: Maybe<BusinessActivity>;
  /** Редактирование частного пользователя */
  updateCommissionPriceList?: Maybe<CommissionPriceList>;
  /** Обновление полей шаблона комиссий */
  updateCommissionTemplate?: Maybe<CommissionTemplate>;
  /** Обновить лимит */
  updateCommissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Обновить данные компании */
  updateCompany?: Maybe<Company>;
  /** Активировать/деактивировать модуль */
  updateCompanyModule?: Maybe<CompanyModule>;
  /** Изменить IBAN провайдер */
  updateCompanyModuleIbanProvider?: Maybe<CompanyModuleIbanProvider>;
  /** Изменить пеймент провайдер */
  updateCompanyModulePaymentProvider?: Maybe<CompanyModulePaymentProvider>;
  /** Изменить название департамента */
  updateDepartment?: Maybe<Department>;
  /** Обновить данные уведомления */
  updateEmailNotification?: Maybe<EmailNotification>;
  /** Обновить данные смтп */
  updateEmailSmtp?: Maybe<EmailSmtp>;
  /** Обновить данные компании */
  updateEmailTemplate?: Maybe<EmailTemplateOnCompanyResponse>;
  /** Обновить данные компании */
  updateEmailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /** Обновить поля группы */
  updateGroupSettings?: Maybe<GroupRole>;
  /** Обновить поля участника */
  updateMember?: Maybe<Members>;
  /** Обновить ограничение доступа */
  updateMemberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /** Обновить профиль пользователя */
  updateMemberProfile?: Maybe<MemberProfile>;
  /** Редактировать платеж */
  updatePayment?: Maybe<Payments>;
  /** Обновить поля банка */
  updatePaymentBank?: Maybe<PaymentBank>;
  /** Обновить поля платежного провайдера */
  updatePaymentProvider?: Maybe<PaymentProvider>;
  /** Обновить */
  updatePaymentProviderIban?: Maybe<PaymentProviderIban>;
  /** Обновить поля платежной системы */
  updatePaymentSystem?: Maybe<PaymentSystem>;
  /** Обновить данные Цен */
  updatePriceListFees?: Maybe<PriceListFee>;
  /** Обновить проект */
  updateProject?: Maybe<Project>;
  /** Изменить настройки api проекта */
  updateProjectApiSetting: Array<ProjectApiSetting>;
  updateRegion?: Maybe<Region>;
  updateRole?: Maybe<Role>;
  /** Обновить данные компании */
  updateTicket?: Maybe<Ticket>;
  /** Редактировать исходящий перевод */
  updateTransferOutgoing?: Maybe<TransferOutgoing>;
  /** Редактировать исходящий FEE перевод */
  updateTransferOutgoingFee?: Maybe<TransferOutgoing>;
};


export type MutationAddCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationAttachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationAttachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationAttachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCancelTransferOutgoingFeeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationCreateAccountArgs = {
  input: InputAccount;
};


export type MutationCreateAccountLimitArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  commission_template_limit_action_type_id: Scalars['ID']['input'];
  commission_template_limit_period_id: Scalars['ID']['input'];
  commission_template_limit_transfer_direction_id: Scalars['ID']['input'];
  commission_template_limit_type_id: Scalars['ID']['input'];
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateApplicantArgs = {
  client_type: ApplicantClientType;
  company_name?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  last_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
  phone: Scalars['String']['input'];
  url?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateApplicantBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  contact_administrator: Scalars['Boolean']['input'];
  daily_limit: Scalars['Decimal']['input'];
  monthly_limit: Scalars['Decimal']['input'];
  operation_limit: Scalars['Decimal']['input'];
  role_id: Scalars['ID']['input'];
  used_limit?: InputMaybe<Scalars['Decimal']['input']>;
};


export type MutationCreateApplicantCompanyArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantCompanyBusinessTypeArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateApplicantCompanyNoteArgs = {
  applicant_company_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantDocumentArgs = {
  added_from?: InputMaybe<Scalars['String']['input']>;
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  document_type_id: Scalars['ID']['input'];
  file_id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};


export type MutationCreateApplicantDocumentInternalNoteArgs = {
  applicant_document_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantDocumentRejectDetailArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<Scalars['ID']['input']>;
};


export type MutationCreateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantDocumentTagCategoryArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualArgs = {
  company_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  phone: Scalars['String']['input'];
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id: Scalars['ID']['input'];
  applicant_individual_company_relation_id: Scalars['ID']['input'];
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationCreateApplicantIndividualCompanyPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualCompanyRelationArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualLabelArgs = {
  hex_color_code: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateApplicantIndividualNoteArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type MutationCreateApplicantModuleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  comment: Scalars['String']['input'];
  risk_level_id: Scalars['ID']['input'];
};


export type MutationCreateApplicantStateReasonArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: Array<InputMaybe<Scalars['ID']['input']>>;
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationCreateBusinessActivityArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateCommissionPriceListArgs = {
  commission_template_id: Scalars['ID']['input'];
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  provider_id: Scalars['ID']['input'];
  region_id: Scalars['ID']['input'];
};


export type MutationCreateCommissionTemplateArgs = {
  input: InputCommissionTemplate;
};


export type MutationCreateCommissionTemplateLimitArgs = {
  input: InputCommissionTemplateLimit;
};


export type MutationCreateCompanyArgs = {
  country_id: Scalars['ID']['input'];
  email: Scalars['EMAIL']['input'];
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};


export type MutationCreateCompanyModuleIbanProviderArgs = {
  input: InputCompanyModuleIbanProvider;
};


export type MutationCreateCompanyModulePaymentProviderArgs = {
  input: InputCompanyModulePaymentProvider;
};


export type MutationCreateDepartmentArgs = {
  company_id: Scalars['ID']['input'];
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: Scalars['String']['input'];
};


export type MutationCreateDepartmentPositionArgs = {
  company_id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationCreateDocumentTypeArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  templates: Array<InputMaybe<Scalars['Int']['input']>>;
};


export type MutationCreateEmailSmtpArgs = {
  company_id: Scalars['ID']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};


export type MutationCreateEmailTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  service_type: ServiceType;
  subject: Scalars['String']['input'];
  type: ClientType;
  use_layout: Scalars['Boolean']['input'];
};


export type MutationCreateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer: Scalars['String']['input'];
  header: Scalars['String']['input'];
};


export type MutationCreateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationCreateMemberArgs = {
  company_id: Scalars['ID']['input'];
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['EMAIL']['input'];
  first_name: Scalars['String']['input'];
  group_id: Scalars['ID']['input'];
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name: Scalars['String']['input'];
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  send_email?: InputMaybe<Scalars['Boolean']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id: Scalars['ID']['input'];
};


export type MutationCreateMemberAccessLimitationArgs = {
  input: InputMemberAccessLimitation;
};


export type MutationCreateModuleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreatePaymentArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  amount_real?: InputMaybe<Scalars['Decimal']['input']>;
  beneficiary_additional_data?: InputMaybe<Scalars['JSON']['input']>;
  beneficiary_address: Scalars['String']['input'];
  beneficiary_city: Scalars['String']['input'];
  beneficiary_country_id: Scalars['ID']['input'];
  beneficiary_name: Scalars['String']['input'];
  beneficiary_state: Scalars['String']['input'];
  beneficiary_zip: Scalars['String']['input'];
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  fee?: InputMaybe<Scalars['Decimal']['input']>;
  fee_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  price_list_fees_id: Scalars['ID']['input'];
  recipient_account: Scalars['String']['input'];
  recipient_bank_address: Scalars['String']['input'];
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name: Scalars['String']['input'];
  recipient_bank_swift: Scalars['String']['input'];
  respondent_fees_id: Scalars['ID']['input'];
  urgency_id: Scalars['ID']['input'];
};


export type MutationCreatePaymentBankArgs = {
  input: InputPaymentBank;
};


export type MutationCreatePaymentProviderArgs = {
  input: InputPaymentProvider;
};


export type MutationCreatePaymentProviderIbanArgs = {
  input: InputPaymentProviderIban;
};


export type MutationCreatePaymentSystemArgs = {
  input: InputPaymentSystem;
};


export type MutationCreatePriceListFeesArgs = {
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationCreateProjectArgs = {
  input: InputProject;
};


export type MutationCreateRegionArgs = {
  input: InputRegion;
};


export type MutationCreateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationCreateTicketArgs = {
  client_id: Scalars['ID']['input'];
  member_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  status?: InputMaybe<Scalars['Int']['input']>;
  title: Scalars['String']['input'];
};


export type MutationCreateTicketCommentArgs = {
  client_id: Scalars['ID']['input'];
  message: Scalars['String']['input'];
  ticket_id: Scalars['ID']['input'];
};


export type MutationCreateTransferOutgoingArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};


export type MutationCreateTransferOutgoingFeeArgs = {
  account_id: Scalars['ID']['input'];
  amount: Scalars['Decimal']['input'];
  bank_message?: InputMaybe<Scalars['String']['input']>;
  company_id: Scalars['ID']['input'];
  currency_id: Scalars['ID']['input'];
  execution_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  group_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  operation_type_id: Scalars['ID']['input'];
  payment_provider_id: Scalars['ID']['input'];
  payment_system_id: Scalars['ID']['input'];
  price_list_fee_id: Scalars['ID']['input'];
  price_list_id: Scalars['ID']['input'];
  project_id: Scalars['ID']['input'];
  recipient_account?: InputMaybe<Scalars['String']['input']>;
  recipient_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_address?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_country_id: Scalars['ID']['input'];
  recipient_bank_name?: InputMaybe<Scalars['String']['input']>;
  recipient_bank_swift?: InputMaybe<Scalars['String']['input']>;
  recipient_city?: InputMaybe<Scalars['String']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  recipient_state?: InputMaybe<Scalars['String']['input']>;
  recipient_zip?: InputMaybe<Scalars['String']['input']>;
  requested_by_id: Scalars['ID']['input'];
};


export type MutationDeleteAccountArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteAccountLimitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantBankingMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDeleteApplicantCompanyNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantCompanyRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentInternalNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentRejectDetailArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyPositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualCompanyRelationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualLabelArgs = {
  deleteAnyway?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDeleteApplicantIndividualNoteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantRiskLevelHistoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionPriceListArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModuleArgs = {
  company_id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDepartmentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDepartmentPositionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteDocumentTypeArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailTemplateArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEmailTemplateLayoutArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentBankArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentProviderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePaymentSystemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePriceListFeesArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProjectArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRegionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagApplicantDocumentRejectDetailArgs = {
  applicant_document_tag_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
};


export type MutationDetachApplicantCompanyLabelArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_company_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationDetachApplicantDocumentTagArgs = {
  applicant_document_id: Scalars['ID']['input'];
  applicant_document_tag_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDetachApplicantIndividualLabelArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  applicant_individual_label_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationGenerateIbanArgs = {
  id: Scalars['ID']['input'];
};


export type MutationGrantApplicantBankingAccessArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendConfirmChangeEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationSendEmailArgs = {
  email: Scalars['String']['input'];
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  port: Scalars['Int']['input'];
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username: Scalars['String']['input'];
};


export type MutationSendEmailRegistationArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendEmailResetPasswordArgs = {
  applicant_id: Scalars['ID']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
};


export type MutationSendEmailVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};


export type MutationSendEmailVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type MutationSendEmailWithTemplateArgs = {
  company_id: Scalars['ID']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  subject: Scalars['String']['input'];
};


export type MutationSendMemberEmailVerificationArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSendPhoneVerificationArgs = {
  applicant_id: Scalars['ID']['input'];
};


export type MutationSendPhoneVerificationApplicantCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type MutationSetApplicantIndividualPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetApplicantSecurityPinArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetApplicantSettingsPasswordArgs = {
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetApplicantSettingsPasswordWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  current_password: Scalars['String']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetMemberActiveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberGroupArgs = {
  group_type_id: Scalars['ID']['input'];
  providers?: InputMaybe<Array<InputGroupRoleProvider>>;
  role_id: Scalars['ID']['input'];
};


export type MutationSetMemberInactiveArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberPasswordArgs = {
  id: Scalars['ID']['input'];
  password: Scalars['String']['input'];
  password_confirmation: Scalars['String']['input'];
};


export type MutationSetMemberSecurityPinArgs = {
  id: Scalars['ID']['input'];
};


export type MutationSetMemberSuspendedArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdateAccountArgs = {
  account_name: Scalars['String']['input'];
  account_state_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_primary: Scalars['Boolean']['input'];
};


export type MutationUpdateAccountLimitArgs = {
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  period_count?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateActiveSessionArgs = {
  id: Scalars['String']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantAccountArgs = {
  id: Scalars['ID']['input'];
  is_show: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantBankingAccessArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  contact_administrator?: InputMaybe<Scalars['Boolean']['input']>;
  daily_limit?: InputMaybe<Scalars['Decimal']['input']>;
  id: Scalars['ID']['input'];
  monthly_limit?: InputMaybe<Scalars['Decimal']['input']>;
  operation_limit?: InputMaybe<Scalars['Decimal']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateApplicantCompanyArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address2?: InputMaybe<Scalars['String']['input']>;
  applicant_company_business_type_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  basic_info_additional_field?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  company_info_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_type?: InputMaybe<Scalars['String']['input']>;
  contact_email?: InputMaybe<Scalars['EMAIL']['input']>;
  contact_phone?: InputMaybe<Scalars['String']['input']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  expires_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  office_address?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['ID']['input']>;
  owner_position_id?: InputMaybe<Scalars['ID']['input']>;
  owner_relation_id?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  reg_at?: InputMaybe<Scalars['Date']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  tax?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantCompanyBusinessTypeArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantCompanyLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantCompanyModuleArgs = {
  applicant_company_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateApplicantCompanyVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateApplicantDeviceArgs = {
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantDeviceWithOtpArgs = {
  auth_token: Scalars['String']['input'];
  code: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  trusted: Scalars['Boolean']['input'];
};


export type MutationUpdateApplicantDocumentArgs = {
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  info?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantDocumentTagArgs = {
  category_id: Scalars['ID']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantDocumentTagCategoryArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualArgs = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  address_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  applicant_risk_level_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  birth_at?: InputMaybe<Scalars['Date']['input']>;
  birth_city?: InputMaybe<Scalars['String']['input']>;
  birth_country_id?: InputMaybe<Scalars['ID']['input']>;
  birth_state?: InputMaybe<Scalars['String']['input']>;
  citizenship_country_id?: InputMaybe<Scalars['ID']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  contacts_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_verification_phone?: InputMaybe<Scalars['Boolean']['input']>;
  kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  labels?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_screened_at?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  middle_name?: InputMaybe<Scalars['String']['input']>;
  module_ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  personal_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  phone?: InputMaybe<Scalars['String']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  profile_additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  state?: InputMaybe<Scalars['String']['input']>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantIndividualCompanyArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_id: Scalars['ID']['input'];
  applicant_individual_company_position_id?: InputMaybe<Scalars['ID']['input']>;
  applicant_individual_company_relation_id?: InputMaybe<Scalars['ID']['input']>;
  percentage_owned?: InputMaybe<Scalars['Float']['input']>;
};


export type MutationUpdateApplicantIndividualCompanyPositionArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualCompanyRelationArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualLabelArgs = {
  hex_color_code?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateApplicantIndividualModuleArgs = {
  applicant_individual_id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateApplicantIndividualVerificationStatusArgs = {
  applicant_status_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
};


export type MutationUpdateApplicantProfileArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  notify_device_email?: InputMaybe<Scalars['Boolean']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateApplicantStateReasonArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateBankCorrespondentArgs = {
  address: Scalars['String']['input'];
  bank_account: Scalars['String']['input'];
  bank_code: Scalars['String']['input'];
  currency_id: Array<InputMaybe<Scalars['ID']['input']>>;
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  payment_system_id: Scalars['ID']['input'];
  region_id: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdateBusinessActivityArgs = {
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateCommissionPriceListArgs = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  provider_id?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateCommissionTemplateArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplate;
};


export type MutationUpdateCommissionTemplateLimitArgs = {
  id: Scalars['ID']['input'];
  input: InputCommissionTemplateLimit;
};


export type MutationUpdateCompanyArgs = {
  additional_fields_basic?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_data?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_info?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_fields_settings?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  address?: InputMaybe<Scalars['String']['input']>;
  backoffice_forgot_password_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_login_url?: InputMaybe<Scalars['String']['input']>;
  backoffice_support_email?: InputMaybe<Scalars['EMAIL']['input']>;
  backoffice_support_url?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  company_number?: InputMaybe<Scalars['String']['input']>;
  contact_name?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  employees_id?: InputMaybe<Scalars['ID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  exp_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  id: Scalars['ID']['input'];
  incorporate_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  license_number?: InputMaybe<Scalars['String']['input']>;
  logo_id?: InputMaybe<Scalars['ID']['input']>;
  member_verify_url?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  reg_address?: InputMaybe<Scalars['String']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  state_id?: InputMaybe<Scalars['ID']['input']>;
  state_reason_id?: InputMaybe<Scalars['ID']['input']>;
  tax_id?: InputMaybe<Scalars['String']['input']>;
  type_of_industry_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  vv_token?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateCompanyModuleArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateCompanyModuleIbanProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateCompanyModulePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  is_active: Scalars['Boolean']['input'];
};


export type MutationUpdateDepartmentArgs = {
  department_positions_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['Int']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  templates?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};


export type MutationUpdateEmailSmtpArgs = {
  from_email?: InputMaybe<Scalars['String']['input']>;
  from_name?: InputMaybe<Scalars['String']['input']>;
  host_name?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  is_sending_mail?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  port?: InputMaybe<Scalars['Int']['input']>;
  replay_to?: InputMaybe<Scalars['String']['input']>;
  security?: InputMaybe<Securities>;
  username?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateEmailTemplateArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  service_type?: InputMaybe<ServiceType>;
  subject?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<ClientType>;
  use_layout?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateEmailTemplateLayoutArgs = {
  company_id: Scalars['Int']['input'];
  footer?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGroupSettingsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id: Scalars['ID']['input'];
  id: Scalars['ID']['input'];
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providers?: InputMaybe<Array<InputMaybe<InputGroupRoleProvider>>>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMemberArgs = {
  additional_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  additional_info_fields?: InputMaybe<Array<InputMaybe<AdditionalFieldInput>>>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_position_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  ip_address?: InputMaybe<Scalars['String']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  is_sign_transaction?: InputMaybe<Scalars['Boolean']['input']>;
  job_title?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
  photo_id?: InputMaybe<Scalars['ID']['input']>;
  sex?: InputMaybe<Sex>;
  two_factor_auth_setting_id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateMemberAccessLimitationArgs = {
  id: Scalars['ID']['input'];
  input: InputMemberAccessLimitation;
};


export type MutationUpdateMemberProfileArgs = {
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['EMAIL']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  language_id?: InputMaybe<Scalars['ID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdatePaymentArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['ID']['input'];
};


export type MutationUpdatePaymentBankArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentBank;
};


export type MutationUpdatePaymentProviderArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProvider;
};


export type MutationUpdatePaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentProviderIban;
};


export type MutationUpdatePaymentSystemArgs = {
  id: Scalars['ID']['input'];
  input: InputPaymentSystem;
};


export type MutationUpdatePriceListFeesArgs = {
  commission_price_list?: InputMaybe<Array<InputMaybe<PriceList>>>;
  id: Scalars['ID']['input'];
  input?: InputMaybe<PriceListFeeInput>;
};


export type MutationUpdateProjectArgs = {
  id: Scalars['ID']['input'];
  input: InputProject;
};


export type MutationUpdateProjectApiSettingArgs = {
  input: Array<InputProjectApiSetting>;
  project_id: Scalars['ID']['input'];
};


export type MutationUpdateRegionArgs = {
  id: Scalars['ID']['input'];
  input: InputRegion;
};


export type MutationUpdateRoleArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  permission_category_all_member?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};


export type MutationUpdateTicketArgs = {
  id: Scalars['ID']['input'];
  message?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
  status_id: Scalars['Int']['input'];
};


export type MutationUpdateTransferOutgoingFeeArgs = {
  amount: Scalars['Decimal']['input'];
  file_id?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: Scalars['ID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export enum NotifyType {
  Administration = 'Administration',
  Client = 'Client'
}

/** Типы операций */
export type OperationType = {
  __typename?: 'OperationType';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export enum OperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingWireTransfer = 'INCOMING_WIRE_TRANSFER',
  OutgoingWireTransfer = 'OUTGOING_WIRE_TRANSFER',
  ScheduledFees = 'SCHEDULED_FEES'
}

export enum Order {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type OrderBy = {
  column: Column;
  order: Order;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** Permission list name Account Details */
export enum Permission_Account_Details {
  Edit = 'EDIT',
  Read = 'READ',
  ShowBalance = 'SHOW_BALANCE',
  ShowProviderInfo = 'SHOW_PROVIDER_INFO',
  StatusActive = 'STATUS_ACTIVE',
  StatusClosed = 'STATUS_CLOSED',
  StatusPending = 'STATUS_PENDING',
  StatusSuspended = 'STATUS_SUSPENDED',
  WaitingForIBANActivation = 'WAITING_FOR_I_B_A_N_ACTIVATION'
}

/** Permission list name Dashboard */
export enum Permission_Dashboard {
  Feedback = 'FEEDBACK',
  InviteFriends = 'INVITE_FRIENDS',
  LastPayments = 'LAST_PAYMENTS',
  Yes = 'YES'
}

/** Permission list name Make Payments */
export enum Permission_Make_Payments {
  CreatePayments = 'CREATE_PAYMENTS',
  SignPayments = 'SIGN_PAYMENTS'
}

/** Permission list name My Net Worth */
export enum Permission_My_Net_Worth {
  Assets = 'ASSETS',
  Liabilities = 'LIABILITIES',
  Summary = 'SUMMARY',
  Yes = 'YES'
}

/** Permission list name My Templates */
export enum Permission_My_Templates {
  AddNew = 'ADD_NEW',
  Delete = 'DELETE',
  Edit = 'EDIT',
  Read = 'READ'
}

/** Permission list name Payment Details */
export enum Permission_Payment_Details {
  ExportPaymentDetails = 'EXPORT_PAYMENT_DETAILS',
  Read = 'READ'
}

/** Permission list name Payment List */
export enum Permission_Payment_List {
  CancelPayment = 'CANCEL_PAYMENT',
  Edit = 'EDIT',
  Read = 'READ'
}

/** Permission list name Requisites */
export enum Permission_Requisites {
  DownloadRequisites = 'DOWNLOAD_REQUISITES',
  Read = 'READ',
  SendRequisitesDetails = 'SEND_REQUISITES_DETAILS'
}

/** Permission list name Settings:Account */
export enum Permission_Settings_Account {
  Edit = 'EDIT',
  Read = 'READ'
}

/** Permission list name Settings:Contact Details */
export enum Permission_Settings_Contact_Details {
  Edit = 'EDIT',
  Read = 'READ'
}

/** Permission list name Settings:Log in Details */
export enum Permission_Settings_Log_In_Details {
  Edit = 'EDIT',
  MyDevice = 'MY_DEVICE',
  Read = 'READ',
  SecurePin = 'SECURE_PIN',
  TwoFactorAuthentication = 'TWO_FACTOR_AUTHENTICATION'
}

/** Permission list name Settings:Security Level */
export enum Permission_Settings_Security_Level {
  Edit = 'EDIT',
  Read = 'READ'
}

/** Permission list name Statements */
export enum Permission_Statements {
  ExportStatement = 'EXPORT_STATEMENT',
  Read = 'READ'
}

/** Permission list name Tickets */
export enum Permission_Tickets {
  CloseTicket = 'CLOSE_TICKET',
  NewTicket = 'NEW_TICKET',
  Read = 'READ',
  StatusClosed = 'STATUS_CLOSED',
  StatusNoReplyRequired = 'STATUS_NO_REPLY_REQUIRED',
  StatusOpened = 'STATUS_OPENED',
  StatusReplyRequired = 'STATUS_REPLY_REQUIRED'
}

/** Information about pagination using a Relay style cursor connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** Number of nodes in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** The cursor to continue paginating forwards. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** The cursor to continue paginating backwards. */
  startCursor?: Maybe<Scalars['String']['output']>;
  /** Total number of nodes in the paginated connection. */
  total: Scalars['Int']['output'];
};

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

/**
 * Банки
 * Settings->Payment System -> Payment System List -> Profile
 */
export type PaymentBank = {
  __typename?: 'PaymentBank';
  /** Адрес банка */
  address?: Maybe<Scalars['String']['output']>;
  /** Код банка */
  bank_code?: Maybe<Scalars['String']['output']>;
  /** Получить банк корреспондент */
  bank_correspondent?: Maybe<BankCorrespondent>;
  /** Страна */
  country?: Maybe<Country>;
  id: Scalars['ID']['output'];
  /** Активный не активный (true/false) */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название банка */
  name: Scalars['String']['output'];
  /** Платежная провидер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Платежная система */
  payment_system?: Maybe<PaymentSystem>;
  /** Код платежной системы */
  payment_system_code?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of PaymentBank items. */
export type PaymentBankPaginator = {
  __typename?: 'PaymentBankPaginator';
  /** A list of PaymentBank items. */
  data: Array<PaymentBank>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Платежные провайдеры
 * Banking -> Payment Providers
 */
export type PaymentProvider = {
  __typename?: 'PaymentProvider';
  commission_price_list?: Maybe<CommissionPriceList>;
  company?: Maybe<Company>;
  /** Описание провайдера */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Название провайдера */
  name: Scalars['String']['output'];
  /** Получить связанные платежные системы */
  payment_systems?: Maybe<Array<Maybe<PaymentSystem>>>;
};

export type PaymentProviderHistory = {
  __typename?: 'PaymentProviderHistory';
  /** Дата создания */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** ID провайдера */
  payment_provider_id: Scalars['ID']['output'];
  /** Информация от провайдера */
  provider_response?: Maybe<Scalars['JSON']['output']>;
  /** ID трансфера */
  transfer_id: Scalars['ID']['output'];
  /** Тип трансфера */
  transfer_type?: Maybe<Scalars['String']['output']>;
};

/** Payment Provider Iban */
export type PaymentProviderIban = {
  __typename?: 'PaymentProviderIban';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Получить валюту */
  currency?: Maybe<Currencies>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Активность */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Название */
  name: Scalars['String']['output'];
};

/** A paginated list of PaymentProviderIban items. */
export type PaymentProviderIbanPaginator = {
  __typename?: 'PaymentProviderIbanPaginator';
  /** A list of PaymentProviderIban items. */
  data: Array<PaymentProviderIban>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of PaymentProvider items. */
export type PaymentProviderPaginator = {
  __typename?: 'PaymentProviderPaginator';
  /** A list of PaymentProvider items. */
  data: Array<PaymentProvider>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Типы платежей */
export type PaymentStatus = {
  __typename?: 'PaymentStatus';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * Платежные системы
 * Settings->Payment System
 */
export type PaymentSystem = {
  __typename?: 'PaymentSystem';
  /** Получить банк корреспондент */
  bank_correspondent?: Maybe<BankCorrespondent>;
  /** Получить Реквизиты */
  banks?: Maybe<Array<Maybe<PaymentBank>>>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  /** Получить связанные валюты */
  currencies?: Maybe<Array<Maybe<Currencies>>>;
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** Активна или нет */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Лого */
  logo?: Maybe<Files>;
  /** Название платежной системы */
  name: Scalars['String']['output'];
  /** Получить типы операций */
  operations?: Maybe<Array<Maybe<OperationType>>>;
  /** Получить Платежные провайдеры */
  providers?: Maybe<PaymentProvider>;
  /** Получить связанные регионы */
  regions?: Maybe<Array<Maybe<Region>>>;
};

/** A paginated list of PaymentSystem items. */
export type PaymentSystemPaginator = {
  __typename?: 'PaymentSystemPaginator';
  /** A list of PaymentSystem items. */
  data: Array<PaymentSystem>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Срочность */
export type PaymentUrgency = {
  __typename?: 'PaymentUrgency';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * Платежи
 * Banking -> Payments List
 */
export type Payments = {
  __typename?: 'Payments';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal']['output'];
  amount_real: Scalars['Decimal']['output'];
  beneficiary_additional_data?: Maybe<Scalars['JSON']['output']>;
  beneficiary_address?: Maybe<Scalars['String']['output']>;
  beneficiary_city?: Maybe<Scalars['String']['output']>;
  beneficiary_country?: Maybe<Country>;
  beneficiary_name?: Maybe<Scalars['String']['output']>;
  beneficiary_state?: Maybe<Scalars['String']['output']>;
  beneficiary_zip?: Maybe<Scalars['String']['output']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  error?: Maybe<Scalars['String']['output']>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Комиссия */
  fee?: Maybe<Scalars['Decimal']['output']>;
  fee_type?: Maybe<FeeType>;
  id: Scalars['ID']['output'];
  /** Получить связанного мембера */
  member?: Maybe<Members>;
  /** Номер платежа */
  payment_number?: Maybe<Scalars['String']['output']>;
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанныую срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  price_list_fees?: Maybe<PriceListFee>;
  received_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Номер счета или IBAN получателя */
  recipient_account?: Maybe<Scalars['String']['output']>;
  recipient_bank_address?: Maybe<Scalars['String']['output']>;
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name?: Maybe<Scalars['String']['output']>;
  recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  status_id?: Maybe<Scalars['ID']['output']>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of Payments items. */
export type PaymentsPaginator = {
  __typename?: 'PaymentsPaginator';
  /** A list of Payments items. */
  data: Array<Payments>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** PermissionAuth */
export type PermissionAuth = {
  __typename?: 'PermissionAuth';
  PERMISSION_ACCOUNT_DETAILS: Array<Permission_Account_Details>;
  PERMISSION_DASHBOARD: Array<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS: Array<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH: Array<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES: Array<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS: Array<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST: Array<Permission_Payment_List>;
  PERMISSION_REQUISITES: Array<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNT: Array<Permission_Settings_Account>;
  PERMISSION_SETTINGS_CONTACT_DETAILS: Array<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS: Array<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL: Array<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS: Array<Permission_Statements>;
  PERMISSION_TICKETS: Array<Permission_Tickets>;
};

export type PermissionCategory = {
  __typename?: 'PermissionCategory';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissionList?: Maybe<Array<Maybe<PermissionList>>>;
};


export type PermissionCategoryPermissionListArgs = {
  permissionType?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
};

/** Allowed column names for PermissionCategory.permissionList.permissionType. */
export enum PermissionCategoryPermissionListPermissionTypeColumn {
  Type = 'TYPE'
}

/** Dynamic WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<PermissionCategoryPermissionListPermissionTypeWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<PermissionCategoryPermissionListPermissionTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `permissionType` argument on the query `permissionList`. */
export type PermissionCategoryPermissionListPermissionTypeWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<PermissionCategoryPermissionListPermissionTypeWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type PermissionCategoryRole = {
  __typename?: 'PermissionCategoryRole';
  is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  permission_category_id?: Maybe<Scalars['ID']['output']>;
  role_id?: Maybe<Scalars['ID']['output']>;
};

export type PermissionList = {
  __typename?: 'PermissionList';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  separator?: Maybe<PermissionSeparatorType>;
  type?: Maybe<PermissionListType>;
};

export enum PermissionListType {
  Individual = 'Individual',
  Member = 'Member'
}

export enum PermissionSeparatorType {
  Business = 'Business',
  Private = 'Private'
}

/** PermissionType */
export type PermissionType = {
  __typename?: 'PermissionType';
  PERMISSION_ACCOUNT_DETAILS?: Maybe<Permission_Account_Details>;
  PERMISSION_DASHBOARD?: Maybe<Permission_Dashboard>;
  PERMISSION_MAKE_PAYMENTS?: Maybe<Permission_Make_Payments>;
  PERMISSION_MY_NET_WORTH?: Maybe<Permission_My_Net_Worth>;
  PERMISSION_MY_TEMPLATES?: Maybe<Permission_My_Templates>;
  PERMISSION_PAYMENT_DETAILS?: Maybe<Permission_Payment_Details>;
  PERMISSION_PAYMENT_LIST?: Maybe<Permission_Payment_List>;
  PERMISSION_REQUISITES?: Maybe<Permission_Requisites>;
  PERMISSION_SETTINGS_ACCOUNT?: Maybe<Permission_Settings_Account>;
  PERMISSION_SETTINGS_CONTACT_DETAILS?: Maybe<Permission_Settings_Contact_Details>;
  PERMISSION_SETTINGS_LOG_IN_DETAILS?: Maybe<Permission_Settings_Log_In_Details>;
  PERMISSION_SETTINGS_SECURITY_LEVEL?: Maybe<Permission_Settings_Security_Level>;
  PERMISSION_STATEMENTS?: Maybe<Permission_Statements>;
  PERMISSION_TICKETS?: Maybe<Permission_Tickets>;
};

/**
 * Список разрешений
 * Settings->Manager Roles->Rol
 */
export type Permissions = {
  __typename?: 'Permissions';
  all?: Maybe<Scalars['JSON']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  guard_name?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type PivotTable = {
  sync?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

/**
 * Цены прайс листа
 * Banking -> Цены прайс листа
 */
export type PriceListFee = {
  __typename?: 'PriceListFee';
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  fee_ranges?: Maybe<Scalars['JSON']['output']>;
  /** Тип */
  fee_type?: Maybe<FeeType>;
  /** Цены */
  fees?: Maybe<Array<Maybe<PriceListFeeCurrency>>>;
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
  /** Тип операции */
  operation_type?: Maybe<OperationType>;
  /** Период */
  period?: Maybe<FeePeriod>;
  price_list_id?: Maybe<Scalars['ID']['output']>;
  scheduled?: Maybe<PriceListFeeScheduled>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

export type PriceListFeeCurrency = {
  __typename?: 'PriceListFeeCurrency';
  currency_id: Scalars['ID']['output'];
  fee?: Maybe<Array<Maybe<FeeItem>>>;
  id: Scalars['ID']['output'];
  price_list_fee_id: Scalars['ID']['output'];
};

export type PriceListFeeInput = {
  fee_ranges?: InputMaybe<Scalars['JSON']['input']>;
  fees?: InputMaybe<Array<PriceListFeesList>>;
  name: Scalars['String']['input'];
  operation_type_id: Scalars['ID']['input'];
  period_id?: InputMaybe<Scalars['ID']['input']>;
  price_list_id: Scalars['ID']['input'];
  scheduled?: InputMaybe<PriceListFeeScheduledInput>;
  type_id: Scalars['ID']['input'];
};

export type PriceListFeeItem = {
  amount_from?: InputMaybe<Scalars['Int']['input']>;
  amount_to?: InputMaybe<Scalars['Int']['input']>;
  fee?: InputMaybe<Scalars['Int']['input']>;
  mode: Scalars['String']['input'];
  percent?: InputMaybe<Scalars['Int']['input']>;
};

export type PriceListFeeScheduled = {
  __typename?: 'PriceListFeeScheduled';
  end_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  end_date_id?: Maybe<Scalars['ID']['output']>;
  recurrent_interval?: Maybe<Scalars['Int']['output']>;
  starting_date?: Maybe<Scalars['DateTimeUtc']['output']>;
  starting_date_id?: Maybe<Scalars['ID']['output']>;
};

export type PriceListFeeScheduledInput = {
  end_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  end_date_id?: InputMaybe<Scalars['ID']['input']>;
  recurrent_interval?: InputMaybe<Scalars['Int']['input']>;
  starting_date?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  starting_date_id?: InputMaybe<Scalars['ID']['input']>;
};

export type PriceListFeesList = {
  currency_id: Scalars['ID']['input'];
  fee: Array<Array<InputMaybe<PriceListFeeItem>>>;
};

export type Project = {
  __typename?: 'Project';
  /** Дополнительны поля */
  additional_fields_basic?: Maybe<Scalars['JSON']['output']>;
  /** Дополнительные поля настройки */
  additional_fields_settings?: Maybe<Scalars['JSON']['output']>;
  /** Аватар */
  avatar?: Maybe<Files>;
  /** URL клиента */
  client_url?: Maybe<Scalars['String']['output']>;
  /** Компания */
  company?: Maybe<Company>;
  created_at: Scalars['DateTimeUtc']['output'];
  /** Описание */
  description?: Maybe<Scalars['String']['output']>;
  /** URL восстановления пароля */
  forgot_password_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  /** URL входа */
  login_url?: Maybe<Scalars['String']['output']>;
  /** Модуль */
  module?: Maybe<Module>;
  /** Название проекта */
  name: Scalars['String']['output'];
  /** Настройки api проекта */
  project_api_settings?: Maybe<Array<Maybe<ProjectApiSetting>>>;
  /** Настройки проекта */
  project_settings?: Maybe<Array<Maybe<ProjectSettings>>>;
  /** Имя отправителя SMS */
  sms_sender_name?: Maybe<Scalars['String']['output']>;
  /** Состояние */
  state?: Maybe<State>;
  /** Email поддержки */
  support_email?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTimeUtc']['output'];
  /** URL */
  url?: Maybe<Scalars['String']['output']>;
};

/** Project Api Setting */
export type ProjectApiSetting = {
  __typename?: 'ProjectApiSetting';
  /** API ключ */
  api_key?: Maybe<Scalars['String']['output']>;
  /** ID */
  id: Scalars['ID']['output'];
  /** Активен или нет */
  is_active?: Maybe<Scalars['Boolean']['output']>;
  /** Пароль */
  password?: Maybe<Scalars['String']['output']>;
  /** ID проекта */
  project: Project;
  /** поставщик */
  provider?: Maybe<ProviderType>;
  /** Кошелек */
  wallet?: Maybe<Scalars['String']['output']>;
};

export type ProjectApiSettingPassword = {
  __typename?: 'ProjectApiSettingPassword';
  /** ID */
  id: Scalars['ID']['output'];
  /** Пароль */
  password: Scalars['String']['output'];
};

/** A paginated list of Project items. */
export type ProjectPaginator = {
  __typename?: 'ProjectPaginator';
  /** A list of Project items. */
  data: Array<Project>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Настройки проекта */
export type ProjectSettings = {
  __typename?: 'ProjectSettings';
  /** Индивидуал или компани */
  applicant_type: ApplicantType;
  /** Связанный платежный шаблон */
  commission_template?: Maybe<CommissionTemplate>;
  /** Роль */
  group_role?: Maybe<GroupRole>;
  /** Тип группы */
  group_type?: Maybe<GroupType>;
  /** Связанный iban провайдер */
  iban_provider?: Maybe<PaymentProviderIban>;
  /** Связанный платежный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
};

export type ProviderType = PaymentProvider | PaymentProviderIban;

export enum ProviderTypeEnum {
  PaymentProvider = 'PaymentProvider',
  PaymentProviderIban = 'PaymentProviderIban'
}

export type Query = {
  __typename?: 'Query';
  /** Получить аккаунт по ID */
  account?: Maybe<Account>;
  /** Получить лимит по ID */
  accountLimit?: Maybe<AccountLimit>;
  /** Получить список лимитов */
  accountLimits?: Maybe<AccountLimitPaginator>;
  /**
   * Получить список аккаунтов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  accountList?: Maybe<AccountPaginator>;
  /** Получить лимит по ID */
  accountReachedLimit?: Maybe<AccountReachedLimit>;
  /** Получить список лимитов */
  accountReachedLimits?: Maybe<AccountReachedLimitPaginator>;
  /** Получить выписку по счету */
  accountStatement?: Maybe<AccountStatement>;
  /** Получить список account states */
  accountStates: Array<AccountState>;
  /**
   * Получить список сессий
   * query: {column: COMPANY, value: "", column: PROVIDER, value: "", column: GROUP, value: "", column: CREATED_AT, value: "2021-10-12"} фильтр по company, member, group, created_at
   */
  activeSessions?: Maybe<ActiveSessions>;
  /**
   * Получить список логов активности
   * query: {
   *     column: COMPANY, value: "",
   *     column: MEMBER, value: "",
   *     column: GROUP, value: "",
   *     column: DOMAIN, value: "",
   *     column: CREATED_AT, value: "2021-10-12"
   * } фильтр по company, member, group, domain, created_at
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по created_at
   */
  activityLogs?: Maybe<ActivityLogs>;
  /** Получить список аккаунтов */
  applicantAccounts?: Maybe<Array<ApplicantAccount>>;
  applicantBankingAccess?: Maybe<ApplicantBankingAccess>;
  /**
   * Получить список пользователей
   * orderBy: [{ column: APPLICANT_INDIVIDUAL_ID, order: DESC }] сортировка по ID, по имени, фамилии, email
   * filter: {column: MEMBER_ID, operator: EQ, value: 2} фильтр по member_id, grant_access
   */
  applicantBankingAccesses?: Maybe<ApplicantBankingAccesses>;
  /**
   * Получить список applicant companies
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantCompanies?: Maybe<ApplicantCompanyPaginator>;
  /** Получить пользователя  по ID */
  applicantCompany?: Maybe<ApplicantCompany>;
  /**
   * Получить все типы бизнеса
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyBusinessType?: Maybe<ApplicantCompanyBusinessTypePaginator>;
  /** Получить метку по ID */
  applicantCompanyLabel?: Maybe<ApplicantCompanyLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantCompanyLabels: Array<ApplicantCompanyLabel>;
  applicantCompanyLabelsAvailable?: Maybe<ApplicantCompanyLabelPaginator>;
  /** Получить список всех модулей компании */
  applicantCompanyModules: Array<ApplicantCompanyModules>;
  /** Получить заметку  по ID */
  applicantCompanyNote?: Maybe<ApplicantCompanyNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantCompanyNotes?: Maybe<ApplicantCompanyNotesPaginator>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantCompanyRiskLevelHistory?: Maybe<ApplicantCompanyRiskLevelHistoryPaginator>;
  /** Получить список устройств пользователя */
  applicantDevices?: Maybe<Array<ApplicantDevice>>;
  /** Получить документ */
  applicantDocument?: Maybe<ApplicantDocument>;
  /** Получить список заметок документа */
  applicantDocumentInternalNotes?: Maybe<ApplicantDocumentInternalNotePaginator>;
  /** Получить список категорий тегов */
  applicantDocumentTagCategories?: Maybe<ApplicantDocumentTagCategoryPaginator>;
  /** Получить список тегов документов */
  applicantDocumentTags?: Maybe<ApplicantDocumentTagPaginator>;
  /** Получить список документов */
  applicantDocuments?: Maybe<ApplicantDocumentPaginator>;
  /** Получить пользователя  по ID */
  applicantIndividual?: Maybe<ApplicantIndividual>;
  /** Получить должность по ID */
  applicantIndividualCompanyPosition?: Maybe<ApplicantIndividualCompanyPosition>;
  /**
   * Получить все  должности
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyPositions?: Maybe<ApplicantIndividualCompanyPositionPaginator>;
  /** Получить по ID */
  applicantIndividualCompanyRelation?: Maybe<ApplicantIndividualCompanyRelation>;
  /**
   * Получить все  отношения
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualCompanyRelations?: Maybe<ApplicantIndividualCompanyRelationPaginator>;
  /** Получить метку по ID */
  applicantIndividualLabel?: Maybe<ApplicantIndividualLabel>;
  /**
   * Получить все метки
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantIndividualLabels: Array<ApplicantIndividualLabel>;
  applicantIndividualLabelsAvailable?: Maybe<ApplicantIndividualLabelPaginator>;
  /** Получить список всех модулей аппликанта */
  applicantIndividualModules: Array<ApplicantIndividualModules>;
  /** Получить заметку  по ID */
  applicantIndividualNote?: Maybe<ApplicantIndividualNotes>;
  /**
   * Получить список всех заметок
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по ID, по времени создания
   */
  applicantIndividualNotes?: Maybe<ApplicantIndividualNotesPaginator>;
  /**
   * Получить список частных пользователей
   * orderBy: [{ column: FIRST_NAME, order: DESC }] сортировка по ID, по имени, фамилии, email
   * where:{column: EMAIL, operator: LIKE, value: ""} фильтр по имени, фамилии, Email
   */
  applicantIndividuals?: Maybe<ApplicantIndividualPaginator>;
  /** Получить уровень KYC по  ID */
  applicantKycLevel?: Maybe<ApplicantKycLevel>;
  /**
   * Получить список уровней KYC
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantKycLevels?: Maybe<ApplicantKycLevelPaginator>;
  /** Вывод списка связанные компании */
  applicantLinkedCompanies: Array<ApplicantLinkedCompany>;
  /** Получить профиль пользователя */
  applicantProfile?: Maybe<ApplicantProfile>;
  /** Получить реквизиты по Account_number */
  applicantRequisite?: Maybe<ApplicantDetailsRequisites>;
  /** Получить список реквизитов */
  applicantRequisites: Array<ApplicantRequisites>;
  /** Получить уровень риска по  ID */
  applicantRiskLevel?: Maybe<ApplicantRiskLevel>;
  /**
   * Получить историю списка уровней риска по аппликанту
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_id, operator: LIKE, value: ""} фильтр по аппликанту
   */
  applicantRiskLevelHistory?: Maybe<ApplicantRiskLevelHistoryPaginator>;
  /**
   * Получить список уровней риска
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantRiskLevels?: Maybe<ApplicantRiskLevelPaginator>;
  /** Получить состояние по ID */
  applicantState?: Maybe<ApplicantState>;
  /** Получить причину по ID */
  applicantStateReason?: Maybe<ApplicantStateReason>;
  /**
   * Получить все причины
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStateReasons?: Maybe<ApplicantStateReasonPaginator>;
  /**
   * Получить все состояния
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStates?: Maybe<ApplicantStatePaginator>;
  /** Получить статутс по ID */
  applicantStatus?: Maybe<ApplicantStatus>;
  /**
   * Получить все статусы
   * orderBy: [{ column: NAME, order: DESC }] сортировка по ID, по названию
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   */
  applicantStatuses?: Maybe<ApplicantStatusPaginator>;
  /** Получить список */
  applicantVerificationStatuses: Array<ApplicantVerificationStatus>;
  /** Получить модуль по ID */
  applicant_module?: Maybe<ApplicantModules>;
  /**
   * Получить список модулей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  applicant_modules?: Maybe<ApplicantModulesPaginator>;
  /**
   * Получить список логов аутентификации
   * query: {
   *     column: COMPANY, value: "",
   *     column: MEMBER, value: "",
   *     column: CLIENT_TYPE, value: "",
   *     column: GROUP, value: "",
   *     column: DOMAIN, value: "",
   *     column: IP, value: "",
   *     column: COUNTRY, value: "",
   *     column: CITY, value: "",
   *     column: PLATFORM, value: "",
   *     column: BROWSER, value: "",
   *     column: DEVICE_TYPE, value: "",
   *     column: MODEL, value: "",
   *     column: STATUS, value: "",
   *     column: EXPIRED_AT, value: "2021-10-12",
   *     column: CREATED_AT, value: "2021-10-12"
   * } фильтр по company, member, group, domain, ip, country, city, platform, browser, device_type, model, status, expired_at, created_at
   * orderBy: [{ column: EXPIRED_AT, order: DESC }] сортировка по expired_at, created_at, id
   */
  authenticationLogs?: Maybe<AuthenticationLogs>;
  /** Получить список логов для мембера по его ID */
  authenticationMemberLogs?: Maybe<AuthenticationLogs>;
  /** Получить запись */
  bankCorrespondent: BankCorrespondent;
  /** Получить список */
  bankCorrespondents?: Maybe<BankCorrespondentPaginator>;
  /** Получить список всех бизнесов */
  businessActivities?: Maybe<BusinessActivityPaginator>;
  /** Получить по ID */
  businessActivity?: Maybe<BusinessActivity>;
  /** Получить список клиентов */
  clientList: Array<AccountClient>;
  /** Получить прайс по ID */
  commissionPriceList?: Maybe<CommissionPriceList>;
  /**
   * Получить список прайсов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  commissionPriceLists?: Maybe<CommissionPriceListPaginator>;
  /** Получить шаблон по ID */
  commissionTemplate?: Maybe<CommissionTemplate>;
  /** Получить лимит по ID */
  commissionTemplateLimit?: Maybe<CommissionTemplateLimit>;
  /** Получить по ID */
  commissionTemplateLimitActionType?: Maybe<CommissionTemplateLimitActionType>;
  /** Получить список типов лимитов */
  commissionTemplateLimitActionTypes?: Maybe<CommissionTemplateLimitActionTypePaginator>;
  /** Получить по ID */
  commissionTemplateLimitPeriod?: Maybe<CommissionTemplateLimitPeriod>;
  /** Получить список типов лимитов */
  commissionTemplateLimitPeriods?: Maybe<CommissionTemplateLimitPeriodPaginator>;
  /** Получить по ID */
  commissionTemplateLimitTransferDirection?: Maybe<CommissionTemplateLimitTransferDirection>;
  /** Получить список направлений */
  commissionTemplateLimitTransferDirections?: Maybe<CommissionTemplateLimitTransferDirectionPaginator>;
  /** Получить по ID */
  commissionTemplateLimitType?: Maybe<CommissionTemplateLimitType>;
  /** Получить список типов лимитов */
  commissionTemplateLimitTypes?: Maybe<CommissionTemplateLimitTypePaginator>;
  /** Получить список лимитов */
  commissionTemplateLimits?: Maybe<CommissionTemplateLimitPaginator>;
  /**
   * Получить список шаблонов
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * filter:{column: NAME, operator: LIKE, value: ""} фильтр по name
   */
  commissionTemplates?: Maybe<CommissionTemplatePaginator>;
  /**
   * Получить список компаний
   * member_count: сортировка по количеству участников компании
   * county: сортировка по  стране
   * orderBy: [{ column: CREATED_AT, order: DESC }] сортировка по дате создания, по ID, по названию, email, url
   * created_at: {from:"2021-10-11", to: "2021-10-12"} фильтр по дате
   */
  companies?: Maybe<CompanyPaginator>;
  /** Получить компанию по ID */
  company?: Maybe<Company>;
  /** Получить пароль */
  companyModuleIbanProviderPassword?: Maybe<CompanyModuleIbanProviderPassword>;
  /** Получить пароль */
  companyModuleProviderPassword?: Maybe<CompanyModulePaymentProviderPassword>;
  /** Получить список модулей */
  companyModules: Array<CompanyModule>;
  /** Получить список стран */
  countries?: Maybe<CountryPaginator>;
  country?: Maybe<Country>;
  /** Получить список валют */
  currencies?: Maybe<CurrenciesPaginator>;
  /** Получить валюту по ID */
  currency?: Maybe<Currencies>;
  /** Получить статистику по акаунтам */
  dashboardAccountsStatistic?: Maybe<Array<Maybe<DashboardAccountsStatistic>>>;
  /** Получить статистику по тикетам */
  dashboardTicketsStatistic?: Maybe<Array<Maybe<DashboardTicketsStatistic>>>;
  /** Получить статистику по трансферам */
  dashboardTransfersStatistic?: Maybe<Array<Maybe<DashboardTransfersStatistic>>>;
  /** Получить статистику по пользователям */
  dashboardUsersStatistic?: Maybe<Array<Maybe<DashboardUsersStatistic>>>;
  /** Получить департамент по его ID */
  department?: Maybe<Department>;
  /** Получить должность по ID */
  departmentPosition?: Maybe<DepartmentPosition>;
  /**
   * Получить список должностей
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию, по ID, по is_active
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию, по полю is_active
   * hasDepartment: {column:ID,operator:EQ,value:1} фильтр по id департамента
   */
  departmentPositions?: Maybe<DepartmentPositionPaginator>;
  /**
   * Получить список департаментов
   * orderBy: [{ column: ID, order: DESC }] сортировка по названию или по ID
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по названию
   * hasCompany: {column:ID,operator:EQ,value:1} фильтр по id компании
   */
  departments?: Maybe<DepartmentPaginator>;
  /** Получить список ducument states */
  documentStates: Array<DocumentState>;
  /** Получить список ducument types */
  documentTypes: Array<DocumentType>;
  /** Получить выписку по счету в формате CSV */
  downloadAccountStatementCsv?: Maybe<RawFile>;
  /** Получить выписку по счету в формате PDF */
  downloadAccountStatementPdf?: Maybe<RawFile>;
  /** Получить выписку по счету в формате XLS */
  downloadAccountStatementXls?: Maybe<RawFile>;
  /** Скачать PDF с реквизитами */
  downloadApplicantRequisiteDetails?: Maybe<RawFile>;
  /** Скачать PDF с реквизитами */
  downloadRequisiteDetails?: Maybe<RawFile>;
  /** Получить email notification */
  emailNotification?: Maybe<EmailNotification>;
  /**
   * Получить список email notification
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   * where:{column: TYPE, operator: EQ, value: ""} фильтр по типу нотификаций
   */
  emailNotifications?: Maybe<EmailNotificationPaginator>;
  /** Получить по smtp setting по ID */
  emailSmtp?: Maybe<EmailSmtp>;
  /** Получить список smtp настроек для компании */
  emailSmtps: Array<EmailSmtp>;
  /** Получить по билет ID */
  emailTemplate?: Maybe<EmailTemplate>;
  /** Получить по билет ID */
  emailTemplateLayout?: Maybe<EmailTemplateLayout>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * ] сортировка по ID
   */
  emailTemplates: Array<EmailTemplate>;
  /** Получить список */
  employees: Array<Employee>;
  /** Получить деталии фи */
  feeDetails: Fee;
  /** Получить список */
  feeModes: Array<FeeMode>;
  /** Получить список  периодов комиссий */
  feePeriods: Array<FeePeriod>;
  /**
   * Получить список статусов
   * фильтр по operation_type:
   * HAS_OPERATION_TYPE_FILTER_BY_ID
   */
  feeTypes: Array<FeeType>;
  /** Получить файл по ID */
  file?: Maybe<Files>;
  /**
   * Получить список файлов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  files?: Maybe<FilesPaginator>;
  /**
   * Получить список ApplicantIndividualCompany по applicant_company_id, где type = ApplicantIndividual
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  getMatchedApplicantIndividuals: Array<ApplicantIndividualCompany>;
  /**
   * Получить список всех привязаных applicant (individual/company) по applicant_company_id
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: applicant_company_id, operator: LIKE, value: ""} фильтр по applicant_company_id
   */
  getMatchedUsers: Array<ApplicantIndividualCompany>;
  /** Получить список */
  getPaymentUrgencys: Array<PaymentUrgency>;
  /** Получить список */
  getTicketComments: Array<TicketComments>;
  grantedBankingAccess?: Maybe<ApplicantBankingAccesses>;
  groupList?: Maybe<GroupRoleViewPaginator>;
  /** Получить список типов групп */
  groupTypeList?: Maybe<GroupTypePaginator>;
  /** Получить тип группы по ID */
  group_type?: Maybe<GroupType>;
  /** Получить список типов групп */
  group_types: Array<GroupType>;
  /**
   * Получить список групп с ролями
   * orderBy: [{ column: IS_ACTIVE, order: DESC }] сортировка по ID, статусу, описанию
   * where:{column: ID, operator: EQ, value: ""} фильтр по ID, ID группы, ID роли, ID платежного провайдера, ID шаблона комиссий, по статусу
   */
  groups?: Maybe<GroupRolePaginator>;
  /** Получить запись */
  kycTimeline?: Maybe<KycTimeline>;
  /** Получить список */
  kycTimelines?: Maybe<KycTimelines>;
  /** Получить язык по ID */
  language?: Maybe<Languages>;
  /** Получить список языков */
  languages?: Maybe<LanguagesPaginator>;
  /** Получить участника по ID */
  member?: Maybe<Members>;
  /** Получить участника по ID */
  memberAccessLimitation?: Maybe<MemberAccessLimitation>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * filter:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: GROUP_ROLE_ID, operator:EQ, value: 8} поиск по id GROUP ROLE
   */
  memberAccessLimitations?: Maybe<MemberAccessLimitationPaginator>;
  /** Получить профиль пользователя */
  memberProfile?: Maybe<MemberProfile>;
  /** Получить список статусов мембера */
  memberStatuses: Array<MemberStatus>;
  /**
   * Получить список участников
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   * hasPosition: {column: DEPARTMENT_ID, operator:EQ, value: 8} поиск по id департамента
   */
  members?: Maybe<MembersPaginator>;
  /** Получить модуль по ID */
  module?: Maybe<Module>;
  /**
   * Получить список модулей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  modules: Array<Module>;
  /**
   * Получить список модулей вместе с модулем KYC
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  modulesWithKyc?: Maybe<Array<Module>>;
  /** Получить список типов операций */
  operationTypes: Array<OperationType>;
  /** Вывод списка овнеров для компаний */
  owners: Array<ApplicantIndividual>;
  /** Получить платеж по ID */
  payment?: Maybe<Payments>;
  /** Получить банк по ID */
  paymentBank?: Maybe<PaymentBank>;
  /** Получить список банков */
  paymentBanks?: Maybe<PaymentBankPaginator>;
  /** Получить провайдер по ID */
  paymentProvider?: Maybe<PaymentProvider>;
  /** Получить запись */
  paymentProviderIban: PaymentProviderIban;
  /** Получить список */
  paymentProviderIbans?: Maybe<PaymentProviderIbanPaginator>;
  /**
   * Получить список провайдеров
   * paymentProviderCountry: country_id - получить все провайдеры по стране
   * paymentProviderCurrency: currency_id - получить все провайдеры по валюте
   * orderBy: [{ column: ID, order: DESC }] сортировка ID, NAME, IS_ACTIVE
   * where:{column: NAME, operator: EQ, value: ""} фильтр по name
   * hasPaymentSystems: {column:NAME,operator:GTE,value:PaymentSystemName} фильтр по платежным системам
   */
  paymentProviders?: Maybe<PaymentProviderPaginator>;
  /**
   * Получить список статусов
   * фильтр по operation_type:
   * OPERATION_TYPE
   */
  paymentStatuses: Array<PaymentStatus>;
  /** Получить платежную систем по ID */
  paymentSystem?: Maybe<PaymentSystem>;
  /** Получить список платежных систем */
  paymentSystems?: Maybe<PaymentSystemPaginator>;
  /** Получить уникальный список платежных систем */
  paymentSystemsList: Array<PaymentSystem>;
  /**
   * Получить список платежей
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * Фильтры по
   * hasCompany: {column:NAME,operator:GTE,value:CompanyName} фильтр по имени компании
   * hasAccounts: {column:ACCOUNT_ID,operator:GTE,value:AccountNumber} фильтр по account number
   * hasOwner: {column:NAME,operator:GTE,value:MemberName} фильтр по владельцу
   */
  payments?: Maybe<PaymentsPaginator>;
  /** Получить разрешение по ID */
  permission?: Maybe<Permissions>;
  permissions?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список разрешений */
  permissions_tree?: Maybe<Permissions>;
  /**
   * Получить список Цен
   * where:{column: NAME, operator: LIKE, value: ""} фильтр по имени, тип, тип операции, период
   */
  priceListFees: Array<PriceListFee>;
  /** Получить компанию по ID */
  project?: Maybe<Project>;
  /** Получить пароль */
  projectApiSettingPassword?: Maybe<ProjectApiSettingPassword>;
  /** Получить ProjectApiSettings */
  projectApiSettings: Array<ProjectApiSetting>;
  /** Получить список проектов */
  projects?: Maybe<ProjectPaginator>;
  region: Region;
  /** Получить список регионов */
  regions?: Maybe<RegionPaginator>;
  /** Получить реквизиты по ID */
  requisite?: Maybe<Requisite>;
  /**
   * Получить список реквизитов
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   */
  requisites: Array<Requisite>;
  /** Получить список */
  respondentFees: Array<RespondentFee>;
  /** Получить роль по ID */
  role?: Maybe<Role>;
  /**
   * Получить список ролей
   * groups_sort: сортировка по количеству групп
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID или по названию
   * where: {column: name, operator: LIKE, value: "Name"}
   */
  roles?: Maybe<RolePaginator>;
  /** Отправить реквизиты на email */
  sendApplicantRequisiteDetails?: Maybe<StatusType>;
  /** Отправить реквизиты на email */
  sendRequisiteDetails?: Maybe<StatusType>;
  senders?: Maybe<Array<Maybe<Sender>>>;
  /** Получить список */
  stateReasons: Array<StateReason>;
  /** Получить список */
  states: Array<State>;
  /** Получить по билет ID */
  ticket?: Maybe<Ticket>;
  /** Получить по билет ID */
  ticketComment?: Maybe<TicketComments>;
  /**
   * Получить список билетов
   * orderBy: [
   * {column: ID, order: DESC},
   * {relation: "company", column: "name"},
   * {relation: "department", column: "name"}
   * ] сортировка по ID, компании, позиционный отдел
   * hasCompany: {column: COMPANY_ID, operator:EQ, value: 1} поиск по id компании
   * hasDepartment: {column: DEPARTMENT_ID, operator:EQ, value: 1} поиск по id Департамента
   * hasPosition: {column: DEPARTMENT_POSITION_ID, operator:EQ, value: 1} поиск по id позици
   * hasMember: {column: MEMBER_ID, operator:EQ, value: 1} поиск по id мембера
   * hasClient: {column: CLIENT_ID, operator:EQ, value: 1} поиск по id Клиента
   * where:{column: TITLE, operator: LIKE, value: ""} фильтр по имени, статуса
   */
  tickets?: Maybe<TicketPaginator>;
  /** Получить трансфер */
  transferIncoming: TransferIncoming;
  /** Получить историю входящего платежа */
  transferIncomingHistory?: Maybe<TransferIncomingHistoryPaginator>;
  /** Получить список входящих платежей */
  transferIncomings?: Maybe<TransferIncomingPaginator>;
  /** Получить статистику по входящим платежам */
  transferIncomingsStatistic?: Maybe<Array<Maybe<TransferIncomingStatistic>>>;
  /** Получить трансфер */
  transferOutgoing: TransferOutgoing;
  /** Получить историю исходящего платежа */
  transferOutgoingHistory?: Maybe<TransferOutgoingHistoryPaginator>;
  /** Получить список исходящих платежей */
  transferOutgoings?: Maybe<TransferOutgoingPaginator>;
  /** Получить статистику по исходящим платежам */
  transferOutgoingsStatistic?: Maybe<Array<Maybe<TransferOutgoingStatistic>>>;
  /** Получить второй фактор по ID */
  twoFactorAuth?: Maybe<TwoFactorAuthSettings>;
  /** Получить список */
  twoFactorsAuth?: Maybe<TwoFactorAuthSettingsPaginator>;
  /** Получить список */
  typeOfIndustries: Array<TypeOfIndustry>;
  userAuthData: UserAuthResponse;
  /**
   * Получить список пользователей системы
   * orderBy: [{ column: ID, order: DESC }] сортировка по ID
   * where:{column: FIRST_NAME, operator: LIKE, value: ""} фильтр по фамилии, имени, email, компании, роли, департаменту, должности
   */
  users?: Maybe<UsersPaginator>;
};


export type QueryAccountArgs = {
  id: Scalars['ID']['input'];
};


export type QueryAccountLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountLimitsArgs = {
  filter?: InputMaybe<QueryAccountLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryAccountLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountListArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryAccountListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryAccountListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAccountReachedLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAccountReachedLimitsArgs = {
  filter?: InputMaybe<QueryAccountReachedLimitsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasAccount?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryAccountReachedLimitsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
};


export type QueryAccountStatementArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryAccountStatesArgs = {
  orderBy?: InputMaybe<Array<QueryAccountStatesOrderByOrderByClause>>;
};


export type QueryActiveSessionsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActiveSessionsStatic>;
};


export type QueryActivityLogsArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryActivityLogsStatic>;
};


export type QueryApplicantAccountsArgs = {
  filter?: InputMaybe<QueryApplicantAccountsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantAccountsOrderByOrderByClause>>;
};


export type QueryApplicantBankingAccessArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantBankingAccessesArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantBankingAccessesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantBankingAccessesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompaniesArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  hasBusinessType?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  hasGroupRole?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  hasKycLevel?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  hasOwner?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  hasRiskLevel?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  hasStateReason?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  hasStatus?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
};


export type QueryApplicantCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyBusinessTypeArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyLabelsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
};


export type QueryApplicantCompanyLabelsAvailableArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompanyModulesArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type QueryApplicantCompanyNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantCompanyNotesArgs = {
  applicant_company_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantCompanyRiskLevelHistoryArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantDocumentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryApplicantDocumentInternalNotesArgs = {
  applicant_document_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentTagCategoriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentTagsArgs = {
  filter?: InputMaybe<QueryApplicantDocumentTagsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentTagsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantDocumentsArgs = {
  applicant_type: ApplicantType;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantDocumentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantDocumentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  update_at?: InputMaybe<DateTimeRange>;
};


export type QueryApplicantIndividualArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyPositionsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualCompanyRelationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualCompanyRelationsArgs = {
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualLabelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualLabelsArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsOrderByOrderByClause>>;
  where?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
};


export type QueryApplicantIndividualLabelsAvailableArgs = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualLabelsAvailableOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualModulesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};


export type QueryApplicantIndividualNoteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantIndividualNotesArgs = {
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualNotesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantIndividualsArgs = {
  company?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryApplicantIndividualsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryApplicantKycLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantKycLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantKycLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
};


export type QueryApplicantLinkedCompaniesArgs = {
  applicant_individual_id: Scalars['ID']['input'];
};


export type QueryApplicantRequisiteArgs = {
  account_number?: InputMaybe<Scalars['String']['input']>;
};


export type QueryApplicantRiskLevelArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantRiskLevelHistoryArgs = {
  applicant_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelHistoryOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
};


export type QueryApplicantRiskLevelsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantRiskLevelsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
};


export type QueryApplicantStateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStateReasonArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStateReasonsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStateReasonsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
};


export type QueryApplicantStatesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
};


export type QueryApplicantStatusArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicantStatusesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantStatusesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
};


export type QueryApplicant_ModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryApplicant_ModulesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryApplicantModulesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
};


export type QueryAuthenticationLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryAuthenticationLogsStatic>;
};


export type QueryAuthenticationMemberLogsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<OrderBy>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBankCorrespondentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBankCorrespondentsArgs = {
  filter?: InputMaybe<QueryBankCorrespondentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryBankCorrespondentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBusinessActivitiesArgs = {
  filter?: InputMaybe<QueryBusinessActivitiesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryBusinessActivitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBusinessActivityArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClientListArgs = {
  group_type?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionPriceListArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionPriceListsArgs = {
  filter?: InputMaybe<QueryCommissionPriceListsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionPriceListsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCommissionTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitActionTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitActionTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitPeriodArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitPeriodsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTransferDirectionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitTransferDirectionsArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitTypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCommissionTemplateLimitTypesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplateLimitTypesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
};


export type QueryCommissionTemplateLimitsArgs = {
  filter?: InputMaybe<QueryCommissionTemplateLimitsFilterStatic>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCommissionTemplatesArgs = {
  filter?: InputMaybe<QueryCommissionTemplatesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryCommissionTemplatesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  paymentProviderName?: InputMaybe<Sort>;
};


export type QueryCompaniesArgs = {
  country?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryCompaniesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_count?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryCompaniesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCompanyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCompanyModuleIbanProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyModuleProviderPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCompanyModulesArgs = {
  company_id: Scalars['ID']['input'];
};


export type QueryCountriesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCountryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCurrenciesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCurrencyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardAccountsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardTicketsStatisticArgs = {
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDashboardTransfersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDashboardUsersStatisticArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentPositionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDepartmentPositionsArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  filter?: InputMaybe<QueryDepartmentPositionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryDepartmentPositionsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDepartmentsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryDepartmentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryDepartmentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryDownloadAccountStatementCsvArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementPdfArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadAccountStatementXlsArgs = {
  account_id: Scalars['ID']['input'];
  created_at?: InputMaybe<DateTimeRange>;
};


export type QueryDownloadApplicantRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryDownloadRequisiteDetailsArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailNotificationArgs = {
  client_id?: InputMaybe<Scalars['ID']['input']>;
  company_id: Scalars['ID']['input'];
  group_role_id: Scalars['ID']['input'];
  group_type_id: Scalars['ID']['input'];
};


export type QueryEmailNotificationsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailNotificationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryEmailNotificationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryEmailSmtpArgs = {
  id: Scalars['ID']['input'];
};


export type QueryEmailSmtpsArgs = {
  company_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryEmailSmtpsOrderByOrderByClause>>;
};


export type QueryEmailTemplateArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailTemplateLayoutArgs = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEmailTemplatesArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryEmailTemplatesFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryEmailTemplatesOrderByOrderByClause>>;
};


export type QueryFeeDetailsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryFeeTypesArgs = {
  filter?: InputMaybe<QueryFeeTypesFilterFilterConditions>;
};


export type QueryFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryFilesArgs = {
  filter?: InputMaybe<QueryFilesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryFilesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetMatchedApplicantIndividualsArgs = {
  applicant_company_id: Scalars['ID']['input'];
};


export type QueryGetMatchedUsersArgs = {
  applicant_company_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGetMatchedUsersFilterFilterConditions>;
};


export type QueryGrantedBankingAccessArgs = {
  applicant_company_id: Scalars['ID']['input'];
  applicant_individual_id: Scalars['ID']['input'];
  filter?: InputMaybe<QueryGrantedBankingAccessFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGrantedBankingAccessOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupListArgs = {
  filter?: InputMaybe<QueryGroupListFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGroupListOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroupTypeListArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  mode?: InputMaybe<GroupTypeMode>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGroup_TypeArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGroup_TypesArgs = {
  filter?: InputMaybe<QueryGroupTypesFilterFilterConditions>;
};


export type QueryGroupsArgs = {
  filter?: InputMaybe<QueryGroupsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryGroupsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryKycTimelineArgs = {
  id: Scalars['ID']['input'];
};


export type QueryKycTimelinesArgs = {
  applicant_id: Scalars['ID']['input'];
  applicant_type: ApplicantType;
  company_id: Scalars['ID']['input'];
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryKycTimelinesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryLanguageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryLanguagesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemberAccessLimitationArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMemberAccessLimitationsArgs = {
  filter?: InputMaybe<QueryMemberAccessLimitationsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  member_id: Scalars['ID']['input'];
  orderBy?: InputMaybe<Array<QueryMemberAccessLimitationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryMembersArgs = {
  companyName?: InputMaybe<Sort>;
  filter?: InputMaybe<QueryMembersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  group?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryMembersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryModuleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryModulesArgs = {
  orderBy?: InputMaybe<Array<QueryModulesOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWhereWhereConditions>;
};


export type QueryModulesWithKycArgs = {
  orderBy?: InputMaybe<Array<QueryModulesWithKycOrderByOrderByClause>>;
  where?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
};


export type QueryOperationTypesArgs = {
  filter?: InputMaybe<QueryOperationTypesFilterFilterConditions>;
};


export type QueryOwnersArgs = {
  orderBy?: InputMaybe<Array<QueryOwnersOrderByOrderByClause>>;
};


export type QueryPaymentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentBankArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentBanksArgs = {
  filter?: InputMaybe<QueryPaymentBanksFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentBanksOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query?: InputMaybe<QueryPaymentBankCondition>;
};


export type QueryPaymentProviderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentProviderIbanArgs = {
  id: Scalars['ID']['input'];
};


export type QueryPaymentProviderIbansArgs = {
  filter?: InputMaybe<QueryPaymentProviderIbansFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentProviderIbansOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentProvidersArgs = {
  filter?: InputMaybe<QueryPaymentProvidersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentProvidersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentStatusesArgs = {
  filter?: InputMaybe<QueryPaymentStatusesFilterFilterConditions>;
};


export type QueryPaymentSystemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPaymentSystemsArgs = {
  filter?: InputMaybe<QueryPaymentSystemsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentSystemsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPaymentsArgs = {
  AccountNumber?: InputMaybe<Sort>;
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryPaymentsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPermissionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPermissionsArgs = {
  where?: InputMaybe<QueryPermissionsWhereWhereConditions>;
};


export type QueryPriceListFeesArgs = {
  filter?: InputMaybe<QueryPriceListFeesFilterFilterConditions>;
};


export type QueryProjectArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProjectApiSettingPasswordArgs = {
  id: Scalars['ID']['input'];
};


export type QueryProjectApiSettingsArgs = {
  project_id: Scalars['ID']['input'];
};


export type QueryProjectsArgs = {
  filter?: InputMaybe<QueryProjectsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRegionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryRegionsArgs = {
  filter?: InputMaybe<QueryRegionsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryRequisiteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRequisitesArgs = {
  filter?: InputMaybe<QueryRequisitesFilterFilterConditions>;
};


export type QueryRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRolesArgs = {
  filter?: InputMaybe<QueryRolesFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  groups_sort?: InputMaybe<Sort>;
  orderBy?: InputMaybe<Array<QueryRolesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySendApplicantRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type QuerySendRequisiteDetailsArgs = {
  account_id: Scalars['ID']['input'];
  email: Scalars['String']['input'];
};


export type QueryTicketArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTicketCommentArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTicketsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTicketsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryTicketsOrderByRelationOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferIncomingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransferIncomingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};


export type QueryTransferIncomingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferIncomingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferIncomingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTransferOutgoingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTransferOutgoingHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  transfer_id: Scalars['ID']['input'];
};


export type QueryTransferOutgoingsArgs = {
  created_at?: InputMaybe<DateTimeRange>;
  filter?: InputMaybe<QueryTransferOutgoingsFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryTransferOutgoingsStatisticArgs = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  created_at?: InputMaybe<DateTimeRange>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTwoFactorAuthArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTwoFactorsAuthArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUsersArgs = {
  filter?: InputMaybe<QueryUsersFilterFilterConditions>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<QueryUsersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountLimits`. */
export type QueryAccountLimitsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountLimitsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountLimitsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_ACTION_TYPE_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_PERIOD_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TRANSFER_DIRECTION_MIXED_ID_OR_NAME',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'HAS_COMMISSION_TEMPLATE_LIMIT_TYPE_MIXED_ID_OR_NAME',
  HasCurrencyMixedIdOrName = 'HAS_CURRENCY_MIXED_ID_OR_NAME',
  PeriodCount = 'PERIOD_COUNT'
}

/** Input column names for Query.accountLimits.filter. */
export type QueryAccountLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateLimitActionTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitPeriodMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitTransferDirectionMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateLimitTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasCurrencyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  period_count?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStaticOperator {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

/** Column names for Query.accountLimits.filter. */
export enum QueryAccountLimitsFilterStaticType {
  AccountId = 'account_id',
  HasCommissionTemplateLimitActionTypeMixedIdOrName = 'hasCommissionTemplateLimitActionTypeMixedIdOrName',
  HasCommissionTemplateLimitPeriodMixedIdOrName = 'hasCommissionTemplateLimitPeriodMixedIdOrName',
  HasCommissionTemplateLimitTransferDirectionMixedIdOrName = 'hasCommissionTemplateLimitTransferDirectionMixedIdOrName',
  HasCommissionTemplateLimitTypeMixedIdOrName = 'hasCommissionTemplateLimitTypeMixedIdOrName',
  HasCurrencyMixedIdOrName = 'hasCurrencyMixedIdOrName',
  PeriodCount = 'period_count'
}

/** Allowed column names for Query.accountLimits.orderBy. */
export enum QueryAccountLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountLimits.orderBy. */
export type QueryAccountLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountList`. */
export type QueryAccountListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStatic {
  AccountStateId = 'ACCOUNT_STATE_ID',
  CurrencyId = 'CURRENCY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasClientableMixedIdOrFullname = 'HAS_CLIENTABLE_MIXED_ID_OR_FULLNAME',
  HasCommissionTemplateMixedIdOrFullname = 'HAS_COMMISSION_TEMPLATE_MIXED_ID_OR_FULLNAME',
  HasCompanyMixedIdOrName = 'HAS_COMPANY_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasPaymentProviderMixedIdOrName = 'HAS_PAYMENT_PROVIDER_MIXED_ID_OR_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME',
  IsPrimary = 'IS_PRIMARY',
  MixedAccountNumberOrAccountName = 'MIXED_ACCOUNT_NUMBER_OR_ACCOUNT_NAME'
}

/** Input column names for Query.accountList.filter. */
export type QueryAccountListFilterStaticInput = {
  MixedAccountNumberOrAccountName?: InputMaybe<Scalars['String']['input']>;
  account_state_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  hasClientableMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasCommissionTemplateMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasPaymentProviderMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  is_primary?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStaticOperator {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

/** Column names for Query.accountList.filter. */
export enum QueryAccountListFilterStaticType {
  MixedAccountNumberOrAccountName = 'MixedAccountNumberOrAccountName',
  AccountStateId = 'account_state_id',
  CurrencyId = 'currency_id',
  GroupTypeId = 'group_type_id',
  HasClientableMixedIdOrFullname = 'hasClientableMixedIdOrFullname',
  HasCommissionTemplateMixedIdOrFullname = 'hasCommissionTemplateMixedIdOrFullname',
  HasCompanyMixedIdOrName = 'hasCompanyMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasPaymentProviderMixedIdOrName = 'hasPaymentProviderMixedIdOrName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName',
  IsPrimary = 'is_primary'
}

/** Allowed column names for Query.accountList.orderBy. */
export enum QueryAccountListOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.accountList.orderBy. */
export type QueryAccountListOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountListOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStatic {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

/** Input column names for Query.accountReachedLimits.filter. */
export type QueryAccountReachedLimitsFilterStaticInput = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  limit_currency?: InputMaybe<Scalars['String']['input']>;
  limit_type?: InputMaybe<Scalars['String']['input']>;
  limit_value?: InputMaybe<Scalars['String']['input']>;
  period?: InputMaybe<Scalars['Int']['input']>;
  transfer_direction?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStaticOperator {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

/** Column names for Query.accountReachedLimits.filter. */
export enum QueryAccountReachedLimitsFilterStaticType {
  AccountId = 'account_id',
  Amount = 'amount',
  LimitCurrency = 'limit_currency',
  LimitType = 'limit_type',
  LimitValue = 'limit_value',
  Period = 'period',
  TransferDirection = 'transfer_direction'
}

/** Allowed column names for Query.accountReachedLimits.hasAccount. */
export enum QueryAccountReachedLimitsHasAccountColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasAccount` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsHasAccountWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsHasAccountWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsHasAccountColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasAccount` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsHasAccountWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountReachedLimitsHasAccountWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.accountReachedLimits.orderBy. */
export enum QueryAccountReachedLimitsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.accountReachedLimits.orderBy. */
export type QueryAccountReachedLimitsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountReachedLimitsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.accountReachedLimits.where. */
export enum QueryAccountReachedLimitsWhereColumn {
  AccountId = 'ACCOUNT_ID',
  Amount = 'AMOUNT',
  ClientName = 'CLIENT_NAME',
  ClientType = 'CLIENT_TYPE',
  GroupType = 'GROUP_TYPE',
  LimitCurrency = 'LIMIT_CURRENCY',
  LimitType = 'LIMIT_TYPE',
  LimitValue = 'LIMIT_VALUE',
  Period = 'PERIOD',
  TransferDirection = 'TRANSFER_DIRECTION'
}

/** Dynamic WHERE conditions for the `where` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryAccountReachedLimitsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryAccountReachedLimitsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `accountReachedLimits`. */
export type QueryAccountReachedLimitsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryAccountReachedLimitsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.accountStates.orderBy. */
export enum QueryAccountStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.accountStates.orderBy. */
export type QueryAccountStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAccountStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryActiveSessionsStatic = {
  company?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
};

export type QueryActivityLogsStatic = {
  company?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<Scalars['String']['input']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantAccounts`. */
export type QueryApplicantAccountsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantAccountsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantAccountsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStatic {
  IsShow = 'IS_SHOW'
}

/** Input column names for Query.applicantAccounts.filter. */
export type QueryApplicantAccountsFilterStaticInput = {
  is_show?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStaticOperator {
  IsShow = 'is_show'
}

/** Column names for Query.applicantAccounts.filter. */
export enum QueryApplicantAccountsFilterStaticType {
  IsShow = 'is_show'
}

/** Allowed column names for Query.applicantAccounts.orderBy. */
export enum QueryApplicantAccountsOrderByColumn {
  CurrentBalance = 'CURRENT_BALANCE',
  Id = 'ID'
}

/** Order by clause for Query.applicantAccounts.orderBy. */
export type QueryApplicantAccountsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantAccountsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantBankingAccesses`. */
export type QueryApplicantBankingAccessesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantBankingAccessesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantBankingAccessesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.applicantBankingAccesses.filter. */
export type QueryApplicantBankingAccessesFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Column names for Query.applicantBankingAccesses.filter. */
export enum QueryApplicantBankingAccessesFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Allowed column names for Query.applicantBankingAccesses.orderBy. */
export enum QueryApplicantBankingAccessesOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Order by clause for Query.applicantBankingAccesses.orderBy. */
export type QueryApplicantBankingAccessesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantBankingAccessesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStatic {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  HasBusinessTypeMixedIdOrName = 'HAS_BUSINESS_TYPE_MIXED_ID_OR_NAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasKycLevelMixedIdOrName = 'HAS_KYC_LEVEL_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasOwnerMixedIdOrFullname = 'HAS_OWNER_MIXED_ID_OR_FULLNAME',
  HasRiskLevelMixedIdOrName = 'HAS_RISK_LEVEL_MIXED_ID_OR_NAME',
  HasStateReasonMixedIdOrName = 'HAS_STATE_REASON_MIXED_ID_OR_NAME',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  HasStatusMixedIdOrName = 'HAS_STATUS_MIXED_ID_OR_NAME',
  Id = 'ID',
  Name = 'NAME',
  ProjectId = 'PROJECT_ID',
  Url = 'URL'
}

/** Input column names for Query.applicantCompanies.filter. */
export type QueryApplicantCompaniesFilterStaticInput = {
  account_manager_member_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hasBusinessTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasKycLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasOwnerMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasRiskLevelMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasStateReasonMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStatusMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStaticOperator {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Column names for Query.applicantCompanies.filter. */
export enum QueryApplicantCompaniesFilterStaticType {
  AccountManagerMemberId = 'account_manager_member_id',
  CompanyId = 'company_id',
  Email = 'email',
  HasBusinessTypeMixedIdOrName = 'hasBusinessTypeMixedIdOrName',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasKycLevelMixedIdOrName = 'hasKycLevelMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasOwnerMixedIdOrFullname = 'hasOwnerMixedIdOrFullname',
  HasRiskLevelMixedIdOrName = 'hasRiskLevelMixedIdOrName',
  HasStateReasonMixedIdOrName = 'hasStateReasonMixedIdOrName',
  HasStatusFilterById = 'hasStatusFilterById',
  HasStatusMixedIdOrName = 'hasStatusMixedIdOrName',
  Id = 'id',
  Name = 'name',
  ProjectId = 'project_id',
  Url = 'url'
}

/** Allowed column names for Query.applicantCompanies.hasBusinessType. */
export enum QueryApplicantCompaniesHasBusinessTypeColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasBusinessType` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasBusinessTypeWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasBusinessTypeWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasGroupRole. */
export enum QueryApplicantCompaniesHasGroupRoleColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasGroupRoleColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasGroupRole` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasGroupRoleWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasGroupRoleWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasKycLevel. */
export enum QueryApplicantCompaniesHasKycLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasKycLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasKycLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasKycLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasKycLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasKycLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasOwner. */
export enum QueryApplicantCompaniesHasOwnerColumn {
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Dynamic WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasOwnerWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasOwnerColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasOwner` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasOwnerWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasOwnerWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasRiskLevel. */
export enum QueryApplicantCompaniesHasRiskLevelColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasRiskLevelColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasRiskLevel` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasRiskLevelWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasRiskLevelWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasStateReason. */
export enum QueryApplicantCompaniesHasStateReasonColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStateReasonWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStateReasonColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStateReason` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStateReasonWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStateReasonWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.hasStatus. */
export enum QueryApplicantCompaniesHasStatusColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesHasStatusWhereHasConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesHasStatusColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `hasStatus` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesHasStatusWhereHasConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesHasStatusWhereHasConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanies.orderBy. */
export enum QueryApplicantCompaniesOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  OwnerId = 'OWNER_ID',
  Url = 'URL'
}

/** Order by clause for Query.applicantCompanies.orderBy. */
export type QueryApplicantCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanies.where. */
export enum QueryApplicantCompaniesWhereColumn {
  AccountManagerMemberId = 'ACCOUNT_MANAGER_MEMBER_ID',
  ApplicantStateId = 'APPLICANT_STATE_ID',
  ApplicantStateReasonId = 'APPLICANT_STATE_REASON_ID',
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  GroupId = 'GROUP_ID',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompaniesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompaniesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompaniesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanies`. */
export type QueryApplicantCompaniesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompaniesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanyBusinessType.orderBy. */
export enum QueryApplicantCompanyBusinessTypeOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyBusinessType.orderBy. */
export type QueryApplicantCompanyBusinessTypeOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyBusinessTypeOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyBusinessType.where. */
export enum QueryApplicantCompanyBusinessTypeWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyBusinessType`. */
export type QueryApplicantCompanyBusinessTypeWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyBusinessTypeWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyBusinessType`. */
export type QueryApplicantCompanyBusinessTypeWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyBusinessTypeWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanyLabelsAvailable.orderBy. */
export enum QueryApplicantCompanyLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabelsAvailable.orderBy. */
export type QueryApplicantCompanyLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.orderBy. */
export enum QueryApplicantCompanyLabelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantCompanyLabels.orderBy. */
export type QueryApplicantCompanyLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyLabels.where. */
export enum QueryApplicantCompanyLabelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyLabels`. */
export type QueryApplicantCompanyLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantCompanyNotes.orderBy. */
export enum QueryApplicantCompanyNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyNotes.orderBy. */
export type QueryApplicantCompanyNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStatic {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Input column names for Query.applicantCompanyRiskLevelHistory.filter. */
export type QueryApplicantCompanyRiskLevelHistoryFilterStaticInput = {
  applicant_company_id: Scalars['ID']['input'];
  risk_level_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticOperator {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticRequired {
  ApplicantCompanyId = 'applicant_company_id'
}

/** Column names for Query.applicantCompanyRiskLevelHistory.filter. */
export enum QueryApplicantCompanyRiskLevelHistoryFilterStaticType {
  ApplicantCompanyId = 'applicant_company_id',
  RiskLevelId = 'risk_level_id'
}

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.orderBy. */
export enum QueryApplicantCompanyRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantCompanyRiskLevelHistory.orderBy. */
export type QueryApplicantCompanyRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantCompanyRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantCompanyRiskLevelHistory.where. */
export enum QueryApplicantCompanyRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantCompanyRiskLevelHistory`. */
export type QueryApplicantCompanyRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantCompanyRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantDocumentTags`. */
export type QueryApplicantDocumentTagsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantDocumentTagsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantDocumentTagsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStatic {
  HasCategoryFilterByName = 'HAS_CATEGORY_FILTER_BY_NAME',
  Name = 'NAME'
}

/** Input column names for Query.applicantDocumentTags.filter. */
export type QueryApplicantDocumentTagsFilterStaticInput = {
  hasCategoryFilterByName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStaticOperator {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

/** Column names for Query.applicantDocumentTags.filter. */
export enum QueryApplicantDocumentTagsFilterStaticType {
  HasCategoryFilterByName = 'hasCategoryFilterByName',
  Name = 'name'
}

/** Allowed column names for Query.applicantDocumentTags.orderBy. */
export enum QueryApplicantDocumentTagsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantDocumentTags.orderBy. */
export type QueryApplicantDocumentTagsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantDocumentTagsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantDocuments`. */
export type QueryApplicantDocumentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantDocumentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantDocumentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStatic {
  ApplicantId = 'APPLICANT_ID',
  DocumentStateId = 'DOCUMENT_STATE_ID',
  DocumentTypeId = 'DOCUMENT_TYPE_ID',
  Id = 'ID'
}

/** Input column names for Query.applicantDocuments.filter. */
export type QueryApplicantDocumentsFilterStaticInput = {
  applicant_id?: InputMaybe<Scalars['ID']['input']>;
  document_state_id?: InputMaybe<Scalars['ID']['input']>;
  document_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStaticOperator {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

/** Column names for Query.applicantDocuments.filter. */
export enum QueryApplicantDocumentsFilterStaticType {
  ApplicantId = 'applicant_id',
  DocumentStateId = 'document_state_id',
  DocumentTypeId = 'document_type_id',
  Id = 'id'
}

/** Allowed column names for Query.applicantDocuments.orderBy. */
export enum QueryApplicantDocumentsOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantDocuments.orderBy. */
export type QueryApplicantDocumentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantDocumentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividualCompanyPositions`. */
export type QueryApplicantIndividualCompanyPositionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

/** Input column names for Query.applicantIndividualCompanyPositions.filter. */
export type QueryApplicantIndividualCompanyPositionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Column names for Query.applicantIndividualCompanyPositions.filter. */
export enum QueryApplicantIndividualCompanyPositionsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Allowed column names for Query.applicantIndividualCompanyPositions.orderBy. */
export enum QueryApplicantIndividualCompanyPositionsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyPositions.orderBy. */
export type QueryApplicantIndividualCompanyPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividualCompanyRelations`. */
export type QueryApplicantIndividualCompanyRelationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Name = 'NAME'
}

/** Input column names for Query.applicantIndividualCompanyRelations.filter. */
export type QueryApplicantIndividualCompanyRelationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStaticOperator {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Column names for Query.applicantIndividualCompanyRelations.filter. */
export enum QueryApplicantIndividualCompanyRelationsFilterStaticType {
  CompanyId = 'company_id',
  Name = 'name'
}

/** Allowed column names for Query.applicantIndividualCompanyRelations.orderBy. */
export enum QueryApplicantIndividualCompanyRelationsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualCompanyRelations.orderBy. */
export type QueryApplicantIndividualCompanyRelationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualCompanyRelationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabelsAvailable.orderBy. */
export enum QueryApplicantIndividualLabelsAvailableOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabelsAvailable.orderBy. */
export type QueryApplicantIndividualLabelsAvailableOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsAvailableOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.orderBy. */
export enum QueryApplicantIndividualLabelsOrderByColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantIndividualLabels.orderBy. */
export type QueryApplicantIndividualLabelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualLabelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantIndividualLabels.where. */
export enum QueryApplicantIndividualLabelsWhereColumn {
  ApplicantId = 'APPLICANT_ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualLabelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualLabelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantIndividualLabels`. */
export type QueryApplicantIndividualLabelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantIndividualLabelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type QueryApplicantIndividualModulesFilterStatic = {
  applicant_individual_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Allowed column names for Query.applicantIndividualNotes.orderBy. */
export enum QueryApplicantIndividualNotesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.applicantIndividualNotes.orderBy. */
export type QueryApplicantIndividualNotesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualNotesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `applicantIndividuals`. */
export type QueryApplicantIndividualsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantIndividualsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantIndividualsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasModulesFilterById = 'HAS_MODULES_FILTER_BY_ID',
  HasRiskLevelFilterById = 'HAS_RISK_LEVEL_FILTER_BY_ID',
  HasStateReasonFilterById = 'HAS_STATE_REASON_FILTER_BY_ID',
  HasStatusFilterById = 'HAS_STATUS_FILTER_BY_ID',
  Id = 'ID',
  KycLevelId = 'KYC_LEVEL_ID',
  ProjectId = 'PROJECT_ID'
}

/** Input column names for Query.applicantIndividuals.filter. */
export type QueryApplicantIndividualsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasModulesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRiskLevelFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStateReasonFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasStatusFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  kyc_level_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

/** Column names for Query.applicantIndividuals.filter. */
export enum QueryApplicantIndividualsFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasModulesFilterById = 'hasModulesFilterById',
  HasRiskLevelFilterById = 'hasRiskLevelFilterById',
  HasStateReasonFilterById = 'hasStateReasonFilterById',
  HasStatusFilterById = 'hasStatusFilterById',
  Id = 'id',
  KycLevelId = 'kyc_level_id',
  ProjectId = 'project_id'
}

/** Allowed column names for Query.applicantIndividuals.orderBy. */
export enum QueryApplicantIndividualsOrderByColumn {
  CompanyId = 'COMPANY_ID',
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  FirstName = 'FIRST_NAME',
  Fullname = 'FULLNAME',
  Id = 'ID',
  LastName = 'LAST_NAME'
}

/** Order by clause for Query.applicantIndividuals.orderBy. */
export type QueryApplicantIndividualsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantIndividualsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantKycLevels.orderBy. */
export enum QueryApplicantKycLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantKycLevels.orderBy. */
export type QueryApplicantKycLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantKycLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantKycLevels.where. */
export enum QueryApplicantKycLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantKycLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantKycLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantKycLevels`. */
export type QueryApplicantKycLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantKycLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicant_modules.orderBy. */
export enum QueryApplicantModulesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicant_modules.orderBy. */
export type QueryApplicantModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicant_modules.where. */
export enum QueryApplicantModulesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicant_modules`. */
export type QueryApplicantModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicant_modules`. */
export type QueryApplicantModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantRiskLevelHistory.orderBy. */
export enum QueryApplicantRiskLevelHistoryOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.applicantRiskLevelHistory.orderBy. */
export type QueryApplicantRiskLevelHistoryOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelHistoryOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevelHistory.where. */
export enum QueryApplicantRiskLevelHistoryWhereColumn {
  RiskLevelId = 'RISK_LEVEL_ID'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelHistoryWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelHistoryWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevelHistory`. */
export type QueryApplicantRiskLevelHistoryWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelHistoryWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantRiskLevels.orderBy. */
export enum QueryApplicantRiskLevelsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantRiskLevels.orderBy. */
export type QueryApplicantRiskLevelsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantRiskLevelsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantRiskLevels.where. */
export enum QueryApplicantRiskLevelsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantRiskLevelsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantRiskLevelsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantRiskLevels`. */
export type QueryApplicantRiskLevelsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantRiskLevelsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantStateReasons.orderBy. */
export enum QueryApplicantStateReasonsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStateReasons.orderBy. */
export type QueryApplicantStateReasonsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStateReasonsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStateReasons.where. */
export enum QueryApplicantStateReasonsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStateReasonsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStateReasonsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStateReasons`. */
export type QueryApplicantStateReasonsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStateReasonsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantStates.orderBy. */
export enum QueryApplicantStatesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStates.orderBy. */
export type QueryApplicantStatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStates.where. */
export enum QueryApplicantStatesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStates`. */
export type QueryApplicantStatesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.applicantStatuses.orderBy. */
export enum QueryApplicantStatusesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.applicantStatuses.orderBy. */
export type QueryApplicantStatusesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryApplicantStatusesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.applicantStatuses.where. */
export enum QueryApplicantStatusesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryApplicantStatusesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryApplicantStatusesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryApplicantStatusesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `applicantStatuses`. */
export type QueryApplicantStatusesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryApplicantStatusesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type QueryAuthenticationLogsStatic = {
  browser?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  client_type?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Date']['input']>;
  device_type?: InputMaybe<Scalars['String']['input']>;
  domain?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  expired_at?: InputMaybe<Scalars['Date']['input']>;
  group?: InputMaybe<Scalars['String']['input']>;
  ip?: InputMaybe<Scalars['String']['input']>;
  member?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  platform?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `bankCorrespondents`. */
export type QueryBankCorrespondentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryBankCorrespondentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryBankCorrespondentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStatic {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'HAS_BANK_CORRESPONDENT_CURRENCIES_FILTER_BY_CURRENCY_ID',
  HasBankCorrespondentRegionsFilterByRegionId = 'HAS_BANK_CORRESPONDENT_REGIONS_FILTER_BY_REGION_ID',
  Name = 'NAME'
}

/** Input column names for Query.bankCorrespondents.filter. */
export type QueryBankCorrespondentsFilterStaticInput = {
  hasBankCorrespondentCurrenciesFilterByCurrencyId?: InputMaybe<Scalars['ID']['input']>;
  hasBankCorrespondentRegionsFilterByRegionId?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStaticOperator {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

/** Column names for Query.bankCorrespondents.filter. */
export enum QueryBankCorrespondentsFilterStaticType {
  HasBankCorrespondentCurrenciesFilterByCurrencyId = 'hasBankCorrespondentCurrenciesFilterByCurrencyId',
  HasBankCorrespondentRegionsFilterByRegionId = 'hasBankCorrespondentRegionsFilterByRegionId',
  Name = 'name'
}

/** Allowed column names for Query.bankCorrespondents.orderBy. */
export enum QueryBankCorrespondentsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.bankCorrespondents.orderBy. */
export type QueryBankCorrespondentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBankCorrespondentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `businessActivities`. */
export type QueryBusinessActivitiesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryBusinessActivitiesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryBusinessActivitiesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStatic {
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.businessActivities.filter. */
export type QueryBusinessActivitiesFilterStaticInput = {
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStaticOperator {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.businessActivities.filter. */
export enum QueryBusinessActivitiesFilterStaticType {
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.businessActivities.orderBy. */
export enum QueryBusinessActivitiesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.businessActivities.orderBy. */
export type QueryBusinessActivitiesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBusinessActivitiesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryClientCondition = {
  id: Scalars['ID']['input'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `commissionPriceLists`. */
export type QueryCommissionPriceListsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionPriceListsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionPriceListsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  RegionId = 'REGION_ID'
}

/** Input column names for Query.commissionPriceLists.filter. */
export type QueryCommissionPriceListsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

/** Column names for Query.commissionPriceLists.filter. */
export enum QueryCommissionPriceListsFilterStaticType {
  CompanyId = 'company_id',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  RegionId = 'region_id'
}

/** Allowed column names for Query.commissionPriceLists.orderBy. */
export enum QueryCommissionPriceListsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionPriceLists.orderBy. */
export type QueryCommissionPriceListsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionPriceListsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitActionTypes.orderBy. */
export enum QueryCommissionTemplateLimitActionTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitActionTypes.orderBy. */
export type QueryCommissionTemplateLimitActionTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitActionTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitActionTypes.where. */
export enum QueryCommissionTemplateLimitActionTypesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionTypes`. */
export type QueryCommissionTemplateLimitActionTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitActionTypes`. */
export type QueryCommissionTemplateLimitActionTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitActionTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.orderBy. */
export enum QueryCommissionTemplateLimitPeriodsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitPeriods.orderBy. */
export type QueryCommissionTemplateLimitPeriodsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitPeriodsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitPeriods.where. */
export enum QueryCommissionTemplateLimitPeriodsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitPeriods`. */
export type QueryCommissionTemplateLimitPeriodsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitPeriodsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.orderBy. */
export enum QueryCommissionTemplateLimitTransferDirectionsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTransferDirections.orderBy. */
export type QueryCommissionTemplateLimitTransferDirectionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTransferDirectionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTransferDirections.where. */
export enum QueryCommissionTemplateLimitTransferDirectionsWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTransferDirections`. */
export type QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTransferDirectionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.commissionTemplateLimitTypes.orderBy. */
export enum QueryCommissionTemplateLimitTypesOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplateLimitTypes.orderBy. */
export type QueryCommissionTemplateLimitTypesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplateLimitTypesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.commissionTemplateLimitTypes.where. */
export enum QueryCommissionTemplateLimitTypesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplateLimitTypesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplateLimitTypesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `commissionTemplateLimitTypes`. */
export type QueryCommissionTemplateLimitTypesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryCommissionTemplateLimitTypesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type QueryCommissionTemplateLimitsFilterStatic = {
  account_id?: InputMaybe<Scalars['ID']['input']>;
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_action_type_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_period_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_transfer_direction_id?: InputMaybe<Scalars['ID']['input']>;
  commission_template_limit_type_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  period_count?: InputMaybe<Scalars['Int']['input']>;
  region_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `commissionTemplates`. */
export type QueryCommissionTemplatesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCommissionTemplatesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCommissionTemplatesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStatic {
  HasBusinessActivityFilterById = 'HAS_BUSINESS_ACTIVITY_FILTER_BY_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Input column names for Query.commissionTemplates.filter. */
export type QueryCommissionTemplatesFilterStaticInput = {
  hasBusinessActivityFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStaticOperator {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

/** Column names for Query.commissionTemplates.filter. */
export enum QueryCommissionTemplatesFilterStaticType {
  HasBusinessActivityFilterById = 'hasBusinessActivityFilterById',
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name'
}

/** Allowed column names for Query.commissionTemplates.orderBy. */
export enum QueryCommissionTemplatesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.commissionTemplates.orderBy. */
export type QueryCommissionTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCommissionTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `companies`. */
export type QueryCompaniesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryCompaniesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryCompaniesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStatic {
  CountryId = 'COUNTRY_ID',
  Email = 'EMAIL',
  EntityType = 'ENTITY_TYPE',
  HasPaymentProvidersFilterById = 'HAS_PAYMENT_PROVIDERS_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Name = 'NAME',
  RegNumber = 'REG_NUMBER',
  Url = 'URL'
}

/** Input column names for Query.companies.filter. */
export type QueryCompaniesFilterStaticInput = {
  country_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
  hasPaymentProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reg_number?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStaticOperator {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

/** Column names for Query.companies.filter. */
export enum QueryCompaniesFilterStaticType {
  CountryId = 'country_id',
  Email = 'email',
  EntityType = 'entity_type',
  HasPaymentProvidersFilterById = 'hasPaymentProvidersFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Name = 'name',
  RegNumber = 'reg_number',
  Url = 'url'
}

/** Allowed column names for Query.companies.orderBy. */
export enum QueryCompaniesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Id = 'ID',
  Name = 'NAME',
  Url = 'URL'
}

/** Order by clause for Query.companies.orderBy. */
export type QueryCompaniesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryCompaniesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `departmentPositions`. */
export type QueryDepartmentPositionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentPositionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentPositionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStatic {
  HasDepartmentFilterById = 'HAS_DEPARTMENT_FILTER_BY_ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Input column names for Query.departmentPositions.filter. */
export type QueryDepartmentPositionsFilterStaticInput = {
  hasDepartmentFilterById?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStaticOperator {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

/** Column names for Query.departmentPositions.filter. */
export enum QueryDepartmentPositionsFilterStaticType {
  HasDepartmentFilterById = 'hasDepartmentFilterById',
  IsActive = 'is_active',
  Name = 'name'
}

/** Allowed column names for Query.departmentPositions.orderBy. */
export enum QueryDepartmentPositionsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.departmentPositions.orderBy. */
export type QueryDepartmentPositionsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentPositionsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `departments`. */
export type QueryDepartmentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryDepartmentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryDepartmentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Name = 'NAME'
}

/** Input column names for Query.departments.filter. */
export type QueryDepartmentsFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

/** Column names for Query.departments.filter. */
export enum QueryDepartmentsFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  Name = 'name'
}

/** Allowed column names for Query.departments.orderBy. */
export enum QueryDepartmentsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.departments.orderBy. */
export type QueryDepartmentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryDepartmentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `emailNotifications`. */
export type QueryEmailNotificationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailNotificationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailNotificationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasApplicantCompanyMixedIdOrName = 'HAS_APPLICANT_COMPANY_MIXED_ID_OR_NAME',
  HasApplicantIndividualMixedIdOrFullname = 'HAS_APPLICANT_INDIVIDUAL_MIXED_ID_OR_FULLNAME',
  HasGroupRoleMixedIdOrName = 'HAS_GROUP_ROLE_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  HasMemberMixedIdOrFullname = 'HAS_MEMBER_MIXED_ID_OR_FULLNAME',
  HasTemplatesFilterBySubject = 'HAS_TEMPLATES_FILTER_BY_SUBJECT',
  RecipientType = 'RECIPIENT_TYPE',
  Type = 'TYPE'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticEnumNotifyType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticEnumRecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

/** Input column names for Query.emailNotifications.filter. */
export type QueryEmailNotificationsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasApplicantCompanyMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasApplicantIndividualMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupRoleMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasMemberMixedIdOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  hasTemplatesFilterBySubject?: InputMaybe<Scalars['String']['input']>;
  recipient_type?: InputMaybe<RecipientType>;
  type?: InputMaybe<NotifyType>;
};

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticOperator {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

/** Column names for Query.emailNotifications.filter. */
export enum QueryEmailNotificationsFilterStaticType {
  CompanyId = 'company_id',
  HasApplicantCompanyMixedIdOrName = 'hasApplicantCompanyMixedIdOrName',
  HasApplicantIndividualMixedIdOrFullname = 'hasApplicantIndividualMixedIdOrFullname',
  HasGroupRoleMixedIdOrName = 'hasGroupRoleMixedIdOrName',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasMemberMixedIdOrFullname = 'hasMemberMixedIdOrFullname',
  HasTemplatesFilterBySubject = 'hasTemplatesFilterBySubject',
  RecipientType = 'recipient_type',
  Type = 'type'
}

/** Allowed column names for Query.emailNotifications.orderBy. */
export enum QueryEmailNotificationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailNotifications.orderBy. */
export type QueryEmailNotificationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailNotificationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.emailSmtps.orderBy. */
export enum QueryEmailSmtpsOrderByColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.emailSmtps.orderBy. */
export type QueryEmailSmtpsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailSmtpsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `emailTemplates`. */
export type QueryEmailTemplatesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryEmailTemplatesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryEmailTemplatesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCompanyFilterByName = 'HAS_COMPANY_FILTER_BY_NAME',
  Name = 'NAME',
  ServiceType = 'SERVICE_TYPE',
  Type = 'TYPE'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticEnumClientType {
  Administration = 'ADMINISTRATION',
  Client = 'CLIENT'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticEnumServiceType {
  AdminNotify = 'ADMIN_NOTIFY',
  Banking = 'BANKING',
  BankingCommon = 'BANKING_COMMON',
  BankingSystem = 'BANKING_SYSTEM',
  Common = 'COMMON',
  System = 'SYSTEM'
}

/** Input column names for Query.emailTemplates.filter. */
export type QueryEmailTemplatesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterByName?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  service_type?: InputMaybe<ServiceType>;
  type?: InputMaybe<ClientType>;
};

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticOperator {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

/** Column names for Query.emailTemplates.filter. */
export enum QueryEmailTemplatesFilterStaticType {
  CompanyId = 'company_id',
  HasCompanyFilterByName = 'hasCompanyFilterByName',
  Name = 'name',
  ServiceType = 'service_type',
  Type = 'type'
}

/** Allowed column names for Query.emailTemplates.orderBy. */
export enum QueryEmailTemplatesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.emailTemplates.orderBy. */
export type QueryEmailTemplatesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryEmailTemplatesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `feeTypes`. */
export type QueryFeeTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryFeeTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryFeeTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStatic {
  HasOperationTypeFilterById = 'HAS_OPERATION_TYPE_FILTER_BY_ID'
}

/** Input column names for Query.feeTypes.filter. */
export type QueryFeeTypesFilterStaticInput = {
  hasOperationTypeFilterById?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStaticOperator {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

/** Column names for Query.feeTypes.filter. */
export enum QueryFeeTypesFilterStaticType {
  HasOperationTypeFilterById = 'hasOperationTypeFilterById'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `files`. */
export type QueryFilesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryFilesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryFilesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStatic {
  AuthorId = 'AUTHOR_ID',
  EntityType = 'ENTITY_TYPE'
}

/** Input column names for Query.files.filter. */
export type QueryFilesFilterStaticInput = {
  author_id?: InputMaybe<Scalars['ID']['input']>;
  entity_type?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStaticOperator {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

/** Column names for Query.files.filter. */
export enum QueryFilesFilterStaticType {
  AuthorId = 'author_id',
  EntityType = 'entity_type'
}

/** Allowed column names for Query.files.orderBy. */
export enum QueryFilesOrderByColumn {
  AuthorId = 'AUTHOR_ID',
  Id = 'ID'
}

/** Order by clause for Query.files.orderBy. */
export type QueryFilesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryFilesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `getMatchedUsers`. */
export type QueryGetMatchedUsersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGetMatchedUsersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGetMatchedUsersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStatic {
  ApplicantType = 'APPLICANT_TYPE'
}

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticEnumApplicantType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL'
}

/** Input column names for Query.getMatchedUsers.filter. */
export type QueryGetMatchedUsersFilterStaticInput = {
  applicant_type?: InputMaybe<ApplicantType>;
};

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticOperator {
  ApplicantType = 'applicant_type'
}

/** Column names for Query.getMatchedUsers.filter. */
export enum QueryGetMatchedUsersFilterStaticType {
  ApplicantType = 'applicant_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `grantedBankingAccess`. */
export type QueryGrantedBankingAccessFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGrantedBankingAccessFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGrantedBankingAccessFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStatic {
  GrantAccess = 'GRANT_ACCESS',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.grantedBankingAccess.filter. */
export type QueryGrantedBankingAccessFilterStaticInput = {
  grant_access?: InputMaybe<Scalars['Boolean']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStaticOperator {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Column names for Query.grantedBankingAccess.filter. */
export enum QueryGrantedBankingAccessFilterStaticType {
  GrantAccess = 'grant_access',
  MemberId = 'member_id'
}

/** Allowed column names for Query.grantedBankingAccess.orderBy. */
export enum QueryGrantedBankingAccessOrderByColumn {
  ApplicantCompanyId = 'APPLICANT_COMPANY_ID',
  ApplicantIndividualId = 'APPLICANT_INDIVIDUAL_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Order by clause for Query.grantedBankingAccess.orderBy. */
export type QueryGrantedBankingAccessOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGrantedBankingAccessOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `groupList`. */
export type QueryGroupListFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupListFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupListFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStatic {
  CommissionTemplateId = 'COMMISSION_TEMPLATE_ID',
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  ModuleId = 'MODULE_ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.groupList.filter. */
export type QueryGroupListFilterStaticInput = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStaticOperator {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

/** Column names for Query.groupList.filter. */
export enum QueryGroupListFilterStaticType {
  CommissionTemplateId = 'commission_template_id',
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  ModuleId = 'module_id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  RoleId = 'role_id'
}

/** Allowed column names for Query.groupList.orderBy. */
export enum QueryGroupListOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.groupList.orderBy. */
export type QueryGroupListOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupListOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `group_types`. */
export type QueryGroupTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStatic {
  HasGroupsFilterByCompanyId = 'HAS_GROUPS_FILTER_BY_COMPANY_ID',
  HasGroupsFilterByRoleId = 'HAS_GROUPS_FILTER_BY_ROLE_ID',
  HasRolesFilterById = 'HAS_ROLES_FILTER_BY_ID'
}

/** Input column names for Query.group_types.filter. */
export type QueryGroupTypesFilterStaticInput = {
  hasGroupsFilterByCompanyId?: InputMaybe<Scalars['ID']['input']>;
  hasGroupsFilterByRoleId?: InputMaybe<Scalars['ID']['input']>;
  hasRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStaticOperator {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

/** Column names for Query.group_types.filter. */
export enum QueryGroupTypesFilterStaticType {
  HasGroupsFilterByCompanyId = 'hasGroupsFilterByCompanyId',
  HasGroupsFilterByRoleId = 'hasGroupsFilterByRoleId',
  HasRolesFilterById = 'hasRolesFilterById'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `groups`. */
export type QueryGroupsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryGroupsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryGroupsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStatic {
  CompanyId = 'COMPANY_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.groups.filter. */
export type QueryGroupsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_active?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStaticOperator {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

/** Column names for Query.groups.filter. */
export enum QueryGroupsFilterStaticType {
  CompanyId = 'company_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  IsActive = 'is_active',
  Name = 'name',
  RoleId = 'role_id'
}

/** Allowed column names for Query.groups.orderBy. */
export enum QueryGroupsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.groups.orderBy. */
export type QueryGroupsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryGroupsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.kycTimelines.orderBy. */
export enum QueryKycTimelinesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Id = 'ID'
}

/** Order by clause for Query.kycTimelines.orderBy. */
export type QueryKycTimelinesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryKycTimelinesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `memberAccessLimitations`. */
export type QueryMemberAccessLimitationsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMemberAccessLimitationsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMemberAccessLimitationsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStatic {
  DoesntHaveGroupRoles = 'DOESNT_HAVE_GROUP_ROLES',
  GroupTypeId = 'GROUP_TYPE_ID',
  HasGroupRolesFilterById = 'HAS_GROUP_ROLES_FILTER_BY_ID',
  ModuleId = 'MODULE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  ProjectId = 'PROJECT_ID'
}

/** Input column names for Query.memberAccessLimitations.filter. */
export type QueryMemberAccessLimitationsFilterStaticInput = {
  doesntHaveGroupRoles?: InputMaybe<Scalars['Boolean']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  hasGroupRolesFilterById?: InputMaybe<Scalars['ID']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  project_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStaticOperator {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

/** Column names for Query.memberAccessLimitations.filter. */
export enum QueryMemberAccessLimitationsFilterStaticType {
  DoesntHaveGroupRoles = 'doesntHaveGroupRoles',
  GroupTypeId = 'group_type_id',
  HasGroupRolesFilterById = 'hasGroupRolesFilterById',
  ModuleId = 'module_id',
  PaymentProviderId = 'payment_provider_id',
  ProjectId = 'project_id'
}

/** Allowed column names for Query.memberAccessLimitations.orderBy. */
export enum QueryMemberAccessLimitationsOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.memberAccessLimitations.orderBy. */
export type QueryMemberAccessLimitationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMemberAccessLimitationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `members`. */
export type QueryMembersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryMembersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryMembersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStatic {
  CompanyId = 'COMPANY_ID',
  DepartmentId = 'DEPARTMENT_ID',
  DepartmentPositionId = 'DEPARTMENT_POSITION_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  HasGroupRoleFilterById = 'HAS_GROUP_ROLE_FILTER_BY_ID',
  HasRoleFilterById = 'HAS_ROLE_FILTER_BY_ID',
  Id = 'ID',
  IsShowOwnerApplicants = 'IS_SHOW_OWNER_APPLICANTS',
  LastLoginAt = 'LAST_LOGIN_AT',
  MemberStatusId = 'MEMBER_STATUS_ID'
}

/** Input column names for Query.members.filter. */
export type QueryMembersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  department_id?: InputMaybe<Scalars['ID']['input']>;
  department_position_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  hasGroupRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasRoleFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  is_show_owner_applicants?: InputMaybe<Scalars['Boolean']['input']>;
  last_login_at?: InputMaybe<Scalars['String']['input']>;
  member_status_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStaticOperator {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

/** Column names for Query.members.filter. */
export enum QueryMembersFilterStaticType {
  CompanyId = 'company_id',
  DepartmentId = 'department_id',
  DepartmentPositionId = 'department_position_id',
  Email = 'email',
  Fullname = 'fullname',
  HasGroupRoleFilterById = 'hasGroupRoleFilterById',
  HasRoleFilterById = 'hasRoleFilterById',
  Id = 'id',
  IsShowOwnerApplicants = 'is_show_owner_applicants',
  LastLoginAt = 'last_login_at',
  MemberStatusId = 'member_status_id'
}

/** Allowed column names for Query.members.orderBy. */
export enum QueryMembersOrderByColumn {
  Email = 'EMAIL',
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  LastLoginAt = 'LAST_LOGIN_AT'
}

/** Order by clause for Query.members.orderBy. */
export type QueryMembersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMembersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modules.orderBy. */
export enum QueryModulesOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.modules.orderBy. */
export type QueryModulesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryModulesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modules.where. */
export enum QueryModulesWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `modules`. */
export type QueryModulesWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryModulesWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryModulesWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryModulesWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `modules`. */
export type QueryModulesWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryModulesWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Allowed column names for Query.modulesWithKyc.orderBy. */
export enum QueryModulesWithKycOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.modulesWithKyc.orderBy. */
export type QueryModulesWithKycOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryModulesWithKycOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.modulesWithKyc.where. */
export enum QueryModulesWithKycWhereColumn {
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `modulesWithKyc`. */
export type QueryModulesWithKycWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryModulesWithKycWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryModulesWithKycWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryModulesWithKycWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `modulesWithKyc`. */
export type QueryModulesWithKycWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryModulesWithKycWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `operationTypes`. */
export type QueryOperationTypesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryOperationTypesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryOperationTypesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStatic {
  FeeTypeId = 'FEE_TYPE_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID',
  TransferType = 'TRANSFER_TYPE'
}

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticEnumTransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

/** Input column names for Query.operationTypes.filter. */
export type QueryOperationTypesFilterStaticInput = {
  fee_type_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
  transfer_type?: InputMaybe<TransferType>;
};

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticOperator {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

/** Column names for Query.operationTypes.filter. */
export enum QueryOperationTypesFilterStaticType {
  FeeTypeId = 'fee_type_id',
  PaymentSystemId = 'payment_system_id',
  TransferType = 'transfer_type'
}

/** Allowed column names for Query.owners.orderBy. */
export enum QueryOwnersOrderByColumn {
  CreatedAt = 'CREATED_AT',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.owners.orderBy. */
export type QueryOwnersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryOwnersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type QueryPaymentBankCondition = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_code?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id: Scalars['ID']['input'];
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  payment_system_id: Scalars['ID']['input'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentBanks`. */
export type QueryPaymentBanksFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentBanksFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentBanksFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStatic {
  Address = 'ADDRESS',
  BankCode = 'BANK_CODE',
  CountryId = 'COUNTRY_ID',
  Id = 'ID',
  Name = 'NAME',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemCode = 'PAYMENT_SYSTEM_CODE',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

/** Input column names for Query.paymentBanks.filter. */
export type QueryPaymentBanksFilterStaticInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  bank_code?: InputMaybe<Scalars['String']['input']>;
  country_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_code?: InputMaybe<Scalars['String']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStaticOperator {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

/** Column names for Query.paymentBanks.filter. */
export enum QueryPaymentBanksFilterStaticType {
  Address = 'address',
  BankCode = 'bank_code',
  CountryId = 'country_id',
  Id = 'id',
  Name = 'name',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemCode = 'payment_system_code',
  PaymentSystemId = 'payment_system_id'
}

/** Allowed column names for Query.paymentBanks.orderBy. */
export enum QueryPaymentBanksOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentBanks.orderBy. */
export type QueryPaymentBanksOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentBanksOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentProviderIbans`. */
export type QueryPaymentProviderIbansFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProviderIbansFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProviderIbansFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStatic {
  CompanyId = 'COMPANY_ID',
  CurrencyId = 'CURRENCY_ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentProviderIbans.filter. */
export type QueryPaymentProviderIbansFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  currency_id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStaticOperator {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

/** Column names for Query.paymentProviderIbans.filter. */
export enum QueryPaymentProviderIbansFilterStaticType {
  CompanyId = 'company_id',
  CurrencyId = 'currency_id',
  Name = 'name'
}

/** Allowed column names for Query.paymentProviderIbans.orderBy. */
export enum QueryPaymentProviderIbansOrderByColumn {
  Id = 'ID'
}

/** Order by clause for Query.paymentProviderIbans.orderBy. */
export type QueryPaymentProviderIbansOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentProviderIbansOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentProviders`. */
export type QueryPaymentProvidersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentProvidersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentProvidersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterById = 'HAS_ACCOUNT_FILTER_BY_ID',
  HasCommissionTemplateFilterById = 'HAS_COMMISSION_TEMPLATE_FILTER_BY_ID',
  HasPaymentSystemsFilterById = 'HAS_PAYMENT_SYSTEMS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentProviders.filter. */
export type QueryPaymentProvidersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasAccountFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCommissionTemplateFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemsFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.paymentProviders.filter. */
export enum QueryPaymentProvidersFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterById = 'hasAccountFilterById',
  HasCommissionTemplateFilterById = 'hasCommissionTemplateFilterById',
  HasPaymentSystemsFilterById = 'hasPaymentSystemsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.paymentProviders.orderBy. */
export enum QueryPaymentProvidersOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentProviders.orderBy. */
export type QueryPaymentProvidersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentProvidersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentStatuses`. */
export type QueryPaymentStatusesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentStatusesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentStatusesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStatic {
  OperationType = 'OPERATION_TYPE'
}

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticEnumOperationTypeEnum {
  BetweenAccount = 'BETWEEN_ACCOUNT',
  BetweenUsers = 'BETWEEN_USERS',
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Exchange = 'EXCHANGE',
  IncomingTransfer = 'INCOMING_TRANSFER',
  OutgoingTransfer = 'OUTGOING_TRANSFER',
  ScheduledFee = 'SCHEDULED_FEE'
}

/** Input column names for Query.paymentStatuses.filter. */
export type QueryPaymentStatusesFilterStaticInput = {
  operation_type?: InputMaybe<OperationTypeEnum>;
};

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticOperator {
  OperationType = 'operation_type'
}

/** Column names for Query.paymentStatuses.filter. */
export enum QueryPaymentStatusesFilterStaticType {
  OperationType = 'operation_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `paymentSystems`. */
export type QueryPaymentSystemsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentSystemsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentSystemsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStatic {
  HasCompaniesFilterById = 'HAS_COMPANIES_FILTER_BY_ID',
  HasProvidersFilterById = 'HAS_PROVIDERS_FILTER_BY_ID',
  HasProvidersFilterByName = 'HAS_PROVIDERS_FILTER_BY_NAME',
  HasRegionsFilterById = 'HAS_REGIONS_FILTER_BY_ID',
  Id = 'ID',
  Name = 'NAME'
}

/** Input column names for Query.paymentSystems.filter. */
export type QueryPaymentSystemsFilterStaticInput = {
  hasCompaniesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasProvidersFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasProvidersFilterByName?: InputMaybe<Scalars['String']['input']>;
  hasRegionsFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['Mixed']['input']>;
  name?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStaticOperator {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Column names for Query.paymentSystems.filter. */
export enum QueryPaymentSystemsFilterStaticType {
  HasCompaniesFilterById = 'hasCompaniesFilterById',
  HasProvidersFilterById = 'hasProvidersFilterById',
  HasProvidersFilterByName = 'hasProvidersFilterByName',
  HasRegionsFilterById = 'hasRegionsFilterById',
  Id = 'id',
  Name = 'name'
}

/** Allowed column names for Query.paymentSystems.orderBy. */
export enum QueryPaymentSystemsOrderByColumn {
  Id = 'ID',
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

/** Order by clause for Query.paymentSystems.orderBy. */
export type QueryPaymentSystemsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentSystemsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `payments`. */
export type QueryPaymentsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPaymentsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPaymentsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Input column names for Query.payments.filter. */
export type QueryPaymentsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStaticOperator {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Column names for Query.payments.filter. */
export enum QueryPaymentsFilterStaticType {
  CompanyId = 'company_id',
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PaymentProviderId = 'payment_provider_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Allowed column names for Query.payments.orderBy. */
export enum QueryPaymentsOrderByColumn {
  Amount = 'AMOUNT',
  CreatedAt = 'CREATED_AT',
  Fee = 'FEE',
  Id = 'ID',
  PaymentNumber = 'PAYMENT_NUMBER'
}

/** Order by clause for Query.payments.orderBy. */
export type QueryPaymentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.permissions.where. */
export enum QueryPermissionsWhereColumn {
  Id = 'ID',
  Name = 'NAME'
}

/** Dynamic WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<QueryPermissionsWhereWhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPermissionsWhereWhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPermissionsWhereColumn>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE conditions for the `where` argument on the query `permissions`. */
export type QueryPermissionsWhereWhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<QueryPermissionsWhereWhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

/** Dynamic WHERE conditions for the `filter` argument on the query `priceListFees`. */
export type QueryPriceListFeesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryPriceListFeesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryPriceListFeesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStatic {
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  HasFeesFilterById = 'HAS_FEES_FILTER_BY_ID',
  HasPaymentProviderFilterById = 'HAS_PAYMENT_PROVIDER_FILTER_BY_ID',
  HasPaymentSystemFilterById = 'HAS_PAYMENT_SYSTEM_FILTER_BY_ID',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  PeriodId = 'PERIOD_ID',
  PriceListId = 'PRICE_LIST_ID',
  TypeId = 'TYPE_ID'
}

/** Input column names for Query.priceListFees.filter. */
export type QueryPriceListFeesFilterStaticInput = {
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasFeesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentProviderFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasPaymentSystemFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  period_id?: InputMaybe<Scalars['ID']['input']>;
  price_list_id?: InputMaybe<Scalars['ID']['input']>;
  type_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStaticOperator {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

/** Column names for Query.priceListFees.filter. */
export enum QueryPriceListFeesFilterStaticType {
  HasCompanyFilterById = 'hasCompanyFilterById',
  HasFeesFilterById = 'hasFeesFilterById',
  HasPaymentProviderFilterById = 'hasPaymentProviderFilterById',
  HasPaymentSystemFilterById = 'hasPaymentSystemFilterById',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  PeriodId = 'period_id',
  PriceListId = 'price_list_id',
  TypeId = 'type_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `projects`. */
export type QueryProjectsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryProjectsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryProjectsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStatic {
  CompanyId = 'COMPANY_ID',
  Id = 'ID',
  ModuleId = 'MODULE_ID'
}

/** Input column names for Query.projects.filter. */
export type QueryProjectsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  module_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStaticOperator {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

/** Column names for Query.projects.filter. */
export enum QueryProjectsFilterStaticType {
  CompanyId = 'company_id',
  Id = 'id',
  ModuleId = 'module_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `regions`. */
export type QueryRegionsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRegionsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRegionsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasCountriesFilterById = 'HAS_COUNTRIES_FILTER_BY_ID',
  HasCountriesFilterByName = 'HAS_COUNTRIES_FILTER_BY_NAME',
  HasPaymentSystemMixedIdOrName = 'HAS_PAYMENT_SYSTEM_MIXED_ID_OR_NAME'
}

/** Input column names for Query.regions.filter. */
export type QueryRegionsFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasCountriesFilterById?: InputMaybe<Scalars['ID']['input']>;
  hasCountriesFilterByName?: InputMaybe<Scalars['String']['input']>;
  hasPaymentSystemMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStaticOperator {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

/** Column names for Query.regions.filter. */
export enum QueryRegionsFilterStaticType {
  CompanyId = 'company_id',
  HasCountriesFilterById = 'hasCountriesFilterById',
  HasCountriesFilterByName = 'hasCountriesFilterByName',
  HasPaymentSystemMixedIdOrName = 'hasPaymentSystemMixedIdOrName'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `requisites`. */
export type QueryRequisitesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRequisitesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRequisitesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStatic {
  AccountNumber = 'ACCOUNT_NUMBER',
  CompanyId = 'COMPANY_ID',
  PaymentBankId = 'PAYMENT_BANK_ID',
  PaymentProviderId = 'PAYMENT_PROVIDER_ID',
  PaymentSystemId = 'PAYMENT_SYSTEM_ID'
}

/** Input column names for Query.requisites.filter. */
export type QueryRequisitesFilterStaticInput = {
  account_number?: InputMaybe<Scalars['String']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  payment_bank_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStaticOperator {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

/** Column names for Query.requisites.filter. */
export enum QueryRequisitesFilterStaticType {
  AccountNumber = 'account_number',
  CompanyId = 'company_id',
  PaymentBankId = 'payment_bank_id',
  PaymentProviderId = 'payment_provider_id',
  PaymentSystemId = 'payment_system_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `roles`. */
export type QueryRolesFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryRolesFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryRolesFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStatic {
  CompanyId = 'COMPANY_ID',
  HasGroupsMixedIdOrName = 'HAS_GROUPS_MIXED_ID_OR_NAME',
  HasGroupTypeMixedIdOrName = 'HAS_GROUP_TYPE_MIXED_ID_OR_NAME',
  Name = 'NAME'
}

/** Input column names for Query.roles.filter. */
export type QueryRolesFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  hasGroupTypeMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  hasGroupsMixedIdOrName?: InputMaybe<Scalars['Mixed']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStaticOperator {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

/** Column names for Query.roles.filter. */
export enum QueryRolesFilterStaticType {
  CompanyId = 'company_id',
  HasGroupTypeMixedIdOrName = 'hasGroupTypeMixedIdOrName',
  HasGroupsMixedIdOrName = 'hasGroupsMixedIdOrName',
  Name = 'name'
}

/** Allowed column names for Query.roles.orderBy. */
export enum QueryRolesOrderByColumn {
  Description = 'DESCRIPTION',
  Id = 'ID',
  Name = 'NAME'
}

/** Order by clause for Query.roles.orderBy. */
export type QueryRolesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryRolesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `tickets`. */
export type QueryTicketsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTicketsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTicketsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStatic {
  ClientId = 'CLIENT_ID',
  HasCompanyFilterById = 'HAS_COMPANY_FILTER_BY_ID',
  Id = 'ID',
  MemberId = 'MEMBER_ID'
}

/** Input column names for Query.tickets.filter. */
export type QueryTicketsFilterStaticInput = {
  client_id?: InputMaybe<Scalars['ID']['input']>;
  hasCompanyFilterById?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  member_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStaticOperator {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

/** Column names for Query.tickets.filter. */
export enum QueryTicketsFilterStaticType {
  ClientId = 'client_id',
  HasCompanyFilterById = 'hasCompanyFilterById',
  Id = 'id',
  MemberId = 'member_id'
}

/** Allowed column names for Query.tickets.orderBy. */
export enum QueryTicketsOrderByColumn {
  Id = 'ID'
}

/** Aggregate specification for Query.tickets.orderBy.company. */
export type QueryTicketsOrderByCompany = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Aggregate specification for Query.tickets.orderBy.department. */
export type QueryTicketsOrderByDepartment = {
  /** Always COUNT. */
  aggregate: OrderByRelationAggregateFunction;
};

/** Order by clause for Query.tickets.orderBy. */
export type QueryTicketsOrderByRelationOrderByClause = {
  /** The column that is used for ordering. */
  column?: InputMaybe<QueryTicketsOrderByColumn>;
  /** Aggregate specification. */
  company?: InputMaybe<QueryTicketsOrderByCompany>;
  /** Aggregate specification. */
  department?: InputMaybe<QueryTicketsOrderByDepartment>;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Dynamic WHERE conditions for the `filter` argument on the query `transferIncomings`. */
export type QueryTransferIncomingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferIncomingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferIncomingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  SenderName = 'SENDER_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID'
}

/** Input column names for Query.transferIncomings.filter. */
export type QueryTransferIncomingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  sender_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Column names for Query.transferIncomings.filter. */
export enum QueryTransferIncomingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  SenderName = 'sender_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `transferOutgoings`. */
export type QueryTransferOutgoingsFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryTransferOutgoingsFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryTransferOutgoingsFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStatic {
  HasAccountFilterByAccountNumber = 'HAS_ACCOUNT_FILTER_BY_ACCOUNT_NUMBER',
  HasFeeFilterByFee = 'HAS_FEE_FILTER_BY_FEE',
  HasFeeFilterByFeeAmount = 'HAS_FEE_FILTER_BY_FEE_AMOUNT',
  HasSenderMixedNameOrFullname = 'HAS_SENDER_MIXED_NAME_OR_FULLNAME',
  Id = 'ID',
  OperationTypeId = 'OPERATION_TYPE_ID',
  RecipientName = 'RECIPIENT_NAME',
  StatusId = 'STATUS_ID',
  UrgencyId = 'URGENCY_ID',
  UserType = 'USER_TYPE'
}

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticEnumUserType {
  ApplicantCompany = 'APPLICANT_COMPANY',
  ApplicantIndividual = 'APPLICANT_INDIVIDUAL',
  Members = 'MEMBERS'
}

/** Input column names for Query.transferOutgoings.filter. */
export type QueryTransferOutgoingsFilterStaticInput = {
  hasAccountFilterByAccountNumber?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFee?: InputMaybe<Scalars['String']['input']>;
  hasFeeFilterByFeeAmount?: InputMaybe<Scalars['String']['input']>;
  hasSenderMixedNameOrFullname?: InputMaybe<Scalars['Mixed']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  operation_type_id?: InputMaybe<Scalars['ID']['input']>;
  recipient_name?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['ID']['input']>;
  urgency_id?: InputMaybe<Scalars['ID']['input']>;
  user_type?: InputMaybe<UserType>;
};

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticOperator {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Column names for Query.transferOutgoings.filter. */
export enum QueryTransferOutgoingsFilterStaticType {
  HasAccountFilterByAccountNumber = 'hasAccountFilterByAccountNumber',
  HasFeeFilterByFee = 'hasFeeFilterByFee',
  HasFeeFilterByFeeAmount = 'hasFeeFilterByFeeAmount',
  HasSenderMixedNameOrFullname = 'hasSenderMixedNameOrFullname',
  Id = 'id',
  OperationTypeId = 'operation_type_id',
  RecipientName = 'recipient_name',
  StatusId = 'status_id',
  UrgencyId = 'urgency_id',
  UserType = 'user_type'
}

/** Dynamic WHERE conditions for the `filter` argument on the query `users`. */
export type QueryUsersFilterFilterConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<QueryUsersFilterFilterConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<QueryUsersFilterStatic>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStatic {
  CompanyId = 'COMPANY_ID',
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  GroupId = 'GROUP_ID',
  GroupTypeId = 'GROUP_TYPE_ID',
  Id = 'ID',
  RoleId = 'ROLE_ID'
}

/** Input column names for Query.users.filter. */
export type QueryUsersFilterStaticInput = {
  company_id?: InputMaybe<Scalars['ID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  fullname?: InputMaybe<Scalars['String']['input']>;
  group_id?: InputMaybe<Scalars['ID']['input']>;
  group_type_id?: InputMaybe<Scalars['ID']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  role_id?: InputMaybe<Scalars['ID']['input']>;
};

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStaticOperator {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

/** Column names for Query.users.filter. */
export enum QueryUsersFilterStaticType {
  CompanyId = 'company_id',
  Email = 'email',
  Fullname = 'fullname',
  GroupId = 'group_id',
  GroupTypeId = 'group_type_id',
  Id = 'id',
  RoleId = 'role_id'
}

/** Allowed column names for Query.users.orderBy. */
export enum QueryUsersOrderByColumn {
  Email = 'EMAIL',
  Fullname = 'FULLNAME',
  Id = 'ID'
}

/** Order by clause for Query.users.orderBy. */
export type QueryUsersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryUsersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

export type RawFile = {
  __typename?: 'RawFile';
  base64: Scalars['String']['output'];
};

export enum RecipientType {
  Group = 'GROUP',
  Person = 'PERSON'
}

/** Регион */
export type Region = {
  __typename?: 'Region';
  /** Получать компанию */
  company?: Maybe<Company>;
  /** Получать страны */
  countries?: Maybe<Array<Maybe<Country>>>;
  id: Scalars['ID']['output'];
  /** Название региона */
  name: Scalars['String']['output'];
};

/** A paginated list of Region items. */
export type RegionPaginator = {
  __typename?: 'RegionPaginator';
  /** A list of Region items. */
  data: Array<Region>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/**
 * Реквизиты
 * Banking -> Account -> Requisites
 */
export type Requisite = {
  __typename?: 'Requisite';
  /** IBAN */
  account_number?: Maybe<Scalars['String']['output']>;
  /** Связанный банк */
  bank?: Maybe<PaymentBank>;
  /** Currency */
  currency?: Maybe<Currencies>;
  /** ACCOUNT ID */
  id?: Maybe<Scalars['ID']['output']>;
  /** Создатель */
  owner?: Maybe<ApplicantIndividual>;
};

export type RespondentFee = {
  __typename?: 'RespondentFee';
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

/**
 * Роли
 * Settings->Manager Roles->Roles List
 */
export type Role = {
  __typename?: 'Role';
  /** Получить компанию */
  company?: Maybe<Company>;
  /** Описание для роли */
  description?: Maybe<Scalars['String']['output']>;
  /** Получить тип группы */
  group_type?: Maybe<GroupType>;
  /** Получить список групп */
  groups?: Maybe<Array<Maybe<GroupRole>>>;
  /** Получить количество групп с данной ролью */
  groups_count?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  is_all_companies?: Maybe<Scalars['Boolean']['output']>;
  /** Название роли */
  name: Scalars['String']['output'];
  /** Получить список категорий полномочий */
  permission_category_all_member?: Maybe<Array<Maybe<PermissionCategory>>>;
  /** Получить список полномочий */
  permissions?: Maybe<Array<Maybe<Permissions>>>;
  /** Получить дерево разрешений */
  permissions_tree?: Maybe<Scalars['JSON']['output']>;
};

/** A paginated list of Role items. */
export type RolePaginator = {
  __typename?: 'RolePaginator';
  /** A list of Role items. */
  data: Array<Role>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The available SQL operators that are used to filter query results. */
export enum SqlOperator {
  /** Whether a value is within a range of values (`BETWEEN`) */
  Between = 'BETWEEN',
  /** Equal operator (`=`) */
  Eq = 'EQ',
  /** Greater than operator (`>`) */
  Gt = 'GT',
  /** Greater than or equal operator (`>=`) */
  Gte = 'GTE',
  /** Simple pattern matching (`ILIKE`) */
  Ilike = 'ILIKE',
  /** Whether a value is within a set of values (`IN`) */
  In = 'IN',
  /** Whether a value is not null (`IS NOT NULL`) */
  IsNotNull = 'IS_NOT_NULL',
  /** Whether a value is null (`IS NULL`) */
  IsNull = 'IS_NULL',
  /** Simple pattern matching (`LIKE`) */
  Like = 'LIKE',
  /** Less than operator (`<`) */
  Lt = 'LT',
  /** Less than or equal operator (`<=`) */
  Lte = 'LTE',
  /** Not equal operator (`!=`) */
  Neq = 'NEQ',
  /** Whether a value is not within a range of values (`NOT BETWEEN`) */
  NotBetween = 'NOT_BETWEEN',
  /** Whether a value is not within a set of values (`NOT IN`) */
  NotIn = 'NOT_IN',
  /** Negation of simple pattern matching (`NOT LIKE`) */
  NotLike = 'NOT_LIKE'
}

export enum Securities {
  Auto = 'Auto',
  Ssl = 'Ssl',
  Starttls = 'Starttls'
}

export type Sender = {
  __typename?: 'Sender';
  /** Sender name */
  sender_name: Scalars['String']['output'];
};

export enum ServiceType {
  AdminNotify = 'AdminNotify',
  Banking = 'Banking',
  BankingCommon = 'BankingCommon',
  BankingSystem = 'BankingSystem',
  Common = 'Common',
  System = 'System'
}

export enum Sex {
  Female = 'Female',
  Male = 'Male'
}

/** Information about pagination using a simple paginator. */
export type SimplePaginatorInfo = {
  __typename?: 'SimplePaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type State = {
  __typename?: 'State';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

export type StateReason = {
  __typename?: 'StateReason';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

export type StatusType = {
  __typename?: 'StatusType';
  message?: Maybe<Scalars['String']['output']>;
  status: Scalars['String']['output'];
};

/**
 * Билеты
 * Banking -> Tickets
 */
export type Ticket = {
  __typename?: 'Ticket';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  /** Получить комментарии */
  comments?: Maybe<Array<Maybe<TicketComments>>>;
  /** Получить компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить Департаменты */
  department?: Maybe<Department>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID']['output'];
  /** Получить мембера */
  member?: Maybe<Members>;
  /** Сообщение */
  message: Scalars['String']['output'];
  /** Получить позицию */
  position?: Maybe<DepartmentPosition>;
  /** Статус */
  status?: Maybe<TicketStatus>;
  /** Название */
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** Комментарии билетов */
export type TicketComments = {
  __typename?: 'TicketComments';
  /** Получить Клиента */
  client?: Maybe<ApplicantIndividual>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить файл */
  file_object?: Maybe<Files>;
  id: Scalars['ID']['output'];
  /** Сообщение */
  message: Scalars['String']['output'];
  /** Получить билет */
  ticket?: Maybe<Ticket>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of Ticket items. */
export type TicketPaginator = {
  __typename?: 'TicketPaginator';
  /** A list of Ticket items. */
  data: Array<Ticket>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TicketStatus = {
  __typename?: 'TicketStatus';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

/** Исходящие переводы */
export type TransferIncoming = {
  __typename?: 'TransferIncoming';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal']['output'];
  amount_debt: Scalars['Decimal']['output'];
  bank_message?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Коммиссия */
  fee?: Maybe<Fee>;
  /** Все коммиссии */
  fees?: Maybe<Array<Maybe<Fee>>>;
  /** Файлы */
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID']['output'];
  /** Получить связанный банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Номер платежа */
  payment_number: Scalars['String']['output'];
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную информацию по провайдеру */
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанную срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']['output']>;
  /** Получатьль платежа (Индивидуал или Компани) */
  recipient?: Maybe<Client>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Номер счета или IBAN отправителя */
  sender_account?: Maybe<Scalars['String']['output']>;
  sender_address?: Maybe<Scalars['String']['output']>;
  sender_bank_address?: Maybe<Scalars['String']['output']>;
  sender_bank_country?: Maybe<Country>;
  sender_bank_name?: Maybe<Scalars['String']['output']>;
  sender_bank_swift?: Maybe<Scalars['String']['output']>;
  sender_city?: Maybe<Scalars['String']['output']>;
  sender_country?: Maybe<Country>;
  sender_name?: Maybe<Scalars['String']['output']>;
  sender_state?: Maybe<Scalars['String']['output']>;
  sender_zip?: Maybe<Scalars['String']['output']>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']['output']>;
  /** Получить связанный тип трансфера */
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** История входящих переводов */
export type TransferIncomingHistory = {
  __typename?: 'TransferIncomingHistory';
  /** Действие */
  action?: Maybe<Scalars['String']['output']>;
  /** Комментарий */
  comment?: Maybe<Scalars['String']['output']>;
  /** Дата */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Статус */
  status?: Maybe<PaymentStatus>;
};

/** A paginated list of TransferIncomingHistory items. */
export type TransferIncomingHistoryPaginator = {
  __typename?: 'TransferIncomingHistoryPaginator';
  /** A list of TransferIncomingHistory items. */
  data: Array<TransferIncomingHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of TransferIncoming items. */
export type TransferIncomingPaginator = {
  __typename?: 'TransferIncomingPaginator';
  /** A list of TransferIncoming items. */
  data: Array<TransferIncoming>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TransferIncomingStatistic = {
  __typename?: 'TransferIncomingStatistic';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status_id: Scalars['ID']['output'];
};

/** Исходящие переводы */
export type TransferOutgoing = {
  __typename?: 'TransferOutgoing';
  /** Получить связанный аккаунт */
  account?: Maybe<Account>;
  /** Сумма */
  amount: Scalars['Decimal']['output'];
  amount_debt: Scalars['Decimal']['output'];
  bank_message?: Maybe<Scalars['String']['output']>;
  channel?: Maybe<Scalars['String']['output']>;
  /** Получить связанную компанию */
  company?: Maybe<Company>;
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Получить связанную валюту */
  currency?: Maybe<Currencies>;
  /** Дата и время выполнения транзакции */
  execution_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Коммиссия */
  fee?: Maybe<Fee>;
  /** Все коммиссии */
  fees?: Maybe<Array<Maybe<Fee>>>;
  /** Файлы */
  files?: Maybe<Array<Maybe<Files>>>;
  id: Scalars['ID']['output'];
  /** Получить связанный банк */
  payment_bank?: Maybe<PaymentBank>;
  /** Номер платежа */
  payment_number: Scalars['String']['output'];
  /** Получить связанный тип */
  payment_operation_type?: Maybe<OperationType>;
  /** Получить связанный провайдер */
  payment_provider?: Maybe<PaymentProvider>;
  /** Получить связанную информацию по провайдеру */
  payment_provider_history?: Maybe<PaymentProviderHistory>;
  /** Получить связанную платежную систему */
  payment_system?: Maybe<PaymentSystem>;
  /** Получить связанныую срочность */
  payment_urgency?: Maybe<PaymentUrgency>;
  reason?: Maybe<Scalars['String']['output']>;
  /** Номер счета или IBAN получателя */
  recipient_account: Scalars['String']['output'];
  recipient_address: Scalars['String']['output'];
  recipient_bank_address: Scalars['String']['output'];
  recipient_bank_country?: Maybe<Country>;
  recipient_bank_name: Scalars['String']['output'];
  recipient_bank_swift?: Maybe<Scalars['String']['output']>;
  recipient_city: Scalars['String']['output'];
  recipient_country?: Maybe<Country>;
  recipient_name: Scalars['String']['output'];
  recipient_state: Scalars['String']['output'];
  recipient_zip: Scalars['String']['output'];
  /** Получить инициатора платежа (Мембер или Апликант) */
  requested_by?: Maybe<Clientable>;
  respondent_fee?: Maybe<RespondentFee>;
  /** Получить отправителя (Индивидуал или Компани) */
  sender?: Maybe<Client>;
  /** Статус */
  status?: Maybe<PaymentStatus>;
  system_message?: Maybe<Scalars['String']['output']>;
  /** Получить связанный тип трансфера */
  transfer_type?: Maybe<TypeOfTransfer>;
  updated_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** Тип инициатора платежа */
  user_type?: Maybe<UserType>;
};

/** История исходящих переводов */
export type TransferOutgoingHistory = {
  __typename?: 'TransferOutgoingHistory';
  /** Действие */
  action?: Maybe<Scalars['String']['output']>;
  /** Комментарий */
  comment?: Maybe<Scalars['String']['output']>;
  /** Дата */
  created_at?: Maybe<Scalars['DateTimeUtc']['output']>;
  id: Scalars['ID']['output'];
  /** Статус */
  status?: Maybe<PaymentStatus>;
};

/** A paginated list of TransferOutgoingHistory items. */
export type TransferOutgoingHistoryPaginator = {
  __typename?: 'TransferOutgoingHistoryPaginator';
  /** A list of TransferOutgoingHistory items. */
  data: Array<TransferOutgoingHistory>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** A paginated list of TransferOutgoing items. */
export type TransferOutgoingPaginator = {
  __typename?: 'TransferOutgoingPaginator';
  /** A list of TransferOutgoing items. */
  data: Array<TransferOutgoing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TransferOutgoingStatistic = {
  __typename?: 'TransferOutgoingStatistic';
  count: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  status_id: Scalars['ID']['output'];
};

export enum TransferType {
  Incoming = 'INCOMING',
  Outgoing = 'OUTGOING'
}

/** Методы двухфакторной авторизации */
export type TwoFactorAuthSettings = {
  __typename?: 'TwoFactorAuthSettings';
  id: Scalars['ID']['output'];
  /** Название второго фактора */
  name: Scalars['String']['output'];
};

/** A paginated list of TwoFactorAuthSettings items. */
export type TwoFactorAuthSettingsPaginator = {
  __typename?: 'TwoFactorAuthSettingsPaginator';
  /** A list of TwoFactorAuthSettings items. */
  data: Array<TwoFactorAuthSettings>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

export type TwoFactorAuthToken = {
  __typename?: 'TwoFactorAuthToken';
  auth_token?: Maybe<Scalars['String']['output']>;
  two_factor?: Maybe<Scalars['Boolean']['output']>;
};

export type TypeOfIndustry = {
  __typename?: 'TypeOfIndustry';
  /** ID */
  id: Scalars['ID']['output'];
  /** Название */
  name: Scalars['String']['output'];
};

export type TypeOfTransfer = {
  __typename?: 'TypeOfTransfer';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export enum UserType {
  ApplicantCompany = 'ApplicantCompany',
  ApplicantIndividual = 'ApplicantIndividual',
  Members = 'Members'
}

/**
 * Пользователи
 * Roles->Users
 */
export type Users = {
  __typename?: 'Users';
  /** получить компанию */
  company?: Maybe<Company>;
  /** Email участника */
  email?: Maybe<Scalars['EMAIL']['output']>;
  /** Имя участника */
  first_name?: Maybe<Scalars['String']['output']>;
  /** Полное имя */
  fullname?: Maybe<Scalars['String']['output']>;
  /** Получить группу */
  group?: Maybe<GroupRole>;
  id?: Maybe<Scalars['ID']['output']>;
  /** Фамилия участника */
  last_name?: Maybe<Scalars['String']['output']>;
};

/** A paginated list of Users items. */
export type UsersPaginator = {
  __typename?: 'UsersPaginator';
  /** A list of Users items. */
  data: Array<Users>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** Dynamic WHERE conditions for queries. */
export type WhereConditions = {
  /** A set of conditions that requires all conditions to match. */
  AND?: InputMaybe<Array<WhereConditions>>;
  /** Check whether a relation exists. Extra conditions or a minimum amount can be applied. */
  HAS?: InputMaybe<WhereConditionsRelation>;
  /** A set of conditions that requires at least one condition to match. */
  OR?: InputMaybe<Array<WhereConditions>>;
  /** The column that is used for the condition. */
  column?: InputMaybe<Scalars['String']['input']>;
  /** The operator that is used for the condition. */
  operator?: InputMaybe<SqlOperator>;
  /** The value that is used for the condition. */
  value?: InputMaybe<Scalars['Mixed']['input']>;
};

/** Dynamic HAS conditions for WHERE condition queries. */
export type WhereConditionsRelation = {
  /** The amount to test. */
  amount?: InputMaybe<Scalars['Int']['input']>;
  /** Additional condition logic. */
  condition?: InputMaybe<WhereConditions>;
  /** The comparison operator to test against the amount. */
  operator?: InputMaybe<SqlOperator>;
  /** The relation that is checked. */
  relation: Scalars['String']['input'];
};

export type DashboardAccountsStatistic = {
  __typename?: 'dashboardAccountsStatistic';
  account_state_id: Scalars['ID']['output'];
  account_state_name: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  payment_provider_id: Scalars['ID']['output'];
  payment_provider_name: Scalars['String']['output'];
};

export type DashboardTicketsStatistic = {
  __typename?: 'dashboardTicketsStatistic';
  count: Scalars['Int']['output'];
  status_id: Scalars['ID']['output'];
  status_name: Scalars['String']['output'];
};

export type DashboardTransfersStatistic = {
  __typename?: 'dashboardTransfersStatistic';
  count: Scalars['Int']['output'];
  status_name: Scalars['String']['output'];
  transfer_type: Scalars['String']['output'];
};

export type DashboardUsersStatistic = {
  __typename?: 'dashboardUsersStatistic';
  applicant_type: Scalars['String']['output'];
  count: Scalars['Int']['output'];
  status_name: Scalars['String']['output'];
};

export type PriceList = {
  commission_template_id?: InputMaybe<Scalars['ID']['input']>;
  company_id?: InputMaybe<Scalars['ID']['input']>;
  payment_provider_id?: InputMaybe<Scalars['ID']['input']>;
  payment_system_id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserAuthResponse = {
  __typename?: 'userAuthResponse';
  data?: Maybe<Users>;
  permissions: PermissionAuth;
};

export type ApplicantIndividualCompanyPositionsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<QueryApplicantIndividualCompanyPositionsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyPositionsOrderByOrderByClause> | QueryApplicantIndividualCompanyPositionsOrderByOrderByClause>;
}>;


export type ApplicantIndividualCompanyPositionsQuery = { __typename?: 'Query', result?: { __typename?: 'ApplicantIndividualCompanyPositionPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyPosition', id: string, name: string }>, paginatorInfo: { __typename?: 'PaginatorInfo', hasMorePages: boolean, currentPage: number } } | null };

export type ApplicantIndividualCompanyRelationsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  filter?: InputMaybe<QueryApplicantIndividualCompanyRelationsFilterFilterConditions>;
  orderBy?: InputMaybe<Array<QueryApplicantIndividualCompanyRelationsOrderByOrderByClause> | QueryApplicantIndividualCompanyRelationsOrderByOrderByClause>;
}>;


export type ApplicantIndividualCompanyRelationsQuery = { __typename?: 'Query', result?: { __typename?: 'ApplicantIndividualCompanyRelationPaginator', data: Array<{ __typename?: 'ApplicantIndividualCompanyRelation', id: string, name: string }>, paginatorInfo: { __typename?: 'PaginatorInfo', hasMorePages: boolean, currentPage: number } } | null };


export const ApplicantIndividualCompanyPositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicantIndividualCompanyPositions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryApplicantIndividualCompanyPositionsFilterFilterConditions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryApplicantIndividualCompanyPositionsOrderByOrderByClause"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"result"},"name":{"kind":"Name","value":"applicantIndividualCompanyPositions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<ApplicantIndividualCompanyPositionsQuery, ApplicantIndividualCompanyPositionsQueryVariables>;
export const ApplicantIndividualCompanyRelationsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ApplicantIndividualCompanyRelations"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryApplicantIndividualCompanyRelationsFilterFilterConditions"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"QueryApplicantIndividualCompanyRelationsOrderByOrderByClause"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"result"},"name":{"kind":"Name","value":"applicantIndividualCompanyRelations"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paginatorInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasMorePages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<ApplicantIndividualCompanyRelationsQuery, ApplicantIndividualCompanyRelationsQueryVariables>;
export type AccountKeySpecifier = ('account_name' | 'account_number' | 'account_state' | 'account_type' | 'activated_at' | 'client' | 'client_accounts' | 'commission_template' | 'company' | 'created_at' | 'currency' | 'group' | 'group_type' | 'iban_provider' | 'id' | 'is_primary' | 'last_charge_at' | 'max_limit_balance' | 'member' | 'min_limit_balance' | 'owner' | 'payment_bank' | 'payment_provider' | 'payment_system' | 'updated_at' | AccountKeySpecifier)[];
export type AccountFieldPolicy = {
	account_name?: FieldPolicy<any> | FieldReadFunction<any>,
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	account_state?: FieldPolicy<any> | FieldReadFunction<any>,
	account_type?: FieldPolicy<any> | FieldReadFunction<any>,
	activated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	client_accounts?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	iban_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_primary?: FieldPolicy<any> | FieldReadFunction<any>,
	last_charge_at?: FieldPolicy<any> | FieldReadFunction<any>,
	max_limit_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	min_limit_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_bank?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountClientKeySpecifier = ('client' | 'id' | AccountClientKeySpecifier)[];
export type AccountClientFieldPolicy = {
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountGenerateIbanResponseKeySpecifier = ('message' | 'status' | AccountGenerateIbanResponseKeySpecifier)[];
export type AccountGenerateIbanResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountLimitKeySpecifier = ('account' | 'account_id' | 'amount' | 'commission_template_limit_action_type' | 'commission_template_limit_action_type_id' | 'commission_template_limit_period' | 'commission_template_limit_period_id' | 'commission_template_limit_transfer_direction' | 'commission_template_limit_transfer_direction_id' | 'commission_template_limit_type' | 'currency' | 'currency_id' | 'id' | 'period_count' | AccountLimitKeySpecifier)[];
export type AccountLimitFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	account_id?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_action_type?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_action_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_period?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_period_id?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_transfer_direction?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_transfer_direction_id?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_type?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	currency_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	period_count?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountLimitPaginatorKeySpecifier = ('data' | 'paginatorInfo' | AccountLimitPaginatorKeySpecifier)[];
export type AccountLimitPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountPaginatorKeySpecifier = ('data' | 'paginatorInfo' | AccountPaginatorKeySpecifier)[];
export type AccountPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountReachedLimitKeySpecifier = ('account' | 'account_id' | 'amount' | 'client_name' | 'client_type' | 'group_type' | 'id' | 'limit_currency' | 'limit_type' | 'limit_value' | 'period' | 'transfer_direction' | AccountReachedLimitKeySpecifier)[];
export type AccountReachedLimitFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	account_id?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	client_name?: FieldPolicy<any> | FieldReadFunction<any>,
	client_type?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	limit_currency?: FieldPolicy<any> | FieldReadFunction<any>,
	limit_type?: FieldPolicy<any> | FieldReadFunction<any>,
	limit_value?: FieldPolicy<any> | FieldReadFunction<any>,
	period?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_direction?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountReachedLimitPaginatorKeySpecifier = ('data' | 'paginatorInfo' | AccountReachedLimitPaginatorKeySpecifier)[];
export type AccountReachedLimitPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountStateKeySpecifier = ('active' | 'id' | 'name' | AccountStateKeySpecifier)[];
export type AccountStateFieldPolicy = {
	active?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountStatementKeySpecifier = ('account_currency' | 'account_number' | 'closing_balance' | 'closing_balance_date' | 'credit_turnover' | 'date_from' | 'debit_turnover' | 'opening_balance' | 'opening_balance_date' | 'transactions' | AccountStatementKeySpecifier)[];
export type AccountStatementFieldPolicy = {
	account_currency?: FieldPolicy<any> | FieldReadFunction<any>,
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	closing_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	closing_balance_date?: FieldPolicy<any> | FieldReadFunction<any>,
	credit_turnover?: FieldPolicy<any> | FieldReadFunction<any>,
	date_from?: FieldPolicy<any> | FieldReadFunction<any>,
	debit_turnover?: FieldPolicy<any> | FieldReadFunction<any>,
	opening_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	opening_balance_date?: FieldPolicy<any> | FieldReadFunction<any>,
	transactions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AccountStatementTransactionKeySpecifier = ('account_balance' | 'account_client' | 'account_number' | 'amount' | 'created_at' | 'execution_at' | 'reason' | 'sender_recipient' | 'status' | 'transaction_id' | AccountStatementTransactionKeySpecifier)[];
export type AccountStatementTransactionFieldPolicy = {
	account_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	account_client?: FieldPolicy<any> | FieldReadFunction<any>,
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	execution_at?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transaction_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActiveSessionKeySpecifier = ('browser' | 'browser_version' | 'city' | 'company' | 'country' | 'created_at' | 'device_type' | 'domain' | 'id' | 'ip' | 'model' | 'platform' | 'provider' | 'trusted' | ActiveSessionKeySpecifier)[];
export type ActiveSessionFieldPolicy = {
	browser?: FieldPolicy<any> | FieldReadFunction<any>,
	browser_version?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	device_type?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	trusted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActiveSessionMutatorResponseKeySpecifier = ('message' | 'status' | ActiveSessionMutatorResponseKeySpecifier)[];
export type ActiveSessionMutatorResponseFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActiveSessionsKeySpecifier = ('data' | 'paginatorInfo' | ActiveSessionsKeySpecifier)[];
export type ActiveSessionsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityLogKeySpecifier = ('changes' | 'company' | 'created_at' | 'description' | 'domain' | 'group' | 'id' | 'member' | ActivityLogKeySpecifier)[];
export type ActivityLogFieldPolicy = {
	changes?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ActivityLogsKeySpecifier = ('data' | 'paginatorInfo' | ActivityLogsKeySpecifier)[];
export type ActivityLogsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantAccountKeySpecifier = ('account_name' | 'account_number' | 'account_type' | 'currency' | 'current_balance' | 'id' | 'is_primary' | 'is_show' | ApplicantAccountKeySpecifier)[];
export type ApplicantAccountFieldPolicy = {
	account_name?: FieldPolicy<any> | FieldReadFunction<any>,
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	account_type?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	current_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_primary?: FieldPolicy<any> | FieldReadFunction<any>,
	is_show?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantBankingAccessKeySpecifier = ('applicant_company' | 'applicant_individual' | 'contact_administrator' | 'create_payments' | 'daily_limit' | 'grant_access' | 'id' | 'member' | 'monthly_limit' | 'operation_limit' | 'role' | 'sign_payments' | 'used_daily_limit' | 'used_monthly_limit' | ApplicantBankingAccessKeySpecifier)[];
export type ApplicantBankingAccessFieldPolicy = {
	applicant_company?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_individual?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_administrator?: FieldPolicy<any> | FieldReadFunction<any>,
	create_payments?: FieldPolicy<any> | FieldReadFunction<any>,
	daily_limit?: FieldPolicy<any> | FieldReadFunction<any>,
	grant_access?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	monthly_limit?: FieldPolicy<any> | FieldReadFunction<any>,
	operation_limit?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	sign_payments?: FieldPolicy<any> | FieldReadFunction<any>,
	used_daily_limit?: FieldPolicy<any> | FieldReadFunction<any>,
	used_monthly_limit?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantBankingAccessesKeySpecifier = ('data' | 'paginatorInfo' | ApplicantBankingAccessesKeySpecifier)[];
export type ApplicantBankingAccessesFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyKeySpecifier = ('address' | 'address2' | 'applicant_state' | 'basic_info_additional_field' | 'business_type' | 'city' | 'company' | 'company_info_additional_fields' | 'company_position' | 'company_type' | 'contact_email' | 'contact_phone' | 'contacts_additional_fields' | 'country' | 'created_at' | 'email' | 'email_verification' | 'expires_at' | 'group' | 'id' | 'incorporate_date' | 'kyc_level' | 'labels' | 'language' | 'license_number' | 'manager' | 'modules' | 'name' | 'notes' | 'office_address' | 'owner' | 'owner_position' | 'owner_relation' | 'phone' | 'phone_verification' | 'photo' | 'profile_additional_fields' | 'project' | 'reg_at' | 'reg_number' | 'risk_level' | 'state' | 'state_reason' | 'status' | 'tax' | 'url' | 'zip' | ApplicantCompanyKeySpecifier)[];
export type ApplicantCompanyFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	address2?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_state?: FieldPolicy<any> | FieldReadFunction<any>,
	basic_info_additional_field?: FieldPolicy<any> | FieldReadFunction<any>,
	business_type?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	company_info_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	company_position?: FieldPolicy<any> | FieldReadFunction<any>,
	company_type?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_email?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verification?: FieldPolicy<any> | FieldReadFunction<any>,
	expires_at?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	incorporate_date?: FieldPolicy<any> | FieldReadFunction<any>,
	kyc_level?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	license_number?: FieldPolicy<any> | FieldReadFunction<any>,
	manager?: FieldPolicy<any> | FieldReadFunction<any>,
	modules?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	office_address?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	owner_position?: FieldPolicy<any> | FieldReadFunction<any>,
	owner_relation?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phone_verification?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	profile_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	reg_at?: FieldPolicy<any> | FieldReadFunction<any>,
	reg_number?: FieldPolicy<any> | FieldReadFunction<any>,
	risk_level?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	state_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	tax?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyBusinessTypeKeySpecifier = ('id' | 'name' | ApplicantCompanyBusinessTypeKeySpecifier)[];
export type ApplicantCompanyBusinessTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyBusinessTypePaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantCompanyBusinessTypePaginatorKeySpecifier)[];
export type ApplicantCompanyBusinessTypePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyLabelKeySpecifier = ('hex_color_code' | 'id' | 'is_active' | 'name' | ApplicantCompanyLabelKeySpecifier)[];
export type ApplicantCompanyLabelFieldPolicy = {
	hex_color_code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyLabelPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantCompanyLabelPaginatorKeySpecifier)[];
export type ApplicantCompanyLabelPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyModulesKeySpecifier = ('id' | 'is_active' | 'name' | ApplicantCompanyModulesKeySpecifier)[];
export type ApplicantCompanyModulesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyNotesKeySpecifier = ('applicant' | 'author' | 'created_at' | 'id' | 'note' | ApplicantCompanyNotesKeySpecifier)[];
export type ApplicantCompanyNotesFieldPolicy = {
	applicant?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyNotesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantCompanyNotesPaginatorKeySpecifier)[];
export type ApplicantCompanyNotesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantCompanyPaginatorKeySpecifier)[];
export type ApplicantCompanyPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyRiskLevelHistoryKeySpecifier = ('applicant_company' | 'comment' | 'created_at' | 'id' | 'manager' | 'risk_level' | ApplicantCompanyRiskLevelHistoryKeySpecifier)[];
export type ApplicantCompanyRiskLevelHistoryFieldPolicy = {
	applicant_company?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	manager?: FieldPolicy<any> | FieldReadFunction<any>,
	risk_level?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantCompanyRiskLevelHistoryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantCompanyRiskLevelHistoryPaginatorKeySpecifier)[];
export type ApplicantCompanyRiskLevelHistoryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDetailsRequisitesKeySpecifier = ('address' | 'bank_address' | 'bank_country' | 'bank_name' | 'beneficiary' | 'country' | 'currency' | 'iban' | 'swift_code' | ApplicantDetailsRequisitesKeySpecifier)[];
export type ApplicantDetailsRequisitesFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_address?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_country?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_name?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	iban?: FieldPolicy<any> | FieldReadFunction<any>,
	swift_code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDeviceKeySpecifier = ('browser' | 'created_at' | 'device_type' | 'expired_at' | 'id' | 'ip' | 'model' | 'platform' | 'trusted' | ApplicantDeviceKeySpecifier)[];
export type ApplicantDeviceFieldPolicy = {
	browser?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	device_type?: FieldPolicy<any> | FieldReadFunction<any>,
	expired_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	trusted?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentKeySpecifier = ('added_from' | 'applicant_id' | 'applicant_type' | 'company' | 'country' | 'created_at' | 'document_state' | 'document_state_id' | 'document_type' | 'document_type_id' | 'file' | 'id' | 'info' | 'internal_notes' | 'reject_details' | 'tags' | 'updated_at' | ApplicantDocumentKeySpecifier)[];
export type ApplicantDocumentFieldPolicy = {
	added_from?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_type?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	document_state?: FieldPolicy<any> | FieldReadFunction<any>,
	document_state_id?: FieldPolicy<any> | FieldReadFunction<any>,
	document_type?: FieldPolicy<any> | FieldReadFunction<any>,
	document_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	internal_notes?: FieldPolicy<any> | FieldReadFunction<any>,
	reject_details?: FieldPolicy<any> | FieldReadFunction<any>,
	tags?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentInternalNoteKeySpecifier = ('created_at' | 'document' | 'id' | 'member' | 'note' | 'updated_at' | ApplicantDocumentInternalNoteKeySpecifier)[];
export type ApplicantDocumentInternalNoteFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentInternalNotePaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantDocumentInternalNotePaginatorKeySpecifier)[];
export type ApplicantDocumentInternalNotePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantDocumentPaginatorKeySpecifier)[];
export type ApplicantDocumentPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentRejectDetailKeySpecifier = ('applicant_document' | 'applicant_document_tag' | 'created_at' | 'id' | 'member' | 'updated_at' | ApplicantDocumentRejectDetailKeySpecifier)[];
export type ApplicantDocumentRejectDetailFieldPolicy = {
	applicant_document?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_document_tag?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentTagKeySpecifier = ('category' | 'created_at' | 'description' | 'id' | 'member' | 'name' | ApplicantDocumentTagKeySpecifier)[];
export type ApplicantDocumentTagFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentTagCategoryKeySpecifier = ('id' | 'name' | ApplicantDocumentTagCategoryKeySpecifier)[];
export type ApplicantDocumentTagCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentTagCategoryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantDocumentTagCategoryPaginatorKeySpecifier)[];
export type ApplicantDocumentTagCategoryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantDocumentTagPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantDocumentTagPaginatorKeySpecifier)[];
export type ApplicantDocumentTagPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualKeySpecifier = ('address' | 'address_additional_fields' | 'applicant_companies' | 'applicant_state' | 'backup_codes' | 'banking_access' | 'birth_at' | 'birth_city' | 'birth_country' | 'birth_state' | 'citizenship_country' | 'city' | 'company' | 'contacts_additional_fields' | 'country' | 'created_at' | 'email' | 'email_verification' | 'first_name' | 'fullname' | 'google2fa_secret' | 'group' | 'id' | 'ip_addresses' | 'kyc_level' | 'labels' | 'language' | 'last_name' | 'last_screened_at' | 'manager' | 'middle_name' | 'modules' | 'nationality' | 'notes' | 'personal_additional_fields' | 'phone' | 'phone_verification' | 'photo' | 'profile_additional_fields' | 'project' | 'risk_level' | 'security_pin' | 'sex' | 'state' | 'state_reason' | 'status' | 'two_factor_auth' | 'updated_at' | 'url' | 'zip' | ApplicantIndividualKeySpecifier)[];
export type ApplicantIndividualFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	address_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_state?: FieldPolicy<any> | FieldReadFunction<any>,
	backup_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	banking_access?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_at?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_city?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_country?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_state?: FieldPolicy<any> | FieldReadFunction<any>,
	citizenship_country?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verification?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	google2fa_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	kyc_level?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	last_screened_at?: FieldPolicy<any> | FieldReadFunction<any>,
	manager?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	modules?: FieldPolicy<any> | FieldReadFunction<any>,
	nationality?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	personal_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	phone_verification?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	profile_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	risk_level?: FieldPolicy<any> | FieldReadFunction<any>,
	security_pin?: FieldPolicy<any> | FieldReadFunction<any>,
	sex?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	state_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualCompanyKeySpecifier = ('applicant_company' | 'applicant_company_id' | 'applicant_id' | 'applicant_individual_company_position_id' | 'applicant_individual_company_relation_id' | 'applicant_type' | 'client' | 'percentage_owned' | 'position_in_company' | 'relation_to_company' | ApplicantIndividualCompanyKeySpecifier)[];
export type ApplicantIndividualCompanyFieldPolicy = {
	applicant_company?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_company_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_individual_company_position_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_individual_company_relation_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_type?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage_owned?: FieldPolicy<any> | FieldReadFunction<any>,
	position_in_company?: FieldPolicy<any> | FieldReadFunction<any>,
	relation_to_company?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualCompanyPositionKeySpecifier = ('company' | 'id' | 'name' | ApplicantIndividualCompanyPositionKeySpecifier)[];
export type ApplicantIndividualCompanyPositionFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualCompanyPositionPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantIndividualCompanyPositionPaginatorKeySpecifier)[];
export type ApplicantIndividualCompanyPositionPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualCompanyRelationKeySpecifier = ('company' | 'id' | 'name' | ApplicantIndividualCompanyRelationKeySpecifier)[];
export type ApplicantIndividualCompanyRelationFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualCompanyRelationPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantIndividualCompanyRelationPaginatorKeySpecifier)[];
export type ApplicantIndividualCompanyRelationPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualLabelKeySpecifier = ('hex_color_code' | 'id' | 'is_active' | 'name' | ApplicantIndividualLabelKeySpecifier)[];
export type ApplicantIndividualLabelFieldPolicy = {
	hex_color_code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualLabelPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantIndividualLabelPaginatorKeySpecifier)[];
export type ApplicantIndividualLabelPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualModulesKeySpecifier = ('id' | 'is_active' | 'name' | ApplicantIndividualModulesKeySpecifier)[];
export type ApplicantIndividualModulesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualNotesKeySpecifier = ('applicant' | 'author' | 'created_at' | 'id' | 'note' | ApplicantIndividualNotesKeySpecifier)[];
export type ApplicantIndividualNotesFieldPolicy = {
	applicant?: FieldPolicy<any> | FieldReadFunction<any>,
	author?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualNotesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantIndividualNotesPaginatorKeySpecifier)[];
export type ApplicantIndividualNotesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantIndividualPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantIndividualPaginatorKeySpecifier)[];
export type ApplicantIndividualPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantKycLevelKeySpecifier = ('id' | 'name' | ApplicantKycLevelKeySpecifier)[];
export type ApplicantKycLevelFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantKycLevelPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantKycLevelPaginatorKeySpecifier)[];
export type ApplicantKycLevelPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantLinkedCompanyKeySpecifier = ('company' | 'company_position' | 'company_relation' | 'percentage_owned' | ApplicantLinkedCompanyKeySpecifier)[];
export type ApplicantLinkedCompanyFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	company_position?: FieldPolicy<any> | FieldReadFunction<any>,
	company_relation?: FieldPolicy<any> | FieldReadFunction<any>,
	percentage_owned?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantModulesKeySpecifier = ('id' | 'name' | ApplicantModulesKeySpecifier)[];
export type ApplicantModulesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantModulesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantModulesPaginatorKeySpecifier)[];
export type ApplicantModulesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantProfileKeySpecifier = ('address' | 'applicant_state' | 'backup_codes' | 'birth_at' | 'birth_city' | 'birth_country' | 'birth_state' | 'citizenship_country' | 'city' | 'companies' | 'company' | 'contacts_additional_fields' | 'country' | 'created_at' | 'email' | 'first_name' | 'fullname' | 'google2fa_secret' | 'group' | 'id' | 'ip_addresses' | 'is_verification_phone' | 'labels' | 'language' | 'last_name' | 'manager' | 'middle_name' | 'modules' | 'nationality' | 'notes' | 'notify_device_email' | 'personal_additional_fields' | 'phone' | 'photo' | 'profile_additional_fields' | 'risk_level' | 'security_pin' | 'sex' | 'state' | 'state_reason' | 'status' | 'two_factor_auth' | 'url' | 'zip' | ApplicantProfileKeySpecifier)[];
export type ApplicantProfileFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_state?: FieldPolicy<any> | FieldReadFunction<any>,
	backup_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_at?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_city?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_country?: FieldPolicy<any> | FieldReadFunction<any>,
	birth_state?: FieldPolicy<any> | FieldReadFunction<any>,
	citizenship_country?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	contacts_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	google2fa_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	is_verification_phone?: FieldPolicy<any> | FieldReadFunction<any>,
	labels?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	manager?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>,
	modules?: FieldPolicy<any> | FieldReadFunction<any>,
	nationality?: FieldPolicy<any> | FieldReadFunction<any>,
	notes?: FieldPolicy<any> | FieldReadFunction<any>,
	notify_device_email?: FieldPolicy<any> | FieldReadFunction<any>,
	personal_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	profile_additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	risk_level?: FieldPolicy<any> | FieldReadFunction<any>,
	security_pin?: FieldPolicy<any> | FieldReadFunction<any>,
	sex?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	state_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantRequisitesKeySpecifier = ('account_number' | 'bank' | 'currency' | 'id' | 'owner' | ApplicantRequisitesKeySpecifier)[];
export type ApplicantRequisitesFieldPolicy = {
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	bank?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantRiskLevelKeySpecifier = ('id' | 'name' | ApplicantRiskLevelKeySpecifier)[];
export type ApplicantRiskLevelFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantRiskLevelHistoryKeySpecifier = ('applicant' | 'comment' | 'created_at' | 'id' | 'manager' | 'risk_level' | ApplicantRiskLevelHistoryKeySpecifier)[];
export type ApplicantRiskLevelHistoryFieldPolicy = {
	applicant?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	manager?: FieldPolicy<any> | FieldReadFunction<any>,
	risk_level?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantRiskLevelHistoryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantRiskLevelHistoryPaginatorKeySpecifier)[];
export type ApplicantRiskLevelHistoryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantRiskLevelPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantRiskLevelPaginatorKeySpecifier)[];
export type ApplicantRiskLevelPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantSettingsProfileKeySpecifier = ('email' | 'email_confirm_url' | 'first_name' | 'id' | 'last_name' | 'middle_name' | ApplicantSettingsProfileKeySpecifier)[];
export type ApplicantSettingsProfileFieldPolicy = {
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_confirm_url?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	middle_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStateKeySpecifier = ('id' | 'name' | ApplicantStateKeySpecifier)[];
export type ApplicantStateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStatePaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantStatePaginatorKeySpecifier)[];
export type ApplicantStatePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStateReasonKeySpecifier = ('id' | 'name' | ApplicantStateReasonKeySpecifier)[];
export type ApplicantStateReasonFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStateReasonPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantStateReasonPaginatorKeySpecifier)[];
export type ApplicantStateReasonPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStatusKeySpecifier = ('id' | 'name' | ApplicantStatusKeySpecifier)[];
export type ApplicantStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantStatusPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ApplicantStatusPaginatorKeySpecifier)[];
export type ApplicantStatusPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ApplicantVerificationStatusKeySpecifier = ('id' | 'name' | ApplicantVerificationStatusKeySpecifier)[];
export type ApplicantVerificationStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticationLogKeySpecifier = ('browser' | 'browser_version' | 'city' | 'client_type' | 'company' | 'country' | 'created_at' | 'device_type' | 'domain' | 'email' | 'expired_at' | 'group' | 'id' | 'info' | 'ip' | 'member' | 'model' | 'platform' | 'provider' | 'status' | AuthenticationLogKeySpecifier)[];
export type AuthenticationLogFieldPolicy = {
	browser?: FieldPolicy<any> | FieldReadFunction<any>,
	browser_version?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	client_type?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	device_type?: FieldPolicy<any> | FieldReadFunction<any>,
	domain?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	expired_at?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	info?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	model?: FieldPolicy<any> | FieldReadFunction<any>,
	platform?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type AuthenticationLogsKeySpecifier = ('data' | 'paginatorInfo' | AuthenticationLogsKeySpecifier)[];
export type AuthenticationLogsFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BankCorrespondentKeySpecifier = ('address' | 'bank_account' | 'bank_code' | 'currencies' | 'id' | 'is_active' | 'name' | 'regions' | BankCorrespondentKeySpecifier)[];
export type BankCorrespondentFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_account?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_code?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BankCorrespondentPaginatorKeySpecifier = ('data' | 'paginatorInfo' | BankCorrespondentPaginatorKeySpecifier)[];
export type BankCorrespondentPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BusinessActivityKeySpecifier = ('id' | 'name' | BusinessActivityKeySpecifier)[];
export type BusinessActivityFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type BusinessActivityPaginatorKeySpecifier = ('data' | 'paginatorInfo' | BusinessActivityPaginatorKeySpecifier)[];
export type BusinessActivityPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientAccountsDetailsKeySpecifier = ('available_balance' | 'currency' | 'current_balance' | 'id' | 'max_limit_balance' | 'min_limit_balance' | 'reserved_balance' | ClientAccountsDetailsKeySpecifier)[];
export type ClientAccountsDetailsFieldPolicy = {
	available_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	current_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	max_limit_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	min_limit_balance?: FieldPolicy<any> | FieldReadFunction<any>,
	reserved_balance?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ClientIpAddressKeySpecifier = ('client_id' | 'client_type' | 'id' | 'ip_address' | ClientIpAddressKeySpecifier)[];
export type ClientIpAddressFieldPolicy = {
	client_id?: FieldPolicy<any> | FieldReadFunction<any>,
	client_type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_address?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionPriceListKeySpecifier = ('account' | 'commission_template' | 'company' | 'fees' | 'id' | 'name' | 'owner' | 'payment_system' | 'provider' | 'region' | CommissionPriceListKeySpecifier)[];
export type CommissionPriceListFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionPriceListPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionPriceListPaginatorKeySpecifier)[];
export type CommissionPriceListPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateKeySpecifier = ('account' | 'business_activity' | 'commission_template_limits' | 'company' | 'country_id' | 'currencies' | 'currency_id' | 'description' | 'id' | 'is_active' | 'name' | 'owner' | 'payment_provider' | 'regions' | CommissionTemplateKeySpecifier)[];
export type CommissionTemplateFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	business_activity?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limits?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country_id?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	currency_id?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitKeySpecifier = ('amount' | 'commission_template' | 'commission_template_limit_action_type' | 'commission_template_limit_period' | 'commission_template_limit_transfer_direction' | 'commission_template_limit_type' | 'currency' | 'id' | 'payment_system' | 'period_count' | 'region' | CommissionTemplateLimitKeySpecifier)[];
export type CommissionTemplateLimitFieldPolicy = {
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_action_type?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_period?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_transfer_direction?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_limit_type?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	period_count?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitActionTypeKeySpecifier = ('id' | 'name' | CommissionTemplateLimitActionTypeKeySpecifier)[];
export type CommissionTemplateLimitActionTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitActionTypePaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplateLimitActionTypePaginatorKeySpecifier)[];
export type CommissionTemplateLimitActionTypePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplateLimitPaginatorKeySpecifier)[];
export type CommissionTemplateLimitPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitPeriodKeySpecifier = ('id' | 'name' | CommissionTemplateLimitPeriodKeySpecifier)[];
export type CommissionTemplateLimitPeriodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitPeriodPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplateLimitPeriodPaginatorKeySpecifier)[];
export type CommissionTemplateLimitPeriodPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitTransferDirectionKeySpecifier = ('id' | 'name' | CommissionTemplateLimitTransferDirectionKeySpecifier)[];
export type CommissionTemplateLimitTransferDirectionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitTransferDirectionPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplateLimitTransferDirectionPaginatorKeySpecifier)[];
export type CommissionTemplateLimitTransferDirectionPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitTypeKeySpecifier = ('id' | 'name' | CommissionTemplateLimitTypeKeySpecifier)[];
export type CommissionTemplateLimitTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplateLimitTypePaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplateLimitTypePaginatorKeySpecifier)[];
export type CommissionTemplateLimitTypePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CommissionTemplatePaginatorKeySpecifier = ('data' | 'paginatorInfo' | CommissionTemplatePaginatorKeySpecifier)[];
export type CommissionTemplatePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyKeySpecifier = ('additional_fields_basic' | 'additional_fields_data' | 'additional_fields_info' | 'additional_fields_settings' | 'address' | 'backoffice_forgot_password_url' | 'backoffice_login_url' | 'backoffice_support_email' | 'backoffice_support_url' | 'city' | 'company_modules' | 'company_number' | 'contact_name' | 'country' | 'created_at' | 'departments' | 'email' | 'employees' | 'entity_type' | 'exp_date' | 'id' | 'incorporate_date' | 'license_number' | 'logo' | 'member_verify_url' | 'members' | 'members_count' | 'name' | 'phone' | 'positions' | 'projects' | 'projects_count' | 'reg_address' | 'reg_number' | 'state' | 'state_reason' | 'tax_id' | 'type_of_industry' | 'updated_at' | 'url' | 'vv_token' | 'zip' | CompanyKeySpecifier)[];
export type CompanyFieldPolicy = {
	additional_fields_basic?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields_data?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields_info?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields_settings?: FieldPolicy<any> | FieldReadFunction<any>,
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	backoffice_forgot_password_url?: FieldPolicy<any> | FieldReadFunction<any>,
	backoffice_login_url?: FieldPolicy<any> | FieldReadFunction<any>,
	backoffice_support_email?: FieldPolicy<any> | FieldReadFunction<any>,
	backoffice_support_url?: FieldPolicy<any> | FieldReadFunction<any>,
	city?: FieldPolicy<any> | FieldReadFunction<any>,
	company_modules?: FieldPolicy<any> | FieldReadFunction<any>,
	company_number?: FieldPolicy<any> | FieldReadFunction<any>,
	contact_name?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	departments?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	exp_date?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	incorporate_date?: FieldPolicy<any> | FieldReadFunction<any>,
	license_number?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	member_verify_url?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	members_count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	phone?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	projects_count?: FieldPolicy<any> | FieldReadFunction<any>,
	reg_address?: FieldPolicy<any> | FieldReadFunction<any>,
	reg_number?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	state_reason?: FieldPolicy<any> | FieldReadFunction<any>,
	tax_id?: FieldPolicy<any> | FieldReadFunction<any>,
	type_of_industry?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>,
	vv_token?: FieldPolicy<any> | FieldReadFunction<any>,
	zip?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyModuleKeySpecifier = ('iban_providers' | 'id' | 'is_active' | 'module' | 'payment_providers' | CompanyModuleKeySpecifier)[];
export type CompanyModuleFieldPolicy = {
	iban_providers?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_providers?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyModuleIbanProviderKeySpecifier = ('company_module_id' | 'id' | 'is_active' | 'payment_provider_iban' | CompanyModuleIbanProviderKeySpecifier)[];
export type CompanyModuleIbanProviderFieldPolicy = {
	company_module_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_iban?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyModuleIbanProviderPasswordKeySpecifier = ('id' | 'password' | CompanyModuleIbanProviderPasswordKeySpecifier)[];
export type CompanyModuleIbanProviderPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyModulePaymentProviderKeySpecifier = ('company_module_id' | 'id' | 'is_active' | 'payment_provider' | CompanyModulePaymentProviderKeySpecifier)[];
export type CompanyModulePaymentProviderFieldPolicy = {
	company_module_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyModulePaymentProviderPasswordKeySpecifier = ('id' | 'password' | CompanyModulePaymentProviderPasswordKeySpecifier)[];
export type CompanyModulePaymentProviderPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CompanyPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CompanyPaginatorKeySpecifier)[];
export type CompanyPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryKeySpecifier = ('id' | 'iso' | 'name' | CountryKeySpecifier)[];
export type CountryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	iso?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CountryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CountryPaginatorKeySpecifier)[];
export type CountryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrenciesKeySpecifier = ('code' | 'id' | 'minor_unit' | 'name' | CurrenciesKeySpecifier)[];
export type CurrenciesFieldPolicy = {
	code?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	minor_unit?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type CurrenciesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | CurrenciesPaginatorKeySpecifier)[];
export type CurrenciesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepartmentKeySpecifier = ('company' | 'created_at' | 'id' | 'name' | 'positions' | DepartmentKeySpecifier)[];
export type DepartmentFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	positions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepartmentPaginatorKeySpecifier = ('data' | 'paginatorInfo' | DepartmentPaginatorKeySpecifier)[];
export type DepartmentPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepartmentPositionKeySpecifier = ('company' | 'department' | 'id' | 'is_active' | 'name' | DepartmentPositionKeySpecifier)[];
export type DepartmentPositionFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	department?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DepartmentPositionPaginatorKeySpecifier = ('data' | 'paginatorInfo' | DepartmentPositionPaginatorKeySpecifier)[];
export type DepartmentPositionPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentStateKeySpecifier = ('id' | 'name' | DocumentStateKeySpecifier)[];
export type DocumentStateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type DocumentTypeKeySpecifier = ('id' | 'name' | DocumentTypeKeySpecifier)[];
export type DocumentTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailNotificationKeySpecifier = ('clientable' | 'company' | 'created_at' | 'group_role' | 'group_type' | 'id' | 'recipient_type' | 'templates' | 'type' | 'updated_at' | EmailNotificationKeySpecifier)[];
export type EmailNotificationFieldPolicy = {
	clientable?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	group_role?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_type?: FieldPolicy<any> | FieldReadFunction<any>,
	templates?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailNotificationPaginatorKeySpecifier = ('data' | 'paginatorInfo' | EmailNotificationPaginatorKeySpecifier)[];
export type EmailNotificationPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailSmtpKeySpecifier = ('company' | 'from_email' | 'from_name' | 'host_name' | 'id' | 'is_sending_mail' | 'member' | 'name' | 'password' | 'port' | 'replay_to' | 'security' | 'username' | EmailSmtpKeySpecifier)[];
export type EmailSmtpFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	from_email?: FieldPolicy<any> | FieldReadFunction<any>,
	from_name?: FieldPolicy<any> | FieldReadFunction<any>,
	host_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_sending_mail?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	port?: FieldPolicy<any> | FieldReadFunction<any>,
	replay_to?: FieldPolicy<any> | FieldReadFunction<any>,
	security?: FieldPolicy<any> | FieldReadFunction<any>,
	username?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailTemplateKeySpecifier = ('company' | 'content' | 'created_at' | 'id' | 'layout' | 'name' | 'service_type' | 'subject' | 'type' | 'updated_at' | 'use_layout' | EmailTemplateKeySpecifier)[];
export type EmailTemplateFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	content?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	layout?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	service_type?: FieldPolicy<any> | FieldReadFunction<any>,
	subject?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	use_layout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailTemplateLayoutKeySpecifier = ('company_id' | 'created_at' | 'footer' | 'header' | 'id' | 'updated_at' | EmailTemplateLayoutKeySpecifier)[];
export type EmailTemplateLayoutFieldPolicy = {
	company_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	footer?: FieldPolicy<any> | FieldReadFunction<any>,
	header?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmailTemplateOnCompanyResponseKeySpecifier = ('data' | 'layout' | EmailTemplateOnCompanyResponseKeySpecifier)[];
export type EmailTemplateOnCompanyResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	layout?: FieldPolicy<any> | FieldReadFunction<any>
};
export type EmployeeKeySpecifier = ('employees_number' | 'id' | EmployeeKeySpecifier)[];
export type EmployeeFieldPolicy = {
	employees_number?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeKeySpecifier = ('account' | 'client' | 'created_at' | 'fee' | 'fee_amount' | 'fee_pp' | 'member' | 'operation_type' | 'price_list_fee' | 'status' | 'transfer_outgoing' | 'transfer_type' | FeeKeySpecifier)[];
export type FeeFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_amount?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_pp?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	operation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	price_list_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_outgoing?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeItemKeySpecifier = ('amount_from' | 'amount_to' | 'fee' | 'mode' | 'percent' | FeeItemKeySpecifier)[];
export type FeeItemFieldPolicy = {
	amount_from?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_to?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	mode?: FieldPolicy<any> | FieldReadFunction<any>,
	percent?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeModeKeySpecifier = ('id' | 'name' | FeeModeKeySpecifier)[];
export type FeeModeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeePeriodKeySpecifier = ('id' | 'name' | FeePeriodKeySpecifier)[];
export type FeePeriodFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FeeTypeKeySpecifier = ('id' | 'name' | FeeTypeKeySpecifier)[];
export type FeeTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilesKeySpecifier = ('author_id' | 'created_at' | 'entity_type' | 'file_name' | 'id' | 'link' | 'mime_type' | 'size' | 'storage_name' | 'storage_path' | 'updated_at' | FilesKeySpecifier)[];
export type FilesFieldPolicy = {
	author_id?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	entity_type?: FieldPolicy<any> | FieldReadFunction<any>,
	file_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	link?: FieldPolicy<any> | FieldReadFunction<any>,
	mime_type?: FieldPolicy<any> | FieldReadFunction<any>,
	size?: FieldPolicy<any> | FieldReadFunction<any>,
	storage_name?: FieldPolicy<any> | FieldReadFunction<any>,
	storage_path?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FilesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | FilesPaginatorKeySpecifier)[];
export type FilesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupRoleKeySpecifier = ('company' | 'description' | 'group_type' | 'group_type_id' | 'id' | 'is_active' | 'module' | 'module_id' | 'name' | 'providers' | 'role' | 'role_id' | GroupRoleKeySpecifier)[];
export type GroupRoleFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	module_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	providers?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	role_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupRolePaginatorKeySpecifier = ('data' | 'paginatorInfo' | GroupRolePaginatorKeySpecifier)[];
export type GroupRolePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupRoleProviderKeySpecifier = ('commission_template' | 'group_role_id' | 'id' | 'is_default' | 'payment_provider' | GroupRoleProviderKeySpecifier)[];
export type GroupRoleProviderFieldPolicy = {
	commission_template?: FieldPolicy<any> | FieldReadFunction<any>,
	group_role_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_default?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupRoleViewKeySpecifier = ('commission_template_id' | 'commission_template_name' | 'company' | 'description' | 'group_type' | 'group_type_id' | 'id' | 'is_active' | 'module' | 'module_id' | 'name' | 'payment_provider_id' | 'payment_provider_name' | 'role' | 'role_id' | GroupRoleViewKeySpecifier)[];
export type GroupRoleViewFieldPolicy = {
	commission_template_id?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template_name?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type_id?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	module_id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_name?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	role_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupRoleViewPaginatorKeySpecifier = ('data' | 'paginatorInfo' | GroupRoleViewPaginatorKeySpecifier)[];
export type GroupRoleViewPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupTypeKeySpecifier = ('id' | 'name' | GroupTypeKeySpecifier)[];
export type GroupTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupTypePaginatorKeySpecifier = ('data' | 'paginatorInfo' | GroupTypePaginatorKeySpecifier)[];
export type GroupTypePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type GroupsKeySpecifier = ('groups' | 'id' | 'name' | GroupsKeySpecifier)[];
export type GroupsFieldPolicy = {
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KycTimelineKeySpecifier = ('action' | 'action_new_value' | 'action_old_value' | 'action_type' | 'applicant' | 'applicant_id' | 'applicant_type' | 'browser' | 'company' | 'created_at' | 'creator' | 'document' | 'id' | 'ip' | 'os' | 'tag' | KycTimelineKeySpecifier)[];
export type KycTimelineFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	action_new_value?: FieldPolicy<any> | FieldReadFunction<any>,
	action_old_value?: FieldPolicy<any> | FieldReadFunction<any>,
	action_type?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_id?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_type?: FieldPolicy<any> | FieldReadFunction<any>,
	browser?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	creator?: FieldPolicy<any> | FieldReadFunction<any>,
	document?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip?: FieldPolicy<any> | FieldReadFunction<any>,
	os?: FieldPolicy<any> | FieldReadFunction<any>,
	tag?: FieldPolicy<any> | FieldReadFunction<any>
};
export type KycTimelinesKeySpecifier = ('data' | 'paginatorInfo' | KycTimelinesKeySpecifier)[];
export type KycTimelinesFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguagesKeySpecifier = ('id' | 'iso' | 'name' | LanguagesKeySpecifier)[];
export type LanguagesFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	iso?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type LanguagesPaginatorKeySpecifier = ('data' | 'paginatorInfo' | LanguagesPaginatorKeySpecifier)[];
export type LanguagesPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberAccessLimitationKeySpecifier = ('company' | 'group' | 'group_roles' | 'id' | 'member' | 'module' | 'project' | 'provider' | 'see_own_applicants' | MemberAccessLimitationKeySpecifier)[];
export type MemberAccessLimitationFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	group_roles?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	see_own_applicants?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberAccessLimitationPaginatorKeySpecifier = ('data' | 'paginatorInfo' | MemberAccessLimitationPaginatorKeySpecifier)[];
export type MemberAccessLimitationPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberProfileKeySpecifier = ('access_groups' | 'additional_fields' | 'additional_info_fields' | 'backup_codes' | 'company' | 'country' | 'department' | 'email' | 'first_name' | 'fullname' | 'google2fa_secret' | 'group' | 'id' | 'ip_addresses' | 'is_active' | 'is_show_owner_applicants' | 'is_sign_transaction' | 'language' | 'last_login_at' | 'last_name' | 'position' | 'security_pin' | 'sex' | 'two_factor_auth_setting_id' | 'two_factor_auth_settings' | MemberProfileKeySpecifier)[];
export type MemberProfileFieldPolicy = {
	access_groups?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_info_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	backup_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	department?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	google2fa_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	is_show_owner_applicants?: FieldPolicy<any> | FieldReadFunction<any>,
	is_sign_transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	last_login_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	security_pin?: FieldPolicy<any> | FieldReadFunction<any>,
	sex?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth_setting_id?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth_settings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MemberStatusKeySpecifier = ('id' | 'name' | MemberStatusKeySpecifier)[];
export type MemberStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersKeySpecifier = ('access_groups' | 'additional_fields' | 'additional_info_fields' | 'backup_codes' | 'company' | 'country' | 'created_at' | 'department' | 'email' | 'email_verification' | 'first_name' | 'fullname' | 'google2fa_secret' | 'group' | 'id' | 'ip_addresses' | 'is_show_owner_applicants' | 'is_sign_transaction' | 'job_title' | 'language' | 'last_login_at' | 'last_name' | 'member_status' | 'photo' | 'position' | 'security_pin' | 'sex' | 'two_factor_auth_setting_id' | 'two_factor_auth_settings' | MembersKeySpecifier)[];
export type MembersFieldPolicy = {
	access_groups?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_info_fields?: FieldPolicy<any> | FieldReadFunction<any>,
	backup_codes?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	department?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	email_verification?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	google2fa_secret?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ip_addresses?: FieldPolicy<any> | FieldReadFunction<any>,
	is_show_owner_applicants?: FieldPolicy<any> | FieldReadFunction<any>,
	is_sign_transaction?: FieldPolicy<any> | FieldReadFunction<any>,
	job_title?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	last_login_at?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>,
	member_status?: FieldPolicy<any> | FieldReadFunction<any>,
	photo?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	security_pin?: FieldPolicy<any> | FieldReadFunction<any>,
	sex?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth_setting_id?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor_auth_settings?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MembersPaginatorKeySpecifier = ('data' | 'paginatorInfo' | MembersPaginatorKeySpecifier)[];
export type MembersPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ModuleKeySpecifier = ('id' | 'name' | ModuleKeySpecifier)[];
export type ModuleFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('addCompanyModule' | 'attachApplicantCompanyLabel' | 'attachApplicantDocumentTag' | 'attachApplicantIndividualLabel' | 'cancelTransferOutgoingFee' | 'createAccount' | 'createAccountLimit' | 'createApplicant' | 'createApplicantBankingAccess' | 'createApplicantCompany' | 'createApplicantCompanyBusinessType' | 'createApplicantCompanyLabel' | 'createApplicantCompanyModule' | 'createApplicantCompanyNote' | 'createApplicantCompanyRiskLevelHistory' | 'createApplicantDocument' | 'createApplicantDocumentInternalNote' | 'createApplicantDocumentRejectDetail' | 'createApplicantDocumentTag' | 'createApplicantDocumentTagCategory' | 'createApplicantIndividual' | 'createApplicantIndividualCompany' | 'createApplicantIndividualCompanyPosition' | 'createApplicantIndividualCompanyRelation' | 'createApplicantIndividualLabel' | 'createApplicantIndividualModule' | 'createApplicantIndividualNote' | 'createApplicantModule' | 'createApplicantRiskLevelHistory' | 'createApplicantStateReason' | 'createBankCorrespondent' | 'createBusinessActivity' | 'createCommissionPriceList' | 'createCommissionTemplate' | 'createCommissionTemplateLimit' | 'createCompany' | 'createCompanyModuleIbanProvider' | 'createCompanyModulePaymentProvider' | 'createDepartment' | 'createDepartmentPosition' | 'createDocumentType' | 'createEmailNotification' | 'createEmailSmtp' | 'createEmailTemplate' | 'createEmailTemplateLayout' | 'createGroupSettings' | 'createMember' | 'createMemberAccessLimitation' | 'createModule' | 'createPayment' | 'createPaymentBank' | 'createPaymentProvider' | 'createPaymentProviderIban' | 'createPaymentSystem' | 'createPriceListFees' | 'createProject' | 'createRegion' | 'createRole' | 'createTicket' | 'createTicketComment' | 'createTransferOutgoing' | 'createTransferOutgoingFee' | 'deleteAccount' | 'deleteAccountLimit' | 'deleteApplicantBankingAccess' | 'deleteApplicantBankingMember' | 'deleteApplicantCompany' | 'deleteApplicantCompanyLabel' | 'deleteApplicantCompanyModule' | 'deleteApplicantCompanyNote' | 'deleteApplicantCompanyRiskLevelHistory' | 'deleteApplicantDevice' | 'deleteApplicantDocument' | 'deleteApplicantDocumentInternalNote' | 'deleteApplicantDocumentRejectDetail' | 'deleteApplicantDocumentTag' | 'deleteApplicantDocumentTagCategory' | 'deleteApplicantIndividual' | 'deleteApplicantIndividualCompany' | 'deleteApplicantIndividualCompanyPosition' | 'deleteApplicantIndividualCompanyRelation' | 'deleteApplicantIndividualLabel' | 'deleteApplicantIndividualModule' | 'deleteApplicantIndividualNote' | 'deleteApplicantRiskLevelHistory' | 'deleteApplicantStateReason' | 'deleteBankCorrespondent' | 'deleteCommissionPriceList' | 'deleteCommissionTemplate' | 'deleteCommissionTemplateLimit' | 'deleteCompany' | 'deleteCompanyModule' | 'deleteCompanyModuleIbanProvider' | 'deleteCompanyModulePaymentProvider' | 'deleteDepartment' | 'deleteDepartmentPosition' | 'deleteDocumentType' | 'deleteEmailNotification' | 'deleteEmailSmtp' | 'deleteEmailTemplate' | 'deleteEmailTemplateLayout' | 'deleteFile' | 'deleteGroup' | 'deleteMember' | 'deleteMemberAccessLimitation' | 'deletePayment' | 'deletePaymentBank' | 'deletePaymentProvider' | 'deletePaymentProviderIban' | 'deletePaymentSystem' | 'deletePriceListFees' | 'deleteProject' | 'deleteRegion' | 'deleteRole' | 'deleteTagApplicantDocumentRejectDetail' | 'detachApplicantCompanyLabel' | 'detachApplicantDocumentTag' | 'detachApplicantIndividualLabel' | 'generateIban' | 'grantApplicantBankingAccess' | 'resetMemberPassword' | 'sendConfirmChangeEmail' | 'sendEmail' | 'sendEmailRegistation' | 'sendEmailResetPassword' | 'sendEmailVerification' | 'sendEmailVerificationApplicantCompany' | 'sendEmailWithTemplate' | 'sendMemberEmailVerification' | 'sendPhoneVerification' | 'sendPhoneVerificationApplicantCompany' | 'setApplicantIndividualPassword' | 'setApplicantSecurityPin' | 'setApplicantSettingsPassword' | 'setApplicantSettingsPasswordWithOtp' | 'setMemberActive' | 'setMemberGroup' | 'setMemberInactive' | 'setMemberPassword' | 'setMemberSecurityPin' | 'setMemberSuspended' | 'updateAccount' | 'updateAccountLimit' | 'updateActiveSession' | 'updateApplicantAccount' | 'updateApplicantBankingAccess' | 'updateApplicantCompany' | 'updateApplicantCompanyBusinessType' | 'updateApplicantCompanyLabel' | 'updateApplicantCompanyModule' | 'updateApplicantCompanyVerificationStatus' | 'updateApplicantDevice' | 'updateApplicantDeviceWithOtp' | 'updateApplicantDocument' | 'updateApplicantDocumentTag' | 'updateApplicantDocumentTagCategory' | 'updateApplicantIndividual' | 'updateApplicantIndividualCompany' | 'updateApplicantIndividualCompanyPosition' | 'updateApplicantIndividualCompanyRelation' | 'updateApplicantIndividualLabel' | 'updateApplicantIndividualModule' | 'updateApplicantIndividualVerificationStatus' | 'updateApplicantProfile' | 'updateApplicantStateReason' | 'updateBankCorrespondent' | 'updateBusinessActivity' | 'updateCommissionPriceList' | 'updateCommissionTemplate' | 'updateCommissionTemplateLimit' | 'updateCompany' | 'updateCompanyModule' | 'updateCompanyModuleIbanProvider' | 'updateCompanyModulePaymentProvider' | 'updateDepartment' | 'updateEmailNotification' | 'updateEmailSmtp' | 'updateEmailTemplate' | 'updateEmailTemplateLayout' | 'updateGroupSettings' | 'updateMember' | 'updateMemberAccessLimitation' | 'updateMemberProfile' | 'updatePayment' | 'updatePaymentBank' | 'updatePaymentProvider' | 'updatePaymentProviderIban' | 'updatePaymentSystem' | 'updatePriceListFees' | 'updateProject' | 'updateProjectApiSetting' | 'updateRegion' | 'updateRole' | 'updateTicket' | 'updateTransferOutgoing' | 'updateTransferOutgoingFee' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	addCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	attachApplicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	attachApplicantDocumentTag?: FieldPolicy<any> | FieldReadFunction<any>,
	attachApplicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	cancelTransferOutgoingFee?: FieldPolicy<any> | FieldReadFunction<any>,
	createAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	createAccountLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicant?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompanyBusinessType?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompanyNote?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantCompanyRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantDocumentInternalNote?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantDocumentRejectDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantDocumentTag?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantDocumentTagCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividual?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualCompanyPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualCompanyRelation?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualModule?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantIndividualNote?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantModule?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	createApplicantStateReason?: FieldPolicy<any> | FieldReadFunction<any>,
	createBankCorrespondent?: FieldPolicy<any> | FieldReadFunction<any>,
	createBusinessActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommissionPriceList?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommissionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createCommissionTemplateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompanyModuleIbanProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	createCompanyModulePaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	createDepartment?: FieldPolicy<any> | FieldReadFunction<any>,
	createDepartmentPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	createDocumentType?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmailNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmailSmtp?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmailTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	createEmailTemplateLayout?: FieldPolicy<any> | FieldReadFunction<any>,
	createGroupSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	createMember?: FieldPolicy<any> | FieldReadFunction<any>,
	createMemberAccessLimitation?: FieldPolicy<any> | FieldReadFunction<any>,
	createModule?: FieldPolicy<any> | FieldReadFunction<any>,
	createPayment?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaymentBank?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaymentProviderIban?: FieldPolicy<any> | FieldReadFunction<any>,
	createPaymentSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	createPriceListFees?: FieldPolicy<any> | FieldReadFunction<any>,
	createProject?: FieldPolicy<any> | FieldReadFunction<any>,
	createRegion?: FieldPolicy<any> | FieldReadFunction<any>,
	createRole?: FieldPolicy<any> | FieldReadFunction<any>,
	createTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	createTicketComment?: FieldPolicy<any> | FieldReadFunction<any>,
	createTransferOutgoing?: FieldPolicy<any> | FieldReadFunction<any>,
	createTransferOutgoingFee?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteAccountLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantBankingMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantCompanyNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantCompanyRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDevice?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDocumentInternalNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDocumentRejectDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDocumentTag?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantDocumentTagCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividual?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualCompanyPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualCompanyRelation?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualModule?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantIndividualNote?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteApplicantStateReason?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteBankCorrespondent?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCommissionPriceList?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCommissionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCommissionTemplateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompanyModuleIbanProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteCompanyModulePaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDepartment?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDepartmentPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteDocumentType?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmailNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmailSmtp?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmailTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteEmailTemplateLayout?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteFile?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMember?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteMemberAccessLimitation?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentBank?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentProviderIban?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePaymentSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	deletePriceListFees?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteProject?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRegion?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteRole?: FieldPolicy<any> | FieldReadFunction<any>,
	deleteTagApplicantDocumentRejectDetail?: FieldPolicy<any> | FieldReadFunction<any>,
	detachApplicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	detachApplicantDocumentTag?: FieldPolicy<any> | FieldReadFunction<any>,
	detachApplicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	generateIban?: FieldPolicy<any> | FieldReadFunction<any>,
	grantApplicantBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	resetMemberPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	sendConfirmChangeEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmail?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailRegistation?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailResetPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailVerification?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailVerificationApplicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	sendEmailWithTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	sendMemberEmailVerification?: FieldPolicy<any> | FieldReadFunction<any>,
	sendPhoneVerification?: FieldPolicy<any> | FieldReadFunction<any>,
	sendPhoneVerificationApplicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	setApplicantIndividualPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	setApplicantSecurityPin?: FieldPolicy<any> | FieldReadFunction<any>,
	setApplicantSettingsPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	setApplicantSettingsPasswordWithOtp?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberActive?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberGroup?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberInactive?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberSecurityPin?: FieldPolicy<any> | FieldReadFunction<any>,
	setMemberSuspended?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	updateAccountLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	updateActiveSession?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantAccount?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantCompanyBusinessType?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantCompanyVerificationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantDevice?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantDeviceWithOtp?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantDocumentTag?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantDocumentTagCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividual?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualCompanyPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualCompanyRelation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualModule?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantIndividualVerificationStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updateApplicantStateReason?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBankCorrespondent?: FieldPolicy<any> | FieldReadFunction<any>,
	updateBusinessActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommissionPriceList?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommissionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCommissionTemplateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompanyModule?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompanyModuleIbanProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	updateCompanyModulePaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	updateDepartment?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmailNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmailSmtp?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmailTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	updateEmailTemplateLayout?: FieldPolicy<any> | FieldReadFunction<any>,
	updateGroupSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMember?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMemberAccessLimitation?: FieldPolicy<any> | FieldReadFunction<any>,
	updateMemberProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePayment?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePaymentBank?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePaymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePaymentProviderIban?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePaymentSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePriceListFees?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProject?: FieldPolicy<any> | FieldReadFunction<any>,
	updateProjectApiSetting?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRegion?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRole?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTicket?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTransferOutgoing?: FieldPolicy<any> | FieldReadFunction<any>,
	updateTransferOutgoingFee?: FieldPolicy<any> | FieldReadFunction<any>
};
export type OperationTypeKeySpecifier = ('id' | 'name' | OperationTypeKeySpecifier)[];
export type OperationTypeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PageInfoKeySpecifier = ('count' | 'currentPage' | 'endCursor' | 'hasNextPage' | 'hasPreviousPage' | 'lastPage' | 'startCursor' | 'total' | PageInfoKeySpecifier)[];
export type PageInfoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	endCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	hasNextPage?: FieldPolicy<any> | FieldReadFunction<any>,
	hasPreviousPage?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPage?: FieldPolicy<any> | FieldReadFunction<any>,
	startCursor?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaginatorInfoKeySpecifier = ('count' | 'currentPage' | 'firstItem' | 'hasMorePages' | 'lastItem' | 'lastPage' | 'perPage' | 'total' | PaginatorInfoKeySpecifier)[];
export type PaginatorInfoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	firstItem?: FieldPolicy<any> | FieldReadFunction<any>,
	hasMorePages?: FieldPolicy<any> | FieldReadFunction<any>,
	lastItem?: FieldPolicy<any> | FieldReadFunction<any>,
	lastPage?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentBankKeySpecifier = ('address' | 'bank_code' | 'bank_correspondent' | 'country' | 'id' | 'is_active' | 'name' | 'payment_provider' | 'payment_system' | 'payment_system_code' | PaymentBankKeySpecifier)[];
export type PaymentBankFieldPolicy = {
	address?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_code?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_correspondent?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system_code?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentBankPaginatorKeySpecifier = ('data' | 'paginatorInfo' | PaymentBankPaginatorKeySpecifier)[];
export type PaymentBankPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentProviderKeySpecifier = ('commission_price_list' | 'company' | 'description' | 'id' | 'is_active' | 'logo' | 'name' | 'payment_systems' | PaymentProviderKeySpecifier)[];
export type PaymentProviderFieldPolicy = {
	commission_price_list?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_systems?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentProviderHistoryKeySpecifier = ('created_at' | 'id' | 'payment_provider_id' | 'provider_response' | 'transfer_id' | 'transfer_type' | PaymentProviderHistoryKeySpecifier)[];
export type PaymentProviderHistoryFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_id?: FieldPolicy<any> | FieldReadFunction<any>,
	provider_response?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_id?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentProviderIbanKeySpecifier = ('company' | 'currency' | 'id' | 'is_active' | 'name' | PaymentProviderIbanKeySpecifier)[];
export type PaymentProviderIbanFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentProviderIbanPaginatorKeySpecifier = ('data' | 'paginatorInfo' | PaymentProviderIbanPaginatorKeySpecifier)[];
export type PaymentProviderIbanPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentProviderPaginatorKeySpecifier = ('data' | 'paginatorInfo' | PaymentProviderPaginatorKeySpecifier)[];
export type PaymentProviderPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentStatusKeySpecifier = ('id' | 'name' | PaymentStatusKeySpecifier)[];
export type PaymentStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSystemKeySpecifier = ('bank_correspondent' | 'banks' | 'company' | 'currencies' | 'description' | 'id' | 'is_active' | 'logo' | 'name' | 'operations' | 'providers' | 'regions' | PaymentSystemKeySpecifier)[];
export type PaymentSystemFieldPolicy = {
	bank_correspondent?: FieldPolicy<any> | FieldReadFunction<any>,
	banks?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	logo?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	operations?: FieldPolicy<any> | FieldReadFunction<any>,
	providers?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentSystemPaginatorKeySpecifier = ('data' | 'paginatorInfo' | PaymentSystemPaginatorKeySpecifier)[];
export type PaymentSystemPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentUrgencyKeySpecifier = ('id' | 'name' | PaymentUrgencyKeySpecifier)[];
export type PaymentUrgencyFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentsKeySpecifier = ('account' | 'amount' | 'amount_real' | 'beneficiary_additional_data' | 'beneficiary_address' | 'beneficiary_city' | 'beneficiary_country' | 'beneficiary_name' | 'beneficiary_state' | 'beneficiary_zip' | 'company' | 'created_at' | 'currency' | 'error' | 'execution_at' | 'fee' | 'fee_type' | 'id' | 'member' | 'payment_number' | 'payment_operation_type' | 'payment_provider' | 'payment_urgency' | 'price_list_fees' | 'received_at' | 'recipient_account' | 'recipient_bank_address' | 'recipient_bank_country' | 'recipient_bank_name' | 'recipient_bank_swift' | 'respondent_fee' | 'status' | 'status_id' | 'updated_at' | PaymentsKeySpecifier)[];
export type PaymentsFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_real?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_additional_data?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_address?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_city?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_country?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_name?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_state?: FieldPolicy<any> | FieldReadFunction<any>,
	beneficiary_zip?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	error?: FieldPolicy<any> | FieldReadFunction<any>,
	execution_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_type?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_number?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_operation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_urgency?: FieldPolicy<any> | FieldReadFunction<any>,
	price_list_fees?: FieldPolicy<any> | FieldReadFunction<any>,
	received_at?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_account?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_address?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_country?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_name?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_swift?: FieldPolicy<any> | FieldReadFunction<any>,
	respondent_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	status_id?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PaymentsPaginatorKeySpecifier = ('data' | 'paginatorInfo' | PaymentsPaginatorKeySpecifier)[];
export type PaymentsPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionAuthKeySpecifier = ('PERMISSION_ACCOUNT_DETAILS' | 'PERMISSION_DASHBOARD' | 'PERMISSION_MAKE_PAYMENTS' | 'PERMISSION_MY_NET_WORTH' | 'PERMISSION_MY_TEMPLATES' | 'PERMISSION_PAYMENT_DETAILS' | 'PERMISSION_PAYMENT_LIST' | 'PERMISSION_REQUISITES' | 'PERMISSION_SETTINGS_ACCOUNT' | 'PERMISSION_SETTINGS_CONTACT_DETAILS' | 'PERMISSION_SETTINGS_LOG_IN_DETAILS' | 'PERMISSION_SETTINGS_SECURITY_LEVEL' | 'PERMISSION_STATEMENTS' | 'PERMISSION_TICKETS' | PermissionAuthKeySpecifier)[];
export type PermissionAuthFieldPolicy = {
	PERMISSION_ACCOUNT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_DASHBOARD?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MAKE_PAYMENTS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MY_NET_WORTH?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MY_TEMPLATES?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_PAYMENT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_PAYMENT_LIST?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_REQUISITES?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_ACCOUNT?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_CONTACT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_LOG_IN_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_SECURITY_LEVEL?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_STATEMENTS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_TICKETS?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionCategoryKeySpecifier = ('id' | 'name' | 'permissionList' | PermissionCategoryKeySpecifier)[];
export type PermissionCategoryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissionList?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionCategoryRoleKeySpecifier = ('is_all_companies' | 'permission_category_id' | 'role_id' | PermissionCategoryRoleKeySpecifier)[];
export type PermissionCategoryRoleFieldPolicy = {
	is_all_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	permission_category_id?: FieldPolicy<any> | FieldReadFunction<any>,
	role_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionListKeySpecifier = ('id' | 'name' | 'permissions' | 'separator' | 'type' | PermissionListKeySpecifier)[];
export type PermissionListFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	separator?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionTypeKeySpecifier = ('PERMISSION_ACCOUNT_DETAILS' | 'PERMISSION_DASHBOARD' | 'PERMISSION_MAKE_PAYMENTS' | 'PERMISSION_MY_NET_WORTH' | 'PERMISSION_MY_TEMPLATES' | 'PERMISSION_PAYMENT_DETAILS' | 'PERMISSION_PAYMENT_LIST' | 'PERMISSION_REQUISITES' | 'PERMISSION_SETTINGS_ACCOUNT' | 'PERMISSION_SETTINGS_CONTACT_DETAILS' | 'PERMISSION_SETTINGS_LOG_IN_DETAILS' | 'PERMISSION_SETTINGS_SECURITY_LEVEL' | 'PERMISSION_STATEMENTS' | 'PERMISSION_TICKETS' | PermissionTypeKeySpecifier)[];
export type PermissionTypeFieldPolicy = {
	PERMISSION_ACCOUNT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_DASHBOARD?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MAKE_PAYMENTS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MY_NET_WORTH?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_MY_TEMPLATES?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_PAYMENT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_PAYMENT_LIST?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_REQUISITES?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_ACCOUNT?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_CONTACT_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_LOG_IN_DETAILS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_SETTINGS_SECURITY_LEVEL?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_STATEMENTS?: FieldPolicy<any> | FieldReadFunction<any>,
	PERMISSION_TICKETS?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PermissionsKeySpecifier = ('all' | 'display_name' | 'guard_name' | 'id' | 'name' | 'type' | PermissionsKeySpecifier)[];
export type PermissionsFieldPolicy = {
	all?: FieldPolicy<any> | FieldReadFunction<any>,
	display_name?: FieldPolicy<any> | FieldReadFunction<any>,
	guard_name?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceListFeeKeySpecifier = ('created_at' | 'fee_ranges' | 'fee_type' | 'fees' | 'id' | 'name' | 'operation_type' | 'period' | 'price_list_id' | 'scheduled' | 'updated_at' | PriceListFeeKeySpecifier)[];
export type PriceListFeeFieldPolicy = {
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_ranges?: FieldPolicy<any> | FieldReadFunction<any>,
	fee_type?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	operation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	period?: FieldPolicy<any> | FieldReadFunction<any>,
	price_list_id?: FieldPolicy<any> | FieldReadFunction<any>,
	scheduled?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceListFeeCurrencyKeySpecifier = ('currency_id' | 'fee' | 'id' | 'price_list_fee_id' | PriceListFeeCurrencyKeySpecifier)[];
export type PriceListFeeCurrencyFieldPolicy = {
	currency_id?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	price_list_fee_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PriceListFeeScheduledKeySpecifier = ('end_date' | 'end_date_id' | 'recurrent_interval' | 'starting_date' | 'starting_date_id' | PriceListFeeScheduledKeySpecifier)[];
export type PriceListFeeScheduledFieldPolicy = {
	end_date?: FieldPolicy<any> | FieldReadFunction<any>,
	end_date_id?: FieldPolicy<any> | FieldReadFunction<any>,
	recurrent_interval?: FieldPolicy<any> | FieldReadFunction<any>,
	starting_date?: FieldPolicy<any> | FieldReadFunction<any>,
	starting_date_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectKeySpecifier = ('additional_fields_basic' | 'additional_fields_settings' | 'avatar' | 'client_url' | 'company' | 'created_at' | 'description' | 'forgot_password_url' | 'id' | 'login_url' | 'module' | 'name' | 'project_api_settings' | 'project_settings' | 'sms_sender_name' | 'state' | 'support_email' | 'updated_at' | 'url' | ProjectKeySpecifier)[];
export type ProjectFieldPolicy = {
	additional_fields_basic?: FieldPolicy<any> | FieldReadFunction<any>,
	additional_fields_settings?: FieldPolicy<any> | FieldReadFunction<any>,
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	client_url?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	forgot_password_url?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	login_url?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	project_api_settings?: FieldPolicy<any> | FieldReadFunction<any>,
	project_settings?: FieldPolicy<any> | FieldReadFunction<any>,
	sms_sender_name?: FieldPolicy<any> | FieldReadFunction<any>,
	state?: FieldPolicy<any> | FieldReadFunction<any>,
	support_email?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectApiSettingKeySpecifier = ('api_key' | 'id' | 'is_active' | 'password' | 'project' | 'provider' | 'wallet' | ProjectApiSettingKeySpecifier)[];
export type ProjectApiSettingFieldPolicy = {
	api_key?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_active?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	provider?: FieldPolicy<any> | FieldReadFunction<any>,
	wallet?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectApiSettingPasswordKeySpecifier = ('id' | 'password' | ProjectApiSettingPasswordKeySpecifier)[];
export type ProjectApiSettingPasswordFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectPaginatorKeySpecifier = ('data' | 'paginatorInfo' | ProjectPaginatorKeySpecifier)[];
export type ProjectPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type ProjectSettingsKeySpecifier = ('applicant_type' | 'commission_template' | 'group_role' | 'group_type' | 'iban_provider' | 'payment_provider' | ProjectSettingsKeySpecifier)[];
export type ProjectSettingsFieldPolicy = {
	applicant_type?: FieldPolicy<any> | FieldReadFunction<any>,
	commission_template?: FieldPolicy<any> | FieldReadFunction<any>,
	group_role?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	iban_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('account' | 'accountLimit' | 'accountLimits' | 'accountList' | 'accountReachedLimit' | 'accountReachedLimits' | 'accountStatement' | 'accountStates' | 'activeSessions' | 'activityLogs' | 'applicantAccounts' | 'applicantBankingAccess' | 'applicantBankingAccesses' | 'applicantCompanies' | 'applicantCompany' | 'applicantCompanyBusinessType' | 'applicantCompanyLabel' | 'applicantCompanyLabels' | 'applicantCompanyLabelsAvailable' | 'applicantCompanyModules' | 'applicantCompanyNote' | 'applicantCompanyNotes' | 'applicantCompanyRiskLevelHistory' | 'applicantDevices' | 'applicantDocument' | 'applicantDocumentInternalNotes' | 'applicantDocumentTagCategories' | 'applicantDocumentTags' | 'applicantDocuments' | 'applicantIndividual' | 'applicantIndividualCompanyPosition' | 'applicantIndividualCompanyPositions' | 'applicantIndividualCompanyRelation' | 'applicantIndividualCompanyRelations' | 'applicantIndividualLabel' | 'applicantIndividualLabels' | 'applicantIndividualLabelsAvailable' | 'applicantIndividualModules' | 'applicantIndividualNote' | 'applicantIndividualNotes' | 'applicantIndividuals' | 'applicantKycLevel' | 'applicantKycLevels' | 'applicantLinkedCompanies' | 'applicantProfile' | 'applicantRequisite' | 'applicantRequisites' | 'applicantRiskLevel' | 'applicantRiskLevelHistory' | 'applicantRiskLevels' | 'applicantState' | 'applicantStateReason' | 'applicantStateReasons' | 'applicantStates' | 'applicantStatus' | 'applicantStatuses' | 'applicantVerificationStatuses' | 'applicant_module' | 'applicant_modules' | 'authenticationLogs' | 'authenticationMemberLogs' | 'bankCorrespondent' | 'bankCorrespondents' | 'businessActivities' | 'businessActivity' | 'clientList' | 'commissionPriceList' | 'commissionPriceLists' | 'commissionTemplate' | 'commissionTemplateLimit' | 'commissionTemplateLimitActionType' | 'commissionTemplateLimitActionTypes' | 'commissionTemplateLimitPeriod' | 'commissionTemplateLimitPeriods' | 'commissionTemplateLimitTransferDirection' | 'commissionTemplateLimitTransferDirections' | 'commissionTemplateLimitType' | 'commissionTemplateLimitTypes' | 'commissionTemplateLimits' | 'commissionTemplates' | 'companies' | 'company' | 'companyModuleIbanProviderPassword' | 'companyModuleProviderPassword' | 'companyModules' | 'countries' | 'country' | 'currencies' | 'currency' | 'dashboardAccountsStatistic' | 'dashboardTicketsStatistic' | 'dashboardTransfersStatistic' | 'dashboardUsersStatistic' | 'department' | 'departmentPosition' | 'departmentPositions' | 'departments' | 'documentStates' | 'documentTypes' | 'downloadAccountStatementCsv' | 'downloadAccountStatementPdf' | 'downloadAccountStatementXls' | 'downloadApplicantRequisiteDetails' | 'downloadRequisiteDetails' | 'emailNotification' | 'emailNotifications' | 'emailSmtp' | 'emailSmtps' | 'emailTemplate' | 'emailTemplateLayout' | 'emailTemplates' | 'employees' | 'feeDetails' | 'feeModes' | 'feePeriods' | 'feeTypes' | 'file' | 'files' | 'getMatchedApplicantIndividuals' | 'getMatchedUsers' | 'getPaymentUrgencys' | 'getTicketComments' | 'grantedBankingAccess' | 'groupList' | 'groupTypeList' | 'group_type' | 'group_types' | 'groups' | 'kycTimeline' | 'kycTimelines' | 'language' | 'languages' | 'member' | 'memberAccessLimitation' | 'memberAccessLimitations' | 'memberProfile' | 'memberStatuses' | 'members' | 'module' | 'modules' | 'modulesWithKyc' | 'operationTypes' | 'owners' | 'payment' | 'paymentBank' | 'paymentBanks' | 'paymentProvider' | 'paymentProviderIban' | 'paymentProviderIbans' | 'paymentProviders' | 'paymentStatuses' | 'paymentSystem' | 'paymentSystems' | 'paymentSystemsList' | 'payments' | 'permission' | 'permissions' | 'permissions_tree' | 'priceListFees' | 'project' | 'projectApiSettingPassword' | 'projectApiSettings' | 'projects' | 'region' | 'regions' | 'requisite' | 'requisites' | 'respondentFees' | 'role' | 'roles' | 'sendApplicantRequisiteDetails' | 'sendRequisiteDetails' | 'senders' | 'stateReasons' | 'states' | 'ticket' | 'ticketComment' | 'tickets' | 'transferIncoming' | 'transferIncomingHistory' | 'transferIncomings' | 'transferIncomingsStatistic' | 'transferOutgoing' | 'transferOutgoingHistory' | 'transferOutgoings' | 'transferOutgoingsStatistic' | 'twoFactorAuth' | 'twoFactorsAuth' | 'typeOfIndustries' | 'userAuthData' | 'users' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	accountLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	accountLimits?: FieldPolicy<any> | FieldReadFunction<any>,
	accountList?: FieldPolicy<any> | FieldReadFunction<any>,
	accountReachedLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	accountReachedLimits?: FieldPolicy<any> | FieldReadFunction<any>,
	accountStatement?: FieldPolicy<any> | FieldReadFunction<any>,
	accountStates?: FieldPolicy<any> | FieldReadFunction<any>,
	activeSessions?: FieldPolicy<any> | FieldReadFunction<any>,
	activityLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantAccounts?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantBankingAccesses?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanies?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompany?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyBusinessType?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyLabels?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyLabelsAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyModules?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyNote?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantCompanyRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDevices?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDocument?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDocumentInternalNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDocumentTagCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDocumentTags?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantDocuments?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividual?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualCompanyPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualCompanyPositions?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualCompanyRelation?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualCompanyRelations?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualLabel?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualLabels?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualLabelsAvailable?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualModules?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualNote?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividualNotes?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantIndividuals?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantKycLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantKycLevels?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantLinkedCompanies?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantRequisite?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantRequisites?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantRiskLevel?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantRiskLevelHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantRiskLevels?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantState?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantStateReason?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantStateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantStates?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantStatus?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	applicantVerificationStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_module?: FieldPolicy<any> | FieldReadFunction<any>,
	applicant_modules?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticationLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	authenticationMemberLogs?: FieldPolicy<any> | FieldReadFunction<any>,
	bankCorrespondent?: FieldPolicy<any> | FieldReadFunction<any>,
	bankCorrespondents?: FieldPolicy<any> | FieldReadFunction<any>,
	businessActivities?: FieldPolicy<any> | FieldReadFunction<any>,
	businessActivity?: FieldPolicy<any> | FieldReadFunction<any>,
	clientList?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionPriceList?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionPriceLists?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimit?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitActionType?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitActionTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitPeriod?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitPeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitTransferDirection?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitTransferDirections?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitType?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimitTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplateLimits?: FieldPolicy<any> | FieldReadFunction<any>,
	commissionTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	companies?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	companyModuleIbanProviderPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	companyModuleProviderPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	companyModules?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	country?: FieldPolicy<any> | FieldReadFunction<any>,
	currencies?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboardAccountsStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboardTicketsStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboardTransfersStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	dashboardUsersStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	department?: FieldPolicy<any> | FieldReadFunction<any>,
	departmentPosition?: FieldPolicy<any> | FieldReadFunction<any>,
	departmentPositions?: FieldPolicy<any> | FieldReadFunction<any>,
	departments?: FieldPolicy<any> | FieldReadFunction<any>,
	documentStates?: FieldPolicy<any> | FieldReadFunction<any>,
	documentTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadAccountStatementCsv?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadAccountStatementPdf?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadAccountStatementXls?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadApplicantRequisiteDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	downloadRequisiteDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	emailNotification?: FieldPolicy<any> | FieldReadFunction<any>,
	emailNotifications?: FieldPolicy<any> | FieldReadFunction<any>,
	emailSmtp?: FieldPolicy<any> | FieldReadFunction<any>,
	emailSmtps?: FieldPolicy<any> | FieldReadFunction<any>,
	emailTemplate?: FieldPolicy<any> | FieldReadFunction<any>,
	emailTemplateLayout?: FieldPolicy<any> | FieldReadFunction<any>,
	emailTemplates?: FieldPolicy<any> | FieldReadFunction<any>,
	employees?: FieldPolicy<any> | FieldReadFunction<any>,
	feeDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	feeModes?: FieldPolicy<any> | FieldReadFunction<any>,
	feePeriods?: FieldPolicy<any> | FieldReadFunction<any>,
	feeTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	file?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	getMatchedApplicantIndividuals?: FieldPolicy<any> | FieldReadFunction<any>,
	getMatchedUsers?: FieldPolicy<any> | FieldReadFunction<any>,
	getPaymentUrgencys?: FieldPolicy<any> | FieldReadFunction<any>,
	getTicketComments?: FieldPolicy<any> | FieldReadFunction<any>,
	grantedBankingAccess?: FieldPolicy<any> | FieldReadFunction<any>,
	groupList?: FieldPolicy<any> | FieldReadFunction<any>,
	groupTypeList?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	group_types?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	kycTimeline?: FieldPolicy<any> | FieldReadFunction<any>,
	kycTimelines?: FieldPolicy<any> | FieldReadFunction<any>,
	language?: FieldPolicy<any> | FieldReadFunction<any>,
	languages?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	memberAccessLimitation?: FieldPolicy<any> | FieldReadFunction<any>,
	memberAccessLimitations?: FieldPolicy<any> | FieldReadFunction<any>,
	memberProfile?: FieldPolicy<any> | FieldReadFunction<any>,
	memberStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	members?: FieldPolicy<any> | FieldReadFunction<any>,
	module?: FieldPolicy<any> | FieldReadFunction<any>,
	modules?: FieldPolicy<any> | FieldReadFunction<any>,
	modulesWithKyc?: FieldPolicy<any> | FieldReadFunction<any>,
	operationTypes?: FieldPolicy<any> | FieldReadFunction<any>,
	owners?: FieldPolicy<any> | FieldReadFunction<any>,
	payment?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentBank?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentBanks?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProvider?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProviderIban?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProviderIbans?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentProviders?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentStatuses?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentSystem?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentSystems?: FieldPolicy<any> | FieldReadFunction<any>,
	paymentSystemsList?: FieldPolicy<any> | FieldReadFunction<any>,
	payments?: FieldPolicy<any> | FieldReadFunction<any>,
	permission?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions_tree?: FieldPolicy<any> | FieldReadFunction<any>,
	priceListFees?: FieldPolicy<any> | FieldReadFunction<any>,
	project?: FieldPolicy<any> | FieldReadFunction<any>,
	projectApiSettingPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	projectApiSettings?: FieldPolicy<any> | FieldReadFunction<any>,
	projects?: FieldPolicy<any> | FieldReadFunction<any>,
	region?: FieldPolicy<any> | FieldReadFunction<any>,
	regions?: FieldPolicy<any> | FieldReadFunction<any>,
	requisite?: FieldPolicy<any> | FieldReadFunction<any>,
	requisites?: FieldPolicy<any> | FieldReadFunction<any>,
	respondentFees?: FieldPolicy<any> | FieldReadFunction<any>,
	role?: FieldPolicy<any> | FieldReadFunction<any>,
	roles?: FieldPolicy<any> | FieldReadFunction<any>,
	sendApplicantRequisiteDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	sendRequisiteDetails?: FieldPolicy<any> | FieldReadFunction<any>,
	senders?: FieldPolicy<any> | FieldReadFunction<any>,
	stateReasons?: FieldPolicy<any> | FieldReadFunction<any>,
	states?: FieldPolicy<any> | FieldReadFunction<any>,
	ticket?: FieldPolicy<any> | FieldReadFunction<any>,
	ticketComment?: FieldPolicy<any> | FieldReadFunction<any>,
	tickets?: FieldPolicy<any> | FieldReadFunction<any>,
	transferIncoming?: FieldPolicy<any> | FieldReadFunction<any>,
	transferIncomingHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	transferIncomings?: FieldPolicy<any> | FieldReadFunction<any>,
	transferIncomingsStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	transferOutgoing?: FieldPolicy<any> | FieldReadFunction<any>,
	transferOutgoingHistory?: FieldPolicy<any> | FieldReadFunction<any>,
	transferOutgoings?: FieldPolicy<any> | FieldReadFunction<any>,
	transferOutgoingsStatistic?: FieldPolicy<any> | FieldReadFunction<any>,
	twoFactorAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	twoFactorsAuth?: FieldPolicy<any> | FieldReadFunction<any>,
	typeOfIndustries?: FieldPolicy<any> | FieldReadFunction<any>,
	userAuthData?: FieldPolicy<any> | FieldReadFunction<any>,
	users?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RawFileKeySpecifier = ('base64' | RawFileKeySpecifier)[];
export type RawFileFieldPolicy = {
	base64?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegionKeySpecifier = ('company' | 'countries' | 'id' | 'name' | RegionKeySpecifier)[];
export type RegionFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	countries?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RegionPaginatorKeySpecifier = ('data' | 'paginatorInfo' | RegionPaginatorKeySpecifier)[];
export type RegionPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RequisiteKeySpecifier = ('account_number' | 'bank' | 'currency' | 'id' | 'owner' | RequisiteKeySpecifier)[];
export type RequisiteFieldPolicy = {
	account_number?: FieldPolicy<any> | FieldReadFunction<any>,
	bank?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	owner?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RespondentFeeKeySpecifier = ('id' | 'name' | RespondentFeeKeySpecifier)[];
export type RespondentFeeFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RoleKeySpecifier = ('company' | 'description' | 'group_type' | 'groups' | 'groups_count' | 'id' | 'is_all_companies' | 'name' | 'permission_category_all_member' | 'permissions' | 'permissions_tree' | RoleKeySpecifier)[];
export type RoleFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	group_type?: FieldPolicy<any> | FieldReadFunction<any>,
	groups?: FieldPolicy<any> | FieldReadFunction<any>,
	groups_count?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	is_all_companies?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	permission_category_all_member?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions_tree?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RolePaginatorKeySpecifier = ('data' | 'paginatorInfo' | RolePaginatorKeySpecifier)[];
export type RolePaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SenderKeySpecifier = ('sender_name' | SenderKeySpecifier)[];
export type SenderFieldPolicy = {
	sender_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SimplePaginatorInfoKeySpecifier = ('count' | 'currentPage' | 'firstItem' | 'hasMorePages' | 'lastItem' | 'perPage' | SimplePaginatorInfoKeySpecifier)[];
export type SimplePaginatorInfoFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	currentPage?: FieldPolicy<any> | FieldReadFunction<any>,
	firstItem?: FieldPolicy<any> | FieldReadFunction<any>,
	hasMorePages?: FieldPolicy<any> | FieldReadFunction<any>,
	lastItem?: FieldPolicy<any> | FieldReadFunction<any>,
	perPage?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StateKeySpecifier = ('id' | 'name' | StateKeySpecifier)[];
export type StateFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StateReasonKeySpecifier = ('id' | 'name' | StateReasonKeySpecifier)[];
export type StateReasonFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StatusTypeKeySpecifier = ('message' | 'status' | StatusTypeKeySpecifier)[];
export type StatusTypeFieldPolicy = {
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TicketKeySpecifier = ('client' | 'comments' | 'company' | 'created_at' | 'department' | 'file_object' | 'id' | 'member' | 'message' | 'position' | 'status' | 'title' | 'updated_at' | TicketKeySpecifier)[];
export type TicketFieldPolicy = {
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	comments?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	department?: FieldPolicy<any> | FieldReadFunction<any>,
	file_object?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	member?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	position?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TicketCommentsKeySpecifier = ('client' | 'created_at' | 'file_object' | 'id' | 'message' | 'ticket' | 'updated_at' | TicketCommentsKeySpecifier)[];
export type TicketCommentsFieldPolicy = {
	client?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	file_object?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	message?: FieldPolicy<any> | FieldReadFunction<any>,
	ticket?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TicketPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TicketPaginatorKeySpecifier)[];
export type TicketPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TicketStatusKeySpecifier = ('id' | 'name' | TicketStatusKeySpecifier)[];
export type TicketStatusFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIncomingKeySpecifier = ('account' | 'amount' | 'amount_debt' | 'bank_message' | 'channel' | 'company' | 'created_at' | 'currency' | 'execution_at' | 'fee' | 'fees' | 'files' | 'id' | 'payment_bank' | 'payment_number' | 'payment_operation_type' | 'payment_provider' | 'payment_provider_history' | 'payment_system' | 'payment_urgency' | 'reason' | 'recipient' | 'respondent_fee' | 'sender_account' | 'sender_address' | 'sender_bank_address' | 'sender_bank_country' | 'sender_bank_name' | 'sender_bank_swift' | 'sender_city' | 'sender_country' | 'sender_name' | 'sender_state' | 'sender_zip' | 'status' | 'system_message' | 'transfer_type' | 'updated_at' | TransferIncomingKeySpecifier)[];
export type TransferIncomingFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_debt?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_message?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	execution_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_bank?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_number?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_operation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_history?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_urgency?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	respondent_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_account?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_address?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_bank_address?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_bank_country?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_bank_name?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_bank_swift?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_city?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_country?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_name?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_state?: FieldPolicy<any> | FieldReadFunction<any>,
	sender_zip?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	system_message?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIncomingHistoryKeySpecifier = ('action' | 'comment' | 'created_at' | 'id' | 'status' | TransferIncomingHistoryKeySpecifier)[];
export type TransferIncomingHistoryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIncomingHistoryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TransferIncomingHistoryPaginatorKeySpecifier)[];
export type TransferIncomingHistoryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIncomingPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TransferIncomingPaginatorKeySpecifier)[];
export type TransferIncomingPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferIncomingStatisticKeySpecifier = ('count' | 'name' | 'status_id' | TransferIncomingStatisticKeySpecifier)[];
export type TransferIncomingStatisticFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferOutgoingKeySpecifier = ('account' | 'amount' | 'amount_debt' | 'bank_message' | 'channel' | 'company' | 'created_at' | 'currency' | 'execution_at' | 'fee' | 'fees' | 'files' | 'id' | 'payment_bank' | 'payment_number' | 'payment_operation_type' | 'payment_provider' | 'payment_provider_history' | 'payment_system' | 'payment_urgency' | 'reason' | 'recipient_account' | 'recipient_address' | 'recipient_bank_address' | 'recipient_bank_country' | 'recipient_bank_name' | 'recipient_bank_swift' | 'recipient_city' | 'recipient_country' | 'recipient_name' | 'recipient_state' | 'recipient_zip' | 'requested_by' | 'respondent_fee' | 'sender' | 'status' | 'system_message' | 'transfer_type' | 'updated_at' | 'user_type' | TransferOutgoingKeySpecifier)[];
export type TransferOutgoingFieldPolicy = {
	account?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	amount_debt?: FieldPolicy<any> | FieldReadFunction<any>,
	bank_message?: FieldPolicy<any> | FieldReadFunction<any>,
	channel?: FieldPolicy<any> | FieldReadFunction<any>,
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	currency?: FieldPolicy<any> | FieldReadFunction<any>,
	execution_at?: FieldPolicy<any> | FieldReadFunction<any>,
	fee?: FieldPolicy<any> | FieldReadFunction<any>,
	fees?: FieldPolicy<any> | FieldReadFunction<any>,
	files?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_bank?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_number?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_operation_type?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_history?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_system?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_urgency?: FieldPolicy<any> | FieldReadFunction<any>,
	reason?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_account?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_address?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_address?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_country?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_name?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_bank_swift?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_city?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_country?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_name?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_state?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient_zip?: FieldPolicy<any> | FieldReadFunction<any>,
	requested_by?: FieldPolicy<any> | FieldReadFunction<any>,
	respondent_fee?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>,
	system_message?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_type?: FieldPolicy<any> | FieldReadFunction<any>,
	updated_at?: FieldPolicy<any> | FieldReadFunction<any>,
	user_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferOutgoingHistoryKeySpecifier = ('action' | 'comment' | 'created_at' | 'id' | 'status' | TransferOutgoingHistoryKeySpecifier)[];
export type TransferOutgoingHistoryFieldPolicy = {
	action?: FieldPolicy<any> | FieldReadFunction<any>,
	comment?: FieldPolicy<any> | FieldReadFunction<any>,
	created_at?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	status?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferOutgoingHistoryPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TransferOutgoingHistoryPaginatorKeySpecifier)[];
export type TransferOutgoingHistoryPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferOutgoingPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TransferOutgoingPaginatorKeySpecifier)[];
export type TransferOutgoingPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TransferOutgoingStatisticKeySpecifier = ('count' | 'name' | 'status_id' | TransferOutgoingStatisticKeySpecifier)[];
export type TransferOutgoingStatisticFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	status_id?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwoFactorAuthSettingsKeySpecifier = ('id' | 'name' | TwoFactorAuthSettingsKeySpecifier)[];
export type TwoFactorAuthSettingsFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwoFactorAuthSettingsPaginatorKeySpecifier = ('data' | 'paginatorInfo' | TwoFactorAuthSettingsPaginatorKeySpecifier)[];
export type TwoFactorAuthSettingsPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TwoFactorAuthTokenKeySpecifier = ('auth_token' | 'two_factor' | TwoFactorAuthTokenKeySpecifier)[];
export type TwoFactorAuthTokenFieldPolicy = {
	auth_token?: FieldPolicy<any> | FieldReadFunction<any>,
	two_factor?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypeOfIndustryKeySpecifier = ('id' | 'name' | TypeOfIndustryKeySpecifier)[];
export type TypeOfIndustryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypeOfTransferKeySpecifier = ('id' | 'name' | TypeOfTransferKeySpecifier)[];
export type TypeOfTransferFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersKeySpecifier = ('company' | 'email' | 'first_name' | 'fullname' | 'group' | 'id' | 'last_name' | UsersKeySpecifier)[];
export type UsersFieldPolicy = {
	company?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	first_name?: FieldPolicy<any> | FieldReadFunction<any>,
	fullname?: FieldPolicy<any> | FieldReadFunction<any>,
	group?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	last_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UsersPaginatorKeySpecifier = ('data' | 'paginatorInfo' | UsersPaginatorKeySpecifier)[];
export type UsersPaginatorFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	paginatorInfo?: FieldPolicy<any> | FieldReadFunction<any>
};
export type dashboardAccountsStatisticKeySpecifier = ('account_state_id' | 'account_state_name' | 'count' | 'payment_provider_id' | 'payment_provider_name' | dashboardAccountsStatisticKeySpecifier)[];
export type dashboardAccountsStatisticFieldPolicy = {
	account_state_id?: FieldPolicy<any> | FieldReadFunction<any>,
	account_state_name?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_id?: FieldPolicy<any> | FieldReadFunction<any>,
	payment_provider_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type dashboardTicketsStatisticKeySpecifier = ('count' | 'status_id' | 'status_name' | dashboardTicketsStatisticKeySpecifier)[];
export type dashboardTicketsStatisticFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	status_id?: FieldPolicy<any> | FieldReadFunction<any>,
	status_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type dashboardTransfersStatisticKeySpecifier = ('count' | 'status_name' | 'transfer_type' | dashboardTransfersStatisticKeySpecifier)[];
export type dashboardTransfersStatisticFieldPolicy = {
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	status_name?: FieldPolicy<any> | FieldReadFunction<any>,
	transfer_type?: FieldPolicy<any> | FieldReadFunction<any>
};
export type dashboardUsersStatisticKeySpecifier = ('applicant_type' | 'count' | 'status_name' | dashboardUsersStatisticKeySpecifier)[];
export type dashboardUsersStatisticFieldPolicy = {
	applicant_type?: FieldPolicy<any> | FieldReadFunction<any>,
	count?: FieldPolicy<any> | FieldReadFunction<any>,
	status_name?: FieldPolicy<any> | FieldReadFunction<any>
};
export type userAuthResponseKeySpecifier = ('data' | 'permissions' | userAuthResponseKeySpecifier)[];
export type userAuthResponseFieldPolicy = {
	data?: FieldPolicy<any> | FieldReadFunction<any>,
	permissions?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Account?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountKeySpecifier | (() => undefined | AccountKeySpecifier),
		fields?: AccountFieldPolicy,
	},
	AccountClient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountClientKeySpecifier | (() => undefined | AccountClientKeySpecifier),
		fields?: AccountClientFieldPolicy,
	},
	AccountGenerateIbanResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountGenerateIbanResponseKeySpecifier | (() => undefined | AccountGenerateIbanResponseKeySpecifier),
		fields?: AccountGenerateIbanResponseFieldPolicy,
	},
	AccountLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountLimitKeySpecifier | (() => undefined | AccountLimitKeySpecifier),
		fields?: AccountLimitFieldPolicy,
	},
	AccountLimitPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountLimitPaginatorKeySpecifier | (() => undefined | AccountLimitPaginatorKeySpecifier),
		fields?: AccountLimitPaginatorFieldPolicy,
	},
	AccountPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountPaginatorKeySpecifier | (() => undefined | AccountPaginatorKeySpecifier),
		fields?: AccountPaginatorFieldPolicy,
	},
	AccountReachedLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountReachedLimitKeySpecifier | (() => undefined | AccountReachedLimitKeySpecifier),
		fields?: AccountReachedLimitFieldPolicy,
	},
	AccountReachedLimitPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountReachedLimitPaginatorKeySpecifier | (() => undefined | AccountReachedLimitPaginatorKeySpecifier),
		fields?: AccountReachedLimitPaginatorFieldPolicy,
	},
	AccountState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountStateKeySpecifier | (() => undefined | AccountStateKeySpecifier),
		fields?: AccountStateFieldPolicy,
	},
	AccountStatement?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountStatementKeySpecifier | (() => undefined | AccountStatementKeySpecifier),
		fields?: AccountStatementFieldPolicy,
	},
	AccountStatementTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AccountStatementTransactionKeySpecifier | (() => undefined | AccountStatementTransactionKeySpecifier),
		fields?: AccountStatementTransactionFieldPolicy,
	},
	ActiveSession?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActiveSessionKeySpecifier | (() => undefined | ActiveSessionKeySpecifier),
		fields?: ActiveSessionFieldPolicy,
	},
	ActiveSessionMutatorResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActiveSessionMutatorResponseKeySpecifier | (() => undefined | ActiveSessionMutatorResponseKeySpecifier),
		fields?: ActiveSessionMutatorResponseFieldPolicy,
	},
	ActiveSessions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActiveSessionsKeySpecifier | (() => undefined | ActiveSessionsKeySpecifier),
		fields?: ActiveSessionsFieldPolicy,
	},
	ActivityLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityLogKeySpecifier | (() => undefined | ActivityLogKeySpecifier),
		fields?: ActivityLogFieldPolicy,
	},
	ActivityLogs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ActivityLogsKeySpecifier | (() => undefined | ActivityLogsKeySpecifier),
		fields?: ActivityLogsFieldPolicy,
	},
	ApplicantAccount?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantAccountKeySpecifier | (() => undefined | ApplicantAccountKeySpecifier),
		fields?: ApplicantAccountFieldPolicy,
	},
	ApplicantBankingAccess?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantBankingAccessKeySpecifier | (() => undefined | ApplicantBankingAccessKeySpecifier),
		fields?: ApplicantBankingAccessFieldPolicy,
	},
	ApplicantBankingAccesses?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantBankingAccessesKeySpecifier | (() => undefined | ApplicantBankingAccessesKeySpecifier),
		fields?: ApplicantBankingAccessesFieldPolicy,
	},
	ApplicantCompany?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyKeySpecifier | (() => undefined | ApplicantCompanyKeySpecifier),
		fields?: ApplicantCompanyFieldPolicy,
	},
	ApplicantCompanyBusinessType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyBusinessTypeKeySpecifier | (() => undefined | ApplicantCompanyBusinessTypeKeySpecifier),
		fields?: ApplicantCompanyBusinessTypeFieldPolicy,
	},
	ApplicantCompanyBusinessTypePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyBusinessTypePaginatorKeySpecifier | (() => undefined | ApplicantCompanyBusinessTypePaginatorKeySpecifier),
		fields?: ApplicantCompanyBusinessTypePaginatorFieldPolicy,
	},
	ApplicantCompanyLabel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyLabelKeySpecifier | (() => undefined | ApplicantCompanyLabelKeySpecifier),
		fields?: ApplicantCompanyLabelFieldPolicy,
	},
	ApplicantCompanyLabelPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyLabelPaginatorKeySpecifier | (() => undefined | ApplicantCompanyLabelPaginatorKeySpecifier),
		fields?: ApplicantCompanyLabelPaginatorFieldPolicy,
	},
	ApplicantCompanyModules?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyModulesKeySpecifier | (() => undefined | ApplicantCompanyModulesKeySpecifier),
		fields?: ApplicantCompanyModulesFieldPolicy,
	},
	ApplicantCompanyNotes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyNotesKeySpecifier | (() => undefined | ApplicantCompanyNotesKeySpecifier),
		fields?: ApplicantCompanyNotesFieldPolicy,
	},
	ApplicantCompanyNotesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyNotesPaginatorKeySpecifier | (() => undefined | ApplicantCompanyNotesPaginatorKeySpecifier),
		fields?: ApplicantCompanyNotesPaginatorFieldPolicy,
	},
	ApplicantCompanyPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyPaginatorKeySpecifier | (() => undefined | ApplicantCompanyPaginatorKeySpecifier),
		fields?: ApplicantCompanyPaginatorFieldPolicy,
	},
	ApplicantCompanyRiskLevelHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyRiskLevelHistoryKeySpecifier | (() => undefined | ApplicantCompanyRiskLevelHistoryKeySpecifier),
		fields?: ApplicantCompanyRiskLevelHistoryFieldPolicy,
	},
	ApplicantCompanyRiskLevelHistoryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantCompanyRiskLevelHistoryPaginatorKeySpecifier | (() => undefined | ApplicantCompanyRiskLevelHistoryPaginatorKeySpecifier),
		fields?: ApplicantCompanyRiskLevelHistoryPaginatorFieldPolicy,
	},
	ApplicantDetailsRequisites?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDetailsRequisitesKeySpecifier | (() => undefined | ApplicantDetailsRequisitesKeySpecifier),
		fields?: ApplicantDetailsRequisitesFieldPolicy,
	},
	ApplicantDevice?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDeviceKeySpecifier | (() => undefined | ApplicantDeviceKeySpecifier),
		fields?: ApplicantDeviceFieldPolicy,
	},
	ApplicantDocument?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentKeySpecifier | (() => undefined | ApplicantDocumentKeySpecifier),
		fields?: ApplicantDocumentFieldPolicy,
	},
	ApplicantDocumentInternalNote?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentInternalNoteKeySpecifier | (() => undefined | ApplicantDocumentInternalNoteKeySpecifier),
		fields?: ApplicantDocumentInternalNoteFieldPolicy,
	},
	ApplicantDocumentInternalNotePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentInternalNotePaginatorKeySpecifier | (() => undefined | ApplicantDocumentInternalNotePaginatorKeySpecifier),
		fields?: ApplicantDocumentInternalNotePaginatorFieldPolicy,
	},
	ApplicantDocumentPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentPaginatorKeySpecifier | (() => undefined | ApplicantDocumentPaginatorKeySpecifier),
		fields?: ApplicantDocumentPaginatorFieldPolicy,
	},
	ApplicantDocumentRejectDetail?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentRejectDetailKeySpecifier | (() => undefined | ApplicantDocumentRejectDetailKeySpecifier),
		fields?: ApplicantDocumentRejectDetailFieldPolicy,
	},
	ApplicantDocumentTag?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentTagKeySpecifier | (() => undefined | ApplicantDocumentTagKeySpecifier),
		fields?: ApplicantDocumentTagFieldPolicy,
	},
	ApplicantDocumentTagCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentTagCategoryKeySpecifier | (() => undefined | ApplicantDocumentTagCategoryKeySpecifier),
		fields?: ApplicantDocumentTagCategoryFieldPolicy,
	},
	ApplicantDocumentTagCategoryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentTagCategoryPaginatorKeySpecifier | (() => undefined | ApplicantDocumentTagCategoryPaginatorKeySpecifier),
		fields?: ApplicantDocumentTagCategoryPaginatorFieldPolicy,
	},
	ApplicantDocumentTagPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantDocumentTagPaginatorKeySpecifier | (() => undefined | ApplicantDocumentTagPaginatorKeySpecifier),
		fields?: ApplicantDocumentTagPaginatorFieldPolicy,
	},
	ApplicantIndividual?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualKeySpecifier | (() => undefined | ApplicantIndividualKeySpecifier),
		fields?: ApplicantIndividualFieldPolicy,
	},
	ApplicantIndividualCompany?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualCompanyKeySpecifier | (() => undefined | ApplicantIndividualCompanyKeySpecifier),
		fields?: ApplicantIndividualCompanyFieldPolicy,
	},
	ApplicantIndividualCompanyPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualCompanyPositionKeySpecifier | (() => undefined | ApplicantIndividualCompanyPositionKeySpecifier),
		fields?: ApplicantIndividualCompanyPositionFieldPolicy,
	},
	ApplicantIndividualCompanyPositionPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualCompanyPositionPaginatorKeySpecifier | (() => undefined | ApplicantIndividualCompanyPositionPaginatorKeySpecifier),
		fields?: ApplicantIndividualCompanyPositionPaginatorFieldPolicy,
	},
	ApplicantIndividualCompanyRelation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualCompanyRelationKeySpecifier | (() => undefined | ApplicantIndividualCompanyRelationKeySpecifier),
		fields?: ApplicantIndividualCompanyRelationFieldPolicy,
	},
	ApplicantIndividualCompanyRelationPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualCompanyRelationPaginatorKeySpecifier | (() => undefined | ApplicantIndividualCompanyRelationPaginatorKeySpecifier),
		fields?: ApplicantIndividualCompanyRelationPaginatorFieldPolicy,
	},
	ApplicantIndividualLabel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualLabelKeySpecifier | (() => undefined | ApplicantIndividualLabelKeySpecifier),
		fields?: ApplicantIndividualLabelFieldPolicy,
	},
	ApplicantIndividualLabelPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualLabelPaginatorKeySpecifier | (() => undefined | ApplicantIndividualLabelPaginatorKeySpecifier),
		fields?: ApplicantIndividualLabelPaginatorFieldPolicy,
	},
	ApplicantIndividualModules?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualModulesKeySpecifier | (() => undefined | ApplicantIndividualModulesKeySpecifier),
		fields?: ApplicantIndividualModulesFieldPolicy,
	},
	ApplicantIndividualNotes?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualNotesKeySpecifier | (() => undefined | ApplicantIndividualNotesKeySpecifier),
		fields?: ApplicantIndividualNotesFieldPolicy,
	},
	ApplicantIndividualNotesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualNotesPaginatorKeySpecifier | (() => undefined | ApplicantIndividualNotesPaginatorKeySpecifier),
		fields?: ApplicantIndividualNotesPaginatorFieldPolicy,
	},
	ApplicantIndividualPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantIndividualPaginatorKeySpecifier | (() => undefined | ApplicantIndividualPaginatorKeySpecifier),
		fields?: ApplicantIndividualPaginatorFieldPolicy,
	},
	ApplicantKycLevel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantKycLevelKeySpecifier | (() => undefined | ApplicantKycLevelKeySpecifier),
		fields?: ApplicantKycLevelFieldPolicy,
	},
	ApplicantKycLevelPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantKycLevelPaginatorKeySpecifier | (() => undefined | ApplicantKycLevelPaginatorKeySpecifier),
		fields?: ApplicantKycLevelPaginatorFieldPolicy,
	},
	ApplicantLinkedCompany?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantLinkedCompanyKeySpecifier | (() => undefined | ApplicantLinkedCompanyKeySpecifier),
		fields?: ApplicantLinkedCompanyFieldPolicy,
	},
	ApplicantModules?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantModulesKeySpecifier | (() => undefined | ApplicantModulesKeySpecifier),
		fields?: ApplicantModulesFieldPolicy,
	},
	ApplicantModulesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantModulesPaginatorKeySpecifier | (() => undefined | ApplicantModulesPaginatorKeySpecifier),
		fields?: ApplicantModulesPaginatorFieldPolicy,
	},
	ApplicantProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantProfileKeySpecifier | (() => undefined | ApplicantProfileKeySpecifier),
		fields?: ApplicantProfileFieldPolicy,
	},
	ApplicantRequisites?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantRequisitesKeySpecifier | (() => undefined | ApplicantRequisitesKeySpecifier),
		fields?: ApplicantRequisitesFieldPolicy,
	},
	ApplicantRiskLevel?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantRiskLevelKeySpecifier | (() => undefined | ApplicantRiskLevelKeySpecifier),
		fields?: ApplicantRiskLevelFieldPolicy,
	},
	ApplicantRiskLevelHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantRiskLevelHistoryKeySpecifier | (() => undefined | ApplicantRiskLevelHistoryKeySpecifier),
		fields?: ApplicantRiskLevelHistoryFieldPolicy,
	},
	ApplicantRiskLevelHistoryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantRiskLevelHistoryPaginatorKeySpecifier | (() => undefined | ApplicantRiskLevelHistoryPaginatorKeySpecifier),
		fields?: ApplicantRiskLevelHistoryPaginatorFieldPolicy,
	},
	ApplicantRiskLevelPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantRiskLevelPaginatorKeySpecifier | (() => undefined | ApplicantRiskLevelPaginatorKeySpecifier),
		fields?: ApplicantRiskLevelPaginatorFieldPolicy,
	},
	ApplicantSettingsProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantSettingsProfileKeySpecifier | (() => undefined | ApplicantSettingsProfileKeySpecifier),
		fields?: ApplicantSettingsProfileFieldPolicy,
	},
	ApplicantState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStateKeySpecifier | (() => undefined | ApplicantStateKeySpecifier),
		fields?: ApplicantStateFieldPolicy,
	},
	ApplicantStatePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStatePaginatorKeySpecifier | (() => undefined | ApplicantStatePaginatorKeySpecifier),
		fields?: ApplicantStatePaginatorFieldPolicy,
	},
	ApplicantStateReason?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStateReasonKeySpecifier | (() => undefined | ApplicantStateReasonKeySpecifier),
		fields?: ApplicantStateReasonFieldPolicy,
	},
	ApplicantStateReasonPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStateReasonPaginatorKeySpecifier | (() => undefined | ApplicantStateReasonPaginatorKeySpecifier),
		fields?: ApplicantStateReasonPaginatorFieldPolicy,
	},
	ApplicantStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStatusKeySpecifier | (() => undefined | ApplicantStatusKeySpecifier),
		fields?: ApplicantStatusFieldPolicy,
	},
	ApplicantStatusPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantStatusPaginatorKeySpecifier | (() => undefined | ApplicantStatusPaginatorKeySpecifier),
		fields?: ApplicantStatusPaginatorFieldPolicy,
	},
	ApplicantVerificationStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ApplicantVerificationStatusKeySpecifier | (() => undefined | ApplicantVerificationStatusKeySpecifier),
		fields?: ApplicantVerificationStatusFieldPolicy,
	},
	AuthenticationLog?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticationLogKeySpecifier | (() => undefined | AuthenticationLogKeySpecifier),
		fields?: AuthenticationLogFieldPolicy,
	},
	AuthenticationLogs?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | AuthenticationLogsKeySpecifier | (() => undefined | AuthenticationLogsKeySpecifier),
		fields?: AuthenticationLogsFieldPolicy,
	},
	BankCorrespondent?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BankCorrespondentKeySpecifier | (() => undefined | BankCorrespondentKeySpecifier),
		fields?: BankCorrespondentFieldPolicy,
	},
	BankCorrespondentPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BankCorrespondentPaginatorKeySpecifier | (() => undefined | BankCorrespondentPaginatorKeySpecifier),
		fields?: BankCorrespondentPaginatorFieldPolicy,
	},
	BusinessActivity?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BusinessActivityKeySpecifier | (() => undefined | BusinessActivityKeySpecifier),
		fields?: BusinessActivityFieldPolicy,
	},
	BusinessActivityPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BusinessActivityPaginatorKeySpecifier | (() => undefined | BusinessActivityPaginatorKeySpecifier),
		fields?: BusinessActivityPaginatorFieldPolicy,
	},
	ClientAccountsDetails?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientAccountsDetailsKeySpecifier | (() => undefined | ClientAccountsDetailsKeySpecifier),
		fields?: ClientAccountsDetailsFieldPolicy,
	},
	ClientIpAddress?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ClientIpAddressKeySpecifier | (() => undefined | ClientIpAddressKeySpecifier),
		fields?: ClientIpAddressFieldPolicy,
	},
	CommissionPriceList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionPriceListKeySpecifier | (() => undefined | CommissionPriceListKeySpecifier),
		fields?: CommissionPriceListFieldPolicy,
	},
	CommissionPriceListPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionPriceListPaginatorKeySpecifier | (() => undefined | CommissionPriceListPaginatorKeySpecifier),
		fields?: CommissionPriceListPaginatorFieldPolicy,
	},
	CommissionTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateKeySpecifier | (() => undefined | CommissionTemplateKeySpecifier),
		fields?: CommissionTemplateFieldPolicy,
	},
	CommissionTemplateLimit?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitKeySpecifier | (() => undefined | CommissionTemplateLimitKeySpecifier),
		fields?: CommissionTemplateLimitFieldPolicy,
	},
	CommissionTemplateLimitActionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitActionTypeKeySpecifier | (() => undefined | CommissionTemplateLimitActionTypeKeySpecifier),
		fields?: CommissionTemplateLimitActionTypeFieldPolicy,
	},
	CommissionTemplateLimitActionTypePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitActionTypePaginatorKeySpecifier | (() => undefined | CommissionTemplateLimitActionTypePaginatorKeySpecifier),
		fields?: CommissionTemplateLimitActionTypePaginatorFieldPolicy,
	},
	CommissionTemplateLimitPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitPaginatorKeySpecifier | (() => undefined | CommissionTemplateLimitPaginatorKeySpecifier),
		fields?: CommissionTemplateLimitPaginatorFieldPolicy,
	},
	CommissionTemplateLimitPeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitPeriodKeySpecifier | (() => undefined | CommissionTemplateLimitPeriodKeySpecifier),
		fields?: CommissionTemplateLimitPeriodFieldPolicy,
	},
	CommissionTemplateLimitPeriodPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitPeriodPaginatorKeySpecifier | (() => undefined | CommissionTemplateLimitPeriodPaginatorKeySpecifier),
		fields?: CommissionTemplateLimitPeriodPaginatorFieldPolicy,
	},
	CommissionTemplateLimitTransferDirection?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitTransferDirectionKeySpecifier | (() => undefined | CommissionTemplateLimitTransferDirectionKeySpecifier),
		fields?: CommissionTemplateLimitTransferDirectionFieldPolicy,
	},
	CommissionTemplateLimitTransferDirectionPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitTransferDirectionPaginatorKeySpecifier | (() => undefined | CommissionTemplateLimitTransferDirectionPaginatorKeySpecifier),
		fields?: CommissionTemplateLimitTransferDirectionPaginatorFieldPolicy,
	},
	CommissionTemplateLimitType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitTypeKeySpecifier | (() => undefined | CommissionTemplateLimitTypeKeySpecifier),
		fields?: CommissionTemplateLimitTypeFieldPolicy,
	},
	CommissionTemplateLimitTypePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplateLimitTypePaginatorKeySpecifier | (() => undefined | CommissionTemplateLimitTypePaginatorKeySpecifier),
		fields?: CommissionTemplateLimitTypePaginatorFieldPolicy,
	},
	CommissionTemplatePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CommissionTemplatePaginatorKeySpecifier | (() => undefined | CommissionTemplatePaginatorKeySpecifier),
		fields?: CommissionTemplatePaginatorFieldPolicy,
	},
	Company?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyKeySpecifier | (() => undefined | CompanyKeySpecifier),
		fields?: CompanyFieldPolicy,
	},
	CompanyModule?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyModuleKeySpecifier | (() => undefined | CompanyModuleKeySpecifier),
		fields?: CompanyModuleFieldPolicy,
	},
	CompanyModuleIbanProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyModuleIbanProviderKeySpecifier | (() => undefined | CompanyModuleIbanProviderKeySpecifier),
		fields?: CompanyModuleIbanProviderFieldPolicy,
	},
	CompanyModuleIbanProviderPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyModuleIbanProviderPasswordKeySpecifier | (() => undefined | CompanyModuleIbanProviderPasswordKeySpecifier),
		fields?: CompanyModuleIbanProviderPasswordFieldPolicy,
	},
	CompanyModulePaymentProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyModulePaymentProviderKeySpecifier | (() => undefined | CompanyModulePaymentProviderKeySpecifier),
		fields?: CompanyModulePaymentProviderFieldPolicy,
	},
	CompanyModulePaymentProviderPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyModulePaymentProviderPasswordKeySpecifier | (() => undefined | CompanyModulePaymentProviderPasswordKeySpecifier),
		fields?: CompanyModulePaymentProviderPasswordFieldPolicy,
	},
	CompanyPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CompanyPaginatorKeySpecifier | (() => undefined | CompanyPaginatorKeySpecifier),
		fields?: CompanyPaginatorFieldPolicy,
	},
	Country?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryKeySpecifier | (() => undefined | CountryKeySpecifier),
		fields?: CountryFieldPolicy,
	},
	CountryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CountryPaginatorKeySpecifier | (() => undefined | CountryPaginatorKeySpecifier),
		fields?: CountryPaginatorFieldPolicy,
	},
	Currencies?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrenciesKeySpecifier | (() => undefined | CurrenciesKeySpecifier),
		fields?: CurrenciesFieldPolicy,
	},
	CurrenciesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CurrenciesPaginatorKeySpecifier | (() => undefined | CurrenciesPaginatorKeySpecifier),
		fields?: CurrenciesPaginatorFieldPolicy,
	},
	Department?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepartmentKeySpecifier | (() => undefined | DepartmentKeySpecifier),
		fields?: DepartmentFieldPolicy,
	},
	DepartmentPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepartmentPaginatorKeySpecifier | (() => undefined | DepartmentPaginatorKeySpecifier),
		fields?: DepartmentPaginatorFieldPolicy,
	},
	DepartmentPosition?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepartmentPositionKeySpecifier | (() => undefined | DepartmentPositionKeySpecifier),
		fields?: DepartmentPositionFieldPolicy,
	},
	DepartmentPositionPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DepartmentPositionPaginatorKeySpecifier | (() => undefined | DepartmentPositionPaginatorKeySpecifier),
		fields?: DepartmentPositionPaginatorFieldPolicy,
	},
	DocumentState?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentStateKeySpecifier | (() => undefined | DocumentStateKeySpecifier),
		fields?: DocumentStateFieldPolicy,
	},
	DocumentType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | DocumentTypeKeySpecifier | (() => undefined | DocumentTypeKeySpecifier),
		fields?: DocumentTypeFieldPolicy,
	},
	EmailNotification?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailNotificationKeySpecifier | (() => undefined | EmailNotificationKeySpecifier),
		fields?: EmailNotificationFieldPolicy,
	},
	EmailNotificationPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailNotificationPaginatorKeySpecifier | (() => undefined | EmailNotificationPaginatorKeySpecifier),
		fields?: EmailNotificationPaginatorFieldPolicy,
	},
	EmailSmtp?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailSmtpKeySpecifier | (() => undefined | EmailSmtpKeySpecifier),
		fields?: EmailSmtpFieldPolicy,
	},
	EmailTemplate?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailTemplateKeySpecifier | (() => undefined | EmailTemplateKeySpecifier),
		fields?: EmailTemplateFieldPolicy,
	},
	EmailTemplateLayout?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailTemplateLayoutKeySpecifier | (() => undefined | EmailTemplateLayoutKeySpecifier),
		fields?: EmailTemplateLayoutFieldPolicy,
	},
	EmailTemplateOnCompanyResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmailTemplateOnCompanyResponseKeySpecifier | (() => undefined | EmailTemplateOnCompanyResponseKeySpecifier),
		fields?: EmailTemplateOnCompanyResponseFieldPolicy,
	},
	Employee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | EmployeeKeySpecifier | (() => undefined | EmployeeKeySpecifier),
		fields?: EmployeeFieldPolicy,
	},
	Fee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeKeySpecifier | (() => undefined | FeeKeySpecifier),
		fields?: FeeFieldPolicy,
	},
	FeeItem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeItemKeySpecifier | (() => undefined | FeeItemKeySpecifier),
		fields?: FeeItemFieldPolicy,
	},
	FeeMode?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeModeKeySpecifier | (() => undefined | FeeModeKeySpecifier),
		fields?: FeeModeFieldPolicy,
	},
	FeePeriod?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeePeriodKeySpecifier | (() => undefined | FeePeriodKeySpecifier),
		fields?: FeePeriodFieldPolicy,
	},
	FeeType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FeeTypeKeySpecifier | (() => undefined | FeeTypeKeySpecifier),
		fields?: FeeTypeFieldPolicy,
	},
	Files?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilesKeySpecifier | (() => undefined | FilesKeySpecifier),
		fields?: FilesFieldPolicy,
	},
	FilesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FilesPaginatorKeySpecifier | (() => undefined | FilesPaginatorKeySpecifier),
		fields?: FilesPaginatorFieldPolicy,
	},
	GroupRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupRoleKeySpecifier | (() => undefined | GroupRoleKeySpecifier),
		fields?: GroupRoleFieldPolicy,
	},
	GroupRolePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupRolePaginatorKeySpecifier | (() => undefined | GroupRolePaginatorKeySpecifier),
		fields?: GroupRolePaginatorFieldPolicy,
	},
	GroupRoleProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupRoleProviderKeySpecifier | (() => undefined | GroupRoleProviderKeySpecifier),
		fields?: GroupRoleProviderFieldPolicy,
	},
	GroupRoleView?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupRoleViewKeySpecifier | (() => undefined | GroupRoleViewKeySpecifier),
		fields?: GroupRoleViewFieldPolicy,
	},
	GroupRoleViewPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupRoleViewPaginatorKeySpecifier | (() => undefined | GroupRoleViewPaginatorKeySpecifier),
		fields?: GroupRoleViewPaginatorFieldPolicy,
	},
	GroupType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupTypeKeySpecifier | (() => undefined | GroupTypeKeySpecifier),
		fields?: GroupTypeFieldPolicy,
	},
	GroupTypePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupTypePaginatorKeySpecifier | (() => undefined | GroupTypePaginatorKeySpecifier),
		fields?: GroupTypePaginatorFieldPolicy,
	},
	Groups?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | GroupsKeySpecifier | (() => undefined | GroupsKeySpecifier),
		fields?: GroupsFieldPolicy,
	},
	KycTimeline?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KycTimelineKeySpecifier | (() => undefined | KycTimelineKeySpecifier),
		fields?: KycTimelineFieldPolicy,
	},
	KycTimelines?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | KycTimelinesKeySpecifier | (() => undefined | KycTimelinesKeySpecifier),
		fields?: KycTimelinesFieldPolicy,
	},
	Languages?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguagesKeySpecifier | (() => undefined | LanguagesKeySpecifier),
		fields?: LanguagesFieldPolicy,
	},
	LanguagesPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | LanguagesPaginatorKeySpecifier | (() => undefined | LanguagesPaginatorKeySpecifier),
		fields?: LanguagesPaginatorFieldPolicy,
	},
	MemberAccessLimitation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberAccessLimitationKeySpecifier | (() => undefined | MemberAccessLimitationKeySpecifier),
		fields?: MemberAccessLimitationFieldPolicy,
	},
	MemberAccessLimitationPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberAccessLimitationPaginatorKeySpecifier | (() => undefined | MemberAccessLimitationPaginatorKeySpecifier),
		fields?: MemberAccessLimitationPaginatorFieldPolicy,
	},
	MemberProfile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberProfileKeySpecifier | (() => undefined | MemberProfileKeySpecifier),
		fields?: MemberProfileFieldPolicy,
	},
	MemberStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MemberStatusKeySpecifier | (() => undefined | MemberStatusKeySpecifier),
		fields?: MemberStatusFieldPolicy,
	},
	Members?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersKeySpecifier | (() => undefined | MembersKeySpecifier),
		fields?: MembersFieldPolicy,
	},
	MembersPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MembersPaginatorKeySpecifier | (() => undefined | MembersPaginatorKeySpecifier),
		fields?: MembersPaginatorFieldPolicy,
	},
	Module?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ModuleKeySpecifier | (() => undefined | ModuleKeySpecifier),
		fields?: ModuleFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	OperationType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | OperationTypeKeySpecifier | (() => undefined | OperationTypeKeySpecifier),
		fields?: OperationTypeFieldPolicy,
	},
	PageInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PageInfoKeySpecifier | (() => undefined | PageInfoKeySpecifier),
		fields?: PageInfoFieldPolicy,
	},
	PaginatorInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaginatorInfoKeySpecifier | (() => undefined | PaginatorInfoKeySpecifier),
		fields?: PaginatorInfoFieldPolicy,
	},
	PaymentBank?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentBankKeySpecifier | (() => undefined | PaymentBankKeySpecifier),
		fields?: PaymentBankFieldPolicy,
	},
	PaymentBankPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentBankPaginatorKeySpecifier | (() => undefined | PaymentBankPaginatorKeySpecifier),
		fields?: PaymentBankPaginatorFieldPolicy,
	},
	PaymentProvider?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentProviderKeySpecifier | (() => undefined | PaymentProviderKeySpecifier),
		fields?: PaymentProviderFieldPolicy,
	},
	PaymentProviderHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentProviderHistoryKeySpecifier | (() => undefined | PaymentProviderHistoryKeySpecifier),
		fields?: PaymentProviderHistoryFieldPolicy,
	},
	PaymentProviderIban?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentProviderIbanKeySpecifier | (() => undefined | PaymentProviderIbanKeySpecifier),
		fields?: PaymentProviderIbanFieldPolicy,
	},
	PaymentProviderIbanPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentProviderIbanPaginatorKeySpecifier | (() => undefined | PaymentProviderIbanPaginatorKeySpecifier),
		fields?: PaymentProviderIbanPaginatorFieldPolicy,
	},
	PaymentProviderPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentProviderPaginatorKeySpecifier | (() => undefined | PaymentProviderPaginatorKeySpecifier),
		fields?: PaymentProviderPaginatorFieldPolicy,
	},
	PaymentStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentStatusKeySpecifier | (() => undefined | PaymentStatusKeySpecifier),
		fields?: PaymentStatusFieldPolicy,
	},
	PaymentSystem?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSystemKeySpecifier | (() => undefined | PaymentSystemKeySpecifier),
		fields?: PaymentSystemFieldPolicy,
	},
	PaymentSystemPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentSystemPaginatorKeySpecifier | (() => undefined | PaymentSystemPaginatorKeySpecifier),
		fields?: PaymentSystemPaginatorFieldPolicy,
	},
	PaymentUrgency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentUrgencyKeySpecifier | (() => undefined | PaymentUrgencyKeySpecifier),
		fields?: PaymentUrgencyFieldPolicy,
	},
	Payments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentsKeySpecifier | (() => undefined | PaymentsKeySpecifier),
		fields?: PaymentsFieldPolicy,
	},
	PaymentsPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PaymentsPaginatorKeySpecifier | (() => undefined | PaymentsPaginatorKeySpecifier),
		fields?: PaymentsPaginatorFieldPolicy,
	},
	PermissionAuth?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionAuthKeySpecifier | (() => undefined | PermissionAuthKeySpecifier),
		fields?: PermissionAuthFieldPolicy,
	},
	PermissionCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionCategoryKeySpecifier | (() => undefined | PermissionCategoryKeySpecifier),
		fields?: PermissionCategoryFieldPolicy,
	},
	PermissionCategoryRole?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionCategoryRoleKeySpecifier | (() => undefined | PermissionCategoryRoleKeySpecifier),
		fields?: PermissionCategoryRoleFieldPolicy,
	},
	PermissionList?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionListKeySpecifier | (() => undefined | PermissionListKeySpecifier),
		fields?: PermissionListFieldPolicy,
	},
	PermissionType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionTypeKeySpecifier | (() => undefined | PermissionTypeKeySpecifier),
		fields?: PermissionTypeFieldPolicy,
	},
	Permissions?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PermissionsKeySpecifier | (() => undefined | PermissionsKeySpecifier),
		fields?: PermissionsFieldPolicy,
	},
	PriceListFee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceListFeeKeySpecifier | (() => undefined | PriceListFeeKeySpecifier),
		fields?: PriceListFeeFieldPolicy,
	},
	PriceListFeeCurrency?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceListFeeCurrencyKeySpecifier | (() => undefined | PriceListFeeCurrencyKeySpecifier),
		fields?: PriceListFeeCurrencyFieldPolicy,
	},
	PriceListFeeScheduled?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PriceListFeeScheduledKeySpecifier | (() => undefined | PriceListFeeScheduledKeySpecifier),
		fields?: PriceListFeeScheduledFieldPolicy,
	},
	Project?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectKeySpecifier | (() => undefined | ProjectKeySpecifier),
		fields?: ProjectFieldPolicy,
	},
	ProjectApiSetting?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectApiSettingKeySpecifier | (() => undefined | ProjectApiSettingKeySpecifier),
		fields?: ProjectApiSettingFieldPolicy,
	},
	ProjectApiSettingPassword?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectApiSettingPasswordKeySpecifier | (() => undefined | ProjectApiSettingPasswordKeySpecifier),
		fields?: ProjectApiSettingPasswordFieldPolicy,
	},
	ProjectPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectPaginatorKeySpecifier | (() => undefined | ProjectPaginatorKeySpecifier),
		fields?: ProjectPaginatorFieldPolicy,
	},
	ProjectSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | ProjectSettingsKeySpecifier | (() => undefined | ProjectSettingsKeySpecifier),
		fields?: ProjectSettingsFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	RawFile?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RawFileKeySpecifier | (() => undefined | RawFileKeySpecifier),
		fields?: RawFileFieldPolicy,
	},
	Region?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegionKeySpecifier | (() => undefined | RegionKeySpecifier),
		fields?: RegionFieldPolicy,
	},
	RegionPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RegionPaginatorKeySpecifier | (() => undefined | RegionPaginatorKeySpecifier),
		fields?: RegionPaginatorFieldPolicy,
	},
	Requisite?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RequisiteKeySpecifier | (() => undefined | RequisiteKeySpecifier),
		fields?: RequisiteFieldPolicy,
	},
	RespondentFee?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RespondentFeeKeySpecifier | (() => undefined | RespondentFeeKeySpecifier),
		fields?: RespondentFeeFieldPolicy,
	},
	Role?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RoleKeySpecifier | (() => undefined | RoleKeySpecifier),
		fields?: RoleFieldPolicy,
	},
	RolePaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RolePaginatorKeySpecifier | (() => undefined | RolePaginatorKeySpecifier),
		fields?: RolePaginatorFieldPolicy,
	},
	Sender?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SenderKeySpecifier | (() => undefined | SenderKeySpecifier),
		fields?: SenderFieldPolicy,
	},
	SimplePaginatorInfo?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SimplePaginatorInfoKeySpecifier | (() => undefined | SimplePaginatorInfoKeySpecifier),
		fields?: SimplePaginatorInfoFieldPolicy,
	},
	State?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StateKeySpecifier | (() => undefined | StateKeySpecifier),
		fields?: StateFieldPolicy,
	},
	StateReason?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StateReasonKeySpecifier | (() => undefined | StateReasonKeySpecifier),
		fields?: StateReasonFieldPolicy,
	},
	StatusType?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StatusTypeKeySpecifier | (() => undefined | StatusTypeKeySpecifier),
		fields?: StatusTypeFieldPolicy,
	},
	Ticket?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TicketKeySpecifier | (() => undefined | TicketKeySpecifier),
		fields?: TicketFieldPolicy,
	},
	TicketComments?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TicketCommentsKeySpecifier | (() => undefined | TicketCommentsKeySpecifier),
		fields?: TicketCommentsFieldPolicy,
	},
	TicketPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TicketPaginatorKeySpecifier | (() => undefined | TicketPaginatorKeySpecifier),
		fields?: TicketPaginatorFieldPolicy,
	},
	TicketStatus?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TicketStatusKeySpecifier | (() => undefined | TicketStatusKeySpecifier),
		fields?: TicketStatusFieldPolicy,
	},
	TransferIncoming?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIncomingKeySpecifier | (() => undefined | TransferIncomingKeySpecifier),
		fields?: TransferIncomingFieldPolicy,
	},
	TransferIncomingHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIncomingHistoryKeySpecifier | (() => undefined | TransferIncomingHistoryKeySpecifier),
		fields?: TransferIncomingHistoryFieldPolicy,
	},
	TransferIncomingHistoryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIncomingHistoryPaginatorKeySpecifier | (() => undefined | TransferIncomingHistoryPaginatorKeySpecifier),
		fields?: TransferIncomingHistoryPaginatorFieldPolicy,
	},
	TransferIncomingPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIncomingPaginatorKeySpecifier | (() => undefined | TransferIncomingPaginatorKeySpecifier),
		fields?: TransferIncomingPaginatorFieldPolicy,
	},
	TransferIncomingStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferIncomingStatisticKeySpecifier | (() => undefined | TransferIncomingStatisticKeySpecifier),
		fields?: TransferIncomingStatisticFieldPolicy,
	},
	TransferOutgoing?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferOutgoingKeySpecifier | (() => undefined | TransferOutgoingKeySpecifier),
		fields?: TransferOutgoingFieldPolicy,
	},
	TransferOutgoingHistory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferOutgoingHistoryKeySpecifier | (() => undefined | TransferOutgoingHistoryKeySpecifier),
		fields?: TransferOutgoingHistoryFieldPolicy,
	},
	TransferOutgoingHistoryPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferOutgoingHistoryPaginatorKeySpecifier | (() => undefined | TransferOutgoingHistoryPaginatorKeySpecifier),
		fields?: TransferOutgoingHistoryPaginatorFieldPolicy,
	},
	TransferOutgoingPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferOutgoingPaginatorKeySpecifier | (() => undefined | TransferOutgoingPaginatorKeySpecifier),
		fields?: TransferOutgoingPaginatorFieldPolicy,
	},
	TransferOutgoingStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TransferOutgoingStatisticKeySpecifier | (() => undefined | TransferOutgoingStatisticKeySpecifier),
		fields?: TransferOutgoingStatisticFieldPolicy,
	},
	TwoFactorAuthSettings?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwoFactorAuthSettingsKeySpecifier | (() => undefined | TwoFactorAuthSettingsKeySpecifier),
		fields?: TwoFactorAuthSettingsFieldPolicy,
	},
	TwoFactorAuthSettingsPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwoFactorAuthSettingsPaginatorKeySpecifier | (() => undefined | TwoFactorAuthSettingsPaginatorKeySpecifier),
		fields?: TwoFactorAuthSettingsPaginatorFieldPolicy,
	},
	TwoFactorAuthToken?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TwoFactorAuthTokenKeySpecifier | (() => undefined | TwoFactorAuthTokenKeySpecifier),
		fields?: TwoFactorAuthTokenFieldPolicy,
	},
	TypeOfIndustry?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TypeOfIndustryKeySpecifier | (() => undefined | TypeOfIndustryKeySpecifier),
		fields?: TypeOfIndustryFieldPolicy,
	},
	TypeOfTransfer?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TypeOfTransferKeySpecifier | (() => undefined | TypeOfTransferKeySpecifier),
		fields?: TypeOfTransferFieldPolicy,
	},
	Users?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersKeySpecifier | (() => undefined | UsersKeySpecifier),
		fields?: UsersFieldPolicy,
	},
	UsersPaginator?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UsersPaginatorKeySpecifier | (() => undefined | UsersPaginatorKeySpecifier),
		fields?: UsersPaginatorFieldPolicy,
	},
	dashboardAccountsStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | dashboardAccountsStatisticKeySpecifier | (() => undefined | dashboardAccountsStatisticKeySpecifier),
		fields?: dashboardAccountsStatisticFieldPolicy,
	},
	dashboardTicketsStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | dashboardTicketsStatisticKeySpecifier | (() => undefined | dashboardTicketsStatisticKeySpecifier),
		fields?: dashboardTicketsStatisticFieldPolicy,
	},
	dashboardTransfersStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | dashboardTransfersStatisticKeySpecifier | (() => undefined | dashboardTransfersStatisticKeySpecifier),
		fields?: dashboardTransfersStatisticFieldPolicy,
	},
	dashboardUsersStatistic?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | dashboardUsersStatisticKeySpecifier | (() => undefined | dashboardUsersStatisticKeySpecifier),
		fields?: dashboardUsersStatisticFieldPolicy,
	},
	userAuthResponse?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | userAuthResponseKeySpecifier | (() => undefined | userAuthResponseKeySpecifier),
		fields?: userAuthResponseFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;