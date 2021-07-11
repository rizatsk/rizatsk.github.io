var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10){var waktu = "Selamat Pagi"};
if (h >= 10 && h < 15){var waktu = "Selamat Siang"};
if (h >= 15 && h < 18){var waktu = "Selamat Sore"};
if (h >= 18 || h < 4){var waktu = "Selamat Malam"};

$('#send').on('click',function(){
    var walink = 'https://web.whatsapp.com/send',
        phone = '6287782987067',
        walink2 = 'Assalamualaikum Rizat,'+waktu;

    /* Call Input Form */
    var nama = $("#nama").val(),
        email = $("#email").val(),
        phone_user = $("#phone").val(),
        message = $("#message").val();

    if(("" != message) && ("" != nama)){   
        
       /* Final Whatsapp URL */
       var blanter_whatsapp = walink + '?phone=' + phone + '&text=' + walink2 + '%0A%0A' +
           'Name : ' + nama + '%0A' +
           'Email Address : ' + email + '%0A' +
           'Phone : ' + phone_user + '%0A' +
           'Message : ' + message + '%0A';
       
       /* Whatsapp Window Open */
       window.open(blanter_whatsapp,'_blank');
       }
    else{
        $('.for-alert').html(`
        <div class="alert alert-primary d-flex align-items-center" role="alert">
          <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#info-fill"/></svg>
          <div>
            Harap Harus Mengisi Name dan Message, Yang Lain Tidak Di isi Tidak Masalah !
          </div>
        </div>
        `);
    }

});