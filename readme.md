### app-github
 
doc [github api](https://developer.github.com/v3/)

git clone : 
'https://github.com/risman94/awesome-jr-frontend--Kamarul-Risman-.git'

open terminal and instal all package
```
npm install
```

in file 'src/store.js' open comment if you have redux devtools
```js
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    typeof window === "object" && window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f 
  )
);
export default store;
```

```
npm start
```