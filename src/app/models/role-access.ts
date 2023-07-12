export enum RoleAccess {
  // USER MANAGEMENT STARTS
  navDashboard = 'MAIN_DASHBOARD',
  navUsers = 'NAVBAR_USER',
  navRoles = 'NAVBAR_ROLES',
  viewUsers = 'READ_USER',
  editUser = 'UPDATE_USER',
  addUser = 'ADD_USER',
  viewUserDetails = 'USER_DETAIL',
  viewGenerateMFA = 'VIEW_GENERATE_MFA',
  viewDownloadMFA = 'VIEW_DOWNLOAD_MFA',
  viewRoleDetails = 'ROLE_DETAIL',
  deleteUser = 'DELETE_USER',
  viewRoles = 'READ_ROLE',
  addRoles = 'ADD_ROLE',
  editRoles = 'UPDATE_ROLE',
  deleteRoles = 'DELETE_ROLE',
  // USER MANAGEMENT ENDS
  


  //  TRANSACTION MODULE ACTIONS STARTS // 
  viewSale = 'VIEW_SALE',
  viewRefund = 'VIEW_REFUND',
  viewPreAuth = 'VIEW_PRE_AUTH',
  viewAuthCompletion = 'VIEW_AUTH_COMPLETION',
  viewDisputes = 'VIEW_DISPUTES',
  viewTransactionSaleShowHistory='VIEW_TRANSACTION_SALE_SHOW_HISTORY',
  viewTransactionSaleRefund='VIEW_TRANSACTION_SALE_REFUND',
  viewTransactionRefundShowHistory='VIEW_TRANSACTION_REFUND_SHOW_HISTORY',
  viewTransactionPreAuthShowHistory='VIEW_TRANSACTION_PRE_AUTH_SHOW_HISTORY',
  viewTransactionAuthCompletionShowHistory='VIEW_TRANSACTION_AUTHCOMPLETION_SHOW_HISTORY',
  viewTransactionDisputesShowHistory='VIEW_TRANSACTION_DISPUTES_SHOW_HISTORY',
  //  TRANSACTION MODULE ACTIONS ENDS // 

  // Settlement Module starts //
  viewSettlement = 'VIEW_SETTLEMENT',
  viewSettlementDetails='VIEW_SETTLEMENT_DETAILS',
  viewSettlementDownload='VIEW_SETTLEMENT_DOWNLOAD',
  // Settlement Module ends //

  //  REPORTS MODULE ACTIONS STARTS //
  viewReportsTransactions = 'VIEW_REPORTS_TRANSACTIONS',
  viewReportsSettlement = 'VIEW_REPORTS_SETTLEMENT',
  viewReportsTransactionDownload='VIEW_REPORTS_TRANSACTION_DOWNLOAD',
  viewReportsSettlementDownload='VIEW_REPORTS_SETTLEMENT_DOWNLOAD',
  //  REPORTS MODULE ACTIONS ENDS //

  //  BATCH MANAGEMENT MODULE ACTIONS STARTS //
  viewBatchUpload = 'VIEW_BATCH_UPLOAD',
  viewBatchStatus = 'VIEW_BATCH_STATUS',
  //  BATCH MANAGEMENT MODULE ACTIONS ENDS //

  //  ORDER MANAGEMENT MODULE ACTIONS STARTS //
  viewCreateOrder = 'VIEW_CREATE_ORDER',
  viewConfigureOrder = 'VIEW_CONFIGURE_ORDER',
  viewOrderSearch = 'VIEW_ORDER_SEARCH',
  viewOrderConfiguration = 'VIEW_ORDER_CONFIGURATION',
  viewOrderUplaod = 'VIEW_ORDER_UPLOAD',
  //  ORDER MANAGEMENT MODULE ACTIONS ENDS //

  // KEY MANAGEMENT START //
  viewKeyManagement='VIEW_KEY_MANAGEMENT',
  viewKeyManagementGenerateKey='VIEW_KEY_MANAGEMENT_GENERATE_KEY',
  viewKeyManagementDownloadKey='VIEW_KEY_MANAGEMENT_DOWNLOAD_KEY',
  viewKeyManagementReGenerateKey='VIEW_KEY_MANAGEMENT_REGENERATE_KEY',
  // KEY MANAGEMENT ENDS //
 
  // INVOICE START //
  viewInvoice='VIEW_INVOICE',
  viewCreateInvoice='VIEW_CREATE_INVOICE',
  viewConfigureInvoice='VIEW_CONFIGURE_INVOICE',
  viewInvoiceDetails='VIEW_INVOICE_DETAILS',
  // sp actions
  viewSpSale='SP_VIEW_SALE',
  viewSpRefund='SP_VIEW_REFUND',
  viewSpTransfers='SP_VIEW_TRANSFERS',
  viewSpTransactionReports='SP_VIEW_TRANSACTION_REPORTS',
  viewSpTransferReports='SP_VIEW_TRANSFER_REPORTS',
  viewSpTransactionReportsDownload='SP_VIEW_TRANSACTION_REPORTS_DOWNLOAD',
  viewSpTransferReportsDownload='SP_VIEW_TRANSFER_REPORTS_DOWNLOAD',
  viewSpTransactionSaleShowHistory='SP_VIEW_TRANSACTION_SALE_SHOW_HISTORY',
  viewSpTransactionRefundShowHistory='SP_VIEW_TRANSACTION_REFUND_SHOW_HISTORY',
  viewSpInvoiceDetails='SP_VIEW_INVOICE_DETAILS',
  viewInvoiceReport="VIEW_INVOICE_REPORT",
  // sp config actions 
  viewConfiguration='VIEW_CONFIGURATION',
  viewApproveConfiguration='VIEW_APPROVE_CONFIGURATION',
  viewSingleInvoice='VIEW SINGLE INVOICE',
  //HDFC Functionality
  singleInvoiceCreation='HDFC_SINGLE_INVOICE_CREATION',
  invoiceUpload='HDFC_INVOICE_UPLOAD',
  refundUpload='HDFC_REFUND_UPLOAD',
  // VOID
  viewVoid='VIEW_VOID',
  storeConfigurationApprovalMaker='STORE_CONFIGURATION_MAKER',
  storeConfigurationApprovalChecker='STORE_CONFIGURATION_CHECKER',
  storeConfigurationMasterView = 'STORE_CONFIGURATION_MASTER_VIEW',
  //inv report
  viewInvoiceReportDownload='VIEW_INVOICE_REPORT_DOWNLOAD',
  //inv report ends

  viewDetailSettlementReport= 'VIEW_DETAIL_SETTLEMENT_REPORT',
  viewLedgerReport='VIEW_LEDGER_REPORT',
  viewTopUpReport='VIEW_TOPUP_REPORT',
  // 
  viewLedger='VIEW_LEDGER',
  viewTopup='VIEW_TOPUP'
}
