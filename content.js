"use strict";

[].slice.call(document.styleSheets).forEach(r => {
	if (r.rules == null)
		console.log("rules == null (" + r.href + ")");
	if (r.cssRules == null)
		console.log("cssRules == null (" + r.href + ")");
});
