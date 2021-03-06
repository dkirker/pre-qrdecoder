var HelpAssistant = Class.create({
	initialize: function() {
		this.backTapHandler = this.backTapHandler.bind(this);
	},

	setup: function() {
		this.controller.setupWidget(Mojo.Menu.appMenu, StageAssistant.appMenuAttributes, {
			visible: true,
			items: [ Mojo.Menu.editItem]
		});

		this.controller.listen('back', Mojo.Event.tap, this.backTapHandler);
	},

	activate: function(event) {
		/* put in event handlers here that should only be in effect when this scene is active. For
		   example, key handlers that are observing the document */
	},

	deactivate: function(event) {
		/* remove any event handlers you added in activate and do any other cleanup that should happen before
		   this scene is popped or another scene is pushed on top */
	},

	cleanup: function(event) {
		/* this function should do any cleanup needed before the scene is destroyed as 
		   a result of being popped off the scene stack */
		this.controller.stopListening('back', Mojo.Event.tap, this.backTapHandler);
	},

	backTapHandler: function(event) {
		this.controller.stageController.popScene();
	},
});
