function (doc) {
    if (doc.type == "post_comment") {
        var date = new Date(doc.date);
        emit([
                date.getFullYear(),
                date.getMonth() + 1,
                date.getDate(),
                date.getHours(),
                date.getMinutes(),
                date.getSeconds()
            ], 1);
    }
}
