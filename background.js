let pattern = "*://*/*";
let targetUrl = "images/s.gif";

function redirect(requestDetails) {
  console.log("Redirecting: " + requestDetails.url);
  if (requestDetails.url === targetUrl) {
    return;
  }
  return {
    redirectUrl: targetUrl
  };
}

browser.webRequest.onBeforeRequest.addListener(
  redirect,
  {urls:[extjs.com/s.gif], types:["all"]},
  ["blocking"]
);
