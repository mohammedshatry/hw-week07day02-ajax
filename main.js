let res = {}; let baseURL = "https://api.imgflip.com/get_memes"
function getInfo(){
    axios.get(baseURL).then(function(result) {
        res = result.data
        console.log(res)
        res.data.memes.forEach(element => {
            document.getElementById("div1").innerHTML += `
        <p><b>Name:</b> ${element.name} </p> `
        document.getElementById("div1").innerHTML += `
        <img src= ${element.url} width =${element.width} height=${element.height}  >  </p> `


        })})}

        getInfo()
        



