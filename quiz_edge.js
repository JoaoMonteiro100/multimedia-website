/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='static/images/quiz/',
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
                            id: 'Text2',
                            type: 'text',
                            rect: ['37px', '13px', '471px', '143px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 100px; color: rgb(87, 0, 0); font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">GW2 Quiz</span></p>",
                            align: "left",
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [24, "px"], "rgba(150,150,150,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(119,119,119,1.00)", 0, 0, 6]
                        },
                        {
                            id: 'Text2Copy',
                            type: 'text',
                            rect: ['398px', '120px', '459px', '176px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: right;\">​<span style=\"font-size: 66px; color: rgb(92, 92, 92); font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;\">Can you unveil the mists?</span></p>",
                            align: "left",
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [39, "px"], "rgba(150,150,150,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(119,119,119,1.00)", 0, 0, 6]
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['195', '306px', '509', '78', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            c: [
                            {
                                id: 'RoundRect',
                                type: 'rect',
                                rect: ['0px', '0px', '509px', '78px', 'auto', 'auto'],
                                borderRadius: ["10px", "10px", "10px", "10px"],
                                fill: ["rgba(192,192,192,1)",[270,[['rgba(100,13,13,1.00)',0],['rgba(21,0,0,1.00)',100]]]],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            },
                            {
                                id: 'Text3',
                                type: 'text',
                                rect: ['83px', '7px', '343px', '65px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;color:#fff;\">​START</p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [52, "px"], "rgba(255,255,255,1.00)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['-9px', '24px', '173px', '96px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;color:#6C0000;\">​1</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [70, "px"], "rgba(82,5,5,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text5',
                            type: 'text',
                            rect: ['103px', '-83px', '754px', '96px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​What do the Asura look like?</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [56, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text4Copy',
                            type: 'text',
                            rect: ['-40px', '-96px', '173px', '96px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;color:#6C0000;\">​2</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [70, "px"], "rgba(82,5,5,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text5Copy',
                            type: 'text',
                            rect: ['103px', '-83px', '754px', '96px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">How many professions exist?</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [56, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'sylvari-race',
                            type: 'image',
                            rect: ['244px', '140px', '146px', '406px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"sylvari-race.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(115,115,115,1.00)", 0, 0, 5]
                        },
                        {
                            id: 'norn-race',
                            type: 'image',
                            rect: ['-30px', '389px', '265px', '550px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"norn-race.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(115,115,115,1.00)", 0, 0, 5]
                        },
                        {
                            id: 'human-race',
                            type: 'image',
                            rect: ['538px', '436px', '166px', '431px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"human-race.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(115,115,115,1.00)", 0, 0, 5]
                        },
                        {
                            id: 'charr-race',
                            type: 'image',
                            rect: ['710px', '424px', '265px', '419px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charr-race.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(115,115,115,1.00)", 0, 0, 5]
                        },
                        {
                            id: 'asura-race',
                            type: 'image',
                            rect: ['410px', '469px', '116px', '265px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"asura-race.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(115,115,115,1.00)", 0, 0, 5]
                        },
                        {
                            id: 'Group2',
                            type: 'group',
                            rect: ['-142', '-833px', '1157', '648', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            c: [
                            {
                                id: 'correct2',
                                type: 'image',
                                rect: ['0px', '0px', '1157px', '648px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"correct.png",'0px','0px'],
                                boxShadow: ["", 3, 3, 0, 0, "rgba(61,61,61,1.00)"]
                            },
                            {
                                id: 'Text6',
                                type: 'text',
                                rect: ['383px', '220px', '418px', '78px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255);\">CORRECT</span></p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [56, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            },
                            {
                                id: 'Text6Copy',
                                type: 'text',
                                rect: ['383px', '277px', '418px', '78px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(197, 197, 197); font-size: 33px;\">Next question »</span></p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [22, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'Group3',
                            type: 'group',
                            rect: ['-1549px', '-159px', '1185', '664', 'auto', 'auto'],
                            opacity: '0',
                            c: [
                            {
                                id: 'incorrect2',
                                type: 'image',
                                rect: ['-47px', '-826px', '1185px', '664px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"incorrect.png",'0px','0px']
                            },
                            {
                                id: 'Text7',
                                type: 'text',
                                rect: ['334px', '206px', '459px', '96px', 'auto', 'auto'],
                                cursor: 'pointer',
                                text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">I​NCORRECT</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"color: rgb(39, 0, 0); font-size: 32px;\">Try again!</span></p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [22, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "32px", "", "none"]
                            }]
                        },
                        {
                            id: 'Text8',
                            type: 'text',
                            rect: ['-200px', '284px', '160px', '123px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​4</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [92, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text8Copy',
                            type: 'text',
                            rect: ['382px', '462px', '160px', '123px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​8</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [92, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text8Copy2',
                            type: 'text',
                            rect: ['969px', '320px', '160px', '123px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "<p style=\"margin: 0px;\">​12</p>",
                            align: "center",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [92, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Group4',
                            type: 'group',
                            rect: ['1015px', '536px', '183', '176', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            c: [
                            {
                                id: 'bola',
                                type: 'image',
                                rect: ['0px', '0px', '183px', '176px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"bola.png",'0px','0px']
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['7px', '66px', '170px', '96px', 'auto', 'auto'],
                                text: "<p style=\"margin: 0px; line-height: 22px;\">​<span style=\"font-size: 37px; color: rgb(255, 255, 255);\">Next question »</span></p>",
                                align: "center",
                                font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [25, "px"], "rgba(82,82,82,1)", "400", "none", "normal", "break-word", "normal"],
                                textStyle: ["", "", "", "", "none"]
                            }]
                        },
                        {
                            id: 'correct',
                            type: 'image',
                            rect: ['-387px', '-767px', '1236px', '692px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"correct.png",'0px','0px']
                        },
                        {
                            id: 'Text9',
                            type: 'text',
                            rect: ['77px', '-253px', '418px', '113px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"color: rgb(255, 255, 255); font-size: 56px;\">CORRECT</span></p><p style=\"margin: 0px; text-align: center;\"><span style=\"color: rgb(215, 215, 215);\">​«&nbsp;</span><span style=\"color: rgb(215, 215, 215); font-size: 33px;\">Restart quiz</span></p>",
                            align: "left",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [39, "px"], "rgba(150,150,150,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "39px", "", "none"]
                        },
                        {
                            id: 'incorrect',
                            type: 'image',
                            rect: ['-1322px', '-825px', '1413px', '791px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"incorrect.png",'0px','0px']
                        },
                        {
                            id: 'Text10',
                            type: 'text',
                            rect: ['-704px', '-268px', '391px', '123px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 37px;\">​<span style=\"font-size: 56px; color: rgb(0, 0, 0);\">INCORRECT</span></p><p style=\"margin: 0px; text-align: center; line-height: 37px;\">​<span style=\"font-size: 33px; color: rgb(38, 2, 2);\">Try again!</span></p>",
                            align: "left",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [39, "px"], "rgba(150,150,150,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bola2',
                            type: 'image',
                            rect: ['914px', '419px', '183px', '176px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bola.png",'0px','0px']
                        },
                        {
                            id: 'Text11',
                            type: 'text',
                            rect: ['935px', '467px', '146px', '113px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            text: "<p style=\"margin: 0px; text-align: center; line-height: 28px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 35px;\">Restart quiz</span></p><p style=\"margin: 0px; text-align: center; line-height: 28px;\"><span style=\"color: rgb(255, 255, 255); font-size: 35px;\">​«</span></p>",
                            align: "left",
                            font: ['\'Trebuchet MS\', Arial, Helvetica, sans-serif', [39, "px"], "rgba(150,150,150,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '900px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)",[50,50,false,'farthest-side',[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]]]
                        }
                    }
                },
                timeline: {
                    duration: 5900,
                    autoPlay: true,
                    labels: {
                        "Begin": 0,
                        "Start": 2500,
                        "Q1": 3704,
                        "Q1 right": 3853,
                        "Q1 wrong": 3953,
                        "Q2": 4154,
                        "Q22": 5421,
                        "Q2 right": 5500,
                        "Q2 wrong": 5655
                    },
                    data: [
                        [
                            "eid104",
                            "font-size",
                            3894,
                            8,
                            "easeInCubic",
                            "${Text7}",
                            '22px',
                            '61px'
                        ],
                        [
                            "eid14",
                            "height",
                            423,
                            0,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid192",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text4Copy}",
                            '-96px',
                            '160px'
                        ],
                        [
                            "eid164",
                            "top",
                            4404,
                            398,
                            "easeInOutExpo",
                            "${Text4Copy}",
                            '160px',
                            '24px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            3388,
                            71,
                            "easeInOutBounce",
                            "${norn-race}",
                            '0',
                            '1'
                        ],
                        [
                            "eid336",
                            "left",
                            5500,
                            111,
                            "linear",
                            "${incorrect}",
                            '-1322px',
                            '-1470px'
                        ],
                        [
                            "eid283",
                            "left",
                            5611,
                            44,
                            "linear",
                            "${incorrect}",
                            '-1470px',
                            '-221px'
                        ],
                        [
                            "eid181",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Group2}",
                            '-142px',
                            '-1305px'
                        ],
                        [
                            "eid15",
                            "width",
                            423,
                            0,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '459px',
                            '459px'
                        ],
                        [
                            "eid117",
                            "left",
                            3894,
                            0,
                            "easeInCubic",
                            "${incorrect2}",
                            '-47px',
                            '-47px'
                        ],
                        [
                            "eid217",
                            "left",
                            3902,
                            185,
                            "linear",
                            "${Group4}",
                            '1015px',
                            '693px'
                        ],
                        [
                            "eid223",
                            "left",
                            4087,
                            67,
                            "linear",
                            "${Group4}",
                            '693px',
                            '-267px'
                        ],
                        [
                            "eid206",
                            "top",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8Copy}",
                            '462px',
                            '181px'
                        ],
                        [
                            "eid33",
                            "opacity",
                            2000,
                            250,
                            "easeInOutExpo",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            4154,
                            250,
                            "easeInOutExpo",
                            "${Text4Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid326",
                            "opacity",
                            5655,
                            149,
                            "linear",
                            "${Text11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid333",
                            "opacity",
                            5804,
                            96,
                            "linear",
                            "${Text11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid286",
                            "top",
                            5611,
                            44,
                            "linear",
                            "${Text10}",
                            '-548px',
                            '-268px'
                        ],
                        [
                            "eid297",
                            "top",
                            5655,
                            149,
                            "linear",
                            "${Text10}",
                            '-268px',
                            '157px'
                        ],
                        [
                            "eid299",
                            "top",
                            5804,
                            96,
                            "linear",
                            "${Text10}",
                            '157px',
                            '-280px'
                        ],
                        [
                            "eid271",
                            "opacity",
                            5421,
                            79,
                            "linear",
                            "${Text9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            5611,
                            44,
                            "linear",
                            "${Text9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid90",
                            "color",
                            3000,
                            0,
                            "easeInOutBounce",
                            "${Text4}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid91",
                            "color",
                            3500,
                            0,
                            "easeInOutBounce",
                            "${Text4}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid92",
                            "color",
                            4087,
                            0,
                            "easeInOutBounce",
                            "${Text4}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid71",
                            "top",
                            3305,
                            83,
                            "easeInOutBounce",
                            "${human-race}",
                            '436px',
                            '140px'
                        ],
                        [
                            "eid172",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${human-race}",
                            '140px',
                            '164px'
                        ],
                        [
                            "eid208",
                            "left",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8Copy2}",
                            '969px',
                            '627px'
                        ],
                        [
                            "eid214",
                            "line-height",
                            4087,
                            0,
                            "linear",
                            "${Text7}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid87",
                            "opacity",
                            3500,
                            117,
                            "easeInOutBounce",
                            "${human-race}",
                            '0',
                            '1'
                        ],
                        [
                            "eid179",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text5}",
                            '103px',
                            '-1060px'
                        ],
                        [
                            "eid83",
                            "opacity",
                            3423,
                            77,
                            "easeInOutBounce",
                            "${sylvari-race}",
                            '0',
                            '1'
                        ],
                        [
                            "eid202",
                            "left",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8}",
                            '-200px',
                            '94px'
                        ],
                        [
                            "eid287",
                            "left",
                            5611,
                            44,
                            "linear",
                            "${Text10}",
                            '-704px',
                            '246px'
                        ],
                        [
                            "eid105",
                            "left",
                            3894,
                            8,
                            "easeInCubic",
                            "${Text7}",
                            '334px',
                            '324px'
                        ],
                        [
                            "eid267",
                            "top",
                            5421,
                            79,
                            "linear",
                            "${Text9}",
                            '-253px',
                            '-285px'
                        ],
                        [
                            "eid347",
                            "top",
                            5500,
                            111,
                            "linear",
                            "${Text9}",
                            '-285px',
                            '157px'
                        ],
                        [
                            "eid279",
                            "top",
                            5611,
                            44,
                            "linear",
                            "${Text9}",
                            '157px',
                            '-287px'
                        ],
                        [
                            "eid37",
                            "left",
                            2750,
                            398,
                            "easeInOutExpo",
                            "${Text4}",
                            '363px',
                            '-9px'
                        ],
                        [
                            "eid169",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text4}",
                            '-9px',
                            '-1172px'
                        ],
                        [
                            "eid31",
                            "opacity",
                            2000,
                            250,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid321",
                            "left",
                            5655,
                            149,
                            "linear",
                            "${Text11}",
                            '935px',
                            '695px'
                        ],
                        [
                            "eid329",
                            "left",
                            5804,
                            96,
                            "linear",
                            "${Text11}",
                            '695px',
                            '1015px'
                        ],
                        [
                            "eid303",
                            "opacity",
                            5674,
                            130,
                            "linear",
                            "${Text10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid301",
                            "opacity",
                            5804,
                            96,
                            "linear",
                            "${Text10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid323",
                            "left",
                            5655,
                            149,
                            "linear",
                            "${bola2}",
                            '914px',
                            '674px'
                        ],
                        [
                            "eid331",
                            "left",
                            5804,
                            96,
                            "linear",
                            "${bola2}",
                            '674px',
                            '994px'
                        ],
                        [
                            "eid4",
                            "left",
                            168,
                            470,
                            "easeInOutExpo",
                            "${Text2}",
                            '-471px',
                            '37px'
                        ],
                        [
                            "eid17",
                            "left",
                            638,
                            255,
                            "easeInOutExpo",
                            "${Text2}",
                            '37px',
                            '41px'
                        ],
                        [
                            "eid199",
                            "left",
                            2500,
                            316,
                            "easeInOutExpo",
                            "${Text2}",
                            '41px',
                            '-240px'
                        ],
                        [
                            "eid185",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${sylvari-race}",
                            '244px',
                            '-919px'
                        ],
                        [
                            "eid191",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text4Copy}",
                            '-40px',
                            '363px'
                        ],
                        [
                            "eid163",
                            "left",
                            4404,
                            398,
                            "easeInOutExpo",
                            "${Text4Copy}",
                            '363px',
                            '-9px'
                        ],
                        [
                            "eid315",
                            "height",
                            5804,
                            0,
                            "linear",
                            "${bola2}",
                            '176px',
                            '176px'
                        ],
                        [
                            "eid6",
                            "top",
                            168,
                            470,
                            "easeInOutExpo",
                            "${Text2}",
                            '57px',
                            '62px'
                        ],
                        [
                            "eid16",
                            "top",
                            638,
                            255,
                            "easeInOutExpo",
                            "${Text2}",
                            '62px',
                            '13px'
                        ],
                        [
                            "eid200",
                            "top",
                            2500,
                            316,
                            "easeInOutExpo",
                            "${Text2}",
                            '13px',
                            '-218px'
                        ],
                        [
                            "eid204",
                            "top",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8}",
                            '284px',
                            '181px'
                        ],
                        [
                            "eid98",
                            "opacity",
                            3704,
                            190,
                            "easeInCubic",
                            "${Group2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid99",
                            "opacity",
                            3894,
                            8,
                            "easeInOutBounce",
                            "${Group2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid13",
                            "font-size",
                            423,
                            0,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '39px',
                            '39px'
                        ],
                        [
                            "eid159",
                            "color",
                            4654,
                            0,
                            "easeInOutBounce",
                            "${Text4Copy}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid160",
                            "color",
                            5087,
                            0,
                            "easeInOutBounce",
                            "${Text4Copy}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid161",
                            "color",
                            5674,
                            0,
                            "easeInOutBounce",
                            "${Text4Copy}",
                            'rgba(82,5,5,1.00)',
                            'rgba(82,5,5,1.00)'
                        ],
                        [
                            "eid22",
                            "font-size",
                            1220,
                            0,
                            "easeInOutExpo",
                            "${Text3}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid165",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${asura-race}",
                            '410px',
                            '-753px'
                        ],
                        [
                            "eid24",
                            "top",
                            1220,
                            0,
                            "easeInOutExpo",
                            "${RoundRect}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid337",
                            "top",
                            5500,
                            111,
                            "linear",
                            "${incorrect}",
                            '-825px',
                            '-743px'
                        ],
                        [
                            "eid282",
                            "top",
                            5611,
                            44,
                            "linear",
                            "${incorrect}",
                            '-743px',
                            '-534px'
                        ],
                        [
                            "eid296",
                            "top",
                            5655,
                            149,
                            "linear",
                            "${incorrect}",
                            '-534px',
                            '-109px'
                        ],
                        [
                            "eid298",
                            "top",
                            5804,
                            96,
                            "linear",
                            "${incorrect}",
                            '-109px',
                            '-546px'
                        ],
                        [
                            "eid171",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${human-race}",
                            '538px',
                            '-625px'
                        ],
                        [
                            "eid2",
                            "background-image",
                            0,
                            750,
                            "linear",
                            "${Stage}",
                            [50,50,false,'farthest-side',[['rgba(255,255,255,1.00)',0],['rgba(255,255,255,1.00)',100]]],
                            [50,50,false,'farthest-side',[['rgba(255,255,255,1.00)',0],['rgba(213,213,213,1.00)',100]]]
                        ],
                        [
                            "eid284",
                            "height",
                            5611,
                            44,
                            "linear",
                            "${incorrect}",
                            '791px',
                            '720px'
                        ],
                        [
                            "eid328",
                            "opacity",
                            5655,
                            149,
                            "linear",
                            "${bola2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid334",
                            "opacity",
                            5804,
                            96,
                            "linear",
                            "${bola2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid322",
                            "top",
                            5655,
                            149,
                            "linear",
                            "${Text11}",
                            '467px',
                            '229px'
                        ],
                        [
                            "eid330",
                            "top",
                            5804,
                            96,
                            "linear",
                            "${Text11}",
                            '229px',
                            '280px'
                        ],
                        [
                            "eid177",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${norn-race}",
                            '-30px',
                            '-1193px'
                        ],
                        [
                            "eid316",
                            "width",
                            5804,
                            0,
                            "linear",
                            "${bola2}",
                            '183px',
                            '183px'
                        ],
                        [
                            "eid302",
                            "opacity",
                            5674,
                            130,
                            "linear",
                            "${incorrect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid300",
                            "opacity",
                            5804,
                            96,
                            "linear",
                            "${incorrect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid225",
                            "top",
                            1220,
                            406,
                            "linear",
                            "${Text3}",
                            '5px',
                            '7px'
                        ],
                        [
                            "eid226",
                            "top",
                            1626,
                            124,
                            "linear",
                            "${Text3}",
                            '7px',
                            '8px'
                        ],
                        [
                            "eid335",
                            "left",
                            5421,
                            79,
                            "linear",
                            "${correct}",
                            '-387px',
                            '-708px'
                        ],
                        [
                            "eid338",
                            "left",
                            5500,
                            111,
                            "linear",
                            "${correct}",
                            '-708px',
                            '-176px'
                        ],
                        [
                            "eid344",
                            "left",
                            5611,
                            44,
                            "linear",
                            "${correct}",
                            '-176px',
                            '-240px'
                        ],
                        [
                            "eid342",
                            "left",
                            5655,
                            149,
                            "linear",
                            "${correct}",
                            '-240px',
                            '-80px'
                        ],
                        [
                            "eid139",
                            "opacity",
                            3894,
                            8,
                            "easeInCubic",
                            "${Group3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "opacity",
                            3902,
                            185,
                            "easeInCubic",
                            "${Group3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid324",
                            "top",
                            5655,
                            149,
                            "linear",
                            "${bola2}",
                            '419px',
                            '181px'
                        ],
                        [
                            "eid332",
                            "top",
                            5804,
                            96,
                            "linear",
                            "${bola2}",
                            '181px',
                            '232px'
                        ],
                        [
                            "eid285",
                            "width",
                            5611,
                            44,
                            "linear",
                            "${incorrect}",
                            '1413px',
                            '1313px'
                        ],
                        [
                            "eid121",
                            "top",
                            3894,
                            8,
                            "easeInCubic",
                            "${Group3}",
                            '-159px',
                            '-93px'
                        ],
                        [
                            "eid155",
                            "top",
                            3902,
                            185,
                            "easeInOutExpo",
                            "${Group3}",
                            '-93px',
                            '-36px'
                        ],
                        [
                            "eid176",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Group3}",
                            '-36px',
                            '-12px'
                        ],
                        [
                            "eid103",
                            "top",
                            3894,
                            8,
                            "easeInCubic",
                            "${incorrect2}",
                            '-826px',
                            '-35px'
                        ],
                        [
                            "eid345",
                            "left",
                            5500,
                            111,
                            "linear",
                            "${Text9}",
                            '77px',
                            '241px'
                        ],
                        [
                            "eid278",
                            "left",
                            5611,
                            44,
                            "linear",
                            "${Text9}",
                            '241px',
                            '247px'
                        ],
                        [
                            "eid41",
                            "top",
                            3148,
                            240,
                            "easeInOutBounce",
                            "${Text5}",
                            '-83px',
                            '37px'
                        ],
                        [
                            "eid180",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text5}",
                            '37px',
                            '61px'
                        ],
                        [
                            "eid101",
                            "top",
                            3704,
                            190,
                            "easeInCubic",
                            "${Group2}",
                            '-833px',
                            '-77px'
                        ],
                        [
                            "eid102",
                            "top",
                            3894,
                            8,
                            "easeInCubic",
                            "${Group2}",
                            '-77px',
                            '-761px'
                        ],
                        [
                            "eid182",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Group2}",
                            '-761px',
                            '-737px'
                        ],
                        [
                            "eid106",
                            "top",
                            3894,
                            8,
                            "easeInCubic",
                            "${Text7}",
                            '271px',
                            '206px'
                        ],
                        [
                            "eid215",
                            "top",
                            3902,
                            185,
                            "linear",
                            "${Text7}",
                            '206px',
                            '215px'
                        ],
                        [
                            "eid158",
                            "top",
                            4802,
                            240,
                            "easeInOutBounce",
                            "${Text5Copy}",
                            '-83px',
                            '37px'
                        ],
                        [
                            "eid63",
                            "top",
                            3305,
                            83,
                            "easeInOutBounce",
                            "${charr-race}",
                            '424px',
                            '128px'
                        ],
                        [
                            "eid174",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${charr-race}",
                            '128px',
                            '152px'
                        ],
                        [
                            "eid222",
                            "opacity",
                            3902,
                            185,
                            "linear",
                            "${Group4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${charr-race}",
                            '710px',
                            '-453px'
                        ],
                        [
                            "eid28",
                            "opacity",
                            1077,
                            923,
                            "easeInOutExpo",
                            "${Group}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid29",
                            "opacity",
                            2000,
                            250,
                            "easeInOutExpo",
                            "${Group}",
                            '1',
                            '0'
                        ],
                        [
                            "eid212",
                            "left",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8Copy}",
                            '382px',
                            '356px'
                        ],
                        [
                            "eid85",
                            "opacity",
                            3459,
                            99,
                            "easeInOutBounce",
                            "${asura-race}",
                            '0',
                            '1'
                        ],
                        [
                            "eid273",
                            "opacity",
                            5421,
                            79,
                            "linear",
                            "${correct}",
                            '0',
                            '1'
                        ],
                        [
                            "eid280",
                            "opacity",
                            5611,
                            44,
                            "linear",
                            "${correct}",
                            '1',
                            '0'
                        ],
                        [
                            "eid219",
                            "top",
                            3902,
                            185,
                            "linear",
                            "${Group4}",
                            '536px',
                            '200px'
                        ],
                        [
                            "eid224",
                            "top",
                            4087,
                            67,
                            "linear",
                            "${Group4}",
                            '200px',
                            '507px'
                        ],
                        [
                            "eid210",
                            "top",
                            5042,
                            379,
                            "easeInOutBounce",
                            "${Text8Copy2}",
                            '320px',
                            '181px'
                        ],
                        [
                            "eid269",
                            "top",
                            5421,
                            79,
                            "linear",
                            "${correct}",
                            '-767px',
                            '-728px'
                        ],
                        [
                            "eid341",
                            "top",
                            5500,
                            111,
                            "linear",
                            "${correct}",
                            '-728px',
                            '-97px'
                        ],
                        [
                            "eid277",
                            "top",
                            5611,
                            44,
                            "linear",
                            "${correct}",
                            '-97px',
                            '-781px'
                        ],
                        [
                            "eid343",
                            "top",
                            5655,
                            149,
                            "linear",
                            "${correct}",
                            '-781px',
                            '-829px'
                        ],
                        [
                            "eid8",
                            "top",
                            423,
                            797,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '443px',
                            '120px'
                        ],
                        [
                            "eid196",
                            "top",
                            2250,
                            250,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '120px',
                            '317px'
                        ],
                        [
                            "eid65",
                            "top",
                            3305,
                            83,
                            "easeInOutBounce",
                            "${norn-race}",
                            '389px',
                            '93px'
                        ],
                        [
                            "eid178",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${norn-race}",
                            '93px',
                            '117px'
                        ],
                        [
                            "eid67",
                            "top",
                            3305,
                            83,
                            "easeInOutBounce",
                            "${asura-race}",
                            '469px',
                            '173px'
                        ],
                        [
                            "eid166",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${asura-race}",
                            '173px',
                            '197px'
                        ],
                        [
                            "eid74",
                            "top",
                            2250,
                            250,
                            "easeInOutExpo",
                            "${Group}",
                            '306px',
                            '524px'
                        ],
                        [
                            "eid36",
                            "opacity",
                            2500,
                            250,
                            "easeInOutExpo",
                            "${Text4}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid69",
                            "top",
                            3305,
                            83,
                            "easeInOutBounce",
                            "${sylvari-race}",
                            '429px',
                            '140px'
                        ],
                        [
                            "eid186",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${sylvari-race}",
                            '140px',
                            '164px'
                        ],
                        [
                            "eid89",
                            "opacity",
                            3558,
                            146,
                            "easeInOutBounce",
                            "${charr-race}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "left",
                            423,
                            797,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '718px',
                            '398px'
                        ],
                        [
                            "eid195",
                            "left",
                            2250,
                            250,
                            "easeInOutExpo",
                            "${Text2Copy}",
                            '398px',
                            '927px'
                        ],
                        [
                            "eid120",
                            "left",
                            3894,
                            8,
                            "easeInCubic",
                            "${Group3}",
                            '-1549px',
                            '-113px'
                        ],
                        [
                            "eid154",
                            "left",
                            3902,
                            185,
                            "easeInOutExpo",
                            "${Group3}",
                            '-113px',
                            '-112px'
                        ],
                        [
                            "eid175",
                            "left",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Group3}",
                            '-112px',
                            '-1275px'
                        ],
                        [
                            "eid38",
                            "top",
                            2750,
                            398,
                            "easeInOutExpo",
                            "${Text4}",
                            '160px',
                            '24px'
                        ],
                        [
                            "eid170",
                            "top",
                            4087,
                            67,
                            "easeInOutExpo",
                            "${Text4}",
                            '24px',
                            '48px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("quiz_edgeActions.js");
})("EDGE-435226");
