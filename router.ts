export const route = (route:string, path: string) => {
  let regexRoute = new RegExp(route, "gmi");
  if(regexRoute.test(path)){
    return path;
  } else {
    return null;
  }
}
