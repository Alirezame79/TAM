
export default function useChangePassword(data) {

    if (data === null) return

    fetch('http://127.0.0.1:8000/change-password/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem("token")
        }
    }).then((response) => {
        console.log(response)
        return response.json();
    }).then((data) => {
        console.log(data)
    });
}