// Using OOP HTTP Request Builder
import { HttpRequestBuilder } from "./implementations/oop.js";

const oopRequest = new HttpRequestBuilder()
    .method('POST')
    .url('https://api.example.com/users')
    .header('Content-Type', 'application/json')
    .header('Authorization', 'Bearer token123')
    .body({ name: 'Alejandro Segovia', email: 'asega1996@gmail.com' })
    .timeout(5000)
    .build();

console.log("OOP HTTP Request:", oopRequest);

// Using FP HTTP Request Builder
import { httpRequestBuilder } from "./implementations/fp.js";

const fpRequest = httpRequestBuilder()
    .method('GET')
    .url('https://api.example.com/users')
    .headers({
        'Accept': 'application/json',
        'Authorization': 'Bearer token456',
    })
    .body({ name: 'Alejandro Segovia', email: 'asega1996@gmail.com' })
    .timeout(3000)
    .build();

console.log("FP HTTP Request:", fpRequest);
