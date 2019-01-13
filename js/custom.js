/* finding clicked position on image */

function trackImageClick(imageId, onClick) {
    var img = document.getElementById(imageId)
    var height = img.naturalWidth
    var weidth = img.naturalWidth
    img.addEventListener('click', function(e) {
        var target = e.target
        clickedX = e.clientX - target.getBoundingClientRect().x
        clickedY = e.clientY - target.getBoundingClientRect().y

        scaledX = clickedX / target.width * target.naturalWidth
        scaledY = clickedY / target.height * target.naturalHeight

        onClick(scaledX, scaledY)
    })
}

/* displaying div based on dropdown selection */

function displayBasedOnSelection(selectorId) {
    var select = document.getElementById(selectorId)
    for (var i = 1; i < select.children.length; i++) {
        document.getElementById(select.children[i].value).style.display = 'none'
    }
    document.getElementById(selectorId).addEventListener('change', function(e) {
        for (var i = 0; i < e.target.children.length; i++) {
            document.getElementById(e.target.children[i].value).style.display = 'none'
        }
        document.getElementById(e.target.value).style.display = 'block'
        // var idsToHide = e.target.children.array.map(t => t.value)
        // var idToShow = e.target.value
        // idsToHide.array.forEach(element => {
        //     element.style.visibility = 'hidden'
        // });
        // foreach(e )
        // document.getElementById(idToShow).style.visibility = 'visible'
        // console.log(e.target.value)
    })
}

window.onload = function() {
    trackImageClick("clickableImage1", function(x, y) {
        document.getElementById("imagePoint1").innerHTML = "Clicked position = " + x + ", " + y
    })
    displayBasedOnSelection("selectionVariable")
}
