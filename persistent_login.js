/**
 * Plugin which provides a persistent login functionality.
 * Also known as "remembery me" or "stay logged in" function.
 * 
 * The rendererd form needs to provide at least:
 * - <input type="checkbox" name="_ifpl" id="_ifpl" value="1">
 *
 * @version @package_version@
 * @author insaneFactory, Manuel Freiholz
 * @website http://manuel.insanefactory.com/
 * @requires Client side: ECMAScript 6 (ES6)
 */
$(document).ready(function () {
	if (window.rcmail) {

		rcmail.addEventListener('init', function () {

			var html = '';
			var parentElementSelector = 'form';
			var skin = window.rcmail.env.skin;

			// Insert different HTML for different skins.
			if (skin == 'classic' || skin == 'larry') {
				parentElementSelector = '#login-form form table tbody';
				html = `
					<tr>
						<td class="title">` + rcmail.gettext('ifpl_rememberme', 'persistent_login') + `</td>
						<td><input type="checkbox" id="_ifpl" name="_ifpl" value="1"></td>
					</tr>
				`;
			}
			else if (skin == 'elastic') {
				parentElementSelector = '#login-form table tbody';
				html = `
					<tr class="form-group row">
						<td class="title" style="display: none;">
							<label for="rcmloginuser">Username</label>
						</td>
						<td class="input input-group input-group-lg">
							<div class="custom-control custom-switch">
								<input type="checkbox" class="custom-control-input" id="_ifpl" name="_ifpl" value="1">
								<label class="custom-control-label" for="_ifpl">` + rcmail.gettext('ifpl_rememberme', 'persistent_login') + `</label>
							</div>
						</td>
					</tr>
				`;
			}
			// The default HTML content, for all unknown skins.
			else {
				html = `
					<div id="ifplcontainer">
						<input id="_ifpl" name="_ifpl" type="checkbox"  value="1">
						<label for="_ifpl" style="display: inline-block;">` + rcmail.gettext('ifpl_rememberme', 'persistent_login') + `</label>
					</div>
				`;
			}

			// apppend "html" with checkbox to document.
			var element = $(parentElementSelector);
			if (element && element.length !== 0) {
				element.append(html);
			}
			else {
				$('form').append(html);
			}
		});

	} // if (window.rcmail)
});
