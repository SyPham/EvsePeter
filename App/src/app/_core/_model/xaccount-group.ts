export interface XAccountGroup {
  id: number;
  farmGuid: string;
  groupNo: string;
  groupName: string;
  cancelFlag: string;
  createDate: string | null;
  createBy: number | null;
  updateDate: string | null;
  updateBy: number | null;
  status: number | null;
  guid: string;
  permissions: {
    addPermissions: any;
    removePermissions: any;
    permissions: any;
    guid: any;
  };
  remarks: any;
  canSeeAllFarm: boolean | null
 
}
