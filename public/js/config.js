/**
 * Created by thonatos on 14/11/27.
 */

var app_config = {
    dev: true,
    pro: true,
    bse: function (url) {
        var _baseTag = document.createElement("base");
        _baseTag.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(_baseTag);
    }
};

var sea_config = {
    bse: '',
    app: '',
    suffix: ''
};

<!-- We Add dynamic base attribute by run_env-->

if (app_config.pro) {

    app_config.bse('/');
    sea_config.suffix = '';

} else {

    app_config.bse('/');
    sea_config.suffix = '-debug';

}

<!-- We use different app-version by run_env-->

if (app_config.dev) {

    sea_config.app = '/public/js/src/page/' + TMPL + sea_config.suffix;
    sea_config.base = '/public/js/spm_modules/';

} else {

    sea_config.app = '/public/js/dist/vbigger/0.0.1/src/page/' + TMPL + sea_config.suffix;
    sea_config.base = '/public/js/dist';

}

seajs.config({base: sea_config.bse});

seajs.use(sea_config.app, function (page) {
    page.init();
});
