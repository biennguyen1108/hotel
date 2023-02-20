const API_URL_ORDER = "https://63a689f7318b23efa7ab5f8e.mockapi.io/api/users";

function show_cus_infor() {
    axios.get(`${API_URL_ORDER}`).then((res) => {
        var data = res.data;
        var stt =0
        document.getElementById('cus_infor').innerHTML = ""
        for (var x in data) {
            stt++
            document.getElementById('cus_infor').innerHTML += `
            <tr>
            <td>${stt}</td>
            <td>${data[x].name_user}</td>
            <td>${data[x].phonenumber}</td>
            <td>${data[x].email}</td>
            <td>${data[x].address}</td>
            </tr>
            `
        }
    })
}
show_cus_infor()