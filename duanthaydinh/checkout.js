const api = "https://63a689f7318b23efa7ab5f8e.mockapi.io/api/users";


function pay() {

    var name1 = document.getElementById('name').value
    var add = document.getElementById('address').value
    var phone = document.getElementById('phone').value     
        // post data
        var data = {
            name_user: name1,
            phonenumber: phone,
            address: add,
        }
        axios.post(api, data)
            .then(() => {
                alert("Bạn Đã đặt phòng thành công")
                location.reload()
            })
    }

