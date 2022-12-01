const objPeolpe = [
    {
        user: "admin",
        password: "admin"
    },
    {
        user: "user",
        password: "user"


    }
]

function getinfo() {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value


    for (i = 0; i < objPeolpe.length; i++) {
        if (name == objPeolpe[i].user && password == objPeolpe[i].password) {
            if (name == "admin" && password == "admin") {
                window.open('admin.html')
                return false
            }

            else if (name == "user" && password == "user") {
                window.open('user.html')
                return false
            }

        }
    }

    alert("Failed please try again")


}