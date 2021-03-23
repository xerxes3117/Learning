## Learning
1. Use **parametrized sql** queries to prevent **SQL injection**
2. Don't wrap callback function of react hook in async as hook callback does not expect a promise (https://www.robinwieruch.de/react-hooks-fetch-data)
3. **Every component** in <Route component=...> has access to **history** API of react-router as a prop which can be used to navigate to other routes 
   For other nested/child components, we can use useHistory() hook to get access to same history API
4. Setter function in useState hook (i.e. second element in destructrued array) changes the state's value (i.e. the 1st element). However, unlike in class component this state change doesn't necessarily cause a re-render of component. In case of primitive state values if the new value passed in setter is same as previous state value it doesn't cause a re-render. For non-primitives (objects, arrays) if you pass the reference to same object/array without any modification inside it again won't cause any re-render.
5. Even if we are wrapping a **Context** around all routes in our app (eg. see App.jsx), avoid sharing that context across routes i.e. in a route component (say **component A**) or it's children don't use a value from **Context API** which was fetched from BE on another route's component (say **component B**). This is becuase on page refresh (on the **component A**) react router will only match the route and load the **component A** through react. Thus the **component B** will not be loaded and context will be empty. **What to do**: Fetch the data as required from the backend in **component A** and use that value. For eg. **Component A** is **UpdateRestaurant.jsx** and **component B** is **RestaurantList.jsx**. Also, note that there's no issue in sharing Context across components if they are parent or child (direct or indirect/nested) of each other.
6. **INSERT** db queries don't return anything in the response. So if you need to send back response after inserting use **returning \*** to get the added entry (would be returned in a array with 1 element)

## Todo after completing project (Stuff that is missing from this tutorial as compared to a real project)
1. No defining of schema for initializing the database (that was done manually in psql which is not ideal). Explore how can we can do this using migrations?
2. Better error handling for db queries and reponses (eg. what if in delete API incoming ID doesn't exist in db)
3. Regarding **point 4** in **Learning** above. Would there be same issue in **Redux** too
4. Think of other ways to implement star rating component. Also, build it so we can rate by hovering over stars rather than entering rating value in input. Can we do something with css masking?
5. Confirm regarding point 4 in Learning section above: Would setState in class components cause re-render if previous and new values is same??

## Doubts
1. We allowed cors on the server side. But how does this work in production? Does everything run on same port and cors is not required?
2. Why exactly do we need to call .json() on a readable stream (revisit net-ninja tutorial too)
3. What if I don't convert form elements as controlled elements. What issue would it cause?