const productos = [
    {
        "id": 1,
        "nombre": "iPhone 13",
        "precio": 3196000,
        "marca": "Apple",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFHfIdHpY-PCVQgmQA9BMkjLPus1a4DDTgg&s",
        "disponible": 45
    },
    {
        "id": 2,
        "nombre": "Galaxy S21",
        "precio": 2796000,
        "marca": "Samsung",
        "tipo": "Celular",
        "imagen": "https://refurbi.com.co/cdn/shop/files/samsung-galaxy-s21-blanco_1000x.webp?v=1714653629",
        "disponible": 62
    },
    {
        "id": 3,
        "nombre": "iPad Pro",
        "precio": 3996000,
        "marca": "Apple",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2lw1Dgdgq5pDG6B0bxmnSR6xvAye3nDT-5Q&s",
        "disponible": 33
    },
    {
        "id": 4,
        "nombre": "Galaxy Tab S7",
        "precio": 2596000,
        "marca": "Samsung",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbZ5zRz5uXWz4YHOlvOatm_oR8ojI-7WaT7Q&s",
        "disponible": 79
    },
    {
        "id": 5,
        "nombre": "Pixel 6",
        "precio": 2396000,
        "marca": "Google",
        "tipo": "Celular",
        "imagen": "https://m.media-amazon.com/images/I/71QQZr2pNSL.jpg",
        "disponible": 18
    },
    {
        "id": 6,
        "nombre": "OnePlus 9",
        "precio": 2916000,
        "marca": "OnePlus",
        "tipo": "Celular",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_797470-MCO48316978902_112021-O.webp",
        "disponible": 54
    },
    {
        "id": 7,
        "nombre": "Xiaomi Mi 11",
        "precio": 2996000,
        "marca": "Xiaomi",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0bLcrzq32SKeK97szAJ7-p3CsLPRjG2eTyQ&s",
        "disponible": 25
    },
    {
        "id": 8,
        "nombre": "Huawei MatePad Pro",
        "precio": 2796000,
        "marca": "Huawei",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOZLXK5fXWsaUlVTSNfQDxlyvBxPCZk9uPag&s",
        "disponible": 63
    },
    {
        "id": 9,
        "nombre": "Galaxy Note 20",
        "precio": 3796000,
        "marca": "Samsung",
        "tipo": "Celular",
        "imagen": "https://m.media-amazon.com/images/I/51tQeY4+e3L.jpg",
        "disponible": 71
    },
    {
        "id": 10,
        "nombre": "iPad Air",
        "precio": 2396000,
        "marca": "Apple",
        "tipo": "Tableta",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_816106-MLU69497704515_052023-O.webp",
        "disponible": 47
    },
    {
        "id": 11,
        "nombre": "Redmi Note 10",
        "precio": 796000,
        "marca": "Xiaomi",
        "tipo": "Celular",
        "imagen": "https://i.blogs.es/3a3421/xiaomi-redmi-note-10-0/450_1000.jpeg",
        "disponible": 15
    },
    {
        "id": 12,
        "nombre": "Galaxy A52",
        "precio": 1396000,
        "marca": "Samsung",
        "tipo": "Celular",
        "imagen": "https://refurbi.com.co/cdn/shop/files/samsung-galaxy-a52-5g-dual-sim-awesome-violet-128gb-and-6gb-ram-sm-a526b-ds_1200x.jpg?v=1721141268",
        "disponible": 39
    },
    {
        "id": 13,
        "nombre": "Fire HD 10",
        "precio": 596000,
        "marca": "Amazon",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJ5IJEoNt7OblQba8sCpUcNoGIcwvA1L1dg&s",
        "disponible": 20
    },
    {
        "id": 14,
        "nombre": "Lenovo Tab P11",
        "precio": 916000,
        "marca": "Lenovo",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUA36S8Z5l-TZ1jB1e7diZ-OAQxsU9orEkiw&s",
        "disponible": 68
    },
    {
        "id": 15,
        "nombre": "iPhone SE",
        "precio": 1716000,
        "marca": "Apple",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0XJ13NI6cnVR-RCUBuvoZTyxOBcL_ztvczA&s",
        "disponible": 84
    },
    {
        "id": 16,
        "nombre": "Surface Pro 7",
        "precio": 3596000,
        "marca": "Microsoft",
        "tipo": "Tableta",
        "imagen": "https://m.media-amazon.com/images/I/71kBlSKi3eL._AC_SL1500_.jpg",
        "disponible": 32
    },
    {
        "id": 17,
        "nombre": "Nokia G20",
        "precio": 796000,
        "marca": "Nokia",
        "tipo": "Celular",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_619504-MLA48697737747_122021-O.webp",
        "disponible": 77
    },
    {
        "id": 18,
        "nombre": "Asus ZenPad 3S",
        "precio": 1196000,
        "marca": "Asus",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkEl2diwshS47IgwxTc410IP3ub-IxhjSs8A&s",
        "disponible": 42
    },
    {
        "id": 19,
        "nombre": "Oppo Find X3",
        "precio": 3596000,
        "marca": "Oppo",
        "tipo": "Celular",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_798438-MCO73830088654_012024-O.webp",
        "disponible": 11
    },
    {
        "id": 20,
        "nombre": "iPad Mini",
        "precio": 1996000,
        "marca": "Apple",
        "tipo": "Tableta",
        "imagen": "https://mac-center.com/cdn/shop/files/IMG-6337785.jpg?v=1723751644&width=823",
        "disponible": 56
    },
    {
        "id": 21,
        "nombre": "Galaxy Z Fold3",
        "precio": 7196000,
        "marca": "Samsung",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-apDIaB00vWdjc6cYEObNKoJCxaWbkqM8ZQ&s",
        "disponible": 30
    },
    {
        "id": 22,
        "nombre": "Sony Xperia 5 II",
        "precio": 3396000,
        "marca": "Sony",
        "tipo": "Celular",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_624378-MCO51291430832_082022-O.webp",
        "disponible": 23
    },
    {
        "id": 23,
        "nombre": "Huawei P40",
        "precio": 2796000,
        "marca": "Huawei",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvthU9oB2SC_hrnQOkVPqyp4r7SzLYx0T-cA&s",
        "disponible": 50
    },
    {
        "id": 24,
        "nombre": "Realme Pad",
        "precio": 796000,
        "marca": "Realme",
        "tipo": "Tableta",
        "imagen": "https://co.celulares.com/fotos/realme-pad-1-92645-g-alt.jpeg",
        "disponible": 37
    },
    {
        "id": 25,
        "nombre": "LG Velvet",
        "precio": 1996000,
        "marca": "LG",
        "tipo": "Celular",
        "imagen": "https://i.blogs.es/f197b0/lg-velvet-04/450_1000.jpg",
        "disponible": 40
    },
    {
        "id": 26,
        "nombre": "Alcatel 1T",
        "precio": 356000,
        "marca": "Alcatel",
        "tipo": "Tableta",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_704048-MLA43206397086_082020-O.webp",
        "disponible": 92
    },
    {
        "id": 27,
        "nombre": "Moto G Power",
        "precio": 916000,
        "marca": "Motorola",
        "tipo": "Celular",
        "imagen": "https://m.media-amazon.com/images/I/71FSzZAkyjL.jpg",
        "disponible": 14
    },
    {
        "id": 28,
        "nombre": "Samsung Galaxy Tab A7",
        "precio": 996000,
        "marca": "Samsung",
        "tipo": "Tableta",
        "imagen": "https://www.mtm.com.co/wp-content/uploads/2023/07/05726.jpg",
        "disponible": 66
    },
    {
        "id": 29,
        "nombre": "Honor 9X",
        "precio": 1396000,
        "marca": "Honor",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-l92L37370DsOYw7O-hRJybTzl__5ZaGhaw&s",
        "disponible": 48
    },
    {
        "id": 30,
        "nombre": "Xiaomi Pad 5",
        "precio": 1596000,
        "marca": "Xiaomi",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ16E2cjJPyvv2YM-Eyunun2tp_UQ598mLAFg&s",
        "disponible": 74
    },
    {
        "id": 31,
        "nombre": "Vivo Y20",
        "precio": 596000,
        "marca": "Vivo",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbV_Dv09j2Q-SyPnFGPLb9kY1ky4Dv1FTHLw&s",
        "disponible": 26
    },
    {
        "id": 32,
        "nombre": "Galaxy S21 FE",
        "precio": 2396000,
        "marca": "Samsung",
        "tipo": "Celular",
        "imagen": "https://gsmphone.co/wp-content/uploads/2022/03/SamsungGalaxyS21FE-1_0553280b-41ea-41f2-b55a-d743d9b52f67_300x.webp",
        "disponible": 61
    },
    {
        "id": 33,
        "nombre": "Amazon Fire 7",
        "precio": 196000,
        "marca": "Amazon",
        "tipo": "Tableta",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_834445-MLA76683393477_052024-O.webp",
        "disponible": 85
    },
    {
        "id": 34,
        "nombre": "Nokia T20",
        "precio": 796000,
        "marca": "Nokia",
        "tipo": "Tableta",
        "imagen": "https://www.mayoristatecnologico.com.co/images/detailed/38/F20RID1A026_TIENDA_MAITEK.jpg?t=1705893448",
        "disponible": 44
    },
    {
        "id": 35,
        "nombre": "Realme 8 Pro",
        "precio": 1196000,
        "marca": "Realme",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSajHtxYSRXZXESkihZLeVIOsOldwbsGl7-A&s",
        "disponible": 21
    },
    {
        "id": 36,
        "nombre": "Lenovo Yoga Smart Tab",
        "precio": 1196000,
        "marca": "Lenovo",
        "tipo": "Tableta",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTZsdbM17lWsKYPqkRC5xjGGdpBwQYLdpuQA&s",
        "disponible": 72
    },
    {
        "id": 37,
        "nombre": "Huawei Mate 40 Pro",
        "precio": 4396000,
        "marca": "Huawei",
        "tipo": "Celular",
        "imagen": "https://m.media-amazon.com/images/I/417E3gDr7PL.jpg",
        "disponible": 88
    },
    {
        "id": 38,
        "nombre": "Microsoft Surface Go",
        "precio": 1596000,
        "marca": "Microsoft",
        "tipo": "Tableta",
        "imagen": "https://m.media-amazon.com/images/I/71RQMHbQTHL.jpg",
        "disponible": 34
    },
    {
        "id": 39,
        "nombre": "LG G8X",
        "precio": 1996000,
        "marca": "LG",
        "tipo": "Celular",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRti5EJPEVAput6PFTerMHaXjmlhtonqrsnrQ&s",
        "disponible": 57
    },
    {
        "id": 40,
        "nombre": "Samsung Galaxy Tab S6 Lite",
        "precio": 1396000,
        "marca": "Samsung",
        "tipo": "Tableta",
        "imagen": "https://http2.mlstatic.com/D_NQ_NP_890150-MLU77808362558_072024-O.webp",
        "disponible": 59
    }
];
