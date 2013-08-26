function(doc) {
    if (doc.type == "post" ) {
        emit([doc._id, 0], null);
    }

    if (doc.type == "post_comment") {
        var date = new Date(doc.date);
        emit([doc.post, date.getTime()], null);
    }
}
