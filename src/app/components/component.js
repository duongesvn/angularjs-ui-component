
    // restrict
    // 'A' - only matches attribute name
    // 'E' - only matches element name
    // 'C' - only matches class name
    // 'M' - only matches comment


    // scope
    // ‘@’ – Text binding / one-way binding
    // ‘=’ – Direct model binding / two-way binding
    // ‘&’ – Behavior binding / Method binding


app.directive('jexcelv4',[
    '$filter',
    ()=>({
        restrict: 'A',
        require: '?ngModel',
        scope:{
            cmIns:          '=cmIns',
            cmConfig:       '=cmConfig',
        },
        link: function (scope, element, attrs, ngModel) {
            var table;
            var uuidv4 = this.uuidv4;
            var toNumber = this.toNumber;
            var fixData = this.fixData;
            scope.$watch(()=>{
                for (let e of ngModel.$modelValue) {
                    if(!e.uuid) e.uuid=this.uuidv4();
                    fixData(e, scope.cmConfig.columns);
                }
                table.setData(ngModel.$modelValue);
            })

            //#region jexcel event
            var changed = function(instance, cell, x, y, value) {
                var cellName = jexcel.getColumnNameFromId([x,y]);
                let newData = instance.jexcel.getJsonRow(y);
                let cellInfo = scope.cmConfig.columns[parseInt(x)];
                var cellName = cellInfo.name||x;

                if(cellInfo.type == 'numeric')
                    ngModel.$modelValue[parseInt(y)][cellName] = toNumber(value);
                else 
                    ngModel.$modelValue[parseInt(y)][cellName] = value;
                
                // callBack
                if(scope.cmConfig.onCellChange) scope.cmConfig.onCellChange(instance, cell, cellName, ngModel.$modelValue[parseInt(y)]);
            }
             
            var beforeChange = function(instance, cell, x, y, value) {
                var cellName = jexcel.getColumnNameFromId([x,y]);
            }
             
            var insertedRow = function(instance) {
                let item = {uuid:uuidv4()};
                ngModel.$modelValue.push(item);
            }
             
            var insertedColumn = function(instance) {
                
            }
             
            var deletedRow = function(instance) {
                ngModel.$modelValue.splice(0, ngModel.$modelValue.length);

                let ndata = instance.jexcel.getJson();
                for(let item of ndata){
                    ngModel.$modelValue.push(item);
                }
                if(ndata.length==0){
                    let item = {uuid:uuidv4()};
                    ngModel.$modelValue.push(item);
                }
            }
             
            var deletedColumn = function(instance) {
            }
             
            var sort = function(instance, cellNum, order) {
                var order = (order) ? 'desc' : 'asc';
            }
             
            var resizeColumn = function(instance, cell, width) {
            }
             
            var resizeRow = function(instance, cell, height) {;
            }
             
            var selectionActive = function(instance, x1, y1, x2, y2, origin) {
                var cellName1 = jexcel.getColumnNameFromId([x1, y1]);
                var cellName2 = jexcel.getColumnNameFromId([x2, y2]);
            }
             
            var loaded = function(instance) {
                
            }
             
            var moveRow = function(instance, from, to) {
            }
             
            var moveColumn = function(instance, from, to) {
                
            }
             
            var blur = function(instance) {
                
            }
             
            var focus = function(instance) {
                
            }
             
            var paste = function(data) {
                
            }

            //#endregion
            let _event = {
                onchange: changed,
                onbeforechange: beforeChange,
                oninsertrow: insertedRow,
                oninsertcolumn: insertedColumn,
                ondeleterow: deletedRow,
                ondeletecolumn: deletedColumn,
                onselection: selectionActive,
                onsort: sort,
                onresizerow: resizeRow,
                onresizecolumn: resizeColumn,
                onmoverow: moveRow,
                onmovecolumn: moveColumn,
                onload: loaded,
                onblur: blur,
                onfocus: focus,
                onpaste: paste,
                style: {
                    A1:'background-color: orange;',
                    B1:'background-color: orange;',
                },
            }
            let config ={...scope.cmConfig};
            Object.assign(config, _event);
            config.columns.push({
                type: 'hidden',
                name: 'uuid'
            });
            scope.cmIns =table = jspreadsheet(element[0], config);
            console.log(table);
        },

        uuidv4:()=>{
            return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
              (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            );
        },
        toNumber:(data)=> parseFloat(data.replace(/[\.]+/,'').replace(',','.')),
        fixData:(data, columns)=>{
            var e = data;
            for (let index = 0; index < columns.length; index++) {
                const colInfo = columns[index];
                if(colInfo.type=='numeric' 
                    && e[colInfo.name||`${index}`] 
                    && (typeof e[colInfo.name||`${index}`]) == 'string'){
                    e[colInfo.name||`${index}`] = this.toNumber(e[colInfo.name||`${index}`]);
                }
            }
        },

        

    })
]);


