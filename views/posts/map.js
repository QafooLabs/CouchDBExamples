function (doc) {
    if (doc.type == "post") {
        var date = new Date(doc.date);
        emit([date.getTime()], null);
    }
}
