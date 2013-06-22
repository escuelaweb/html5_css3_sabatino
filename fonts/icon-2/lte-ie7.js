/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'whhglyphs\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-oneupalt' : '&#xf3b6;',
			'icon-wizard3' : '&#xf337;',
			'icon-darthvader' : '&#xf34a;',
			'icon-spaceinvaders' : '&#xf352;',
			'icon-fort' : '&#xf400;',
			'icon-mickeymouse' : '&#xf37a;',
			'icon-cupcake' : '&#xf35b;',
			'icon-toiletpaper' : '&#xf384;',
			'icon-submarine' : '&#xf373;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};