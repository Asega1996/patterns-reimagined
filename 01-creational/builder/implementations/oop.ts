import { HttpRequest } from "../types";

export class HttpRequestBuilder {
    private request: HttpRequest = {
        method: 'GET',
        url: '',
        headers: {},
    };

    method(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'): HttpRequestBuilder {
        this.request.method = method;
        return this;
    }

    url(url: string): HttpRequestBuilder {
        this.request.url = url;
        return this;
    }

    header(key: string, value: string): HttpRequestBuilder {
        this.request.headers[key] = value;
        return this;
    }

    headers(headers: Record<string, string>): HttpRequestBuilder {
        this.request.headers = { ...this.request.headers, ...headers };
        return this;
    }

    body(data: any): HttpRequestBuilder {
        this.request.body = data;
        return this;
    }

    queryParam(key: string, value: string | number | boolean): HttpRequestBuilder {
        if (!this.request.queryParams) {
            this.request.queryParams = {};
        }
        this.request.queryParams[key] = value;
        return this;
    }

    queryParams(params: Record<string, string | number | boolean>): HttpRequestBuilder {
        this.request.queryParams = { ...this.request.queryParams, ...params };
        return this;
    }

    timeout(ms: number): HttpRequestBuilder {
        this.request.timeout = ms;
        return this;
    }

    build(): HttpRequest {
        return { ...this.request };
    }
}
