export var roleAccess = [
  {
    "id": 1,
    "action": "ADD_USER"
  },
  {
    "id": 2,
    "action": "DELETE_USER"
  },
  {
    "id": 3,
    "action": "READ_USER"
  },
  {
    "id": 4,
    "action": "UPDATE_USER"
  },
  {
    "id": 5,
    "action": "USER_DETAIL"
  },
  {
    "id": 6,
    "action": "ADD_ROLE"
  },
  {
    "id": 7,
    "action": "ROLE_DETAIL"
  },
  {
    "id": 8,
    "action": "UPDATE_ROLE"
  },
  {
    "id": 9,
    "action": "DELETE_ROLE"
  },
  {
    "id": 10,
    "action": "READ_ROLE"
  },
  /// transaction starts ///
  {
    "id": 2000,
    "action": "VIEW_SALE"
  },
  {
    "id": 2001,
    "action": "VIEW_REFUND"
  },
  {
    "id": 2002,
    "action": "VIEW_PRE_AUTH"
  },
  {
    "id": 2003,
    "action": "VIEW_AUTH_COMPLETION"
  },
  {
    "id": 2004,
    "action": "VIEW_DISPUTES"
  },
  /// transaction ends ///

  /// settlement start ///
  {
    "id": 2005,
    "action": "VIEW_SETTLEMENT"
  },
  /// settlement ends ///

  /// reports start ///
  {
    "id": 2006,
    "action": "VIEW_REPORTS_TRANSACTIONS"
  },
  {
    "id": 2007,
    "action": "VIEW_REPORTS_SETTLEMENT"
  },
  /// reports end ///

  /// batch start ///
  {
    "id": 2008,
    "action": "VIEW_BATCH_UPLOAD"
  },
  {
    "id": 2009,
    "action": "VIEW_BATCH_STATUS"
  },
  /// batch ends ///

  /// order start ///
  {
    "id": 2010,
    "action": "VIEW_CREATE_ORDER"
  },
  {
    "id": 2011,
    "action": "VIEW_CONFIGURE_ORDER"
  },
  {
    "id": 2012,
    "action": "VIEW_ORDER_SEARCH"
  },
  {
    "id": 2013,
    "action": "VIEW_ORDER_CONFIGURATION"
  },
  {
    "id": 2014,
    "action": "VIEW_ORDER_UPLOAD"
  },
  {
    "id": 2015,
    "action": "VIEW_GENERATE_MFA"
  },
  {
    "id": 2016,
    "action": "VIEW_DOWNLOAD_MFA"
  },
  /// order ends ///

  /// TRANSACTION STARTS ///

  {
    "id": 2018,
    "action": "VIEW_TRANSACTION_SALE_SHOW_HISTORY"
  },
  {
    "id": 2019,
    "action": "VIEW_TRANSACTION_SALE_REFUND"
  },
  {
    "id": 2020,
    "action": "VIEW_TRANSACTION_REFUND_SHOW_HISTORY"
  },
  {
    "id": 2021,
    "action": "VIEW_TRANSACTION_PRE_AUTH_SHOW_HISTORY"
  },
  {
    "id": 2022,
    "action": "VIEW_TRANSACTION_AUTHCOMPLETION_SHOW_HISTORY"
  },
  {
    "id": 2023,
    "action": "VIEW_TRANSACTION_DISPUTES_SHOW_HISTORY"
  },
  /// TRANSACTION ENDS ///
  // SETTLEMENT START //
  {
    "id": 2024,
    "action": "VIEW_SETTLEMENT_DETAILS"
  },
  {
    "id": 2025,
    "action": "VIEW_SETTLEMENT_DOWNLOAD"
  },
  /// SETTLEMENT ENDS ///
  /// reports start ///
  {
    "id": 2026,
    "action": "VIEW_REPORTS_TRANSACTION_DOWNLOAD"
  },
  {
    "id": 2027,
    "action": "VIEW_REPORTS_SETTLEMENT_DOWNLOAD"
  },
  //Key Mngmnt//
  {
    "id": 2028,
    "action": "VIEW_KEY_MANAGEMENT"
  },
  {
    "id": 2029,
    "action": "VIEW_KEY_MANAGEMENT_GENERATE_KEY"
  },
  {
    "id": 2030,
    "action": "VIEW_KEY_MANAGEMENT_DOWNLOAD_KEY"
  },
  {
    "id": 2031,
    "action": "VIEW_KEY_MANAGEMENT_REGENERATE_KEY"
  },
  // key Mngmnt ends//

  // Invoice start//
  {
    "id": 2032,
    "action": "VIEW_INVOICE"
  },
  {
    "id": 2033,
    "action": "VIEW_CREATE_INVOICE"
  },
  {
    "id": 2034,
    "action": "VIEW_CONFIGURE_INVOICE"
  },
  {
    "id": 2035,
    "action": "VIEW_INVOICE_DETAILS"
  },

  // SP ACTIONS START 
  {
    "id": 2036,
    "action": "SP_VIEW_SALE"
  },
  {
    "id": 2037,
    "action": "SP_VIEW_REFUND"
  },
  {
    "id": 2038,
    "action": "SP_VIEW_TRANSFERS"
  },
  {
    "id": 2039,
    "action": "SP_VIEW_TRANSACTION_REPORTS"
  },
  {
    "id": 2040,
    "action": "SP_VIEW_TRANSFER_REPORTS"
  },
  {
    "id":2041,
    "action":"SP_VIEW_TRANSACTION_REPORTS_DOWNLOAD"
  },
  {
    "id":2042,
    "action":"SP_VIEW_TRANSFER_REPORTS_DOWNLOAD"
  },
  {
    "id":2043,
    "action":"SP_VIEW_TRANSACTION_SALE_SHOW_HISTORY"
  },
  {
    "id":2044,
    "action":"SP_VIEW_TRANSACTION_REFUND_SHOW_HISTORY"
  },
  {
    "id":2045,
    "action":"VIEW_CONFIGURATION"
  },
  {
    "id":2046,
    "action":"VIEW_APPROVE_CONFIGURATION"
  },
  {
    "id":2047,
    "action":"SP_VIEW_INVOICE_DETAILS"
  },
  {
    "id":2048,
    "action":"VIEW_INVOICE_REPORT"
  },
  // SP config start//
  // after this we will start making actions for merchant portal and id will start from 2000
  {
    "id":2049,
    "action":"STORE_CONFIGURATION_MAKER"
  },
  {
    "id":2050,
    "action":"STORE_CONFIGURATION_CHECKER"
  },
  {
    "id":2051,
    "action":"STORE_CONFIGURATION_MASTER_VIEW"
  },
  // after this we will start making actions for merchant portal and id will start from 2000

  // {
  //   "id":2045,
  //   "action":"VIEW_CONFIGURATION"
  // },
  // {
  //   "id":2046,
  //   "action":"VIEW_APPROVE_CONFIGURATION"
  // },

  //HDFC FUNCTIONALITY
  {
    "id":2052,
    "action":"HDFC_SINGLE_INVOICE_CREATION"
  },
  {
    "id":2053,
    "action":"HDFC_INVOICE_UPLOAD"
  },
  {
    "id":2054,
    "action":"HDFC_REFUND_UPLOAD"
  },
  // VOID
  {
    "id":2055,
    "action":"VIEW_VOID"
  },
  // Void ends

  //Invoice report download
  {
    "id":2056,
    "action":"VIEW_INVOICE_REPORT_DOWNLOAD"
  },
  // Detailed settlement report

  {
    "id":2057,
    "action":"VIEW_DETAIL_SETTLEMENT_REPORT"
  },
  {
    "id":2058,
    "action":"VIEW_LEDGER_REPORT"
  },
  {
    "id":2059,
    "action":"VIEW_TOPUP_REPORT"
  },
  // tabs
  {
    "id":2060,
    "action":"VIEW_LEDGER"
  },
  {
    "id":2061,
    "action":"VIEW_TOPUP"
  }
]

// SINGLE_INVOICE_CREATION(2052,"SINGLE_INVOICE_CREATION"),
// INVOICE_UPLOAD(2053,"INVOICE_UPLOAD"),
// REFUND_UPLOAD(2054,"REFUND_UPLOAD");