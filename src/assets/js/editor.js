(function (richText, element, editor) {
    const name = 'my-plugin/my-plugin';
    richText.registerFormatType(name, {
        title: my_plugin_obj.title,
        tagName: 'span',
        className: my_plugin_obj.class,
        edit: function ({isActive, value, onChange}) {
            return element.createElement(editor.RichTextToolbarButton, {
                icon: 'admin-customizer',
                title: my_plugin_obj.title,
                onClick: function () {
                    onChange(richText.toggleFormat(value, {
                        type: name
                    }));
                },
                isActive: isActive,
            });
        },
    });
}(
    window.wp.richText,
    window.wp.element,
    window.wp.editor
));