import { PermissionName, PermissionTree } from "../types";

export class PermissionLeaf implements PermissionTree {
    constructor(private readonly name: PermissionName) { }

    hasPermission(permission: PermissionName): boolean {
        return this.name === permission;
    }
}

export class PermissionRole implements PermissionTree {
    private readonly children: PermissionTree[] = [];

    constructor(public readonly name: string) { }

    add(child: PermissionTree): void {
        this.children.push(child);
    }

    hasPermission(permission: PermissionName): boolean {
        return this.children.some((child) => child.hasPermission(permission));
    }
}

export class PermissionTreeComposite implements PermissionTree {
    constructor(private readonly root: PermissionTree) { }

    hasPermission(permission: PermissionName): boolean {
        return this.root.hasPermission(permission);
    }
}


