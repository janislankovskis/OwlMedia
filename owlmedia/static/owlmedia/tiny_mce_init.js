tinyMCE.create('tinymce.plugins.owlmedia', {
        /**
         * Initializes the plugin, this will be executed after the plugin has been created.
         * This call is done before the editor instance has finished it's initialization so use the onInit event
         * of the editor instance to intercept that event.
         *
         * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
         * @param {string} url Absolute URL to where the plugin is located.
         */
        init : function(ed, url) {
                url = '/admin/owlmedia/';
                // Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
                ed.addCommand('owlmedia', function() {
                        ed.windowManager.open({
                                file : url,
                                width : 620 + ed.getLang('example.delta_width', 0),
                                height : 420 + ed.getLang('example.delta_height', 0),
                                inline : 1,
                                popup_css : false
                        }, {
                                plugin_url : url, // Plugin absolute URL
                                some_custom_arg : 'custom arg' // Custom argument
                        });
                });

                // Register example button
                ed.addButton('owlmedia', {
                        title : 'Owlmedia',
                        cmd : 'owlmedia',
                        image : '/static/owlmedia/img/owlmedia.gif'
                });

                // Add a node change handler, selects the button in the UI when a image is selected
                ed.onNodeChange.add(function(ed, cm, n) {
                        cm.setActive('owlmedia', n.nodeName == 'IMG');
                });
        },

        getInfo : function() {
                return {
                        longname : 'Owlmedia',
                        author : 'Janis Lankovskis github.com/janislankovskis',
                        authorurl : 'http://github.com/janislankovskis',
                        infourl : 'http://github.com/janislankovskis/owlmedia',
                        version : "1.0"
                };
        }
});

// Register plugin
tinyMCE.PluginManager.add('owlmedia', tinyMCE.plugins.owlmedia);

tinyMCE.init({
        // General options
        mode : "textareas",
        theme : "advanced",
        plugins : "preview,table,save,inlinepopups,fullscreen,paste,owlmedia",
        //"autolink,lists,spellchecker,pagebreak,style,layer,
        //table,save,advhr,advimage,advlink,emotions,iespell,
        //,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,
        //fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template",

        // Theme options
        theme_advanced_buttons1 : "save,newdocument,|,bold,italic,strikethrough,|,justifyleft,justifycenter,justifyright,|,styleselect,formatselect,bullist,numlist,pasteword,removeformat,cleanup,code,|,preview,fullscreen",
        theme_advanced_buttons2 : "tablecontrols,|,outdent,indent,blockquote,|,link,unlink,anchor,|,owlmedia",
        theme_advanced_buttons3 : "",
        theme_advanced_buttons4 : "",
        theme_advanced_toolbar_location : "top",
        theme_advanced_toolbar_align : "left",
        theme_advanced_statusbar_location : "bottom",
        theme_advanced_resizing : true,

        extended_valid_elements: "iframe[align<bottom?left?middle?right?top|class|frameborder|height|id|longdesc|marginheight|marginwidth|name|scrolling<auto?no?yes|src|style|title|width]",
        relative_urls : false ,
        remove_script_host : false
  

});