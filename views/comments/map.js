function(doc) {
    if (doc.type == "post_comment") {
        emit(doc.post, 1);
    }
}
