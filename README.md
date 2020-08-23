# React Context with Router

## `react-router-dom`

* It is important to note that unless `<Link />` is used to redirect
    the app will just re-render to the initial value set in `App.js`
    ie: `'user123'`

## `Home.js`

* Demonstrates how to utilize the Context as a class component.
* The context is set within the class initialization
* Component children are rendered via state properties

## `About.js`

* Demonstrates how to utilize the Context as a class component.
* The context is set after the class initialization
* Component children are rendered directly, through the given context

## `NavBar.js`

* Demonstrates how to utilize the Context as a functional component.
* The context is set through the use of the `useContext` hook
* Component children is rendered with the context hook