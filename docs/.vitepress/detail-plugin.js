const containerMdExtend = (md) => ({
    validate: function (params) {
        return params.trim().match(/^spoiler\s+(.*)$/);
    },

    render: function (tokens, idx) {
        var m = tokens[idx].info.trim().match(/^spoiler\s+(.*)$/);

        if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
        } else {
        // closing tag
        return '</details>\n';
        }
    },
});

module.exports = containerMdExtend;