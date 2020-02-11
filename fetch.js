fetch('https://a.centrum.cz/cent/tserver/fcid=107694')
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    console.log(html);
  }).catch(err => console.log('fetch err: ', err));