app.directive('sumoselect',[
    '$filter',
    ()=>({
        restrict: 'A',
        require: '?ngModel',
        scope:{
            ngModel:            '=',
            cmData:             '=',
            cmConfig:           '=',
            sumoInitialized:    '&',
            sumoOpening:        '&',
            sumoOpened:         '&',
            sumoClosing:        '&',
            sumoClosed:         '&',
            sumoCnloaded:       '&',

        },
        link: (scope, element, attrs, ngModel) => {
            

            scope.$watch('cmData',()=>{
                // for(let item of scope.cmData){
                //     element[0].sumo.add(item.value, item.text)
                // }
                reloadCb(scope.cmData);
                element[0].sumo.selectItem(scope.ngModel)
            });
            scope.$watch('ngModel',(data)=>{
                element[0].sumo.selectItem(data)
            });
            
            //#region func
            var sd;
            var reloadCb = (data)=>{
                clearTimeout(sd);
                sd = setTimeout(() => {
                    element[0].sumo.removeAll();
                    element[0].sumo.add('', 'Bỏ chọn');
                    for(let item of data){
                        element[0].sumo.add(item.value, item.text);
                    }
                    
                }, 500);
            };

            //#endregion

            
            var cmConfig = {...scope.cmConfig};
            cmConfig.searchFn=(haystack, needle, el)=>{
                if(cmConfig.searchReload)
                    cmConfig.searchReload(needle, reloadCb);
                else
                {
                    let filterData = scope.cmData.filter(c=> c.value.toLowerCase().indexOf(needle.toLowerCase())!=-1 || c.text.toLowerCase().indexOf(needle.toLowerCase())!=-1);
                    reloadCb(filterData);
                }
            }

            $(element).SumoSelect(cmConfig);
            // // Drop down initialized.
            // sumo:initialized
            // // Drop down opening
            // sumo:opening
            // // Drop down opened
            // sumo:opened
            // // Drop down closing
            // sumo:closing
            // // Drop down closed.
            // sumo:closed
            // // Drop down unloaded.
            // sumo:unloaded
            

            $('select.SlectBox').on('sumo:initialized', scope.sumoInitialized);
            $('select.SlectBox').on('sumo:opening', scope.sumoOpening);
            $('select.SlectBox').on('sumo:opened', scope.sumoOpened);
            $('select.SlectBox').on('sumo:closing', scope.sumoClosing);
            $('select.SlectBox').on('sumo:closed', scope.sumoClosed);
            $('select.SlectBox').on('sumo:unloaded', scope.sumoCnloaded);
            console.log(element[0].sumo);
        }
    })
])


//#region  tree view
app.directive('treeView',[
    '$filter','ssTemplate',
    ($compile, ssTemplate)=>({
        restrict: 'EA',
        require: '?ngModel',
        scope:{
            cmData:             '=',
            cmConfig:           '=',
        },
        link: (scope, element, attrs, ngModel) => {
            ssTemplate.treeView(`</br>`)
            scope.tagName = element[0].tagName;
            if(element[0].tagName == 'TABLE'){
                scope.tagName = element[0].tagName;
                scope.thead = [];

                for(let key in scope.cmData[0]){
                    if(typeof(scope.cmData[0][key]) == 'object' 
                        || typeof(scope.cmData[0][key]) == 'function') continue;
                    scope.thead.push(key);
                }
            }
            if(element[0].tagName == 'TBODY'){

            }

        },
        templateUrl:'/app/components/tree-view.html'
        //template:'<tree-view-node ng-repeat="item in cmData" node="item" ng-click="cmConfig.nodeClick(item)"></tree-view-node>'
    })
])

app.directive('treeViewNode',[
    '$filter','ssTemplate',
    ($compile, ssTemplate)=>({
        restrict: 'EA',
        scope:{
            $node:              '=node',
            cmNodeClick:        '&'
        },
        link: (scope, element, attrs, ngModel) => {
            scope.hasChild = (scope.$node?.children != null && scope.$node?.children.length > 0);
            console.log(ssTemplate.treeView());
        },
        templateUrl:'/app/components/tree-view-node.html'
        // template:template_treeViewNode

    })
])

var template_treeViewNode = `
    <div>
        <h4>{{$node.title}}</h4>
    </div>
    <div ng-if="hasChild">
        <tree-view-node ng-repeat="item in $node.children" node="item" cm-node-click="cmNodeClick(item)></tree-view-node>
    </div>
`;

//#endregion