// Using OOP Filter Manager
import { FilterManager } from "./implementations/oop";

const manager = new FilterManager();
const categoryFilter = manager.createApplyFilterCommand({
    type: 'category',
    value: 'Electronics'
});
manager.executeCommand(categoryFilter);

const brandFilter = manager.createApplyFilterCommand({
    type: 'brand',
    value: 'Samsung'
});
manager.executeCommand(brandFilter);

const newCategoryFilter = manager.createApplyFilterCommand({
    type: 'category',
    value: 'Computers'
});
manager.executeCommand(newCategoryFilter);


console.log("After applying filters", manager.getFilters());


manager.undo();

console.log("After undoing", manager.getFilters());


// Using FP Filter Manager
import {
    createFilterManager,
    createApplyFilterCommand,
    executeCommand,
    undoCommand,
} from "./implementations/fp";

let fpManager = createFilterManager();
const categoryFilter_fp = createApplyFilterCommand({
    type: 'category',
    value: 'Electronics'
});
const exec1 = executeCommand(fpManager, categoryFilter_fp);
fpManager = exec1.manager;

const brandFilter_fp = createApplyFilterCommand({
    type: 'brand',
    value: 'Samsung'
});
const exec2 = executeCommand(fpManager, brandFilter_fp);
fpManager = exec2.manager;


const newCategoryFilter_fp = createApplyFilterCommand({
    type: 'category',
    value: 'Computers'
});
const exec3 = executeCommand(fpManager, newCategoryFilter_fp);
fpManager = exec3.manager;

console.log("After applying filters", fpManager.state);

undoCommand(fpManager);

console.log("After undoing", fpManager.state);