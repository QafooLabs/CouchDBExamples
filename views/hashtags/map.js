function(doc) {
    if (doc.type == "tweet") {
        var regularExpression = /#([a-zA-Z0-9]+)/g,
            match = null;

        while (match = regularExpression.exec(doc.text)) {
            emit(match[1], 1);
        }
    }
}
