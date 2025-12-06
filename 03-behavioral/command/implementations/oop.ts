import { Command, SearchFilters, Filter, CommandResult } from "../types";

export class FilterState {
    private filters: SearchFilters;

    constructor(initialFilters: SearchFilters = {}) {
        this.filters = { ...initialFilters };
    }

    getFilters(): SearchFilters {
        return { ...this.filters };
    }

    applyFilter(filter: Filter): string | undefined {
        const previous = filter.type === 'category' ? this.filters.category : this.filters.brand;

        if (filter.type === 'category') {
            this.filters.category = filter.value;
        } else {
            this.filters.brand = filter.value;
        }

        return previous;
    }

    removeFilter(type: Filter['type']): void {
        if (type === 'category') {
            delete this.filters.category;
        } else {
            delete this.filters.brand;
        }
    }
}

export class ApplyFilterCommand implements Command {
    private filterState: FilterState;
    private filter: Filter;
    private previousValue: string | undefined = undefined;
    public description: string;

    constructor(filterState: FilterState, filter: Filter) {
        this.filterState = filterState;
        this.filter = filter;
        this.description = `Apply ${filter.type}: ${filter.value}`;
    }

    execute(): CommandResult {
        this.previousValue = this.filterState.applyFilter(this.filter);
        return {
            success: true,
            message: `${this.filter.type} filter applied: ${this.filter.value}`,
        };
    }

    undo(): CommandResult {
        if (this.previousValue !== undefined) {
            this.filterState.applyFilter({ type: this.filter.type, value: this.previousValue });
        } else {
            this.filterState.removeFilter(this.filter.type);
        }
        return {
            success: true,
            message: `${this.filter.type} filter removed`,
        };
    }
}

export class FilterManager {
    private filterState: FilterState;
    private history: Command[] = [];

    constructor(initialFilters: SearchFilters = {}) {
        this.filterState = new FilterState(initialFilters);
    }

    getFilters(): SearchFilters {
        return this.filterState.getFilters();
    }

    createApplyFilterCommand(filter: Filter): ApplyFilterCommand {
        return new ApplyFilterCommand(this.filterState, filter);
    }

    executeCommand(command: Command): CommandResult {
        const result = command.execute();

        if (result.success) {
            this.history.push(command);
        }

        return result;
    }

    undo(): CommandResult | null {
        if (this.history.length > 0) {
            const command = this.history.pop()!;
            const result = command.undo();
            return result;
        }
        return null;
    }
}
