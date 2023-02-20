const API_URL_ORDER = "https://63a689f7318b23efa7ab5f8e.mockapi.io/api/rooms";
const APTconfirm = "https://63a689f7318b23efa7ab5f8e.mockapi.io/api/users"
const api = "https://63a689f7318b23efa7ab5f8e.mockapi.io/api/orders"

// show tổng số sản phẩm
function quantity() {
    axios.get(`${api}`).then((res) => {
        var dem = res.data.length
        document.getElementById('order').innerHTML = dem
    })

    axios.get(`${ APTconfirm}`).then((res) => {
        var dem = res.data.length
        document.getElementById('user').innerHTML = dem
    })

    axios.get(`${API_URL_ORDER}`).then((res) => {
        var dem = res.data.length
        document.getElementById('room').innerHTML = dem
    })
}
quantity()




