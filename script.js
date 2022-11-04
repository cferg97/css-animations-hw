const btndel = document.getElementsByClassName("btn-danger")
const trackList = document.getElementById("track-list")
const text = document.getElementById("extra-text")


function SomeDeleteRowFunction(btndel) {
    if (typeof(btndel) == "object") {
        $(btndel).closest("tr").remove()
    } else {
        return false
    }
}

function addTrack () {
    let trackNum = document.getElementById("track-num").value
    let trackName = document.getElementById("track-name").value
    let artistName = document.getElementById("track-artist").value
    let trackLength = document.getElementById("track-length").value
    const row = trackList.insertRow()
    const track = row.insertCell(0)
    const name = row.insertCell(1)
    const artist = row.insertCell(2)
    const length = row.insertCell(3)
    const button = row.insertCell(4)
    track.innerHTML = trackNum
    track.classList.add("bold")
    name.innerHTML = trackName
    artist.innerHTML = artistName
    length.innerHTML = trackLength
    button.innerHTML = `<td><button type="button" class="btn btn-danger" onclick="SomeDeleteRowFunction(this)">Remove</button></td>`
}

function showAlert () {
    let newText = document.createElement("div")
    newText.classList.add("alert","alert-success", "mt-3")
    text.appendChild(newText)
    let trackName = document.getElementById("track-name").value
    newText.innerText =  "You have successfully added a track: " + trackName
}