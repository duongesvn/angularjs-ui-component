
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
])