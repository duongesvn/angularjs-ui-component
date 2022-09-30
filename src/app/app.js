var app = angular.module('MYAPP',[]);
app.factory('ssTemplate', [function() {
    var treeViewTemp = '<a>Tree view template</a>'

    var treeView = function(value) {
        if(value) treeViewTemp = value;
        return treeViewTemp;
    };
  
    return {
        treeView
    };
}]);