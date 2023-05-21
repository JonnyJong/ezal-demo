module.exports = ()=>{
  return {
    url4: (url)=>{
      url = url.replace(/\\/g, '/');
      if (url.indexOf('/') !== 0 && url.indexOf('http') !== 0) {
        return '/' + url;
      }
      return url;
    },
  };
}
