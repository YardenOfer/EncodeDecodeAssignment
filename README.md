# Encoder/Decoder service

# Service Purpose

Encode and decode URLs

# Execution

CD into the root directory of the project and then run 'npm install'.
To boot up the server, run 'npm run dev'. Make sure the
server is running on port 3000, then send requests to localhost:3000/encode (post reuqest, with a 'url' parameter in the body of the request representing the original URL. The body of the request should be of type JSON) or to
localhost:3000/decode (Get request, with a url parameter called 'url' representing the encoded URL).

# Requests examples:

# Decode:

localhost:3000/decode?url=http://URLGenerator/nj6174ds (GET)

# Encode:

localhost:3000/encode (POST)

request body:
{
"url": "https://www.wikipedia.org"
}
