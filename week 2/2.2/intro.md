## ECMAScript 
- scripting language specification on which JavaScript is based (JS contains additional features like DOM) 
- ECMAScript is sort of a set of guidelines that browsers/compilers need to follow
- e.g. V8 in chromium, SpiderMonkey in firefox

ECMAScript -> the specification

JavaScript -> the implementation


## Node.js 
- it's not a language, it's a runtime
- V8 + some backend stuff like http

## Bun
- competitor to Node.js (outperforming already)
- written in zig


## HTTP
- hyper text transfer protocol
- protocol for the communication of frontend & backend
- request form client, response from server

### client side
1. Protocol (HTTP/HTTPS)
2. Address (URL/IP/PORT)
3. Route
4. Head, Body, Query Parameters
5. Method

### server side
1. Response Headers
2. Response Body
3. Status Codes

### after firing a request
1. Browser parses the URL
2. DNS (domain name system) lookup (converts google.com to an IP)
3. Establishes a connection

### common methods
1. GET
2. POST
3. PUT
4. DELETE

### common responses
1. 200 - Everything is ok
2. 404 - Page/route not found
3. 403 - Authentication issues
4. 500 - Internal server error

> Express -> library to create an HTTP server