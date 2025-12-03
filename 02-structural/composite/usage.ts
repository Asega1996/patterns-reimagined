// Using OOP Composite
import { PermissionLeaf, PermissionRole, PermissionTreeComposite } from "./implementations/oop";

const oopViewerRole = new PermissionRole("viewer");
oopViewerRole.add(new PermissionLeaf("users:read"));
oopViewerRole.add(new PermissionLeaf("projects:read"));

const oopEditorRole = new PermissionRole("editor");
oopEditorRole.add(new PermissionLeaf("users:read"));
oopEditorRole.add(new PermissionLeaf("projects:read"));
oopEditorRole.add(new PermissionLeaf("projects:write"));

const oopAdminRole = new PermissionRole("admin");
oopAdminRole.add(oopViewerRole);
oopAdminRole.add(oopEditorRole);
oopAdminRole.add(new PermissionLeaf("users:write"));

const oopPermissionTree: PermissionTreeComposite = new PermissionTreeComposite(oopAdminRole);

console.log("OOP Composite - has viewer permissions (viewer role)", oopPermissionTree.hasPermission("users:read"));
console.log("OOP Composite - has editor permissions (editor role)", oopPermissionTree.hasPermission("projects:write"));
console.log("OOP Composite - has admin permissions (admin role)", oopPermissionTree.hasPermission("users:write"));

// Using FP Composite
import { permission, role, createPermissionTree } from "./implementations/fp";

const viewerPermissions = role("viewer", [
    permission("users:read"),
    permission("projects:read"),
]);

const editorPermissions = role("editor", [
    permission("users:read"),
    permission("projects:read"),
    permission("projects:write"),
]);

const adminPermissions = role("admin", [
    viewerPermissions,
    editorPermissions,
    permission("users:write"),
]);

const fpPermissionTree = createPermissionTree(adminPermissions);

console.log("FP Composite - has viewer permissions (viewer role)", fpPermissionTree.hasPermission("users:read"));
console.log("FP Composite - has editor permissions (editor role)", fpPermissionTree.hasPermission("projects:write"));
console.log("FP Composite - has admin permissions (admin role)", fpPermissionTree.hasPermission("users:write"));


