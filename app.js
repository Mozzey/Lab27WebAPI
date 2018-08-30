// Materialize JS
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    duration: 2000
  });
});

// Custom JS
function loadData() {
  fetch(
    `https://forecast.weather.gov/MapClick.php?lat=${
      document.querySelector('.latitude').value
    }&lon=${document.querySelector('.longitude').value}&FcstType=json`
  )
    .then(response => response.json())
    .then(request => {
      let threeDay = '';
      let weatherLocation = request.location;
      console.log(request.location);
      threeDay += `
        <div class="col s3 offset-s1">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${request.data.iconLink[0]}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
              <h5>${request.time.startPeriodName[0]}</h5></span>
              <div class="monday"></div>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4 temperature right">X</span>
              <ul>
                <h5>${request.data.weather[0]}</h5>
                <hr />
                <h6>${request.time.tempLabel[0]}</h6>
                <li>${request.data.temperature[0]}</li>
                <h6>${request.time.tempLabel[1]}</h6>
                <li>${request.data.temperature[2]}</li>
                <hr />
                <h6>${request.data.text[0]}</h6>
              </ul>
            </div>
          </div>
        </div>
        <div class="col s3">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${request.data.iconLink[1]}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <h5>${request.time.startPeriodName[1]}</h5>
              </span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4 temperature right">X</span>
              <ul>
                <h5>${request.data.weather[1]}</h5>
                <hr />
                <h6>${request.time.tempLabel[0]}</h6>
                <li>${request.data.temperature[2]}</li>
                <h6>${request.time.tempLabel[1]}</h6>
                <li>${request.data.temperature[3]}</li>
                <hr />
                <h6>${request.data.text[1]}</h6>
              </ul>
            </div>
          </div>
        </div>
        <div class="col s3">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${request.data.iconLink[2]}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">
                <h5>${request.time.startPeriodName[2]}</h5>
              </span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4 temperature right">X</span>
              <ul>
                <h5>${request.data.weather[2]}</h5>
                <hr />
                <h6>${request.time.tempLabel[0]}</h6>
                <li>${request.data.temperature[4]}</li>
                <h6>${request.time.tempLabel[1]}</h6>
                <li>${request.data.temperature[5]}</li>
                <hr />
                <h6>${request.data.text[2]}<h6>
              </ul>
            </div>
          </div>
      </div>
        `;

      document.querySelector('.weather-cards').innerHTML = threeDay;
    });
}
