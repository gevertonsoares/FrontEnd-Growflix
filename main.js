//Video Destaque
function videoHeader() {
  const videoDestaque = document.getElementById('video-destaque');
  const growcastVideos = videos[0].growcast;
  

  growcastVideos.forEach(video => {
    const info = `
    <p class="fs-4 mb-0">PODCAST</p>
    <p class="font-growcast fw-bolder"> Growcast </p>
    <a onclick="mostrarVideo('${videos[0].growcast[1].link}')" href="#" class="btn btn-light" 
      data-bs-toggle="modal" data-bs-target="#videoModal"><i class="bi bi-play-fill"></i>Assistir</a>
    `;
    videoDestaque.innerHTML = info;
  }); 
}
videoHeader()


//Card growcast
function createCardGrowcast() {
  const cardContainerGrowcast = document.getElementById('cardContainerGrowcast');
  const growcastVideos = videos[0].growcast;
  

  growcastVideos.forEach(video => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card bg-dark text-light" style="width: 18rem;">
          <img class="growcast-00" src="${video.image}" alt="">
          <div class="card-body" id="card-body">
            <p>${video.title}</p>
            <a onclick="mostrarVideo('${video.link}')" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal">
              <i class="bi bi-play-fill"></i>Assistir
            </a>
          </div>
        </div>
      </div>
    `;
    cardContainerGrowcast.innerHTML += card;
  }); 
}

createCardGrowcast();

//Card Webinar
function createCardWebinar() {
  const cardContainerWebinar = document.getElementById('cardContainerWebinar');
  const webinarFlutterVideos = videos[0].webinarFlutter;
  

  webinarFlutterVideos.forEach(video => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card bg-dark text-light" style="width: 18rem;">
          <img class="growcast-00" src="${video.image}" alt="">
          <div class="card-body" id="card-body">
            <p>${video.title}</p>
            <a onclick="mostrarVideo('${video.link}')" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal">
              <i class="bi bi-play-fill"></i>Assistir
            </a>
          </div>
        </div>
      </div>
    `;
    cardContainerWebinar.innerHTML += card;
  }); 
}

createCardWebinar();


//Card UXUI
function createCardUxUi() {
  const cardContainerUXUI = document.getElementById('cardContainerUXUI');
  const jornadaUxUiVideos = videos[0].jornadaUxUi;
  

  jornadaUxUiVideos.forEach(video => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card bg-dark text-light" style="width: 18rem;">
          <img class="growcast-00" src="${video.image}" alt="">
          <div class="card-body" id="card-body">
            <p>${video.title}</p>
            <a onclick="mostrarVideo('${video.link}')" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal">
              <i class="bi bi-play-fill"></i>Assistir
            </a>
          </div>
        </div>
      </div>
    `;
    cardContainerUXUI.innerHTML += card;
  }); 
}

createCardUxUi();


//Card Diversos
function createCardDiversos() {
  const cardContainerDiversos = document.getElementById('cardContainerDiversos');
  const diversos = videos[0].diversos;
  

  diversos.forEach(video => {
    const card = `
      <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
        <div class="card bg-dark text-light" style="width: 18rem;">
          <img class="growcast-00" src="${video.image}" alt="">
          <div class="card-body" id="card-body">
            <p>${video.title}</p>
            <a onclick="mostrarVideo('${video.link}')" href="#" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#videoModal">
              <i class="bi bi-play-fill"></i>Assistir
            </a>
          </div>
        </div>
      </div>
    `;
    cardContainerDiversos.innerHTML += card;
  }); 
}

createCardDiversos();












function mostrarVideo(link) {
  const videoBody = document.getElementById('videoBody');
  videoBody.innerHTML = `
  <iframe width="100%" height="516" src="${link}" title="YouTube video player" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}


   
