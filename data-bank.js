var deeplink = `https://go.isclix.com/deep_link/5353514789844343379`;
var url = window.location.href;

var allBank = [
  {"id":"mbbank",
   "name":"MBBank",
   "details":"Giới Thiệu Nhiều, Nhận Tiền Triệu",
   "sub_info":`Phone xài số nào, Bank xài số đó.
Giao dịch khỏi nghĩ, mất tiền MB chi.`,
   "image":"https://dl.airtable.com/.attachments/29a7f59793de677102d5959e757652b1/3189aa15/tixung4.png",
   "android":"/5325601808419035241?url=https://com.mbmobile/",
   "ios":"/5325601808324354433?url=https%3A%2F%2Fid1205807363.vn"
  },
  {"id":"cake",
   "name":"CAKE",
   "details":"Ngân Hàng Số Miễn Phí Trọn Đời",
   "sub_info":`Mở tài khoản nhanh chóng trong 2 phút với quy trình e-KYC hiện đại và tiện lợi.
An toàn và bảo mật cho mọi giao dịch của bạn.`,
   "image":"https://dl.airtable.com/.attachments/97f01d87a5061a202f34ae228ce52073/fb7b6ade/CAKE.png",
   "android":"/5673481545231285059?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dxyz.be.cake",
   "ios":"/5673484069347447831?url=https%3A%2F%2Fapps.apple.com%2Fkn%2Fapp%2Fcake-the-mobile-bank%2Fid1551907051"
  },
  {"id":"tnex",
   "name":"TNEX",
   "idCamp":"",
   "details":"Ngân Hàng Miễn Phí Cho Thế Hệ Mới",
   "sub_info":`Dịch vụ giao dịch miễn phí 5 không trọn đời.
Kết nối bạn bè qua Tnex dễ dàng.`,
   "image":"https://dl.airtable.com/.attachments/9c2e94c309a5379af3c3b0dc5f5fe494/1c5ef319/tnex-ung-dung-ngan-hang-so-thong-minh-233502-logo-08-01-2021.png",
   "android":"/5689434159820523442?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dvn.tnex.consumer",
   "ios":"/5689436996855141399?url=https%3A%2F%2Fapps.apple.com%2Fvn%2Fapp%2Fid1527220699"
  },
  {"id":"viettelpay",
   "name":"ViettelPay",
   "idCamp":"",
   "details":"Chiết Khấu Ngay Đến 20% Không Giới Hạn Số Lần Khi Nạp Điện Thoại Trên ViettelPay.",
   "sub_info":`Giảm ngay 20% khi mua các gói data Viettel trên ViettelPay.
Nhận ngay bộ 12 VOUCHER mua DATA trên ViettelPay với giá chỉ 1.000đ/gói DATA.`,
   "image":"https://dl.airtable.com/.attachments/087d523f4e9fb6227081f785817f2346/816902b1/ScreenShot2021-07-13at6.07.44PM.jpg",
   "android":"/5496843801398612939?url=https%3A%2F%2Fapp.appsflyer.com%2Fcom.bplus.vtpay%3Fc%3Dngayvang50p2",
   "ios":"/5496843801589847620?url=https%3A%2F%2Fapp.appsflyer.com%2Fid1344204781%3Fc%3Dtratruocck10"
  },
  {"id":"vnpay",
   "name":"VNPAY",
   "idCamp":"",
   "details":"Ví VNPAY - Ví Của Gia Đình",
   "sub_info":`+150.000 Điểm chấp nhận thanh toán.
Thanh toán an toàn, đơn giản, nhanh chóng và bảo mật cấp cao.`,
   "image":"https://dl.airtable.com/.attachments/e0e9c5f02729d91fbf52400097150023/c46eaa8c/vppay.png",
   "android":"/5633817683390722383?url=https%3A%2F%2Fvidientuvnpay.vnpay.vn%2F",
   "ios":"/5633817683390722383?url=https%3A%2F%2Fvidientuvnpay.vnpay.vn%2F"
  },
  {"id":"vpbank",
   "name":"VPBank EKYC",
   "idCamp":"",
   "details":"100% Online - 5 Phút Có Ngay Tài Khoản",
   "sub_info":`Giới thiệu bạn hay - Nhận ngay tiền mặt.
Miễn phí nhiều dịch vụ tiện ích online.`,
   "image":"https://dl.airtable.com/.attachments/d92cf99207a0cfca77dfc1613d591003/e1f07984/vpbank.png",
   "android":"/5554019374553823012?url=https%3A%2F%2Ftaikhoan.vpbank.com.vn%2Fcasa%2Fekyc%2Fstep1%2F",
   "ios":"/5554019374553823012?url=https%3A%2F%2Ftaikhoan.vpbank.com.vn%2Fcasa%2Fekyc%2Fstep1%2F"
  },
  {"id":"savy",
   "name":"Savy TPBank",
   "idCamp":"",
   "details":"Tặng 50K Cho Khách Hàng Mới",
   "sub_info":`Tiết kiệm mọi lúc, mọi nơi chỉ từ 30K.
Lãi suất 6,5%, top cao nhất trong app tiết kiệm hiện nay.`,
   "image":"https://dl.airtable.com/.attachments/dcab37b76fa32edea920fae64fae214a/8181340a/savy.png",
   "android":"/5800960454703201054?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dvn.tpbank.savy",
   "ios":"/5800960454460640525?url=https%3A%2F%2Fapps.apple.com%2Fvn%2Fapp%2Fid1284522516"
  },
  {"id":"tpbank",
   "name":"TPBank EKYC",
   "idCamp":"",
   "details":"Ứng dụng ngân hàng của Kỷ nguyên số",
   "sub_info":`Gửi tiết kiệm lãi suất cao.`,
   "image":"https://content.accesstrade.vn/adv/1639021979_avatar_1639021979.jpeg",
   "android":"/5634527360579767031?url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.tpb.mb.gprsandroid",
   "ios":"/5807579623225108975?url=https%3A%2F%2Fapps.apple.com%2Fvn%2Fapp%2Fid450464147"
  },
]

