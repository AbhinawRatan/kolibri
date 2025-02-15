export const PageNames = {
  CLASS_MGMT_PAGE: 'CLASS_MGMT_PAGE',
  CLASS_EDIT_MGMT_PAGE: 'CLASS_EDIT_MGMT_PAGE',
  CLASS_ENROLL_LEARNER: 'CLASS_ENROLL_LEARNER',
  CLASS_ASSIGN_COACH: 'CLASS_ASSIGN_COACH',
  USER_MGMT_PAGE: 'USER_MGMT_PAGE',
  USER_CREATE_PAGE: 'USER_CREATE_PAGE',
  USER_EDIT_PAGE: 'USER_EDIT_PAGE',
  IMPORT_CSV_PAGE: 'IMPORT_CSV_PAGE',
  DATA_EXPORT_PAGE: 'DATA_EXPORT_PAGE',
  FACILITY_CONFIG_PAGE: 'FACILITY_CONFIG_PAGE',
  ALL_FACILITIES_PAGE: 'ALL_FACILITIES_PAGE',
  MANAGE_SYNC_SCHEDULE: 'MANAGE_SYNC_SCHEDULE',
  EDIT_SYNC_SCHEDULE: 'EDIT_SYNC_SCHEDULE',
};

// modal names
export const Modals = {
  CREATE_CLASS: 'CREATE_CLASS',
  DELETE_CLASS: 'DELETE_CLASS',
  EDIT_CLASS_NAME: 'EDIT_CLASS_NAME',
  REMOVE_USER: 'REMOVE_USER',
  CONFIRM_ENROLLMENT: 'CONFIRM_ENROLLMENT',
  CREATE_USER: 'CREATE_USER',
  EDIT_USER: 'EDIT_USER',
  RESET_USER_PASSWORD: 'RESET_USER_PASSWORD',
  DELETE_USER: 'DELETE_USER',
};

export const pageNameToModuleMap = {
  [PageNames.CLASS_MGMT_PAGE]: 'classManagement',
  [PageNames.CLASS_EDIT_MGMT_PAGE]: 'classEditManagement',
  [PageNames.CLASS_ASSIGN_COACH]: 'classAssignMembers',
  [PageNames.CLASS_ENROLL_LEARNER]: 'classAssignMembers',
  [PageNames.USER_MGMT_PAGE]: 'userManagement',
  [PageNames.FACILITY_CONFIG_PAGE]: 'facilityConfig',
};

export const CSVGenerationStatuses = {
  NO_LOGS_CREATED: 'NOLOGSCREATED',
  GENERATING: 'GENERATING',
  AVAILABLE: 'AVAILABLE',
};

export const CSVImportStatuses = {
  NOT_STARTED: 'NOTSTARTED',
  VALIDATING: 'VALIDATING',
  VALIDATED: 'VALIDATED',
  SAVING: 'SAVING',
  VALIDATION_ERRORS: 'VALIDATION_ERRORS',
  ERRORS: 'ERRORS',
  FINISHED: 'FINISHED',
};

export const UsersExportStatuses = {
  NOT_STARTED: 'NOTSTARTED',
  EXPORTING: 'EXPORTING',
  FINISHED: 'FINISHED',
};
