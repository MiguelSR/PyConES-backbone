define([
    'backbone',
    'handlebars',
    'text!talks/templates/TalkEditTemplate.html'
], function(Backbone, Handlebars,
            talkEditTemplate) {
    "use strict";

    return Backbone.View.extend({
        className: "media",
        template: Handlebars.compile(talkEditTemplate),
        events: {
            'submit form': 'onSubmitForm'
        },
        initialize: function(options) {
            this.model = options.model;
        },
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        onSubmitForm: function(e) {
            e.preventDefault();
            var target = $(e.target);
            this.model.set('description', target.find('#id_description').val());
            this.model.set('name', target.find('#id_name').val());
            this.model.save();
        }
    });
});
