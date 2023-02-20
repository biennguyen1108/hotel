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
var id;
function save() {
    let hotel = [];
    callAPI("rooms", "GET", null).then((res) => {
        hotel = res.data;})
    for ( let i = 0; i < hotel.length; i++){
        id = i;
    }
    var name = document.getElementById("nameproduct").value;
    var price = document.getElementById("priceproduct").value;
    var note = document.getElementById("noteproduct").value;
    var detail = document.getElementById("detailproduct").value;
    var img = document.getElementById("imgproduct").value;
    let image = img.split("\\")[2];
    if (name | detail | note | (price != "")) {
        var oneProduct = {
            id: id,
            name: name,
            price: price,
            note: note,
            detail: detail,
            img: "/img/" + image,
        };
        callAPI("rooms","POST", oneProduct).then((response) => {
            show();
            alert("Thanh cong");
        });
     } 
    
}
function show(){
  var hotels=[];
  callAPI("rooms","GET",null).then((res)=>{
    hotels=res.data;
    let row="";
    for(i in hotels){
      row+="<tr>";
      row+="<td>"+hotels[i].id+"</td>";
      row+="<td>"+hotels[i].name+"</td>";
      row+="<td>"+"<img src=' "+ hotels[i].img+ "'style='with:80px; height:80px;'>"+"</td>";
      row+="<td>"+hotels[i].price+"</td>";
      row+="<td>"+hotels[i].note +"</td>";
      row+="<td>" +`<button type="button" onclick="editsp(${hotels[i].id})" class="btn btn-success"> Edit</button>`+"</td>";
      row+="<td>" +
      `<button type="button" onclick="deletesp(${hotels[i].id})" class="btn btn-danger">Delete</button>`+"</td>";

    }
    document.getElementById("tab").innerHTML=row;

  });
}
function editsp(id){
  document.getElementById("huy").style.display="block";
  document.getElementById("themmoi").style.display="none";
  document.getElementById("divAddHotel").style.display="block";
  callAPI(`rooms/${id}`,"GET",null).then((res)=>{
    let hotel;
    hotel=res.data;
    console.log(hotel);
    var name=document.getElementById("nameproduct").value=hotel.name;
    var name=document.getElementById("priceproduct").value=hotel.price;
    var name=document.getElementById("noteproduct").value=hotel.note;
    var name=document.getElementById("detailproduct").value=hotel.detail;
  });
  document.getElementById("ok").style.display="block";
  document.getElementById("edit").style.display="block";
  document.getElementById(
    "edit"
  ).innerHTML=`<button type="button" onclick="editok(${hotels[i].id}) "class="btn-success">save</button>`;
}
function editok(id){
document.getElementById("huy").style.display="none";
document.getElementById("themmoi").style.display="block";
document.getElementById("divAddHotel").style.display="none";
  var name=document.getElementById("nameproduct").value;
  var name=document.getElementById("priceproduct").value;
  var name=document.getElementById("noteproduct").value;
  var name=document.getElementById("detailproduct").value;
  let img=document.getElementById("imgproduct").value;
  var image=img.split("\\")[2];

  var oneProduct={
    id:id,
    name:name,
    price:price,
    note:note,
    detail:detail,
    img:"/img/"+image,
  }
  callAPI(`rooms/${id}`,"PUT",oneProduct).then((response) =>{
    show();
    alert("Sửa phòng thành công");
  });
  if
  (document.getElementById("edit").style.display="block"){
    document.getElementById("edit").style.display="none";
    document.getElementById("ok").style.display="block";

  }else{
    document.getElementById("edit").style.display="none";
    document.getElementById("ok").style.display="block";
  }
  reset();
}
function deletesp (id) {
    var r = confirm("Do you want delete this data?")
    if ( r == true) {
    callAPI (`rooms/${id}`,"DELETE", null).then((response) => {
        show();
        alert("xoa thanh cong")
    });
    } else {
    window.location.href ="";
}
}
function reset(){
  document.getElementById("nameproduct").value="";
  document.getElementById("priceproduct").value="";
  document.getElementById("noteproduct").value="";
  document.getElementById("detailproduct").value="";
  document.getElementById("imgproduct").value="";

}
show()