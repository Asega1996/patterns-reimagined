export type HttpRequest = {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    url: string;
    headers: Record<string, string>;
    body?: any;
    queryParams?: Record<string, string | number | boolean>;
    timeout?: number;
};
