export type PermissionName = string;

export interface PermissionTree {
    hasPermission(permission: PermissionName): boolean;
}
