export class StatusConstants {
    constructor() {
        this.Default = 1;
        this.Agree = 2;
        this.Execute = 3;
        this.Close = 3;
        this.Reject = 5;
        this.Delete = -1;
    }
}
export class SystemConstant {
}
SystemConstant.ROOT_LEVEL = 1;
SystemConstant.BUILDING_LEVEL = 2;
SystemConstant.LINE_LEVEL = 3;
export class BOM_TAB_Constant {
}
BOM_TAB_Constant.Move = 'Move';
BOM_TAB_Constant.Feeding = 'Feeding';
BOM_TAB_Constant.Immunization = 'Immunization';
BOM_TAB_Constant.Treatment = 'Treatment';
BOM_TAB_Constant.Disinfection = 'Disinfection';
BOM_TAB_Constant.VectorControl = 'VectorControl';
export class BIO_SECURITY_TAB_Constant {
}
BIO_SECURITY_TAB_Constant.Detail = 'Detail';
BIO_SECURITY_TAB_Constant.Pen = 'Pen';
BIO_SECURITY_TAB_Constant.Pig = 'Pig';
BIO_SECURITY_TAB_Constant.Record = 'Record';
export class INVENTORY_TAB_Constant {
}
INVENTORY_TAB_Constant.Detail = 'Detail';
INVENTORY_TAB_Constant.ChangeThing = 'Change Thing';
INVENTORY_TAB_Constant.ChangeMaterial = 'Change Material';
INVENTORY_TAB_Constant.Scrap = 'Scrapn';
export class ACCEPTANCE_TAB_Constant {
}
ACCEPTANCE_TAB_Constant.Detail = 'Detail';
ACCEPTANCE_TAB_Constant.Check = 'Check';
ACCEPTANCE_TAB_Constant.CheckIn = 'Check In';
ACCEPTANCE_TAB_Constant.Inspection = 'Inspection';
export class BIO_SECURITY_MASTER_PIG_TYPE_Constant {
}
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Sow = 'Sow';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Boar = 'Boar';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.NewBoar = 'New Boar';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Gilt = 'Gilt';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Suckling = 'Suckling';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Pig = 'Pig';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Finisher = 'Finisher';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Nursery = 'Nursery';
BIO_SECURITY_MASTER_PIG_TYPE_Constant.Grower = 'Grower';
export class REPAIR_TAB_Constant {
}
REPAIR_TAB_Constant.Detail = 'Detail';
REPAIR_TAB_Constant.Record = 'Record';
export class SALE_ORDER_TAB_Constant {
}
SALE_ORDER_TAB_Constant.Detail = 'Detail';
SALE_ORDER_TAB_Constant.CheckOut = 'Check Out';
export class REQUISITION_TAB_Constant {
}
REQUISITION_TAB_Constant.Detail = 'Detail';
REQUISITION_TAB_Constant.Feed = 'Feed';
REQUISITION_TAB_Constant.Material = 'Material';
REQUISITION_TAB_Constant.Medicine = 'Medicine';
REQUISITION_TAB_Constant.Thing = 'Thing';
export class PIG_DISEASE_TAB_Constant {
}
PIG_DISEASE_TAB_Constant.Culling = 'Culling';
PIG_DISEASE_TAB_Constant.Detail = 'Detail';
export class PIG_HOUSE_CLEANING_TAB_Constant {
}
PIG_HOUSE_CLEANING_TAB_Constant.Plan = 'Plan';
PIG_HOUSE_CLEANING_TAB_Constant.Detail = 'Detail';
export class PIG_FARM_VECTOR_TAB_Constant {
}
PIG_FARM_VECTOR_TAB_Constant.Plan = 'Plan';
PIG_FARM_VECTOR_TAB_Constant.Detail = 'Detail';
export class PIG_SETTING_TAB_Constant {
}
PIG_SETTING_TAB_Constant.Code = 'Code';
PIG_SETTING_TAB_Constant.Detail = 'Detail';
PIG_SETTING_TAB_Constant.Testing = 'Testing';
PIG_SETTING_TAB_Constant.Genetic = 'Genetic';
PIG_SETTING_TAB_Constant.Pedigree = 'Pedigree';
export class RECORD_TAB_Constant {
}
RECORD_TAB_Constant.Detail = 'Detail';
RECORD_TAB_Constant.Move = 'Move';
RECORD_TAB_Constant.Feeding = 'Feeding';
RECORD_TAB_Constant.Death = 'Death';
RECORD_TAB_Constant.Culling = 'Culling';
RECORD_TAB_Constant.EarTag = 'EarTag';
RECORD_TAB_Constant.Weighing = 'Weighing';
export class MessageConstants {
}
MessageConstants.SYSTEM_ERROR_MSG = 'An error occurred while connecting to the server';
MessageConstants.CONFIRM_LOCK_MSG = 'Are you sure you want to lock this account?';
MessageConstants.CONFIRM_UNLOCK_MSG = 'Are you sure you want to unlock this account?';
MessageConstants.CONFIRM_LOCK_STATUS_MSG = 'Are you sure you want to lock this record?';
MessageConstants.CONFIRM_UNLOCK_STATUS_MSG = 'Are you sure you want to unlock this record?';
MessageConstants.CONFIRM_STATUS_TITLE_MSG = 'Lock/Unlock record?';
MessageConstants.CONFIRM_FEEDBACK_STATUS_MSG = 'Are you sure you want to reply to this message??';
MessageConstants.CONFIRM_UNFEEDBACK_STATUS_MSG = 'Are you sure you want to change the status of this message??';
MessageConstants.CONFIRM_FEEDBACK_STATUS_TITLE_MSG = 'Reply/Unresponsive to mail?';
MessageConstants.CONFIRM_DELETE_MSG = 'Are you sure you want to delete this record?';
MessageConstants.CONFIRM_DELETE_RANGE_MSG = 'Are you sure you want to delete these records?';
MessageConstants.CONFIRM_LOCK_TITLE_MSG = 'Lock/Unlock account?';
MessageConstants.CONFIRM_TITLE_MSG = 'Delete record?';
MessageConstants.CONFIRM_DELETE_RANGE_TITLE_MSG = 'Delete multiple records?';
MessageConstants.CONFIRM_PAY_MSG = 'Are you sure you want to pay this?';
MessageConstants.CONFIRM_SET_DEFAULT_MSG = 'Are you sure you want to default to this record?';
MessageConstants.CONFIRM_SET_IS_HOME_MSG = 'Are you sure you want to display this record on the homepage?';
MessageConstants.CONFIRM_SET_NOT_IS_HOME_MSG = 'Are you sure you want to undisplay this record on the homepage?';
MessageConstants.CONFIRM_PUBLISH_POST = 'Are you sure you want to publish this article??';
MessageConstants.LOGIN_AGAIN_MSG = 'Your login session is over. Please login again.';
MessageConstants.CREATED_OK_MSG = 'Create Successfully';
MessageConstants.UPDATED_OK_MSG = 'Update successfully';
MessageConstants.DELETED_OK_MSG = 'Delete successfully';
MessageConstants.LOCKED_OK_MSG = 'Locked successfully';
MessageConstants.UNLOCKED_OK_MSG = 'Unlock successfully';
MessageConstants.SET_DEFAULT_OK_MSG = 'Default set success';
MessageConstants.SET_IS_HOME_OK_MSG = 'Set homepage display successfully';
MessageConstants.SET_NOT_IS_HOME_OK_MSG = 'Successfully undisplaying homepage';
MessageConstants.FORBIDDEN = 'You are blocked from accessing';
MessageConstants.CANNOT_EDIT_MULTIPLE = 'You cannot edit more than 1 record.';
MessageConstants.NOT_CHOOSE_ANY_RECORD = 'You must select at least one record.';
MessageConstants.UPLOAD_OK_MSG = 'Upload successful';
MessageConstants.REQUIRED_ERROR_MSG = 'Data cannot be empty';
MessageConstants.RELOAD_MENU = 'Reload menu';
MessageConstants.SELECT_RECORD = 'Please select at least 1 record to delete!';
MessageConstants.SEND_MAIL_OK_MSG = 'Email was sent. Please check your email';
MessageConstants.SEND_MAIL_FAILED_MSG = 'Failure sending email error!';
MessageConstants.CREATE_TITLE = 'Create record';
MessageConstants.CREATE_MESSAGE = 'Are you sure you want to create this record?';
MessageConstants.UPDATE_TITLE = 'Update record';
MessageConstants.UPDATE_MESSAGE = 'Are you sure you want to update this record?';
MessageConstants.DELETE_TITLE = 'Delete record';
MessageConstants.DELETE_MESSAGE = 'Are you sure you want to delete this record?';
MessageConstants.CANCEL_MESSAGE = 'Your data is safe!';
MessageConstants.SERVER_ERROR = 'Server Error!';
MessageConstants.EXIST_MESSAGE = 'The key already exist!';
MessageConstants.EXIST_USERNAME_MESSAGE = 'The username already exist!';
MessageConstants.CHOOSE_FARM_MESSAGE = 'Please choose a farm!';
MessageConstants.SELECT_ORDER_MESSAGE = 'Please select a order!';
MessageConstants.VALID_CHANGE_PASSWORD_MSG = "The new password and confirm password are empty!";
MessageConstants.CONFIRM_CHANGE_PASSWORD_MSG = "Password and Confirm Password Validation";
MessageConstants.YES_MSG = "Yes";
MessageConstants.NO_MSG = "No";
export class ActionConstants {
}
ActionConstants.ADD = 'add';
ActionConstants.EDIT = 'edit';
ActionConstants.VIEW = 'getall';
ActionConstants.DELETE_RANGE = 'deleterange';
ActionConstants.DELETE = 'delete';
ActionConstants.EDIT_TITLE = 'Edit';
ActionConstants.ADD_TITLE = 'Add new';
ActionConstants.Add = 'add';
ActionConstants.Edit = 'edit';
export class ImagePathConstants {
}
ImagePathConstants.NO_IMAGE = '/assets/images/default-avatar-male.png';
ImagePathConstants.NO_IMAGE_COMPONENT = '/assets/images/pages/content-img-4.jpg';
ImagePathConstants.NO_IMAGE_ACTION_COMPONENT = '/assets/images/no-image.png';
export class SystemConfigConst {
}
SystemConfigConst.Order_Amount = "ORDER_AMOUNT";
SystemConfigConst.Order = "Order";
SystemConfigConst.Pig_NO = "ID_NO";
SystemConfigConst.Pig = "Pig";
SystemConfigConst.GrowDays = "GrowDays";
SystemConfigConst.Finisher = "Finisher";
SystemConfigConst.Grower = "Grower";
SystemConfigConst.Nursry = "Nursery";
SystemConfigConst.Sucking = "Suckling";
SystemConfigConst.Sale = "Sale";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3lzdGVtLmNvbnN0YW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcGlnZmFybS1jb3JlL3NyYy9fY29yZS9fY29uc3RhbnRzL3N5c3RlbS5jb25zdGFudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLE9BQU8sZUFBZTtJQUE1QjtRQUNFLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFDWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2QsQ0FBQztDQUFBO0FBQ0QsTUFBTSxPQUFPLGNBQWM7O0FBQ1QseUJBQVUsR0FBRyxDQUFDLENBQUM7QUFDZiw2QkFBYyxHQUFHLENBQUMsQ0FBQztBQUNuQix5QkFBVSxHQUFHLENBQUMsQ0FBQztBQUVqQyxNQUFNLE9BQU8sZ0JBQWdCOztBQUNiLHFCQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2Qsd0JBQU8sR0FBRyxTQUFTLENBQUM7QUFDcEIsNkJBQVksR0FBRyxjQUFjLENBQUM7QUFDOUIsMEJBQVMsR0FBRyxXQUFXLENBQUM7QUFDeEIsNkJBQVksR0FBRyxjQUFjLENBQUM7QUFDOUIsOEJBQWEsR0FBRSxlQUFlLENBQUM7QUFFL0MsTUFBTSxPQUFPLHlCQUF5Qjs7QUFDdEIsZ0NBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsNkJBQUcsR0FBRyxLQUFLLENBQUM7QUFDWiw2QkFBRyxHQUFHLEtBQUssQ0FBQztBQUNaLGdDQUFNLEdBQUcsUUFBUSxDQUFDO0FBR2xDLE1BQU0sT0FBTyxzQkFBc0I7O0FBQ25CLDZCQUFNLEdBQUcsUUFBUSxDQUFDO0FBQ2xCLGtDQUFXLEdBQUcsY0FBYyxDQUFDO0FBQzdCLHFDQUFjLEdBQUcsaUJBQWlCLENBQUM7QUFDbkMsNEJBQUss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IFN0YXR1c0NvbnN0YW50cyB7XHJcbiAgRGVmYXVsdCA9IDE7XHJcbiAgQWdyZWUgPSAyO1xyXG4gIEV4ZWN1dGUgPSAzO1xyXG4gIENsb3NlID0gMztcclxuICBSZWplY3QgPSA1O1xyXG4gIERlbGV0ZSA9IC0xO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBTeXN0ZW1Db25zdGFudCB7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJPT1RfTEVWRUwgPSAxO1xyXG4gICAgcHVibGljIHN0YXRpYyBCVUlMRElOR19MRVZFTCA9IDI7XHJcbiAgICBwdWJsaWMgc3RhdGljIExJTkVfTEVWRUwgPSAzO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBCT01fVEFCX0NvbnN0YW50IHtcclxuICBwdWJsaWMgc3RhdGljIE1vdmUgPSAnTW92ZSc7XHJcbiAgcHVibGljIHN0YXRpYyBGZWVkaW5nID0gJ0ZlZWRpbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgSW1tdW5pemF0aW9uID0gJ0ltbXVuaXphdGlvbic7XHJcbiAgcHVibGljIHN0YXRpYyBUcmVhdG1lbnQgPSAnVHJlYXRtZW50JztcclxuICBwdWJsaWMgc3RhdGljIERpc2luZmVjdGlvbiA9ICdEaXNpbmZlY3Rpb24nO1xyXG4gIHB1YmxpYyBzdGF0aWMgVmVjdG9yQ29udHJvbCA9J1ZlY3RvckNvbnRyb2wnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBCSU9fU0VDVVJJVFlfVEFCX0NvbnN0YW50IHtcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGVuID0gJ1Blbic7XHJcbiAgcHVibGljIHN0YXRpYyBQaWcgPSAnUGlnJztcclxuICBwdWJsaWMgc3RhdGljIFJlY29yZCA9ICdSZWNvcmQnO1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgSU5WRU5UT1JZX1RBQl9Db25zdGFudCB7XHJcbiAgcHVibGljIHN0YXRpYyBEZXRhaWwgPSAnRGV0YWlsJztcclxuICBwdWJsaWMgc3RhdGljIENoYW5nZVRoaW5nID0gJ0NoYW5nZSBUaGluZyc7XHJcbiAgcHVibGljIHN0YXRpYyBDaGFuZ2VNYXRlcmlhbCA9ICdDaGFuZ2UgTWF0ZXJpYWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU2NyYXAgPSAnU2NyYXBuJztcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIEFDQ0VQVEFOQ0VfVEFCX0NvbnN0YW50IHtcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ2hlY2sgPSAnQ2hlY2snO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ2hlY2tJbiA9ICdDaGVjayBJbic7XHJcbiAgcHVibGljIHN0YXRpYyBJbnNwZWN0aW9uID0gJ0luc3BlY3Rpb24nO1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQklPX1NFQ1VSSVRZX01BU1RFUl9QSUdfVFlQRV9Db25zdGFudCB7XHJcbiAgcHVibGljIHN0YXRpYyBTb3cgPSAnU293JztcclxuICBwdWJsaWMgc3RhdGljIEJvYXIgPSAnQm9hcic7XHJcbiAgcHVibGljIHN0YXRpYyBOZXdCb2FyID0gJ05ldyBCb2FyJztcclxuICBwdWJsaWMgc3RhdGljIEdpbHQgPSAnR2lsdCc7XHJcbiAgcHVibGljIHN0YXRpYyBTdWNrbGluZyA9ICdTdWNrbGluZyc7XHJcbiAgcHVibGljIHN0YXRpYyBQaWcgPSAnUGlnJztcclxuICBwdWJsaWMgc3RhdGljIEZpbmlzaGVyID0gJ0ZpbmlzaGVyJztcclxuICBwdWJsaWMgc3RhdGljIE51cnNlcnkgPSAnTnVyc2VyeSc7XHJcbiAgcHVibGljIHN0YXRpYyBHcm93ZXIgPSAnR3Jvd2VyJztcclxuXHJcbn1cclxuZXhwb3J0IGNsYXNzIFJFUEFJUl9UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgRGV0YWlsID0gJ0RldGFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyBSZWNvcmQgPSAnUmVjb3JkJztcclxufVxyXG5leHBvcnQgY2xhc3MgU0FMRV9PUkRFUl9UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgRGV0YWlsID0gJ0RldGFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyBDaGVja091dCA9ICdDaGVjayBPdXQnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBSRVFVSVNJVElPTl9UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgRGV0YWlsID0gJ0RldGFpbCc7XHJcbiAgcHVibGljIHN0YXRpYyBGZWVkID0gJ0ZlZWQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTWF0ZXJpYWwgPSAnTWF0ZXJpYWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTWVkaWNpbmUgPSAnTWVkaWNpbmUnO1xyXG4gIHB1YmxpYyBzdGF0aWMgVGhpbmcgPSAnVGhpbmcnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQSUdfRElTRUFTRV9UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgQ3VsbGluZyA9ICdDdWxsaW5nJztcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUElHX0hPVVNFX0NMRUFOSU5HX1RBQl9Db25zdGFudCB7XHJcbiAgcHVibGljIHN0YXRpYyBQbGFuID0gJ1BsYW4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgRGV0YWlsID0gJ0RldGFpbCc7XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBJR19GQVJNX1ZFQ1RPUl9UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgUGxhbiA9ICdQbGFuJztcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG59XHJcbmV4cG9ydCBjbGFzcyBQSUdfU0VUVElOR19UQUJfQ29uc3RhbnQge1xyXG4gIHB1YmxpYyBzdGF0aWMgQ29kZSA9ICdDb2RlJztcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgVGVzdGluZyA9ICdUZXN0aW5nJztcclxuICBwdWJsaWMgc3RhdGljIEdlbmV0aWMgPSAnR2VuZXRpYyc7XHJcbiAgcHVibGljIHN0YXRpYyBQZWRpZ3JlZSA9ICdQZWRpZ3JlZSc7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBSRUNPUkRfVEFCX0NvbnN0YW50IHtcclxuICBwdWJsaWMgc3RhdGljIERldGFpbCA9ICdEZXRhaWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTW92ZSA9ICdNb3ZlJztcclxuICBwdWJsaWMgc3RhdGljIEZlZWRpbmcgPSAnRmVlZGluZyc7XHJcbiAgcHVibGljIHN0YXRpYyBEZWF0aCA9ICdEZWF0aCc7XHJcbiAgcHVibGljIHN0YXRpYyBDdWxsaW5nID0gJ0N1bGxpbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRWFyVGFnID0gJ0VhclRhZyc7XHJcbiAgcHVibGljIHN0YXRpYyBXZWlnaGluZyA9J1dlaWdoaW5nJztcclxufVxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUNvbnN0YW50cyB7XHJcbiAgcHVibGljIHN0YXRpYyBTWVNURU1fRVJST1JfTVNHID0gJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGNvbm5lY3RpbmcgdG8gdGhlIHNlcnZlcic7XHJcbiAgcHVibGljIHN0YXRpYyBDT05GSVJNX0xPQ0tfTVNHID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2NrIHRoaXMgYWNjb3VudD8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9VTkxPQ0tfTVNHID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1bmxvY2sgdGhpcyBhY2NvdW50Pyc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9MT0NLX1NUQVRVU19NU0cgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvY2sgdGhpcyByZWNvcmQ/JztcclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fVU5MT0NLX1NUQVRVU19NU0cgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHVubG9jayB0aGlzIHJlY29yZD8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9TVEFUVVNfVElUTEVfTVNHID0gJ0xvY2svVW5sb2NrIHJlY29yZD8nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fRkVFREJBQ0tfU1RBVFVTX01TRyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVwbHkgdG8gdGhpcyBtZXNzYWdlPz8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9VTkZFRURCQUNLX1NUQVRVU19NU0cgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGNoYW5nZSB0aGUgc3RhdHVzIG9mIHRoaXMgbWVzc2FnZT8/JztcclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fRkVFREJBQ0tfU1RBVFVTX1RJVExFX01TRyA9ICdSZXBseS9VbnJlc3BvbnNpdmUgdG8gbWFpbD8nO1xyXG5cclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fREVMRVRFX01TRyA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyc7XHJcbiAgcHVibGljIHN0YXRpYyBDT05GSVJNX0RFTEVURV9SQU5HRV9NU0cgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSByZWNvcmRzPyc7XHJcbiAgcHVibGljIHN0YXRpYyBDT05GSVJNX0xPQ0tfVElUTEVfTVNHID0gJ0xvY2svVW5sb2NrIGFjY291bnQ/JztcclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fVElUTEVfTVNHID0gJ0RlbGV0ZSByZWNvcmQ/JztcclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fREVMRVRFX1JBTkdFX1RJVExFX01TRyA9ICdEZWxldGUgbXVsdGlwbGUgcmVjb3Jkcz8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9QQVlfTVNHID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwYXkgdGhpcz8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9TRVRfREVGQVVMVF9NU0cgPSAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlZmF1bHQgdG8gdGhpcyByZWNvcmQ/JztcclxuICBwdWJsaWMgc3RhdGljIENPTkZJUk1fU0VUX0lTX0hPTUVfTVNHID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkaXNwbGF5IHRoaXMgcmVjb3JkIG9uIHRoZSBob21lcGFnZT8nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ09ORklSTV9TRVRfTk9UX0lTX0hPTUVfTVNHID0gJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byB1bmRpc3BsYXkgdGhpcyByZWNvcmQgb24gdGhlIGhvbWVwYWdlPyc7XHJcbiAgcHVibGljIHN0YXRpYyBDT05GSVJNX1BVQkxJU0hfUE9TVCA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcHVibGlzaCB0aGlzIGFydGljbGU/Pyc7XHJcbiAgcHVibGljIHN0YXRpYyBMT0dJTl9BR0FJTl9NU0cgPSAnWW91ciBsb2dpbiBzZXNzaW9uIGlzIG92ZXIuIFBsZWFzZSBsb2dpbiBhZ2Fpbi4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ1JFQVRFRF9PS19NU0cgPSAnQ3JlYXRlIFN1Y2Nlc3NmdWxseSc7XHJcbiAgcHVibGljIHN0YXRpYyBVUERBVEVEX09LX01TRyA9ICdVcGRhdGUgc3VjY2Vzc2Z1bGx5JztcclxuICBwdWJsaWMgc3RhdGljIERFTEVURURfT0tfTVNHID0gJ0RlbGV0ZSBzdWNjZXNzZnVsbHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgTE9DS0VEX09LX01TRyA9ICdMb2NrZWQgc3VjY2Vzc2Z1bGx5JztcclxuICBwdWJsaWMgc3RhdGljIFVOTE9DS0VEX09LX01TRyA9ICdVbmxvY2sgc3VjY2Vzc2Z1bGx5JztcclxuICBwdWJsaWMgc3RhdGljIFNFVF9ERUZBVUxUX09LX01TRyA9ICdEZWZhdWx0IHNldCBzdWNjZXNzJztcclxuICBwdWJsaWMgc3RhdGljIFNFVF9JU19IT01FX09LX01TRyA9ICdTZXQgaG9tZXBhZ2UgZGlzcGxheSBzdWNjZXNzZnVsbHknO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0VUX05PVF9JU19IT01FX09LX01TRyA9ICdTdWNjZXNzZnVsbHkgdW5kaXNwbGF5aW5nIGhvbWVwYWdlJztcclxuICBwdWJsaWMgc3RhdGljIEZPUkJJRERFTiA9ICdZb3UgYXJlIGJsb2NrZWQgZnJvbSBhY2Nlc3NpbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgQ0FOTk9UX0VESVRfTVVMVElQTEUgPSAnWW91IGNhbm5vdCBlZGl0IG1vcmUgdGhhbiAxIHJlY29yZC4nO1xyXG4gIHB1YmxpYyBzdGF0aWMgTk9UX0NIT09TRV9BTllfUkVDT1JEID0gJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcmVjb3JkLic7XHJcbiAgcHVibGljIHN0YXRpYyBVUExPQURfT0tfTVNHID0gJ1VwbG9hZCBzdWNjZXNzZnVsJztcclxuICBwdWJsaWMgc3RhdGljIFJFUVVJUkVEX0VSUk9SX01TRyA9ICdEYXRhIGNhbm5vdCBiZSBlbXB0eSc7XHJcbiAgcHVibGljIHN0YXRpYyBSRUxPQURfTUVOVSA9ICdSZWxvYWQgbWVudSc7XHJcbiAgcHVibGljIHN0YXRpYyBTRUxFQ1RfUkVDT1JEID0gJ1BsZWFzZSBzZWxlY3QgYXQgbGVhc3QgMSByZWNvcmQgdG8gZGVsZXRlISc7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgU0VORF9NQUlMX09LX01TRyA9ICdFbWFpbCB3YXMgc2VudC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0VORF9NQUlMX0ZBSUxFRF9NU0cgPSAnRmFpbHVyZSBzZW5kaW5nIGVtYWlsIGVycm9yISc7XHJcbiAgcHVibGljIHN0YXRpYyBDUkVBVEVfVElUTEUgPSAnQ3JlYXRlIHJlY29yZCc7XHJcbiAgcHVibGljIHN0YXRpYyBDUkVBVEVfTUVTU0FHRSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gY3JlYXRlIHRoaXMgcmVjb3JkPyc7XHJcbiAgcHVibGljIHN0YXRpYyBVUERBVEVfVElUTEUgPSAnVXBkYXRlIHJlY29yZCc7XHJcbiAgcHVibGljIHN0YXRpYyBVUERBVEVfTUVTU0FHRSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gdXBkYXRlIHRoaXMgcmVjb3JkPyc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfVElUTEUgPSAnRGVsZXRlIHJlY29yZCc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEVfTUVTU0FHRSA9ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyc7XHJcbiAgcHVibGljIHN0YXRpYyBDQU5DRUxfTUVTU0FHRSA9ICdZb3VyIGRhdGEgaXMgc2FmZSEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgU0VSVkVSX0VSUk9SID0gJ1NlcnZlciBFcnJvciEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRVhJU1RfTUVTU0FHRSA9ICdUaGUga2V5IGFscmVhZHkgZXhpc3QhJztcclxuICBwdWJsaWMgc3RhdGljIEVYSVNUX1VTRVJOQU1FX01FU1NBR0UgPSAnVGhlIHVzZXJuYW1lIGFscmVhZHkgZXhpc3QhJztcclxuICBwdWJsaWMgc3RhdGljIENIT09TRV9GQVJNX01FU1NBR0UgPSAnUGxlYXNlIGNob29zZSBhIGZhcm0hJztcclxuICBwdWJsaWMgc3RhdGljIFNFTEVDVF9PUkRFUl9NRVNTQUdFID0gJ1BsZWFzZSBzZWxlY3QgYSBvcmRlciEnO1xyXG4gIHB1YmxpYyBzdGF0aWMgVkFMSURfQ0hBTkdFX1BBU1NXT1JEX01TRyA9IFwiVGhlIG5ldyBwYXNzd29yZCBhbmQgY29uZmlybSBwYXNzd29yZCBhcmUgZW1wdHkhXCI7XHJcbiAgcHVibGljIHN0YXRpYyBDT05GSVJNX0NIQU5HRV9QQVNTV09SRF9NU0cgPSBcIlBhc3N3b3JkIGFuZCBDb25maXJtIFBhc3N3b3JkIFZhbGlkYXRpb25cIjtcclxuICBwdWJsaWMgc3RhdGljIFlFU19NU0cgPSBcIlllc1wiO1xyXG4gIHB1YmxpYyBzdGF0aWMgTk9fTVNHID0gXCJOb1wiO1xyXG5cclxufVxyXG5leHBvcnQgY2xhc3MgQWN0aW9uQ29uc3RhbnRzIHtcclxuICBwdWJsaWMgc3RhdGljIEFERCA9ICdhZGQnO1xyXG4gIHB1YmxpYyBzdGF0aWMgRURJVCA9ICdlZGl0JztcclxuICBwdWJsaWMgc3RhdGljIFZJRVcgPSAnZ2V0YWxsJztcclxuICBwdWJsaWMgc3RhdGljIERFTEVURV9SQU5HRSA9ICdkZWxldGVyYW5nZSc7XHJcbiAgcHVibGljIHN0YXRpYyBERUxFVEUgPSAnZGVsZXRlJztcclxuICBwdWJsaWMgc3RhdGljIEVESVRfVElUTEUgPSAnRWRpdCc7XHJcbiAgcHVibGljIHN0YXRpYyBBRERfVElUTEUgPSAnQWRkIG5ldyc7XHJcbiAgcHVibGljIHN0YXRpYyBBZGQgPSAnYWRkJztcclxuICBwdWJsaWMgc3RhdGljIEVkaXQgPSAnZWRpdCc7XHJcblxyXG59XHJcbmV4cG9ydCBjbGFzcyBJbWFnZVBhdGhDb25zdGFudHMge1xyXG4gIHB1YmxpYyBzdGF0aWMgTk9fSU1BR0UgPSAnL2Fzc2V0cy9pbWFnZXMvZGVmYXVsdC1hdmF0YXItbWFsZS5wbmcnO1xyXG4gIHB1YmxpYyBzdGF0aWMgTk9fSU1BR0VfQ09NUE9ORU5UID0gJy9hc3NldHMvaW1hZ2VzL3BhZ2VzL2NvbnRlbnQtaW1nLTQuanBnJztcclxuICBwdWJsaWMgc3RhdGljIE5PX0lNQUdFX0FDVElPTl9DT01QT05FTlQgPSAnL2Fzc2V0cy9pbWFnZXMvbm8taW1hZ2UucG5nJztcclxufVxyXG5leHBvcnQgY2xhc3MgU3lzdGVtQ29uZmlnQ29uc3Qge1xyXG4gIHB1YmxpYyBzdGF0aWMgT3JkZXJfQW1vdW50ID0gXCJPUkRFUl9BTU9VTlRcIjtcclxuICBwdWJsaWMgc3RhdGljIE9yZGVyID0gXCJPcmRlclwiO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGlnX05PID0gXCJJRF9OT1wiO1xyXG4gIHB1YmxpYyBzdGF0aWMgUGlnID0gXCJQaWdcIjtcclxuICBwdWJsaWMgc3RhdGljIEdyb3dEYXlzID0gXCJHcm93RGF5c1wiO1xyXG4gIHB1YmxpYyBzdGF0aWMgRmluaXNoZXIgPSBcIkZpbmlzaGVyXCI7XHJcbiAgcHVibGljIHN0YXRpYyBHcm93ZXIgPSBcIkdyb3dlclwiO1xyXG4gIHB1YmxpYyBzdGF0aWMgTnVyc3J5ID0gXCJOdXJzZXJ5XCI7XHJcbiAgcHVibGljIHN0YXRpYyBTdWNraW5nID0gXCJTdWNrbGluZ1wiO1xyXG4gIHB1YmxpYyBzdGF0aWMgU2FsZSA9IFwiU2FsZVwiO1xyXG59Il19