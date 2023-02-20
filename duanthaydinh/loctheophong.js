const API_URL = 'https://63a689f7318b23efa7ab5f8e.mockapi.io/api'

function callAPI(endpoint, method = "GET", body) {
    return axios({
        method: method,
        url: `${API_URL}/${endpoint}`,
        data: body,
    })
        .catch((err) => {
            console.log(err);
        });
        
}

function show(){
    var hotels=[];
    callAPI("rooms","GET",null).then((res)=>{
      hotels=res.data;
    //   let demo="";
      for (let i=0; i<= hotels.length; i++){
        var demo= '<div class="col-4">';
        demo +='<div class="card" style="width:18rem;">';
        demo +='<img src="'+hotels[i].img+'"class="card-img-top" style="height:200px;">';
        demo +='<div class="card-body">';
        demo +='<h5 class="card-title">'+hotels[i].name+'</h5>';
        demo +='<p class="card-text">'+hotels[i].price+"$"+'</p>';
        demo +='<button onclick="oder()"  class="btn btn-success"><a href="http://127.0.0.1:5500/duanthaydinh/checkout1.html" style="color: white ; text-decoration:none" >Đặt phòng</a></button>';
        demo +='</div>';
        demo +='</div>';
        demo +='</div>';
        console.log(demo);
            document.getElementById("phongdon").innerHTML +=demo;  
   }});}
show()

function changeProductList(type, element) //type là tham số truyền vào để có thể hiểu được khi nào nhấn vào cái này cái kia
//element để có hiểu rằng kaf mình đã lấy ra được đối tượng nào ra .
{   
    let tabs =document.getElementsByClassName('tab-item');
    // duyệt các mảng này
    for (i=0; i < tabs.length; i++){
            tabs[i].style.background ='#3F7BFE';
            // background gán váo background ban đầu
    }

    element.style.background='#344583'

    document.getElementById(type).style.display ='flex';
    switch (type) {
        case 'phongdon':
            document.getElementById('phongdoi').style.display="none";
            document.getElementById('vip').style.display="none";
            break;
        case 'phongdoi':
            document.getElementById('phongdon').style.display="none";
            document.getElementById('vip').style.display="none";
            break;
        case 'vip':
            document.getElementById('phongdon').style.display="none";
            document.getElementById('phongdoi').style.display="none";
            break;
        
    }
    console.log(tabs);
    //console.log(type);

}