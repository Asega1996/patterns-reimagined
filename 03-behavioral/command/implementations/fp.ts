import { SearchFilters, Filter, CommandResult } from "../types";

export type FilterState = SearchFilters;

export const createFilterState = (initialFilters: SearchFilters = {}): FilterState => {
    return { ...initialFilters };
};

export const applyFilter = (
    state: FilterState,
    filter: Filter
): { state: FilterState; previousValue: string | undefined } => {
    const newState = { ...state };
    const previousValue = filter.type === 'category' ? state.category : state.brand;

    if (filter.type === 'category') {
        newState.category = filter.value;
    } else {
        newState.brand = filter.value;
    }

    return { state: newState, previousValue };
};

export type CommandFn = {
    execute: (state: FilterState) => { state: FilterState; result: CommandResult };
    undo: (state: FilterState, previousState: FilterState) => { state: FilterState; result: CommandResult };
    description: string;
};

export const createApplyFilterCommand = (filter: Filter): CommandFn => {
    let previousValue: string | undefined = undefined;

    return {
        description: `Apply ${filter.type}: ${filter.value}`,
        execute: (state: FilterState) => {
            const result = applyFilter(state, filter);
            previousValue = result.previousValue;
            return {
                state: result.state,
                result: { success: true, message: `${filter.type} filter applied: ${filter.value}` },
            };
        },
        undo: (state: FilterState, previousState: FilterState) => {
            if (previousValue !== undefined) {
                const result = applyFilter(state, { type: filter.type, value: previousValue });
                return {
                    state: result.state,
                    result: { success: true, message: `${filter.type} filter removed` },
                };
            } else {
                const newState = { ...state };
                if (filter.type === 'category') {
                    delete newState.category;
                } else {
                    delete newState.brand;
                }
                return {
                    state: newState,
                    result: { success: true, message: `${filter.type} filter removed` },
                };
            }
        },
    };
};

export type FilterManager = {
    state: FilterState;
    history: Array<{ command: CommandFn; previousState: FilterState }>;
};

export const createFilterManager = (initialFilters: SearchFilters = {}): FilterManager => ({
    state: createFilterState(initialFilters),
    history: [],
});

export const executeCommand = (
    manager: FilterManager,
    command: CommandFn
): { manager: FilterManager; result: CommandResult } => {
    const previousState = manager.state;
    const result = command.execute(manager.state);

    if (result.result.success) {
        const newManager: FilterManager = {
            state: result.state,
            history: [...manager.history, { command, previousState }],
        };
        return { manager: newManager, result: result.result };
    }

    return { manager, result: result.result };
};

export const undoCommand = (
    manager: FilterManager
): { manager: FilterManager; result: CommandResult | null } => {
    if (manager.history.length > 0) {
        const entry = manager.history[manager.history.length - 1];
        const undoResult = entry.command.undo(manager.state, entry.previousState);

        const newManager: FilterManager = {
            state: undoResult.state,
            history: manager.history.slice(0, -1),
        };

        return { manager: newManager, result: undoResult.result };
    }

    return { manager, result: null };
};
