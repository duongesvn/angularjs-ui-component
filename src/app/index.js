app.controller("index",($scope)=>{
    var vm = $scope;
    vm.title = "Jspreadsheet v4"
    
    //#region jspre
    vm.data = [
        {},{},{}
    ];

    vm.getData=()=>{
        console.log(vm.data);
    }

    vm.jIns = {};
    vm.jConfig= {
        tableOverflow: true,
        onCellChange:(ins, cell, colName, data)=>{
            if(data.quantity && data.price)
                data.amount = data.quantity * data.price;
            vm.getData();
            $scope.$apply()
        },
        columns:[
            {
                type: 'text',
                title:'Car',
                name:'car',
                width:90
            },
            {
                type: 'dropdown',
                title:'Make',
                name:'make',
                width:120,
                source:[
                    "Alfa Romeo",
                    "Audi",
                    "Bmw",
                    "Chevrolet",
                    "Chrystler",
                    // (...)
                ]
            },
            {
                type: 'calendar',
                title:'Available',
                name:'available',
                width:120
            },
            {
                type: 'image',
                title:'Photo',
                name:'photo',
                width:120
            },
            {
                type: 'checkbox',
                title:'Stock',
                name:'stock',
                width:80
            },
            {
                type: 'numeric',
                title:'Quantity',
                name:'quantity',
                mask:'#.##,00',
                width:80,
                decimal:','
            },
            {
                type: 'numeric',
                title:'Price',
                name:'price',
                mask:'#.##,00 đ',
                width:80,
                decimal:','
            },
            {
                type: 'numeric',
                title:'Amount',
                name:'amount',
                mask:'#.##,00 đ',
                width:120,
                decimal:','
            },
            {
                type: 'color',
                name: 'color',
                width:80,
                render:'square',
            },
        ]
    }
    //#endregion

    //#region sumoselect
    vm.sumoModel ='dd';
    vm.setSumoData =(d)=>{
        vm.sumoModel = d;
    }
    vm.sumoConfig = {
        // placeholder: 'Select Here',
        // csvDispCount: 3,
        // captionFormat: '{0} Selected',
        // captionFormatAllSelected: ''{0} all selected!'',
        // floatWidth: 500,
        // forceCustomRendering: false,
        // nativeOnDevice: ['Android', 'BlackBerry', 'iPhone', 'iPad', 'iPod', 'Opera Mini', 'IEMobile', 'Silk'],
        // outputAsCSV : false,
        // csvSepChar : ',', 
        // okCancelInMulti: true, 
        // isClickAwayOk: false,
        // triggerChangeCombined : true,
        // selectAll : false,
        // selectAllPartialCheck : true,
        // noMatch : 'No matches for "{0}"',
        // prefix : '',
        // locale :  ['OK', 'Cancel', 'Select All'],
        // up : 'false',
        // showTitle : 'true',
        // max : null,
        // renderLi : (li, originalOption) => li,

        search : true,
        searchText : 'Search...',
        searchReload: (keyword, cb)=>{
            cb([
                {value:'b', text:'Số B'},
                {value:'c', text:'Số c'},
            ])
        },
        // searchFn : function(haystack, needle, el){ 
        //     console.log(haystack);
        //     console.log(needle);
        //     console.log(el);
        //  },
        
    }
    vm.sumoData = [
        {value:'a', text:'Số A'},
        {value:'b', text:'Số B'},
        {value:'c', text:'Số c'},
        {value:'dd', text:'Số dd'},
        {value:'aa', text:'Số aa'},
        {value:'h', text:'Số h'},
    ];


    //#endregion
})