function innerAndroid(){
  var innerHTMLAndroid = '';
  for(let i=0; i<allBank.length;i++){
    
    var detailsBank = allBank[i].sub_info.match(/.+(\n|\.)/g);
    let innerDetails = '';
    for(let u=0; u<detailsBank.length;u++){
      innerDetails += `<p class="feeds-block__item-content__title loan_period">${detailsBank[u]}</p>`
    }
    
  innerHTMLAndroid += `<div class="feeds-block__item-wrap" style="text-align:center;">
                <div class="feeds-block__item">
                  <div class="feeds-block__item-link">
                    <div class="feeds-block__item-img">
                      <img src="${allBank[i].image}" alt="${allBank[i].name}">
                    </div>
                    <div class="feeds-block__item-content">
                      <strong class="h5 text-capitalize">${allBank[i].name} (Android)</strong>
                      <strong class="h6 text-capitalize pl-3 text_promo" style="font-size: 14px;color: #fd4848; min-height: 20px;">${allBank[i].details}</strong>
                      <div class="sub-info">
                        ${innerDetails}
                      </div>
                     </div>
                                <div class="feeds-block__item-button">
                                     <a href="${deeplink}${allBank[i].android}&utm_source=banksodep&utm_medium=${url}&utm_campaign=reg-now&utm_content=Nhấn%20đăng%20kí%20tài%20khoản" data-link="${deeplink}${allBank[i].android}" target="_blank" id="track_link" class="btn-lead">
                                        <button id="bttn_voucher" data-id="1">
                                            <span>Đăng Ký Tài Khoản</span>
                                        </button>
                                     </a>
                                      <a href="" target="_blank" class="btn-lead track_info" id="track_info" style="margin-top: 15px; float: left; display: none;">Điền thông tin nhận Voucher sau khi đăng ký thành công</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>  `;
  }
  document.getElementById('innerBank').innerHTML = innerHTMLAndroid;
}

function innerIOS(){
  var innerHTMLIOS = '';
  for(let i=0; i<allBank.length;i++){
    
    var detailsBank = allBank[i].sub_info.match(/.+(\n|\.)/g);
    let innerDetails = '';
    for(let u=0; u<detailsBank.length;u++){
      innerDetails += `<p class="feeds-block__item-content__title loan_period">${detailsBank[u]}</p>`
    }
    
  innerHTMLIOS += `<div class="feeds-block__item-wrap" style="text-align:center;">
                <div class="feeds-block__item">
                  <div class="feeds-block__item-link">
                    <div class="feeds-block__item-img">
                      <img src="${allBank[i].image}" alt="${allBank[i].name}" title="${allBank[i].name}">
                    </div>
                    <div class="feeds-block__item-content">
                      <strong class="h5 text-capitalize">${allBank[i].name} (IOS)</strong>
                      <strong class="h6 text-capitalize pl-3 text_promo" style="font-size: 14px;color: #fd4848; min-height: 20px;"> ${allBank[i].details}</strong>
                      <div class="sub-info">
                        ${innerDetails}
                      </div>
                     </div>
                                <div class="feeds-block__item-button">
                                     <a href="${deeplink}${allBank[i].ios}&utm_source=banksodep&utm_medium=${url}&utm_campaign=reg-now&utm_content=Nhấn%20đăng%20kí%20tài%20khoản" data-link="${deeplink}${allBank[i].ios}" target="_blank" id="track_link" class="btn-lead">
                                        <button id="bttn_voucher" data-id="1">
                                            <span>Đăng Ký Tài Khoản</span>
                                        </button>
                                     </a>
                                      <a href="" target="_blank" class="btn-lead track_info" id="track_info" style="margin-top: 15px; float: left; display: none;">Điền thông tin nhận Voucher sau khi đăng ký thành công</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>  `;
  }
  document.getElementById('innerBank').innerHTML = innerHTMLIOS;
}


if (jscd.os.match(/Android/g)){ //Android
  innerAndroid()
}else
if (jscd.os.match(/iOS/g)){  //IOS
  innerIOS()
}else
if (jscd.os.match(/Windows/g)){ //Window
  var randomOS = Math.floor(Math.random() * 2);
  if(randomOS == 0){innerAndroid()}
  if(randomOS == 1){innerIOS()}
}

//for(let i=0; i<allBank.length;i++){

