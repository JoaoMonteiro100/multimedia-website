/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='static/images/map/',
        aud='static/media/',
        vid='static/media/',
        js='static/js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Tyria',
                            type: 'image',
                            rect: ['-5px', '0px', '1010px', '1000px', 'auto', 'auto'],
                            opacity: '0.89743590303975',
                            fill: ["rgba(0,0,0,0)",im+"Tyria.jpg",'0px','0px']
                        },
                        {
                            id: 'LA',
                            type: 'ellipse',
                            rect: ['454px', '432px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(167,99,0,1.00)"],
                            stroke: [1,"rgba(45,28,0,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'DR',
                            type: 'ellipse',
                            rect: ['316px', '307px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(172,145,0,1.00)"],
                            stroke: [1,"rgba(62,40,0,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'RS',
                            type: 'ellipse',
                            rect: ['190px', '587px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(98,0,89,1.00)"],
                            stroke: [1,"rgba(23,0,29,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'PT',
                            type: 'ellipse',
                            rect: ['282px', '599px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(57,167,0,1.00)"],
                            stroke: [1,"rgba(9,45,0,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'H',
                            type: 'ellipse',
                            rect: ['622px', '433px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,83,167,1.00)"],
                            stroke: [1,"rgba(0,14,45,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'BC',
                            type: 'ellipse',
                            rect: ['736px', '409px', '45px', '45px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(116,10,0,1.00)"],
                            stroke: [1,"rgba(45,9,0,1.00)","solid"],
                            boxShadow: ["", 3, 3, 3, 0, "rgba(0,0,0,0.65098)"]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['73', '41', '650', '250', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['0px', '0px', '650px', '250px', 'auto', 'auto'],
                                opacity: '0.69105688100908',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgba(62,40,0,0.00)","none"]
                            },
                            {
                                id: 'DR2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"DR.jpg",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['263px', '5px', '374px', '200px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">Divinity's Reach</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; color: rgb(196, 196, 196); text-align: left;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; color: rgb(196, 196, 196);\">​</span><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; color: rgb(196, 196, 196); font-size: 18px;\">Divinity's Reach is the last bastion of human glory. White limestone walls, great statues and shrines to the gods are common elements inside the city. Six high roads, each dedicated to a god, divide the lower city into districts.</span></p>",
                                align: "left",
								font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['126', '657', '648', '250', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle2',
                                type: 'rect',
                                rect: ['0px', '1px', '648px', '248px', 'auto', 'auto'],
                                opacity: '0.69',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgb(62, 40, 0)","none"]
                            },
                            {
                                id: 'RS2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"RS.jpg",'0px','0px']
                            },
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['263px', '5px', '372px', '228px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">Rata Sum</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span><span style=\"font-size: 18px; color: rgb(196, 196, 196); font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">The greatest city of the Asura is a wonder of arcanic architecture. It is a great subdivided cube that floats over the surrounding terrain, impressing all the races with the might of its magic.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['-783px', '153px', '648', '250', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle3',
                                type: 'rect',
                                rect: ['0px', '1px', '648px', '248px', 'auto', 'auto'],
                                opacity: '0.69',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgb(23, 0, 29)","none"]
                            },
                            {
                                id: 'PT2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"PT.jpg",'0px','0px']
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['263px', '5px', '349px', '221px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">The Grove</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px; color: rgb(196, 196, 196);\">Sylvari awaken in the Grove and consider it their home. The Pale Tree stands at its heart. Also known as the Mother Tree, she gives love and wise guidance to her sprouts.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['-712px', '159px', '648', '250', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle4',
                                type: 'rect',
                                rect: ['0px', '1px', '648px', '248px', 'auto', 'auto'],
                                opacity: '0.69',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgb(9, 45, 0)","none"]
                            },
                            {
                                id: 'H2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"H.jpg",'0px','0px']
                            },
                            {
                                id: 'Text4',
                                type: 'text',
                                rect: ['263px', '5px', '374px', '200px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">Hoelbrak</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px; color: rgb(196, 196, 196);\">When the Elder Dragon Jormag drove norn ancestors out of the Far Shiverpeaks, the Spirits of the Wild guided them to this area, and now great halls dedicated to those spirits dominate the settlement.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group5',
                            type: 'group',
                            rect: ['1052px', '709px', '651', '251', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle5',
                                type: 'rect',
                                rect: ['0px', '1px', '648px', '248px', 'auto', 'auto'],
                                opacity: '0.69',
                                fill: ["rgba(2,2,2,1.00)"],
                                stroke: [1,"rgb(0, 14, 45)","none"]
                            },
                            {
                                id: 'BC2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"BC.jpg",'0px','0px']
                            },
                            {
                                id: 'Text5',
                                type: 'text',
                                rect: ['263px', '5px', '380px', '200px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">Black Citadel</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">​</span><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px; color: rgb(196, 196, 196);\">Built upon the ruins of the human city of Rin, the Black Citadel is the headquarters of the charr legions in Ascalon. Commanded by Smodur the Unflinching, the great city is dominated by the huge sphere at its center.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group6',
                            type: 'group',
                            rect: ['-684px', '112px', '650', '250', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'Rectangle6',
                                type: 'rect',
                                rect: ['0px', '0px', '650px', '250px', 'auto', 'auto'],
                                opacity: '0.69',
                                fill: ["rgba(0,0,0,1.00)"],
                                stroke: [1,"rgb(45, 28, 0)","none"]
                            },
                            {
                                id: 'LA2',
                                type: 'image',
                                rect: ['0px', '0px', '250px', '250px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"LA.jpg",'0px','0px']
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['263px', '5px', '384px', '239px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 35px; color: rgb(250, 250, 250); text-align: left;\">Lion's Arch</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px;\">​</span><span style=\"font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif; font-size: 18px; color: rgb(201, 201, 201);\">The most diverse and cosmopolitan city in Tyria, Lion's Arch is a melting pot where all the races gather and trade. It stands by virtue of its active navy, its financial strength, and the intelligence and cunning of its leaders.</span></p>",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1000px', '1000px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    labels: {
                        "Tyria": 0,
                        "DR": 90,
                        "RS": 375,
                        "PT": 690,
                        "H": 1060,
                        "BC": 1335,
                        "LA": 1690
                    },
                    data: [
                        [
                            "eid46",
                            "top",
                            1295,
                            40,
                            "linear",
                            "${Group5}",
                            '440px',
                            '462px'
                        ],
                        [
                            "eid51",
                            "top",
                            1645,
                            45,
                            "linear",
                            "${Group5}",
                            '462px',
                            '709px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            690,
                            310,
                            "linear",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            1000,
                            60,
                            "linear",
                            "${Group3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            90,
                            235,
                            "linear",
                            "${Group}",
                            '0',
                            '1'
                        ],
                        [
                            "eid9",
                            "opacity",
                            325,
                            50,
                            "linear",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid60",
                            "top",
                            1645,
                            45,
                            "linear",
                            "${Group6}",
                            '112px',
                            '163px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            1000,
                            0,
                            "linear",
                            "${Group4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid37",
                            "opacity",
                            1060,
                            235,
                            "linear",
                            "${Group4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid38",
                            "opacity",
                            1295,
                            40,
                            "linear",
                            "${Group4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "top",
                            1000,
                            60,
                            "linear",
                            "${Group4}",
                            '159px',
                            '160px'
                        ],
                        [
                            "eid40",
                            "top",
                            1295,
                            40,
                            "linear",
                            "${Group4}",
                            '160px',
                            '129px'
                        ],
                        [
                            "eid28",
                            "top",
                            635,
                            55,
                            "linear",
                            "${Group3}",
                            '153px',
                            '325px'
                        ],
                        [
                            "eid24",
                            "top",
                            1000,
                            60,
                            "linear",
                            "${Group3}",
                            '325px',
                            '149px'
                        ],
                        [
                            "eid63",
                            "opacity",
                            1645,
                            0,
                            "linear",
                            "${Group6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid65",
                            "opacity",
                            1690,
                            310,
                            "linear",
                            "${Group6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid27",
                            "left",
                            635,
                            55,
                            "linear",
                            "${Group3}",
                            '-783px',
                            '217px'
                        ],
                        [
                            "eid23",
                            "left",
                            1000,
                            60,
                            "linear",
                            "${Group3}",
                            '217px',
                            '-779px'
                        ],
                        [
                            "eid58",
                            "left",
                            1645,
                            45,
                            "linear",
                            "${Group6}",
                            '-684px',
                            '152px'
                        ],
                        [
                            "eid47",
                            "opacity",
                            1295,
                            0,
                            "linear",
                            "${Group5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid49",
                            "opacity",
                            1335,
                            310,
                            "linear",
                            "${Group5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid52",
                            "opacity",
                            1645,
                            45,
                            "linear",
                            "${Group5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "left",
                            325,
                            50,
                            "linear",
                            "${Group}",
                            '73px',
                            '-419px'
                        ],
                        [
                            "eid10",
                            "top",
                            325,
                            50,
                            "linear",
                            "${Group}",
                            '41px',
                            '-375px'
                        ],
                        [
                            "eid16",
                            "top",
                            635,
                            55,
                            "linear",
                            "${Group2}",
                            '657px',
                            '933px'
                        ],
                        [
                            "eid32",
                            "left",
                            1000,
                            60,
                            "linear",
                            "${Group4}",
                            '-712px',
                            '190px'
                        ],
                        [
                            "eid39",
                            "left",
                            1295,
                            40,
                            "linear",
                            "${Group4}",
                            '190px',
                            '-712px'
                        ],
                        [
                            "eid44",
                            "left",
                            1295,
                            40,
                            "linear",
                            "${Group5}",
                            '-684px',
                            '329px'
                        ],
                        [
                            "eid50",
                            "left",
                            1645,
                            45,
                            "linear",
                            "${Group5}",
                            '329px',
                            '1052px'
                        ],
                        [
                            "eid13",
                            "opacity",
                            375,
                            260,
                            "linear",
                            "${Group2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14",
                            "opacity",
                            635,
                            55,
                            "linear",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "left",
                            635,
                            55,
                            "linear",
                            "${Group2}",
                            '126px',
                            '-934px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("map_edgeActions.js");
})("EDGE-4986414");
