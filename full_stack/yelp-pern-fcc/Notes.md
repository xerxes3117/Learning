## Learning
1. Use **parametrized sql** queries to prevent **SQL injection**
2. Don't wrap callback function of react hook in async as hook callback does not expect a promise (https://www.robinwieruch.de/react-hooks-fetch-data)
3. **Every component and it's children** in <Route component=...> has access to **history** API of react-router which can be used to navigate to other routes 

## Todo after completing project (Stuff that is missing from this tutorial as compared to a real project)
1. No defining of schema for initializing the database (that was done manually in psql which is not ideal). We can do this using migrations.
2. Better error handling for db queries and reponses (eg. what if in delete API incoming ID doesn't exist in db)

## Doubts
1. We allowed cors on the server side. But how does this work in production? Does everything run on same port and cors is not required?
2. Why exactly do we need to call .json() on a readable stream (revisit net-ninja tutorial too)
3. What if I don't convert form elements as controlled elements. What issue would it cause?