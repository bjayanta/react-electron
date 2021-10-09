function index(req, res) {
    const posts = "Posts list";
    res.send(posts);
}

module.exports = {
    index: index
}