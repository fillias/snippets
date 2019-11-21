fetch('https://a.centrum.cz/cent/hserver/SASPB/FCID=%%FCID%%')
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    console.log(html);
  }).catch(err => console.log('fetch err: ', err));