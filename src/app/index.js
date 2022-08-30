app.controller("index",($scope)=>{
    var vm = $scope;
    vm.title = "Jspreadsheet v4"
    vm.data = [
        {
            "car": "Jazz",
            "make": "Honda",
            "available": "",
            "photo": "",
            "stock": false,
            "quantity": "",
            "price": "",
            "amount": "",
            "color": "",
        },
        {
            "car": "Civic",
            "make": "Honda",
            "available": "",
            "photo": "",
            "stock": false,
            "quantity": "",
            "price": "",
            "amount": "",
            "color": "",
        }
    ];

    vm.getData=()=>{
        console.log(vm.data);
    }

    vm.jIns = {};
    vm.jConfig= {
        tableOverflow: true,
        onCellChange:(ins, cell, colName, data)=>{
            data.amount = parseFloat(data.quantity.replaceAll('.',''))*parseFloat(data.price.replaceAll('.',''));

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
                width:80,
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
})