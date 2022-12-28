export const getHeaders = () => {

    const headerMap = {};

    const req = new XMLHttpRequest();

    req.open('GET', document.location, false);
    req.send(null);

    const headers = req.getAllResponseHeaders().toLowerCase();
    const arr = headers.trim().split(/[\r\n]+/);
    
    arr.forEach((line) => {
      const parts = line.split(': ');
      const header = parts.shift();
      const value = parts.join(': ');
      headerMap[header] = value;
    });

    let headerToReturn;
    (headerMap.page != undefined) ? headerToReturn = headerMap.page : headerToReturn = "home";
    return headerToReturn;
}