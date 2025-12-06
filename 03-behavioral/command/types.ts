export type Filter =
    | { type: 'category'; value: string }
    | { type: 'brand'; value: string };

export type SearchFilters = {
    category?: string;
    brand?: string;
};

export type CommandResult = {
    success: boolean;
    message?: string;
};

export interface Command {
    execute(): CommandResult;
    undo(): CommandResult;
    description: string;
}
