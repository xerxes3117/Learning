## Learning
1. Use parametrized sql queries to prevent SQL injection
2. Don't wrap callback function of react hook in async as hook callback does not expect a promise (https://www.robinwieruch.de/react-hooks-fetch-data)

## Stuff that is missing from this tutorial as compared to a real project
1. No defining of schema for the database in code (that was done manually in psql which is not ideal)
2. No use of data or db migrations
3. Did not define a separate folder to store all resource controllers (although i did it)

## Doubts
1. We allowed cors on the server side. But how does this work in production? Does everything run on same port and cors is not required?
2. Why exactly do we need to call .json() on a readable stream (revisit net-ninja tutorial too)