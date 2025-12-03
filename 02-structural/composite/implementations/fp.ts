import { PermissionName, PermissionTree } from "../types";

type PermissionLeaf = {
    type: "permission";
    name: PermissionName;
};

type PermissionComposite = {
    type: "role";
    name: string;
    children: PermissionNode[];
};

type PermissionNode = PermissionLeaf | PermissionComposite;

export const permission = (name: PermissionName): PermissionLeaf => ({
    type: "permission",
    name,
});

export const role = (name: string, children: PermissionNode[]): PermissionComposite => ({
    type: "role",
    name,
    children,
});

export const createPermissionTree = (root: PermissionNode): PermissionTree => ({
    hasPermission(permission: PermissionName): boolean {
        const visit = (node: PermissionNode): boolean => {
            if (node.type === "permission") {
                return node.name === permission;
            }

            return node.children.some(visit);
        };

        return visit(root);
    },
});


