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
    vm.sumoModel ='BAG';
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
        // searchReload: (keyword, cb)=>{
        //     let fData = vm.sumoData.filter(c=>c.text.toLowerCase().indexOf(keyword.toLowerCase())!=-1);
        //     cb(fData);
        // },
        // searchFn : function(haystack, needle, el){ 
        //     console.log(haystack);
        //     console.log(needle);
        //     console.log(el);
        //  },
        
    }
    vm.sumoData = [
        {
            "value": "AMP",
            "text": "(AMP) A",
            "id": "AMP",
            "name": "(AMP) A",
            "UnitName": "A"
        },
        {
            "value": "ATM",
            "text": "(ATM) át",
            "id": "ATM",
            "name": "(ATM) át",
            "UnitName": "át"
        },
        {
            "value": "BAG",
            "text": "(BAG) Túi",
            "id": "BAG",
            "name": "(BAG) Túi",
            "UnitName": "Túi"
        },
        {
            "value": "BAO",
            "text": "(BAO) BAO",
            "id": "BAO",
            "name": "(BAO) BAO",
            "UnitName": "BAO"
        },
        {
            "value": "BAR",
            "text": "(BAR) Thanh",
            "id": "BAR",
            "name": "(BAR) Thanh",
            "UnitName": "Thanh"
        },
        {
            "value": "BAS",
            "text": "(BAS) Giỏ",
            "id": "BAS",
            "name": "(BAS) Giỏ",
            "UnitName": "Giỏ"
        },
        {
            "value": "BIN",
            "text": "(BIN) Thùng",
            "id": "BIN",
            "name": "(BIN) Thùng",
            "UnitName": "Thùng"
        },
        {
            "value": "BLI",
            "text": "(BLI) Vỉ",
            "id": "BLI",
            "name": "(BLI) Vỉ",
            "UnitName": "Vỉ"
        },
        {
            "value": "BOL",
            "text": "(BOL) Bình",
            "id": "BOL",
            "name": "(BOL) Bình",
            "UnitName": "Bình"
        },
        {
            "value": "BOT",
            "text": "(BOT) Chai",
            "id": "BOT",
            "name": "(BOT) Chai",
            "UnitName": "Chai"
        },
        {
            "value": "BOX",
            "text": "(BOX) Hộp",
            "id": "BOX",
            "name": "(BOX) Hộp",
            "UnitName": "Hộp"
        },
        {
            "value": "BUN",
            "text": "(BUN) Bó",
            "id": "BUN",
            "name": "(BUN) Bó",
            "UnitName": "Bó"
        },
        {
            "value": "CA",
            "text": "(CA) Ca",
            "id": "CA",
            "name": "(CA) Ca",
            "UnitName": "Ca"
        },
        {
            "value": "CAN",
            "text": "(CAN) Can",
            "id": "CAN",
            "name": "(CAN) Can",
            "UnitName": "Can"
        },
        {
            "value": "CEL",
            "text": "(CEL) °C",
            "id": "CEL",
            "name": "(CEL) °C",
            "UnitName": "°C"
        },
        {
            "value": "CHI",
            "text": "(CHI) Chiếc",
            "id": "CHI",
            "name": "(CHI) Chiếc",
            "UnitName": "Chiếc"
        },
        {
            "value": "CMK",
            "text": "(CMK) cm3",
            "id": "CMK",
            "name": "(CMK) cm3",
            "UnitName": "cm3"
        },
        {
            "value": "CMV",
            "text": "(CMV) cm2",
            "id": "CMV",
            "name": "(CMV) cm2",
            "UnitName": "cm2"
        },
        {
            "value": "CO",
            "text": "(CO) Công",
            "id": "CO",
            "name": "(CO) Công",
            "UnitName": "Công"
        },
        {
            "value": "CTM",
            "text": "(CTM) cm",
            "id": "CTM",
            "name": "(CTM) cm",
            "UnitName": "cm"
        },
        {
            "value": "DAY",
            "text": "(DAY) Ngày",
            "id": "DAY",
            "name": "(DAY) Ngày",
            "UnitName": "Ngày"
        },
        {
            "value": "DEC",
            "text": "(DEC) dm",
            "id": "DEC",
            "name": "(DEC) dm",
            "UnitName": "dm"
        },
        {
            "value": "DEE",
            "text": "(DEE) Sâu",
            "id": "DEE",
            "name": "(DEE) Sâu",
            "UnitName": "Sâu"
        },
        {
            "value": "DET",
            "text": "(DET) Chi tiết",
            "id": "DET",
            "name": "(DET) Chi tiết",
            "UnitName": "Chi tiết"
        },
        {
            "value": "DM2",
            "text": "(DM2) dm2",
            "id": "DM2",
            "name": "(DM2) dm2",
            "UnitName": "dm2"
        },
        {
            "value": "DZN",
            "text": "(DZN) Tá",
            "id": "DZN",
            "name": "(DZN) Tá",
            "UnitName": "Tá"
        },
        {
            "value": "EBAG",
            "text": "(EBAG) BAG",
            "id": "EBAG",
            "name": "(EBAG) BAG",
            "UnitName": "BAG"
        },
        {
            "value": "EBOX",
            "text": "(EBOX) BOX",
            "id": "EBOX",
            "name": "(EBOX) BOX",
            "UnitName": "BOX"
        },
        {
            "value": "EKLO",
            "text": "(EKLO) KLO",
            "id": "EKLO",
            "name": "(EKLO) KLO",
            "UnitName": "KLO"
        },
        {
            "value": "EPAI",
            "text": "(EPAI) PAI",
            "id": "EPAI",
            "name": "(EPAI) PAI",
            "UnitName": "PAI"
        },
        {
            "value": "FAR",
            "text": "(FAR) F",
            "id": "FAR",
            "name": "(FAR) F",
            "UnitName": "F"
        },
        {
            "value": "Feet",
            "text": "(Feet) Feet",
            "id": "Feet",
            "name": "(Feet) Feet",
            "UnitName": "Feet"
        },
        {
            "value": "FIL",
            "text": "(FIL) Tệp",
            "id": "FIL",
            "name": "(FIL) Tệp",
            "UnitName": "Tệp"
        },
        {
            "value": "GRA",
            "text": "(GRA) g",
            "id": "GRA",
            "name": "(GRA) g",
            "UnitName": "g"
        },
        {
            "value": "GRI",
            "text": "(GRI) Vỉ",
            "id": "GRI",
            "name": "(GRI) Vỉ",
            "UnitName": "Vỉ"
        },
        {
            "value": "GRM",
            "text": "(GRM) G",
            "id": "GRM",
            "name": "(GRM) G",
            "UnitName": "G"
        },
        {
            "value": "HEC",
            "text": "(HEC) Hz",
            "id": "HEC",
            "name": "(HEC) Hz",
            "UnitName": "Hz"
        },
        {
            "value": "HESO",
            "text": "(HESO) Hệ số",
            "id": "HESO",
            "name": "(HESO) Hệ số",
            "UnitName": "Hệ số"
        },
        {
            "value": "HOU",
            "text": "(HOU) Giờ",
            "id": "HOU",
            "name": "(HOU) Giờ",
            "UnitName": "Giờ"
        },
        {
            "value": "JAR",
            "text": "(JAR) Bình",
            "id": "JAR",
            "name": "(JAR) Bình",
            "UnitName": "Bình"
        },
        {
            "value": "KLM",
            "text": "(KLM) Km",
            "id": "KLM",
            "name": "(KLM) Km",
            "UnitName": "Km"
        },
        {
            "value": "KLO",
            "text": "(KLO) Kg",
            "id": "KLO",
            "name": "(KLO) Kg",
            "UnitName": "Kg"
        },
        {
            "value": "KWA",
            "text": "(KWA) Kwh",
            "id": "KWA",
            "name": "(KWA) Kwh",
            "UnitName": "Kwh"
        },
        {
            "value": "LO",
            "text": "(LO) Lô",
            "id": "LO",
            "name": "(LO) Lô",
            "UnitName": "Lô"
        },
        {
            "value": "Lon",
            "text": "(Lon) Lon",
            "id": "Lon",
            "name": "(Lon) Lon",
            "UnitName": "Lon"
        },
        {
            "value": "LTR",
            "text": "(LTR) Lít",
            "id": "LTR",
            "name": "(LTR) Lít",
            "UnitName": "Lít"
        },
        {
            "value": "ME",
            "text": "(ME) Mẻ",
            "id": "ME",
            "name": "(ME) Mẻ",
            "UnitName": "Mẻ"
        },
        {
            "value": "MET",
            "text": "(MET) m",
            "id": "MET",
            "name": "(MET) m",
            "UnitName": "m"
        },
        {
            "value": "MII",
            "text": "(MII) Tấn",
            "id": "MII",
            "name": "(MII) Tấn",
            "UnitName": "Tấn"
        },
        {
            "value": "MIL",
            "text": "(MIL) mm",
            "id": "MIL",
            "name": "(MIL) mm",
            "UnitName": "mm"
        },
        {
            "value": "MLI",
            "text": "(MLI) mm2",
            "id": "MLI",
            "name": "(MLI) mm2",
            "UnitName": "mm2"
        },
        {
            "value": "MLT",
            "text": "(MLT) Mi-li-lít",
            "id": "MLT",
            "name": "(MLT) Mi-li-lít",
            "UnitName": "Mi-li-lít"
        },
        {
            "value": "MLV",
            "text": "(MLV) mm3",
            "id": "MLV",
            "name": "(MLV) mm3",
            "UnitName": "mm3"
        },
        {
            "value": "MOL",
            "text": "(MOL) mol",
            "id": "MOL",
            "name": "(MOL) mol",
            "UnitName": "mol"
        },
        {
            "value": "MOT",
            "text": "(MOT) Tháng",
            "id": "MOT",
            "name": "(MOT) Tháng",
            "UnitName": "Tháng"
        },
        {
            "value": "MTK",
            "text": "(MTK) m2",
            "id": "MTK",
            "name": "(MTK) m2",
            "UnitName": "m2"
        },
        {
            "value": "MTQ",
            "text": "(MTQ) m3",
            "id": "MTQ",
            "name": "(MTQ) m3",
            "UnitName": "m3"
        },
        {
            "value": "MTR",
            "text": "(MTR) Mét",
            "id": "MTR",
            "name": "(MTR) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "MUN",
            "text": "(MUN) Phút",
            "id": "MUN",
            "name": "(MUN) Phút",
            "UnitName": "Phút"
        },
        {
            "value": "OAT",
            "text": "(OAT) W",
            "id": "OAT",
            "name": "(OAT) W",
            "UnitName": "W"
        },
        {
            "value": "OHM",
            "text": "(OHM) Ω",
            "id": "OHM",
            "name": "(OHM) Ω",
            "UnitName": "Ω"
        },
        {
            "value": "PAC",
            "text": "(PAC) Gói",
            "id": "PAC",
            "name": "(PAC) Gói",
            "UnitName": "Gói"
        },
        {
            "value": "PAI",
            "text": "(PAI) Đôi",
            "id": "PAI",
            "name": "(PAI) Đôi",
            "UnitName": "Đôi"
        },
        {
            "value": "PAR",
            "text": "(PAR) Đoạn",
            "id": "PAR",
            "name": "(PAR) Đoạn",
            "UnitName": "Đoạn"
        },
        {
            "value": "PCS",
            "text": "(PCS) Cái",
            "id": "PCS",
            "name": "(PCS) Cái",
            "UnitName": "Cái"
        },
        {
            "value": "POT",
            "text": "(POT) Chậu",
            "id": "POT",
            "name": "(POT) Chậu",
            "UnitName": "Chậu"
        },
        {
            "value": "PRE",
            "text": "(PRE) %",
            "id": "PRE",
            "name": "(PRE) %",
            "UnitName": "%"
        },
        {
            "value": "QUA",
            "text": "(QUA) Quí",
            "id": "QUA",
            "name": "(QUA) Quí",
            "UnitName": "Quí"
        },
        {
            "value": "RAM",
            "text": "(RAM) Ram",
            "id": "RAM",
            "name": "(RAM) Ram",
            "UnitName": "Ram"
        },
        {
            "value": "RIN",
            "text": "(RIN) Vòng",
            "id": "RIN",
            "name": "(RIN) Vòng",
            "UnitName": "Vòng"
        },
        {
            "value": "ROL",
            "text": "(ROL) Cuộn",
            "id": "ROL",
            "name": "(ROL) Cuộn",
            "UnitName": "Cuộn"
        },
        {
            "value": "SCR",
            "text": "(SCR) Quyển",
            "id": "SCR",
            "name": "(SCR) Quyển",
            "UnitName": "Quyển"
        },
        {
            "value": "SEC",
            "text": "(SEC) Giây",
            "id": "SEC",
            "name": "(SEC) Giây",
            "UnitName": "Giây"
        },
        {
            "value": "SET",
            "text": "(SET) Bộ",
            "id": "SET",
            "name": "(SET) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "SHE",
            "text": "(SHE) Tấm",
            "id": "SHE",
            "name": "(SHE) Tấm",
            "UnitName": "Tấm"
        },
        {
            "value": "SHO",
            "text": "(SHO) Xô",
            "id": "SHO",
            "name": "(SHO) Xô",
            "UnitName": "Xô"
        },
        {
            "value": "SHP",
            "text": "(SHP) Chuyến",
            "id": "SHP",
            "name": "(SHP) Chuyến",
            "UnitName": "Chuyến"
        },
        {
            "value": "Son",
            "text": "(Son) Son",
            "id": "Son",
            "name": "(Son) Son",
            "UnitName": "Son"
        },
        {
            "value": "THR",
            "text": "(THR) Sợi",
            "id": "THR",
            "name": "(THR) Sợi",
            "UnitName": "Sợi"
        },
        {
            "value": "THUNG",
            "text": "(THUNG) Thùng",
            "id": "THUNG",
            "name": "(THUNG) Thùng",
            "UnitName": "Thùng"
        },
        {
            "value": "TNE",
            "text": "(TNE) Tấn",
            "id": "TNE",
            "name": "(TNE) Tấn",
            "UnitName": "Tấn"
        },
        {
            "value": "TO",
            "text": "(TO) Tờ",
            "id": "TO",
            "name": "(TO) Tờ",
            "UnitName": "Tờ"
        },
        {
            "value": "TRE",
            "text": "(TRE) Cây",
            "id": "TRE",
            "name": "(TRE) Cây",
            "UnitName": "Cây"
        },
        {
            "value": "TUB",
            "text": "(TUB) Ống",
            "id": "TUB",
            "name": "(TUB) Ống",
            "UnitName": "Ống"
        },
        {
            "value": "TYP",
            "text": "(TYP) Tuýp",
            "id": "TYP",
            "name": "(TYP) Tuýp",
            "UnitName": "Tuýp"
        },
        {
            "value": "UNA",
            "text": "(UNA) Lọ",
            "id": "UNA",
            "name": "(UNA) Lọ",
            "UnitName": "Lọ"
        },
        {
            "value": "UNC",
            "text": "(UNC) Con",
            "id": "UNC",
            "name": "(UNC) Con",
            "UnitName": "Con"
        },
        {
            "value": "UNI",
            "text": "(UNI) PC",
            "id": "UNI",
            "name": "(UNI) PC",
            "UnitName": "PC"
        },
        {
            "value": "UNN",
            "text": "(UNN) Cuốn",
            "id": "UNN",
            "name": "(UNN) Cuốn",
            "UnitName": "Cuốn"
        },
        {
            "value": "UNT",
            "text": "(UNT) Thanh",
            "id": "UNT",
            "name": "(UNT) Thanh",
            "UnitName": "Thanh"
        },
        {
            "value": "UNV",
            "text": "(UNV) Viên",
            "id": "UNV",
            "name": "(UNV) Viên",
            "UnitName": "Viên"
        },
        {
            "value": "VOL",
            "text": "(VOL) V",
            "id": "VOL",
            "name": "(VOL) V",
            "UnitName": "V"
        },
        {
            "value": "YEA",
            "text": "(YEA) Năm",
            "id": "YEA",
            "name": "(YEA) Năm",
            "UnitName": "Năm"
        },
        {
            "value": "BAO",
            "text": "(BAO) BAO BAO",
            "id": "BAO",
            "name": "(BAO) BAO BAO",
            "UnitName": "BAO BAO"
        },
        {
            "value": "BAO.",
            "text": "(BAO.) Bao",
            "id": "BAO.",
            "name": "(BAO.) Bao",
            "UnitName": "Bao"
        },
        {
            "value": "Bo",
            "text": "(Bo) Bộ",
            "id": "Bo",
            "name": "(Bo) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "CAI",
            "text": "(CAI) Cái",
            "id": "CAI",
            "name": "(CAI) Cái",
            "UnitName": "Cái"
        },
        {
            "value": "CÁI",
            "text": "(CÁI) CÁI CÁI",
            "id": "CÁI",
            "name": "(CÁI) CÁI CÁI",
            "UnitName": "CÁI CÁI"
        },
        {
            "value": "Chiec",
            "text": "(Chiec) Chiếc",
            "id": "Chiec",
            "name": "(Chiec) Chiếc",
            "UnitName": "Chiếc"
        },
        {
            "value": "met",
            "text": "(met) Mét",
            "id": "met",
            "name": "(met) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "TAM",
            "text": "(TAM) Tấm",
            "id": "TAM",
            "name": "(TAM) Tấm",
            "UnitName": "Tấm"
        },
        {
            "value": "Bao",
            "text": "(Bao) Bao",
            "id": "Bao",
            "name": "(Bao) Bao",
            "UnitName": "Bao"
        },
        {
            "value": "Bo",
            "text": "(Bo) Bộ",
            "id": "Bo",
            "name": "(Bo) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "Chiec",
            "text": "(Chiec) Chiếc",
            "id": "Chiec",
            "name": "(Chiec) Chiếc",
            "UnitName": "Chiếc"
        },
        {
            "value": "Cuon",
            "text": "(Cuon) Cuộn",
            "id": "Cuon",
            "name": "(Cuon) Cuộn",
            "UnitName": "Cuộn"
        },
        {
            "value": "Kg",
            "text": "(Kg) Kg",
            "id": "Kg",
            "name": "(Kg) Kg",
            "UnitName": "Kg"
        },
        {
            "value": "Met",
            "text": "(Met) Mét",
            "id": "Met",
            "name": "(Met) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "Tap",
            "text": "(Tap) Tập",
            "id": "Tap",
            "name": "(Tap) Tập",
            "UnitName": "Tập"
        },
        {
            "value": "BAG",
            "text": "(BAG) Túi",
            "id": "BAG",
            "name": "(BAG) Túi",
            "UnitName": "Túi"
        },
        {
            "value": "BAO",
            "text": "(BAO) BAO",
            "id": "BAO",
            "name": "(BAO) BAO",
            "UnitName": "BAO"
        },
        {
            "value": "BOX",
            "text": "(BOX) Hộp",
            "id": "BOX",
            "name": "(BOX) Hộp",
            "UnitName": "Hộp"
        },
        {
            "value": "KLO",
            "text": "(KLO) Kg",
            "id": "KLO",
            "name": "(KLO) Kg",
            "UnitName": "Kg"
        },
        {
            "value": "MTR",
            "text": "(MTR) Mét",
            "id": "MTR",
            "name": "(MTR) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "PAI",
            "text": "(PAI) Đôi",
            "id": "PAI",
            "name": "(PAI) Đôi",
            "UnitName": "Đôi"
        },
        {
            "value": "PCS",
            "text": "(PCS) Cái",
            "id": "PCS",
            "name": "(PCS) Cái",
            "UnitName": "Cái"
        },
        {
            "value": "SET",
            "text": "(SET) Bộ",
            "id": "SET",
            "name": "(SET) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "AMP",
            "text": "(AMP) A",
            "id": "AMP",
            "name": "(AMP) A",
            "UnitName": "A"
        },
        {
            "value": "ATM",
            "text": "(ATM) át",
            "id": "ATM",
            "name": "(ATM) át",
            "UnitName": "át"
        },
        {
            "value": "BANH",
            "text": "(BANH) Bánh",
            "id": "BANH",
            "name": "(BANH) Bánh",
            "UnitName": "Bánh"
        },
        {
            "value": "BAO",
            "text": "(BAO) BAO",
            "id": "BAO",
            "name": "(BAO) BAO",
            "UnitName": "BAO"
        },
        {
            "value": "BICH",
            "text": "(BICH) Bịch",
            "id": "BICH",
            "name": "(BICH) Bịch",
            "UnitName": "Bịch"
        },
        {
            "value": "BINH",
            "text": "(BINH) Bình",
            "id": "BINH",
            "name": "(BINH) Bình",
            "UnitName": "Bình"
        },
        {
            "value": "BO",
            "text": "(BO) Bộ",
            "id": "BO",
            "name": "(BO) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "BOL",
            "text": "(BOL) Bình",
            "id": "BOL",
            "name": "(BOL) Bình",
            "UnitName": "Bình"
        },
        {
            "value": "BOT",
            "text": "(BOT) Chai",
            "id": "BOT",
            "name": "(BOT) Chai",
            "UnitName": "Chai"
        },
        {
            "value": "BUN",
            "text": "(BUN) Bó",
            "id": "BUN",
            "name": "(BUN) Bó",
            "UnitName": "Bó"
        },
        {
            "value": "BUONG",
            "text": "(BUONG) Buồng",
            "id": "BUONG",
            "name": "(BUONG) Buồng",
            "UnitName": "Buồng"
        },
        {
            "value": "CA",
            "text": "(CA) Ca",
            "id": "CA",
            "name": "(CA) Ca",
            "UnitName": "Ca"
        },
        {
            "value": "CAI",
            "text": "(CAI) Cái",
            "id": "CAI",
            "name": "(CAI) Cái",
            "UnitName": "Cái"
        },
        {
            "value": "CAN",
            "text": "(CAN) Can",
            "id": "CAN",
            "name": "(CAN) Can",
            "UnitName": "Can"
        },
        {
            "value": "CAY",
            "text": "(CAY) Cây",
            "id": "CAY",
            "name": "(CAY) Cây",
            "UnitName": "Cây"
        },
        {
            "value": "CBM",
            "text": "(CBM) CBM",
            "id": "CBM",
            "name": "(CBM) CBM",
            "UnitName": "CBM"
        },
        {
            "value": "CEL",
            "text": "(CEL) °C",
            "id": "CEL",
            "name": "(CEL) °C",
            "UnitName": "°C"
        },
        {
            "value": "CHAI",
            "text": "(CHAI) Chai",
            "id": "CHAI",
            "name": "(CHAI) Chai",
            "UnitName": "Chai"
        },
        {
            "value": "CHIEC",
            "text": "(CHIEC) Chiếc",
            "id": "CHIEC",
            "name": "(CHIEC) Chiếc",
            "UnitName": "Chiếc"
        },
        {
            "value": "CHUYEN",
            "text": "(CHUYEN) Chuyến",
            "id": "CHUYEN",
            "name": "(CHUYEN) Chuyến",
            "UnitName": "Chuyến"
        },
        {
            "value": "CMK",
            "text": "(CMK) cm3",
            "id": "CMK",
            "name": "(CMK) cm3",
            "UnitName": "cm3"
        },
        {
            "value": "CMV",
            "text": "(CMV) cm2",
            "id": "CMV",
            "name": "(CMV) cm2",
            "UnitName": "cm2"
        },
        {
            "value": "CO",
            "text": "(CO) Công",
            "id": "CO",
            "name": "(CO) Công",
            "UnitName": "Công"
        },
        {
            "value": "COI",
            "text": "(COI) Cỏi",
            "id": "COI",
            "name": "(COI) Cỏi",
            "UnitName": "Cỏi"
        },
        {
            "value": "CON",
            "text": "(CON) Con",
            "id": "CON",
            "name": "(CON) Con",
            "UnitName": "Con"
        },
        {
            "value": "CTM",
            "text": "(CTM) cm",
            "id": "CTM",
            "name": "(CTM) cm",
            "UnitName": "cm"
        },
        {
            "value": "CUC",
            "text": "(CUC) Cục",
            "id": "CUC",
            "name": "(CUC) Cục",
            "UnitName": "Cục"
        },
        {
            "value": "CUON",
            "text": "(CUON) Cuộn",
            "id": "CUON",
            "name": "(CUON) Cuộn",
            "UnitName": "Cuộn"
        },
        {
            "value": "DAY",
            "text": "(DAY) Ngày",
            "id": "DAY",
            "name": "(DAY) Ngày",
            "UnitName": "Ngày"
        },
        {
            "value": "DAY1",
            "text": "(DAY1) Dây",
            "id": "DAY1",
            "name": "(DAY1) Dây",
            "UnitName": "Dây"
        },
        {
            "value": "DEC",
            "text": "(DEC) dm",
            "id": "DEC",
            "name": "(DEC) dm",
            "UnitName": "dm"
        },
        {
            "value": "DEE",
            "text": "(DEE) Sâu",
            "id": "DEE",
            "name": "(DEE) Sâu",
            "UnitName": "Sâu"
        },
        {
            "value": "DET",
            "text": "(DET) Chi tiết",
            "id": "DET",
            "name": "(DET) Chi tiết",
            "UnitName": "Chi tiết"
        },
        {
            "value": "DM2",
            "text": "(DM2) dm2",
            "id": "DM2",
            "name": "(DM2) dm2",
            "UnitName": "dm2"
        },
        {
            "value": "DOAN",
            "text": "(DOAN) Đoạn",
            "id": "DOAN",
            "name": "(DOAN) Đoạn",
            "UnitName": "Đoạn"
        },
        {
            "value": "DOI",
            "text": "(DOI) Đôi",
            "id": "DOI",
            "name": "(DOI) Đôi",
            "UnitName": "Đôi"
        },
        {
            "value": "DZN",
            "text": "(DZN) Tá",
            "id": "DZN",
            "name": "(DZN) Tá",
            "UnitName": "Tá"
        },
        {
            "value": "EBAG",
            "text": "(EBAG) BAG",
            "id": "EBAG",
            "name": "(EBAG) BAG",
            "UnitName": "BAG"
        },
        {
            "value": "EBOX",
            "text": "(EBOX) BOX",
            "id": "EBOX",
            "name": "(EBOX) BOX",
            "UnitName": "BOX"
        },
        {
            "value": "EKLO",
            "text": "(EKLO) KLO",
            "id": "EKLO",
            "name": "(EKLO) KLO",
            "UnitName": "KLO"
        },
        {
            "value": "EPAI",
            "text": "(EPAI) PAI",
            "id": "EPAI",
            "name": "(EPAI) PAI",
            "UnitName": "PAI"
        },
        {
            "value": "FAR",
            "text": "(FAR) F",
            "id": "FAR",
            "name": "(FAR) F",
            "UnitName": "F"
        },
        {
            "value": "Feet",
            "text": "(Feet) Feet",
            "id": "Feet",
            "name": "(Feet) Feet",
            "UnitName": "Feet"
        },
        {
            "value": "FIL",
            "text": "(FIL) Tệp",
            "id": "FIL",
            "name": "(FIL) Tệp",
            "UnitName": "Tệp"
        },
        {
            "value": "GAM",
            "text": "(GAM) Gam",
            "id": "GAM",
            "name": "(GAM) Gam",
            "UnitName": "Gam"
        },
        {
            "value": "GOI",
            "text": "(GOI) Gói",
            "id": "GOI",
            "name": "(GOI) Gói",
            "UnitName": "Gói"
        },
        {
            "value": "GRA",
            "text": "(GRA) g",
            "id": "GRA",
            "name": "(GRA) g",
            "UnitName": "g"
        },
        {
            "value": "GRI",
            "text": "(GRI) Vỉ",
            "id": "GRI",
            "name": "(GRI) Vỉ",
            "UnitName": "Vỉ"
        },
        {
            "value": "GRM",
            "text": "(GRM) G",
            "id": "GRM",
            "name": "(GRM) G",
            "UnitName": "G"
        },
        {
            "value": "HEC",
            "text": "(HEC) Hz",
            "id": "HEC",
            "name": "(HEC) Hz",
            "UnitName": "Hz"
        },
        {
            "value": "HESO",
            "text": "(HESO) Hệ số",
            "id": "HESO",
            "name": "(HESO) Hệ số",
            "UnitName": "Hệ số"
        },
        {
            "value": "HOP",
            "text": "(HOP) Hộp",
            "id": "HOP",
            "name": "(HOP) Hộp",
            "UnitName": "Hộp"
        },
        {
            "value": "HOU",
            "text": "(HOU) Giờ",
            "id": "HOU",
            "name": "(HOU) Giờ",
            "UnitName": "Giờ"
        },
        {
            "value": "HT",
            "text": "(HT) Hệ thống",
            "id": "HT",
            "name": "(HT) Hệ thống",
            "UnitName": "Hệ thống"
        },
        {
            "value": "KG",
            "text": "(KG) Kg",
            "id": "KG",
            "name": "(KG) Kg",
            "UnitName": "Kg"
        },
        {
            "value": "KIEN",
            "text": "(KIEN) Kiện",
            "id": "KIEN",
            "name": "(KIEN) Kiện",
            "UnitName": "Kiện"
        },
        {
            "value": "KM",
            "text": "(KM) Km",
            "id": "KM",
            "name": "(KM) Km",
            "UnitName": "Km"
        },
        {
            "value": "KWH",
            "text": "(KWH) Kwh",
            "id": "KWH",
            "name": "(KWH) Kwh",
            "UnitName": "Kwh"
        },
        {
            "value": "LIT",
            "text": "(LIT) Lít",
            "id": "LIT",
            "name": "(LIT) Lít",
            "UnitName": "Lít"
        },
        {
            "value": "LO",
            "text": "(LO) Lô",
            "id": "LO",
            "name": "(LO) Lô",
            "UnitName": "Lô"
        },
        {
            "value": "LO1",
            "text": "(LO1) Lỗ",
            "id": "LO1",
            "name": "(LO1) Lỗ",
            "UnitName": "Lỗ"
        },
        {
            "value": "LO2",
            "text": "(LO2) Lọ",
            "id": "LO2",
            "name": "(LO2) Lọ",
            "UnitName": "Lọ"
        },
        {
            "value": "LON",
            "text": "(LON) Lon",
            "id": "LON",
            "name": "(LON) Lon",
            "UnitName": "Lon"
        },
        {
            "value": "M2",
            "text": "(M2) m2",
            "id": "M2",
            "name": "(M2) m2",
            "UnitName": "m2"
        },
        {
            "value": "M3",
            "text": "(M3) m3",
            "id": "M3",
            "name": "(M3) m3",
            "UnitName": "m3"
        },
        {
            "value": "MAU",
            "text": "(MAU) Mẫu",
            "id": "MAU",
            "name": "(MAU) Mẫu",
            "UnitName": "Mẫu"
        },
        {
            "value": "ME",
            "text": "(ME) Mẻ",
            "id": "ME",
            "name": "(ME) Mẻ",
            "UnitName": "Mẻ"
        },
        {
            "value": "MET",
            "text": "(MET) Mét",
            "id": "MET",
            "name": "(MET) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "MIENG",
            "text": "(MIENG) Miếng",
            "id": "MIENG",
            "name": "(MIENG) Miếng",
            "UnitName": "Miếng"
        },
        {
            "value": "MII",
            "text": "(MII) Tấn",
            "id": "MII",
            "name": "(MII) Tấn",
            "UnitName": "Tấn"
        },
        {
            "value": "MLI",
            "text": "(MLI) mm2",
            "id": "MLI",
            "name": "(MLI) mm2",
            "UnitName": "mm2"
        },
        {
            "value": "MLT",
            "text": "(MLT) Mi-li-lít",
            "id": "MLT",
            "name": "(MLT) Mi-li-lít",
            "UnitName": "Mi-li-lít"
        },
        {
            "value": "MLV",
            "text": "(MLV) mm3",
            "id": "MLV",
            "name": "(MLV) mm3",
            "UnitName": "mm3"
        },
        {
            "value": "MM",
            "text": "(MM) mm",
            "id": "MM",
            "name": "(MM) mm",
            "UnitName": "mm"
        },
        {
            "value": "MOL",
            "text": "(MOL) mol",
            "id": "MOL",
            "name": "(MOL) mol",
            "UnitName": "mol"
        },
        {
            "value": "Month",
            "text": "(Month) Tháng",
            "id": "Month",
            "name": "(Month) Tháng",
            "UnitName": "Tháng"
        },
        {
            "value": "MOT",
            "text": "(MOT) Tháng",
            "id": "MOT",
            "name": "(MOT) Tháng",
            "UnitName": "Tháng"
        },
        {
            "value": "MUN",
            "text": "(MUN) Phút",
            "id": "MUN",
            "name": "(MUN) Phút",
            "UnitName": "Phút"
        },
        {
            "value": "OAT",
            "text": "(OAT) W",
            "id": "OAT",
            "name": "(OAT) W",
            "UnitName": "W"
        },
        {
            "value": "OHM",
            "text": "(OHM) Ω",
            "id": "OHM",
            "name": "(OHM) Ω",
            "UnitName": "Ω"
        },
        {
            "value": "ONG",
            "text": "(ONG) ống",
            "id": "ONG",
            "name": "(ONG) ống",
            "UnitName": "ống"
        },
        {
            "value": "PAC",
            "text": "(PAC) Gói",
            "id": "PAC",
            "name": "(PAC) Gói",
            "UnitName": "Gói"
        },
        {
            "value": "PHI",
            "text": "(PHI) Phi",
            "id": "PHI",
            "name": "(PHI) Phi",
            "UnitName": "Phi"
        },
        {
            "value": "phuy",
            "text": "(phuy) phuy",
            "id": "phuy",
            "name": "(phuy) phuy",
            "UnitName": "phuy"
        },
        {
            "value": "POT",
            "text": "(POT) Chậu",
            "id": "POT",
            "name": "(POT) Chậu",
            "UnitName": "Chậu"
        },
        {
            "value": "PRE",
            "text": "(PRE) %",
            "id": "PRE",
            "name": "(PRE) %",
            "UnitName": "%"
        },
        {
            "value": "QUA",
            "text": "(QUA) Quả",
            "id": "QUA",
            "name": "(QUA) Quả",
            "UnitName": "Quả"
        },
        {
            "value": "QUE",
            "text": "(QUE) Que",
            "id": "QUE",
            "name": "(QUE) Que",
            "UnitName": "Que"
        },
        {
            "value": "QUYEN",
            "text": "(QUYEN) Quyển",
            "id": "QUYEN",
            "name": "(QUYEN) Quyển",
            "UnitName": "Quyển"
        },
        {
            "value": "RAM",
            "text": "(RAM) Ram",
            "id": "RAM",
            "name": "(RAM) Ram",
            "UnitName": "Ram"
        },
        {
            "value": "RIN",
            "text": "(RIN) Vòng",
            "id": "RIN",
            "name": "(RIN) Vòng",
            "UnitName": "Vòng"
        },
        {
            "value": "SCR",
            "text": "(SCR) Quyển",
            "id": "SCR",
            "name": "(SCR) Quyển",
            "UnitName": "Quyển"
        },
        {
            "value": "SEC",
            "text": "(SEC) Giây",
            "id": "SEC",
            "name": "(SEC) Giây",
            "UnitName": "Giây"
        },
        {
            "value": "SET",
            "text": "(SET) Bộ",
            "id": "SET",
            "name": "(SET) Bộ",
            "UnitName": "Bộ"
        },
        {
            "value": "Son",
            "text": "(Son) Son",
            "id": "Son",
            "name": "(Son) Son",
            "UnitName": "Son"
        },
        {
            "value": "TAM",
            "text": "(TAM) Tấm",
            "id": "TAM",
            "name": "(TAM) Tấm",
            "UnitName": "Tấm"
        },
        {
            "value": "TAN",
            "text": "(TAN) Tấn",
            "id": "TAN",
            "name": "(TAN) Tấn",
            "UnitName": "Tấn"
        },
        {
            "value": "TAP",
            "text": "(TAP) Tập",
            "id": "TAP",
            "name": "(TAP) Tập",
            "UnitName": "Tập"
        },
        {
            "value": "THANH",
            "text": "(THANH) Thanh",
            "id": "THANH",
            "name": "(THANH) Thanh",
            "UnitName": "Thanh"
        },
        {
            "value": "THR",
            "text": "(THR) Sợi",
            "id": "THR",
            "name": "(THR) Sợi",
            "UnitName": "Sợi"
        },
        {
            "value": "THUNG",
            "text": "(THUNG) Thùng",
            "id": "THUNG",
            "name": "(THUNG) Thùng",
            "UnitName": "Thùng"
        },
        {
            "value": "TO",
            "text": "(TO) Tờ",
            "id": "TO",
            "name": "(TO) Tờ",
            "UnitName": "Tờ"
        },
        {
            "value": "TU",
            "text": "(TU) Tủ",
            "id": "TU",
            "name": "(TU) Tủ",
            "UnitName": "Tủ"
        },
        {
            "value": "TUI",
            "text": "(TUI) Túi",
            "id": "TUI",
            "name": "(TUI) Túi",
            "UnitName": "Túi"
        },
        {
            "value": "TYP",
            "text": "(TYP) Tuýp",
            "id": "TYP",
            "name": "(TYP) Tuýp",
            "UnitName": "Tuýp"
        },
        {
            "value": "UNC",
            "text": "(UNC) Con",
            "id": "UNC",
            "name": "(UNC) Con",
            "UnitName": "Con"
        },
        {
            "value": "UNI",
            "text": "(UNI) PC",
            "id": "UNI",
            "name": "(UNI) PC",
            "UnitName": "PC"
        },
        {
            "value": "UNN",
            "text": "(UNN) Cuốn",
            "id": "UNN",
            "name": "(UNN) Cuốn",
            "UnitName": "Cuốn"
        },
        {
            "value": "UNT",
            "text": "(UNT) Mảnh",
            "id": "UNT",
            "name": "(UNT) Mảnh",
            "UnitName": "Mảnh"
        },
        {
            "value": "UNV",
            "text": "(UNV) Viên",
            "id": "UNV",
            "name": "(UNV) Viên",
            "UnitName": "Viên"
        },
        {
            "value": "VIEN",
            "text": "(VIEN) Viên",
            "id": "VIEN",
            "name": "(VIEN) Viên",
            "UnitName": "Viên"
        },
        {
            "value": "VOL",
            "text": "(VOL) V",
            "id": "VOL",
            "name": "(VOL) V",
            "UnitName": "V"
        },
        {
            "value": "XE",
            "text": "(XE) Xe",
            "id": "XE",
            "name": "(XE) Xe",
            "UnitName": "Xe"
        },
        {
            "value": "XO",
            "text": "(XO) Xô",
            "id": "XO",
            "name": "(XO) Xô",
            "UnitName": "Xô"
        },
        {
            "value": "YEA",
            "text": "(YEA) Năm",
            "id": "YEA",
            "name": "(YEA) Năm",
            "UnitName": "Năm"
        },
        {
            "value": "AMP",
            "text": "(AMP) A",
            "id": "AMP",
            "name": "(AMP) A",
            "UnitName": "A"
        },
        {
            "value": "ATM",
            "text": "(ATM) át",
            "id": "ATM",
            "name": "(ATM) át",
            "UnitName": "át"
        },
        {
            "value": "BAG",
            "text": "(BAG) Túi",
            "id": "BAG",
            "name": "(BAG) Túi",
            "UnitName": "Túi"
        },
        {
            "value": "BAO",
            "text": "(BAO) BAO",
            "id": "BAO",
            "name": "(BAO) BAO",
            "UnitName": "BAO"
        },
        {
            "value": "BAS",
            "text": "(BAS) Giỏ",
            "id": "BAS",
            "name": "(BAS) Giỏ",
            "UnitName": "Giỏ"
        },
        {
            "value": "BIN",
            "text": "(BIN) Thùng",
            "id": "BIN",
            "name": "(BIN) Thùng",
            "UnitName": "Thùng"
        },
        {
            "value": "BLI",
            "text": "(BLI) Vỉ",
            "id": "BLI",
            "name": "(BLI) Vỉ",
            "UnitName": "Vỉ"
        },
        {
            "value": "BOL",
            "text": "(BOL) Bình",
            "id": "BOL",
            "name": "(BOL) Bình",
            "UnitName": "Bình"
        },
        {
            "value": "BOT",
            "text": "(BOT) Chai",
            "id": "BOT",
            "name": "(BOT) Chai",
            "UnitName": "Chai"
        },
        {
            "value": "BOX",
            "text": "(BOX) Hộp",
            "id": "BOX",
            "name": "(BOX) Hộp",
            "UnitName": "Hộp"
        },
        {
            "value": "BUN",
            "text": "(BUN) Bó",
            "id": "BUN",
            "name": "(BUN) Bó",
            "UnitName": "Bó"
        },
        {
            "value": "CA",
            "text": "(CA) Ca",
            "id": "CA",
            "name": "(CA) Ca",
            "UnitName": "Ca"
        },
        {
            "value": "CAN",
            "text": "(CAN) Can",
            "id": "CAN",
            "name": "(CAN) Can",
            "UnitName": "Can"
        },
        {
            "value": "CEL",
            "text": "(CEL) °C",
            "id": "CEL",
            "name": "(CEL) °C",
            "UnitName": "°C"
        },
        {
            "value": "Chiec",
            "text": "(Chiec) Chiếc",
            "id": "Chiec",
            "name": "(Chiec) Chiếc",
            "UnitName": "Chiếc"
        },
        {
            "value": "CMK",
            "text": "(CMK) cm3",
            "id": "CMK",
            "name": "(CMK) cm3",
            "UnitName": "cm3"
        },
        {
            "value": "CMV",
            "text": "(CMV) cm2",
            "id": "CMV",
            "name": "(CMV) cm2",
            "UnitName": "cm2"
        },
        {
            "value": "CO",
            "text": "(CO) Công",
            "id": "CO",
            "name": "(CO) Công",
            "UnitName": "Công"
        },
        {
            "value": "CTM",
            "text": "(CTM) cm",
            "id": "CTM",
            "name": "(CTM) cm",
            "UnitName": "cm"
        },
        {
            "value": "DAY",
            "text": "(DAY) Ngày",
            "id": "DAY",
            "name": "(DAY) Ngày",
            "UnitName": "Ngày"
        },
        {
            "value": "DEC",
            "text": "(DEC) dm",
            "id": "DEC",
            "name": "(DEC) dm",
            "UnitName": "dm"
        },
        {
            "value": "DEE",
            "text": "(DEE) Sâu",
            "id": "DEE",
            "name": "(DEE) Sâu",
            "UnitName": "Sâu"
        },
        {
            "value": "DET",
            "text": "(DET) Chi tiết",
            "id": "DET",
            "name": "(DET) Chi tiết",
            "UnitName": "Chi tiết"
        },
        {
            "value": "DM2",
            "text": "(DM2) dm2",
            "id": "DM2",
            "name": "(DM2) dm2",
            "UnitName": "dm2"
        },
        {
            "value": "DZN",
            "text": "(DZN) Tá",
            "id": "DZN",
            "name": "(DZN) Tá",
            "UnitName": "Tá"
        },
        {
            "value": "EBAG",
            "text": "(EBAG) BAG",
            "id": "EBAG",
            "name": "(EBAG) BAG",
            "UnitName": "BAG"
        },
        {
            "value": "EBOX",
            "text": "(EBOX) BOX",
            "id": "EBOX",
            "name": "(EBOX) BOX",
            "UnitName": "BOX"
        },
        {
            "value": "EKLO",
            "text": "(EKLO) KLO",
            "id": "EKLO",
            "name": "(EKLO) KLO",
            "UnitName": "KLO"
        },
        {
            "value": "EPAI",
            "text": "(EPAI) PAI",
            "id": "EPAI",
            "name": "(EPAI) PAI",
            "UnitName": "PAI"
        },
        {
            "value": "FAR",
            "text": "(FAR) F",
            "id": "FAR",
            "name": "(FAR) F",
            "UnitName": "F"
        },
        {
            "value": "Feet",
            "text": "(Feet) Feet",
            "id": "Feet",
            "name": "(Feet) Feet",
            "UnitName": "Feet"
        },
        {
            "value": "FIL",
            "text": "(FIL) Tệp",
            "id": "FIL",
            "name": "(FIL) Tệp",
            "UnitName": "Tệp"
        },
        {
            "value": "GRA",
            "text": "(GRA) g",
            "id": "GRA",
            "name": "(GRA) g",
            "UnitName": "g"
        },
        {
            "value": "GRI",
            "text": "(GRI) Vỉ",
            "id": "GRI",
            "name": "(GRI) Vỉ",
            "UnitName": "Vỉ"
        },
        {
            "value": "GRM",
            "text": "(GRM) G",
            "id": "GRM",
            "name": "(GRM) G",
            "UnitName": "G"
        },
        {
            "value": "HEC",
            "text": "(HEC) Hz",
            "id": "HEC",
            "name": "(HEC) Hz",
            "UnitName": "Hz"
        },
        {
            "value": "HESO",
            "text": "(HESO) Hệ số",
            "id": "HESO",
            "name": "(HESO) Hệ số",
            "UnitName": "Hệ số"
        },
        {
            "value": "HOU",
            "text": "(HOU) Giờ",
            "id": "HOU",
            "name": "(HOU) Giờ",
            "UnitName": "Giờ"
        },
        {
            "value": "KLM",
            "text": "(KLM) Km",
            "id": "KLM",
            "name": "(KLM) Km",
            "UnitName": "Km"
        },
        {
            "value": "KLO",
            "text": "(KLO) Kg",
            "id": "KLO",
            "name": "(KLO) Kg",
            "UnitName": "Kg"
        },
        {
            "value": "KWA",
            "text": "(KWA) Kwh",
            "id": "KWA",
            "name": "(KWA) Kwh",
            "UnitName": "Kwh"
        },
        {
            "value": "LO",
            "text": "(LO) Lô",
            "id": "LO",
            "name": "(LO) Lô",
            "UnitName": "Lô"
        },
        {
            "value": "LON",
            "text": "(LON) Lon",
            "id": "LON",
            "name": "(LON) Lon",
            "UnitName": "Lon"
        },
        {
            "value": "LTR",
            "text": "(LTR) Lít",
            "id": "LTR",
            "name": "(LTR) Lít",
            "UnitName": "Lít"
        },
        {
            "value": "ME",
            "text": "(ME) Mẻ",
            "id": "ME",
            "name": "(ME) Mẻ",
            "UnitName": "Mẻ"
        },
        {
            "value": "MET",
            "text": "(MET) m",
            "id": "MET",
            "name": "(MET) m",
            "UnitName": "m"
        },
        {
            "value": "MII",
            "text": "(MII) Tấn",
            "id": "MII",
            "name": "(MII) Tấn",
            "UnitName": "Tấn"
        },
        {
            "value": "MIL",
            "text": "(MIL) mm",
            "id": "MIL",
            "name": "(MIL) mm",
            "UnitName": "mm"
        },
        {
            "value": "MLI",
            "text": "(MLI) mm2",
            "id": "MLI",
            "name": "(MLI) mm2",
            "UnitName": "mm2"
        },
        {
            "value": "MLT",
            "text": "(MLT) Mi-li-lít",
            "id": "MLT",
            "name": "(MLT) Mi-li-lít",
            "UnitName": "Mi-li-lít"
        },
        {
            "value": "MLV",
            "text": "(MLV) mm3",
            "id": "MLV",
            "name": "(MLV) mm3",
            "UnitName": "mm3"
        },
        {
            "value": "MOL",
            "text": "(MOL) mol",
            "id": "MOL",
            "name": "(MOL) mol",
            "UnitName": "mol"
        },
        {
            "value": "MOT",
            "text": "(MOT) Tháng",
            "id": "MOT",
            "name": "(MOT) Tháng",
            "UnitName": "Tháng"
        },
        {
            "value": "MTK",
            "text": "(MTK) m2",
            "id": "MTK",
            "name": "(MTK) m2",
            "UnitName": "m2"
        },
        {
            "value": "MTQ",
            "text": "(MTQ) m3",
            "id": "MTQ",
            "name": "(MTQ) m3",
            "UnitName": "m3"
        },
        {
            "value": "MTR",
            "text": "(MTR) Mét",
            "id": "MTR",
            "name": "(MTR) Mét",
            "UnitName": "Mét"
        },
        {
            "value": "MUN",
            "text": "(MUN) Phút",
            "id": "MUN",
            "name": "(MUN) Phút",
            "UnitName": "Phút"
        },
        {
            "value": "OAT",
            "text": "(OAT) W",
            "id": "OAT",
            "name": "(OAT) W",
            "UnitName": "W"
        },
        {
            "value": "OHM",
            "text": "(OHM) Ω",
            "id": "OHM",
            "name": "(OHM) Ω",
            "UnitName": "Ω"
        },
        {
            "value": "PAC",
            "text": "(PAC) Gói",
            "id": "PAC",
            "name": "(PAC) Gói",
            "UnitName": "Gói"
        },
        {
            "value": "PAI",
            "text": "(PAI) Đôi",
            "id": "PAI",
            "name": "(PAI) Đôi",
            "UnitName": "Đôi"
        },
        {
            "value": "PAR",
            "text": "(PAR) Đoạn",
            "id": "PAR",
            "name": "(PAR) Đoạn",
            "UnitName": "Đoạn"
        },
        {
            "value": "PCS",
            "text": "(PCS) Cái",
            "id": "PCS",
            "name": "(PCS) Cái",
            "UnitName": "Cái"
        },
        {
            "value": "POT",
            "text": "(POT) Chậu",
            "id": "POT",
            "name": "(POT) Chậu",
            "UnitName": "Chậu"
        },
        {
            "value": "PRE",
            "text": "(PRE) %",
            "id": "PRE",
            "name": "(PRE) %",
            "UnitName": "%"
        },
        {
            "value": "QUA",
            "text": "(QUA) Quí",
            "id": "QUA",
            "name": "(QUA) Quí",
            "UnitName": "Quí"
        },
        {
            "value": "RAM",
            "text": "(RAM) Ram",
            "id": "RAM",
            "name": "(RAM) Ram",
            "UnitName": "Ram"
        },
        {
            "value": "RIN",
            "text": "(RIN) Vòng",
            "id": "RIN",
            "name": "(RIN) Vòng",
            "UnitName": "Vòng"
        },
        {
            "value": "ROL",
            "text": "(ROL) Cuộn",
            "id": "ROL",
            "name": "(ROL) Cuộn",
            "UnitName": "Cuộn"
        }
    ];


    //#endregion

    //#region  treeview with template
    vm.treeData =[
        {
            id:'a001', title:'A 001',
            children: [
                {
                    id:'a001-01', title:'A 001 01',
                },
                {
                    id:'a001-02', title:'A 001 02',
                }
            ]
        },
        {
            id:'b002', title:'B 002',
        },
        {
            id:'c003', title:'C 003',
            children: [
                {
                    id:'c003-01', title:'C 003 01',
                    children: [
                        {
                            id:'c003-01-01', title:'C 003 01 01',
                            id:'c003-01-02', title:'C 003 01 02',
                        }
                    ]
                }
            ]
        },
    ];
    vm.treeViewConfig={
        nodeClick:(item)=>{
            console.log(item);
        }
    }

    //#endregion

})