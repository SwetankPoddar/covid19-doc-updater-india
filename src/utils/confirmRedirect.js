function confirm() {
    var ask = window.confirm("Are you sure you want to delete this post?");
    if (ask) {
        window.location.href = "window-location.html";
    }
}

export default confirm;