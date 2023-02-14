const routes = {
  "/": hero, //home page
  "/work": work, //page will be redirected to work page
  "/about": about, //page will be redirected to about page
  "/blog": blog, //page will be redirected to blog page
};
// routing
const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
