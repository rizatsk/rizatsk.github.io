$.ajax({
    type : "get",
    url : "https://www.googleapis.com/youtube/v3/channels",
    datatype : "json",
    data : {
        "part" : "snippet,statistics",
        "id" : "UCgVOfzzDlutepqNEcp1kbJA",
        "key" : "AIzaSyDxRJVw4-R1-ZEmTJ1CSe-cmniU1qETDJE"
    },
    success : function(result){
        if(result){
            let profileYT = result.items[0]['snippet']['thumbnails']['medium']['url'];
            let namaYT = result.items[0]['snippet']['title'];
            let subscriberYT = result.items[0]['statistics']['subscriberCount'];
            let viewsYT = result.items[0]['statistics']['viewCount'];
            let videosYT = result.items[0]['statistics']['videoCount'];
            $("#youtube").html(`
            <div class="d-flex align-items-center">
                <div class="col-md-3">
                  <img src="`+profileYT+`" alt="" width="100" class="img-thumbnail rounded-circle">
                </div>
                <div class="col-md-8 ms-3">
                  <h5>`+namaYT+`</h5>
                  <p>`+subscriberYT+` Subscriber, 
                  `+viewsYT+` Views, 
                  `+videosYT+` Video.</p>
                  <div class="g-ytsubscribe" data-channelid="UCgVOfzzDlutepqNEcp1kbJA" data-layout="default" data-count="default"></div>
                  <script src="https://apis.google.com/js/platform.js"></script>
                </div>
            </div>
          `);
        }
    }
});

$.ajax({
    type : "get",
    url : "https://www.googleapis.com/youtube/v3/search",
    datatype : "json",
    data :{
        "key" : "AIzaSyDxRJVw4-R1-ZEmTJ1CSe-cmniU1qETDJE",
        "channelId" : "UCgVOfzzDlutepqNEcp1kbJA",
        "maxResults" : "1",
        "order" : "date"
    },
    success : function(result){
        if(result){
            let idVideoLatest = result.items[0]['id']['videoId'];
           $("#youtube").append(`
                <iframe class="embed-responsive-item" height="250" width="100%" src="https://www.youtube.com/embed/`+idVideoLatest+`" allowfullscreen></iframe>
            `);
        }
    }
});

$.ajax({
    type : "get",
    url : "https://graph.instagram.com/me",
    datatype : "json",
    data :{
        "fields" : "username,media_count,account_type",
        "access_token" : "IGQVJYV3ROM2FVajdXeTNXQzN4NlJmQ1VHUG5UQzVJbjFRNndjWFRKTnVTUzJYRmlmUnN5Qmo1eVM5UXQ5YkU3c1pNRE9ZASzVWNXhabS1UdjBOc0ZAPS2pLWTFWMGxCMjY2N2lWMGo4N1ZApMjRCMXVUOAZDZD"
    },
    success : function(result){
        if(result){
            let username = result['username'];
            let media_count = result['media_count'];
            $("#instagram").html(`
            <div class="d-flex align-items-center">
                <div class="col-md-3 flex-shrink-0">
                  <img src="image/profile1.png" alt="" width="100" class="img-thumbnail rounded-circle">
                </div>
                <div class="col-md-8 flex-grow-1 ms-3">
                  <h5>Instagram</h5>
                  <h5>@`+username+`</h5>
                  <p>120 Followers, `+media_count+` Media</p>
                  </div>
            </div>`);
        }
    }
})

$.ajax({
    type : "get",
    url : "https://graph.instagram.com/me/media",
    datatype : "json",
    data : {
        'fields' : "timestamp,thumbnail_url,media_url,media_type,caption",
        'access_token' : "IGQVJYV3ROM2FVajdXeTNXQzN4NlJmQ1VHUG5UQzVJbjFRNndjWFRKTnVTUzJYRmlmUnN5Qmo1eVM5UXQ5YkU3c1pNRE9ZASzVWNXhabS1UdjBOc0ZAPS2pLWTFWMGxCMjY2N2lWMGo4N1ZApMjRCMXVUOAZDZD"
    },
    success : function(result){
        if(result){
            let image_ig = result['data'];
            let gambar = '';
            for(let i = 0; i <= 8; i++){
                if(image_ig[i]['media_type'] == "IMAGE"){
                    gambar += `
                    <div class="instagram-thumbnail">
                        <img src="`+image_ig[i]['media_url']+`">
                    </div>`;
                }
            }
            $("#instagram").append(`
            <div class="row mt-4 mb-4">
              <div class="col">
                `+gambar+`
              </div>
            </div>`);
        }
    }
})
