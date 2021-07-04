// Portofolio

$.getJSON("json/main.json", function(Portofolio){
    let datas = Portofolio.projects;
    $.each(datas, function(i, data){
        $("#card-portofolio").append(`
        <div class="col-md mb-4">
          <div class="card">
            <img class="card-img-top" src="image/`+data.photo+`" alt="Card image cap">
            <div class="card-body text-center">
              <h5 class="card-text">`+data.nama+`.</h5>
              <p class="card-text">`+data.deskripsi.substring(0, 90)+`...</p>
              <a href="#" class="btn btn-primary see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.id +`">See Detail...</a>
              </div>
              </div>
              </div> `);
    });
});

$('#card-portofolio').on('click','.see-detail', function(){
  let id = $(this).data('id');
  $.getJSON("json/main.json", function(Portofolio){
    let datas = Portofolio.projects;
    $.each(datas, function(i,data){
      if(data.id == id){
        $('.modal-title').html(data.nama);
        $('.modal-body').html(`
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <img src="image/`+data.photo+`" class="img-fluid">
                </div>
                <div class="col-md-8">
                    <ul class="list-group">
                        <li class="list-group-item"> <h6>`+ data.nama +`</h6> </li>
                        <li class="list-group-item">`+data.deskripsiProject+` </li>
                        <iframe class="embed-responsive-item" height="300" src="`+data.vidio+`" allowfullscreen></iframe>
                    </ul>
                </div>
            </div>
        </div>
        `);
      }
    })
  })
})
let age = (new Date().getFullYear()) - 2000; 
$(".age").html(age+` Years`);
    