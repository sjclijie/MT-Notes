/**
 * Created by thonatos on 14/12/19.
 */

var _docRepo = require('./config').conf.docRepo;
var _obj = require('../utils/obj');

var CODING = {
    host: 'https://coding.net/api',
    port: 443,
    path: 'user/MTTUSER/project/MTTPROJECT/git/'
};

//https://coding.net/api/user/thonatos/project/Mt.Notes.And.Documents/git/treeinfo/master/

var GITHUB = {
    host: 'api.github.com',
    port: 443,
    path: '/repos/MTTUSER/MTTPROJECT/contents/'
};


exports.create = {
    docTemplate : function () {
        return {
            templateType : '',
            templateName : ''
        };
    },
    docRepo: function () {

        if(_docRepo.GC === "G"){

            var _g = _obj.cloneObj(GITHUB);

            _g.path = _g.path.replace(/MTTUSER/g,_docRepo.github.doc_user);
            _g.path = _g.path.replace(/MTTPROJECT/g,_docRepo.github.doc_project);

            return _g;

        }else{

            var _c = GITHUB;
            _c.path = _c.path.replace(/MTTUSER/g,_docRepo.coding.doc_user);
            _c.path = _c.path.replace(/MTTPROJECT/g,_docRepo.coding.doc_project);

            return _c;
        }
    }
};
