
export default function useUpdateProfile(data) {

    if (data === null) return

    fetch('http://127.0.0.1:8000/update-profile/', {
        method: 'POST',
        body: data,
        headers: {
            // 'Content-Type': 'multipart/form-data',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }).then((response) => {
        console.log(response)
        return response.json()
    }).then((data) => {
        console.log(data)
    })

}