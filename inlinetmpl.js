_.templateSettings = {
    evaluate : /\{%([\s\S]+?)%\}/g,
    interpolate : /\{\{([\s\S]+?)\}\}/g,
    escape : /\{\{-([\s\S]+?)\}\}>/g
};
$(function(){
    $('*[template]').each(function(){
        var self = $(this);
        var t = self.clone().wrap('<div/>').parent().html();
        t = t.replace(/&gt;/g, '>').replace(/&lt;/g, '<');
        self.replaceWith($(_.template(t, templateContext)));
    });
});

