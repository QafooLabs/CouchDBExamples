function(doc) {
    if (doc.type == "post" ||
        doc.type == "post_comment") {
        var date = new Date(doc.date);
        emit([doc.user, doc.type, date.getTime()], null);
    }
}
