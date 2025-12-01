import { HttpRequest } from "../types";

type HttpRequestBuilder = {
    method: (method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH') => HttpRequestBuilder;
    url: (url: string) => HttpRequestBuilder;
    header: (key: string, value: string) => HttpRequestBuilder;
    headers: (headers: Record<string, string>) => HttpRequestBuilder;
    body: (data: any) => HttpRequestBuilder;
    queryParam: (key: string, value: string | number | boolean) => HttpRequestBuilder;
    queryParams: (params: Record<string, string | number | boolean>) => HttpRequestBuilder;
    timeout: (ms: number) => HttpRequestBuilder;
    build: () => HttpRequest;
};

const createHttpRequestBuilder = (request: Partial<HttpRequest> = {}): HttpRequestBuilder => {
    const currentRequest: HttpRequest = {
        method: 'GET',
        url: '',
        headers: {},
        ...request,
    };

    return {
        method(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH') {
            return createHttpRequestBuilder({ ...currentRequest, method });
        },
        url(url: string) {
            return createHttpRequestBuilder({ ...currentRequest, url });
        },
        header(key: string, value: string) {
            return createHttpRequestBuilder({
                ...currentRequest,
                headers: { ...currentRequest.headers, [key]: value },
            });
        },
        headers(headers: Record<string, string>) {
            return createHttpRequestBuilder({
                ...currentRequest,
                headers: { ...currentRequest.headers, ...headers },
            });
        },
        body(data: any) {
            return createHttpRequestBuilder({ ...currentRequest, body: data });
        },
        queryParam(key: string, value: string | number | boolean) {
            return createHttpRequestBuilder({
                ...currentRequest,
                queryParams: {
                    ...currentRequest.queryParams,
                    [key]: value,
                },
            });
        },
        queryParams(params: Record<string, string | number | boolean>) {
            return createHttpRequestBuilder({
                ...currentRequest,
                queryParams: {
                    ...currentRequest.queryParams,
                    ...params,
                },
            });
        },
        timeout(ms: number) {
            return createHttpRequestBuilder({ ...currentRequest, timeout: ms });
        },
        build() {
            return { ...currentRequest };
        },
    };
};

export const httpRequestBuilder = () => createHttpRequestBuilder();
