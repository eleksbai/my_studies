webpackJsonp([1], {
    "0KPF": function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("Vp57"), C = m.n(a), o = m("BNWl"), A = m.n(o), F = function () {
            function u(u, n) {
                for (var m = 0; m < n.length; m++) {
                    var s = n[m];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                }
            }

            return function (n, m, s) {
                return m && u(n.prototype, m), s && u(n, s), n
            }
        }(), i = function (u) {
            function n(u) {
                s(this, n);
                var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                return m.state = {
                    data: u.data,
                    forceFit: !0,
                    width: 100,
                    height: 500,
                    plotCfg: {margin: [10, 50, 80, 180]}
                }, m.Chart = r()(function (u) {
                    m.chart = u, u.axis("brand", {title: null}), u.col("num", {alias: "销售数量(个)"}), u.coord("rect").transpose(), u.interval().position("brand*num"), u.render()
                }), m
            }

            return e(n, u), F(n, [{
                key: "render", value: function () {
                    return C.a.createElement(this.Chart, this.state)
                }
            }]), n
        }(a.Component);
        i.propTypes = {data: A.a.array.isRequired}, n.a = i
    }, "31aq": function (u, n) {
        u.exports = [{sku: "938542CC996 00020", num: "517"}, {
            sku: "938542 CC996 00020",
            num: "387"
        }, {sku: "938542 CC999 00020", num: "253"}, {sku: "50332505 001", num: "246"}, {
            sku: "50286255 002",
            num: "233"
        }, {sku: "30F6GM9M2L187", num: "225"}, {sku: "938542CC996 00152", num: "208"}, {
            sku: "3Y6T35 6JPFZ 01100 M",
            num: "189"
        }, {sku: "30F6GM9M2L001", num: "177"}, {sku: "3Y6T35 6JPFZ 01200 M", num: "172"}, {
            sku: "3Y6T35 6JPFZ 01200 L",
            num: "172"
        }, {sku: "bf0001", num: "151"}, {sku: "3Y6T35 6JPFZ 01100 L", num: "150"}, {
            sku: "30F6SM9M2L092",
            num: "134"
        }, {sku: "114984 AA61Y 1000 105", num: "116"}, {
            sku: "411924 CWC1N 100095",
            num: "114"
        }, {sku: "411924 CWC1N 1000100", num: "109"}, {sku: "50327643 001", num: "105"}, {
            sku: "50315624 002",
            num: "102"
        }, {sku: "50218699 005", num: "101"}, {sku: "114984 AA61Y 1000 100", num: "98"}, {
            sku: "3Y6T35 6JPFZ 01200 XL",
            num: "93"
        }, {sku: "938543 CC996 00020", num: "89"}, {
            sku: "6XPV51 PJ05Z 1200 02",
            num: "87"
        }, {sku: "6XPV51 PJ05Z 1200 03", num: "87"}, {
            sku: "3Y6T35 6JPFZ 01100 S",
            num: "86"
        }, {sku: "411924 CWC1N 1000105", num: "86"}, {
            sku: "3Y6T35 6JPFZ 01100 XL",
            num: "84"
        }, {sku: "3Y6T35 6JPFZ 01200 S", num: "84"}, {sku: "851173 MOONSTONE", num: "82"}, {
            sku: "411924 CWC1N 100090",
            num: "80"
        }, {sku: "30F6GM9M2L800", num: "78"}, {sku: "3962490 M", num: "77"}, {
            sku: "114984 AA61Y 1000 95",
            num: "75"
        }, {sku: "3962490 L", num: "75"}, {sku: "50311731 001", num: "74"}, {
            sku: "938543CC996 00020",
            num: "74"
        }, {sku: "BZDLW2 9345 NTM", num: "70"}, {sku: "50332504 001", num: "70"}, {
            sku: "3965066 M",
            num: "69"
        }, {sku: "3Y6T35 6JPFZ 1541 L", num: "68"}, {sku: "851168 NAVYB", num: "68"}, {
            sku: "851170 RUB",
            num: "68"
        }, {sku: "3Y6T35 6JPFZ 1541 M", num: "66"}, {sku: "3965066 L", num: "65"}, {
            sku: "922548 CC852 14131",
            num: "64"
        }, {sku: "30F6GM9M2L414", num: "62"}, {sku: "30F6SM9M2L405", num: "60"}, {
            sku: "931507 CC884 00152",
            num: "59"
        }, {sku: "53083 LI/BLACK", num: "58"}, {sku: "851163 ACERO", num: "57"}, {
            sku: "55775 LI/DEEP CORAL",
            num: "57"
        }, {sku: "938542 CC991 00020", num: "56"}, {sku: "3965066 S", num: "56"}, {
            sku: "50286255",
            num: "56"
        }, {sku: "50322417 002", num: "54"}, {sku: "50322416 002", num: "53"}, {
            sku: "922548 CC852 39635",
            num: "52"
        }, {sku: "3962490 XL", num: "52"}, {sku: "3962490 S", num: "51"}, {
            sku: "50327642 001",
            num: "51"
        }, {sku: "50315554 002", num: "51"}, {sku: "50322204", num: "50"}, {
            sku: "8N6T99 6JPFZ 01200 03",
            num: "50"
        }, {sku: "8N6T99 6JPFZ 01200 M", num: "49"}, {
            sku: "3Y6T24 6J00Z 1100 M",
            num: "46"
        }, {sku: "6XPP82 PJ11Z 3905 02", num: "46"}, {sku: "922215 7P772 11530", num: "46"}, {
            sku: "922548 CC852 15373",
            num: "45"
        }, {sku: "932524 CC993 00541", num: "45"}, {sku: "395599903", num: "44"}, {
            sku: "932063 CC997 00010",
            num: "43"
        }, {sku: "3Y6T24 6J00Z 1100 L", num: "43"}, {sku: "50322520", num: "43"}, {
            sku: "30T7GM9M2A857",
            num: "43"
        }, {sku: "922534 CC856 00070", num: "42"}, {sku: "395599402", num: "42"}, {
            sku: "931506 CC883 00020",
            num: "42"
        }, {sku: "8N6D01 6JPFZ 1100 L", num: "42"}, {
            sku: "3Y6T22 6J00Z 1100 M",
            num: "42"
        }, {sku: "8N6D01 6JPFZ 1100 M", num: "41"}, {sku: "932040 6A912 00020", num: "41"}, {
            sku: "820676",
            num: "41"
        }, {sku: "938542CC991 00020", num: "41"}, {sku: "922526 CC855 00335", num: "41"}, {
            sku: "938543 CC999 00020",
            num: "40"
        }, {sku: "BELT BOX", num: "40"}, {sku: "57719 DK/CHALK YANKEE FLORAL", num: "40"}, {
            sku: "399116002",
            num: "40"
        }, {sku: "147351 4G704 1166", num: "39"}, {sku: "395599902", num: "39"}, {
            sku: "851172 ZAFFERANO",
            num: "39"
        }, {sku: "4557597 02", num: "38"}, {sku: "50322203", num: "38"}, {
            sku: "932074 7P923 00535",
            num: "38"
        }, {sku: "851166 COLOR CORALLO", num: "38"}, {sku: "401069501", num: "38"}, {
            sku: "30S5GKPT1C406",
            num: "38"
        }, {sku: "C522YU3 G8", num: "37"}, {sku: "922215 7P772 00020", num: "37"}, {
            sku: "57716 DK/CHALK YANKEE FLORAL",
            num: "36"
        }, {sku: "401069502", num: "36"}, {sku: "BCRCC1 965B NER", num: "35"}, {
            sku: "922528 CC855 00631",
            num: "35"
        }, {sku: "ZPJ45 989C NTM", num: "35"}, {sku: "BAFCC1 959A NER", num: "35"}, {
            sku: "3962490 XS",
            num: "35"
        }, {sku: "ZPJ45 9331 NTM", num: "35"}, {sku: "30S7GCYS1L187", num: "35"}, {
            sku: "4557597 03",
            num: "35"
        }, {sku: "6XPV51 PJ05Z 1200 01", num: "35"}, {sku: "922527 CC855 00020", num: "35"}, {
            sku: "922215 7P772 08170",
            num: "35"
        }, {sku: "50292333 492 03", num: "34"}, {sku: "869427 PEQ", num: "34"}, {
            sku: "395599403",
            num: "34"
        }, {sku: "307980 A0V1G 1000", num: "33"}, {sku: "937502 CC996 00020", num: "33"}, {
            sku: "8N6T99 6JPFZ 01100 M",
            num: "33"
        }, {sku: "820673 ARES", num: "33"}, {sku: "851164 AGAVE", num: "33"}, {
            sku: "932039 6A912 00020",
            num: "33"
        }, {sku: "401069503", num: "33"}, {sku: "3Y6T24 6J00Z 01579 L", num: "32"}, {
            sku: "50311787",
            num: "32"
        }, {sku: "808034 AQ0", num: "32"}, {sku: "387232902", num: "32"}, {
            sku: "50292333 100 04",
            num: "32"
        }, {sku: "50292333 001 03", num: "31"}, {sku: "4046101", num: "31"}, {
            sku: "64798 DK/ROUGE MULTI",
            num: "31"
        }, {sku: "3Y6T22 6J00Z 1100 L", num: "31"}, {sku: "57768 LI/BLACK", num: "31"}, {
            sku: "6XPV51 PJ05Z 1200 04",
            num: "31"
        }, {sku: "6XPP82 PJ11Z 3905 03", num: "31"}, {sku: "3Y6T24 6J00Z 01579 M", num: "31"}, {
            sku: "TERINO CHOCOLATE",
            num: "31"
        }, {sku: "BAFCC1 958A NER", num: "31"}, {sku: "3965066 XL", num: "30"}, {
            sku: "50322560 004",
            num: "30"
        }, {sku: "BCVRC1 946C NIR", num: "30"}, {sku: "50292333 001 04", num: "30"}, {
            sku: "BCEVC1 988B NTM",
            num: "30"
        }, {sku: "YV3 12 58 06 240 IRIS", num: "29"}, {sku: "922215 7P772 06250", num: "29"}, {
            sku: "869428 SP7",
            num: "29"
        }, {sku: "387232602", num: "29"}, {sku: "9220286A714 18940", num: "29"}, {
            sku: "BMPPC1 935E NEN",
            num: "29"
        }, {sku: "BBOX14 VIT NTM", num: "28"}, {sku: "50236732 46503", num: "28"}, {
            sku: "399115703",
            num: "28"
        }, {sku: "3Y6F20 6JPTZ 1200 M", num: "28"}, {sku: "922548 CC852 45320", num: "28"}, {
            sku: "922222 7P770 31835",
            num: "28"
        }, {sku: "4004851 03", num: "28"}, {sku: "3Y6F20 6JPTZ 1100 M", num: "28"}, {
            sku: "MYZ5SVC06 CO001",
            num: "28"
        }, {sku: "3Y6T22 6J00Z 01579 L", num: "28"}, {sku: "BCRGM5 9348 FDT", num: "28"}, {
            sku: "3Y6T35 6JPFZ 1541 XL",
            num: "28"
        }, {sku: "50236732 64603", num: "27"}, {sku: "869429 T67", num: "27"}, {
            sku: "8NPB02 PN29Z 1200 04",
            num: "27"
        }, {sku: "2NG001QME F0216", num: "27"}, {sku: "30T3GLMM2L848", num: "27"}, {
            sku: "50315536",
            num: "27"
        }, {sku: "932063 CC997 00068", num: "27"}, {sku: "2MO5132E3E F0002", num: "27"}, {
            sku: "YV3 12 58 06 262 MENTA",
            num: "27"
        }, {sku: "922528 CC855 00574", num: "27"}, {sku: "50311786", num: "27"}, {
            sku: "932526 CC993 00020",
            num: "27"
        }, {sku: "50327642 203", num: "27"}, {sku: "50315536 002", num: "27"}, {
            sku: "922526 CC855 00631",
            num: "26"
        }, {sku: "3995507 L", num: "26"}, {sku: "932023 6A909 00020", num: "26"}, {
            sku: "3Y6T22 6J00Z 01579 M",
            num: "26"
        }, {sku: "922526 CC855 08873", num: "26"}, {sku: "3Y6T24 6J00Z 1100 XL", num: "26"}, {
            sku: "244946 A0V1G 1000",
            num: "26"
        }, {sku: "30T5SAVS2L405", num: "26"}, {sku: "30T5GAVS2L848", num: "26"}, {
            sku: "32F5SAVC1L092",
            num: "26"
        }, {sku: "932530 CC996 00020", num: "26"}, {sku: "401069402", num: "26"}, {
            sku: "850842 DOLOMIA",
            num: "26"
        }, {sku: "BSTXDY 902 BLN", num: "26"}, {sku: "938545 CC992 00020", num: "26"}, {
            sku: "6206122",
            num: "26"
        }, {sku: "2ML317053 F0216", num: "25"}, {sku: "868926", num: "25"}, {
            sku: "50292333 100 03",
            num: "25"
        }, {sku: "399116103", num: "25"}, {sku: "BSTXDY 902 TDN", num: "25"}, {
            sku: "50292333 492 04",
            num: "25"
        }, {sku: "932074 7P923 00033", num: "25"}, {sku: "3995507 M", num: "25"}, {
            sku: "C5V89S712",
            num: "25"
        }, {sku: "9320406A912 00020", num: "25"}, {
            sku: "3Y6T35 6JPFZ 01200 XXL",
            num: "25"
        }, {sku: "3Y6F20 6JPTZ 1100 L", num: "25"}, {sku: "MMK5AVE92 CO001", num: "24"}, {
            sku: "BSTXDW 9324 NER",
            num: "24"
        }, {sku: "50236735 10003", num: "24"}, {sku: "932123 7P917 00020", num: "24"}, {
            sku: "0529MR1 33",
            num: "24"
        }, {sku: "345933 0618721", num: "24"}, {sku: "30T3SSMM2L303", num: "24"}, {
            sku: "3Y6F20 6JPTZ 1200 S",
            num: "24"
        }, {sku: "8N6T99 6JPFZ 01100 L", num: "24"}, {sku: "30T3GLMM2L656", num: "24"}, {
            sku: "30F6GM9T3L001",
            num: "24"
        }, {sku: "30T5GAVS2L656", num: "24"}, {sku: "50370024 002", num: "23"}, {
            sku: "8N6D01 6JPFZ 1100 XL",
            num: "23"
        }, {sku: "387232601", num: "23"}, {sku: "0529MR1 5N", num: "23"}, {
            sku: "3Y6T22 6J00Z 1100 S",
            num: "23"
        }, {sku: "922527 CC855 08873", num: "23"}, {
            sku: "8N6T99 6JPFZ 01100 XL",
            num: "23"
        }, {sku: "938539 CC996 00020", num: "23"}, {sku: "938544 CC999 00020", num: "23"}, {
            sku: "2NG004064 F0002",
            num: "23"
        }, {sku: "922214 7P772 06250", num: "22"}, {sku: "3Y6T35 6JPFZ 1541 S", num: "22"}, {
            sku: "3Y6F20 6JPTZ 1541 L",
            num: "22"
        }, {sku: "3Y6T35 6JPFZ 01477 L", num: "22"}, {
            sku: "YV3 12 58 06 179 DEGAS",
            num: "22"
        }, {sku: "922526 CC855 00677", num: "22"}, {sku: "8N6T99 6JPFZ 01200 S", num: "22"}, {
            sku: "50236736 00103",
            num: "22"
        }, {sku: "411924 CWC1N 2140 90", num: "22"}, {sku: "384637703", num: "22"}, {
            sku: "8N6D02 6JPFZ 1200 L",
            num: "22"
        }, {sku: "8N6D01 6JPFZ 1200 M", num: "22"}, {
            sku: "3Y6F20 6JPTZ 1541 M",
            num: "22"
        }, {sku: "411924 CWC1N 100085", num: "22"}, {sku: "50312752", num: "22"}, {
            sku: "BSP0C1 9348 NER",
            num: "22"
        }, {sku: "4023403 03", num: "22"}, {sku: "50236735 10004", num: "22"}, {
            sku: "820676 O60",
            num: "22"
        }, {sku: "922571 CC864 13131", num: "21"}, {sku: "821766 AB3", num: "21"}, {
            sku: "401069401",
            num: "21"
        }, {sku: "401069500", num: "21"}, {sku: "56530 SV/PINK", num: "21"}, {
            sku: "4557597 04",
            num: "21"
        }, {sku: "801453 PLF", num: "21"}, {sku: "2MO513QME F0002", num: "21"}, {
            sku: "938000 6A902 00020",
            num: "21"
        }, {sku: "387232901", num: "21"}, {sku: "4045056", num: "21"}, {
            sku: "928503 CC857 00020",
            num: "21"
        }, {sku: "111321 0728203", num: "21"}, {sku: "411924 CWC1N 2140 100", num: "21"}, {
            sku: "869423 AZZ",
            num: "21"
        }, {sku: "57712 SV/CHALK", num: "21"}, {sku: "3Y6T24 6J00Z 1100 S", num: "21"}, {
            sku: "399115702",
            num: "21"
        }, {sku: "30S6SS7S2L092", num: "21"}, {sku: "8N6D01 6JPFZ 1100 S", num: "21"}, {
            sku: "114984 AA61Y 2019 95",
            num: "21"
        }, {sku: "399115704", num: "21"}, {sku: "3Y6F20 6JPTZ 1200 L", num: "21"}, {
            sku: "922528 CC855 00677",
            num: "21"
        }, {sku: "0529PR1 12", num: "21"}, {sku: "4004851 02", num: "21"}, {
            sku: "53083 SV/SADDLE",
            num: "21"
        }, {sku: "922527 CC855 00335", num: "21"}, {sku: "395599901", num: "21"}, {
            sku: "922526 CC855 00020",
            num: "21"
        }, {sku: "56822", num: "21"}, {sku: "30F6GM9T3L187", num: "21"}, {
            sku: "922216 7P772 00020",
            num: "21"
        }, {sku: "8N6T99 6JPFZ 01200 04", num: "21"}, {sku: "384637702", num: "20"}, {
            sku: "307987 CWC1R 1000",
            num: "20"
        }, {sku: "801360 MOONSTONE", num: "20"}, {sku: "2MO5132EYT F0002", num: "20"}, {
            sku: "387232603",
            num: "20"
        }, {sku: "50236735 00101", num: "20"}, {sku: "57862 DK/BLACK", num: "20"}, {
            sku: "50236735 00103",
            num: "20"
        }, {sku: "851171 SBB", num: "20"}, {sku: "821738 GCI", num: "20"}, {
            sku: "50236736 00101",
            num: "20"
        }, {sku: "50236732 46502", num: "20"}, {sku: "6206123", num: "20"}, {
            sku: "30S5SCYS1L092",
            num: "20"
        }, {sku: "50236732 64604", num: "20"}, {sku: "54813 LI/BLACK", num: "20"}, {
            sku: "934500 CC993 00020",
            num: "20"
        }, {sku: "922528 CC855 00020", num: "20"}, {sku: "932021 6A909 00020", num: "19"}, {
            sku: "922528 CC855 00335",
            num: "19"
        }, {sku: "922526 CC855 17574", num: "19"}, {
            sku: "932524 CC993 00020",
            num: "19"
        }, {sku: "YV3 15 B7 12 179 DEGAS", num: "19"}, {sku: "3Y6F20 6JPTZ 1200 XL", num: "19"}, {
            sku: "50327974 001",
            num: "19"
        }, {sku: "Z5255V312", num: "19"}, {sku: "50328475 001 105", num: "19"}, {
            sku: "399116003",
            num: "19"
        }, {sku: "58569 SV/BLACK MULTI", num: "19"}, {sku: "2ML1882E3E F0002", num: "19"}, {
            sku: "54813 LI/DEEP CORAL",
            num: "19"
        }, {sku: "9320066A905 00020", num: "19"}, {sku: "50327719 001 105", num: "19"}, {
            sku: "395599401",
            num: "19"
        }, {sku: "50236732 46504", num: "19"}, {sku: "3965066 XS", num: "19"}, {
            sku: "345933 0631632",
            num: "19"
        }, {sku: "8N6D01 6JPFZ 1200 XL", num: "19"}, {sku: "57768 SV/YELLOW", num: "19"}, {
            sku: "3Y6T22 6J00Z 1100 XL",
            num: "19"
        }, {sku: "2MO7382EYT F0002", num: "19"}, {sku: "50327719 001 100", num: "18"}, {
            sku: "74918 BLACK",
            num: "18"
        }, {sku: "50236736 00102", num: "18"}, {sku: "AE8419OX", num: "18"}, {
            sku: "30T6SEZB2O092",
            num: "18"
        }, {sku: "411924 CWC1N 2140 95", num: "18"}, {sku: "2MV8362E3E F0002", num: "18"}, {
            sku: "8NPB02 PN29Z 1200 02",
            num: "18"
        }, {sku: "8N6D02 6JPFZ 1200 M", num: "18"}, {sku: "399115902", num: "18"}, {
            sku: "2MV8362EYT F0002",
            num: "18"
        }, {sku: "3Y6T24 6J00Z 01579 S", num: "18"}, {sku: "3Y6T35 6JPFZ 01100 XXL", num: "18"}, {
            sku: "399116001",
            num: "18"
        }, {sku: "50292333 100 05", num: "18"}, {sku: "395599904", num: "18"}, {
            sku: "50292333 001 02",
            num: "18"
        }, {sku: "2MC1012E3E F0A13", num: "18"}, {sku: "50370116 001", num: "18"}, {
            sku: "8NPB02 PN29Z 1200 03",
            num: "18"
        }, {sku: "53083 LI/CHALK", num: "18"}, {sku: "YV3 15 B7 12 240 IRIS", num: "18"}, {
            sku: "50236735 00102",
            num: "18"
        }, {sku: "922215 7P772 03080", num: "18"}, {sku: "399116102", num: "18"}, {
            sku: "3996189",
            num: "18"
        }, {sku: "932063 CC997 00074", num: "18"}, {sku: "32T6GCPC7L001", num: "17"}, {
            sku: "3Y6F20 6JPTZ 1100 S",
            num: "17"
        }, {sku: "64798 SV/STONE MULTI", num: "17"}, {sku: "6X1F5A1JADZ 0999 03", num: "17"}, {
            sku: "110810 0002003",
            num: "17"
        }, {sku: "7M0207 HGJ F0GXN", num: "17"}, {sku: "8N6T99 6JPFZ 01579 M", num: "17"}, {
            sku: "938538 CC996 00020",
            num: "17"
        }, {sku: "50311736 001", num: "17"}, {sku: "3996188", num: "17"}, {
            sku: "4023403 04",
            num: "17"
        }, {sku: "57361 SV/PINK", num: "17"}, {sku: "50292333 492 02", num: "17"}, {
            sku: "932523 CC993 00020",
            num: "17"
        }, {sku: "AE8426OX", num: "17"}, {sku: "2MO5132E6Y F0002", num: "17"}, {
            sku: "30T6GK3S1L623",
            num: "17"
        }, {sku: "32H3SLMC1L513", num: "17"}, {sku: "32T6GSLC2U621", num: "17"}, {
            sku: "937502 CC996 00152",
            num: "17"
        }, {sku: "6166870", num: "17"}, {sku: "3Y6T24 6J00Z 01579 XL", num: "17"}, {
            sku: "368186 BGH0N 1000 95",
            num: "17"
        }, {sku: "8N6T99 6JPFZ 01100 S", num: "17"}, {sku: "399116004", num: "17"}, {
            sku: "30T6TE2M2L092",
            num: "17"
        }, {sku: "50325436 001 03", num: "17"}, {sku: "342504 0631646", num: "16"}, {
            sku: "404291802",
            num: "16"
        }, {sku: "30H6GS9L2L001", num: "16"}, {sku: "50292333 492 05", num: "16"}, {
            sku: "B75416 0800 36",
            num: "16"
        }, {sku: "74924", num: "16"}, {sku: "3995507 S", num: "16"}, {
            sku: "8N6D01 6JPFZ 1200 L",
            num: "16"
        }, {sku: "6XPP82 PJ11Z 3905 04", num: "16"}, {sku: "8N6D01 6JPFZ 1200 S", num: "16"}, {
            sku: "922542CC857 07276",
            num: "16"
        }, {sku: "30S5GCYS1L623", num: "16"}, {sku: "932536CC991 00020", num: "16"}, {
            sku: "870532 ROE",
            num: "16"
        }, {sku: "50311735 001", num: "16"}, {sku: "922211 7P772 00020", num: "16"}, {
            sku: "822130 MN2",
            num: "16"
        }, {sku: "368186 BGH0N 2140 95", num: "16"}, {sku: "32T5MSMC3M857", num: "16"}, {
            sku: "404291803",
            num: "16"
        }, {sku: "30S5SCYS1L438", num: "16"}, {sku: "6XPP82 PJ11Z 3905 01", num: "16"}, {
            sku: "50325436 100 03",
            num: "16"
        }, {sku: "817324 ROE", num: "16"}, {sku: "801472", num: "16"}, {
            sku: "938539 CC999 00020",
            num: "16"
        }, {sku: "3Y6T35 6JPFZ 01477 M", num: "16"}, {sku: "8N6D02 6JPFZ 1100 L", num: "15"}, {
            sku: "50236736 00104",
            num: "15"
        }, {sku: "50292333 001 05", num: "15"}, {sku: "4028694 03", num: "15"}, {
            sku: "50325436 100 04",
            num: "15"
        }, {sku: "V0706 440 2001 XS", num: "15"}, {sku: "111321 0728201", num: "15"}, {
            sku: "50236735 10001",
            num: "15"
        }, {sku: "3945728", num: "15"}, {sku: "50311863 001 100", num: "15"}, {
            sku: "30T6SEZB1L001",
            num: "15"
        }, {sku: "404583702", num: "15"}, {sku: "50325436 001 04", num: "15"}, {
            sku: "3Y6T50 6JPFZ 1200 M",
            num: "15"
        }, {sku: "3Y6T24 6J00Z 1100 XXL", num: "15"}, {sku: "6X1F5A1JADZ 0999 02", num: "15"}, {
            sku: "110810 0002002",
            num: "15"
        }, {sku: "922548 CC852 43720", num: "15"}, {sku: "8N6T99 6JPFZ 01579 L", num: "15"}, {
            sku: "V0706 440 2001 XXS",
            num: "15"
        }, {sku: "922551CC858 36035", num: "15"}, {sku: "37779 LI/BLACK", num: "15"}, {
            sku: "932525CC993 00020",
            num: "15"
        }, {sku: "56819 LI/NAVY", num: "15"}, {sku: "B75392 0800 36", num: "15"}, {
            sku: "50292333 001 01",
            num: "15"
        }, {sku: "50311863 001 105", num: "15"}, {sku: "922548 CC852 07376", num: "15"}, {
            sku: "3Y6T50 6JPFZ 1200 L",
            num: "14"
        }, {sku: "MYZ5SVC06 PK001", num: "14"}, {sku: "850835 DOLOMIA", num: "14"}, {
            sku: "F755TS0924SG 55 M",
            num: "14"
        }, {sku: "928532 CC850 00631", num: "14"}, {sku: "32T6GKCK1L623", num: "14"}, {
            sku: "50324782 001 02",
            num: "14"
        }, {sku: "30T6TE2M2L001", num: "14"}, {sku: "30H5SAVS1A001", num: "14"}, {
            sku: "4023403 02",
            num: "14"
        }, {sku: "2NG0032FAD F0002", num: "14"}, {sku: "6X1F5A1JADZ 0100 02", num: "14"}, {
            sku: "30T5GAVS2L187",
            num: "14"
        }, {sku: "2ML188QME F0002", num: "14"}, {sku: "432736 3G856 4069", num: "14"}, {
            sku: "928503 CC857 13131",
            num: "14"
        }, {sku: "365466 CWC1R 2140", num: "14"}, {sku: "3Y6F20 6JPTZ 1100 XL", num: "14"}, {
            sku: "922176 7P757 00020",
            num: "14"
        }, {sku: "7M0186 X4U F0CRD", num: "14"}, {sku: "8N6T99 6JPFZ 01455 02", num: "14"}, {
            sku: "F765SW0014XC 99 M",
            num: "14"
        }, {sku: "6X1F2B1JADZ 0620 03", num: "14"}, {sku: "V0706 440 2001 S", num: "14"}, {
            sku: "620687590",
            num: "14"
        }, {sku: "50328475 001 100", num: "14"}, {sku: "4004851 04", num: "14"}, {
            sku: "938543 CC999 00535",
            num: "14"
        }, {sku: "50236735 00104", num: "14"}, {sku: "922533 CC856 00120", num: "14"}, {
            sku: "932063 CC997 00017",
            num: "14"
        }, {sku: "820675", num: "14"}, {sku: "54813 LI/NAVY", num: "14"}, {
            sku: "342019 0631592",
            num: "14"
        }, {sku: "32F5GAVC1L001", num: "13"}, {sku: "2NG0042ALA F0008", num: "13"}, {
            sku: "384637704",
            num: "13"
        }, {sku: "50302557 049 M", num: "13"}, {sku: "932523 CC993 00541", num: "13"}, {
            sku: "F765SW0014XC 99 L",
            num: "13"
        }, {sku: "8N6T99 6JPFZ 01455 03", num: "13"}, {sku: "395599404", num: "13"}, {
            sku: "2CN0052A53 F0308 100",
            num: "13"
        }, {sku: "932534 CC996 00020", num: "13"}, {sku: "850843 NAVY", num: "13"}, {
            sku: "E5 AV3 55 D2 01 209",
            num: "13"
        }, {sku: "851138 RBN", num: "13"}, {sku: "820659 PNK", num: "13"}, {
            sku: "30T6GPAL3L092",
            num: "13"
        }, {sku: "SHYGIRL black S", num: "13"}, {sku: "AE9000OX UNI", num: "13"}, {
            sku: "9221106A730 20774",
            num: "13"
        }, {sku: "342504 0631645", num: "13"}, {sku: "922526 CC855 00555", num: "13"}, {
            sku: "0529D55 50",
            num: "13"
        }, {sku: "E1 AD1 58 40 01 023", num: "13"}, {sku: "AE8419OX UNI", num: "13"}, {
            sku: "932023 6A909 00635",
            num: "13"
        }, {sku: "345931 0618684", num: "13"}, {sku: "8N6D02 6JPFZ 1100 XL", num: "13"}, {
            sku: "E1 AD5 55 B7 01 023",
            num: "13"
        }, {sku: "852038 MOONSTONE", num: "13"}, {sku: "50316465", num: "13"}, {
            sku: "MMK5SVE19 PK001",
            num: "13"
        }, {sku: "922528 CC855 08873", num: "13"}, {sku: "6X1F5A1JADZ 0999 04", num: "13"}, {
            sku: "868927 T67",
            num: "13"
        }, {sku: "870531 AF0", num: "13"}, {sku: "50292333 100 02", num: "13"}, {
            sku: "3982933",
            num: "13"
        }, {sku: "50236735 10002", num: "13"}, {sku: "F755PO0014BA 97 M", num: "13"}, {
            sku: "MYZ5AVC41 DG001",
            num: "13"
        }, {sku: "404583703", num: "13"}, {sku: "F755PA7254MD 99 M", num: "12"}, {
            sku: "869425 MG6",
            num: "12"
        }, {sku: "6X1F2B1JADZ 0100 02", num: "12"}, {sku: "870772", num: "12"}, {
            sku: "E1 AD1 58 40 01 722",
            num: "12"
        }, {sku: "368186 BGH0V 1000 95", num: "12"}, {sku: "852643 6M0", num: "12"}, {
            sku: "820577 ML0",
            num: "12"
        }, {sku: "4030201", num: "12"}, {sku: "793912", num: "12"}, {
            sku: "922548 CC852 39735",
            num: "12"
        }, {sku: "345933 0618722", num: "12"}, {sku: "E1 AD5 55 B7 01 389", num: "12"}, {
            sku: "793935 MOONSTONE",
            num: "12"
        }, {sku: "851169 NOCE", num: "12"}, {sku: "53083 LI/NAVY", num: "12"}, {
            sku: "8N6D02 6JPFZ 1200 XL",
            num: "12"
        }, {sku: "870478 0YP", num: "12"}, {sku: "50292333 100 01", num: "12"}, {
            sku: "932525 CC993 00020",
            num: "12"
        }, {sku: "56819 LI/BLACK", num: "12"}, {sku: "387232903", num: "12"}, {
            sku: "3Y6T50 6JPFZ 01579 M",
            num: "12"
        }, {sku: "50322478 95", num: "12"}, {sku: "404291801", num: "12"}, {
            sku: "8N6T99 6JPFZ 01200 05",
            num: "12"
        }, {sku: "922212 7P772 00020", num: "12"}, {sku: "453205 D94JG 7160", num: "12"}, {
            sku: "50311863 001 95",
            num: "12"
        }, {sku: "368186 BGH0V 1000 90", num: "12"}, {sku: "SR17GAG5", num: "12"}, {
            sku: "E1 AD6 55 B7 01 069",
            num: "12"
        }, {sku: "869645 T24", num: "12"}, {sku: "246067 AF65N 1060", num: "12"}, {
            sku: "928541 CC870 00020",
            num: "12"
        }, {sku: "30T5SAVS2L092", num: "12"}, {sku: "922534CC856 00120", num: "12"}, {
            sku: "50325436 100 05",
            num: "12"
        }, {sku: "30T6GPAL1L 656", num: "12"}, {sku: "922534CC856 00735", num: "12"}, {
            sku: "50324782 001 03",
            num: "12"
        }, {sku: "870477 PO2", num: "12"}, {sku: "50292333 036 05", num: "12"}, {
            sku: "56819 DK/ROUGE",
            num: "12"
        }, {sku: "850844 ZAFFERANO", num: "12"}, {sku: "111321 0728202", num: "12"}, {
            sku: "57862 SV/CHALK",
            num: "12"
        }, {sku: "6XPM52 PJ05Z 1200 02", num: "12"}, {sku: "807101", num: "12"}, {
            sku: "822131 ROE",
            num: "12"
        }, {sku: "E1 AD6 55 B0 01 001", num: "12"}, {
            sku: "3Y6T24 6J00Z 01464 M",
            num: "11"
        }, {sku: "3Y6T35 6JPFZ 01477 XL", num: "11"}, {sku: "50325436 001 05", num: "11"}, {
            sku: "30F6SM9M2L204",
            num: "11"
        }, {sku: "AE9109XPL UNI", num: "11"}, {sku: "F665SF213F25 72 TU", num: "11"}, {
            sku: "55821",
            num: "11"
        }, {sku: "32T6GDDC3L623", num: "11"}, {sku: "50327719 001 95", num: "11"}, {
            sku: "368186 BGH0N 1000 100",
            num: "11"
        }, {sku: "6X1F2B1JADZ 0620 02", num: "11"}, {sku: "932079 7P914 00020", num: "11"}, {
            sku: "50331869 001",
            num: "11"
        }, {sku: "B75453 0800 36", num: "11"}, {sku: "50292333 036 04", num: "11"}, {
            sku: "E5 AV3 55 D2 01 001",
            num: "11"
        }, {sku: "3955999 M", num: "11"}, {sku: "30S7GZ4T3L001", num: "11"}, {
            sku: "3975690 L",
            num: "11"
        }, {sku: "3Y6T35 6JPFZ 1541 XXL", num: "11"}, {sku: "620687595", num: "11"}, {
            sku: "345933 0631633",
            num: "11"
        }, {sku: "922527 CC855 00091", num: "11"}, {sku: "37779 DK/DEEP CORAL", num: "11"}, {
            sku: "401069504",
            num: "11"
        }, {sku: "30T4SJTT2T460", num: "11"}, {sku: "3982937", num: "11"}, {
            sku: "B75392 0800 38",
            num: "11"
        }, {sku: "50325611 410 03", num: "11"}, {sku: "3Y6T17 6J1FZ 01200 02", num: "11"}, {
            sku: "50248964 001 32",
            num: "11"
        }, {sku: "50311736 401", num: "11"}, {sku: "50302557 492 M", num: "11"}, {
            sku: "50248964 001 34",
            num: "11"
        }, {sku: "50369967 001", num: "11"}, {sku: "8N6D02 6JPFZ 1100 M", num: "11"}, {
            sku: "8NPB02 PN29Z 1200 01",
            num: "11"
        }, {sku: "30T3SLMS7L399", num: "11"}, {sku: "F755TS0924SG 55 L", num: "11"}, {
            sku: "922214 7P772 00020",
            num: "11"
        }, {sku: "V0703 540 1002 XS", num: "11"}, {sku: "50236732 64602", num: "11"}, {
            sku: "850836 MOONSTONE",
            num: "11"
        }, {sku: "50302557 049 S", num: "11"}, {
            sku: "30S5SEZB1L 438",
            num: "11"
        }, {sku: "YV3 15 B7 11 626 BIANCO/TAUPE", num: "11"}, {sku: "RE9222XPL UNI", num: "11"}, {
            sku: "32T6TA6U3L092",
            num: "11"
        }, {sku: "3955999 L", num: "11"}, {sku: "793933 RUBY", num: "11"}, {
            sku: "10186447 01 411 02",
            num: "11"
        }, {sku: "8N6D02 6JPFZ 1200 S", num: "11"}, {sku: "50151746 90", num: "11"}, {
            sku: "399115904",
            num: "11"
        }, {sku: "S F black L", num: "11"}, {sku: "387232900", num: "11"}, {
            sku: "E1 AD5 55 B7 01 395",
            num: "11"
        }, {sku: "50311731 401", num: "11"}, {sku: "2NA006064 F0002", num: "11"}, {
            sku: "922528 CC855 17574",
            num: "11"
        }, {sku: "50325611 100 M", num: "11"}, {sku: "32T6SA6U3L438", num: "11"}, {
            sku: "2NG003 2ESN F0002",
            num: "11"
        }, {sku: "8N6T99 6JPFZ 01579 S", num: "11"}, {sku: "2MN077QME F0002", num: "11"}, {
            sku: "922528 CC855 25574",
            num: "11"
        }, {sku: "50326227 100 03", num: "11"}, {sku: "YA0 18 01 01 175 TAUPE", num: "11"}, {
            sku: "50328475 001 95",
            num: "11"
        }, {sku: "50292333 492 01", num: "11"}, {
            sku: "22B558 656941 PAMPLONA",
            num: "11"
        }, {sku: "3Y6T17 6J1FZ 01200 03", num: "11"}, {sku: "4034122 M", num: "11"}, {
            sku: "30T6SEZB1L446",
            num: "11"
        }, {sku: "399116104", num: "11"}, {sku: "50248964 001 33", num: "11"}, {
            sku: "E1 AD6 55 B0 01 209",
            num: "10"
        }, {sku: "50326795 100 02", num: "10"}, {sku: "50322498", num: "10"}, {
            sku: "399116201",
            num: "10"
        }, {sku: "10186447 01 402 02", num: "10"}, {sku: "TAILSNEAKS20 37", num: "10"}, {
            sku: "30S5SCYS1L303",
            num: "10"
        }, {sku: "2NG0012FAD F0002", num: "10"}, {sku: "869644 TI0", num: "10"}, {
            sku: "938542CC990 00020",
            num: "10"
        }, {sku: "30T6SH3T2O001", num: "10"}, {sku: "50325436 100 02", num: "10"}, {
            sku: "50311745 001",
            num: "10"
        }, {sku: "RB2785OR UNI", num: "10"}, {sku: "401069403", num: "10"}, {
            sku: "50281069 95",
            num: "10"
        }, {sku: "E1 AD5 55 B7 01 143", num: "10"}, {sku: "50292333 036 02", num: "10"}, {
            sku: "AE8426OX UNI",
            num: "10"
        }, {sku: "821788 O60", num: "10"}, {sku: "30T6GK3S3L 001", num: "10"}, {
            sku: "922534CC856 00176",
            num: "10"
        }, {sku: "50151746 85", num: "10"}, {sku: "6X1F2B1JADZ 0620 04", num: "10"}, {
            sku: "111210 0728203",
            num: "10"
        }, {sku: "922528 CC855 09134", num: "10"}, {sku: "9320546A903 00620", num: "10"}, {
            sku: "30T6GPAL1L623",
            num: "10"
        }, {sku: "30S7SM9T3L360", num: "10"}, {sku: "8N6D01 6JPFZ 1200 XXL", num: "10"}, {
            sku: "3Y6T24 6J00Z 01579 XXL",
            num: "10"
        }, {sku: "30S6GS7S2A649", num: "10"}, {sku: "8N6T99 6JPFZ 01579 XL", num: "10"}, {
            sku: "32H4SSMC3L502",
            num: "10"
        }, {sku: "409535 KLQHG 8526", num: "10"}, {sku: "818408 BNV", num: "10"}, {
            sku: "8M0251 SQT F02L0",
            num: "10"
        }, {sku: "2NA029064 F0002", num: "10"}, {sku: "7C0337 2MP F0U98", num: "10"}, {
            sku: "F755SN801F40 53",
            num: "10"
        }, {sku: "820858 MN2", num: "10"}, {sku: "922571 CC864 00020", num: "10"}, {
            sku: "E1 AD0 18 01 01 739",
            num: "10"
        }, {sku: "2CM015053 F0002 100", num: "10"}, {sku: "50325436 001 02", num: "10"}, {
            sku: "E1 AD6 55 B0 01 023",
            num: "10"
        }, {sku: "32T6STVC6T001", num: "10"}, {sku: "4034122 S", num: "10"}, {
            sku: "3Y6T35 6JPFZ 01477 S",
            num: "10"
        }, {sku: "922548 CC852 12963", num: "10"}, {sku: "TAILSNEAKS20 36", num: "10"}, {
            sku: "E1 AD6 55 B7 01 001",
            num: "10"
        }, {sku: "74918 MAHOGANY", num: "10"}, {sku: "922533CC856 00735", num: "10"}, {
            sku: "V0703 540 1002 M",
            num: "10"
        }, {sku: "2MV836053 F0002", num: "10"}, {sku: "2CM015053 F0002 95", num: "10"}, {
            sku: "B75416 0800 38",
            num: "10"
        }, {sku: "922526 CC855 09134", num: "10"}, {sku: "852035 DOLOMIA", num: "10"}, {
            sku: "F665SF213F26 99 TU",
            num: "10"
        }, {sku: "387232600", num: "10"}, {sku: "2ML3172EYT F0002", num: "10"}, {
            sku: "8N6D01 6JPFZ 1100 XXL",
            num: "10"
        }, {sku: "4557597 01", num: "10"}, {sku: "30T6SH3T2O092", num: "10"}, {
            sku: "399116204",
            num: "10"
        }, {sku: "870779", num: "10"}, {sku: "922176 7P757 08873", num: "10"}, {
            sku: "4021874",
            num: "10"
        }, {sku: "4028694 04", num: "10"}, {sku: "E1 AD5 55 B7 01 209", num: "10"}, {
            sku: "111210 0728202",
            num: "10"
        }, {sku: "50292333 036 03", num: "10"}, {sku: "F755PO0014BA 75 M", num: "10"}, {
            sku: "8M0217 F09 F0NVJ",
            num: "10"
        }, {sku: "307987 CWC1R 2140", num: "10"}, {sku: "50326227 001 04", num: "10"}, {
            sku: "922222 7P770 22974",
            num: "10"
        }, {sku: "B75453 0800 38", num: "10"}, {sku: "875046 O60", num: "10"}, {
            sku: "336751 A7M0G 2754",
            num: "10"
        }, {sku: "851137 IO0", num: "10"}, {sku: "F665TS0434BD 55 M", num: "10"}, {
            sku: "2MO513QME F0216",
            num: "10"
        }, {sku: "2CS0132FAD F0002 100", num: "10"}, {sku: "818250 TON", num: "10"}, {
            sku: "2CC004053 F0G52 95",
            num: "10"
        }, {sku: "MMK5SVE41 LE001", num: "10"}, {sku: "3975690 XL", num: "10"}, {
            sku: "869499 ACP",
            num: "10"
        }, {sku: "308983 A7M0G 2754", num: "10"}, {sku: "822128 BLV", num: "10"}, {
            sku: "922527 CC855 09134",
            num: "10"
        }, {sku: "MYL5AMA11 EP001", num: "10"}, {sku: "818411 RT1", num: "10"}, {
            sku: "4557729 02",
            num: "10"
        }, {sku: "869501", num: "10"}, {sku: "E1 AD0 18 01 01 001", num: "10"}, {
            sku: "50325611 410 02",
            num: "10"
        }, {sku: "922527 CC855 17574", num: "10"}, {sku: "404583701", num: "10"}, {
            sku: "10186447 01 001 03",
            num: "10"
        }, {sku: "50311736 209", num: "10"}, {sku: "869506 ACP", num: "10"}, {
            sku: "AE9108XPL UNI",
            num: "9"
        }, {sku: "399115701", num: "9"}, {sku: "395599400", num: "9"}, {
            sku: "820681 VOL",
            num: "9"
        }, {sku: "4034122 XL", num: "9"}, {sku: "6206133", num: "9"}, {
            sku: "410120 CWC1G 6433",
            num: "9"
        }, {sku: "114984 AA61Y 2019 105", num: "9"}, {sku: "922216 7P772 11530", num: "9"}, {
            sku: "928532 CC870 00020",
            num: "9"
        }, {sku: "922212 7P772 11530", num: "9"}, {sku: "V0703 540 1002 S", num: "9"}, {
            sku: "9221436A704 00020",
            num: "9"
        }, {sku: "111210 0728201", num: "9"}, {sku: "50326227 001 03", num: "9"}, {
            sku: "F765SW0014XC 99 S",
            num: "9"
        }, {sku: "AB2785OX UNI", num: "9"}, {sku: "2CN0102EP7 F0Q09 95", num: "9"}, {
            sku: "50325611 100 L",
            num: "9"
        }, {sku: "4028696 03", num: "9"}, {sku: "F755PO0014BA 93 L", num: "9"}, {
            sku: "3Y6T50 6JPFZ 01100 M",
            num: "9"
        }, {sku: "30F6GM9M2L719", num: "9"}, {sku: "AC3350OX", num: "9"}, {
            sku: "451278 K5Y1N 8666",
            num: "9"
        }, {sku: "2NG0032EYT F0002", num: "9"}, {sku: "10186578 01 017 02", num: "9"}, {
            sku: "10106415 01 610 03",
            num: "9"
        }, {sku: "6204953", num: "9"}, {sku: "F755PO0014BA 97 L", num: "9"}, {
            sku: "342019 0564443",
            num: "9"
        }, {sku: "8N6D01 6JPFZ 1579 XL", num: "9"}, {sku: "6X1T9B1JALZ 0630 02", num: "9"}, {
            sku: "4034122 L",
            num: "9"
        }, {sku: "453205 D94JG 1000", num: "9"}, {sku: "2CN0052A53 F0308 95", num: "9"}, {
            sku: "3Y6T24 6J00Z 01464 L",
            num: "9"
        }, {sku: "2NG003QME F0216", num: "9"}, {sku: "50326215 100 03", num: "9"}, {
            sku: "6X1F2B1JADZ 0100 03",
            num: "9"
        }, {sku: "820575 BLB", num: "9"}, {sku: "50311745", num: "9"}, {
            sku: "2CC004053 F0G52 100",
            num: "9"
        }, {sku: "3981520 L", num: "9"}, {sku: "F755TS0924SG 55 S", num: "9"}, {
            sku: "2CN0052A53 F0002 95",
            num: "9"
        }, {sku: "932533CC996 00020", num: "9"}, {sku: "928532 CC850 00677", num: "9"}, {
            sku: "3981520 S",
            num: "9"
        }, {sku: "50311999", num: "9"}, {sku: "3Y6T17 6J1FZ 01100 02", num: "9"}, {
            sku: "6X1F2B1JADZ 0920 03",
            num: "9"
        }, {sku: "E1 AD6 19 01 01 001", num: "9"}, {sku: "F755PO0014BA 93 M", num: "9"}, {
            sku: "30T6TA6S1L 092",
            num: "9"
        }, {sku: "SR17LORG1", num: "9"}, {sku: "2ML188 C5S F0G52", num: "9"}, {
            sku: "9320006A905 00052",
            num: "9"
        }, {sku: "50327630 001 95", num: "9"}, {sku: "342019 0495451", num: "9"}, {
            sku: "30T6GBDT2L656",
            num: "9"
        }, {sku: "938543CC996 00152", num: "9"}, {sku: "3996181", num: "9"}, {
            sku: "0529D55 12",
            num: "9"
        }, {sku: "MWT5SMA05 LY001", num: "8"}, {sku: "864329 ZAFFERANO", num: "8"}, {
            sku: "869508",
            num: "8"
        }, {sku: "E1 AD1 18 01 01 722", num: "8"}, {sku: "50302557 492 S", num: "8"}, {
            sku: "7VA367 5PN F0X93",
            num: "8"
        }, {sku: "50326215 100 04", num: "8"}, {sku: "6X1F5A1JADZ 0351 03", num: "8"}, {
            sku: "32T6GDDC3L001",
            num: "8"
        }, {sku: "F755PO2014BA 75 M", num: "8"}, {sku: "8N6D02 6JPFZ 1100 S", num: "8"}, {
            sku: "2CS0132FAD F0002 95",
            num: "8"
        }, {sku: "50311704 409", num: "8"}, {sku: "932531 CC996 00020", num: "8"}, {
            sku: "922548 CC852 38135",
            num: "8"
        }, {sku: "10186447 01 402 04", num: "8"}, {sku: "870778", num: "8"}, {
            sku: "345933 0618720",
            num: "8"
        }, {sku: "3Y6T22 6J00Z 01579 XL", num: "8"}, {sku: "4043086 M", num: "8"}, {
            sku: "110810 0002001",
            num: "8"
        }, {sku: "870780", num: "8"}, {sku: "F755PO0014BA 75 L", num: "8"}, {
            sku: "6X1T9C1JALZ 063002",
            num: "8"
        }, {sku: "05V3255 33", num: "8"}, {sku: "403J 6", num: "8"}, {
            sku: "2NG005 QME F0216",
            num: "8"
        }, {sku: "850838 NAVY", num: "8"}, {sku: "50302557 049 XL", num: "8"}, {
            sku: "3Y6F20 6JPTZ 1905 XL",
            num: "8"
        }, {sku: "50311775", num: "8"}, {sku: "3981520 M", num: "8"}, {
            sku: "4043086 XL",
            num: "8"
        }, {sku: "50239979 B 90", num: "8"}, {sku: "922504 CC850 00335", num: "8"}, {
            sku: "F765TS0504YC 99 M",
            num: "8"
        }, {sku: "10186447 01 411 03", num: "8"}, {sku: "821800 CGD", num: "8"}, {
            sku: "50311778 201",
            num: "8"
        }, {sku: "3981520 XL", num: "8"}, {sku: "2VE368 9Z2 F0002", num: "8"}, {
            sku: "50324782 001 04",
            num: "8"
        }, {sku: "3975690 S", num: "8"}, {sku: "922209 7P771 00020", num: "8"}, {
            sku: "8M0365 W2F F0963",
            num: "8"
        }, {sku: "922543CC857 07276", num: "8"}, {sku: "7N0078 O79 F07T3", num: "8"}, {
            sku: "50326227 100 04",
            num: "8"
        }, {sku: "30S6GS7S2L623", num: "8"}, {sku: "30S5GKPT1C001", num: "8"}, {
            sku: "SHYGIRL coral pink S",
            num: "8"
        }, {sku: "3995506 S", num: "8"}, {sku: "AP9606OX UNI", num: "8"}, {
            sku: "0627587 VARA 1 6",
            num: "8"
        }, {sku: "3Y6F20 6JPTZ 1854 M", num: "8"}, {sku: "MMM5AVC05 CO001", num: "8"}, {
            sku: "922533 CC856 00735",
            num: "8"
        }, {sku: "938548 CC996 00020", num: "8"}, {sku: "922571 CC864 08873", num: "8"}, {
            sku: "F665TS0844OB 99 02",
            num: "8"
        }, {sku: "32F4STVC9L446", num: "8"}, {sku: "932063 CC997 11541", num: "8"}, {
            sku: "4028923",
            num: "8"
        }, {sku: "922528 CC855 00091", num: "8"}, {sku: "SR17GAG1", num: "8"}, {
            sku: "114984 AA61Y 2019 100",
            num: "8"
        }, {sku: "851157 TA8", num: "8"}, {sku: "22B850 588263 NERO", num: "8"}, {
            sku: "928032 7P772 00020",
            num: "8"
        }, {sku: "64773 BLACK", num: "8"}, {sku: "869509 T0P", num: "8"}, {
            sku: "9221256A734 01020",
            num: "8"
        }, {sku: "F755PA7254MD 99 S", num: "8"}, {sku: "2CC004053 F0DVI 90", num: "8"}, {
            sku: "0594553 NINNA F40 6.5",
            num: "8"
        }, {sku: "6206134", num: "8"}, {sku: "307774 CWC1R 1000", num: "8"}, {
            sku: "10186447 01 402 03",
            num: "8"
        }, {sku: "50302557 049 L", num: "8"}, {sku: "922534 CC856 00110", num: "8"}, {
            sku: "4043086 L",
            num: "8"
        }, {sku: "MMK5AVE92 WT001", num: "8"}, {sku: "851495 ONYX", num: "8"}, {
            sku: "3995507 XL",
            num: "8"
        }, {sku: "AB3325OX UNI", num: "8"}, {sku: "30S3GLMS2L623", num: "8"}, {
            sku: "SR17GAL6",
            num: "8"
        }, {sku: "F765TS0504YC 99 L", num: "8"}, {sku: "30H4GAIS3L001", num: "8"}, {
            sku: "E1 AD8 55 B7 01 299",
            num: "8"
        }, {sku: "01H062 592343 7", num: "8"}, {sku: "MMK5SVE38 CO001", num: "8"}, {
            sku: "3975690 M",
            num: "8"
        }, {sku: "Z5255V35B", num: "8"}, {sku: "50302557 423 L", num: "8"}, {
            sku: "30T6SA6S1L 001",
            num: "8"
        }, {sku: "4016624", num: "8"}, {sku: "3995506 M", num: "8"}, {
            sku: "AC3437OXY",
            num: "8"
        }, {sku: "9320016A905 00052", num: "8"}, {sku: "6XPM52 PJ05Z 1200 04", num: "8"}, {
            sku: "1ZH034 2EEL F0009",
            num: "8"
        }, {sku: "30S6SS7S1A303", num: "8"}, {sku: "2CC005X72 F0JYA 100", num: "8"}, {
            sku: "8N0114 48U F044M",
            num: "8"
        }, {sku: "32H5SAFE1L438", num: "8"}, {sku: "8M0340 6DB F0963", num: "7"}, {
            sku: "922533CC856 00176",
            num: "7"
        }, {sku: "460185 A7M0T 1000", num: "7"}, {sku: "F765SW0014XC 78 L", num: "7"}, {
            sku: "0594553 NINNA F40 6",
            num: "7"
        }, {sku: "368186 BGH0V 1000 85", num: "7"}, {sku: "922169 7P756 31835", num: "7"}, {
            sku: "E1 AD6 55 B7 01 064",
            num: "7"
        }, {sku: "0529D55 M4", num: "7"}, {sku: "50311743 001", num: "7"}, {
            sku: "404291804",
            num: "7"
        }, {sku: "820688 PNK", num: "7"}, {sku: "50331708 001", num: "7"}, {
            sku: "2CC005X72 F0JYA 95",
            num: "7"
        }, {sku: "6X1F2B1JADZ 0100 04", num: "7"}, {sku: "0609552 6/36.5 D", num: "7"}, {
            sku: "8N6D02 6JPFZ 1100 XXL",
            num: "7"
        }, {sku: "922534 CC856 08873", num: "7"}, {sku: "2CN0052A53 F0002 90", num: "7"}, {
            sku: "868343 MOONSTONE",
            num: "7"
        }, {sku: "MMK5SVE19 LE001", num: "7"}, {sku: "50311892 001 90", num: "7"}, {
            sku: "404647703",
            num: "7"
        }, {sku: "3995507 XS", num: "7"}, {sku: "922176 7P757 09934", num: "7"}, {
            sku: "30S5SEZB1L092",
            num: "7"
        }, {sku: "SHYGIRL white S", num: "7"}, {sku: "4004851 01", num: "7"}, {
            sku: "TEDAL CHOCOLATE",
            num: "7"
        }, {sku: "928541 CC870 08873", num: "7"}, {sku: "MMK5SVE37 OR001", num: "7"}, {
            sku: "3994165",
            num: "7"
        }, {sku: "SR17GAL9", num: "7"}, {sku: "50326227 001 05", num: "7"}, {
            sku: "30S5SEZB5L405",
            num: "7"
        }, {sku: "368186 BGH0N 1000 90", num: "7"}, {sku: "6X1F2B1JADZ 0920 02", num: "7"}, {
            sku: "878589 O60",
            num: "7"
        }, {sku: "AE8707PL UNI", num: "7"}, {sku: "308983 A7M0G 1000", num: "7"}, {
            sku: "6X1T9B1JALZ 0351 02",
            num: "7"
        }, {sku: "E1 AD6 19 01 01 023", num: "7"}, {sku: "3Y6F20 6JPTZ 1541 S", num: "7"}, {
            sku: "3Y6T24 6J00Z 01905 M",
            num: "7"
        }, {sku: "869500 R0P", num: "7"}, {sku: "3995506 L", num: "7"}, {
            sku: "850926 SABBIA b",
            num: "7"
        }, {sku: "50302557 423 M", num: "7"}, {sku: "4028697 03", num: "7"}, {
            sku: "MYL5SXL31 PK001",
            num: "7"
        }, {sku: "818619 AR4", num: "7"}, {sku: "22B558 588256 NERO", num: "7"}, {
            sku: "30T6TEZB6L 092",
            num: "7"
        }, {sku: "F755TS0504YC 01 M", num: "7"}, {sku: "F755CH2001LD 01 39", num: "7"}, {
            sku: "30F6GM9T3L230",
            num: "7"
        }, {sku: "818644 TME", num: "7"}, {sku: "8M0339 48U F044M", num: "7"}, {
            sku: "30T3SLMS2L303",
            num: "7"
        }, {sku: "397627701", num: "7"}, {sku: "50322124", num: "7"}, {
            sku: "22B558 656944 SANGRIA",
            num: "7"
        }, {sku: "4009319", num: "7"}, {sku: "2MV836 QME F0002", num: "7"}, {
            sku: "404583704",
            num: "7"
        }, {sku: "453205 DY6JN 5860", num: "7"}, {sku: "399116202", num: "7"}, {
            sku: "50325436 100 01",
            num: "7"
        }, {sku: "TAILSNEAKS20 38", num: "7"}, {sku: "50326215 100 05", num: "7"}, {
            sku: "807886",
            num: "7"
        }, {sku: "4023693", num: "7"}, {sku: "E1 AJ7 12 01 01 001", num: "7"}, {
            sku: "404647702",
            num: "7"
        }, {sku: "SR17GAG7", num: "7"}, {sku: "32T6GDDC3L656", num: "7"}, {
            sku: "3Y6F20 6JPTZ 1905 S",
            num: "7"
        }, {sku: "AE9447OX UNI", num: "7"}, {sku: "9225266A755 00020", num: "7"}, {
            sku: "4043086 S",
            num: "7"
        }, {sku: "2CS0132FAD F0216 110", num: "7"}, {sku: "50248964 239 33", num: "7"}, {
            sku: "AE9546OXY UNI",
            num: "7"
        }, {sku: "50311778", num: "7"}, {sku: "50239979 B 95", num: "7"}, {
            sku: "50281069 B 90",
            num: "7"
        }, {sku: "922214 7P772 41610", num: "7"}, {sku: "3Y6T17 6J1FZ 1464 M", num: "7"}, {
            sku: "30T5STVT2L438",
            num: "7"
        }, {sku: "2CM015053 F0216 95", num: "7"}, {sku: "928532 CC855 00020", num: "7"}, {
            sku: "AC3178OXY UNI",
            num: "7"
        }, {sku: "922247 7P760 00020", num: "7"}, {sku: "3981520 XS", num: "7"}, {
            sku: "2VE368 9Z2 F0216",
            num: "7"
        }, {sku: "820748 ROE", num: "7"}, {sku: "3Y6T24 6J00Z 01905 L", num: "7"}, {
            sku: "10186447 01 001 01",
            num: "7"
        }, {sku: "6208096", num: "7"}, {sku: "928532 CC855 00091", num: "7"}, {
            sku: "AC3350OX METEORITES UNI",
            num: "7"
        }, {sku: "30S6GS7S2L001", num: "7"}, {sku: "0593936 NINNA F40 6", num: "7"}, {
            sku: "922543CC857 41920",
            num: "7"
        }, {sku: "4045057", num: "7"}, {sku: "10106415 01 610 02", num: "7"}, {
            sku: "8N6T99 6JPFZ 01579 XXL",
            num: "7"
        }, {sku: "3Y6F20 6JPTZ 1541 XL", num: "7"}, {sku: "AE9000OX", num: "7"}, {
            sku: "820857 GLL",
            num: "7"
        }, {sku: "F665TS0844OB 97 02", num: "7"}, {sku: "50248964 402 32", num: "7"}, {
            sku: "50302557 423 S",
            num: "7"
        }, {sku: "4028697 04", num: "7"}, {sku: "0627587 VARA 1 5.5", num: "7"}, {
            sku: "928503 CC857 00335",
            num: "7"
        }, {sku: "50325436 001 01", num: "7"}, {sku: "9221596A718 00020", num: "7"}, {
            sku: "6X1F5A1JADZ 0100 03",
            num: "7"
        }, {sku: "410120 CWC1G 3120", num: "7"}, {sku: "2NA818064 F0002", num: "7"}, {
            sku: "3995506 XL",
            num: "7"
        }, {sku: "30H5SAVS1T468", num: "7"}, {sku: "6X1T9B1JALZ 0630 03", num: "7"}, {
            sku: "411924 CWC1N 2140 105",
            num: "7"
        }, {sku: "50302557 492 L", num: "7"}, {sku: "30F6GM9T3L848", num: "6"}, {
            sku: "922216 7P772 06250",
            num: "6"
        }, {sku: "B75416 0800 32", num: "6"}, {sku: "365466 CWC1R 1000", num: "6"}, {
            sku: "397627702",
            num: "6"
        }, {sku: "807873", num: "6"}, {sku: "411924 CWC1N 2140 85", num: "6"}, {
            sku: "2CM015053 F0002 90",
            num: "6"
        }, {sku: "SR17GAG11", num: "6"}, {sku: "3996884", num: "6"}, {sku: "820573 AR4", num: "6"}, {
            sku: "403285403",
            num: "6"
        }, {sku: "YV3 12 58 15 066 CALEIDOSCOPIO", num: "6"}, {
            sku: "SHYGIRL platinum S",
            num: "6"
        }, {sku: "3Y6T50 6JPFZ 1200 S", num: "6"}, {sku: "30T7GLMS2U857", num: "6"}, {
            sku: "807883",
            num: "6"
        }, {sku: "1BH049V0U02EEN F0IGF", num: "6"}, {sku: "MWD5AVI04 CO001", num: "6"}, {
            sku: "8N6S83 6J07Z 1200 M",
            num: "6"
        }, {sku: "404647701", num: "6"}, {sku: "399116203", num: "6"}, {
            sku: "SR17GAG6",
            num: "6"
        }, {sku: "01B772 575969 6", num: "6"}, {sku: "AB3283OX S", num: "6"}, {
            sku: "6X1F5A1JADZ 0999 01",
            num: "6"
        }, {sku: "922222 7A817 00020", num: "6"}, {sku: "851165 BLU GINEPRO b", num: "6"}, {
            sku: "852036 NAVY",
            num: "6"
        }, {sku: "01M262 660864 PAMPLONA 6.5", num: "6"}, {sku: "30T6SJ8T2L001", num: "6"}, {
            sku: "C5282T84Q",
            num: "6"
        }, {sku: "10186447 01 411 01", num: "6"}, {sku: "50248964 239 32", num: "6"}, {
            sku: "30T3SSMS2L802",
            num: "6"
        }, {sku: "9225266A755 00176", num: "6"}, {sku: "37296 BP/BLACK HONEY", num: "6"}, {
            sku: "851136 BR0",
            num: "6"
        }, {sku: "8M0217 SR0 F07HE", num: "6"}, {sku: "AC3178OXY", num: "6"}, {
            sku: "W vanilla S",
            num: "6"
        }, {sku: "852437 GOLDPETAL", num: "6"}, {sku: "922159 7P764 08873", num: "6"}, {
            sku: "50281069 B 95",
            num: "6"
        }, {sku: "3900461002", num: "6"}, {sku: "2NA007064 F0002", num: "6"}, {
            sku: "F765TS0504YC 99 XL",
            num: "6"
        }, {sku: "2CS0132FAD F0216 95", num: "6"}, {
            sku: "3Y6T17 6J1FZ 01100 03",
            num: "6"
        }, {sku: "3Y6T22 6J00Z 1100 XXL", num: "6"}, {sku: "F661TS874993 01 02", num: "6"}, {
            sku: "3982592",
            num: "6"
        }, {sku: "110810 0483302", num: "6"}, {sku: "30F6GM9M2L848", num: "6"}, {
            sku: "402724 KU2IG 8492",
            num: "6"
        }, {sku: "421384 4010Q 6368", num: "6"}, {sku: "820856 BLV", num: "6"}, {
            sku: "8N6D01 6JPFZ 1579 M",
            num: "6"
        }, {sku: "3Y6T50 6JPFZ 01100 XL", num: "6"}, {sku: "FP5020E", num: "6"}, {
            sku: "922500 CC850 00020",
            num: "6"
        }, {sku: "0627587 VARA 1 5", num: "6"}, {sku: "56819 SV/STONE", num: "6"}, {
            sku: "404583700",
            num: "6"
        }, {sku: "10186447 01 001 02", num: "6"}, {sku: "30F6GM9T3L134", num: "6"}, {
            sku: "E1 AD6 19 01 01 228",
            num: "6"
        }, {sku: "YA0 18 01 01 179 DEGAS", num: "6"}, {sku: "2NA789064 F0002", num: "6"}, {
            sku: "856576 MOONSTONE",
            num: "6"
        }, {sku: "F765SW0014XC 51 M", num: "6"}, {sku: "7M0169 8FJ F06HP", num: "6"}, {
            sku: "50248964 402 33",
            num: "6"
        }, {sku: "922211 7P772 08070", num: "6"}, {sku: "2CC004053 F0DVI 105", num: "6"}, {
            sku: "50302557 423 XL",
            num: "6"
        }, {sku: "30S6SDJM7L001", num: "6"}, {sku: "922528 CC855 00010", num: "6"}, {
            sku: "10186447 01 001 04",
            num: "6"
        }, {sku: "AE9053XPL UNI", num: "6"}, {sku: "F665PO0234BD 99 M", num: "6"}, {
            sku: "2CN0052A53 F0002 100",
            num: "6"
        }, {sku: "864328 AGAVE", num: "6"}, {sku: "869507 R0P", num: "6"}, {
            sku: "807870",
            num: "6"
        }, {sku: "388679 KLQUG 8431", num: "6"}, {sku: "50326795 100 01", num: "6"}, {
            sku: "820677 PETALO",
            num: "6"
        }, {sku: "21F568 628945 NERO", num: "6"}, {sku: "2CM015053 F0002 110", num: "6"}, {
            sku: "398352303",
            num: "6"
        }, {sku: "C521DR5 G8", num: "6"}, {sku: "6X1F2B1JADZ 0100 01", num: "6"}, {
            sku: "6X1F5A1JADZ 0351 02",
            num: "6"
        }, {sku: "2CC0042FAD F0B2A 95", num: "6"}, {sku: "932127 7P922 00020", num: "6"}, {
            sku: "21E099 627167",
            num: "6"
        }, {sku: "807881", num: "6"}, {sku: "852642 SBB", num: "6"}, {
            sku: "F765TS0504YC 51 L",
            num: "6"
        }, {sku: "4020959", num: "6"}, {sku: "3Y6F20 6JPTZ 1905 L", num: "6"}, {
            sku: "8M0348 88H F07P3",
            num: "6"
        }, {sku: "3Y6T22 6J00Z 01579 S", num: "6"}, {sku: "370831 A7M0N 1000", num: "6"}, {
            sku: "86750 DKCHK",
            num: "6"
        }, {sku: "F765SW0014XC 78 XL", num: "6"}, {sku: "50292333 036 01", num: "6"}, {
            sku: "C5269T5 20",
            num: "6"
        }, {sku: "411726 4G200 1162", num: "6"}, {sku: "429223 K1M1T 8574", num: "6"}, {
            sku: "368186 BGH0N 1000 105",
            num: "6"
        }, {sku: "399115901", num: "6"}, {sku: "SHYGIRL vanilla S", num: "6"}, {
            sku: "7M0191 X4U F0GXN",
            num: "6"
        }, {sku: "928042 7P778 07520", num: "6"}, {sku: "50324782 001 01", num: "6"}, {
            sku: "4023700",
            num: "6"
        }, {sku: "30S7GZ4M2T001", num: "6"}, {sku: "404647704", num: "6"}, {
            sku: "406370 KLQAX 9772",
            num: "6"
        }, {sku: "AB3355XTUY 50", num: "6"}, {sku: "429525 3G856 4072", num: "6"}, {
            sku: "F755TS0184SA 01 XL",
            num: "6"
        }, {sku: "4033303", num: "6"}, {sku: "2NG001QME F0R8F", num: "6"}, {
            sku: "MXS4AVI63 VY001",
            num: "6"
        }, {sku: "4043086 XS", num: "6"}, {sku: "SHYGIRL wine S", num: "6"}, {
            sku: "F765SW0014XC 99 XL",
            num: "6"
        }, {sku: "AB3178XPL", num: "6"}, {sku: "F755PO0014BA 75 XL", num: "6"}, {
            sku: "50327630 001 100",
            num: "6"
        }, {sku: "3955999 S", num: "6"}, {sku: "30S7GZ4T3L857", num: "6"}, {
            sku: "F765TS0504YC 99 S",
            num: "6"
        }, {sku: "0593936 NINNA F40 5", num: "6"}, {sku: "8N6D02 6JPFZ 1200 XXL", num: "6"}, {
            sku: "MXS5SVI63 BK001",
            num: "6"
        }, {sku: "30S5GCYS1L665", num: "6"}, {sku: "403270103", num: "6"}, {
            sku: "2NA028064 F0002",
            num: "6"
        }, {sku: "32T6SDDC3L 438", num: "6"}, {sku: "E1 AF0 18 01 01 023", num: "6"}, {
            sku: "F755SN801F40 14",
            num: "6"
        }, {sku: "3Y6T17 6J1FZ 01100 04", num: "6"}, {sku: "50328475 001 110", num: "6"}, {
            sku: "AE9848OX UNI",
            num: "6"
        }, {sku: "F762SW7054XD 99 M", num: "6"}, {sku: "400875103", num: "6"}, {
            sku: "387232904",
            num: "6"
        }, {sku: "6X1F5A1JADZ 0100 01", num: "6"}, {sku: "932116 7P905 00020", num: "6"}, {
            sku: "2NA030064 F0002",
            num: "6"
        }, {sku: "8N6T99 6JPFZ 01100 XXL", num: "6"}, {sku: "50326227 100 05", num: "6"}, {
            sku: "3945742",
            num: "6"
        }, {sku: "F755TS0504YC 01 L", num: "6"}, {sku: "368186 BGH0N 2140 90", num: "6"}, {
            sku: "922544CC857 07276",
            num: "6"
        }, {sku: "2MO513 C5S F0G52 00", num: "6"}, {sku: "449009 3G856 5769", num: "6"}, {
            sku: "MWT5SMA03 LY001",
            num: "6"
        }, {sku: "E1 AD0 54 10 01 001", num: "6"}, {sku: "50325611 410 04", num: "6"}, {
            sku: "50326744 201",
            num: "6"
        }, {sku: "0594553 NINNA F40 5", num: "6"}, {sku: "0627587 VARA 1 6.5", num: "6"}, {
            sku: "F665TS0184OB 01 02",
            num: "6"
        }, {sku: "870759 C9S", num: "6"}, {sku: "50326215 100 02", num: "5"}, {
            sku: "391246 4G200 6168",
            num: "5"
        }, {sku: "3Y6F20 6JPTZ 1854 S", num: "5"}, {sku: "E5 AV3 55 D3 07 208", num: "5"}, {
            sku: "7M0169 O75 F07T2",
            num: "5"
        }, {sku: "30T6TEZM1T097", num: "5"}, {sku: "928532 CC855 00677", num: "5"}, {
            sku: "50328475 202 90",
            num: "5"
        }, {sku: "30S6SS7S2A303", num: "5"}, {sku: "2CC005X72 F0JYA 110", num: "5"}, {
            sku: "850770 ACCIAIO",
            num: "5"
        }, {sku: "50311863 001 90", num: "5"}, {sku: "2MV836 QME F0216", num: "5"}, {
            sku: "55457",
            num: "5"
        }, {sku: "57714 DKM30", num: "5"}, {sku: "21G259 660383 BASE PAMPLONA", num: "5"}, {
            sku: "C521ZS4 12",
            num: "5"
        }, {sku: "10136613 01 428 02", num: "5"}, {sku: "50248964 001 35", num: "5"}, {
            sku: "50327719 001 110",
            num: "5"
        }, {sku: "8N6T99 6JPFZ 01455 01", num: "5"}, {sku: "38S6GDDS5L665", num: "5"}, {
            sku: "E1 AJ6 12 01 01 051",
            num: "5"
        }, {sku: "3Y6T24 6J00Z 01464 XL", num: "5"}, {sku: "403J 5", num: "5"}, {
            sku: "01L992 658364 SANGRIA 6.5",
            num: "5"
        }, {sku: "30F4STTT8L802", num: "5"}, {sku: "30H1GTVT1L230", num: "5"}, {
            sku: "30S5SCYS1L802",
            num: "5"
        }, {sku: "SR17MIG6", num: "5"}, {sku: "807887", num: "5"}, {
            sku: "928541 CC870 00051",
            num: "5"
        }, {sku: "50323992 001 M", num: "5"}, {sku: "SR17GAGM563", num: "5"}, {
            sku: "30F6ASLL3L001",
            num: "5"
        }, {sku: "4015563 02", num: "5"}, {sku: "AE9526OXY", num: "5"}, {
            sku: "8M0358 48U F044M",
            num: "5"
        }, {sku: "2CC066053 F0216 95", num: "5"}, {sku: "21G131 653399", num: "5"}, {
            sku: "F755TS0924SG 55 XL",
            num: "5"
        }, {sku: "7M0198 X4U F051E", num: "5"}, {sku: "RUBY/L GFA", num: "5"}, {
            sku: "F755PO0014BA 75 S",
            num: "5"
        }, {sku: "922214 7P772 11530", num: "5"}, {sku: "4023713", num: "5"}, {
            sku: "50311731 209",
            num: "5"
        }, {sku: "3Y6T17 6J1FZ 1464 L", num: "5"}, {sku: "851546 BM4", num: "5"}, {
            sku: "4015563 04",
            num: "5"
        }, {sku: "4022460", num: "5"}, {sku: "32T6GTVC6L001", num: "5"}, {
            sku: "30T3STVT6L085",
            num: "5"
        }, {sku: "2NG003 2ES0 F0002", num: "5"}, {sku: "4045053", num: "5"}, {
            sku: "2CN0052A53 F0308 110",
            num: "5"
        }, {sku: "50151746 95", num: "5"}, {sku: "808080", num: "5"}, {
            sku: "E1 AD5 55 B7 01 396",
            num: "5"
        }, {sku: "4024087", num: "5"}, {sku: "336751 A7M0G 6523", num: "5"}, {
            sku: "932097 7P917 00020",
            num: "5"
        }, {sku: "404648403", num: "5"}, {sku: "9221026A728 00020", num: "5"}, {
            sku: "50325611 100 S",
            num: "5"
        }, {sku: "810277", num: "5"}, {sku: "50326227 100 02", num: "5"}, {
            sku: "4028697 01",
            num: "5"
        }, {sku: "346224 0631642", num: "5"}, {sku: "21E479 656336 PAMPLONA", num: "5"}, {
            sku: "821904 ROE",
            num: "5"
        }, {sku: "50317118 001", num: "5"}, {sku: "2VF001 2EYT F0002", num: "5"}, {
            sku: "6X1F2B1JADZ 0920 04",
            num: "5"
        }, {sku: "50327630 001 90", num: "5"}, {sku: "E5 AV3 55 D2 01 395", num: "5"}, {
            sku: "MMK5SVE80 LE001",
            num: "5"
        }, {sku: "932538 CC996 47720", num: "5"}, {sku: "50312011", num: "5"}, {
            sku: "F755TS0774YF 78 M",
            num: "5"
        }, {sku: "50248964 402 31", num: "5"}, {sku: "50328475 001 90", num: "5"}, {
            sku: "50311810",
            num: "5"
        }, {sku: "F762SW7054XD 99 S", num: "5"}, {sku: "7VA319 P3D F0GXN", num: "5"}, {
            sku: "8N6T99 6JPFZ 01589 L",
            num: "5"
        }, {sku: "308983 A7M0G 6523", num: "5"}, {sku: "2MO513 C5S F0DVI", num: "5"}, {
            sku: "922526 CC855 00091",
            num: "5"
        }, {sku: "MWS6SCN04 WV001", num: "5"}, {sku: "2CM016053 F0G52 95", num: "5"}, {
            sku: "869502 T0P",
            num: "5"
        }, {sku: "110810 0684403", num: "5"}, {sku: "01B772 643076 6.5", num: "5"}, {
            sku: "M D S white S",
            num: "5"
        }, {sku: "30H5SAVS1T059", num: "5"}, {sku: "932526 CC993 00541", num: "5"}, {
            sku: "928503 CC857 08873",
            num: "5"
        }, {sku: "922216 7P772 03080", num: "5"}, {sku: "402869002", num: "5"}, {
            sku: "1ZH034 2EG5 F0028",
            num: "5"
        }, {sku: "06M34RN5M04", num: "5"}, {sku: "59389 DKM87", num: "5"}, {
            sku: "SHYGIRL indi pink S",
            num: "5"
        }, {sku: "30T6TEZB6L177", num: "5"}, {sku: "9221116A730 12755", num: "5"}, {
            sku: "E1 AD0 54 10 01 797",
            num: "5"
        }, {sku: "928532 CC855 00631", num: "5"}, {sku: "F755PA7254MD 99 L", num: "5"}, {
            sku: "AE8419BZR UNI",
            num: "5"
        }, {sku: "E1 AH6 11 01 01 011", num: "5"}, {sku: "851011 ACERO", num: "5"}, {
            sku: "1BA896 NZV F0OZX",
            num: "5"
        }, {sku: "3Y6T17 6J1FZ 01200 04", num: "5"}, {
            sku: "922501 CC850 00020",
            num: "5"
        }, {sku: "0594553 NINNA F40 5.5", num: "5"}, {sku: "50311863 001 110", num: "5"}, {
            sku: "F665BL5116ED 99 02",
            num: "5"
        }, {sku: "384637701", num: "5"}, {sku: "2CN0102EP7 F0Q09 105", num: "5"}, {
            sku: "869424 LILLA b",
            num: "5"
        }, {sku: "32T6GDDC3L 623", num: "5"}, {sku: "F755PO2014BA 75 L", num: "5"}, {
            sku: "MIDLAND WL38780 BLACK 36.5",
            num: "5"
        }, {sku: "402869004", num: "5"}, {sku: "821746 MC7", num: "5"}, {
            sku: "B75416 0800 34",
            num: "5"
        }, {sku: "403285402", num: "5"}, {sku: "864942 ONYX", num: "5"}, {
            sku: "7M0169 O79 F07T3",
            num: "5"
        }, {sku: "928532 CC855 08873", num: "5"}, {sku: "50326795 100 03", num: "5"}, {
            sku: "50302557 492 XL",
            num: "5"
        }, {sku: "2ML317053 F0002", num: "5"}, {sku: "50328475 202 95", num: "5"}, {
            sku: "922501 CC850 00631",
            num: "5"
        }, {sku: "3Y6T35 6JPFZ 01477 XXL", num: "5"}, {sku: "50248964 001 36", num: "5"}, {
            sku: "01B772 575969 5.5",
            num: "5"
        }, {sku: "850821 PEPERONCINO b", num: "5"}, {sku: "F755PO2014BA 75 S", num: "5"}, {
            sku: "50327719 001 90",
            num: "5"
        }, {sku: "4028694 02", num: "5"}, {sku: "403285404", num: "5"}, {
            sku: "0609552 6.5/37 D",
            num: "5"
        }, {sku: "3978167", num: "5"}, {sku: "473833 4200Q 1078", num: "5"}, {
            sku: "SHYGIRL red S",
            num: "5"
        }, {sku: "3Y6T50 6JPFZ 1200 XL", num: "5"}, {sku: "64798 DKM2U", num: "5"}, {
            sku: "817223 BLV",
            num: "5"
        }, {sku: "6X1T9C1JALZ 063001", num: "5"}, {sku: "851066 MOONSTONE", num: "5"}, {
            sku: "21F568 656339 RED",
            num: "5"
        }, {sku: "850811 COLOR ACCIAIO", num: "5"}, {sku: "10136613 01 629 02", num: "5"}, {
            sku: "A17510XPL 50",
            num: "5"
        }, {sku: "50326227 001 02", num: "5"}, {sku: "01B772 575969 6.5", num: "5"}, {
            sku: "8AP151 SR0 F0JBX",
            num: "5"
        }, {sku: "50327877 001", num: "5"}, {sku: "3Y6T22 6J00Z 01579 XXL", num: "5"}, {
            sku: "868925 AF0",
            num: "5"
        }, {sku: "8N6T99 6JPFZ 01455 04", num: "5"}, {sku: "401069404", num: "5"}, {
            sku: "AB2785OX",
            num: "5"
        }, {sku: "50281069 B 100", num: "5"}, {sku: "247205 KQW5G 9791", num: "5"}, {
            sku: "922214 7P772 08070",
            num: "5"
        }, {sku: "2CC004053 F0G52 110", num: "5"}, {sku: "932079 7P914 06935", num: "5"}, {
            sku: "50311731 025",
            num: "5"
        }, {sku: "01H062 592343 6", num: "5"}, {sku: "F765PM502L43 99 TU", num: "5"}, {
            sku: "NPSS1736 BABYPINK",
            num: "5"
        }, {sku: "50323992 001 S", num: "5"}, {sku: "2CC004X72 F0JYA 100", num: "5"}, {
            sku: "821789 PNK",
            num: "5"
        }, {sku: "8M0358 W2F F010Z", num: "5"}, {sku: "21G160 653401", num: "5"}, {
            sku: "771817 PNK",
            num: "5"
        }, {sku: "2CN0052A53 F0308 105", num: "5"}, {sku: "817985 ALP", num: "5"}, {
            sku: "2MN0772E3E F0S99",
            num: "5"
        }, {sku: "446647 3G001 9888", num: "5"}, {sku: "F755TS0534YJ MU M", num: "5"}, {
            sku: "3Y6T50 6JPFZ 01100 L",
            num: "5"
        }, {sku: "30T6SL4S1L001", num: "5"}, {sku: "9220296A714 31735", num: "5"}, {
            sku: "346223 0631640",
            num: "5"
        }, {sku: "852440 PEPERACER", num: "5"}, {sku: "451277K5X1N8666", num: "5"}, {
            sku: "869100 AF0",
            num: "5"
        }, {sku: "S F silver+blue L", num: "5"}, {sku: "4016617 BLACK/TAN", num: "5"}, {
            sku: "TIELAND WL38747 BLACK 35",
            num: "5"
        }, {sku: "4040735", num: "5"}, {sku: "3Y6T50 6JPFZ 01100 S", num: "5"}, {
            sku: "406557 KVW1N 9769",
            num: "5"
        }, {sku: "M D S black S", num: "5"}, {sku: "4028697 02", num: "5"}, {
            sku: "2CS0132FAD F0002 110",
            num: "5"
        }, {sku: "32H4SSMC3L695", num: "5"}, {sku: "851828 PEE", num: "5"}, {
            sku: "F665PA7184OA 99 02",
            num: "5"
        }, {sku: "7M0164 8FJ F06HP", num: "5"}, {sku: "3Y6T50 6JPFZ 01579 L", num: "5"}, {
            sku: "922552 7P783 39535",
            num: "5"
        }, {sku: "10186578 01 017 03", num: "5"}, {sku: "110810 0684402", num: "5"}, {
            sku: "922211 7P772 06250",
            num: "5"
        }, {sku: "F755SN801F40 99", num: "5"}, {sku: "4033954", num: "5"}, {
            sku: "2NG0032FAD F0201",
            num: "5"
        }, {sku: "783413", num: "5"}, {sku: "2CN0052A53 F0308 90", num: "5"}, {
            sku: "7VA347 B0W F0XB8",
            num: "5"
        }, {sku: "F755CH2001LD 01 38", num: "5"}, {sku: "3Y6F20 6JPTZ 1854 L", num: "5"}, {
            sku: "AE9007OXY UNI",
            num: "5"
        }, {sku: "820892 VOL", num: "5"}, {sku: "30T3SLMS2L092", num: "5"}, {
            sku: "21F827 642810",
            num: "5"
        }, {sku: "404291800", num: "5"}, {sku: "370717 AP0GG 257580", num: "5"}, {
            sku: "4557729 04",
            num: "5"
        }, {sku: "922571 CC864 00051", num: "5"}, {sku: "F665TS0844OB 99 01", num: "5"}, {
            sku: "110810 0698201",
            num: "5"
        }, {sku: "01B772 643076 7", num: "5"}, {sku: "4023403 05", num: "5"}, {
            sku: "2CM015053 F0002 105",
            num: "5"
        }, {sku: "57446 DKM30", num: "5"}, {sku: "2NG003QME F0002", num: "5"}, {
            sku: "922169 7P756 07676",
            num: "4"
        }, {sku: "F755PO0014BA 97 XL", num: "4"}, {sku: "01B788 574563 7", num: "4"}, {
            sku: "6XPM52 PJ05Z 3905 02",
            num: "4"
        }, {sku: "211562 A0V0N 201990", num: "4"}, {sku: "F755TS0004AA 99 L", num: "4"}, {
            sku: "2NG0012EYT F0002",
            num: "4"
        }, {sku: "2CN0052A53 F0002 105", num: "4"}, {sku: "2CS0062FAD F0002 90", num: "4"}, {
            sku: "A2570X CVT NER 8",
            num: "4"
        }, {sku: "V0703 540 1002 L", num: "4"}, {sku: "F755SW0004MB 99 M", num: "4"}, {
            sku: "2ML317 2EGM F0002",
            num: "4"
        }, {sku: "922501 CC850 00555", num: "4"}, {sku: "852641 O60", num: "4"}, {
            sku: "453205 D94JN 6267",
            num: "4"
        }, {sku: "F765TS0494YC 78 S", num: "4"}, {sku: "I Y S rose gold S", num: "4"}, {
            sku: "MIDLAND WL38780 BLACK 37",
            num: "4"
        }, {sku: "429027 H1FIT 8476 90", num: "4"}, {sku: "395772 RGH79 1000 S", num: "4"}, {
            sku: "21E099 642803",
            num: "4"
        }, {sku: "2MO5132E3E F0A13", num: "4"}, {sku: "01H884 603820 6", num: "4"}, {
            sku: "365466 CWC1R 4009",
            num: "4"
        }, {sku: "A0703 4140 1001 XXS", num: "4"}, {sku: "C6H10NM6502", num: "4"}, {
            sku: "928032 7P772 06250",
            num: "4"
        }, {sku: "F755BL1011MA 77 M", num: "4"}, {sku: "F755CH6002FG 64 M", num: "4"}, {
            sku: "817096 VOL",
            num: "4"
        }, {sku: "50326795 100 04", num: "4"}, {sku: "6X1T9B1JALZ 0999 03", num: "4"}, {
            sku: "3Y6T17 6J1FZ 01579 M",
            num: "4"
        }, {sku: "0627587 VARA 1 8.5", num: "4"}, {sku: "50236732 64601", num: "4"}, {
            sku: "7VZ012 5PN F0X93",
            num: "4"
        }, {sku: "928532 CC850 00533", num: "4"}, {sku: "922176 7P757 00470", num: "4"}, {
            sku: "4021873",
            num: "4"
        }, {sku: "E1 AD6 55 B7 01 209", num: "4"}, {sku: "932036 6A912 00020", num: "4"}, {
            sku: "3Y6F20 6JPTZ 1905 M",
            num: "4"
        }, {sku: "AE9447OX", num: "4"}, {sku: "50370164 401", num: "4"}, {
            sku: "B75416 0800 40",
            num: "4"
        }, {sku: "F661TS870991 77 01", num: "4"}, {sku: "399115705", num: "4"}, {
            sku: "AB2161OX M",
            num: "4"
        }, {sku: "869655 MT0", num: "4"}, {sku: "2CS0132FAD F0216 105", num: "4"}, {
            sku: "247205 KQW5G 4080",
            num: "4"
        }, {sku: "2CC004053 F0G52 105", num: "4"}, {sku: "01H062 592343 5.5", num: "4"}, {
            sku: "F755TS0504YC 99 M",
            num: "4"
        }, {sku: "01L488 643444 6.5", num: "4"}, {sku: "2CM015053 F0216 110", num: "4"}, {
            sku: "F765TS0504YC 51 XL",
            num: "4"
        }, {sku: "01B772 575969 7", num: "4"}, {sku: "30H3SCYS2L802", num: "4"}, {
            sku: "4033301",
            num: "4"
        }, {sku: "771759 DAI", num: "4"}, {sku: "10106415 01 603 01", num: "4"}, {
            sku: "808078",
            num: "4"
        }, {sku: "05V84RJ 4L", num: "4"}, {sku: "30T5STVT2L092", num: "4"}, {
            sku: "30T6SK3S3L 059",
            num: "4"
        }, {sku: "F665TS0434BD 55 L", num: "4"}, {sku: "869493 R0P", num: "4"}, {
            sku: "9220286A714 31735",
            num: "4"
        }, {sku: "50248964 239 34", num: "4"}, {sku: "50302557 342 M", num: "4"}, {
            sku: "3Y6T17 6J1FZ 01100 01",
            num: "4"
        }, {sku: "MMF4ALS56 VY001", num: "4"}, {sku: "429643 4010Q 4173", num: "4"}, {
            sku: "8M0365 SFB F07NX",
            num: "4"
        }, {sku: "451268 K5X1N 8666", num: "4"}, {sku: "50316881 001", num: "4"}, {
            sku: "MXS5AVI27 CO001",
            num: "4"
        }, {sku: "10106415 01 603 03", num: "4"}, {sku: "S F indigo blue L", num: "4"}, {
            sku: "2CS0062FAD F0216 90",
            num: "4"
        }, {sku: "MEC4AVI11 BK00M", num: "4"}, {sku: "2CC004053 F0G52 90", num: "4"}, {
            sku: "3955999 XL",
            num: "4"
        }, {sku: "0602152 6.5/37 D", num: "4"}, {sku: "21F628 649200", num: "4"}, {
            sku: "4040733",
            num: "4"
        }, {sku: "2CM016053 F0G52 100", num: "4"}, {sku: "852783 ONYX", num: "4"}, {
            sku: "22B558 0548912",
            num: "4"
        }, {sku: "50323992 100 M", num: "4"}, {sku: "F665TS0434BD 55 S", num: "4"}, {
            sku: "922159 7P771 00051",
            num: "4"
        }, {sku: "3XCM51 064202", num: "4"}, {sku: "32T6SAVC1T468", num: "4"}, {
            sku: "AE9784OX UNI",
            num: "4"
        }, {sku: "0593936 NINNA F40 5.5", num: "4"}, {sku: "8N6D02 6JPFZ 1579 L", num: "4"}, {
            sku: "10106415 01 610 01",
            num: "4"
        }, {sku: "S F taupe L", num: "4"}, {sku: "50324782 031 02", num: "4"}, {
            sku: "2CS0132FAD F0002 105",
            num: "4"
        }, {sku: "3909740100", num: "4"}, {sku: "F755PO0014BA 93 S", num: "4"}, {
            sku: "30S5GEZB1L001",
            num: "4"
        }, {sku: "6XPM52 PJ05Z 1200 01", num: "4"}, {sku: "2CC0042FAD F0B2A 100", num: "4"}, {
            sku: "2MO513 2EGM F0002",
            num: "4"
        }, {sku: "01H062 594549 5.5", num: "4"}, {sku: "403270104", num: "4"}, {
            sku: "922533 CC856 00110",
            num: "4"
        }, {sku: "22B558 0656944", num: "4"}, {sku: "F665TS0844OB 97 01", num: "4"}, {
            sku: "2CN0122ADS F0A13 90",
            num: "4"
        }, {sku: "6208165", num: "4"}, {sku: "50325611 410 01", num: "4"}, {
            sku: "3Y6F03 6J0JZ 1477 M",
            num: "4"
        }, {sku: "0593936 NINNA F40 6.5", num: "4"}, {sku: "932525CC993 00541", num: "4"}, {
            sku: "MW2P0372BOL 469",
            num: "4"
        }, {sku: "401232 A7M0T 5609", num: "4"}, {sku: "928532 CC855 00176", num: "4"}, {
            sku: "40R5FUFR2L001 36.5",
            num: "4"
        }, {sku: "F661SW830951 99 02", num: "4"}, {sku: "934098 7A713 17535", num: "4"}, {
            sku: "3Y6T24 6J00Z 01905 XL",
            num: "4"
        }, {sku: "50322092", num: "4"}, {sku: "F755PA7254MD 78 M", num: "4"}, {
            sku: "2ML1882E3E F0OTH",
            num: "4"
        }, {sku: "8BL135 43G F0421", num: "4"}, {sku: "50328475 202 100", num: "4"}, {
            sku: "922500 CC850 00335",
            num: "4"
        }, {sku: "2CC004X72 F0JYA 95", num: "4"}, {sku: "8M0378 SR0 F07HE", num: "4"}, {
            sku: "54813 SV/LAPIS",
            num: "4"
        }, {sku: "2NG003PN9 F0002", num: "4"}, {sku: "F665SW1464OC 99 02", num: "4"}, {
            sku: "01M109 657735 NERO 5.5",
            num: "4"
        }, {sku: "01B772 530040 7", num: "4"}, {sku: "6X1F5A1JADZ 0100 04", num: "4"}, {
            sku: "F755PO0014BA 97 S",
            num: "4"
        }, {sku: "428740 DJ20T 1000", num: "4"}, {sku: "B75392 0800 42", num: "4"}, {
            sku: "21F827 643124",
            num: "4"
        }, {sku: "30T6GEZB1L623", num: "4"}, {sku: "3Y6T50 6JPFZ 01579 XL", num: "4"}, {
            sku: "40S5FUFR1L405 36",
            num: "4"
        }, {sku: "50328475 202 110", num: "4"}, {sku: "851199 COLOR CORALLO", num: "4"}, {
            sku: "0627587 VARA 1 7",
            num: "4"
        }, {sku: "10136613 01 428 01", num: "4"}, {sku: "F665TS0184OB 01 03", num: "4"}, {
            sku: "3995506 XS",
            num: "4"
        }, {sku: "F755TS0004AA 99 M", num: "4"}, {sku: "30T3SLMS2L926", num: "4"}, {
            sku: "0609552 5.5/36 D",
            num: "4"
        }, {sku: "F755TS0884SG 01 M", num: "4"}, {sku: "2CN0052A53 F0002 110", num: "4"}, {
            sku: "F765SW0014XC 78 M",
            num: "4"
        }, {sku: "30T6TEZM1T438", num: "4"}, {sku: "401069400", num: "4"}, {
            sku: "32S4GTVC3L230",
            num: "4"
        }, {sku: "3Y6T17 6J1FZ 01579 L", num: "4"}, {sku: "850801 MOONSTONE", num: "4"}, {
            sku: "3Y6T24 6J00Z 01464 S",
            num: "4"
        }, {sku: "30T5GTVT2L623", num: "4"}, {sku: "404647700", num: "4"}, {
            sku: "10136613 01 428 03",
            num: "4"
        }, {sku: "F665TS0184OB 97 02", num: "4"}, {sku: "928532 CC850 00020", num: "4"}, {
            sku: "870776",
            num: "4"
        }, {sku: "8AP079 W2F F010Z", num: "4"}, {sku: "0529D55 PC", num: "4"}, {
            sku: "429027 H1FIT 8476 95",
            num: "4"
        }, {sku: "21E099 642804", num: "4"}, {sku: "2NG0012FAD F0201", num: "4"}, {
            sku: "MXB5AVI72 NC130",
            num: "4"
        }, {sku: "A7997 8305 1555 TU", num: "4"}, {sku: "SR17MIG5", num: "4"}, {
            sku: "50281069 90",
            num: "4"
        }, {sku: "3Y6T17 6J1FZ 01579 S", num: "4"}, {sku: "01H062 592343 5", num: "4"}, {
            sku: "4029551",
            num: "4"
        }, {sku: "55822", num: "4"}, {sku: "2NG005 QME F0002", num: "4"}, {
            sku: "F665TS0184OD 99 01",
            num: "4"
        }, {sku: "F765TS0504YC 51 S", num: "4"}, {sku: "50248964 239 31", num: "4"}, {
            sku: "928532 CC850 00574",
            num: "4"
        }, {sku: "6X1F2B1JADZ 0620 01", num: "4"}, {sku: "E1 AD6 55 B7 01 228", num: "4"}, {
            sku: "MXC4AVI67 EG001",
            num: "4"
        }, {sku: "22C770 661162 SANGRIA", num: "4"}, {sku: "869658 MT0", num: "4"}, {
            sku: "409340 CWC1G 5808",
            num: "4"
        }, {sku: "F755PA2261RJ 77 48", num: "4"}, {sku: "870781", num: "4"}, {
            sku: "50326816 036 03",
            num: "4"
        }, {sku: "F755SW0014XC 99 M", num: "4"}, {sku: "05V84RJ 12", num: "4"}, {
            sku: "851507 ONYXPETAL",
            num: "4"
        }, {sku: "50311892 001 95", num: "4"}, {sku: "2NG005QME F0002", num: "4"}, {
            sku: "2CN0102EP7 F0Q09 90",
            num: "4"
        }, {sku: "4015563 03", num: "4"}, {sku: "2MC2232E3E F0A13", num: "4"}, {
            sku: "30S5SEZB5L001",
            num: "4"
        }, {sku: "21E479 600206 NERO", num: "4"}, {sku: "451184 DUX2T 1000", num: "4"}, {
            sku: "50322416",
            num: "4"
        }, {sku: "37296 BP/BORDEAUX", num: "4"}, {sku: "928088 7P760 00020", num: "4"}, {
            sku: "808079",
            num: "4"
        }, {sku: "922159 7P764 00020", num: "4"}, {sku: "6X1F2B1JADZ 0920 01", num: "4"}, {
            sku: "32S5STVE9L438",
            num: "4"
        }, {sku: "8M0217 SR0 F0XBW", num: "4"}, {sku: "403270101", num: "4"}, {
            sku: "932535 CC996 00020",
            num: "4"
        }, {sku: "851695 PETALOONY", num: "4"}, {sku: "404648402", num: "4"}, {
            sku: "2CN0122ADS F0A13 110",
            num: "4"
        }, {sku: "10186447 01 411 04", num: "4"}, {sku: "2CS0132FAD F0216 90", num: "4"}, {
            sku: "922187 7P760 31835",
            num: "4"
        }, {sku: "TRIOT 290", num: "4"}, {sku: "E1 AD9 55 B7 01 069", num: "4"}, {
            sku: "9320546A903 00843",
            num: "4"
        }, {sku: "820658 O60", num: "4"}, {sku: "8M0365 SQT F02L0", num: "4"}, {
            sku: "922159 7P771 00020",
            num: "4"
        }, {sku: "50327630 001 110", num: "4"}, {sku: "8M0251 SME F0NJ3", num: "4"}, {
            sku: "8N6D01 6JPFZ 1579 L",
            num: "4"
        }, {sku: "F665TS0434OF 94 01", num: "4"}, {sku: "810440", num: "4"}, {
            sku: "4023350 03",
            num: "4"
        }, {sku: "F755TS0494YC 55 M", num: "4"}, {sku: "2MO738 C5S F0G52 00", num: "4"}, {
            sku: "3Y6T22 6J00Z 1494 L",
            num: "4"
        }, {sku: "938538CC990 00020", num: "4"}, {sku: "2NG0032EYT F0201", num: "4"}, {
            sku: "8N6D02 6JPFZ 1579 S",
            num: "4"
        }, {sku: "50322478 100", num: "4"}, {sku: "869103 CPJ", num: "4"}, {
            sku: "50324782 031 03",
            num: "4"
        }, {sku: "401231 KU2AN 8487", num: "4"}, {sku: "40R5FUFR2L001 36", num: "4"}, {
            sku: "E1 AD6 19 01 01 209",
            num: "4"
        }, {sku: "05230RJ 12", num: "4"}, {sku: "2MO513 2EGO F0UDN 00", num: "4"}, {
            sku: "3Y6T22 6J00Z 01504 L",
            num: "4"
        }, {sku: "30T3GSMM2L665", num: "4"}, {sku: "7030540 1002 S", num: "4"}, {
            sku: "3Y6T24 6J00Z 01905 S",
            num: "4"
        }, {sku: "856564 GOLD", num: "4"}, {sku: "F765SW0014XC 51 L", num: "4"}, {
            sku: "SR17LORG6",
            num: "4"
        }, {sku: "01B772 643076 6", num: "4"}, {sku: "6X1T9B1JALZ 0630 01", num: "4"}, {
            sku: "3Y6T17 6J1FZ 01200 01",
            num: "4"
        }, {sku: "0593936 NINNA F40 7", num: "4"}, {sku: "349F 6", num: "4"}, {
            sku: "431942 A38G0 9064 37",
            num: "4"
        }, {sku: "01L435 642747 5.5", num: "4"}, {sku: "F661TS874993 99 02", num: "4"}, {
            sku: "MYL6SVC82 BK001",
            num: "4"
        }, {sku: "10106415 01 610 04", num: "4"}, {sku: "50248964 001 31", num: "4"}, {
            sku: "TIELAND WL38747 BLACK 37",
            num: "4"
        }, {sku: "01B788 574563 6", num: "4"}, {sku: "E5 AV3 55 D3 07 023", num: "4"}, {
            sku: "MMK5SVU11 WHITE",
            num: "4"
        }, {sku: "6Y6T35 6JHKZ 1565 M", num: "4"}, {sku: "72312", num: "4"}, {
            sku: "8N6D01 6JPFZ 1579 XXL",
            num: "4"
        }, {sku: "59389 DKM86", num: "4"}, {sku: "3Y6T50 6JPFZ 01579 S", num: "4"}, {
            sku: "C6H10NM0601",
            num: "4"
        }, {sku: "9221106A730 41620", num: "4"}, {sku: "3883911100", num: "4"}, {
            sku: "922211 7P772 08170",
            num: "4"
        }, {sku: "2CC004053 F0DVI 110", num: "4"}, {sku: "8BN293 5QL F03BC", num: "4"}, {
            sku: "MMK3SVE17 CO001",
            num: "4"
        }, {sku: "922500 CC850 00631", num: "4"}, {sku: "3962746", num: "4"}, {
            sku: "F755TS0504YC 01 S",
            num: "4"
        }, {sku: "368186 BGH0V 1000 100", num: "4"}, {sku: "852637 AF0", num: "4"}, {
            sku: "453205 D94JG 6267",
            num: "4"
        }, {sku: "7VA354 X4K F0R2A", num: "4"}, {sku: "8N6T99 6JPFZ 01589 XL", num: "4"}, {
            sku: "928503 CC857 09934",
            num: "4"
        }, {sku: "6X1F5A1JADZ 0351 01", num: "3"}, {sku: "410120 CWC1G 5648", num: "3"}, {
            sku: "818645 TR5",
            num: "3"
        }, {sku: "402869003", num: "3"}, {sku: "932123 7P917 00033", num: "3"}, {
            sku: "851154 MOONSTONE",
            num: "3"
        }, {sku: "30T3SLMS2L446", num: "3"}, {sku: "934504 CC786 00635", num: "3"}, {
            sku: "30T6GEZB1L800",
            num: "3"
        }, {sku: "F665PO0234BD 99 S", num: "3"}, {sku: "2TL0661EH F0038", num: "3"}, {
            sku: "F665TS0844OB 99 03",
            num: "3"
        }, {sku: "F755CH2001LD 01 40", num: "3"}, {sku: "32H6TPDM8L001", num: "3"}, {
            sku: "6X1T9B1JALZ 0999 01",
            num: "3"
        }, {sku: "E1 AH6 11 01 01 023", num: "3"}, {sku: "2CC004053 F0DVI 85", num: "3"}, {
            sku: "MMK5ADK10 BK001",
            num: "3"
        }, {sku: "851203 RUB", num: "3"}, {sku: "0627587 VARA 1 7.5", num: "3"}, {
            sku: "F665TS0184OB 97 01",
            num: "3"
        }, {sku: "928503 CC864 02836", num: "3"}, {sku: "01M109 657735 NERO 7", num: "3"}, {
            sku: "01B772 575969 5",
            num: "3"
        }, {sku: "LOWLAND WL38777 BLACK 36", num: "3"}, {sku: "850819 ACERO", num: "3"}, {
            sku: "VM340 ZZ600 R07 M",
            num: "3"
        }, {sku: "932136 7P915 00020", num: "3"}, {sku: "F755TS0004AA 99 S", num: "3"}, {
            sku: "8M0346 SQT F02L0",
            num: "3"
        }, {sku: "30T6GH3T2U621", num: "3"}, {sku: "2CN0052A53 F0002 115", num: "3"}, {
            sku: "50324769 410 03",
            num: "3"
        }, {sku: "SR17MIG11", num: "3"}, {sku: "408510 DSS30 8465 37", num: "3"}, {
            sku: "3872326 XL",
            num: "3"
        }, {sku: "F755PA7254MD 99 XS", num: "3"}, {sku: "2CC004053 F0DVI 95", num: "3"}, {
            sku: "0594553 NINNA F40 7",
            num: "3"
        }, {sku: "F655TS0734BD 01 03", num: "3"}, {sku: "851492 ACERO", num: "3"}, {
            sku: "21F568 655735 FUCSIA",
            num: "3"
        }, {sku: "850808 MOONSTONE", num: "3"}, {sku: "01L488 643444 5.5", num: "3"}, {
            sku: "F665CH2211FA 01 38",
            num: "3"
        }, {sku: "21G331 659788 PAMPLONA", num: "3"}, {sku: "869427 PESCA b", num: "3"}, {
            sku: "F765TS0504YC 51 M",
            num: "3"
        }, {sku: "50326227 001 01", num: "3"}, {sku: "TIELAND WL38775 SLATE 36.5", num: "3"}, {
            sku: "411177 3G105 6470",
            num: "3"
        }, {sku: "3913363002", num: "3"}, {sku: "2MC122QME F0216", num: "3"}, {
            sku: "W icy grey S",
            num: "3"
        }, {sku: "01H884 603820 7", num: "3"}, {sku: "21F966 649108 NERO", num: "3"}, {
            sku: "2NG001PN9 F0002",
            num: "3"
        }, {sku: "758806", num: "3"}, {sku: "10106415 01 423 01", num: "3"}, {
            sku: "SHYGIRL silver S",
            num: "3"
        }, {sku: "50239979 B 100", num: "3"}, {sku: "C6H75FN C4 02", num: "3"}, {
            sku: "40T2FUFR1L092 36",
            num: "3"
        }, {sku: "01B788 518587 7", num: "3"}, {sku: "V0706 440 2001 M", num: "3"}, {
            sku: "2MN0772E3E F0002",
            num: "3"
        }, {sku: "30S7GHMS7L414", num: "3"}, {sku: "851497 ZAFFERANO", num: "3"}, {
            sku: "21F570 629106",
            num: "3"
        }, {sku: "MWK5AXD08 BK001", num: "3"}, {sku: "0629009 7.5/41.5 EEE", num: "3"}, {
            sku: "F665CH2211FA 76 38",
            num: "3"
        }, {sku: "01L992 658364 SANGRIA 7.5", num: "3"}, {
            sku: "NPSS1733 WHITEBABY",
            num: "3"
        }, {sku: "F665TS0184OD 99 02", num: "3"}, {sku: "A17510XPL 52", num: "3"}, {
            sku: "406367 KHN7X 9772",
            num: "3"
        }, {sku: "F755PA2261RJ 77 50", num: "3"}, {sku: "AB3347OXY", num: "3"}, {
            sku: "133483 3G200 4763",
            num: "3"
        }, {sku: "820648 CGD", num: "3"}, {sku: "2MC2232E3E F0002", num: "3"}, {
            sku: "MMF4ALS56 BLACK",
            num: "3"
        }, {sku: "4028696 01", num: "3"}, {sku: "2CC0042FAD F0G52 90", num: "3"}, {
            sku: "3958905001",
            num: "3"
        }, {sku: "852427 ONYX", num: "3"}, {sku: "MXC5AVI67 CO001", num: "3"}, {
            sku: "50322415 95",
            num: "3"
        }, {sku: "A16766OXY S", num: "3"}, {sku: "01M006 657611 NERO 6", num: "3"}, {
            sku: "869661 MT0",
            num: "3"
        }, {sku: "40T2FUFR1L092 37", num: "3"}, {sku: "30S3GLMS7L217", num: "3"}, {
            sku: "AE8538OX UNI",
            num: "3"
        }, {sku: "932080 7P915 00020", num: "3"}, {sku: "415469 3G200 4072", num: "3"}, {
            sku: "50311963",
            num: "3"
        }, {sku: "F665PA7184OA 94 00", num: "3"}, {sku: "2CM015053 F0216 90", num: "3"}, {
            sku: "A17574OX PIERCING 52",
            num: "3"
        }, {sku: "308004 A7M0G 1000", num: "3"}, {sku: "2CS0132FAD F0216 85", num: "3"}, {
            sku: "922187 7P760 00020",
            num: "3"
        }, {sku: "2CC004X72 F0JYA 110", num: "3"}, {sku: "4033767", num: "3"}, {
            sku: "SJN149 WY7 F092D L",
            num: "3"
        }, {sku: "50245195 641 L", num: "3"}, {sku: "AB3257OX", num: "3"}, {
            sku: "110810 0071703",
            num: "3"
        }, {sku: "32S5STVE9L446", num: "3"}, {sku: "421384 4010Q 1460", num: "3"}, {
            sku: "8M0251 SL7 F013A",
            num: "3"
        }, {sku: "922504 CC850 00774", num: "3"}, {sku: "50312006 001", num: "3"}, {
            sku: "30T6SL4S1L092",
            num: "3"
        }, {sku: "C6C447S1203", num: "3"}, {sku: "10186447 01 411 05", num: "3"}, {
            sku: "850897 GOLD",
            num: "3"
        }, {sku: "MMF5SVC11 BLACK", num: "3"}, {sku: "922247 7P760 31835", num: "3"}, {
            sku: "430583 4G200 1468",
            num: "3"
        }, {sku: "01H916 609552 7", num: "3"}, {sku: "30T4GLMS3A607", num: "3"}, {
            sku: "4033796",
            num: "3"
        }, {sku: "2CM005908 F0002 105", num: "3"}, {sku: "21G177 656053", num: "3"}, {
            sku: "MYL 5SVC46 CO001",
            num: "3"
        }, {sku: "A17064OX 52", num: "3"}, {sku: "881171", num: "3"}, {
            sku: "410100 KLQIG 9784",
            num: "3"
        }, {sku: "AE8807OX", num: "3"}, {sku: "VM340 ZZ600 B07 L", num: "3"}, {
            sku: "342019 0495450",
            num: "3"
        }, {sku: "932112 7P922 00020", num: "3"}, {sku: "B75392 0800 34", num: "3"}, {
            sku: "3975690 XS",
            num: "3"
        }, {sku: "370543 AP00G 141985", num: "3"}, {sku: "4557729 01", num: "3"}, {
            sku: "01M004 657561 NERO 6.5",
            num: "3"
        }, {sku: "SR17LORG5", num: "3"}, {sku: "50292247z100", num: "3"}, {
            sku: "01B772 643076 5.5",
            num: "3"
        }, {sku: "32T6SDDC3L092", num: "3"}, {sku: "E1 AF0 18 01 01 143", num: "3"}, {
            sku: "2CC003X72 F0002 95",
            num: "3"
        }, {sku: "2CC004X72 F0JYA 85", num: "3"}, {sku: "431942 A38G0 9064 36", num: "3"}, {
            sku: "F755TS0494YC 55 S",
            num: "3"
        }, {sku: "3Y6T22 6J00Z 1494 M", num: "3"}, {sku: "852576 OYA", num: "3"}, {
            sku: "21G191 0656344",
            num: "3"
        }, {sku: "777949 ONYX", num: "3"}, {sku: "8N6D02 6JPFZ 1579 XL", num: "3"}, {
            sku: "SR17MMGM7311",
            num: "3"
        }, {sku: "401831303", num: "3"}, {sku: "TIELAND WL38747 BLACK 36.5", num: "3"}, {
            sku: "9320016A905 00020",
            num: "3"
        }, {sku: "410102 CWC1G 5648", num: "3"}, {sku: "6XPM52 PJ05Z 1200 03", num: "3"}, {
            sku: "E5 AV3 55 D3 07 001",
            num: "3"
        }, {sku: "932118 7P914 00020", num: "3"}, {sku: "3Y6T22 6J00Z 01504 M", num: "3"}, {
            sku: "01H062 594549 6.5",
            num: "3"
        }, {sku: "30T3MLMS7T620", num: "3"}, {sku: "6Y6T35 6JHKZ 1565 L", num: "3"}, {
            sku: "448065 DRW1T 4338",
            num: "3"
        }, {sku: "3976242003", num: "3"}, {sku: "370717 AP0GG 257575", num: "3"}, {
            sku: "59382 DKMIN",
            num: "3"
        }, {sku: "4557729 03", num: "3"}, {sku: "50324769 031 02", num: "3"}, {
            sku: "SR17LORG9",
            num: "3"
        }, {sku: "32F4GTVC9L001", num: "3"}, {sku: "01B772 530040 6", num: "3"}, {
            sku: "3Y6F03 6J0JZ 1477 XL",
            num: "3"
        }, {sku: "50326716 609", num: "3"}, {sku: "MMK3AXO22 BK001", num: "3"}, {
            sku: "0593936 NINNA F40 7.5",
            num: "3"
        }, {sku: "2MV3412A7D F0002", num: "3"}, {sku: "BB39 Black", num: "3"}, {
            sku: "8N6S83 6J07Z 0543 L",
            num: "3"
        }, {sku: "6205457", num: "3"}, {sku: "405019 KU2BN 8693", num: "3"}, {
            sku: "7VA354 2MR F0W4Q",
            num: "3"
        }, {sku: "309617 KGD6G 8871", num: "3"}, {sku: "870758 C9M", num: "3"}, {
            sku: "50326215 100 01",
            num: "3"
        }, {sku: "9221596A718 11955", num: "3"}, {
            sku: "TIELAND WL38747 BLACK 37.5",
            num: "3"
        }, {sku: "410120 CWC1G 5235", num: "3"}, {
            sku: "01B788 574563 6.5",
            num: "3"
        }, {sku: "MIDLAND WL38780 BLACK 35.5", num: "3"}, {
            sku: "2NE789 2EJR F0002",
            num: "3"
        }, {sku: "A2570X CVT NER 7", num: "3"}, {sku: "6250806A315 17044", num: "3"}, {
            sku: "6X1T9B1JALZ 0630 04",
            num: "3"
        }, {sku: "411924 CWC1N 2140 80", num: "3"}, {sku: "8BN293 5QL F03BD", num: "3"}, {
            sku: "AP9938XPL",
            num: "3"
        }, {sku: "55036 BP/BORDEAUX", num: "3"}, {sku: "368186 BGH0V 1000 80", num: "3"}, {
            sku: "GRZ OPTIC WHITE",
            num: "3"
        }, {sku: "32H6TPDM7L001", num: "3"}, {sku: "4019927 MAUVE PINK", num: "3"}, {
            sku: "AE9109XPL",
            num: "3"
        }, {sku: "922216 7P772 08170", num: "3"}, {sku: "MMM5SVI12 CO001", num: "3"}, {
            sku: "50316424",
            num: "3"
        }, {sku: "2NG0012EYT F0201", num: "3"}, {sku: "30T6GEZB1L848", num: "3"}, {
            sku: "460185 A7M0T 5909",
            num: "3"
        }, {sku: "SR17MIG1", num: "3"}, {sku: "50281069 100", num: "3"}, {
            sku: "2CS0132FAD F0002 90",
            num: "3"
        }, {sku: "40S5FUFR1L405 37", num: "3"}, {sku: "388680 KLQUG 8431", num: "3"}, {
            sku: "922212 7P772 06250",
            num: "3"
        }, {sku: "402340403", num: "3"}, {sku: "6X1T9B1JALZ 0999 02", num: "3"}, {
            sku: "F755SW0004MB 99 S",
            num: "3"
        }, {sku: "353965 A7M0G 5523", num: "3"}, {sku: "4038460", num: "3"}, {
            sku: "0627587 VARA 1 8",
            num: "3"
        }, {sku: "MYZ9AVI05 CO001", num: "3"}, {sku: "30T6SH3T2N270", num: "3"}, {
            sku: "6X1F5A1JADZ 0351 04",
            num: "3"
        }, {sku: "3913363001", num: "3"}, {sku: "2MC122QME F0002", num: "3"}, {
            sku: "395772 RGH79 1000 XS",
            num: "3"
        }, {sku: "F755TS0004AA 99 XL", num: "3"}, {sku: "50239979 90", num: "3"}, {
            sku: "RB2785OR",
            num: "3"
        }, {sku: "928032 7P772 08170", num: "3"}, {
            sku: "9221426A704 00176",
            num: "3"
        }, {sku: "01M262 660864 PAMPLONA 6", num: "3"}, {sku: "50311707", num: "3"}, {
            sku: "50311892 001 110",
            num: "3"
        }, {sku: "01L488 643444 6", num: "3"}, {sku: "2CM015053 F0216 105", num: "3"}, {
            sku: "852743 PEPERONCI",
            num: "3"
        }, {sku: "793552 MOONSTONE", num: "3"}, {sku: "50323992 001 L", num: "3"}, {
            sku: "10186447 01 402 05",
            num: "3"
        }, {sku: "30F5GSLL3L848", num: "3"}, {sku: "3913363003", num: "3"}, {
            sku: "01B792 643220 6",
            num: "3"
        }, {sku: "MMB4AVC16 BK001", num: "3"}, {sku: "932523CC993 00020", num: "3"}, {
            sku: "B75416 0800 42",
            num: "3"
        }, {sku: "21F966 655849 PAMPLONA", num: "3"}, {sku: "2NG001QME F0002", num: "3"}, {
            sku: "768340",
            num: "3"
        }, {sku: "50322415 90", num: "3"}, {sku: "A16766OXY M", num: "3"}, {
            sku: "322144 663080",
            num: "3"
        }, {sku: "C6H75FN C4 04", num: "3"}, {sku: "65547 LINAV", num: "3"}, {
            sku: "928541 CC870 00335",
            num: "3"
        }, {sku: "40T2FUFR1L092 36.5", num: "3"}, {sku: "4031567", num: "3"}, {
            sku: "21F570 642984",
            num: "3"
        }, {sku: "56524 SV/BLACK", num: "3"}, {sku: "8N6S83 6J07Z 3916 M", num: "3"}, {
            sku: "A17574OX PIERCING 50",
            num: "3"
        }, {sku: "3XCF61 001203", num: "3"}, {sku: "01B772 575969 7.5", num: "3"}, {
            sku: "820657 MN2",
            num: "3"
        }, {sku: "01B792 643220 7", num: "3"}, {sku: "W silver S", num: "3"}, {
            sku: "F661TS870993 99 02",
            num: "3"
        }, {sku: "852428 PEPERONCI", num: "3"}, {sku: "10106415 01 603 02", num: "3"}, {
            sku: "2VE030 064 F0002",
            num: "3"
        }, {sku: "7M0207 HGJ F0D7N", num: "3"}, {sku: "SR17MIRG11", num: "3"}, {
            sku: "409487 K0L5G 8682",
            num: "3"
        }, {sku: "931503CC880 00152 04", num: "3"}, {sku: "40T2FUFR1L092 37.5", num: "3"}, {
            sku: "50323992 100 L",
            num: "3"
        }, {sku: "A17799XNAY 50", num: "3"}, {sku: "869494", num: "3"}, {
            sku: "50326227 100 01",
            num: "3"
        }, {sku: "30H5GAIS3L177", num: "3"}, {sku: "50302557 342 S", num: "3"}, {
            sku: "2MC2232E3E F0S99",
            num: "3"
        }, {sku: "8BH333 5QT F04QL", num: "3"}, {sku: "821898 BTT", num: "3"}, {
            sku: "4033789",
            num: "3"
        }, {sku: "F661TS874993 01 01", num: "3"}, {sku: "938001 6A902 00020", num: "3"}, {
            sku: "50322417",
            num: "3"
        }, {sku: "7M0210 O79 F07T3", num: "3"}, {sku: "928088 7P760 31835", num: "3"}, {
            sku: "409529 KLQIG 9784",
            num: "3"
        }, {sku: "881168", num: "3"}, {sku: "01M264 0660878 5.5", num: "3"}, {
            sku: "278635 CWC1N 1000",
            num: "3"
        }, {sku: "3955999 XS", num: "3"}, {sku: "1MH132 QME F0002", num: "3"}, {
            sku: "F661SW830951 34 02",
            num: "3"
        }, {sku: "932538 CC996 00020", num: "3"}, {sku: "856399 ACERO", num: "3"}, {
            sku: "C6C447S1205",
            num: "3"
        }, {sku: "50323992 100 S", num: "3"}, {sku: "326514 FWCGG 8867", num: "3"}, {
            sku: "FENDI 5153-218",
            num: "3"
        }, {sku: "50325611 100 XL", num: "3"}, {sku: "922159 7P771 11434", num: "3"}, {
            sku: "3Y6F03 6J0JZ 1477 L",
            num: "3"
        }, {sku: "6X1T9B1JALZ 0351 03", num: "3"}, {sku: "850912 SABBIA", num: "3"}, {
            sku: "346224 0631643",
            num: "3"
        }, {sku: "50311788 001", num: "3"}, {sku: "0627587 VARA 1 4.5", num: "3"}, {
            sku: "Z6B02XM5252",
            num: "3"
        }, {sku: "F661TS874993 01 03", num: "3"}, {sku: "852550 IO0", num: "3"}, {
            sku: "F755PO0014BA 93 XL",
            num: "3"
        }, {sku: "30S5GEZB5L001", num: "3"}, {sku: "402724 KU2IN 8693", num: "3"}, {
            sku: "851151 RUBY",
            num: "3"
        }, {sku: "424891 K0L2G 8691", num: "3"}, {sku: "403270201", num: "3"}, {
            sku: "934098 7A713 00022",
            num: "3"
        }, {sku: "8N6D01 6JPFZ 1579 S", num: "3"}, {sku: "01L525 652923 6", num: "3"}, {
            sku: "50317277 001",
            num: "3"
        }, {sku: "R14726OX 54", num: "3"}, {sku: "C6H08QK 0802", num: "3"}, {
            sku: "A2144X VSW ABS 7.5",
            num: "3"
        }, {sku: "32F2SFTE3L438", num: "3"}, {sku: "810835", num: "3"}, {
            sku: "F755PA7254MD 78 L",
            num: "3"
        }, {sku: "M D S Poweder Blue S", num: "3"}, {sku: "32T6SDDC3L438", num: "3"}, {
            sku: "8BL135 1D5 F0E2H",
            num: "3"
        }, {sku: "01G357 574293 7", num: "3"}, {sku: "MMK 5SVE38 PK001", num: "3"}, {
            sku: "30S6GS7S2L656",
            num: "3"
        }, {sku: "922500 CC850 00143", num: "3"}, {sku: "50311811", num: "3"}, {
            sku: "21G191 655877",
            num: "3"
        }, {sku: "384256685", num: "3"}, {sku: "869106 M6F", num: "3"}, {
            sku: "8N6T99 6JPFZ 01589 M",
            num: "3"
        }, {sku: "928532 CC855 00555", num: "3"}, {
            sku: "391246 4G200 1160",
            num: "3"
        }, {sku: "MIDLAND WL38780 BLACK 35", num: "3"}, {sku: "402869001", num: "3"}, {
            sku: "VM340 ZZ600 B07 XL",
            num: "3"
        }, {sku: "403270203", num: "3"}, {sku: "F661SW830951 99 03", num: "3"}, {
            sku: "2CC009053 F0216 95",
            num: "3"
        }, {sku: "397627700", num: "3"}, {sku: "30T6GEZB1L414", num: "3"}, {
            sku: "922533 CC856 00665",
            num: "3"
        }, {sku: "F665PO0234BD 99 L", num: "3"}, {sku: "857050 PETALO+ONYX", num: "3"}, {
            sku: "398419503",
            num: "3"
        }, {sku: "SHYGIRL gold S", num: "3"}, {sku: "50324769 031 03", num: "3"}, {
            sku: "850998 ACERO",
            num: "3"
        }, {sku: "2ML1882E3E F0S99", num: "3"}, {sku: "WDNT56280CA2TRMPN01 36", num: "3"}, {
            sku: "01L435 642747 6.5",
            num: "3"
        }, {sku: "MWB5SJD04 OH001", num: "3"}, {sku: "F665BL5116ED 99 01", num: "3"}, {
            sku: "8N6S83 6J07Z 0543 M",
            num: "3"
        }, {sku: "50236732 46501", num: "3"}, {sku: "869424 L92", num: "3"}, {
            sku: "2VZ066 973 F0008",
            num: "3"
        }, {sku: "10186447 01 001 05", num: "3"}, {sku: "01M109 657735 NERO 6", num: "3"}, {
            sku: "TAILSNEAKS20 35",
            num: "3"
        }, {sku: "401912604", num: "2"}, {sku: "MIDLAND WL38780 BLACK 36", num: "2"}, {
            sku: "2MO5132E3C F0R8F",
            num: "2"
        }, {sku: "01H884 603820 5", num: "2"}, {sku: "403285401", num: "2"}, {
            sku: "6Y6T35 6JHKZ 1565 XL",
            num: "2"
        }, {sku: "21F856 644655", num: "2"}, {sku: "F755TS0884SG 01 L", num: "2"}, {
            sku: "59390 DKM86",
            num: "2"
        }, {sku: "22B558 656945 PACIFIC", num: "2"}, {sku: "C6H10NM0603", num: "2"}, {
            sku: "SR17MIFC5",
            num: "2"
        }, {sku: "50248964 402 36", num: "2"}, {sku: "3996224", num: "2"}, {
            sku: "40S5FUFR1L405 36.5",
            num: "2"
        }, {sku: "816958 GLL", num: "2"}, {sku: "2DD131 MGV F0H79 8/42", num: "2"}, {
            sku: "32T6STVE2O001",
            num: "2"
        }, {sku: "932068 7A939 00020", num: "2"}, {sku: "8BN299 SGK F0BYB", num: "2"}, {
            sku: "3Y6T17 6J1FZ 01200 05",
            num: "2"
        }, {sku: "4029022 BLACK", num: "2"}, {sku: "932528 CC993 00020", num: "2"}, {
            sku: "433665 KHN4N 9678",
            num: "2"
        }, {sku: "MWD4SVI32 CO001", num: "2"}, {sku: "30T5GTVT2L230", num: "2"}, {
            sku: "398356201",
            num: "2"
        }, {sku: "2NG003QME F0R8F", num: "2"}, {
            sku: "8N6S83 6J07Z 0543 XS",
            num: "2"
        }, {sku: "01L992 658364 SANGRIA 5.5", num: "2"}, {
            sku: "300295 D94JG 6267",
            num: "2"
        }, {sku: "8NPB01 PN29Z 1578 XL", num: "2"}, {sku: "30F2STTT8L303", num: "2"}, {
            sku: "4020489",
            num: "2"
        }, {sku: "01M264 0660879 7.5", num: "2"}, {
            sku: "TIELAND WL38775 SLATE 35.5",
            num: "2"
        }, {sku: "2CC001053 F0002 85", num: "2"}, {sku: "2MC1012E3E F0S99", num: "2"}, {
            sku: "4028694 01",
            num: "2"
        }, {sku: "EQ003A ALP NER", num: "2"}, {sku: "2CC0042FAD F0G52 100", num: "2"}, {
            sku: "30T3SLMS7L334",
            num: "2"
        }, {sku: "3978166", num: "2"}, {sku: "50316446", num: "2"}, {
            sku: "F755TS0884SG 01 S",
            num: "2"
        }, {sku: "370830 A7M0N 1419", num: "2"}, {sku: "59452 SVBL9", num: "2"}, {
            sku: "864945 ONYX",
            num: "2"
        }, {sku: "F765SW0014XC 78 S", num: "2"}, {sku: "2TM0382E56 F0053", num: "2"}, {
            sku: "7M0186 O74 F0GXN",
            num: "2"
        }, {sku: "9221426A704 00020", num: "2"}, {sku: "110810 0833402", num: "2"}, {
            sku: "3Y6F20 6JPTZ 1100 XXL",
            num: "2"
        }, {sku: "01B788 518587 6", num: "2"}, {sku: "MCCR11652MC1HVVDU61 42", num: "2"}, {
            sku: "402340404",
            num: "2"
        }, {sku: "32T6STVE2O446", num: "2"}, {sku: "932074 7P923 00074", num: "2"}, {
            sku: "851065 ZAFFERANO",
            num: "2"
        }, {sku: "F755SW0014XC 78 M", num: "2"}, {sku: "30S6SS7S2L438", num: "2"}, {
            sku: "B0594DBDCY 301",
            num: "2"
        }, {sku: "6Y1FA81JBQZ 0999 M", num: "2"}, {sku: "435373 3881Q 9260", num: "2"}, {
            sku: "50311892 001 100",
            num: "2"
        }, {sku: "30T5GTVT2L665", num: "2"}, {sku: "57714 LIBLK", num: "2"}, {
            sku: "453865 X5H77 4421 L",
            num: "2"
        }, {sku: "F765CH6002EG 76 L", num: "2"}, {sku: "2CN0102EP7 F0Q09 120", num: "2"}, {
            sku: "6206847",
            num: "2"
        }, {sku: "50248964 239 30", num: "2"}, {sku: "IGRG-CO14", num: "2"}, {
            sku: "3997148",
            num: "2"
        }, {sku: "LOWLAND WL38777 BLACK 37", num: "2"}, {
            sku: "01M276 663838 NERO 5.5",
            num: "2"
        }, {sku: "8AP151 SR0 F07HE", num: "2"}, {sku: "MIDLAND WL38780 BLACK 38", num: "2"}, {
            sku: "0529D55 T1",
            num: "2"
        }, {sku: "3958885", num: "2"}, {sku: "F755TS0184SA 01 L", num: "2"}, {
            sku: "MOCPEARL WL38783 JET 37",
            num: "2"
        }, {sku: "6YPM52 PJ05Z 1578 XL", num: "2"}, {
            sku: "YV3 15 89 15 066 CALEIDOSCOPIO",
            num: "2"
        }, {sku: "01L551 645383 7", num: "2"}, {sku: "MXB5AVI72 WT130", num: "2"}, {
            sku: "50322415 105",
            num: "2"
        }, {sku: "371444 3G001 1077", num: "2"}, {sku: "59520 LIBLK", num: "2"}, {
            sku: "22C770 661157 PACIFIC",
            num: "2"
        }, {sku: "2TM0402E56 F0053", num: "2"}, {sku: "4001660001", num: "2"}, {
            sku: "01M006 657611 NERO 5",
            num: "2"
        }, {sku: "322080 AF65N 1060", num: "2"}, {sku: "F755BL1511NG 99 L", num: "2"}, {
            sku: "32H3SLMC1L303",
            num: "2"
        }, {sku: "409340 CWC1G 1000", num: "2"}, {sku: "817248 MN2", num: "2"}, {
            sku: "4023695",
            num: "2"
        }, {sku: "32T6TA6D1L 092", num: "2"}, {sku: "851101 BRONZO", num: "2"}, {
            sku: "1BH851 NZV F0CHZ",
            num: "2"
        }, {sku: "F755SW0014XC 99 L", num: "2"}, {sku: "354472 A7M0G 1000", num: "2"}, {
            sku: "932533 CC996 00020",
            num: "2"
        }, {sku: "443421 3G001 9888", num: "2"}, {sku: "2MV8362E3E F0OTH", num: "2"}, {
            sku: "56522 SV/PINK",
            num: "2"
        }, {sku: "368571 CU710 8693", num: "2"}, {sku: "852761 PEPERONCI", num: "2"}, {
            sku: "21G392 664005 PAMPLONA",
            num: "2"
        }, {sku: "F765CH6002EG 76 S", num: "2"}, {sku: "10136613 01 629 03", num: "2"}, {
            sku: "620687585",
            num: "2"
        }, {sku: "399116205", num: "2"}, {sku: "2CS0132FAD F0216 120", num: "2"}, {
            sku: "01M276 663838 NERO 6.5",
            num: "2"
        }, {sku: "TIELAND WL38775 SLATE 37.5", num: "2"}, {
            sku: "E1 AD8 55 B7 01 224",
            num: "2"
        }, {sku: "F755PU2083AD 75 S", num: "2"}, {sku: "50327903 001", num: "2"}, {
            sku: "922222 7P770 00020",
            num: "2"
        }, {sku: "21E479 600205 OXFORD BLUE", num: "2"}, {
            sku: "F755TS0184SA 01 S",
            num: "2"
        }, {sku: "MOCPEARL WL38783 JET 38", num: "2"}, {sku: "50316868 001", num: "2"}, {
            sku: "F665SW1324MD 99 S",
            num: "2"
        }, {sku: "22C770 661164 NERO", num: "2"}, {sku: "8N6T99 6JPFZ 01455 05", num: "2"}, {
            sku: "322144 663085",
            num: "2"
        }, {sku: "922159 7P764 00010", num: "2"}, {sku: "50281069 B 105", num: "2"}, {
            sku: "32S5SRLC1L438",
            num: "2"
        }, {sku: "249744 0604556", num: "2"}, {sku: "817623 MGE", num: "2"}, {
            sku: "2DE010 P39 F0002 9/43",
            num: "2"
        }, {sku: "32T6TNSC1L092", num: "2"}, {sku: "2CC004053 F0G52 80", num: "2"}, {
            sku: "820732 O60",
            num: "2"
        }, {sku: "F755SW0554XC 55 L", num: "2"}, {sku: "01H062 592343 6.5", num: "2"}, {
            sku: "4031568",
            num: "2"
        }, {sku: "354476 A7M0G 6523", num: "2"}, {sku: "2CC009053 F0002 95", num: "2"}, {
            sku: "21F570 643704",
            num: "2"
        }, {sku: "F755TS0534YJ MU L", num: "2"}, {sku: "MWP 5AVI38 BK001", num: "2"}, {
            sku: "852777 MILITAREA",
            num: "2"
        }, {sku: "8N6S83 6J07Z 3916 S", num: "2"}, {sku: "50323992 001 XL", num: "2"}, {
            sku: "404648401",
            num: "2"
        }, {sku: "10166990 01 001 03", num: "2"}, {sku: "E0989A TOE MRS", num: "2"}, {
            sku: "399550903",
            num: "2"
        }, {sku: "F755PA6001SE 77 48", num: "2"}, {sku: "3XCF61 001204", num: "2"}, {
            sku: "LOWLAND WL38779 NERO 36",
            num: "2"
        }, {sku: "E1 AD9 55 B7 01 064", num: "2"}, {sku: "2CC003X72 F0002 100", num: "2"}, {
            sku: "393537185",
            num: "2"
        }, {sku: "F755PU2083AD 99 M", num: "2"}, {sku: "2MC2232E3E F0OTH", num: "2"}, {
            sku: "01B792 643220 7.5",
            num: "2"
        }, {sku: "0534557 5/39 EEE", num: "2"}, {sku: "F652TS840990 93 01", num: "2"}, {
            sku: "932524CC993 00020",
            num: "2"
        }, {sku: "B75453 0800 42", num: "2"}, {sku: "0627077 5/35.5 M", num: "2"}, {
            sku: "F661TS870993 99 03",
            num: "2"
        }, {sku: "21G162 653388", num: "2"}, {sku: "F762CA558860 34 S", num: "2"}, {
            sku: "772479",
            num: "2"
        }, {sku: "F665SW1444OA 94 03", num: "2"}, {sku: "233154 CWC1R 1000", num: "2"}, {
            sku: "01M006 657611 NERO 7",
            num: "2"
        }, {sku: "326514 F4G1N 9763", num: "2"}, {sku: "928088 7P760 00555", num: "2"}, {
            sku: "F755BL7324XC 78 L",
            num: "2"
        }, {sku: "SR17MIRG9", num: "2"}, {sku: "409529 K0L2G 8691", num: "2"}, {
            sku: "01M264 0660878 5",
            num: "2"
        }, {sku: "40T2FUFR1L092 38.5", num: "2"}, {sku: "817986 BMM", num: "2"}, {
            sku: "2DE080 P39 F0002 6/40",
            num: "2"
        }, {sku: "V0917 400 1555 S", num: "2"}, {sku: "820745 GLL", num: "2"}, {
            sku: "50311731 609",
            num: "2"
        }, {sku: "MMK5SVE38 LE001", num: "2"}, {sku: "403270102", num: "2"}, {
            sku: "F755TS0534YJ MU S",
            num: "2"
        }, {sku: "30T6GBDT1L 623", num: "2"}, {sku: "BMTMSB 9114 NER", num: "2"}, {
            sku: "922528 CC855 18940",
            num: "2"
        }, {sku: "0636687 9.5/43.5 EEE", num: "2"}, {sku: "37018 SVEM3", num: "2"}, {
            sku: "SG466431BRO",
            num: "2"
        }, {sku: "F765SF213F28 99 TU", num: "2"}, {sku: "01M004 657561 NERO 5.5", num: "2"}, {
            sku: "P C pink S",
            num: "2"
        }, {sku: "922552 7P783 01610", num: "2"}, {sku: "A2144X CVO NER 5.5", num: "2"}, {
            sku: "869495 T0P",
            num: "2"
        }, {sku: "SR17LOGP1", num: "2"}, {sku: "801535 ARE", num: "2"}, {
            sku: "50248964 239 36",
            num: "2"
        }, {sku: "E1 AC5 14 02 01 308", num: "2"}, {sku: "399559902", num: "2"}, {
            sku: "928532 CC855 00072",
            num: "2"
        }, {sku: "L2T732N", num: "2"}, {sku: "LOWLAND WL38779 NERO 38", num: "2"}, {
            sku: "30H5GAIS3U001",
            num: "2"
        }, {sku: "E1 AD9 55 B7 01 214", num: "2"}, {sku: "932062 6A908 00054", num: "2"}, {
            sku: "411924 CWC1N 100080",
            num: "2"
        }, {sku: "1BA274 NZV F068Z", num: "2"}, {sku: "2ML188 C5S F0DVI 00", num: "2"}, {
            sku: "F755TS0494YC 55 L",
            num: "2"
        }, {sku: "2MO738 2EGO F0UDO 01", num: "2"}, {sku: "MW2B0137NAP 677", num: "2"}, {
            sku: "852503 BR0",
            num: "2"
        }, {sku: "2CN0052A53 F0308 120", num: "2"}, {sku: "869102 BL7", num: "2"}, {
            sku: "50245195 641 S",
            num: "2"
        }, {sku: "400492003", num: "2"}, {sku: "01M027 658425 SANGRIA 7", num: "2"}, {
            sku: "TIELAND WL38747 BLACK 35.5",
            num: "2"
        }, {sku: "9320006A905 00020", num: "2"}, {sku: "MEC5SVI01 PK00S", num: "2"}, {
            sku: "851149 NAVY",
            num: "2"
        }, {sku: "1MH132 QWA F0002", num: "2"}, {sku: "F755SW0554XC 93 M", num: "2"}, {
            sku: "363998 W0XHC 1006 36.5",
            num: "2"
        }, {sku: "447632 DRW1T 4338", num: "2"}, {sku: "21F628 649205", num: "2"}, {
            sku: "7030540 1002 M",
            num: "2"
        }, {sku: "MWS5SCN04 CO001", num: "2"}, {sku: "30T6GBDT2L001", num: "2"}, {
            sku: "4041737",
            num: "2"
        }, {sku: "0642848 6.5/40.5 EEE", num: "2"}, {sku: "F665PA7184OA 99 01", num: "2"}, {
            sku: "2CM016053 F0G52 110",
            num: "2"
        }, {sku: "398419404", num: "2"}, {sku: "F765SW0004MD 99 M", num: "2"}, {
            sku: "2PP712053 F0002",
            num: "2"
        }, {sku: "C6H08QK 0801", num: "2"}, {sku: "922552 7P783 31835", num: "2"}, {
            sku: "32F2SFTE3L092",
            num: "2"
        }, {sku: "E1 AC5 14 02 01 364", num: "2"}, {sku: "399559904", num: "2"}, {
            sku: "2DD131 MGV F0H79 5.5/39.5",
            num: "2"
        }, {sku: "M D S candy pink S", num: "2"}, {sku: "UJM730 XGS F0009 M", num: "2"}, {
            sku: "1BA274 NZV F0K44",
            num: "2"
        }, {sku: "3Y6T17 6J1FZ 01100 05", num: "2"}, {sku: "01G357 574293 6.5", num: "2"}, {
            sku: "349F 5",
            num: "2"
        }, {sku: "2MO7382E3E F0S99", num: "2"}, {sku: "8M0371 SF5 F07HE", num: "2"}, {
            sku: "BB25 Black",
            num: "2"
        }, {sku: "368186 BGH0N 2140 85", num: "2"}, {sku: "2CM005908 F0002 95", num: "2"}, {
            sku: "453025 D94JG 4222",
            num: "2"
        }, {sku: "30T6SA6S1L 438", num: "2"}, {sku: "922544 CC857 46835", num: "2"}, {
            sku: "50322478 105",
            num: "2"
        }, {sku: "F665SW1454OA 94 03", num: "2"}, {sku: "399116005", num: "2"}, {
            sku: "F765SW0554XC 98 XL",
            num: "2"
        }, {sku: "2VG905 2EUQ F0RX1", num: "2"}, {sku: "50248964 001 30", num: "2"}, {
            sku: "400875104",
            num: "2"
        }, {sku: "928503 CC857 00151", num: "2"}, {sku: "2CS0132FAD F0002 115", num: "2"}, {
            sku: "870534 T67",
            num: "2"
        }, {sku: "01M027 658425 SANGRIA 8", num: "2"}, {sku: "32H5GAFE1L001", num: "2"}, {
            sku: "387F 5.5/36.5",
            num: "2"
        }, {sku: "L3S170A", num: "2"}, {sku: "884686", num: "2"}, {sku: "390974095", num: "2"}, {
            sku: "887937",
            num: "2"
        }, {sku: "01B788 574563 5.5", num: "2"}, {sku: "VM340 ZZ600 B07 S", num: "2"}, {
            sku: "2CC0042FAD F0B2A 110",
            num: "2"
        }, {sku: "MMK5SVU11 COGNAC", num: "2"}, {sku: "403270202", num: "2"}, {
            sku: "0602152 8/38.5 D",
            num: "2"
        }, {sku: "363998 W0YG6 1296 35", num: "2"}, {sku: "2CC009053 F0216 90", num: "2"}, {
            sku: "851856 NAVYB",
            num: "2"
        }, {sku: "01L525 652923 6.5", num: "2"}, {sku: "922533 CC856 00220", num: "2"}, {
            sku: "398419502",
            num: "2"
        }, {sku: "01M004 657562 NEW BISQUE 6", num: "2"}, {
            sku: "A2144X VSW ABS 8.5",
            num: "2"
        }, {sku: "6250097A306 00176", num: "2"}, {sku: "810836", num: "2"}, {
            sku: "UJM730 XGS F0124 L",
            num: "2"
        }, {sku: "850965 PEE", num: "2"}, {sku: "F755SW0004MB 14 L", num: "2"}, {
            sku: "WDNT56280CA2TRMPN01 35",
            num: "2"
        }, {sku: "431942 A38G0 9064 38", num: "2"}, {sku: "826443 BLV", num: "2"}, {
            sku: "3Y6T22 6J00Z 1494 XL",
            num: "2"
        }, {sku: "01L435 642747 6", num: "2"}, {sku: "MW2P0372BOL W34", num: "2"}, {
            sku: "398352301",
            num: "2"
        }, {sku: "21G191 656344", num: "2"}, {sku: "01L926 661818 7", num: "2"}, {
            sku: "MYL6SVC82 CO001",
            num: "2"
        }, {sku: "922544CC857 41920", num: "2"}, {sku: "10136613 01 100 04", num: "2"}, {
            sku: "A17064TRH 54",
            num: "2"
        }, {sku: "SR17BMHP6", num: "2"}, {sku: "2VZ066 973 F0002", num: "2"}, {
            sku: "8N6T99 6JPFZ 01589 S",
            num: "2"
        }, {sku: "4012453", num: "2"}, {sku: "L3ZC81A", num: "2"}, {
            sku: "401912603",
            num: "2"
        }, {sku: "2M0513 074 F0002", num: "2"}, {sku: "6XPM52 PJ05Z 3905 01", num: "2"}, {
            sku: "VM340 ZZ600 N00 M",
            num: "2"
        }, {sku: "851154", num: "2"}, {sku: "3Y6T22 6J00Z 01504 XL", num: "2"}, {
            sku: "50369740 410 M",
            num: "2"
        }, {sku: "363998 W0YG6 1296 37.5", num: "2"}, {sku: "2CC066053 F0002 100", num: "2"}, {
            sku: "851858 PEPERONCI",
            num: "2"
        }, {sku: "449009 3G856 5874", num: "2"}, {sku: "8N6D02 6JPFZ 01579 L", num: "2"}, {
            sku: "370717 AP0GG 257585",
            num: "2"
        }, {sku: "456867 K6R3G 8315", num: "2"}, {sku: "F765SW0014XC 51 XL", num: "2"}, {
            sku: "R17064OX 54",
            num: "2"
        }, {sku: "2CS002908 F0002 95", num: "2"}, {sku: "SR17MIFC4", num: "2"}, {
            sku: "3996223",
            num: "2"
        }, {sku: "810878", num: "2"}, {sku: "01B772 643076 7.5", num: "2"}, {
            sku: "30H6GM9S3L187",
            num: "2"
        }, {sku: "UJM730 XGS F0124 XL", num: "2"}, {sku: "2CC004053 F0DVI 115", num: "2"}, {
            sku: "3954871",
            num: "2"
        }, {sku: "835222 B BIN9 NFL", num: "2"}, {sku: "F755TS0504YC 01 XL", num: "2"}, {
            sku: "01L435 642747 7",
            num: "2"
        }, {sku: "BB58 Black", num: "2"}, {sku: "F762TO449860 34 L", num: "2"}, {
            sku: "791046",
            num: "2"
        }, {sku: "8N6S83 6J07Z 0543 S", num: "2"}, {sku: "01L992 658364 SANGRIA 5", num: "2"}, {
            sku: "399116105",
            num: "2"
        }, {sku: "F765TS0494YC 78 M", num: "2"}, {sku: "300295 D94JG 4222", num: "2"}, {
            sku: "8N6T99 6JPFZ 1200 M",
            num: "2"
        }, {sku: "01B221 529556 5.5", num: "2"}, {sku: "4014079", num: "2"}, {
            sku: "870760 C9T",
            num: "2"
        }, {sku: "01M109 657735 NERO 6.5", num: "2"}, {
            sku: "922169 7P756 11955",
            num: "2"
        }, {sku: "TIELAND WL38775 SLATE 35", num: "2"}, {
            sku: "410120 CWC1G 5812",
            num: "2"
        }, {sku: "3Y6F20 6JPTZ 1854 XL", num: "2"}, {sku: "01B788 574563 7.5", num: "2"}, {
            sku: "6XPM52 PJ05Z 3905 03",
            num: "2"
        }, {sku: "VM340 ZZ600 R07 L", num: "2"}, {sku: "34340 SVDN8", num: "2"}, {
            sku: "E5 AV3 55 D3 07 209",
            num: "2"
        }, {sku: "429027 H1FIT 8476 85", num: "2"}, {sku: "395772 RGH79 1000 M", num: "2"}, {
            sku: "8M0341 SR0 F07HE",
            num: "2"
        }, {sku: "851879 PEPERONCI", num: "2"}, {sku: "21F868 643528 NERO", num: "2"}, {
            sku: "MXB5AVI72 EG130",
            num: "2"
        }, {sku: "09T0021-078-03", num: "2"}, {sku: "F665SF211F23 MU TU", num: "2"}, {
            sku: "SHYGIRL NECKLACE blue S",
            num: "2"
        }, {sku: "2TM0302E56 F0I2M", num: "2"}, {sku: "C6H10NM6501", num: "2"}, {
            sku: "50324769 410 02",
            num: "2"
        }, {sku: "110810 0833401", num: "2"}, {sku: "816959 ROE", num: "2"}, {
            sku: "30S2GHMS3L177",
            num: "2"
        }, {sku: "851060 AGAVE", num: "2"}, {sku: "820687 O60", num: "2"}, {
            sku: "MMK5AVE79 CO001",
            num: "2"
        }, {sku: "6Y1FA81JBQZ 0999 L", num: "2"}, {sku: "2CC005X72 F0JYA 90", num: "2"}, {
            sku: "435373 3881Q 5672",
            num: "2"
        }, {sku: "F755TS0504YC 78 M", num: "2"}, {sku: "MWD4SVI33 CO001", num: "2"}, {
            sku: "F665CH2211FA 01 37",
            num: "2"
        }, {sku: "57714 DKNAV", num: "2"}, {sku: "C5228Q9 12", num: "2"}, {
            sku: "30F4SSUS5L802",
            num: "2"
        }, {sku: "LOWLAND WL38777 BLACK 36.5", num: "2"}, {
            sku: "01M264 0660879 8",
            num: "2"
        }, {sku: "TIELAND WL38775 SLATE 36", num: "2"}, {sku: "32T6GDDC3L187", num: "2"}, {
            sku: "2CC001053 F0002 95",
            num: "2"
        }, {sku: "01B792 643220 5", num: "2"}, {sku: "MIDLAND WL38780 BLACK 37.5", num: "2"}, {
            sku: "AE9414OX",
            num: "2"
        }, {sku: "922217 7P774 00020", num: "2"}, {sku: "821768 BNX", num: "2"}, {
            sku: "MOCPEARL WL38783 JET 36.5",
            num: "2"
        }, {sku: "6YPM52 PJ05Z 1200 XL", num: "2"}, {sku: "F661TS870991 77 00", num: "2"}, {
            sku: "2CC066053 F0216 105",
            num: "2"
        }, {sku: "935027 7A420 09383 7.5", num: "2"}, {
            sku: "451136 H917N 8497 85",
            num: "2"
        }, {sku: "21F966 649103 OXFORD BLUE", num: "2"}, {sku: "50316446 405", num: "2"}, {
            sku: "755233 O60",
            num: "2"
        }, {sku: "30T6GJ8T6L001", num: "2"}, {sku: "50322415 100", num: "2"}, {
            sku: "A15734OX 52",
            num: "2"
        }, {sku: "59452 SVM4Z", num: "2"}, {sku: "22C674 654446", num: "2"}, {
            sku: "2TM0392E56 F0S9W",
            num: "2"
        }, {sku: "408510 DSS30 8465 38", num: "2"}, {sku: "F755CH6002FG 64 S", num: "2"}, {
            sku: "32S4STVC3L303",
            num: "2"
        }, {sku: "884805", num: "2"}, {sku: "01B788 518587 6.5", num: "2"}, {
            sku: "30S2GHMS3L473",
            num: "2"
        }, {sku: "01M763 0672528 7", num: "2"}, {sku: "32T6STVW3O001", num: "2"}, {
            sku: "820691 PET",
            num: "2"
        }, {sku: "8BT245 88B F03MK", num: "2"}, {sku: "50331708 401", num: "2"}, {
            sku: "6Y1FA81JBQZ 0999 XL",
            num: "2"
        }, {sku: "0594553 NINNA F40 7.5", num: "2"}, {sku: "932532 CC996 00020", num: "2"}, {
            sku: "F755TS0504YC 99 L",
            num: "2"
        }, {sku: "0629009 6/40 EEE", num: "2"}, {sku: "F665CH2211FA 01 39", num: "2"}, {
            sku: "21G331 659790 POLYNESIE",
            num: "2"
        }, {sku: "8N6S83 6J07Z 1200 S", num: "2"}, {sku: "01L992 658364 SANGRIA 7", num: "2"}, {
            sku: "6206875100",
            num: "2"
        }, {sku: "307984 A7M0N 1419", num: "2"}, {sku: "399865603", num: "2"}, {
            sku: "LOWLAND WL38777 BLACK 37.5",
            num: "2"
        }, {sku: "30H1GTVT2L473", num: "2"}, {sku: "820647 BTT", num: "2"}, {
            sku: "922222 7A817 51920",
            num: "2"
        }, {sku: "01H884 603820 7.5", num: "2"}, {
            sku: "MOCPEARL WL38783 JET 37.5",
            num: "2"
        }, {sku: "2CC066053 F0216 90", num: "2"}, {sku: "605K 5", num: "2"}, {
            sku: "2TM0412E56 F0053",
            num: "2"
        }, {sku: "400249 KU23N 8487", num: "2"}, {sku: "01M006 657611 NERO 5.5", num: "2"}, {
            sku: "SR17MIG8",
            num: "2"
        }, {sku: "9221436A704 00176", num: "2"}, {sku: "01M262 660864 PAMPLONA 7", num: "2"}, {
            sku: "AE8538OX",
            num: "2"
        }, {sku: "851102 ACCIAIO", num: "2"}, {sku: "412096 K0L2N 8691", num: "2"}, {
            sku: "922504 CC850 00176",
            num: "2"
        }, {sku: "354472 A7M0G 6523", num: "2"}, {sku: "F661SW827957 93 02", num: "2"}, {
            sku: "F755TS0504YC 99 S",
            num: "2"
        }, {sku: "MWP 5AVI37 CO001", num: "2"}, {sku: "403J 6.5", num: "2"}, {
            sku: "368571 CU810 9769",
            num: "2"
        }, {sku: "852771 PEPERONCI", num: "2"}, {sku: "21G392 664011 NERO", num: "2"}, {
            sku: "01L992 658364 SANGRIA 8",
            num: "2"
        }, {sku: "F665TS0184OD 99 03", num: "2"}, {sku: "869492 ACP", num: "2"}, {
            sku: "01B221 643059 6.5",
            num: "2"
        }, {sku: "2CS0132FAD F0216 80", num: "2"}, {sku: "922187 7P760 00010", num: "2"}, {
            sku: "4022458",
            num: "2"
        }, {sku: "TRANSFER SM/261", num: "2"}, {sku: "2CC001X72 F0002 95", num: "2"}, {
            sku: "393537175",
            num: "2"
        }, {sku: "3Y6F20 6JPTZ 1905 XXL", num: "2"}, {sku: "50327903 409", num: "2"}, {
            sku: "MMF4ALS56 NAVY",
            num: "2"
        }, {sku: "MRSPATS WL38785 BLACK 36.5", num: "2"}, {
            sku: "368186 BGH0N 1000 85",
            num: "2"
        }, {sku: "F762CA558860 34 M", num: "2"}, {sku: "F665SW1444OA 94 02", num: "2"}, {
            sku: "22C940 675575",
            num: "2"
        }, {sku: "660820 670458", num: "2"}, {sku: "110810 0071702", num: "2"}, {
            sku: "01M262 660864 PAMPLONA 8",
            num: "2"
        }, {sku: "111210 0728204", num: "2"}, {sku: "3Y6F20 6JPTZ 1200 XXL", num: "2"}, {
            sku: "01B788 543215 6",
            num: "2"
        }, {sku: "MCKE14282MC1HVVDS55 42", num: "2"}, {sku: "30S3GLMS7L230", num: "2"}, {
            sku: "AE8603XPL UNI",
            num: "2"
        }, {sku: "4023714", num: "2"}, {sku: "6X1T9C1JALZ 0999 01", num: "2"}, {
            sku: "E5 AV3 55 D2 01 023",
            num: "2"
        }, {sku: "417424 3G856 9965", num: "2"}, {sku: "820743 AR4", num: "2"}, {
            sku: "F755SW0554XC 55 M",
            num: "2"
        }, {sku: "922504 CC850 00631", num: "2"}, {sku: "369621 AA61G 1419", num: "2"}, {
            sku: "F665PA7184OA 94 02",
            num: "2"
        }, {sku: "852780 RUBINOCON", num: "2"}, {sku: "4557597 05", num: "2"}, {
            sku: "SBK ROBOT BLUE",
            num: "2"
        }, {sku: "2PP301053 F0002", num: "2"}, {sku: "NPSS1736 WHITE", num: "2"}, {
            sku: "6206876100",
            num: "2"
        }, {sku: "3994293", num: "2"}, {sku: "SR17LOBG6", num: "2"}, {
            sku: "50248964 239 35",
            num: "2"
        }, {sku: "L2R918A", num: "2"}, {sku: "F755PA6001SE 77 50", num: "2"}, {
            sku: "3XCF61 001205",
            num: "2"
        }, {sku: "6X1T9B1JALZ 0351 01", num: "2"}, {sku: "01G357 574293 5", num: "2"}, {
            sku: "AE9784OX",
            num: "2"
        }, {sku: "4028696 04", num: "2"}, {sku: "3958905004", num: "2"}, {
            sku: "21E479 655769 SANGRIA",
            num: "2"
        }, {sku: "01H916 609552 6.5", num: "2"}, {sku: "MW2B0137NAP 0NO", num: "2"}, {
            sku: "50316881 409",
            num: "2"
        }, {sku: "F762CA558860 76 M", num: "2"}, {sku: "01L551 645405 7", num: "2"}, {
            sku: "30T6GPAL1L656",
            num: "2"
        }, {sku: "4045054", num: "2"}, {sku: "A17064OX 50", num: "2"}, {
            sku: "50245195 641 M",
            num: "2"
        }, {sku: "F755BL7324XC 78 M", num: "2"}, {sku: "SR17MMFC6", num: "2"}, {
            sku: "110810 0483301",
            num: "2"
        }, {sku: "808086 CR0", num: "2"}, {sku: "410100 KHNKG 9769", num: "2"}, {
            sku: "6X1T9C1JALZ 0999 03",
            num: "2"
        }, {sku: "336829 AP00N 214095", num: "2"}, {sku: "932097 7P917 00033", num: "2"}, {
            sku: "421384 4010Q 4264",
            num: "2"
        }, {sku: "50311734", num: "2"}, {sku: "F755SW0554XC 93 L", num: "2"}, {
            sku: "01H062 592343 8",
            num: "2"
        }, {sku: "B75392 0800 32", num: "2"}, {sku: "922504 CC850 07753", num: "2"}, {
            sku: "0602152 6/36.5 D",
            num: "2"
        }, {sku: "363998 W0XHC 1006 36", num: "2"}, {sku: "851702 PEPERONCI", num: "2"}, {
            sku: "21F628 649200 NERO",
            num: "2"
        }, {sku: "50312008 001", num: "2"}, {sku: "BNW24 EA 1201", num: "2"}, {
            sku: "370543 AP00G 141980",
            num: "2"
        }, {sku: "F665PA7184OA 99 00", num: "2"}, {sku: "2CM016053 F0G52 105", num: "2"}, {
            sku: "455759803",
            num: "2"
        }, {sku: "398419403", num: "2"}, {sku: "22B558 0560808", num: "2"}, {
            sku: "F765SW0004MD 99 L",
            num: "2"
        }, {sku: "01M004 657561 NERO 6", num: "2"}, {sku: "922552 7P783 12310", num: "2"}, {
            sku: "404648404",
            num: "2"
        }, {sku: "50248964 402 30", num: "2"}, {sku: "399559903", num: "2"}, {
            sku: "50292247110",
            num: "2"
        }, {sku: "30H5SAIS3L802", num: "2"}, {sku: "UJM730 XGS F0009 L", num: "2"}, {
            sku: "932063 7A937 00535",
            num: "2"
        }, {sku: "3945198", num: "2"}, {sku: "820660 ROE", num: "2"}, {
            sku: "8BL124 1D5 F0G18",
            num: "2"
        }, {sku: "01G357 574293 6", num: "2"}, {sku: "MMF5SXO67 BK001", num: "2"}, {
            sku: "430583 4G200 6068",
            num: "2"
        }, {sku: "8M0371 SF5 F06R4", num: "2"}, {sku: "01H916 609552 7.5", num: "2"}, {
            sku: "30T4SJTT1T677",
            num: "2"
        }, {sku: "4033797 BLACK", num: "2"}, {sku: "368186 BGH0N 2140 105", num: "2"}, {
            sku: "F665SW1454OA 94 02",
            num: "2"
        }, {sku: "928503 CC857 00091", num: "2"}, {sku: "F755CH1001FI 71 38", num: "2"}, {
            sku: "SR17MMGM4811",
            num: "2"
        }, {sku: "L2Z2Z1A", num: "2"}, {sku: "01M264 0660878 6.5", num: "2"}, {
            sku: "TIELAND WL38747 BLACK 36",
            num: "2"
        }, {sku: "887920", num: "2"}, {sku: "01B788 574563 5", num: "2"}, {
            sku: "VM340 ZZ600 B07 M",
            num: "2"
        }, {sku: "E5 AV3 55 D2 01 396", num: "2"}, {sku: "2CC0042FAD F0B2A 105", num: "2"}, {
            sku: "1MH132 QWA F0505",
            num: "2"
        }, {sku: "01H062 594549 6", num: "2"}, {sku: "F661SW830951 99 01", num: "2"}, {
            sku: "3976242001",
            num: "2"
        }, {sku: "MWS6SCN03 WV001", num: "2"}, {sku: "4041738", num: "2"}, {
            sku: "370543 AP00G 141990",
            num: "2"
        }, {sku: "59382 DKCHK", num: "2"}, {sku: "SHYGIRL blue S", num: "2"}, {
            sku: "22B558 588256",
            num: "2"
        }, {sku: "2PS39566A F0002", num: "2"}, {sku: "01B772 530040 5.5", num: "2"}, {
            sku: "50292247z105",
            num: "2"
        }, {sku: "2DD131 MGV F0H79 6/40", num: "2"}, {
            sku: "3Y6F03 6J0JZ 1477 S",
            num: "2"
        }, {sku: "2CC004053 F0DVI 100", num: "2"}, {sku: "850964 ONYX", num: "2"}, {
            sku: "F655SF213F28 MU",
            num: "2"
        }, {sku: "2CC004X72 F0JYA 90", num: "2"}, {sku: "8M0371 SF5 F0X93", num: "2"}, {
            sku: "3Y6T22 6J00Z 1494 S",
            num: "2"
        }, {sku: "MW2P0372BOL PR6", num: "2"}, {sku: "30T4TCYT3L001", num: "2"}, {
            sku: "BB30-IVRY Ivory",
            num: "2"
        }, {sku: "Z6B02XME548", num: "2"}, {sku: "2CM013053 F0G52 95", num: "2"}, {
            sku: "852577 OYP",
            num: "2"
        }, {sku: "398346201", num: "2"}, {sku: "01L926 661818 6.5", num: "2"}, {
            sku: "F665SW1464OC 99 00",
            num: "2"
        }, {sku: "C6M97QK 0802", num: "2"}, {sku: "6X1B1Q1NBZZ 0920 03", num: "2"}, {
            sku: "TAILSNEAKS15 BLACK 36",
            num: "2"
        }, {sku: "40R5FUFR2L001 37", num: "2"}, {sku: "01B772 530040 6.5", num: "2"}, {
            sku: "884695",
            num: "2"
        }, {sku: "01M264 0660878 7.5", num: "2"}, {sku: "932118 7P914 06935", num: "2"}, {
            sku: "F755SW0554XC 99 M",
            num: "2"
        }, {sku: "8M0299 F09 F0NVJ", num: "2"}, {sku: "3Y6T22 6J00Z 01504 S", num: "2"}, {
            sku: "01H062 594549 7",
            num: "2"
        }, {sku: "B75392 0800 40", num: "2"}, {sku: "0602152 9/39.5 D", num: "2"}, {
            sku: "851857 ONYX",
            num: "2"
        }, {sku: "F755TS0774YF 95 M", num: "2"}, {sku: "F765SW0014XC 51 S", num: "2"}, {
            sku: "2TL0652ENS F068Z",
            num: "2"
        }, {sku: "7M0169 O6G F08LC", num: "2"}, {sku: "30T6TEZB6L092", num: "2"}, {
            sku: "2CS002908 F0002 90",
            num: "2"
        }, {sku: "SR17MIFC1", num: "2"}, {sku: "32F4GTVC9L623", num: "2"}, {
            sku: "807869",
            num: "2"
        }, {sku: "50248964 402 34", num: "2"}, {sku: "40R5FUFR2L001 38.5", num: "2"}, {
            sku: "2DD131 MGV F0H79 7/41",
            num: "2"
        }, {sku: "UJM730 XGS F0124 M", num: "2"}, {sku: "E1 AF0 23 01 01 143", num: "2"}, {
            sku: "F755SW0004MB 14 M",
            num: "2"
        }, {sku: "353119 KH1BG 8595", num: "2"}, {sku: "851196 ACERO", num: "2"}, {
            sku: "835166 ONYX",
            num: "2"
        }, {sku: "55036 BP/BLACK", num: "2"}, {sku: "21G217 661009 NERO", num: "2"}, {
            sku: "01L926 661819 6",
            num: "2"
        }, {sku: "50322487 105", num: "2"}, {sku: "2CN0102EP7 F0Q09 100", num: "2"}, {
            sku: "SR17BML6",
            num: "2"
        }, {sku: "E0078MIDRS 301", num: "2"}, {sku: "01B772 530040 7.5", num: "1"}, {
            sku: "LOWLAND WL38777 BLACK 35",
            num: "1"
        }, {sku: "01M264 0660878 8.5", num: "1"}, {
            sku: "TIELAND WL38747 BLACK 38",
            num: "1"
        }, {sku: "2CC001053 F0002 110", num: "1"}, {sku: "2M0738 2E3E F0002", num: "1"}, {
            sku: "888152",
            num: "1"
        }, {sku: "30S5SCPS2L562", num: "1"}, {sku: "0529D55 4L", num: "1"}, {
            sku: "VM340 ZZ600 N00 XL",
            num: "1"
        }, {sku: "2CC0042FAD F0B2A 90", num: "1"}, {
            sku: "429027 H1FIT 8476 100",
            num: "1"
        }, {sku: "395772 RGH79 1000 L", num: "1"}, {sku: "821744 BL2", num: "1"}, {
            sku: "50311737",
            num: "1"
        }, {sku: "3Y6T22 6J00Z 01504 XXL", num: "1"}, {sku: "50369740 410 S", num: "1"}, {
            sku: "MMM5SVC93 BK001",
            num: "1"
        }, {sku: "0606542 8/38.5 M", num: "1"}, {sku: "F661SW831951 99 03", num: "1"}, {
            sku: "2CC066053 F0002 105",
            num: "1"
        }, {sku: "851878 ONYX", num: "1"}, {sku: "450891 DTM10 1060 5", num: "1"}, {
            sku: "01L551 645383 5",
            num: "1"
        }, {sku: "BUNNYBOOT BLACK 36", num: "1"}, {sku: "50322189", num: "1"}, {
            sku: "06W90KA2J04",
            num: "1"
        }, {sku: "370826 A7M0N 1419", num: "1"}, {sku: "A0703 4140 1001 S", num: "1"}, {
            sku: "SHYGIRL mint S",
            num: "1"
        }, {sku: "01M004 657563 PAMPLONA 6", num: "1"}, {sku: "R17327OR 52", num: "1"}, {
            sku: "50324769 410 01",
            num: "1"
        }, {sku: "4009320", num: "1"}, {sku: "6252216A330 41710", num: "1"}, {
            sku: "01M006 657612 NEW BISQUE 7.5",
            num: "1"
        }, {sku: "408322 X7333 1000 L", num: "1"}, {sku: "110640 4Q010 1161", num: "1"}, {
            sku: "9221116A730 41620",
            num: "1"
        }, {sku: "2CS0132FAD F0002 85", num: "1"}, {sku: "23B419 662066 100", num: "1"}, {
            sku: "388680 CWC1G 1000",
            num: "1"
        }, {sku: "110810 0698203", num: "1"}, {sku: "884759", num: "1"}, {
            sku: "01B772 643076 8",
            num: "1"
        }, {sku: "MBCI20279NASVSDYU47 42", num: "1"}, {sku: "922212 7P772 03080", num: "1"}, {
            sku: "402340402",
            num: "1"
        }, {sku: "01M762 0672522 7", num: "1"}, {sku: "851013 NAVY", num: "1"}, {
            sku: "1BD010 2E0W F0002",
            num: "1"
        }, {sku: "01G357 574309 5.5", num: "1"}, {sku: "B C baby pink L", num: "1"}, {
            sku: "6Y1FA81JBQZ 0920 XL",
            num: "1"
        }, {sku: "WDXN55994OP1TVEBU71 36", num: "1"}, {sku: "353965 A7M0G 1000", num: "1"}, {
            sku: "F655TS0434CM 74 03",
            num: "1"
        }, {sku: "21F568 628947 NEW BISQUE", num: "1"}, {sku: "F755TS0504YC 78 L", num: "1"}, {
            sku: "01L435 642747 7.5",
            num: "1"
        }, {sku: "Z6W10WLEA02", num: "1"}, {sku: "F665BL5116ED 99 03", num: "1"}, {
            sku: "F762TO449860 34 M",
            num: "1"
        }, {sku: "791728CZ", num: "1"}, {sku: "2CN0102EP7 F0Q09 110", num: "1"}, {
            sku: "A17290OX 52",
            num: "1"
        }, {sku: "4054841", num: "1"}, {sku: "E0126TRIMT 402", num: "1"}, {
            sku: "01B221 529556 6",
            num: "1"
        }, {sku: "4015  5/36", num: "1"}, {sku: "3913362003", num: "1"}, {
            sku: "8AG132 B09 FO35G",
            num: "1"
        }, {sku: "3Y6F20 6JPTZ 1854 XXL", num: "1"}, {sku: "01B788 574563 8", num: "1"}, {
            sku: "6XPM52 PJ05Z 3905 04",
            num: "1"
        }, {sku: "34408 SVSD", num: "1"}, {sku: "MOCPEARL WL38783 JET 35.5", num: "1"}, {
            sku: "6Y6T50 6JPRZ 1456 M",
            num: "1"
        }, {sku: "0609552 5/35.5 D", num: "1"}, {sku: "F661TO0195HP 01 02", num: "1"}, {
            sku: "2CC066053 F0002 95",
            num: "1"
        }, {sku: "935027 7A420 09383 6", num: "1"}, {sku: "851961 NAVY", num: "1"}, {
            sku: "451136 H917N 1060 105",
            num: "1"
        }, {sku: "21F868 656299", num: "1"}, {sku: "01L551 645383 6", num: "1"}, {
            sku: "MXB5AVI72 LM130",
            num: "1"
        }, {sku: "BUNNYBOOT POWDER 36", num: "1"}, {sku: "09T0021-410-02", num: "1"}, {
            sku: "473833 4200Q 1070",
            num: "1"
        }, {sku: "22C501 646987 NERO", num: "1"}, {sku: "01M004 657563 PAMPLONA 7", num: "1"}, {
            sku: "RB2161OX S",
            num: "1"
        }, {sku: "2CS0062FAD F0201 110", num: "1"}, {
            sku: "A2570X CVT NER 9",
            num: "1"
        }, {sku: "01M006 657613 PAMPLONA 6", num: "1"}, {sku: "32F5SG1C1U140", num: "1"}, {
            sku: "110640 4Q010 6369",
            num: "1"
        }, {sku: "50281069 105", num: "1"}, {sku: "01M262 660864 PAMPLONA 5.5", num: "1"}, {
            sku: "TAILSNEAKS27 35",
            num: "1"
        }, {sku: "32S4GTVC3L656", num: "1"}, {sku: "40S5FUFR1L405 37.5", num: "1"}, {
            sku: "2DE010 P39 F0002 5/39",
            num: "1"
        }, {sku: "884761", num: "1"}, {sku: "30S2GHMS3L230", num: "1"}, {
            sku: "AE8426BZT",
            num: "1"
        }, {sku: "01M763 0672528 6", num: "1"}, {sku: "8BR764 3WX F096P", num: "1"}, {
            sku: "01G357 574309 7",
            num: "1"
        }, {sku: "922501 CC850 07753", num: "1"}, {sku: "4029405", num: "1"}, {
            sku: "WDXN55994OP1TVEBU71 37.5",
            num: "1"
        }, {sku: "354408 CAO2G 2762", num: "1"}, {sku: "F755TS0504YC 78 S", num: "1"}, {
            sku: "2CM015053 F0216 100",
            num: "1"
        }, {sku: "398356203", num: "1"}, {sku: "791784SAM", num: "1"}, {
            sku: "NPSS1717 WHITE",
            num: "1"
        }, {sku: "10136613 01 629 01", num: "1"}, {sku: "F665TS0184OB 97 03", num: "1"}, {
            sku: "A17356OX 50",
            num: "1"
        }, {sku: "4055301", num: "1"}, {sku: "E0402TRICY 005", num: "1"}, {
            sku: "01B221 529556 7",
            num: "1"
        }, {sku: "4015562 02", num: "1"}, {sku: "2CC001X72 F0002 115", num: "1"}, {
            sku: "115748 D94JG 4222",
            num: "1"
        }, {sku: "F755PU2083AD 75 L", num: "1"}, {sku: "01B792 643220 5.5", num: "1"}, {
            sku: "F652SW797950 01 02",
            num: "1"
        }, {sku: "2CC0042FAD F0G52 115", num: "1"}, {sku: "429221 K1M1T 8574", num: "1"}, {
            sku: "21E298 0561087",
            num: "1"
        }, {sku: "821770 OBT", num: "1"}, {sku: "2MO5132E3E F0S99", num: "1"}, {
            sku: "8M0354 SFC F07MN",
            num: "1"
        }, {sku: "30T3SSMM2L001", num: "1"}, {sku: "4033055 BLACK", num: "1"}, {
            sku: "2CC066053 F0216 110",
            num: "1"
        }, {sku: "935027 7A420 09383 9", num: "1"}, {sku: "451136 H917N 8497 90", num: "1"}, {
            sku: "3978168",
            num: "1"
        }, {sku: "50316448", num: "1"}, {sku: "30T6GJ8T6L177", num: "1"}, {
            sku: "BUNNYSNEAKS2 38",
            num: "1"
        }, {sku: "F665SW1324MD 78 XL", num: "1"}, {sku: "A16109XPL 48", num: "1"}, {
            sku: "473916 CWC1N 2140",
            num: "1"
        }, {sku: "7M0186 X4U F0GXN", num: "1"}, {sku: "928032 7P772 11530", num: "1"}, {
            sku: "50324769 641 04",
            num: "1"
        }, {sku: "2CS0062FAD F0201 95", num: "1"}, {
            sku: "01M006 657613 PAMPLONA 7",
            num: "1"
        }, {sku: "F755PA2261RJ 77 46", num: "1"}, {sku: "TAILSNEAKS27 37", num: "1"}, {
            sku: "32S5GRLC1L623",
            num: "1"
        }, {sku: "3900458000", num: "1"}, {sku: "2DE010 P39 F0002 6/40", num: "1"}, {
            sku: "884871",
            num: "1"
        }, {sku: "50326816 036 02", num: "1"}, {sku: "MCKE14282FL1IDIQG64 39", num: "1"}, {
            sku: "30S2GHMT3L001",
            num: "1"
        }, {sku: "01M763 0672528 7.5", num: "1"}, {sku: "E1016A TOE MRS", num: "1"}, {
            sku: "412008 KQWYG 8869",
            num: "1"
        }, {sku: "820704 ONYX", num: "1"}, {sku: "8BZ038 48Z F044W", num: "1"}, {
            sku: "3Y6T17 6J1FZ 01579 XL",
            num: "1"
        }, {sku: "B6J9102Z E5 30", num: "1"}, {sku: "922504 CC850 00143", num: "1"}, {
            sku: "6Y1M6L1MAAZ 0920 XL",
            num: "1"
        }, {sku: "WDXN56089CA2RMGDN01 38", num: "1"}, {
            sku: "F661JU0225HO 77 36",
            num: "1"
        }, {sku: "2CC009053 F0002 105", num: "1"}, {sku: "3975368", num: "1"}, {
            sku: "922528 CC855 07753",
            num: "1"
        }, {sku: "398356501", num: "1"}, {sku: "8N6S83 6J07Z 3916 L", num: "1"}, {
            sku: "386750 A38F0 9073 6",
            num: "1"
        }, {sku: "2CN0102EP7 F0Q09 85", num: "1"}, {sku: "E0414TRIRS 301", num: "1"}, {
            sku: "01B221 643059 6",
            num: "1"
        }, {sku: "IGRV-CO16", num: "1"}, {sku: "399865604", num: "1"}, {
            sku: "LOWLAND WL38777 BLACK 38",
            num: "1"
        }, {sku: "4022372", num: "1"}, {sku: "2CC001X72 F0002 85", num: "1"}, {
            sku: "411726 4G200 9762",
            num: "1"
        }, {sku: "3930460", num: "1"}, {sku: "8BH185 68B F0783", num: "1"}, {
            sku: "01B792 643220 6.5",
            num: "1"
        }, {sku: "W Poweder Blue S", num: "1"}, {sku: "F652TS840990 01 01", num: "1"}, {
            sku: "851167 DOL",
            num: "1"
        }, {sku: "429229 K1M1T 8574", num: "1"}, {sku: "01H884 603820 8", num: "1"}, {
            sku: "6YPP99 PJ05Z 1578 M",
            num: "1"
        }, {sku: "0619596 6/36.5 C", num: "1"}, {sku: "368186 BGH0N 1000 110", num: "1"}, {
            sku: "F661TS870993 99 01",
            num: "1"
        }, {sku: "451179 DUX2T 1000", num: "1"}, {sku: "01L551 645383 8", num: "1"}, {
            sku: "BUNNYSNEAKS33 36",
            num: "1"
        }, {sku: "605K 5.5", num: "1"}, {sku: "2VE002 064 F0002", num: "1"}, {
            sku: "C6H75FN C4 05",
            num: "1"
        }, {sku: "928046 7A804 09934", num: "1"}, {sku: "F755BL5062EB 76 S", num: "1"}, {
            sku: "2CS0062FAD F0216 80",
            num: "1"
        }, {sku: "65547 SV/YL", num: "1"}, {sku: "01M027 658425 SANGRIA 5", num: "1"}, {
            sku: "SR17MIRG1",
            num: "1"
        }, {sku: "32H3SLMC1L858", num: "1"}, {sku: "409486 AP0BG 5592", num: "1"}, {
            sku: "872823",
            num: "1"
        }, {sku: "01M262 660864 PAMPLONA 7.5", num: "1"}, {sku: "3900458003", num: "1"}, {
            sku: "885770",
            num: "1"
        }, {sku: "50326816 036 04", num: "1"}, {sku: "01B788 543215 5.5", num: "1"}, {
            sku: "MCKE14282FL1IDIQG64 41",
            num: "1"
        }, {sku: "6X1T9C1JALZ 063004", num: "1"}, {sku: "01M763 0672532 6.5", num: "1"}, {
            sku: "1BH907 NZV F0770",
            num: "1"
        }, {sku: "2MN0772E3E F0OTH", num: "1"}, {sku: "B6M72BXPZ02", num: "1"}, {
            sku: "6Y1PD11JBHZ 0999 44",
            num: "1"
        }, {sku: "WDXN56089CA2RMGDP85 37", num: "1"}, {sku: "F661SW829951 94 02", num: "1"}, {
            sku: "444651 3G856 4260",
            num: "1"
        }, {sku: "01L488 643447 6", num: "1"}, {sku: "403J 7", num: "1"}, {
            sku: "0636687 7.5/41.5 EEE",
            num: "1"
        }, {sku: "3695237", num: "1"}, {sku: "398356503", num: "1"}, {
            sku: "21G536 0674845",
            num: "1"
        }, {sku: "F765PU2233LC 02 L", num: "1"}, {sku: "2PM005035 F0E5O", num: "1"}, {
            sku: "01M004 657561 NERO 4.5",
            num: "1"
        }, {sku: "NPSS1736 NUDE", num: "1"}, {sku: "C6C447S1201", num: "1"}, {
            sku: "406370 KVW3X 9769",
            num: "1"
        }, {sku: "928532 CC855 00010", num: "1"}, {sku: "01B221 676576 8", num: "1"}, {
            sku: "L2H230A",
            num: "1"
        }, {sku: "01B772 591979 5.5", num: "1"}, {sku: "30H4GAIS3L230", num: "1"}, {
            sku: "6X1T671JQ4Z 0999 01",
            num: "1"
        }, {sku: "01M276 663838 NERO 7.5", num: "1"}, {sku: "TRIOT 271", num: "1"}, {
            sku: "820658",
            num: "1"
        }, {sku: "8BH279 3M2 F0765", num: "1"}, {sku: "AE9547OXY", num: "1"}, {
            sku: "3958905003",
            num: "1"
        }, {sku: "21E479 600207", num: "1"}, {sku: "F755TS0184SA 94 S", num: "1"}, {
            sku: "01H916 609552 6",
            num: "1"
        }, {sku: "MUK5AMW01 RE001", num: "1"}, {sku: "2CM002908 F0JYA 115", num: "1"}, {
            sku: "01L551 645405 6.5",
            num: "1"
        }, {sku: "BUNNYSNEAKS40 37", num: "1"}, {sku: "A17031OX 54", num: "1"}, {
            sku: "619R 5",
            num: "1"
        }, {sku: "869043", num: "1"}, {sku: "F765SW0554XC 78 L", num: "1"}, {
            sku: "C6H93BR 1001",
            num: "1"
        }, {sku: "660820 670460", num: "1"}, {sku: "01M027 658425 SANGRIA 6", num: "1"}, {
            sku: "32H4SCPC7L303",
            num: "1"
        }, {sku: "4016617", num: "1"}, {sku: "THE MINI PEUPIF", num: "1"}, {
            sku: "274578 0002004",
            num: "1"
        }, {sku: "885988", num: "1"}, {sku: "50327630 001 105", num: "1"}, {
            sku: "01B788 543215 6.5",
            num: "1"
        }, {sku: "6X1T9C1JALZ 0999 02", num: "1"}, {sku: "01M763 0672532 7.5", num: "1"}, {
            sku: "1MH132 QHH F068Z",
            num: "1"
        }, {sku: "F755SW0554XC 55 S", num: "1"}, {sku: "2MN0772EYT F0002", num: "1"}, {
            sku: "3Y6T17 6J1FZ 1464 S",
            num: "1"
        }, {sku: "50333978 001 XL", num: "1"}, {sku: "01H062 592343 7.5", num: "1"}, {
            sku: "B6W71 TZ 2702",
            num: "1"
        }, {sku: "6Y6MC7 6M21Z 1200 M", num: "1"}, {sku: "WUNB55837HI1RLVVQ75 36", num: "1"}, {
            sku: "354949 4617Q 1579",
            num: "1"
        }, {sku: "F661SW830951 34 01", num: "1"}, {sku: "2CC009053 F0216 105", num: "1"}, {
            sku: "851701 ONYX",
            num: "1"
        }, {sku: "446750 C9D00 1000 38", num: "1"}, {sku: "6YPT98 PJ30Z 1852 L", num: "1"}, {
            sku: "01L488 643447 7",
            num: "1"
        }, {sku: "MWR5ABN02 BK001", num: "1"}, {sku: "F665PA7184OA 94 03", num: "1"}, {
            sku: "455759801",
            num: "1"
        }, {sku: "398419401", num: "1"}, {sku: "2PP662053 F0002", num: "1"}, {
            sku: "7AR422 41W F0VD1",
            num: "1"
        }, {sku: "10186371 02 435 03", num: "1"}, {sku: "2CN0122ADS F0A13 80", num: "1"}, {
            sku: "6206889",
            num: "1"
        }, {sku: "3994660", num: "1"}, {sku: "406387 KVX2N 9769", num: "1"}, {
            sku: "01B772 0670720 5.5",
            num: "1"
        }, {sku: "F755PA7224CG 75 L", num: "1"}, {sku: "01B772 591979 7", num: "1"}, {
            sku: "4023350 02",
            num: "1"
        }, {sku: "01M686 0672733 8.5", num: "1"}, {sku: "TWINKLE1 BLACK 38", num: "1"}, {
            sku: "2CC003X72 F0002 85",
            num: "1"
        }, {sku: "3943987BLUE01", num: "1"}, {sku: "50302557 342 XL", num: "1"}, {
            sku: "F755PU2223LC 93 S",
            num: "1"
        }, {sku: "8BL124 1D5 F089L", num: "1"}, {sku: "01G357 574293 5.5", num: "1"}, {
            sku: "WDNT55995OP1RMRVM20 36",
            num: "1"
        }, {sku: "F655PU2023AB 77 01", num: "1"}, {sku: "2CC004X72 F0JYA 120", num: "1"}, {
            sku: "53529 LINAV",
            num: "1"
        }, {sku: "0627077 8/38.5 M", num: "1"}, {sku: "Z6B02XM5250", num: "1"}, {
            sku: "368186 BGH0N 2140 100",
            num: "1"
        }, {sku: "F762PA2556FB 64 36", num: "1"}, {sku: "773483", num: "1"}, {
            sku: "01L551 645405 7.5",
            num: "1"
        }, {sku: "383226475", num: "1"}, {sku: "F665SW1454OA 94 01", num: "1"}, {
            sku: "619R 6.5",
            num: "1"
        }, {sku: "SJN149 WY7 F092D S", num: "1"}, {sku: "F765SW0554XC 78 S", num: "1"}, {
            sku: "01M006 657611 NERO 8",
            num: "1"
        }, {sku: "C6H93BR 1004", num: "1"}, {sku: "F755CA1283CE 99 S", num: "1"}, {
            sku: "669772 588846",
            num: "1"
        }, {sku: "SR17MMFC7", num: "1"}, {sku: "4016622", num: "1"}, {
            sku: "01M264 0660878 6",
            num: "1"
        }, {sku: "32S7GS9C1L414", num: "1"}, {sku: "282414 A7M0G 1000", num: "1"}, {
            sku: "2DE080 P39 F0002 9/43",
            num: "1"
        }, {sku: "887918", num: "1"}, {sku: "01B788 543215 7.5", num: "1"}, {
            sku: "0427344 7/37.5 D",
            num: "1"
        }, {sku: "395599900", num: "1"}, {sku: "3Y6T17 6J1FZ 1464 XXL", num: "1"}, {
            sku: "50334538 001 S",
            num: "1"
        }, {sku: "922505 CC850 00335", num: "1"}, {sku: "6Y6MC7 6M21Z 1579 L", num: "1"}, {
            sku: "0602152 7.5/38 D",
            num: "1"
        }, {sku: "WUNB55837HI1RLVVU71 37", num: "1"}, {
            sku: "F661SW830951 34 03",
            num: "1"
        }, {sku: "2CC009053 F0216 115", num: "1"}, {sku: "851703 ZAFFERANO", num: "1"}, {
            sku: "01L525 652923 5.5",
            num: "1"
        }, {sku: "BNW24 EA 1202", num: "1"}, {sku: "856489 MOONSTONE", num: "1"}, {
            sku: "QUEEN 37",
            num: "1"
        }, {sku: "50323992 100 XL", num: "1"}, {sku: "A2144X VSW ABS 6.5", num: "1"}, {
            sku: "408146 X1317 1060 M",
            num: "1"
        }, {sku: "806915", num: "1"}, {sku: "9221046A728 00176", num: "1"}, {
            sku: "01B772 530040 5",
            num: "1"
        }, {sku: "L2Y2D2A", num: "1"}, {sku: "110810 0684401", num: "1"}, {
            sku: "810441",
            num: "1"
        }, {sku: "922159 7P771 22974", num: "1"}, {sku: "F755PA7224CG 75 S", num: "1"}, {
            sku: "AC3350OX SILVER UNI",
            num: "1"
        }, {sku: "6X1T9B1JALZ 0351 04", num: "1"}, {sku: "01M686 0672735 5.5", num: "1"}, {
            sku: "8BL124 OYU F035F",
            num: "1"
        }, {sku: "MMK 5AVE50 TL001", num: "1"}, {sku: "ALLEARS1 36", num: "1"}, {
            sku: "6Y1BD71JBHZ 0920 XL",
            num: "1"
        }, {sku: "WDNT55995OP1TVEBQ75 34.5", num: "1"}, {sku: "F655PU2023AB 98 02", num: "1"}, {
            sku: "851173",
            num: "1"
        }, {sku: "21E998 0602348", num: "1"}, {sku: "01H916 609552 8", num: "1"}, {
            sku: "922527 CC855 09934",
            num: "1"
        }, {sku: "4033845 HONEY BLACK", num: "1"}, {sku: "Z6B02XME546", num: "1"}, {
            sku: "F661TS874993 99 01",
            num: "1"
        }, {sku: "01L926 661818 5", num: "1"}, {sku: "C1076A TOE IND", num: "1"}, {
            sku: "383226495",
            num: "1"
        }, {sku: "2CN0052A53 F0308 85", num: "1"}, {sku: "A17064TRH 50", num: "1"}, {
            sku: "869104 DRS",
            num: "1"
        }, {sku: "SR17BMG1", num: "1"}, {sku: "404648502", num: "1"}, {
            sku: "01M006 657612 NEW BISQUE 6",
            num: "1"
        }, {sku: "C6H93BR E504", num: "1"}, {sku: "50324782 031 04", num: "1"}, {
            sku: "F755CH1001FI 71 39",
            num: "1"
        }, {sku: "699  6/37", num: "1"}, {sku: "01M264 0660878 7", num: "1"}, {
            sku: "32S7SS9C1T154",
            num: "1"
        }, {sku: "297044 4200Q 4173", num: "1"}, {sku: "114984 AA61N 201990", num: "1"}, {
            sku: "2EC062 053 F0002 6/40",
            num: "1"
        }, {sku: "3Y6F20 6JPTZ 1541 XXL", num: "1"}, {sku: "MEN5S2I11 CO041", num: "1"}, {
            sku: "4028464",
            num: "1"
        }, {sku: "0529B55 L4", num: "1"}, {sku: "851152 SABBIA", num: "1"}, {
            sku: "424893 K0L2G 8691",
            num: "1"
        }, {sku: "1MH132 ZLP F0HYI", num: "1"}, {sku: "F755SW0554XC 99 L", num: "1"}, {
            sku: "8M0299 F09 F0KUR",
            num: "1"
        }, {sku: "50369187 401 30", num: "1"}, {sku: "21F827 0640805", num: "1"}, {
            sku: "F755TS0774YF 95 L",
            num: "1"
        }, {sku: "7030540 1002 XS", num: "1"}, {sku: "30T6GEZB1L001", num: "1"}, {
            sku: "4042835 HONEY PARADE RED",
            num: "1"
        }, {sku: "0644734 8.5/42.5 EEE", num: "1"}, {sku: "F665PA7184OA 99 03", num: "1"}, {
            sku: "2TL0652ENS F0002",
            num: "1"
        }, {sku: "R17064OX 50", num: "1"}, {sku: "C6H08QK 1201", num: "1"}, {
            sku: "F665TS0844OB 97 03",
            num: "1"
        }, {sku: "2CS002908 F0002 80", num: "1"}, {sku: "408208 C9D00 6433 36", num: "1"}, {
            sku: "10186578 01 017 04",
            num: "1"
        }, {sku: "807105", num: "1"}, {sku: "928532 CC855 00574", num: "1"}, {
            sku: "40R5FUFR2L001 37.5",
            num: "1"
        }, {sku: "387F 7.5/38.5", num: "1"}, {sku: "50292247z110", num: "1"}, {
            sku: "2DD131 MGV F0H79 7.5/41.5",
            num: "1"
        }, {sku: "AC3465OX", num: "1"}, {sku: "01M738 0672670 5.5", num: "1"}, {
            sku: "32T6SDDC3L446",
            num: "1"
        }, {sku: "E1 AF0 23 01 01 023", num: "1"}, {sku: "3952065", num: "1"}, {
            sku: "1BA863 NZV F0016",
            num: "1"
        }, {sku: "01G357 574293 7.5", num: "1"}, {sku: "4028781 03", num: "1"}, {
            sku: "6Y1BD71JBHZ 0999 M",
            num: "1"
        }, {sku: "349F 6.5", num: "1"}, {sku: "F655SF300F30 74", num: "1"}, {
            sku: "851179 ACERO",
            num: "1"
        }, {sku: "21F216 0612619", num: "1"}, {sku: "Z6B02XME550", num: "1"}, {
            sku: "F662SW7054XJ 30 01",
            num: "1"
        }, {sku: "852634 TA8", num: "1"}, {sku: "F762SW7104XC 77 S", num: "1"}, {
            sku: "787607",
            num: "1"
        }, {sku: "C521DR5 12", num: "1"}, {sku: "384256690", num: "1"}, {
            sku: "F765SW0774XH 99 S",
            num: "1"
        }, {sku: "E0078MIDLQ 049", num: "1"}, {sku: "FW17MIGM100", num: "1"}, {
            sku: "6X1B1Q1NBZZ 0920 04",
            num: "1"
        }, {sku: "TAILSNEAKS15 BLACK 38", num: "1"}, {sku: "32H5SAFE1L092", num: "1"}, {
            sku: "01M264 0660878 8",
            num: "1"
        }, {sku: "2CC001053 F0002 105", num: "1"}, {sku: "391246 4G200 4569", num: "1"}, {
            sku: "888138",
            num: "1"
        }, {sku: "30S5SCPS2L334", num: "1"}, {sku: "0529D55 1T", num: "1"}, {
            sku: "E5 AV3 55 D3 07 069",
            num: "1"
        }, {sku: "2CC0042FAD F0B2A 85", num: "1"}, {sku: "F755SW0554XC 99 S", num: "1"}, {
            sku: "2MO513053 F0002",
            num: "1"
        }, {sku: "01H062 594549 7.5", num: "1"}, {sku: "403270204", num: "1"}, {
            sku: "6Y6T35 6JHKZ 1565 S",
            num: "1"
        }, {sku: "0606542 7.5/38 M", num: "1"}, {sku: "F661SW831951 94 03", num: "1"}, {
            sku: "934504 CC786 00041",
            num: "1"
        }, {sku: "F755TS0774YF 95 S", num: "1"}, {sku: "747307", num: "1"}, {
            sku: "01L525 652923 8",
            num: "1"
        }, {sku: "MWT5SMA04 LY001", num: "1"}, {sku: "398419504", num: "1"}, {
            sku: "2TL0652ENT F0038",
            num: "1"
        }, {sku: "7M0169 O6G F08LD", num: "1"}, {sku: "01M004 657562 NEW BISQUE 7", num: "1"}, {
            sku: "C6H10NM0602",
            num: "1"
        }, {sku: "50324769 031 04", num: "1"}, {
            sku: "01M006 657612 NEW BISQUE 7",
            num: "1"
        }, {sku: "408322 X5H61 4465 M", num: "1"}, {sku: "10189295 01 410 03", num: "1"}, {
            sku: "50248964 402 35",
            num: "1"
        }, {sku: "2CS0132FAD F0002 80", num: "1"}, {sku: "23B412 662157 100", num: "1"}, {
            sku: "110810 0698202",
            num: "1"
        }, {sku: "2DD131 MGV F0H79 8.5/42.5", num: "1"}, {sku: "884698", num: "1"}, {
            sku: "MBCI20279NASVSDYU47 40",
            num: "1"
        }, {sku: "402340401", num: "1"}, {sku: "01M762 0672522 6.5", num: "1"}, {
            sku: "F755SW0004MB 99 L",
            num: "1"
        }, {sku: "01G357 574309 5", num: "1"}, {sku: "MMK4SVE86 CO001", num: "1"}, {
            sku: "30S6SS7S1L081",
            num: "1"
        }, {sku: "6Y1FA81JBQZ 0920 M", num: "1"}, {
            sku: "WDNT56280CA2TRMPN01 36.5",
            num: "1"
        }, {sku: "353122 F4G1N 9763", num: "1"}, {sku: "F655TS0434CM 01 02", num: "1"}, {
            sku: "2CC005X72 F0JYA 105",
            num: "1"
        }, {sku: "932526CC993 00541", num: "1"}, {sku: "MWD4AVI78 BK001", num: "1"}, {
            sku: "Z6N74XB1201",
            num: "1"
        }, {sku: "938542 CC996 00152", num: "1"}, {sku: "852639 DRS", num: "1"}, {
            sku: "21G217 661760 NEW BISQUE",
            num: "1"
        }, {sku: "30T6SEZB2O001", num: "1"}, {sku: "50322487 90", num: "1"}, {
            sku: "A17080BZT 54",
            num: "1"
        }, {sku: "405023903", num: "1"}, {sku: "10186447 01 402 01", num: "1"}, {
            sku: "7VA367 2WP F0Y7Y",
            num: "1"
        }, {sku: "E0126TRIMT 375", num: "1"}, {sku: "30F2GTTT8L665", num: "1"}, {
            sku: "01B772 530040 8",
            num: "1"
        }, {sku: "LOWLAND WL38777 BLACK 35.5", num: "1"}, {
            sku: "01M264 0660879 6.5",
            num: "1"
        }, {sku: "2CC001053 F0002 120", num: "1"}, {sku: "9320216A909 00020", num: "1"}, {
            sku: "3913362002",
            num: "1"
        }, {sku: "818724 EP0", num: "1"}, {sku: "889407", num: "1"}, {
            sku: "50311742",
            num: "1"
        }, {sku: "01H884 603820 5.5", num: "1"}, {sku: "6Y6T50 6JPRZ 1456 L", num: "1"}, {
            sku: "F661SW833951 99 02",
            num: "1"
        }, {sku: "2CC066053 F0002 110", num: "1"}, {
            sku: "935027 7A420 00020 8",
            num: "1"
        }, {sku: "451136 H917N 1060 100", num: "1"}, {sku: "3976769", num: "1"}, {
            sku: "01L551 645383 5.5",
            num: "1"
        }, {sku: "BUNNYBOOT BLACK 38", num: "1"}, {sku: "370830 A7M0N 1000", num: "1"}, {
            sku: "A0703 4140 1001 XS",
            num: "1"
        }, {sku: "59452 MWM4O", num: "1"}, {sku: "01M004 657563 PAMPLONA 6.5", num: "1"}, {
            sku: "RB2161OX M",
            num: "1"
        }, {sku: "F755BL1011MA 77 L", num: "1"}, {sku: "2CS0062FAD F0201 100", num: "1"}, {
            sku: "A2570X CVT NER 8.5",
            num: "1"
        }, {sku: "01M006 657613 PAMPLONA 5.5", num: "1"}, {
            sku: "408322 X7333 1000 M",
            num: "1"
        }, {sku: "110640 4Q010 6073", num: "1"}, {sku: "F755CH6002FG 64 L", num: "1"}, {
            sku: "3996731",
            num: "1"
        }, {sku: "240355 0660906", num: "1"}, {sku: "2DE010 P39 F0002 5.5/39.5", num: "1"}, {
            sku: "884760",
            num: "1"
        }, {sku: "01B788 518587 5.5", num: "1"}, {sku: "MCCR11652MC1HVVDU61 39", num: "1"}, {
            sku: "01M763 0672528 5.5",
            num: "1"
        }, {sku: "32T6STVE2O092", num: "1"}, {sku: "E1 AH6 11 01 01 069", num: "1"}, {
            sku: "1BG775 2A4A F0RV3",
            num: "1"
        }, {sku: "8BR764 3WX F089R", num: "1"}, {sku: "01G357 574309 6", num: "1"}, {
            sku: "B C baby pink S",
            num: "1"
        }, {sku: "4029027", num: "1"}, {sku: "WDXN55994OP1TVEBU71 37", num: "1"}, {
            sku: "F655TS0434CM 74 04",
            num: "1"
        }, {sku: "851206 MOONSTONE", num: "1"}, {sku: "21F568 628948 NAVY", num: "1"}, {
            sku: "01L488 643444 5",
            num: "1"
        }, {sku: "938542 CC999 00535", num: "1"}, {sku: "398356202", num: "1"}, {
            sku: "21G267 0660388",
            num: "1"
        }, {sku: "F762TO449860 34 S", num: "1"}, {sku: "791750CZ", num: "1"}, {
            sku: "8N6S83 6J07Z 1200 L",
            num: "1"
        }, {sku: "01L992 658364 SANGRIA 6", num: "1"}, {sku: "2CN0102EP7 F0Q09 115", num: "1"}, {
            sku: "A17290OX 54",
            num: "1"
        }, {sku: "4054892", num: "1"}, {sku: "7VA373 X4U F0GXN", num: "1"}, {
            sku: "E0179TRICY 450",
            num: "1"
        }, {sku: "01B221 529556 6.5", num: "1"}, {sku: "IGRB-CO15", num: "1"}, {
            sku: "4015273004",
            num: "1"
        }, {sku: "01M109 657735 NERO 7.5", num: "1"}, {sku: "3996986", num: "1"}, {
            sku: "411115 3G200 6472",
            num: "1"
        }, {sku: "VM340 ZZ600 R07 XL", num: "1"}, {sku: "F652RO718950 93 01", num: "1"}, {
            sku: "2CC0042FAD F0G52 105",
            num: "1"
        }, {sku: "2MO5132E3E F0OTH", num: "1"}, {sku: "01H884 603820 6.5", num: "1"}, {
            sku: "YV3 12 58 15 253 RIVIERA",
            num: "1"
        }, {sku: "367331 3G001 5371", num: "1"}, {sku: "01L551 645383 6.5", num: "1"}, {
            sku: "BUNNYSNEAKS2 35",
            num: "1"
        }, {sku: "09T0021-410-04", num: "1"}, {sku: "2CN0052A53 F0002 80", num: "1"}, {
            sku: "01M006 657611 NERO 4.5",
            num: "1"
        }, {sku: "C6H75FN C4 01", num: "1"}, {sku: "50324769 410 04", num: "1"}, {
            sku: "F755BL1011MA 77 S",
            num: "1"
        }, {sku: "2CS0062FAD F0201 90", num: "1"}, {sku: "01M006 657613 PAMPLONA 6.5", num: "1"}, {
            sku: "32H3GLMC1L665",
            num: "1"
        }, {sku: "110640 4Q010 9573", num: "1"}, {sku: "2CS0132FAD F0216 100", num: "1"}, {
            sku: "TAILSNEAKS27 36",
            num: "1"
        }, {sku: "40S5FUFR1L405 38.5", num: "1"}, {sku: "3900456003", num: "1"}, {
            sku: "110810 0833403",
            num: "1"
        }, {sku: "F755PM405B41 77", num: "1"}, {sku: "2DE010 P39 F0002 6.5/40.5", num: "1"}, {
            sku: "50326816 036 01",
            num: "1"
        }, {sku: "MCCR11652MC1HVVDU61 43", num: "1"}, {sku: "412008 CWG3T 2076", num: "1"}, {
            sku: "1BH851 NZV F0136",
            num: "1"
        }, {sku: "F755SW0014XC 78 S", num: "1"}, {sku: "B0594DBDCY 402", num: "1"}, {
            sku: "922504 CC850 00020",
            num: "1"
        }, {sku: "WDXN56089CA2RMGDN01 37", num: "1"}, {sku: "354408 CAO2G 4173", num: "1"}, {
            sku: "F661JU0175HH 77 34",
            num: "1"
        }, {sku: "2CC009053 F0002 100", num: "1"}, {sku: "442622 A88ST 5784", num: "1"}, {
            sku: "2MV8362E3E F0A13",
            num: "1"
        }, {sku: "3Y6T24 6J00Z 01464 XXL", num: "1"}, {sku: "MWE 4AVI63 BK001", num: "1"}, {
            sku: "403J 5.5",
            num: "1"
        }, {sku: "368557 KHN7R 1078", num: "1"}, {sku: "57714 LILQD", num: "1"}, {
            sku: "398356204",
            num: "1"
        }, {sku: "F765CH6002EG 76 M", num: "1"}, {sku: "NPSS1721 BABYPINK", num: "1"}, {
            sku: "386750 A38F0 9073 5",
            num: "1"
        }, {sku: "2CN0102EP7 F0Q09 80", num: "1"}, {sku: "406191 3G001 5800", num: "1"}, {
            sku: "7VZ012 SHD F0GXN",
            num: "1"
        }, {sku: "E0402TRIRS 301", num: "1"}, {sku: "01B221 529556 7.5", num: "1"}, {
            sku: "IGRRJ-O17",
            num: "1"
        }, {sku: "4015562 03", num: "1"}, {sku: "01M276 663838 NERO 6", num: "1"}, {
            sku: "TIELAND WL38775 SLATE 37",
            num: "1"
        }, {sku: "2CC001X72 F0002 80", num: "1"}, {sku: "115748 D94JG 6267", num: "1"}, {
            sku: "F755PU2083AD 75 M",
            num: "1"
        }, {sku: "2MC2232E3C F0R8F", num: "1"}, {sku: "W lime S", num: "1"}, {
            sku: "F652SW799950 01 02",
            num: "1"
        }, {sku: "2CC0042FAD F0G52 85", num: "1"}, {sku: "3958886", num: "1"}, {
            sku: "21E298 0561098",
            num: "1"
        }, {sku: "821785 BTT", num: "1"}, {sku: "50311764", num: "1"}, {
            sku: "F755TS0184SA 01 M",
            num: "1"
        }, {sku: "8M0357 F09 F0PXB", num: "1"}, {sku: "53034 liplu", num: "1"}, {
            sku: "4033299",
            num: "1"
        }, {sku: "6YPP99 PJ05Z 1200 L", num: "1"}, {sku: "0609552 7.5/38 D", num: "1"}, {
            sku: "F661TS870991 77 02",
            num: "1"
        }, {sku: "935565 CC500 00010 6.5", num: "1"}, {
            sku: "451136 H917N 8497 95",
            num: "1"
        }, {sku: "01L551 645383 7.5", num: "1"}, {sku: "BUNNYSNEAKS2 39", num: "1"}, {
            sku: "10106415 01 423 02",
            num: "1"
        }, {sku: "371444 3G001 4667", num: "1"}, {sku: "F665SW1324MD 99 M", num: "1"}, {
            sku: "50151746 100",
            num: "1"
        }, {sku: "50239979 B 105", num: "1"}, {sku: "F755BL1511NG 99 S", num: "1"}, {
            sku: "2CS0062FAD F0216 105",
            num: "1"
        }, {sku: "01M006 657613 PAMPLONA 7.5", num: "1"}, {sku: "TAILSNEAKS27 38", num: "1"}, {
            sku: "32S5GTVE9L623",
            num: "1"
        }, {sku: "3900458002", num: "1"}, {sku: "2DE010 P39 F0002 7/41", num: "1"}, {
            sku: "884937",
            num: "1"
        }, {sku: "01B788 518587 7.5", num: "1"}, {sku: "MCKE14282FL1IDIQG64 40", num: "1"}, {
            sku: "6X1T9C1JALZ 063003",
            num: "1"
        }, {sku: "01M763 0672532 6", num: "1"}, {sku: "E17J107.710 100 M", num: "1"}, {
            sku: "1BH907 NZV F0002",
            num: "1"
        }, {sku: "820728 BLV", num: "1"}, {sku: "2MN0772E3E F0A13", num: "1"}, {
            sku: "3Y6T17 6J1FZ 01579 XXL",
            num: "1"
        }, {sku: "B6J9102Z E5 31", num: "1"}, {sku: "6Y1MB1 1JBHZ 0999 S", num: "1"}, {
            sku: "WDXN56089CA2RMGDP85 36",
            num: "1"
        }, {sku: "2CC009053 F0002 85", num: "1"}, {sku: "443499 DRW1T 9022", num: "1"}, {
            sku: "3975371",
            num: "1"
        }, {sku: "2MV8362E3E F0S99", num: "1"}, {sku: "01L488 643447 5.5", num: "1"}, {
            sku: "30T5SAVS2L907",
            num: "1"
        }, {sku: "0636687 6/40 EEE", num: "1"}, {sku: "F665CH2211FA 76 39", num: "1"}, {
            sku: "2CM015053 F0216 85",
            num: "1"
        }, {sku: "398356502", num: "1"}, {sku: "30T6SJ8T2L085", num: "1"}, {
            sku: "10166990 01 001 02",
            num: "1"
        }, {sku: "387070 KQF1N 1000", num: "1"}, {sku: "3992895", num: "1"}, {
            sku: "801420 GSK00 ZJD0",
            num: "1"
        }, {sku: "E0520YDRMT 902", num: "1"}, {sku: "399550901", num: "1"}, {
            sku: "JACKIE BLACK 36",
            num: "1"
        }, {sku: "F755PA6001SE 77 46", num: "1"}, {
            sku: "LOWLAND WL38779 NERO 35.5",
            num: "1"
        }, {sku: "01M276 663838 NERO 7", num: "1"}, {sku: "411924 CWC1N 1000 95", num: "1"}, {
            sku: "133483 3G200 5900",
            num: "1"
        }, {sku: "50302557 342 L", num: "1"}, {sku: "F755PU2083AD 99 L", num: "1"}, {
            sku: "8BH253 3WL F0T5W",
            num: "1"
        }, {sku: "4028696 02", num: "1"}, {sku: "F652TS840990 01 02", num: "1"}, {
            sku: "3958905002",
            num: "1"
        }, {sku: "2MO5132EYT F0201", num: "1"}, {sku: "01H916 609552 5", num: "1"}, {
            sku: "30T3STVT1L085",
            num: "1"
        }, {sku: "0627077 5.5/36 M", num: "1"}, {sku: "2CC0802A5W F0002 95", num: "1"}, {
            sku: "50316868 409",
            num: "1"
        }, {sku: "01L551 645405 6", num: "1"}, {sku: "BUNNYSNEAKS40 35", num: "1"}, {
            sku: "A17031OX 52",
            num: "1"
        }, {sku: "01M006 657611 NERO 6.5", num: "1"}, {sku: "323673 KH1BG 8595", num: "1"}, {
            sku: "C6H75FNC202",
            num: "1"
        }, {sku: "F755BL7184CG 99 S", num: "1"}, {
            sku: "2CS0062FAD F0216 85",
            num: "1"
        }, {sku: "01M027 658425 SANGRIA 5.5", num: "1"}, {sku: "32H4GBAE3T786", num: "1"}, {
            sku: "4016  6/37",
            num: "1"
        }, {sku: "269876 KQW5G 4080", num: "1"}, {sku: "3900461001", num: "1"}, {
            sku: "2DE080 P39 F0002 5/39",
            num: "1"
        }, {sku: "885792", num: "1"}, {sku: "01M763 0672532 7", num: "1"}, {
            sku: "2CC004053 F0G52 85",
            num: "1"
        }, {sku: "932080 7P915 06935", num: "1"}, {sku: "1BP006VC0MNZV F0442", num: "1"}, {
            sku: "50333978 001 S",
            num: "1"
        }, {sku: "B6W71 TZ 2701", num: "1"}, {sku: "6Y1TE61JAHZ 0100 M", num: "1"}, {
            sku: "0602152 5.5/36 D",
            num: "1"
        }, {sku: "WTRV55954BJ3CHYLN01 37", num: "1"}, {sku: "3546226", num: "1"}, {
            sku: "F661SW829951 94 03",
            num: "1"
        }, {sku: "2CC009053 F0216 100", num: "1"}, {sku: "21F570 655737", num: "1"}, {
            sku: "6YPP99 PJ05Z 1578 S",
            num: "1"
        }, {sku: "01L488 643447 6.5", num: "1"}, {sku: "MWR5ABN01 BK001", num: "1"}, {
            sku: "4040670",
            num: "1"
        }, {sku: "0636687 7/41 EEE", num: "1"}, {sku: "938543 CC996 00152", num: "1"}, {
            sku: "398356504",
            num: "1"
        }, {sku: "22A900 656928 SANGRIA", num: "1"}, {sku: "F765PU2233LC 02 M", num: "1"}, {
            sku: "796918",
            num: "1"
        }, {sku: "01M004 657561 NERO 5", num: "1"}, {sku: "C6C447S1202", num: "1"}, {
            sku: "10170288 01 410 30",
            num: "1"
        }, {sku: "406387 K1M7T 8576", num: "1"}, {sku: "308004 A7M0G 2754", num: "1"}, {
            sku: "E1 AC5 14 02 01 300",
            num: "1"
        }, {sku: "399550904", num: "1"}, {sku: "01B221 676576 8.5", num: "1"}, {
            sku: "01B772 591979 6",
            num: "1"
        }, {sku: "LOWLAND WL38779 NERO 37", num: "1"}, {sku: "4022570", num: "1"}, {
            sku: "01M686 0672733 6",
            num: "1"
        }, {sku: "2CC003X72 F0002 120", num: "1"}, {sku: "3939337", num: "1"}, {
            sku: "17Y7709491 001 S",
            num: "1"
        }, {sku: "F755PU2083AD 99 S", num: "1"}, {sku: "MMF5AVC11 COGNAC", num: "1"}, {
            sku: "30S6GRUM2L001",
            num: "1"
        }, {sku: "WDNT55995OP1RMRVM20 35", num: "1"}, {
            sku: "F655CH1001FI 74 03",
            num: "1"
        }, {sku: "2CC004X72 F0JYA 115", num: "1"}, {sku: "932524CC993 00541", num: "1"}, {
            sku: "429764 4G717 1268",
            num: "1"
        }, {sku: "F755TS0184SA 94 XL", num: "1"}, {sku: "30T4GLMS3A001", num: "1"}, {
            sku: "0627077 6.5/37 M",
            num: "1"
        }, {sku: "2CM005908 F0002 100", num: "1"}, {sku: "21G177 0656054", num: "1"}, {
            sku: "773195 O60",
            num: "1"
        }, {sku: "BUNNYSNEAKS40 38", num: "1"}, {sku: "922542CC857 41820", num: "1"}, {
            sku: "10106415 01 603 04",
            num: "1"
        }, {sku: "F665SW1454OA 75 03", num: "1"}, {sku: "2CN0052A53 F0308 115", num: "1"}, {
            sku: "619R 6",
            num: "1"
        }, {sku: "SJN149 WY7 F092D M", num: "1"}, {sku: "F765SW0554XC 78 M", num: "1"}, {
            sku: "01M006 657611 NERO 7.5",
            num: "1"
        }, {sku: "C6H93BR 1002", num: "1"}, {sku: "50324782 031 01", num: "1"}, {
            sku: "660822 670466",
            num: "1"
        }, {sku: "01M027 658425 SANGRIA 6.5", num: "1"}, {sku: "32H4SCPC7L446", num: "1"}, {
            sku: "32S7GS9C1L001",
            num: "1"
        }, {sku: "3900461003", num: "1"}, {sku: "2DE080 P39 F0002 7.5/41.5", num: "1"}, {
            sku: "885991",
            num: "1"
        }, {sku: "01B788 543215 7", num: "1"}, {sku: "MEC4AVI11 CO00M", num: "1"}, {
            sku: "AE8708XPL",
            num: "1"
        }, {sku: "4025972", num: "1"}, {sku: "0422693 6.5/40.5 EEE", num: "1"}, {
            sku: "VG483823TEA",
            num: "1"
        }, {sku: "E5 AV3 55 D2 01 389", num: "1"}, {sku: "851144 ACERO", num: "1"}, {
            sku: "3Y6T17 6J1FZ 1464 XL",
            num: "1"
        }, {sku: "50333986 410 S", num: "1"}, {sku: "6Y6MC7 6M21Z 1200 XL", num: "1"}, {
            sku: "WUNB55837HI1RLVVU71 35",
            num: "1"
        }, {sku: "2CC009053 F0216 110", num: "1"}, {sku: "447632 DRW1T 1000", num: "1"}, {
            sku: "F755TS0774YF 78 L",
            num: "1"
        }, {sku: "6YPV71 PJ08Z 1994 M", num: "1"}, {sku: "01L525 652923 5", num: "1"}, {
            sku: "MWR5AVC40 GOLD",
            num: "1"
        }, {sku: "30T6GBDT1L177", num: "1"}, {sku: "0636687 9/43 EEE", num: "1"}, {
            sku: "SHEERBUNNY6 35",
            num: "1"
        }, {sku: "2PP698053 F0002", num: "1"}, {sku: "7C0337 2MP F05FV", num: "1"}, {
            sku: "PUSH FIUORO PINK",
            num: "1"
        }, {sku: "2CN0122ADS F0A13 85", num: "1"}, {sku: "A2144X CVO NER 7.5", num: "1"}, {
            sku: "3994661",
            num: "1"
        }, {sku: "10186578 01 017 01", num: "1"}, {sku: "806913", num: "1"}, {
            sku: "9221026A728 00176",
            num: "1"
        }, {sku: "E1 AC5 14 02 01 361", num: "1"}, {sku: "01B772 0670720 6.5", num: "1"}, {
            sku: "L2X218A",
            num: "1"
        }, {sku: "F755PA7224CG 75 M", num: "1"}, {sku: "2CS043908 F0002 105", num: "1"}, {
            sku: "01B772 643076 5",
            num: "1"
        }, {sku: "922209 7P771 00051", num: "1"}, {sku: "01M686 0672733 9", num: "1"}, {
            sku: "2CC003X72 F0002 90",
            num: "1"
        }, {sku: "1BA274 NZV F0770", num: "1"}, {sku: "922282 7A804 09934", num: "1"}, {
            sku: "6Y1BD71JBHZ 0920 M",
            num: "1"
        }, {sku: "WDNT55995OP1RMRVM20 37", num: "1"}, {sku: "F655PU2023AB 77 03", num: "1"}, {
            sku: "2CC004X72 F0JYA 80",
            num: "1"
        }, {sku: "21E480 0600214", num: "1"}, {sku: "MW2B0137NAP W34", num: "1"}, {
            sku: "BB03 Black",
            num: "1"
        }, {sku: "2CM005908 F0002 85", num: "1"}, {sku: "452796 X5H38 1082 XS", num: "1"}, {
            sku: "21G191 0655871",
            num: "1"
        }, {sku: "777946 ONYX", num: "1"}, {sku: "01L551 645405 8", num: "1"}, {
            sku: "BZDLW3 9346 NTM",
            num: "1"
        }, {sku: "383226485", num: "1"}, {sku: "2CN0052A53 F0308 80", num: "1"}, {
            sku: "A17064OX 54",
            num: "1"
        }, {sku: "619R 7", num: "1"}, {sku: "SOLAGNE GREEN 36", num: "1"}, {
            sku: "F765SW0554XC 78 XL",
            num: "1"
        }, {sku: "2VF001 2EYT F0216", num: "1"}, {sku: "7VA319 P3D F0D7N", num: "1"}, {
            sku: "50245195 641 XL",
            num: "1"
        }, {sku: "01M006 657612 NEW BISQUE 5.5", num: "1"}, {sku: "C6H93BR E501", num: "1"}, {
            sku: "679761 671995",
            num: "1"
        }, {sku: "870533", num: "1"}, {sku: "01M027 658425 SANGRIA 7.5", num: "1"}, {
            sku: "110810 0483303",
            num: "1"
        }, {sku: "881174", num: "1"}, {sku: "32S7SR6C3L092", num: "1"}, {
            sku: "282900 4815Q 4260",
            num: "1"
        }, {sku: "410102 CWC1G 1000", num: "1"}, {sku: "3909740105", num: "1"}, {
            sku: "114984 AA61N 100090",
            num: "1"
        }, {sku: "2DE109 B4L F0002 6.5/40.5", num: "1"}, {sku: "MEC5SVI11 LE00S", num: "1"}, {
            sku: "50311735 609",
            num: "1"
        }, {sku: "F755SW0554XC 93 S", num: "1"}, {sku: "8M0299 6DC F089E", num: "1"}, {
            sku: "50368999 404 52",
            num: "1"
        }, {sku: "MMK5SVU11 BLACK", num: "1"}, {sku: "6Y6MC7 6M21Z 1579 S", num: "1"}, {
            sku: "0602152 7/37.5 D",
            num: "1"
        }, {sku: "363998 W0XHC 1006 38.5", num: "1"}, {sku: "2CC009053 F0216 85", num: "1"}, {
            sku: "447632 DRW1T 9022",
            num: "1"
        }, {sku: "21F628 656270 PACIFIC OXFORD", num: "1"}, {
            sku: "F755TS0774YF 78 S",
            num: "1"
        }, {sku: "0644734 7/41 EEE", num: "1"}, {sku: "2CM016053 F0G52 90", num: "1"}, {
            sku: "398419501",
            num: "1"
        }, {sku: "01M004 657561 NERO 7", num: "1"}, {sku: "50324769 031 01", num: "1"}, {
            sku: "2CS002908 F0002 100",
            num: "1"
        }, {sku: "625007 7A304 00036", num: "1"}, {sku: "FP9790E", num: "1"}, {
            sku: "408146 X1317 1060 S",
            num: "1"
        }, {sku: "9221046A728 31735", num: "1"}, {sku: "387F 5/36", num: "1"}, {
            sku: "30H5SAVS1A848",
            num: "1"
        }, {sku: "01M686 0672735 7.5", num: "1"}, {sku: "UJM730 XGS F0009 XL", num: "1"}, {
            sku: "E1 AF0 23 01 01 001",
            num: "1"
        }, {sku: "1BA863 NZV F0002", num: "1"}, {sku: "2ML1882E3E F0A13", num: "1"}, {
            sku: "ALLEARS1 37",
            num: "1"
        }, {sku: "6Y1BD71JBHZ 0999 L", num: "1"}, {sku: "WDNT55995OP1TVEBQ75 37", num: "1"}, {
            sku: "21F215 0663321",
            num: "1"
        }, {sku: "453166 A7MDT 1764", num: "1"}, {sku: "F762SW7104XC 77 M", num: "1"}, {
            sku: "8N6D02 6JPFZ 1579 XXL",
            num: "1"
        }, {sku: "30T6SA6S1L438", num: "1"}, {sku: "C1076A TOE NAV", num: "1"}, {
            sku: "50322478 90",
            num: "1"
        }, {sku: "A17064TRH 52", num: "1"}, {sku: "6205204", num: "1"}, {
            sku: "SR17BMG5",
            num: "1"
        }, {sku: "F765SW0764XE 78 M", num: "1"}, {sku: "404648503", num: "1"}, {
            sku: "2VG905 ZSR F0008",
            num: "1"
        }, {sku: "309613 KGD6G 8871", num: "1"}, {sku: "4012430", num: "1"}, {
            sku: "870710",
            num: "1"
        }, {sku: "01M109 657735 NERO 5", num: "1"}, {sku: "32H5GAFE1L623", num: "1"}, {
            sku: "L3X480N",
            num: "1"
        }, {sku: "401912601", num: "1"}, {sku: "32T4GTVC3L406", num: "1"}, {
            sku: "297047 4985Q 6160",
            num: "1"
        }, {sku: "818620 BTT", num: "1"}, {sku: "2EC062 053 F0002 8/42", num: "1"}, {
            sku: "887943",
            num: "1"
        }, {sku: "2CC0042FAD F0B2A 80", num: "1"}, {sku: "851153 ZAFFERANO", num: "1"}, {
            sku: "424897 K0L2G 8691",
            num: "1"
        }, {sku: "50369738 607 M", num: "1"}, {sku: "YGW552YC69180035", num: "1"}, {
            sku: "363998 W0YG6 1296 36",
            num: "1"
        }, {sku: "3Y6T24 6J00Z 01905 XXL", num: "1"}, {sku: "01L525 652923 7", num: "1"}, {
            sku: "50322115",
            num: "1"
        }, {sku: "0657308 6/36.5 C", num: "1"}, {
            sku: "2CM0592FAD F0G52 100",
            num: "1"
        }, {sku: "01M004 657562 NEW BISQUE 6.5", num: "1"}, {sku: "R17064OX 52", num: "1"}, {
            sku: "400875105",
            num: "1"
        }, {sku: "A2570X CVT NER 6.5", num: "1"}, {
            sku: "6250806A315 00044",
            num: "1"
        }, {sku: "01M006 657612 NEW BISQUE 6.5", num: "1"}, {
            sku: "408322 X5H61 4440 L",
            num: "1"
        }, {sku: "10186578 01 100 02", num: "1"}, {sku: "2CS0132FAD F0002 120", num: "1"}, {
            sku: "928532 CC855 00581",
            num: "1"
        }, {sku: "810877", num: "1"}, {sku: "F755PA7254MD 78 S", num: "1"}, {
            sku: "MBCI20279NASVSDYH53 41",
            num: "1"
        }, {sku: "AE8125OX UNI", num: "1"}, {sku: "01M738 0672670 6.5", num: "1"}, {
            sku: "32T6SLXK9F446",
            num: "1"
        }, {sku: "3954629", num: "1"}, {sku: "1BA896 NZV F0016", num: "1"}, {
            sku: "50328475 202 105",
            num: "1"
        }, {sku: "01G357 574293 8", num: "1"}, {sku: "AP9746XPL UNI", num: "1"}, {
            sku: "4028781 04",
            num: "1"
        }, {sku: "6Y1BD71JBHZ 0999 S", num: "1"}, {sku: "F655SW0864CI 01 02", num: "1"}, {
            sku: "932526CC993 00020",
            num: "1"
        }, {sku: "432735 3G856 4069", num: "1"}, {sku: "21F558 655726", num: "1"}, {
            sku: "2MV836 2E3C F0R8F",
            num: "1"
        }, {sku: "3Y6T22 6J00Z 1494 XXL", num: "1"}, {sku: "BB39-BK Brick", num: "1"}, {
            sku: "Z6K64PB5A52",
            num: "1"
        }, {sku: "398352302", num: "1"}, {sku: "F762SW879952 99 S", num: "1"}, {
            sku: "790385-05",
            num: "1"
        }, {sku: "C521DR5 7H", num: "1"}, {sku: "10136613 01 402 03", num: "1"}, {
            sku: "384256695",
            num: "1"
        }, {sku: "A17080BZT 52", num: "1"}, {sku: "F765TS0494YC 78 L", num: "1"}, {
            sku: "405023901",
            num: "1"
        }, {sku: "FW17MIPM1900", num: "1"}, {sku: "30F2GTTT8L230", num: "1"}, {
            sku: "4014  6/37",
            num: "1"
        }, {sku: "6X1B3R1NAPZ 0920 02", num: "1"}]
    }, "4V5s": function (u, n) {
        u.exports = [{shop: "京东万奢城旗舰店", price: "138504509.25", num: "13747"}]
    }, "4n1A": function (u, n) {
        u.exports = [{brand: "未知", price: "2302758.72", num: "1524"}, {
            brand: "ALEXANDER MCQUEEN",
            price: "56987",
            num: "43"
        }, {brand: "AMI", price: "529", num: "1"}, {
            brand: "APM MONACO",
            price: "255335.06",
            num: "353"
        }, {brand: "ARMANI", price: "363565.3", num: "509"}, {
            brand: "ARMANI JEANS",
            price: "5378761.82",
            num: "7310"
        }, {brand: "BALENCIAGA", price: "253062", num: "44"}, {
            brand: "BALLY",
            price: "316320.52",
            num: "183"
        }, {brand: "BUILDING BLOCK", price: "27469", num: "11"}, {
            brand: "BURBERRY",
            price: "4778966.27",
            num: "2845"
        }, {brand: "CAMBRIDGE SATCHEL", price: "1698", num: "2"}, {
            brand: "COACH",
            price: "1011704.4",
            num: "755"
        }, {brand: "COCCINELLE", price: "717046.97", num: "479"}, {
            brand: "DUNHILL 登喜路",
            price: "63374.35",
            num: "21"
        }, {brand: "EA7", price: "429872.05", num: "470"}, {
            brand: "EMPORIO ARMANI",
            price: "56860.6",
            num: "49"
        }, {brand: "FENDI", price: "1094741.05", num: "286"}, {
            brand: "FERRAGAMO",
            price: "1817907.06",
            num: "731"
        }, {brand: "FURLA", price: "3009695.12", num: "1989"}, {
            brand: "GUCCI",
            price: "4851758.56",
            num: "1526"
        }, {brand: "GUESS", price: "14.58", num: "3"}, {
            brand: "HUGO BOSS",
            price: "2978095.21",
            num: "3455"
        }, {brand: "JIMMY CHOO", price: "40690", num: "10"}, {
            brand: "KENZO",
            price: "913930.15",
            num: "736"
        }, {brand: "LAUTEM", price: "25140", num: "5"}, {
            brand: "MCM",
            price: "775694.97",
            num: "313"
        }, {brand: "MICHAEL KORS", price: "3436217.8", num: "2156"}, {
            brand: "MINNA PARIKKA",
            price: "102419",
            num: "54"
        }, {brand: "MINNETONKA", price: "12414", num: "36"}, {
            brand: "MINNETONKA/迷你唐卡",
            price: "1027",
            num: "3"
        }, {brand: "MOSCHINO", price: "95505", num: "93"}, {
            brand: "PANDORA",
            price: "365",
            num: "1"
        }, {brand: "PLAYNOMORE", price: "194489.49", num: "128"}, {
            brand: "PRADA",
            price: "3393388.89",
            num: "1193"
        }, {brand: "SALAR", price: "259129.12", num: "127"}, {
            brand: "SANTONI",
            price: "70187.5",
            num: "34"
        }, {brand: "Stella McCartney", price: "43870", num: "10"}, {
            brand: "STUART WEITZMAN",
            price: "207927",
            num: "48"
        }, {brand: "TIMBERLAND", price: "23778", num: "104"}, {
            brand: "TOMMY  HILFIGER",
            price: "796",
            num: "4"
        }, {brand: "VALENTINO", price: "73915", num: "13"}, {brand: "ZEGNA", price: "797735.3", num: "571"}]
    }, "6x2d": function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("anjx"), r = (m.n(t), m("WEP/")), a = m.n(r), C = m("Vp57"), o = m.n(C), A = m("BNWl"), F = m.n(A),
            i = m("Drds"), S = m.n(i), c = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), L = function (u) {
                function n(u) {
                    s(this, n);
                    var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                    return m.state = {
                        data: u.data,
                        forceFit: !0,
                        width: 680,
                        height: 500,
                        plotCfg: {}
                    }, m.Chart = a()(function (u) {
                        u.legend({
                            position: "bottom",
                            dx: -150,
                            dy: 20
                        }), u.axis(!1), u.col("value", {alias: "销售金额(元)"}), u.polygon().position(t.Stat.map.region("name", S.a)).color("value", "#a7e5ff-#0164a7").label("name", {
                            label: {
                                fill: "#000",
                                shadowBlur: 5,
                                shadowColor: "#fff"
                            }
                        }).style({stroke: "#fff", lineWidth: 1}), u.render()
                    }), m
                }

                return e(n, u), c(n, [{
                    key: "render", value: function () {
                        return o.a.createElement(this.Chart, this.state)
                    }
                }]), n
            }(C.Component);
        L.propTypes = {data: F.a.array.isRequired}, n.a = L
    }, "8cvD": function (u, n) {
        u.exports = [{day: "2017/1", price: "127056", num: "66"}, {
            day: "2017/2",
            price: "3231403",
            num: "1802"
        }, {day: "2017/3", price: "6198802.13", num: "3836"}, {
            day: "2017/4",
            price: "5426161.83",
            num: "4225"
        }, {day: "2017/5", price: "5766064.63", num: "4199"}, {
            day: "2017/6",
            price: "7318091.37",
            num: "5332"
        }, {day: "2017/7", price: "3105565.81", num: "2379"}, {
            day: "2017/8",
            price: "6275134.92",
            num: "4453"
        }, {day: "2017/9", price: "2786862.17", num: "1936"}]
    }, AJSF: function (u, n) {
        u.exports = [{brand: "ARMANI JEANS", num: "1192"}, {brand: "BURBERRY", num: "1131"}, {
            brand: "HUGO BOSS",
            num: "824"
        }, {brand: "FURLA", num: "490"}, {brand: "MICHAEL KORS", num: "426"}, {
            brand: "GUCCI",
            num: "302"
        }, {brand: "PRADA", num: "227"}, {brand: "FERRAGAMO", num: "223"}, {
            brand: "KENZO",
            num: "200"
        }, {brand: "COACH", num: "170"}, {brand: "未知", num: "145"}, {brand: "APM MONACO", num: "141"}, {
            brand: "ZEGNA",
            num: "95"
        }, {brand: "COCCINELLE", num: "89"}, {brand: "MOSCHINO", num: "75"}, {
            brand: "EA7",
            num: "74"
        }, {brand: "PLAYNOMORE", num: "57"}, {brand: "MINNA PARIKKA", num: "52"}, {
            brand: "ARMANI",
            num: "50"
        }, {brand: "MCM", num: "48"}, {brand: "FENDI", num: "43"}, {brand: "TIMBERLAND", num: "35"}, {
            brand: "SALAR",
            num: "32"
        }, {brand: "BALLY", num: "22"}, {brand: "MINNETONKA", num: "19"}, {
            brand: "STUART WEITZMAN",
            num: "18"
        }, {brand: "BALENCIAGA", num: "16"}, {brand: "SANTONI", num: "13"}, {
            brand: "DUNHILL 登喜路",
            num: "7"
        }, {brand: "BUILDING BLOCK", num: "6"}, {brand: "JIMMY CHOO", num: "5"}, {
            brand: "EMPORIO ARMANI",
            num: "4"
        }, {brand: "Stella McCartney", num: "2"}, {brand: "TOMMY  HILFIGER", num: "2"}, {
            brand: "LAUTEM",
            num: "2"
        }, {brand: "VALENTINO", num: "2"}, {brand: "ALEXANDER MCQUEEN", num: "2"}, {
            brand: "CAMBRIDGE SATCHEL",
            num: "2"
        }]
    }, DVmc: function (u, n, m) {
        "use strict";
        Object.defineProperty(n, "__esModule", {value: !0});
        var s = m("Vp57"), k = m.n(s), e = m("/4rR"), t = m.n(e), r = m("XdTm"), a = m("nra0");
        m.n(a);
        t.a.render(k.a.createElement(r.a, null), document.getElementById("app"))
    }, Drds: function (u, n) {
        u.exports = {
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                properties: {id: "62", name: "甘肃", cp: [100.735, 38.7393]},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[104.35851932200904, 37.40123159456249], [104.46450768428224, 37.440247301072134], [104.68950687084538, 37.41192861571304], [104.7224247583959, 37.33932322808454], [104.62139733262075, 37.249277045199506], [104.70888553334066, 37.2150155714115], [104.76474775590418, 37.25049144112714], [104.8553882179919, 37.218193671200964], [104.92241255059872, 37.096754055055584], [105.18017459508144, 36.97213633912071], [105.32166466729058, 36.78072683457572], [105.22048221188453, 36.69295441301577], [105.26874799962047, 36.550224107356684], [105.39277143815133, 36.38439443615428], [105.44594648644119, 36.254583237926056], [105.43741987472742, 36.10668528929466], [105.35148196761867, 36.0576443552028], [105.31809899297417, 35.9332075064213], [105.43183881970577, 35.756422430750604], [105.5630969578583, 35.69999176740612], [105.72556766211795, 35.7100686709324], [105.68696536675827, 35.68128489847925], [105.72494754359423, 35.60366689750927], [105.82938561405484, 35.49364777292638], [105.93614912268384, 35.52480866129068], [106.06043094273383, 35.463856310120605], [105.91242964131493, 35.450549628162804], [105.90788211506754, 35.40440257391967], [106.11241743441701, 35.42465973645773], [106.21065433133236, 35.39515249269334], [106.31338707855087, 35.27360952376057], [106.37777591372742, 35.2606645779079], [106.464850702398, 35.33236562797137], [106.49658003064394, 35.47478587526794], [106.41327762276404, 35.54589264612869], [106.50546837756355, 35.553644111486534], [106.4292973174172, 35.69944916414764], [106.46960493422034, 35.72743195182309], [106.5948686062012, 35.72743195182309], [106.72845218342155, 35.677047431493776], [106.85511111938263, 35.73456330045596], [106.91340213380147, 35.78882355436352], [106.84322553892741, 35.882202867568225], [106.91371219306319, 35.952612006438926], [106.9447697286401, 36.07694550243298], [106.81366662011845, 36.21164012279348], [106.74493696516885, 36.206575833507856], [106.6038603050091, 36.27783763310023], [106.49658003064394, 36.26835500697797], [106.495391473138, 36.4367426621441], [106.43084760922972, 36.50232005482667], [106.48469445198737, 36.534049383971904], [106.50236779213986, 36.70651947739199], [106.60215498266632, 36.7258206237228], [106.64902550732126, 36.8341861028064], [106.57481815013756, 36.93133779590258], [106.63393598775559, 36.997897040515966], [106.64406456902458, 37.18165843428932], [106.7906706082619, 37.18966828116629], [106.93293582592759, 37.107192694687114], [107.18780398966243, 37.11706289353771], [107.28547244669602, 37.068461209017585], [107.281958449223, 36.91490469009935], [107.44287885897211, 36.8863792991653], [107.6172868178324, 36.82421255116833], [107.69547326138195, 36.82509105121099], [107.88652103072098, 36.75537954433051], [107.96548261882776, 36.66913157795992], [108.03302371627149, 36.65437795697716], [108.04170535671688, 36.59774058715834], [108.35636315343675, 36.54603831631525], [108.44126753087181, 36.46128896671243], [108.60652876219262, 36.43198843032184], [108.70368045528875, 36.35896963154323], [108.64993696531866, 36.22649709746301], [108.69975304576644, 36.1255471869531], [108.67711876821659, 36.00524445236957], [108.49309899292422, 35.88119517721566], [108.52317467657008, 35.77595612197743], [108.50999718582142, 35.700870266549515], [108.60373823423208, 35.547856349990525], [108.6172257833432, 35.39282705272626], [108.49263390493076, 35.272498481519676], [108.2767814468063, 35.26283498824415], [108.1549800963544, 35.29055939440059], [107.96408735574681, 35.2232766793752], [107.92284956295697, 35.26689158807628], [107.74167199066977, 35.318361314023434], [107.73040652873829, 35.2518537462534], [107.67046186702152, 35.22797923435422], [107.83034874889563, 34.976728420879965], [107.71004601431213, 34.951406969056364], [107.5696411477208, 34.96541128210495], [107.4968807313607, 34.92577545797096], [107.32076745015769, 34.94220856377419], [107.21085167836225, 34.89177236570208], [107.05153323816836, 35.038145860043386], [106.91484907372575, 35.08904714610895], [106.77020674014898, 35.095170803489765], [106.56458621608095, 35.07961619683002], [106.4912056820965, 35.03011017474469], [106.50081749942808, 34.92624054596442], [106.549703403889, 34.862575182098965], [106.4915157413584, 34.740954697900946], [106.3177278992232, 34.583341580049876], [106.36837080287029, 34.52021881854367], [106.49833702983, 34.52021881854367], [106.61409223816622, 34.45872386321574], [106.67362348783365, 34.384671536562195], [106.69057335757441, 34.2912922233574], [106.65600182542386, 34.2542143822879], [106.55404422366195, 34.28082774530418], [106.58742719920588, 34.137451484498456], [106.51373660685891, 34.10660065449662], [106.42433637912058, 33.8987580432491], [106.49089562373405, 33.85558238411974], [106.45875288343876, 33.82393056934029], [106.48174889529531, 33.700888984539034], [106.55947024905277, 33.59862132441461], [106.49554650276883, 33.543585924151046], [106.39265872591949, 33.61882680920988], [106.30703087807257, 33.6123672550448], [106.17060509604835, 33.56224111623459], [106.07345340385154, 33.61750906049474], [105.99294152213355, 33.61063609517964], [105.95165205339953, 33.553197740583244], [105.83243452443372, 33.49754222269539], [105.7853056173604, 33.40633331982687], [105.71797122639094, 33.388659980573635], [105.74716840999412, 33.29398875617616], [105.91273969877801, 33.233682359253436], [105.9105692893412, 33.031730862289436], [105.88648807186706, 32.97801321074107], [105.6393196957473, 32.88548655915733], [105.4985530948494, 32.90739736629541], [105.38522667836855, 32.874221096326465], [105.43721316915247, 32.74645111722529], [105.2699882339698, 32.641702989301535], [105.21304080578858, 32.66335541402114], [105.08829389864451, 32.59997427009651], [105.03181155755732, 32.63867991824361], [104.89833133312447, 32.611834011230656], [104.8409704937933, 32.63981679890611], [104.64542687415093, 32.657877712686286], [104.55840376232374, 32.68834096906048], [104.40569990412729, 32.809367174055836], [104.28885949107269, 32.8478919541503], [104.32126061378625, 32.9527175973393], [104.3775879252425, 32.95876374035433], [104.40585493375818, 33.06327932428141], [104.32823693188885, 33.14035472289217], [104.28059126177726, 33.272052109717094], [104.38291059784581, 33.32649323257658], [104.2928902533825, 33.363571071847446], [104.17465457634756, 33.49015249344279], [104.15630944172733, 33.62402029150326], [104.0930058130678, 33.668539536870156], [103.91513553267868, 33.683293157852916], [103.74512007043484, 33.67603261980952], [103.65944054574459, 33.710526638493576], [103.52275638220124, 33.714118150332354], [103.55861982644387, 33.80687734591277], [103.43630171115507, 33.76972199227612], [103.27197065582106, 33.76517446512946], [103.18417239763806, 33.822096055788364], [103.19316409734517, 33.883771878269556], [103.1421077816488, 33.96154490797116], [103.15239139164942, 34.108512682414386], [103.12009362172324, 34.16861237196338], [103.00056603439498, 34.21398427985062], [102.93059614509599, 34.295581367186315], [102.78181969642179, 34.27418732398584], [102.57480390837361, 34.13951854114768], [102.61764367071879, 34.08350128805395], [102.44060021442834, 34.059730129841626], [102.37197391226618, 33.97596263306903], [102.31936730295865, 33.9873572862098], [102.17121097190886, 33.941752835225174], [102.26422854990767, 33.82615265651987], [102.24738203295442, 33.79767894152988], [102.34313846207033, 33.72517690668886], [102.35600589355715, 33.60939585993103], [102.4818380072183, 33.540149441043894], [102.4818380072183, 33.46503774719426], [102.27874962779305, 33.37775625294876], [102.13095503104978, 33.28466116058408], [102.09938073063614, 33.2222360301686], [102.00424441914458, 33.21879954706148], [101.85278079619678, 33.122087104436304], [101.83216190025149, 33.26920990671178], [101.9232157743885, 33.40638499577091], [101.88399336140452, 33.54632477526815], [101.79536828002205, 33.605080878579685], [101.77753991113792, 33.53004669909589], [101.6133638863343, 33.51185659410652], [101.57688032356805, 33.63050568319076], [101.49559329639345, 33.70463552510944], [101.34940066920552, 33.63712026608738], [101.22821943637786, 33.67396556226092], [101.1602649268849, 33.66414704025368], [101.16553592264466, 33.75600189916827], [101.12946577372645, 33.85064728424476], [101.00895633266862, 33.88149811514589], [100.94797814307685, 33.92976390198248], [100.79170861236253, 34.15486644133318], [100.81547977057494, 34.294599514356065], [100.93526574122092, 34.38632518206148], [101.0358280781033, 34.338937893468994], [101.25602135600082, 34.30049062774032], [101.32366580623199, 34.259511217368754], [101.61165856309225, 34.19124665041258], [101.64716027212887, 34.136004544574035], [101.78038211504253, 34.06750743272184], [101.86254764225981, 34.141378893121384], [101.93055382679768, 34.132335517470125], [102.02052249621619, 34.18651825611266], [102.07653974841065, 34.26697846098722], [102.16221927310102, 34.29413442636272], [102.2123454119112, 34.35154694343669], [102.15028201670174, 34.49507823297404], [101.95923424736264, 34.55825267222306], [101.91391401631881, 34.66139883149086], [101.7933528993168, 34.631891587726585], [101.75506066321901, 34.70367015215584], [101.9232157743885, 34.78728262019672], [101.912828810701, 34.844798489158904], [102.00936038617283, 34.94213104940843], [102.06026167223843, 34.9492365587202], [102.19482710228891, 35.037603258583516], [102.26712242975628, 35.0558708770393], [102.37559126162739, 35.20369131130502], [102.31771365835863, 35.27497895021838], [102.26541710831287, 35.280560004340714], [102.28929162021205, 35.4069347194617], [102.42644087084955, 35.43530508076486], [102.53496137866472, 35.5356348745498], [102.68740685444277, 35.51462840407754], [102.72130659392417, 35.619066474538215], [102.67986209465988, 35.756835841900624], [102.70032596187366, 35.839466458010634], [102.83752689025374, 35.86075714842369], [102.97601972892738, 35.833291123786296], [102.97049034984974, 35.94338776273506], [102.99953250472129, 35.990749212905826], [102.9332833193697, 36.08606639334937], [103.04035688726054, 36.2164977083026], [102.89447431843502, 36.30941193351393], [102.81856163890848, 36.326051743992764], [102.76972741129094, 36.49756582300432], [102.69815555243673, 36.60887685788063], [102.61082238224708, 36.657194322460015], [102.61516320202014, 36.72876618131423], [102.67474612763164, 36.80162995136112], [102.46013390475588, 36.9556515573735], [102.49584232026689, 37.08910594338457], [102.55061933811197, 37.1638300645059], [102.42664757732382, 37.27806081855195], [102.24552168188006, 37.38087108013622], [102.14201378830563, 37.406657619953165], [102.03266645729116, 37.47890127237579], [102.06723799034091, 37.548302720893815], [101.99587283706177, 37.61450023030139], [101.97199832606185, 37.72038523978702], [101.93706505690687, 37.73069468820927], [101.81867435114043, 37.60400991472574], [101.78544640522745, 37.52050080037162], [101.64654015540378, 37.61186473197179], [101.29291832901771, 37.79893341674372], [101.04978071520782, 37.96372956007107], [100.63574913911145, 38.10540049943344], [100.55430708230602, 38.25208405213729], [100.4973596541247, 38.28944611314756], [100.35783328667685, 38.30704193803501], [100.14079227104645, 38.48584239441095], [100.08306969560994, 38.39450429943386], [100.15552005360757, 38.302778631728444], [100.15846561119895, 38.207435615561195], [100.00064578687352, 38.31440582886589], [99.79988284741546, 38.365720526980766], [99.55715864475559, 38.515375474798304], [99.49633548389545, 38.60110667633211], [99.0992537784391, 38.889642035551475], [99.09475792813589, 38.95777741129845], [98.96210452690241, 38.98175527598519], [98.90190148276719, 39.03557628032104], [98.78190880744546, 39.06769318309395], [98.60222985192615, 38.9475971540854], [98.44456505723156, 38.957312324204366], [98.32431399859217, 39.023251451193545], [98.26256066264443, 38.93168081311896], [98.10288048724465, 38.81460785606771], [98.02050825355303, 38.83623444326494], [97.69758222933638, 38.981031806472714], [97.6749479508872, 39.0050096711594], [97.36256391819029, 39.150427151092174], [97.13746137883953, 39.20316294981029], [97.02646040232571, 39.196212470129325], [96.96253665604178, 39.10324656807464], [96.99111372291998, 38.99679311780818], [96.97090823812471, 38.864191393418054], [96.98119184812532, 38.74430206998457], [96.94238284719063, 38.63911469248907], [96.9712182955879, 38.567258612794745], [96.94548343261437, 38.35822744404132], [96.84507612536294, 38.35641876891103], [96.51036787257925, 38.470106919698566], [96.50261640812067, 38.54901683186122], [96.31549604740468, 38.62694489209312], [96.05478844622985, 38.67882803008956], [96.00760786321234, 38.75169179923708], [95.89185265487612, 38.783653673278366], [95.7881897316708, 38.862331041444435], [95.72163048705727, 38.8747333849378], [95.5657743665937, 39.01524160431657], [95.46092288588244, 39.04660919915523], [95.30532514873664, 39.182776597861675], [95.05717492068607, 39.14745575597837], [94.91237755657892, 39.198202013312226], [94.72463707913784, 39.23683014619428], [94.63105106035817, 39.29537954393078], [94.47932905499187, 39.31783295342805], [94.11697391221622, 39.321941230103704], [93.90892459539378, 39.28563853628947], [93.72206261619681, 39.3067483595492], [93.50202436703091, 39.27191844318162], [93.40523441003995, 39.21698639570562], [93.27562991738677, 39.18871938718996], [93.14034101782369, 39.19874461477218], [93.0357479186315, 39.15208079749081], [92.93596072810516, 39.152855942947355], [92.9479496604485, 39.45247589784444], [92.7724048200264, 39.810541896791136], [92.77741743426719, 39.905523180450416], [92.91952762230193, 40.11806834577749], [92.9258838236795, 40.42290762049029], [92.94154178312675, 40.47256867130713], [93.03683312424931, 40.48985443783204], [93.28632693943672, 40.46926138030838], [93.57747195766473, 40.58796214533666], [93.66914594942597, 40.68335683924673], [93.75994144114458, 40.82332245536699], [94.01103722498789, 41.10402883576222], [94.58092492064856, 41.58521393477531], [95.05826012630376, 41.78856069571958], [95.49198042235855, 41.856024277898115], [95.77191165639778, 41.82972097414367], [95.86394738156645, 41.85501658844473], [96.03582319488447, 41.99529226292756], [96.01783979726883, 42.138720201476076], [96.04378136581732, 42.499886785846456], [96.0909102719915, 42.58690989857294], [96.36633990098284, 42.722922619141826], [97.19067973399132, 42.78706149219707], [97.84687544104878, 41.61926870388754], [97.6795988299221, 41.50232493714611], [97.6476111192577, 41.455531927756255], [97.70848595606202, 41.34941437427395], [97.95053836515336, 41.119815986418644], [98.01802778485433, 41.08999868429183], [98.2037528833888, 40.95124746409917], [98.2939282565838, 40.91665009172837], [98.32653608577169, 40.855671902136606], [98.23481041896565, 40.541685898985065], [98.24581749937812, 40.52452932456873], [98.51520674009896, 40.533546860898895], [98.64584476062714, 40.56754995406706], [98.82567874577745, 40.72655833589849], [99.1574414409697, 40.83631907806301], [99.49602542463361, 40.84288198501565], [99.66454227100894, 40.901276354020496], [99.76665490060321, 40.90985464077903], [100.01118777929253, 40.896289578201475], [100.07547326078236, 40.85900503245625], [100.17603559766468, 40.735084946712874], [100.20378584224284, 40.61695262336488], [100.14001712379127, 40.518095607926], [100.01418501192876, 40.40249542922069], [99.95661746612313, 40.27325267177338], [99.89935997868008, 40.204781399242165], [99.62702518126707, 40.06918244131654], [99.53250898560123, 40.00078868315117], [99.43086144400041, 39.87880646374728], [99.68614301978448, 39.876015936686144], [100.0434855492187, 39.72765290006129], [100.18885135320733, 39.694890042141765], [100.28662316302854, 39.62734894469807], [100.3068286478238, 39.54983429651557], [100.45498497887365, 39.495574041708636], [100.54345503062518, 39.408860989143335], [100.78953820202634, 39.407879137212376], [100.83315311072744, 39.380077215790806], [100.85196333244181, 39.16748037451967], [100.88855024619687, 39.105158595992435], [101.04854048085855, 39.00082388011796], [101.17995364774265, 39.02064179128564], [101.20636030518398, 38.93080231397556], [101.33591312099372, 38.806623846713165], [101.31043663863994, 38.768848375452166], [101.58018761636538, 38.68823314094669], [101.83107669463374, 38.68983511050192], [102.03121951736676, 38.8791775583976], [101.82549563961209, 39.06443756803935], [101.85526126489549, 39.091205959787175], [102.01519982271361, 39.120144761871245], [102.393109572149, 39.23719188140015], [102.47238121861835, 39.231972561584456], [102.59345909955778, 39.177919013251824], [102.8305505721512, 39.130221666296904], [102.96537438372081, 39.11936961551535], [103.28395958906378, 39.292976590497204], [103.46379357331472, 39.35718455672196], [103.74925418463295, 39.4248806828972], [104.02396609885636, 39.44110708312536], [104.06060469035413, 39.427386990017595], [104.05998457183051, 39.307833564267554], [104.22478071515786, 39.090689194950386], [104.17155399002456, 38.95950857206296], [104.04256961499567, 38.8740615913693], [103.97952436695596, 38.7589781757022], [103.87343265189537, 38.64268036590613], [103.79431603415765, 38.59077138948797], [103.47123497941078, 38.43589712185471], [103.44348473483262, 38.39331574192792], [103.4876680852139, 38.330322170731534], [103.52167117658354, 38.13984284127409], [103.38808760026257, 38.101989853848664], [103.38746748263816, 37.99910207789861], [103.43816206312869, 37.842393296713254], [103.67871585455305, 37.7750330673222], [103.86366580583223, 37.62643748580132], [104.10850874198485, 37.46184804894827], [104.2624528336313, 37.3903278669375], [104.35851932200904, 37.40123159456249]]]
                }
            }, {
                type: "Feature",
                properties: {id: "63", name: "青海", cp: [96.2377, 35.2652]},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[101.77753991113792, 33.53004669909589], [101.7660677427321, 33.47121308051922], [101.69108524009175, 33.42028595603202], [101.66514367064383, 33.32039541271811], [101.72694868433427, 33.26778880520919], [101.64364627465585, 33.1277715113462], [101.59196984313377, 33.12955434805468], [101.44515709832143, 33.235852768690336], [101.37425703303563, 33.17864695898996], [101.32428592295696, 33.202340602836614], [101.16414065956377, 33.12808156970863], [101.13142947758831, 32.93835154908473], [101.23194013942583, 32.857710476157564], [101.23659101756135, 32.807506822082104], [101.17080691930391, 32.68834096906048], [101.04947065594598, 32.675602728782934], [100.90219282403956, 32.63046336489239], [100.83485843307022, 32.66345876680862], [100.67471316877766, 32.68309581082303], [100.60303795803532, 32.451223659844004], [100.53120771676265, 32.40339712257915], [100.47302005423205, 32.48527842895629], [100.56092166520273, 32.5633356803973], [100.4984965347872, 32.669091497774446], [100.3994328146726, 32.75838837272519], [100.25499718577151, 32.72580638285831], [100.22316450383875, 32.63689708153504], [100.11903649264002, 32.67087433538231], [100.15862063993058, 32.78226288552375], [100.13660648000501, 32.847504381422084], [100.04689619300484, 32.93548350675843], [99.95082970642585, 32.94413930878201], [99.86024092028225, 33.02764842403559], [99.84096561057441, 32.9570067411681], [99.7692903989327, 32.92176341454987], [99.72893110618554, 32.75766490321274], [99.69854536327784, 32.744616604572656], [99.50940962095723, 32.83543793381361], [99.28937137179133, 32.88714020375744], [99.22529259587657, 32.99891632752647], [99.10064904241938, 33.07245189114187], [98.8520854023194, 33.17487457909857], [98.7729171077383, 33.30272207346488], [98.7357100772582, 33.4897649198152], [98.62786136301145, 33.615881253417086], [98.64584476062714, 33.676161811018716], [98.45794925265585, 33.84010529182575], [98.30167972194164, 33.84584137647835], [98.21181440620984, 33.939453232780465], [98.03492597865096, 33.95978790878502], [97.81907352142582, 33.86418651019926], [97.74507286981708, 33.86485830286841], [97.69567020141864, 34.00523733193728], [97.63892947791305, 33.99957876254982], [97.61024905824746, 33.93087494602193], [97.3835445502408, 33.86987091710907], [97.3905208683434, 33.61138540311384], [97.47738895143897, 33.56224111623459], [97.53929731611828, 33.45372060841933], [97.7242989442409, 33.406126614251804], [97.61567508273885, 33.32837942207263], [97.50053999202703, 33.19435659438136], [97.47645877455278, 33.12030426682844], [97.5044157247059, 33.02669241052635], [97.40028771440649, 32.957704373158236], [97.36096194863501, 32.897036241029724], [97.38416466696577, 32.77918813672312], [97.43067345641487, 32.70032990230317], [97.7157206556837, 32.544189560999484], [97.63086795509201, 32.44409231211051], [97.56229332887398, 32.48434825296948], [97.36085859584756, 32.50018707957008], [97.32628706279775, 32.423576768952785], [97.39315636577362, 32.38497447449237], [97.35977339112912, 32.260485947968135], [97.29166385290449, 32.26495595984966], [97.25440514468164, 32.20395193093691], [97.25487023267505, 32.075794379107236], [97.12407718341524, 32.009338487281354], [97.01808882024284, 32.022903550758315], [96.73304162007469, 31.96034922913364], [96.78637169799543, 31.91014557505821], [96.74854454989111, 31.82389761048637], [96.79541507364672, 31.715454617036983], [96.73738243984775, 31.679797879268705], [96.66415693639351, 31.72113902394679], [96.48323774562544, 31.753462633193948], [96.27818566323776, 31.909060370339773], [96.18263593969681, 31.871155706970285], [96.14775434828454, 31.77992096657931], [96.21291832891774, 31.735117499473034], [96.23601769356173, 31.57773692471926], [96.16728803861207, 31.548048813801728], [96.0942175638894, 31.700545966423192], [95.84885786290005, 31.714266059530956], [95.77377200657281, 31.69798798335873], [95.72504113174278, 31.7463571229828], [95.5926977879725, 31.761575832858398], [95.49709638938685, 31.741654568003867], [95.40676598476233, 31.810668442894325], [95.35431440598506, 31.954406439805354], [95.41301883335245, 32.0083307969287], [95.42526614811419, 32.094759630452614], [95.38211632740655, 32.170052192354774], [95.259074741706, 32.24407868148589], [95.06182579972085, 32.261209418379906], [94.9513415871445, 32.33722544979463], [94.93893924365113, 32.428150132722436], [94.85222619018657, 32.50010956520421], [94.75522952672128, 32.535456243710655], [94.7218465511774, 32.592868760784654], [94.582216830942, 32.67219208409742], [94.41059940004226, 32.59147349680447], [94.35675255728466, 32.614081935932575], [94.31685835163165, 32.54075307879151], [94.17826216017056, 32.52225291633897], [94.11077273957022, 32.47822459648796], [93.87740197092415, 32.495381170904295], [93.7341549013276, 32.5724565704144], [93.59716067942185, 32.56457591384728], [93.51039594911373, 32.51610342143573], [93.44259647015093, 32.5633356803973], [93.34534142516662, 32.577701727752554], [93.21852745957455, 32.659789741503346], [93.03125206922755, 32.663510444551406], [93.00593061740403, 32.73461721451278], [92.8500228209964, 32.728881129860184], [92.72729129365831, 32.760558783061384], [92.64998335195008, 32.74043081353125], [92.46580854702677, 32.769421292458674], [92.22137902202428, 32.74497833887918], [92.19610924704409, 32.86864004220416], [92.08609012156182, 32.885641587888955], [91.97684614513349, 32.84861542456224], [91.81313520742384, 32.96827220309967], [91.7203243350001, 32.98250906014505], [91.54266076018592, 33.08033254680956], [91.37646935377768, 33.271251125838745], [91.36158654158561, 33.336957708831164], [91.18919396432995, 33.336957708831164], [91.12790571457708, 33.25432709451982], [90.94993208229971, 33.23939260548431], [90.80404951437362, 33.14053559004543], [90.66033735588428, 33.155857651809214], [90.43626834530784, 33.28218069098608], [90.32320031124539, 33.28871776041629], [90.20568810372305, 33.40150157273936], [90.20320763502434, 33.500074368237534], [90.14057579993317, 33.57820913314501], [89.97510786303741, 33.6305573591348], [89.94255171069284, 33.72941437457371], [89.87723270132813, 33.82274201093509], [89.74189212402234, 33.909506741243064], [89.68106896406147, 33.983404039165066], [89.63673058494857, 34.093371486904545], [89.66990685401811, 34.1398286004096], [89.78659223834114, 34.1985330268777], [89.84555504812693, 34.369995429045815], [89.79573896677988, 34.4084168563528], [89.7910880877451, 34.55411855712569], [89.72390872640653, 34.73963694918584], [89.82524620964489, 34.84609040035167], [89.78767744305958, 34.926395574696045], [89.56267825739565, 34.956419583297134], [89.57166995620355, 35.07331167229583], [89.45482954314889, 35.21283803974367], [89.4843367860139, 35.34220998840027], [89.73010989815322, 35.44365082532536], [89.69026736934364, 35.50858226196186], [89.71507205633037, 35.642346707234736], [89.78886600056552, 35.77554271082741], [89.78876264777801, 35.82685740804294], [89.58143680226658, 35.839776516373064], [89.48464684437636, 35.88018748596369], [89.43514082229115, 35.98780365711312], [89.51467085207815, 36.053251857687144], [89.67781334810746, 36.081958115774455], [89.8667940607973, 36.06560252523636], [89.97200727671441, 36.10492829010852], [90.01376183524053, 36.25277456279585], [90.16569054618179, 36.12924205247873], [90.29245283403111, 36.11554779689331], [90.62266523561209, 36.1111294618552], [90.87500125470416, 36.00364248281434], [91.11131758004228, 36.07392243137514], [91.13576053272243, 36.14063670472012], [91.0610364116011, 36.313546047711924], [91.00672448085015, 36.50348277391089], [90.80528974782356, 36.55851817507366], [90.71046349469447, 36.63616201446533], [90.68813927640645, 36.6984837920933], [90.71237552261232, 36.82149953937221], [90.80777021742159, 36.910563870326314], [90.89112430214487, 36.939476833988664], [91.05499026858604, 36.94513540337613], [91.19136437376682, 37.00146271393311], [91.28758589087619, 37.01350332311986], [91.31631798738522, 37.118974921455475], [91.23497928336718, 37.19540436491951], [91.15167687368876, 37.323251858386556], [91.07374881435624, 37.48794464802705], [90.95721845876483, 37.519415594753895], [90.83448693232606, 37.60778229371783], [90.56897342338482, 37.73196076098034], [90.4364750508829, 37.77857290321691], [90.41006839434095, 37.84699249890471], [90.45135786307486, 37.93675446184892], [90.43926557794407, 37.99607900594131], [90.19349246580464, 38.32567129169675], [90.15091108587785, 38.43279653643103], [90.31245161325131, 38.46579193834722], [90.47822960761027, 38.53250621169232], [90.63599775599164, 38.6243093937635], [90.65351606561393, 38.67407379826719], [90.8949483579803, 38.700997218746664], [91.01246056460332, 38.69867178057822], [91.29440718024716, 38.7451288931839], [91.49160444538887, 38.81726919191965], [91.62865034413801, 38.825666612424214], [91.88062462802412, 38.87548269287197], [92.1227287130597, 38.94064667440455], [92.24856082582141, 38.9890416533496], [92.3331034689499, 39.049864814209826], [92.93596072810516, 39.152855942947355], [93.0357479186315, 39.15208079749081], [93.14034101782369, 39.19874461477218], [93.27562991738677, 39.18871938718996], [93.40523441003995, 39.21698639570562], [93.50202436703091, 39.27191844318162], [93.72206261619681, 39.3067483595492], [93.90892459539378, 39.28563853628947], [94.11697391221622, 39.321941230103704], [94.47932905499187, 39.31783295342805], [94.63105106035817, 39.29537954393078], [94.72463707913784, 39.23683014619428], [94.91237755657892, 39.198202013312226], [95.05717492068607, 39.14745575597837], [95.30532514873664, 39.182776597861675], [95.46092288588244, 39.04660919915523], [95.5657743665937, 39.01524160431657], [95.72163048705727, 38.8747333849378], [95.7881897316708, 38.862331041444435], [95.89185265487612, 38.783653673278366], [96.00760786321234, 38.75169179923708], [96.05478844622985, 38.67882803008956], [96.31549604740468, 38.62694489209312], [96.50261640812067, 38.54901683186122], [96.51036787257925, 38.470106919698566], [96.84507612536294, 38.35641876891103], [96.94548343261437, 38.35822744404132], [96.9712182955879, 38.567258612794745], [96.94238284719063, 38.63911469248907], [96.98119184812532, 38.74430206998457], [96.97090823812471, 38.864191393418054], [96.99111372291998, 38.99679311780818], [96.96253665604178, 39.10324656807464], [97.02646040232571, 39.196212470129325], [97.13746137883953, 39.20316294981029], [97.36256391819029, 39.150427151092174], [97.6749479508872, 39.0050096711594], [97.69758222933638, 38.981031806472714], [98.02050825355303, 38.83623444326494], [98.10288048724465, 38.81460785606771], [98.26256066264443, 38.93168081311896], [98.32431399859217, 39.023251451193545], [98.44456505723156, 38.957312324204366], [98.60222985192615, 38.9475971540854], [98.78190880744546, 39.06769318309395], [98.90190148276719, 39.03557628032104], [98.96210452690241, 38.98175527598519], [99.09475792813589, 38.95777741129845], [99.0992537784391, 38.889642035551475], [99.49633548389545, 38.60110667633211], [99.55715864475559, 38.515375474798304], [99.79988284741546, 38.365720526980766], [100.00064578687352, 38.31440582886589], [100.15846561119895, 38.207435615561195], [100.15552005360757, 38.302778631728444], [100.08306969560994, 38.39450429943386], [100.14079227104645, 38.48584239441095], [100.35783328667685, 38.30704193803501], [100.4973596541247, 38.28944611314756], [100.55430708230602, 38.25208405213729], [100.63574913911145, 38.10540049943344], [101.04978071520782, 37.96372956007107], [101.29291832901771, 37.79893341674372], [101.64654015540378, 37.61186473197179], [101.78544640522745, 37.52050080037162], [101.81867435114043, 37.60400991472574], [101.93706505690687, 37.73069468820927], [101.97199832606185, 37.72038523978702], [101.99587283706177, 37.61450023030139], [102.06723799034091, 37.548302720893815], [102.03266645729116, 37.47890127237579], [102.14201378830563, 37.406657619953165], [102.24552168188006, 37.38087108013622], [102.42664757732382, 37.27806081855195], [102.55061933811197, 37.1638300645059], [102.49584232026689, 37.08910594338457], [102.46013390475588, 36.9556515573735], [102.67474612763164, 36.80162995136112], [102.61516320202014, 36.72876618131423], [102.61082238224708, 36.657194322460015], [102.69815555243673, 36.60887685788063], [102.76972741129094, 36.49756582300432], [102.81856163890848, 36.326051743992764], [102.89447431843502, 36.30941193351393], [103.04035688726054, 36.2164977083026], [102.9332833193697, 36.08606639334937], [102.99953250472129, 35.990749212905826], [102.97049034984974, 35.94338776273506], [102.97601972892738, 35.833291123786296], [102.83752689025374, 35.86075714842369], [102.70032596187366, 35.839466458010634], [102.67986209465988, 35.756835841900624], [102.72130659392417, 35.619066474538215], [102.68740685444277, 35.51462840407754], [102.53496137866472, 35.5356348745498], [102.42644087084955, 35.43530508076486], [102.28929162021205, 35.4069347194617], [102.26541710831287, 35.280560004340714], [102.31771365835863, 35.27497895021838], [102.37559126162739, 35.20369131130502], [102.26712242975628, 35.0558708770393], [102.19482710228891, 35.037603258583516], [102.06026167223843, 34.9492365587202], [102.00936038617283, 34.94213104940843], [101.912828810701, 34.844798489158904], [101.9232157743885, 34.78728262019672], [101.75506066321901, 34.70367015215584], [101.7933528993168, 34.631891587726585], [101.91391401631881, 34.66139883149086], [101.95923424736264, 34.55825267222306], [102.15028201670174, 34.49507823297404], [102.2123454119112, 34.35154694343669], [102.16221927310102, 34.29413442636272], [102.07653974841065, 34.26697846098722], [102.02052249621619, 34.18651825611266], [101.93055382679768, 34.132335517470125], [101.86254764225981, 34.141378893121384], [101.78038211504253, 34.06750743272184], [101.64716027212887, 34.136004544574035], [101.61165856309225, 34.19124665041258], [101.32366580623199, 34.259511217368754], [101.25602135600082, 34.30049062774032], [101.0358280781033, 34.338937893468994], [100.93526574122092, 34.38632518206148], [100.81547977057494, 34.294599514356065], [100.79170861236253, 34.15486644133318], [100.94797814307685, 33.92976390198248], [101.00895633266862, 33.88149811514589], [101.12946577372645, 33.85064728424476], [101.16553592264466, 33.75600189916827], [101.1602649268849, 33.66414704025368], [101.22821943637786, 33.67396556226092], [101.34940066920552, 33.63712026608738], [101.49559329639345, 33.70463552510944], [101.57688032356805, 33.63050568319076], [101.6133638863343, 33.51185659410652], [101.77753991113792, 33.53004669909589]]]
                }
            }, {
                type: "Feature",
                properties: {id: "45", name: "广西", latitude: 23.7451, longitude: 108.756},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[111.99655439706777, 24.735673935703602], [111.93247562115303, 24.69828603807015], [111.93325076660963, 24.601366888970816], [112.00554609587576, 24.553075262813152], [111.99092166520265, 24.465871282933406], [112.04730065260313, 24.381457831014032], [111.97593550022319, 24.276761379034426], [111.8693270203257, 24.231828722517562], [111.90193484861433, 24.001584377716924], [111.80788374184121, 23.909238593286503], [111.77543094318358, 23.832499091459923], [111.65750532361173, 23.841697495842723], [111.61373538617912, 23.759867865409618], [111.60117801305486, 23.65801361733459], [111.47100507962082, 23.61323598954921], [111.4692997581773, 23.557916368445618], [111.39121666921389, 23.43125743338389], [111.36284630701155, 23.27302419700918], [111.36997765474493, 23.139104723004564], [111.41173221237167, 23.072390447860826], [111.351219109874, 22.908214423057203], [111.27716678322057, 22.818529975378127], [111.1814620300486, 22.748534246758155], [111.0660168800749, 22.740576076724622], [111.0798144884478, 22.692336127410286], [111.02379723535412, 22.638670151805982], [110.7545630233648, 22.580172430912924], [110.72681277878675, 22.484622708271345], [110.68226769409873, 22.48358917949706], [110.69699547665991, 22.368712470304317], [110.7745618016859, 22.283653062339013], [110.67079552569291, 22.26758169174174], [110.64237348844571, 22.183452459763274], [110.46672529523616, 22.150999661105473], [110.41411868682789, 22.19830943443283], [110.33355512916594, 22.19045461718686], [110.35546593630394, 22.100770169507783], [110.34399376789818, 21.992197983949737], [110.3773250665985, 21.903392035414143], [110.21614627533043, 21.87453074769583], [110.14235233019585, 21.897449246085856], [109.96722090092388, 21.8667276072933], [109.91724978994594, 21.68715200456144], [109.79622358584984, 21.63470042578406], [109.74594241740866, 21.648678901310305], [109.74805748798147, 21.574937241930186], [109.74146569100006, 21.47402578300013], [109.64966881600017, 21.520453192000005], [109.67701256600006, 21.623439846000068], [109.60800214900021, 21.575100002000156], [109.5608830090001, 21.6712914080001], [109.56771894600016, 21.759995835000055], [109.49268639400012, 21.698553778000175], [109.57276451900006, 21.581732489000117], [109.53077233200011, 21.491644598000065], [109.43824303500011, 21.455064195000134], [109.3155216810002, 21.459051825000117], [109.13868248800011, 21.401597398000106], [109.039805535, 21.450262762000037], [109.14258873800011, 21.51019928600006], [109.13575280000012, 21.602972723000008], [109.0667423840001, 21.636542059000035], [108.97022545700011, 21.606350002000013], [108.8694767590001, 21.6712914080001], [108.8614201180001, 21.759995835000055], [108.79306074300021, 21.712836005000085], [108.82105553500006, 21.643947658000016], [108.75155683700021, 21.650132553999995], [108.5713810560002, 21.812811591000056], [108.63550866000017, 21.884182033000016], [108.44874108200011, 21.865790106000176], [108.50513756600006, 21.787909247000087], [108.51880944100017, 21.595526434000035], [108.42001386800015, 21.556870835000083], [108.40967858200005, 21.664455471000068], [108.32154381600006, 21.709662177000112], [108.32764733200011, 21.630316473000065], [108.28378339900004, 21.544745184000178], [108.21102949300021, 21.500637111000074], [108.2525333990001, 21.595282294000086], [108.21029707100016, 21.630316473000065], [108.17636152400021, 21.575751044000086], [108.0662541020001, 21.56199778900016], [107.99122155000006, 21.485663153000147], [107.83236332200008, 21.63935211200011], [107.74482344600008, 21.65754221700014], [107.6132035730001, 21.605607402000047], [107.46101648000015, 21.59635732000011], [107.44592696200007, 21.64694854700015], [107.33357556597986, 21.612508760185534], [107.27265588400007, 21.718313701000113], [107.17235192900011, 21.715058085000123], [106.98714359500008, 21.844817607000067], [107.00936446200012, 21.927448222000038], [106.92037764500009, 21.91695790600008], [106.86477380400004, 21.968065898000077], [106.72235355700013, 22.006978251000135], [106.64819787700009, 21.995506083000123], [106.6721757410001, 22.092502747000083], [106.66292565900011, 22.22329579700002], [106.61729537000014, 22.322772929000052], [106.55533532700008, 22.33197133400006], [106.5330282178391, 22.403444518924772], [106.5687712000001, 22.57459218300012], [106.60763187700007, 22.60999054000007], [106.68018558800009, 22.579449768000075], [106.74664148000005, 22.74434926300009], [106.66747318500012, 22.867520040000045], [106.48779423100012, 22.92542348300009], [106.4579769290001, 22.888965759000087], [106.31566003400013, 22.853799947000113], [106.23401127200006, 22.863851013000115], [106.20238529400007, 22.946998393000058], [105.9992452400001, 22.975368754000073], [105.85387943500007, 22.904649556000038], [105.69032352700003, 23.043969218000086], [105.56599003100007, 23.054097799000147], [105.5351916854479, 23.09900381087715], [105.52132535803946, 23.16314776222964], [105.6188041516902, 23.28465139414658], [105.6289327329593, 23.34728323013701], [105.70169315021869, 23.359298000902086], [105.84804080613827, 23.519391588351112], [105.98301964733889, 23.46903290554411], [106.12812706890912, 23.540656440342474], [106.15215661043919, 23.750411077709003], [106.13412153508074, 23.796739000004862], [106.19375613843505, 23.869396064476774], [106.15742760619898, 23.973730781250552], [106.01516238763406, 24.059436143463216], [106.02110517786161, 24.110905870309637], [105.9105692893412, 24.08150198023219], [105.8722253764, 24.024709580782442], [105.78799279163405, 24.020652980950274], [105.64086998935846, 24.08248383216315], [105.61849409422706, 24.135322984568035], [105.52046390198745, 24.11622854291292], [105.44718672079054, 24.037602850691073], [105.28631798698547, 24.124341742577286], [105.28290734319927, 24.074060574136183], [105.16994266192427, 24.167362372075814], [105.17624718555913, 24.30991181148096], [105.11299523284364, 24.40982819321654], [104.96106652190247, 24.41641693769148], [104.75265547077339, 24.46832591410964], [104.69942874564, 24.448740546039417], [104.72872928293006, 24.364197902910817], [104.66702762202709, 24.33975495023074], [104.59917646712023, 24.40251597743037], [104.50186974529248, 24.578190009061643], [104.49463504387217, 24.698208522805146], [104.53985192302781, 24.74177175556207], [104.72934939965506, 24.631390895773194], [104.8518742214182, 24.705830796953705], [104.87673058524831, 24.755026759777195], [105.01248457190545, 24.79747894939392], [105.0480896337296, 24.895379950424342], [105.18870120589594, 25.008783881271057], [105.28941857330847, 24.93318126100644], [105.38073082896457, 24.957107448849726], [105.44439619283, 24.923621121417725], [105.50862999927503, 24.817451891091892], [105.67533816872145, 24.789675808092056], [105.78773441011492, 24.715726834226018], [105.9164604018261, 24.728723456022635], [106.02074344265574, 24.641907049770552], [106.17618615107003, 24.782234401996092], [106.19871707583235, 24.876802272706755], [106.15572228385628, 24.960363063904282], [106.3065657900791, 24.981472887164017], [106.5871171408433, 25.104359443233733], [106.66680219936197, 25.17350250933343], [106.88596194938438, 25.196963609183214], [106.90926801960336, 25.248355820764516], [106.99551598507466, 25.255383815710573], [107.0145845892074, 25.353414007950107], [106.97458702986756, 25.440437119777215], [107.07793989471031, 25.52844208443466], [107.24423465390618, 25.558595282446362], [107.3274337098978, 25.470151069116625], [107.31394616078666, 25.42379730929838], [107.40562015164863, 25.373748683954574], [107.42406863815711, 25.30310700108717], [107.49889611206592, 25.2141201853983], [107.64741417922096, 25.30638845546278], [107.67686974524253, 25.20603282325621], [107.74497928256778, 25.2262641464732], [107.77603681814463, 25.1529869652762], [107.8618713733652, 25.14595897122956], [107.96656782444549, 25.209030055892313], [108.06775027895219, 25.21313833346727], [108.12919355743674, 25.26881968797818], [108.13182905486696, 25.38643524828811], [108.29336958224036, 25.53869985601355], [108.40478396990432, 25.514877020957726], [108.49604454961627, 25.447387600357445], [108.59846723757286, 25.311323554438545], [108.5678747899895, 25.4158649758879], [108.69463707873817, 25.602003486471645], [108.76775923120357, 25.598928738570407], [108.77411543168176, 25.521930854325433], [108.94118533723349, 25.548828437282538], [109.0414376157533, 25.543350735048335], [109.02665815634882, 25.719774075513115], [108.90067101395613, 25.656547960320097], [108.87090538867272, 25.707475083908008], [108.95332929920775, 25.775713813341795], [109.08536258281691, 25.805427760882452], [109.12804731732976, 25.749410508688058], [109.18235924718147, 25.803309028288993], [109.22860965421211, 25.738351752331482], [109.3004398945854, 25.743054308209793], [109.35563032358056, 25.87596609096235], [109.39800499883162, 25.91319896076338], [109.39914188039342, 25.9985425895689], [109.45670942619901, 26.03885020637189], [109.6031604349061, 26.05267365226726], [109.67225182506158, 25.98531342197687], [109.67659264483473, 25.889066067345112], [109.77203901558812, 25.908160509000226], [109.78134077365777, 26.02376068770549], [109.83844323057059, 26.045025539696894], [109.92732669527078, 26.197083441847383], [110.06204715405289, 26.149928697251568], [110.03362511590632, 26.036498927983132], [110.13821821509856, 26.05166596101523], [110.24699710533218, 25.978207913564347], [110.34166832883028, 26.11274750429385], [110.48455366412031, 26.1715552844488], [110.53654015490423, 26.224859523947856], [110.55411014226928, 26.34123484990846], [110.68862389457703, 26.33232066546644], [110.72402225082618, 26.27431387008903], [110.87894819530297, 26.275218206754815], [110.94726443910255, 26.389888211271867], [111.12327436661869, 26.305991523290245], [111.25189700734103, 26.2797140570581], [111.23169152164638, 26.062905585424375], [111.19432946243475, 25.957511502354052], [111.27851037035731, 25.861057441247937], [111.31737104723601, 25.909013169721987], [111.44661380378395, 25.92671234829625], [111.30496870284338, 25.639158840108422], [111.31582075362485, 25.503198146976928], [111.25375735931465, 25.39912181172221], [111.16420210194548, 25.364937852300073], [111.11376590387334, 25.238640652444133], [110.99320478687144, 25.15076487899597], [110.95460249241103, 25.025346178283485], [111.03061852382575, 24.91801422797417], [111.07903934119264, 24.944240017362944], [111.12575483621669, 25.044466458360404], [111.27437625525994, 25.147664293572262], [111.31814619269264, 25.11200755490468], [111.42692508292618, 25.10619395588637], [111.46185835208126, 25.019480903321067], [111.42971561088672, 24.943413194163526], [111.47364057795025, 24.792853908780856], [111.4281653181749, 24.681026109067673], [111.51694542918818, 24.64265635770468], [111.61575076688436, 24.706967678515625], [111.6671171409433, 24.779676418931516], [111.79703169195903, 24.76042694854482], [111.92596439014443, 24.774870510265856], [111.99655439706777, 24.735673935703602]]]
                }
            }, {
                type: "Feature",
                properties: {id: "52", name: "贵州", latitude: 26.8033, longitude: 106.559},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[109.25837527859625, 28.505908922458815], [109.26385298083034, 28.322225043051304], [109.35428673734299, 28.265174262082496], [109.300129836223, 28.051466375872565], [109.36327843615089, 28.057486681365248], [109.30989668228608, 27.970308539007874], [109.30927656466173, 27.897806505066143], [109.35878258674694, 27.7607347678952], [109.41340457586051, 27.738953151966427], [109.44725263939773, 27.65001801222155], [109.41836551325781, 27.559506741343057], [109.31842329310047, 27.500621445922945], [109.27687544194805, 27.43853221319111], [109.20638878781233, 27.444759223359398], [109.0149276064239, 27.26218638799142], [108.90010257407448, 27.188805854006944], [108.89684695812059, 27.147206326011116], [108.79132368384091, 27.08312755009638], [108.87421268057074, 27.018118598194718], [108.95017703694072, 27.026903591427583], [109.0077962586904, 27.0940571152436], [109.0954911640859, 27.13444224731188], [109.15564253137774, 27.079716905410862], [109.23057335807403, 27.151986396255182], [109.43820926284718, 27.131031601727074], [109.49918745333832, 27.062482814830076], [109.50714562427117, 26.97636404146735], [109.44384199381295, 26.900993964299943], [109.51985802612694, 26.85836090752983], [109.39707482284473, 26.754672145902788], [109.29403201726376, 26.727309474952335], [109.37723107325536, 26.646151638087645], [109.40255252507893, 26.537295234387585], [109.31501264931433, 26.42572581619342], [109.29656416190653, 26.312528590921687], [109.39929691002442, 26.269947210994985], [109.45670942619901, 26.03885020637189], [109.39914188039342, 25.9985425895689], [109.39800499883162, 25.91319896076338], [109.35563032358056, 25.87596609096235], [109.3004398945854, 25.743054308209793], [109.22860965421211, 25.738351752331482], [109.18235924718147, 25.803309028288993], [109.12804731732976, 25.749410508688058], [109.08536258281691, 25.805427760882452], [108.95332929920775, 25.775713813341795], [108.87090538867272, 25.707475083908008], [108.90067101395613, 25.656547960320097], [109.02665815634882, 25.719774075513115], [109.0414376157533, 25.543350735048335], [108.94118533723349, 25.548828437282538], [108.77411543168176, 25.521930854325433], [108.76775923120357, 25.598928738570407], [108.69463707873817, 25.602003486471645], [108.5678747899895, 25.4158649758879], [108.59846723757286, 25.311323554438545], [108.49604454961627, 25.447387600357445], [108.40478396990432, 25.514877020957726], [108.29336958224036, 25.53869985601355], [108.13182905486696, 25.38643524828811], [108.12919355743674, 25.26881968797818], [108.06775027895219, 25.21313833346727], [107.96656782444549, 25.209030055892313], [107.8618713733652, 25.14595897122956], [107.77603681814463, 25.1529869652762], [107.74497928256778, 25.2262641464732], [107.67686974524253, 25.20603282325621], [107.64741417922096, 25.30638845546278], [107.49889611206592, 25.2141201853983], [107.42406863815711, 25.30310700108717], [107.40562015164863, 25.373748683954574], [107.31394616078666, 25.42379730929838], [107.3274337098978, 25.470151069116625], [107.24423465390618, 25.558595282446362], [107.07793989471031, 25.52844208443466], [106.97458702986756, 25.440437119777215], [107.0145845892074, 25.353414007950107], [106.99551598507466, 25.255383815710573], [106.90926801960336, 25.248355820764516], [106.88596194938438, 25.196963609183214], [106.66680219936197, 25.17350250933343], [106.5871171408433, 25.104359443233733], [106.3065657900791, 24.981472887164017], [106.15572228385628, 24.960363063904282], [106.19871707583235, 24.876802272706755], [106.17618615107003, 24.782234401996092], [106.02074344265574, 24.641907049770552], [105.9164604018261, 24.728723456022635], [105.78773441011492, 24.715726834226018], [105.67533816872145, 24.789675808092056], [105.50862999927503, 24.817451891091892], [105.44439619283, 24.923621121417725], [105.38073082896457, 24.957107448849726], [105.28941857330847, 24.93318126100644], [105.18870120589594, 25.008783881271057], [105.0480896337296, 24.895379950424342], [105.01248457190545, 24.79747894939392], [104.87673058524831, 24.755026759777195], [104.8518742214182, 24.705830796953705], [104.72934939965506, 24.631390895773194], [104.53985192302781, 24.74177175556207], [104.54563968272521, 24.81342112878204], [104.70051395125785, 24.998965359263906], [104.68904178285203, 25.10125885691076], [104.71973758322287, 25.210942083810124], [104.7782353050153, 25.26174001708813], [104.66888797400082, 25.296828314974732], [104.56584516841974, 25.38119009005061], [104.53504601436208, 25.508055732486042], [104.43267500234941, 25.506815497237426], [104.42244306829298, 25.579265855235008], [104.30622277196329, 25.664764512772024], [104.2995048362792, 25.760831000250477], [104.36704593282349, 25.7504957143058], [104.42058271721862, 25.856923326150564], [104.39293582632729, 25.94787384750009], [104.49897586544387, 26.030788683550924], [104.50497033071622, 26.14742239013114], [104.54517459473169, 26.270412298988447], [104.67550255689741, 26.379268704487117], [104.62651329964899, 26.49765941025359], [104.55943729019873, 26.584708360502418], [104.46621300662497, 26.613466295433142], [104.42988447528825, 26.71253001644712], [104.35851932200904, 26.647831122008625], [104.21806277857439, 26.626617946860705], [104.1533638859346, 26.65124176669417], [104.02040042543922, 26.51419586794495], [103.91580732624709, 26.517787379783726], [103.7865645687998, 26.577111924775465], [103.75783247319004, 26.629434312343648], [103.77209516775775, 26.74046112727916], [103.73736860597637, 26.736146145028528], [103.72961714061853, 26.856500556455472], [103.77829634040381, 26.88001333314878], [103.77829634040381, 26.955874334932616], [103.7008850441095, 27.052431748826137], [103.63711632655719, 27.01842865745664], [103.59644697544758, 27.076073716728644], [103.69540734277467, 27.151702175415068], [103.85932498605928, 27.315387274703], [103.9113114768432, 27.390369778242643], [103.98112633741056, 27.39951650578209], [104.17434451708573, 27.271513984482795], [104.34441165617295, 27.441193549043078], [104.44368208186262, 27.347219957535003], [104.59421552882361, 27.31378530514769], [104.78340294798767, 27.332207953234473], [104.87089114780821, 27.30975454373717], [105.08255781489117, 27.412513129377373], [105.19738284724059, 27.398638007537983], [105.29696333219198, 27.721744899807277], [105.47979454997846, 27.7838858102819], [105.63110314329538, 27.682238267781855], [105.87594608034726, 27.745206000556436], [106.03919192916413, 27.756807359272273], [106.10358076434073, 27.788071601323338], [106.24760298119259, 27.77523000735897], [106.34537479011442, 27.83494212507904], [106.29896935435215, 28.00043589949715], [106.21525353442308, 28.056091417385005], [106.19933719255738, 28.124252631553674], [106.10942020088152, 28.17471466714815], [106.00896121588738, 28.140246486885815], [105.89175906762682, 28.153889064728617], [105.86602420465334, 28.25835297271155], [105.6504818048914, 28.340027574413], [105.65575280155053, 28.441106676132136], [105.62056115087643, 28.482421983287935], [105.68319298686686, 28.58344940816366], [105.89191409725777, 28.60931346324574], [105.98441491131905, 28.753542384773226], [106.18879520103764, 28.584612128147143], [106.26868696513134, 28.556629340471687], [106.33865685443033, 28.48012238174249], [106.38242679186294, 28.572494005493894], [106.48872521429723, 28.540971381024434], [106.52221154172923, 28.672668768748736], [106.46112999935002, 28.819378159874105], [106.56241580574482, 28.76713328757114], [106.62649458165964, 28.637399603708786], [106.55760989797841, 28.53399506292186], [106.69398400315919, 28.482783718493835], [106.75000125535365, 28.50216238008977], [106.76199018769694, 28.590890815158957], [106.8479280948057, 28.65840607418093], [106.84916832915508, 28.773024400056016], [106.95949751210054, 28.790956121727618], [107.03070763574874, 28.88761688930802], [107.16108727385864, 28.881338202296206], [107.24878218015346, 28.8089911970861], [107.29699629104601, 28.808371080361013], [107.43683271685637, 28.877255764042246], [107.49967125932113, 28.993062649221912], [107.42396528536966, 29.07701101314774], [107.43047651637806, 29.182870185110943], [107.49610558500478, 29.246096300304032], [107.55723880422738, 29.186823432155677], [107.78347822513996, 29.13736908601453], [107.78983442561827, 29.040191555396007], [107.87535892067763, 28.984070950414065], [108.05457278910296, 29.0645053168669], [108.28623823360755, 29.077166042778657], [108.34055016525787, 28.919656276815715], [108.36731855700577, 28.777029323944163], [108.33031823120137, 28.689153551395208], [108.53872928322983, 28.64621043536326], [108.58244754381911, 28.601096909894437], [108.58275760308095, 28.374159857891186], [108.68130455925802, 28.33770213534521], [108.64079023598055, 28.45857330981039], [108.68952111170995, 28.484669907989797], [108.78372724811396, 28.426094671831606], [108.72848514227553, 28.242229926170126], [108.94294233641966, 28.199855251818377], [109.09497440014843, 28.20520376194412], [109.15533247301516, 28.435525621110543], [109.25837527859625, 28.505908922458815]]]
                }
            }, {
                type: "Feature",
                properties: {id: "50", name: "重庆", latitude: 30.0173, longitude: 107.73},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[109.59396202962392, 31.737597968171656], [109.6587642759506, 31.71811595288895], [109.72449669826403, 31.636079616880778], [109.73260989792846, 31.56112295176277], [109.92949710470765, 31.51872243898933], [110.10824588424015, 31.398032130778205], [110.14674482591295, 31.331111151858153], [110.17485680479768, 31.18866506613989], [110.1076257666158, 31.12233836552312], [110.13759809837347, 31.000175278965884], [110.12767622267955, 30.906408393032876], [110.06623294509433, 30.828480332801178], [109.99672814288942, 30.826232408099145], [109.8706893245527, 30.888580024148837], [109.74857791483885, 30.835353298116274], [109.63979902640398, 30.717944444280675], [109.39418094299612, 30.583740750335323], [109.28648725838025, 30.601543280797756], [109.17925866085852, 30.566790879695304], [108.96464643798276, 30.607486070126015], [108.8684249208734, 30.5513654651441], [108.73251590368596, 30.519713650364736], [108.66998742138236, 30.57384471306301], [108.57314578664875, 30.497854519170716], [108.43320600805077, 30.48728668922928], [108.38059939964262, 30.39969513572194], [108.53201134574698, 30.315488390276982], [108.52999596594111, 30.112968450733405], [108.55035648036721, 30.00925385248331], [108.53821251839304, 29.88546295794913], [108.40044315013125, 29.831073512832347], [108.44684858589352, 29.73578217170987], [108.52100426623383, 29.727152208107924], [108.61303999230176, 29.858022773532156], [108.65836022334565, 29.81701752383961], [108.69603234271847, 29.698161729180413], [108.87204227113386, 29.63896637629722], [108.87204227113386, 29.501610419185482], [108.9205664412882, 29.34898407625414], [109.01415246006798, 29.307487901045818], [109.07730105999593, 29.214134426262746], [109.20659549428666, 29.104244492889023], [109.27480838439936, 29.049260769468873], [109.24550784710942, 28.931257636430814], [109.24674808235807, 28.785530097236204], [109.28121626172111, 28.729125271414176], [109.21321007718325, 28.62879547852853], [109.28509199439998, 28.58463796656895], [109.25837527859625, 28.505908922458815], [109.15533247301516, 28.435525621110543], [109.09497440014843, 28.20520376194412], [108.94294233641966, 28.199855251818377], [108.72848514227553, 28.242229926170126], [108.78372724811396, 28.426094671831606], [108.68952111170995, 28.484669907989797], [108.64079023598055, 28.45857330981039], [108.68130455925802, 28.33770213534521], [108.58275760308095, 28.374159857891186], [108.58244754381911, 28.601096909894437], [108.53872928322983, 28.64621043536326], [108.33031823120137, 28.689153551395208], [108.36731855700577, 28.777029323944163], [108.34055016525787, 28.919656276815715], [108.28623823360755, 29.077166042778657], [108.05457278910296, 29.0645053168669], [107.87535892067763, 28.984070950414065], [107.78983442561827, 29.040191555396007], [107.78347822513996, 29.13736908601453], [107.55723880422738, 29.186823432155677], [107.49610558500478, 29.246096300304032], [107.43047651637806, 29.182870185110943], [107.42396528536966, 29.07701101314774], [107.49967125932113, 28.993062649221912], [107.43683271685637, 28.877255764042246], [107.29699629104601, 28.808371080361013], [107.24878218015346, 28.8089911970861], [107.16108727385864, 28.881338202296206], [107.03070763574874, 28.88761688930802], [106.95949751210054, 28.790956121727618], [106.84916832915508, 28.773024400056016], [106.8479280948057, 28.65840607418093], [106.76199018769694, 28.590890815158957], [106.75000125535365, 28.50216238008977], [106.69398400315919, 28.482783718493835], [106.55760989797841, 28.53399506292186], [106.62649458165964, 28.637399603708786], [106.56241580574482, 28.76713328757114], [106.46112999935002, 28.819378159874105], [106.52221154172923, 28.672668768748736], [106.48872521429723, 28.540971381024434], [106.38242679186294, 28.572494005493894], [106.29803917836534, 28.672436224751948], [106.25736982635635, 28.793850003374928], [106.26031538304852, 28.869323432430434], [106.00844445194986, 28.973399766785775], [105.87796146015324, 28.920043850443392], [105.79512413936754, 28.936528632190686], [105.74530805891976, 28.994767971564613], [105.70060794460096, 29.223694565851503], [105.70804935069691, 29.29095144335446], [105.64459069240655, 29.269660752941377], [105.50583947131452, 29.291468207291956], [105.41246015810981, 29.34394562449097], [105.40517378074532, 29.429961045965484], [105.31484337791954, 29.46959686920013], [105.29107221880787, 29.584783636755418], [105.41168501175383, 29.70317434342124], [105.54836917529724, 29.736634833330925], [105.55751590373592, 29.80391754835611], [105.70996137861476, 29.86750539785578], [105.73890018069875, 30.032637437068047], [105.55720584537346, 30.147591661525922], [105.64831139455521, 30.213918362142692], [105.65373742084529, 30.28145945868701], [105.73445600813824, 30.28711802807456], [105.79171349468203, 30.423362942046168], [105.99883263641698, 30.385122381892415], [106.12471642512287, 30.342334296390675], [106.23902469263544, 30.22024872509857], [106.30486046773638, 30.262881781868685], [106.40831668536674, 30.27192515752006], [106.44867597901322, 30.32388580988217], [106.53854129384564, 30.341119900463013], [106.61781294211352, 30.268695379987776], [106.71729007427746, 30.05927663850602], [106.77036176977981, 30.03656484569106], [107.032929722029, 30.057855536104142], [107.22873172408981, 30.238154609247744], [107.37213382421663, 30.49986989987596], [107.47760542165287, 30.60950145083129], [107.45667646734512, 30.760861720991613], [107.5075777534106, 30.821994941113672], [107.67966027230369, 30.85333669753058], [107.72151818181857, 30.889225979295446], [107.81153852718126, 30.798017076426902], [107.92951582179768, 30.872663683182395], [107.93168623303325, 30.948783067384596], [108.00677208936037, 31.038622544694675], [108.03312706905899, 31.222228908837053], [108.1940474788081, 31.330930283805543], [108.22308963367965, 31.46789866818898], [108.32318688436726, 31.49936961491582], [108.4067993506095, 31.566032213216033], [108.44963911295469, 31.6529002963116], [108.5161983575681, 31.708271593359342], [108.50069542865106, 31.790824693304927], [108.28696170491878, 31.922160345823244], [108.26778974799845, 31.972906603157185], [108.34473595629936, 32.0735464544054], [108.41920169500219, 32.10000478779068], [108.36116906120316, 32.167184150028476], [108.51836876790429, 32.19756989203688], [108.78930830313567, 32.04533112183378], [109.05590701679535, 31.940634670753468], [109.18887047729072, 31.84030487696853], [109.25258751799959, 31.744005846392668], [109.3359932795662, 31.705248521402126], [109.59396202962392, 31.737597968171656]]]
                }
            }, {
                type: "Feature",
                properties: {id: "11", name: "北京", latitude: 39.9488, longitude: 116.389},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[117.3567956886701, 40.25702627244448], [117.37204023606796, 40.20064728414488], [117.31059695758347, 40.11047191005065], [117.2390767755727, 40.0926177027448], [116.98767093336693, 40.03435252494904], [116.82938602104804, 40.03667796491612], [116.75941613174905, 40.012622585863596], [116.78143029167461, 39.889658515428124], [116.928708123581, 39.801395169251705], [116.87563642807865, 39.68646678321552], [116.79341922401795, 39.60231171281529], [116.6043868353841, 39.61117422131332], [116.4282735541812, 39.521412258369], [116.45902103139548, 39.45397451371281], [116.38662234934196, 39.44214061100038], [116.24978315616778, 39.505805975765185], [116.21040571535136, 39.57190013328453], [116.0005994002421, 39.557611599395784], [115.94540897034773, 39.57538829233576], [115.75591149282104, 39.50895823803222], [115.6184521829218, 39.60373281521724], [115.46342288565756, 39.643213608820986], [115.45071048380166, 39.77948436121436], [115.56243492982807, 39.80749298821091], [115.51091352703764, 39.83849884694425], [115.49644412599557, 39.923635769275435], [115.42709435432096, 39.96257396141917], [115.57762780218124, 40.09631256827048], [115.84500166219684, 40.160572211338476], [115.94520226387328, 40.29371653898704], [115.72816124914237, 40.53959300391395], [115.87445722911781, 40.610234686781325], [115.99470828685787, 40.595971992213634], [116.13035892072759, 40.6579837105798], [116.2073051290285, 40.750381170954256], [116.29143436100694, 40.739890855378704], [116.45886600086527, 40.79156728780015], [116.35582319528424, 40.901586412382954], [116.4540600930988, 40.90282664583302], [116.49720991380639, 40.953211167961], [116.65265262312005, 41.03101003698359], [116.67580366370811, 40.94013703089922], [116.91041466670345, 40.749218450970744], [117.05800255697238, 40.677207343444195], [117.19918256991957, 40.690023098087465], [117.30346561074936, 40.661807766415336], [117.48593509332994, 40.66193695672516], [117.41177941298957, 40.59736725529453], [117.24310753788257, 40.570159613974965], [117.18414472899599, 40.49727000640564], [117.2379398949102, 40.45019277617561], [117.25054894397852, 40.3378223741033], [117.3567956886701, 40.25702627244448]]]
                }
            }, {
                type: "Feature",
                properties: {id: "35", name: "福建", latitude: 26.408, longitude: 118.178},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[117.43482506600012, 23.750718492000075], [117.52666076500006, 23.74010690500002], [117.47983528300003, 23.662678062000126], [117.42114944500011, 23.64646441900011], [117.43155864400003, 23.58263023500011], [117.32048272800009, 23.574015926000115], [117.39372806100019, 23.679185289000102], [117.34245853000007, 23.699652411000088], [117.37273196700008, 23.76675039300015], [117.43482506600012, 23.750718492000075]]], [[[118.13786868600019, 24.536525783000016], [118.18930097699999, 24.50307851800015], [118.15381920700011, 24.43707916900003], [118.07203209700006, 24.467474677], [118.09253991000017, 24.556219794000143], [118.13786868600019, 24.536525783000016]]], [[[119.30258222700016, 25.42291901200015], [119.28150475400005, 25.482896225999994], [119.33171634200019, 25.57127513200014], [119.33497155000023, 25.437974350999994], [119.30258222700016, 25.42291901200015]]], [[[119.78028405000012, 25.617417710000055], [119.87452233200011, 25.5567894550001], [119.79883873800011, 25.515814520000063], [119.75733483200011, 25.40493398600013], [119.69304446700019, 25.43764883000007], [119.77833092500023, 25.522040106000034], [119.71615644600016, 25.536322333000115], [119.69874108200005, 25.612616278000175], [119.78174889400017, 25.659165756999997], [119.78028405000012, 25.617417710000055]]], [[[119.39063561300006, 25.966986395000063], [119.25757897200018, 26.001450914000188], [119.21778405000006, 26.05902741100006], [119.40121504000004, 25.996039130000142], [119.39063561300006, 25.966986395000063]]], [[[119.63884524800002, 26.070502020000006], [119.55396569100017, 26.095648505], [119.59937584700018, 26.128119208000086], [119.63884524800002, 26.070502020000006]]], [[[120.41920006600006, 27.20636627800006], [120.30307050900004, 27.24225495000003], [120.31185957099999, 27.317694403000175], [120.25660241000017, 27.256903387000065], [120.3472599620001, 27.242580471000068], [120.42172285200016, 27.153143622000144], [120.35792076900012, 27.098374742000132], [120.24366295700005, 27.132717190000093], [120.27833092500023, 27.063788153000033], [120.21631920700011, 27.037095445000105], [120.25521894599999, 26.997056381999997], [120.2373966810002, 26.927232164000046], [120.12574303500006, 26.92731354400003], [120.02515709700006, 26.860174872000144], [120.12818444100017, 26.79694245000009], [120.09774824300021, 26.758490302], [120.12069746200021, 26.646063544000114], [119.95997155000012, 26.611273505000057], [119.88428795700023, 26.523179429000052], [119.83570397200018, 26.53139883000013], [119.86850019599999, 26.61005280200014], [119.984141472, 26.653509833], [120.07764733200011, 26.785589911000116], [119.9251408210001, 26.792181708], [119.93563886800004, 26.759019273000078], [119.85694420700005, 26.653509833], [119.79175866000006, 26.687689520000063], [119.79835045700023, 26.841376044000114], [119.75619550899998, 26.737738348000008], [119.7120060560002, 26.807928778000147], [119.6961369150001, 26.708197333000115], [119.60604902400021, 26.79694245000009], [119.55209394600004, 26.74909088700015], [119.59986412900017, 26.646063544000114], [119.54110761800004, 26.65631745000003], [119.59986412900017, 26.57037995000003], [119.67505944100006, 26.618801174000012], [119.78492272200006, 26.577826239000004], [119.76172936300011, 26.550726630000085], [119.81885826900006, 26.45319245000006], [119.76197350400005, 26.407456773000135], [119.65365644600004, 26.498032945000162], [119.57309004000015, 26.437811591000113], [119.65430748800017, 26.429022528000033], [119.68189537900017, 26.317124742000132], [119.74708092500006, 26.327622789000102], [119.8257755870001, 26.426947333000115], [119.88013756600012, 26.363104559000092], [119.94996178500006, 26.36493561400006], [119.87745201900012, 26.313381252000013], [119.67359459700018, 26.280503648000106], [119.45850670700005, 25.982489325000174], [119.21583092500023, 26.10008372600005], [119.24683678500006, 25.967230536000002], [119.34669030000023, 25.94037506700012], [119.44092858200023, 25.963812567000005], [119.50424238399998, 26.035956122000087], [119.56641686300011, 26.050238348000008], [119.70240319100006, 25.985052802], [119.58301842500023, 25.820217190000122], [119.62086022200012, 25.76032135600009], [119.57992597700016, 25.679999091000084], [119.44906660200016, 25.68716054900004], [119.48104902400004, 25.58047109600001], [119.55844160200004, 25.563788153000175], [119.64600670700005, 25.39256419500019], [119.59986412900017, 25.371161200000145], [119.57626386800021, 25.462836005000142], [119.54444420700005, 25.377183335000055], [119.48324629000015, 25.371161200000145], [119.50489342500023, 25.474920966000056], [119.36597741000017, 25.520697333000143], [119.35629316500004, 25.600043036000088], [119.27784264400006, 25.57046133000013], [119.23780358200023, 25.481756903000147], [119.10254967500023, 25.420314846000068], [119.17318769599999, 25.325140692000005], [119.27784264400006, 25.330226955000043], [119.34424889400012, 25.242377020000063], [119.28882897200006, 25.18911367400007], [119.10179393100023, 25.19663441900009], [119.13379967500012, 25.124741928999995], [119.03402754000004, 25.158677476000108], [119.05738366, 25.225002346000068], [118.9693302740001, 25.22638580900015], [118.98365319100017, 25.283026434000064], [118.86483808700004, 25.227972723000093], [118.963145379, 25.193670966000028], [118.94727623800006, 25.11318594000015], [118.857676629, 25.098049221000153], [118.87794030000012, 25.040716864000117], [118.97999108200011, 25.01178620000003], [118.99732506600012, 24.953436591000028], [118.91163170700023, 24.953436591000028], [118.909922722, 24.90717194200012], [118.71607506600017, 24.843573309000064], [118.729746941, 24.885199286000116], [118.66773522200018, 24.953436591000028], [118.61988366000006, 24.843573309000064], [118.63795006600017, 24.772121486000074], [118.69752037900017, 24.801662502000127], [118.763926629, 24.75169505400011], [118.68539472699999, 24.666489976000136], [118.65406334700006, 24.69342682500009], [118.6465763680001, 24.56842682500003], [118.553965691, 24.518052475999994], [118.57113691500004, 24.568996486000103], [118.42807050900015, 24.63133372600008], [118.35165449300021, 24.582342841000113], [118.2840275400001, 24.597805080000043], [118.21900475400005, 24.54144928600006], [118.18116295700005, 24.576117255000142], [118.16049238400015, 24.69342682500009], [118.11036217500018, 24.584051825000117], [117.97486412900005, 24.55272044500005], [118.05811608200017, 24.515855209999998], [117.99610436300011, 24.446966864000117], [117.86768639400012, 24.489569403000175], [117.791270379, 24.46063873900006], [117.90731855600004, 24.3849144550001], [118.04745527400021, 24.399074611000017], [118.024180535, 24.32355377800009], [118.09058678500006, 24.341457424000154], [118.12647545700023, 24.262030341000028], [118.07178795700011, 24.254584052000055], [117.96786543100004, 24.159816799000097], [117.94361412900005, 24.21259186400006], [117.8936466810002, 24.028021552], [117.79135175899998, 24.00153229400003], [117.7632755870001, 24.070257880000113], [117.708750847, 24.03546784100014], [117.64863267600006, 23.909233582000113], [117.6392694800002, 23.794102300000176], [117.59166878800025, 23.73706444600016], [117.58236738400015, 23.889308986000074], [117.41659589900021, 23.94684479400017], [117.49959628800005, 23.874072232000074], [117.46347744400006, 23.788287134000072], [117.29257246200021, 23.789496161000002], [117.23896432000001, 23.605472819000155], [117.17462224764049, 23.616347697733218], [117.0365051618837, 23.738267117533482], [116.92483239090225, 24.077600409131563], [116.96767215414653, 24.185113227493517], [116.8824060406063, 24.393989365716763], [116.7485640809675, 24.55149913257891], [116.7677877138319, 24.666892604809888], [116.65993899868582, 24.669605618404645], [116.52955936057603, 24.615371202019404], [116.37210127235576, 24.84130056456935], [116.27469119684136, 24.807374985767055], [116.25634606312045, 24.83982778622341], [116.1147009621798, 24.846054796391698], [116.03568769722935, 24.893571275294207], [115.88753136617956, 24.916773992725595], [115.87523237457432, 25.07100230611151], [115.84283125186079, 25.194741522902945], [115.90799523339331, 25.238278917238233], [115.9787402690481, 25.350830186463924], [116.00018598819281, 25.497177843282884], [116.04452436730577, 25.574589137778418], [116.02757449756501, 25.63636831304717], [116.16110639884118, 25.780364692376622], [116.13516483029261, 25.86632843700768], [116.18017500207469, 25.907230333013416], [116.32321536699561, 25.955108547121682], [116.39726769364904, 26.06145864550004], [116.4192818535746, 26.15287425394365], [116.39897301599188, 26.28754303588235], [116.52170454332995, 26.412470811079075], [116.59446495969007, 26.39508169176662], [116.61947635315124, 26.49207835523191], [116.5423234401745, 26.562797553364405], [116.50496137916429, 26.689301458795256], [116.54526899596738, 26.86786937117455], [116.6697058447489, 26.98690603298705], [116.92343712782116, 27.021012478043446], [117.0401225121442, 27.109534207537678], [117.15381066293173, 27.276397407514366], [117.10110070173596, 27.346651515854774], [117.1246651552726, 27.429928087111634], [117.11226281088005, 27.567619941007507], [117.22512413936755, 27.723450222150007], [117.28713585773363, 27.77262034835033], [117.28424197788496, 27.857033800269733], [117.34966434093653, 27.86597382313336], [117.50893110608564, 27.970825303844663], [117.60525597508314, 27.866154690286663], [117.74555748888696, 27.81328970035935], [117.8234338731746, 27.937261461147457], [117.94647545797596, 27.973202419755864], [118.06130049032524, 27.979016017875026], [118.1307019388434, 28.04053681072523], [118.36779340963813, 28.09970632608608], [118.34887983603556, 28.219802354195252], [118.44644494028168, 28.288687038775763], [118.49889651905917, 28.262435410965523], [118.73521284439724, 28.325971585420334], [118.7960876812015, 28.239930325524185], [118.76642540870554, 28.1905793321704], [118.74813195182819, 27.97320241975585], [118.81980716436922, 27.90995046614104], [118.88946699440638, 27.722158310957255], [118.91907759005866, 27.47682444928894], [119.11694664876885, 27.46111481389765], [119.18583133334928, 27.41992869705176], [119.26561974465542, 27.424114488093167], [119.39036665269887, 27.51261037916568], [119.4673128601004, 27.525296943499157], [119.55144209207876, 27.674564316789727], [119.61583092725553, 27.66557261798188], [119.61040490096539, 27.609968776937578], [119.686575962011, 27.51129263045057], [119.69339725138198, 27.41104035103139], [119.77008507726444, 27.31587820111814], [119.93069542865126, 27.3247923855602], [119.97865115802446, 27.357942817107315], [120.06443403460295, 27.34362844479692], [120.14773644428149, 27.400214137772295], [120.24891889878828, 27.41016185188802], [120.3440035343356, 27.37964691777104], [120.40580854712678, 27.29686127382878], [120.41920006600006, 27.20636627800006]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "34", name: "安徽", latitude: 31.9537, longitude: 117.253},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[119.6297835625613, 31.132880357042907], [119.57495486877218, 30.847058010518765], [119.50054080601328, 30.769388332705333], [119.44312828983865, 30.6392154001705], [119.38354536332778, 30.685259100726867], [119.27228600529492, 30.608261217381312], [119.24153852808064, 30.550848700307228], [119.32081017544917, 30.51816335675359], [119.392382033404, 30.36843089457021], [119.33109378455049, 30.372384142514193], [119.24732628777792, 30.304584661752727], [119.05751875188886, 30.31187103911718], [118.9346838726625, 30.352126979976106], [118.88109541232333, 30.324350897875675], [118.90946577362647, 30.22221242896036], [118.85272505102029, 30.159270535506806], [118.89396284381024, 29.982588813522966], [118.82011722183219, 29.88003693345776], [118.7413106633563, 29.828360501036386], [118.72374067599137, 29.73020111668815], [118.64808637888322, 29.658293361949163], [118.55692915285803, 29.625220444767805], [118.46959598176909, 29.52393463837285], [118.3732194359282, 29.4528278675121], [118.17473025869447, 29.407869370774904], [118.1196431815876, 29.446781725396335], [118.11344201074019, 29.518663641713687], [117.98590457563563, 29.572019558056184], [117.89857140544603, 29.54897186935625], [117.70767866393919, 29.555638129096366], [117.64918094304613, 29.60586762069414], [117.5273795916948, 29.622352403340727], [117.40216759655738, 29.773066718354357], [117.40630171075537, 29.8311768665192], [117.22853478405295, 29.84727407553808], [117.19236128144792, 29.9264682067423], [117.1251819192102, 29.910551865775943], [117.06709761036643, 29.84058197737633], [117.10668175675767, 29.78637339941281], [117.0790865418104, 29.710202338367168], [116.95506310417892, 29.6539008653327], [116.88834882993456, 29.56052155212791], [116.72468956906835, 29.5528476020352], [116.64846683207861, 29.62741669442491], [116.67497684140807, 29.70800609050866], [116.79791507432122, 29.755935981460368], [116.88679853722277, 29.920422065525912], [116.79140384331271, 30.02201793118263], [116.65048221188454, 30.0506725124265], [116.4925073588276, 29.88471365001493], [116.38951622919058, 29.876057847991262], [116.23619225516842, 29.78133494675035], [116.14725711542354, 29.788776352846384], [116.12555301296123, 29.904686590813526], [116.07806237158115, 29.9687136907842], [116.08085289864232, 30.046796779747638], [116.04049360589516, 30.221437283503775], [115.91202599480386, 30.315591742165196], [115.87678266818557, 30.38979909934892], [115.9460290870727, 30.445868028386798], [115.88050337123354, 30.578418076832747], [115.83306440579776, 30.594050197858365], [115.76784874922032, 30.68815298147493], [115.77529015531644, 30.75481557887585], [115.86220991435607, 30.784839586577647], [115.85864424003955, 30.860958970779876], [116.0359977555919, 30.988883979512053], [116.03537763886692, 31.030948595501343], [115.94644249912204, 31.03404918092494], [115.87693769691714, 31.129366360469135], [115.76836551315785, 31.143551541570417], [115.6687333522624, 31.21721629549566], [115.59555952385296, 31.161741644761065], [115.54998091039067, 31.182696438389883], [115.4366028179657, 31.32622772882661], [115.38037886019617, 31.35051565187581], [115.37402265791923, 31.417539985382007], [115.38973229420992, 31.511746120886755], [115.53153242388225, 31.73638357224408], [115.6629455907663, 31.78395172798983], [115.90132897275384, 31.794493720408838], [115.92814904224451, 32.02458303557859], [115.91481652186502, 32.250021470814175], [115.86065962074491, 32.43200002697969], [115.87089155480135, 32.53243317355211], [115.79006961472095, 32.470705675126794], [115.69384809761158, 32.49181549748724], [115.64661583865, 32.40244110817062], [115.56476036979518, 32.40244110817062], [115.45691165644769, 32.50739594256871], [115.36673628055485, 32.55951162456185], [115.1993046406966, 32.59147349680447], [115.18473188686698, 32.859054063294394], [114.92521284409753, 32.95824697551754], [114.87984093621014, 32.99341278687055], [114.88655887279367, 33.08340729381155], [114.96918948800442, 33.12374074993568], [115.1428222996094, 33.0842599554326], [115.28575931174288, 33.14823537945912], [115.34534223825375, 33.25060639147176], [115.3156799657578, 33.373983873057256], [115.34208662319912, 33.50074616090657], [115.44259728413732, 33.548081773555], [115.63473025909417, 33.59182587346527], [115.57354536302813, 33.750188300149915], [115.62992435132782, 33.83876170468892], [115.56134972510972, 33.898137926524015], [115.58615441299571, 33.97957998332953], [115.65364383269673, 34.04841299106664], [115.73296715690867, 34.06556956638235], [115.84112593041732, 34.006916815858375], [115.96137698815744, 34.000147203330755], [115.97067874622718, 33.90480418626424], [116.07961266519226, 33.778351955878094], [116.18203535404831, 33.71832977979548], [116.42067711755487, 33.79083181373721], [116.44532677581003, 33.845014553279015], [116.64118045471412, 33.95322500273164], [116.54294355689962, 34.12091502500846], [116.57508629809416, 34.19212514955598], [116.55209028533835, 34.28684804899822], [116.40098839669713, 34.2750141462858], [116.15671390222474, 34.447303372552625], [116.15128787593477, 34.566727607093384], [116.26688805463999, 34.57670115783219], [116.37721723758551, 34.63953970029695], [116.41990197209824, 34.64264028572062], [116.62485070169856, 34.485001329447755], [116.76954471211877, 34.45182506037821], [116.80225589409415, 34.40007111269172], [116.9494820500565, 34.38929657627604], [116.96953250522085, 34.27540171991339], [117.01950361529953, 34.237574570909686], [117.03392134039751, 34.1555382349016], [117.15944339389756, 34.09117523904604], [117.3212939796334, 34.07885040901921], [117.39172895692582, 34.031256414851725], [117.50345340385155, 34.04975657820356], [117.57238976437611, 33.9904578725328], [117.62385949122245, 34.008260402995205], [117.68752485598725, 33.88759593410509], [117.74555748888696, 33.88227326150181], [117.72690229680347, 33.72791575780596], [117.92554650276881, 33.73396189992168], [118.12367394389727, 33.76600128832884], [118.17674564029903, 33.69262075524367], [118.12150353356122, 33.611256211904646], [118.11282189311584, 33.47948130981459], [118.06331587103062, 33.489015610981625], [117.93185102730297, 33.235129299177856], [117.99644656805464, 33.167820745730836], [118.08073082876473, 33.14955312817435], [118.21803510993232, 33.17991303176103], [118.2484208519408, 33.01341156699024], [118.29885705001274, 32.96305288328402], [118.23901574108356, 32.92370127999007], [118.29968387321216, 32.77740530001451], [118.39910932763334, 32.73089651146488], [118.72017500167505, 32.73213674581416], [118.74823530461566, 32.83853852013658], [118.79774132670087, 32.86507436788773], [118.85737593005518, 32.97230296540948], [118.99297488798058, 32.96204519293134], [119.00894290579038, 32.909541938209856], [119.15653079605931, 32.81825552007618], [119.19937055930387, 32.59372142240568], [119.0805147637453, 32.44608185529337], [118.89132734637991, 32.59568512626751], [118.75867394424708, 32.61266083443003], [118.55181318582981, 32.57444611269787], [118.61180952438997, 32.47768199322945], [118.66787845342785, 32.453213202127486], [118.68405317591333, 32.33924083139925], [118.65036014200689, 32.237877508839944], [118.51439944887551, 32.19976613989539], [118.4990515477906, 32.13767690716347], [118.38314131072283, 32.05396108723444], [118.40283003068132, 32.00324066832222], [118.35198042235854, 31.946680812869275], [118.48106815017496, 31.858701687532857], [118.47688235913353, 31.790230414102354], [118.68436323517514, 31.700856024785807], [118.66787845342785, 31.65421804502678], [118.86047651637804, 31.627372138013826], [118.88094038269242, 31.52244314203739], [118.82724856956577, 31.397541205262428], [118.75102583167683, 31.357957057971845], [118.755728387555, 31.28080414499533], [118.81608646042179, 31.226337185512705], [119.07472700404804, 31.238842881793545], [119.16288699833626, 31.287444566313667], [119.23606082584644, 31.264887804028888], [119.34892215433393, 31.285816759235985], [119.36277143775158, 31.192359930766145], [119.6297835625613, 31.132880357042907]]]
                }
            }, {
                type: "Feature",
                properties: {id: "44", name: "广东", latitude: 23.7924, longitude: 113.72},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[110.60954837300002, 20.897284247000115], [110.54753665500019, 20.917710678999995], [110.58961022200006, 20.959377346000124], [110.60954837300002, 20.897284247000115]]], [[[110.38982181100019, 21.09589264500015], [110.40821373800011, 21.048244533000073], [110.52637780000006, 21.08209870000006], [110.52076256600017, 20.972357489000146], [110.44141686300006, 21.00584544500019], [110.26661217500012, 20.972642320000162], [110.28736412900011, 21.07444896000011], [110.38982181100019, 21.09589264500015]]], [[[110.47917728000019, 21.184637762000122], [110.616953972, 21.198919989000004], [110.56519616000011, 21.112616278000175], [110.417735222, 21.178452867000047], [110.47917728000019, 21.184637762000122]]], [[[111.93848717500006, 21.65257396000011], [111.98145592500006, 21.612046617000104], [111.82243899800002, 21.56199778900016], [111.83529707100016, 21.643947658000016], [111.93848717500006, 21.65257396000011]]], [[[112.62378991000017, 21.633286850999994], [112.51823978000013, 21.616766669000114], [112.55591881600017, 21.67812734600001], [112.64535566499998, 21.712836005000085], [112.62378991000017, 21.633286850999994]]], [[[112.86255944100006, 21.769435940000065], [112.79753665500019, 21.705877997000087], [112.79965253999998, 21.57908763200011], [112.71558678500006, 21.68024323100012], [112.7775171230002, 21.772650458000115], [112.86255944100006, 21.769435940000065]]], [[[113.24911543100009, 22.03835683800004], [113.18002363400015, 21.97077057500009], [113.19239342500012, 22.03375885600009], [113.24911543100009, 22.03835683800004]]], [[[113.39356530000023, 22.071600653000147], [113.40577233200011, 22.007025458], [113.30941816500004, 22.02411530200014], [113.39356530000023, 22.071600653000147]]], [[[113.36475670700011, 22.15790436400009], [113.28907311300023, 22.06850820500007], [113.27173912900005, 22.120021877000127], [113.36475670700011, 22.15790436400009]]], [[[113.64183151700016, 22.601623679000014], [113.60260957400024, 22.611521289000123], [113.47653944900011, 22.73126768100009], [113.55950467400012, 22.73499972200007], [113.63568652400014, 22.656474951000106], [113.64183151700016, 22.601623679000014]]], [[[113.48780358200023, 22.892808334999998], [113.57300866, 22.830064195000105], [113.602793816, 22.76264069200012], [113.54460696700019, 22.768784898000106], [113.48080488400015, 22.84931061400006], [113.40211022200018, 22.88287995000009], [113.48780358200023, 22.892808334999998]]], [[[117.12256920700005, 23.465521552000055], [117.12878132000017, 23.39936918400018], [116.94298929100009, 23.43006217900016], [117.06299889400023, 23.478461005000057], [117.12256920700005, 23.465521552000055]]], [[[113.9275476417103, 25.44811106987001], [114.01209028483873, 25.435114448073307], [114.02604292194323, 25.267656968893945], [114.11497806168813, 25.308429673690483], [114.27884402902868, 25.29181570073399], [114.38436730420773, 25.335301419125244], [114.42922244725816, 25.385970160294676], [114.56931725458753, 25.40687327708008], [114.58047936373163, 25.360054430167793], [114.70693159411769, 25.289567776032044], [114.68305708221851, 25.16345144332942], [114.73070275322945, 25.12942251173952], [114.54823326974952, 25.054465847520817], [114.41351281096738, 24.97969005045549], [114.38359215695243, 24.884682929273794], [114.30163333531013, 24.758644110937], [114.16913496280822, 24.66957977998284], [114.2480965518144, 24.644671739309302], [114.42488162568642, 24.499590156160835], [114.49810713093933, 24.555839952351903], [114.64192264221623, 24.58526967995178], [114.71158247315265, 24.554548041159137], [114.7404695983933, 24.625241400869953], [114.86268436089449, 24.587827663915533], [114.9446431816375, 24.669967352711097], [115.04696251770599, 24.706657620153038], [115.13910159656143, 24.684152532913032], [115.23966393434304, 24.746112576234353], [115.42058312421182, 24.78455984106384], [115.5411442403144, 24.68547028252752], [115.59917687411334, 24.60906667748516], [115.70578535401086, 24.545711371082916], [115.7970459328235, 24.564134019169614], [115.74909020434936, 24.747740383312035], [115.75839196241913, 24.829130764173442], [115.88753136617956, 24.916773992725595], [116.03568769722935, 24.893571275294207], [116.1147009621798, 24.846054796391698], [116.25634606312045, 24.83982778622341], [116.27469119684136, 24.807374985767055], [116.37210127235576, 24.84130056456935], [116.52955936057603, 24.615371202019404], [116.65993899868582, 24.669605618404645], [116.7677877138319, 24.666892604809888], [116.7485640809675, 24.55149913257891], [116.8824060406063, 24.393989365716763], [116.96767215414653, 24.185113227493517], [116.92483239090225, 24.077600409131563], [117.0365051618837, 23.738267117533482], [117.17462224764049, 23.616347697733218], [117.08422775799997, 23.550605513000065], [117.06841298800012, 23.651272715000133], [116.95070523000007, 23.61088329500008], [116.90894616, 23.654608466000113], [116.85499108200011, 23.52488841400013], [116.86662820400025, 23.450232931000116], [116.773224451, 23.349432372000095], [116.65784363400016, 23.354452091000113], [116.521739129, 23.411200262000037], [116.5879826180001, 23.316107489000146], [116.74863483000004, 23.32628833300005], [116.78394616000006, 23.212388414000046], [116.71509850400017, 23.24380117400007], [116.64675495900005, 23.16299138300006], [116.61151014100002, 23.238729609000032], [116.53364811400004, 23.109134538000163], [116.56325009500009, 23.018773721000017], [116.49468791299998, 22.939352413000123], [116.37960727900006, 22.92898441300015], [116.29848707000022, 22.963246737000148], [116.09568990500006, 22.825900457000145], [116.1237210400001, 22.894729239000142], [116.04210490800003, 22.93291828600003], [116.07617780700016, 22.867871480000147], [115.8259561150002, 22.746643521000166], [115.80990644600016, 22.808335679000052], [115.68246504000004, 22.88816966400016], [115.53296959700006, 22.862046617000104], [115.59131920700023, 22.847479559000092], [115.52393639400012, 22.741766669000143], [115.57521894800007, 22.668335972000037], [115.46481812900001, 22.701034142000125], [115.37350802300003, 22.694177267000057], [115.33847089900016, 22.733099677000055], [115.42413342800015, 22.761993113000088], [115.23339092700004, 22.78820850700005], [115.30304042100013, 22.838613734000162], [115.31714928500017, 22.904527084999998], [115.24561608200023, 22.8353539080001], [115.06547548, 22.795984798000077], [115.02890347400015, 22.70837658400002], [114.96662940100018, 22.67648694400016], [114.88021450300019, 22.559112545000076], [114.86581619100016, 22.60174461100017], [114.754145298, 22.589714066000127], [114.75254524100015, 22.749661867000057], [114.7847599620001, 22.815863348000008], [114.56332441500004, 22.73273346600014], [114.49957584500007, 22.65311388700009], [114.58253014400006, 22.655259507000082], [114.54322350400017, 22.569403387000037], [114.61768639400023, 22.514146226000136], [114.51581621400007, 22.45264280300013], [114.4795841810002, 22.546210028000118], [114.39559980600004, 22.61351146000014], [114.22982832100004, 22.555812893000095], [114.08236738400015, 22.529364325000117], [113.96379642000025, 22.538112697000187], [113.89034489800022, 22.45271239900002], [113.7729335110001, 22.672447513000165], [113.74439537900005, 22.761175848000065], [113.65357506600017, 22.75873444200012], [113.61036217500018, 22.904527084999998], [113.63070722700016, 23.03489817900011], [113.53272545700023, 22.99575429900007], [113.58212324300021, 23.098456122000115], [113.72022545700023, 23.137925522999993], [113.70313561300011, 23.157782294000086], [113.49423261800015, 23.06281159100014], [113.47372480600009, 22.91819896000011], [113.35043379000004, 22.889715887000122], [113.49423261800015, 22.774847723000008], [113.4395451180001, 22.739447333], [113.59916999500004, 22.575179846000154], [113.54635483700011, 22.43758548800004], [113.61036217500018, 22.370184637000065], [113.58765470099999, 22.237882255000002], [113.48374549000019, 22.155142169000058], [113.42562910200004, 22.186224677000112], [113.35157311300017, 22.308335679000052], [113.25562584700018, 22.403876044000143], [113.16529381600017, 22.575588283000016], [113.1656193370001, 22.47874583500011], [113.227305535, 22.425279039000102], [113.40197053000023, 22.179574118000076], [113.30274498800017, 22.183294989000004], [113.23056074300004, 22.04315827000012], [113.15746661600011, 22.02469964500007], [113.11060631600006, 22.099188544000143], [113.12745201900023, 22.160956122000172], [113.08505293100015, 22.207586981000176], [113.02661394800012, 22.143212451000025], [113.02861834200021, 21.9611483610001], [112.95708123400001, 21.875653459000105], [112.87940514400023, 21.875189520000006], [112.8260197270001, 21.966131903000147], [112.64511152400004, 21.849351303999995], [112.60800214900021, 21.77509186400006], [112.55087324300004, 21.772853908000073], [112.44320722700016, 21.828436591000028], [112.42416425899998, 21.917792059000035], [112.35653730600015, 21.979722398000106], [112.40430748800006, 21.81150950700014], [112.36329186300006, 21.73334381700012], [112.24488366000017, 21.706529039000046], [112.18238366000006, 21.75299713700018], [112.1726994150001, 21.814439195000077], [112.01303144600004, 21.804388739000004], [112.03443444100017, 21.884182033000016], [111.96924889400006, 21.824042059000035], [111.890391472, 21.925116278000147], [111.90406334700006, 21.815252997000172], [112.00025475400017, 21.774318752000127], [111.88428795700011, 21.682847398000106], [111.80689537900005, 21.743312893000123], [111.695567254, 21.761419989000117], [111.77963300900015, 21.675441799000126], [111.6304630870001, 21.529852606000034], [111.47608483200011, 21.513617255000085], [111.43799889400012, 21.534084377000127], [111.29249108200005, 21.450628973000065], [111.30128014400006, 21.49933502800009], [111.08838951900012, 21.472642320000077], [110.86939537900011, 21.384711005000113], [110.79053795700005, 21.403753973000008], [110.70484459700018, 21.34853750200007], [110.63648522200018, 21.23016998900009], [110.42432701900012, 21.19147370000003], [110.41952558700021, 21.377427475999994], [110.3663029310002, 21.306097723000008], [110.40992272200006, 21.22378164300015], [110.39405358200011, 21.162543036000116], [110.26929772200018, 21.08917877800009], [110.20460045700005, 21.082220770000035], [110.15674889400012, 20.98602936400009], [110.15674889400012, 20.848863023000106], [110.3689884770001, 20.848863023000106], [110.39698326900012, 20.718491928999995], [110.34864342500012, 20.746405341000028], [110.34180748800011, 20.82151927300005], [110.30079186300006, 20.657049872000115], [110.4788517590001, 20.56769440300009], [110.53419030000006, 20.478257553999995], [110.39999433700021, 20.300767320000077], [110.28028405000012, 20.252997137000122], [110.2371525400001, 20.27496979400003], [110.1275333990001, 20.247992255000085], [110.027110222, 20.300767320000077], [109.91456139400006, 20.24848053600006], [109.93091881600017, 20.317816473000036], [109.86280358200005, 20.40631745000003], [109.89608808700015, 20.431097723000008], [109.974864129, 20.35464101800001], [110.0154728520001, 20.418402411000145], [109.93091881600017, 20.50625234600001], [109.83521569100006, 20.50625234600001], [109.802012566, 20.616278387000037], [109.745860222, 20.629787502000013], [109.786875847, 20.69114817900011], [109.77320397200018, 20.82151927300005], [109.68946373800006, 20.83539459800012], [109.66122480600009, 20.927557684000092], [109.69996178500006, 21.08299388200014], [109.6958927740001, 21.170111395000063], [109.77320397200018, 21.21539948100009], [109.76571699300021, 21.35594310100008], [109.92408287900017, 21.362779039000188], [109.94442793100004, 21.49310944200012], [109.80274498800006, 21.473334052], [109.80054772200006, 21.554592190000008], [109.74805748798147, 21.574937241930186], [109.74594241740866, 21.648678901310305], [109.79622358584984, 21.63470042578406], [109.91724978994594, 21.68715200456144], [109.96722090092388, 21.8667276072933], [110.14235233019585, 21.897449246085856], [110.21614627533043, 21.87453074769583], [110.3773250665985, 21.903392035414143], [110.34399376789818, 21.992197983949737], [110.35546593630394, 22.100770169507783], [110.33355512916594, 22.19045461718686], [110.41411868682789, 22.19830943443283], [110.46672529523616, 22.150999661105473], [110.64237348844571, 22.183452459763274], [110.67079552569291, 22.26758169174174], [110.7745618016859, 22.283653062339013], [110.69699547665991, 22.368712470304317], [110.68226769409873, 22.48358917949706], [110.72681277878675, 22.484622708271345], [110.7545630233648, 22.580172430912924], [111.02379723535412, 22.638670151805982], [111.0798144884478, 22.692336127410286], [111.0660168800749, 22.740576076724622], [111.1814620300486, 22.748534246758155], [111.27716678322057, 22.818529975378127], [111.351219109874, 22.908214423057203], [111.41173221237167, 23.072390447860826], [111.36997765474493, 23.139104723004564], [111.36284630701155, 23.27302419700918], [111.39121666921389, 23.43125743338389], [111.4692997581773, 23.557916368445618], [111.47100507962082, 23.61323598954921], [111.60117801305486, 23.65801361733459], [111.61373538617912, 23.759867865409618], [111.65750532361173, 23.841697495842723], [111.77543094318358, 23.832499091459923], [111.80788374184121, 23.909238593286503], [111.90193484861433, 24.001584377716924], [111.8693270203257, 24.231828722517562], [111.97593550022319, 24.276761379034426], [112.04730065260313, 24.381457831014032], [111.99092166520265, 24.465871282933406], [112.00554609587576, 24.553075262813152], [111.93325076660963, 24.601366888970816], [111.93247562115303, 24.69828603807015], [111.99655439706777, 24.735673935703602], [112.06636925673581, 24.796574611828873], [112.14476240406168, 24.79355154077095], [112.16476118418137, 24.911993923380834], [112.12099124584927, 24.949278469126057], [112.18274458179701, 25.152573554126263], [112.2637732283518, 25.175517890038634], [112.45838667200724, 25.164252428107062], [112.66333540160747, 25.113144436466513], [112.71408165894144, 24.999507962522472], [112.80782270735199, 24.942844754281964], [112.9888969259523, 24.963928738220716], [112.95876956636229, 25.056145331441954], [112.96905317636299, 25.18058218022344], [113.01478681765747, 25.245616970546706], [112.88910973542596, 25.24145701792699], [112.85236779203987, 25.327653307454185], [112.90807498587185, 25.320108546772076], [113.08976932209646, 25.41415965444446], [113.2174617859327, 25.505575262888073], [113.2829358258276, 25.517590032753887], [113.30867068880121, 25.46382070616059], [113.42163537007627, 25.383799749958513], [113.52343794220724, 25.385582587566347], [113.58245242703788, 25.325947984212064], [113.71386559482127, 25.360907090889512], [113.8280705104456, 25.356747138269824], [113.9275476417103, 25.44811106987001]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "54", name: "西藏", latitude: 31.4515, longitude: 88.4137},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[89.67781334810746, 36.081958115774455], [89.51467085207815, 36.053251857687144], [89.43514082229115, 35.98780365711312], [89.48464684437636, 35.88018748596369], [89.58143680226658, 35.839776516373064], [89.78876264777801, 35.82685740804294], [89.78886600056552, 35.77554271082741], [89.71507205633037, 35.642346707234736], [89.69026736934364, 35.50858226196186], [89.73010989815322, 35.44365082532536], [89.4843367860139, 35.34220998840027], [89.45482954314889, 35.21283803974367], [89.57166995620355, 35.07331167229583], [89.56267825739565, 34.956419583297134], [89.78767744305958, 34.926395574696045], [89.82524620964489, 34.84609040035167], [89.72390872640653, 34.73963694918584], [89.7910880877451, 34.55411855712569], [89.79573896677988, 34.4084168563528], [89.84555504812693, 34.369995429045815], [89.78659223834114, 34.1985330268777], [89.66990685401811, 34.1398286004096], [89.63673058494857, 34.093371486904545], [89.68106896406147, 33.983404039165066], [89.74189212402234, 33.909506741243064], [89.87723270132813, 33.82274201093509], [89.94255171069284, 33.72941437457371], [89.97510786303741, 33.6305573591348], [90.14057579993317, 33.57820913314501], [90.20320763502434, 33.500074368237534], [90.20568810372305, 33.40150157273936], [90.32320031124539, 33.28871776041629], [90.43626834530784, 33.28218069098608], [90.66033735588428, 33.155857651809214], [90.80404951437362, 33.14053559004543], [90.94993208229971, 33.23939260548431], [91.12790571457708, 33.25432709451982], [91.18919396432995, 33.336957708831164], [91.36158654158561, 33.336957708831164], [91.37646935377768, 33.271251125838745], [91.54266076018592, 33.08033254680956], [91.7203243350001, 32.98250906014505], [91.81313520742384, 32.96827220309967], [91.97684614513349, 32.84861542456224], [92.08609012156182, 32.885641587888955], [92.19610924704409, 32.86864004220416], [92.22137902202428, 32.74497833887918], [92.46580854702677, 32.769421292458674], [92.64998335195008, 32.74043081353125], [92.72729129365831, 32.760558783061384], [92.8500228209964, 32.728881129860184], [93.00593061740403, 32.73461721451278], [93.03125206922755, 32.663510444551406], [93.21852745957455, 32.659789741503346], [93.34534142516662, 32.577701727752554], [93.44259647015093, 32.5633356803973], [93.51039594911373, 32.51610342143573], [93.59716067942185, 32.56457591384728], [93.7341549013276, 32.5724565704144], [93.87740197092415, 32.495381170904295], [94.11077273957022, 32.47822459648796], [94.17826216017056, 32.52225291633897], [94.31685835163165, 32.54075307879151], [94.35675255728466, 32.614081935932575], [94.41059940004226, 32.59147349680447], [94.582216830942, 32.67219208409742], [94.7218465511774, 32.592868760784654], [94.75522952672128, 32.535456243710655], [94.85222619018657, 32.50010956520421], [94.93893924365113, 32.428150132722436], [94.9513415871445, 32.33722544979463], [95.06182579972085, 32.261209418379906], [95.259074741706, 32.24407868148589], [95.38211632740655, 32.170052192354774], [95.42526614811419, 32.094759630452614], [95.41301883335245, 32.0083307969287], [95.35431440598506, 31.954406439805354], [95.40676598476233, 31.810668442894325], [95.49709638938685, 31.741654568003867], [95.5926977879725, 31.761575832858398], [95.72504113174278, 31.7463571229828], [95.77377200657281, 31.69798798335873], [95.84885786290005, 31.714266059530956], [96.0942175638894, 31.700545966423192], [96.16728803861207, 31.548048813801728], [96.23601769356173, 31.57773692471926], [96.21291832891774, 31.735117499473034], [96.14775434828454, 31.77992096657931], [96.18263593969681, 31.871155706970285], [96.27818566323776, 31.909060370339773], [96.48323774562544, 31.753462633193948], [96.66415693639351, 31.72113902394679], [96.73738243984775, 31.679797879268705], [96.79541507364672, 31.715454617036983], [96.74854454989111, 31.82389761048637], [96.78637169799543, 31.91014557505821], [96.73304162007469, 31.96034922913364], [97.01808882024284, 32.022903550758315], [97.12407718341524, 32.009338487281354], [97.25487023267505, 32.075794379107236], [97.25440514468164, 32.20395193093691], [97.29166385290449, 32.26495595984966], [97.35977339112912, 32.260485947968135], [97.39315636577362, 32.38497447449237], [97.32628706279775, 32.423576768952785], [97.36085859584756, 32.50018707957008], [97.56229332887398, 32.48434825296948], [97.63086795509201, 32.44409231211051], [97.7157206556837, 32.544189560999484], [98.01415205307472, 32.46450450338011], [98.08055626805731, 32.40468903287254], [98.2057682640941, 32.355648097881414], [98.22018598829271, 32.252191881150424], [98.30958621603105, 32.12871104587808], [98.45298831615781, 31.984094549823624], [98.42565148272968, 31.813407294011427], [98.55871829601256, 31.677110704095668], [98.59215294839987, 31.59882090955736], [98.88495161302654, 31.354081326192244], [98.76780114071005, 31.230367946923195], [98.68269005680071, 31.315918281303652], [98.63793826743705, 31.309277859085967], [98.60378014463794, 31.16975149253733], [98.69312869733153, 31.124741318956694], [98.80304446822765, 30.990976874583083], [98.77508751807454, 30.90222260199144], [98.95430138470113, 30.747865099194996], [98.90536380429614, 30.663813381582287], [98.93275231276903, 30.490697333015504], [98.96070926292208, 30.459975694222862], [98.98675418515751, 30.144361883993753], [99.03408979690664, 30.05532339146137], [99.05631066330642, 29.91533193602001], [99.01765669110341, 29.85334605607565], [98.98675418515751, 29.650903631797206], [99.04199629099605, 29.562459418467398], [99.0625118350531, 29.30828888582343], [99.10881391802786, 29.223772081116635], [98.99016482984302, 29.201990465187862], [99.00628787638436, 29.073161118890482], [98.93244225530577, 28.986344713537733], [98.90887780176911, 28.91236990035057], [98.94561974515511, 28.842012437424017], [98.85069013923851, 28.820075791864326], [98.7850093928692, 29.000245672899467], [98.6648100119724, 28.974174913141752], [98.63871341289365, 28.878651028022517], [98.67814253055332, 28.757056383145596], [98.58920739080844, 28.670291652837506], [98.64041873613576, 28.42413096796986], [98.5758231953842, 28.317548326494006], [98.48988528827545, 28.248069362710908], [98.40999352418174, 28.250601508253055], [98.29976769402384, 28.354807033817593], [98.23015953993087, 28.20287832287633], [98.11500227621701, 28.14388835708101], [97.9910518800001, 28.21401540100004], [97.9929122320001, 28.268921611000053], [97.85907027200005, 28.37012990300005], [97.79726525900003, 28.343929952000053], [97.74000777200007, 28.382609762000044], [97.67045129400009, 28.51128407900009], [97.61360721800003, 28.481983541000147], [97.54622115100011, 28.538465881000093], [97.44534875500011, 28.382971497000142], [97.44782922400009, 28.297602031000054], [97.40753173828125, 28.243908421619295], [97.3443603515625, 28.20760859532738], [97.36907958984375, 28.154346532344004], [97.327880859375, 28.122861031898417], [97.31689453125, 28.06713326012151], [97.35809326171875, 28.064709657296667], [97.37457275390625, 28.040470623280083], [97.40753173828125, 28.011376571761453], [97.38006591796874, 27.972572275562527], [97.3773193359375, 27.955591004642553], [97.36907958984375, 27.877928333679495], [97.294921875, 27.907058371121995], [97.25372314453125, 27.88278388425912], [97.23724365234375, 27.868216579514076], [97.21527099609375, 27.856075662679814], [97.2015380859375, 27.846361950155508], [97.1685791015625, 27.819644755099446], [97.1356201171875, 27.800209937418252], [97.108154296875, 27.76376028558199], [97.1026611328125, 27.73459177166548], [97.05047607421875, 27.73459177166548], [97.01202392578125, 27.698120147680104], [96.98181152343749, 27.67136654093232], [96.954345703125, 27.666501544712574], [96.92413330078125, 27.67136654093232], [96.89117431640625, 27.685960229871625], [96.85821533203125, 27.681095883537264], [96.8170166015625, 27.695688272477106], [96.778564453125, 27.717573198352596], [96.74011230468749, 27.741884632507087], [96.690673828125, 27.766190642387496], [96.63848876953125, 27.790491224830877], [96.56707763671875, 27.819644755099446], [96.46270751953125, 27.853647316127383], [96.40502929687499, 27.873072565422785], [96.31164550781249, 27.88278388425912], [96.22650146484374, 27.942246703329612], [96.19766235351562, 27.955591004642553], [96.18392944335938, 27.95680404117228], [96.16058349609375, 27.95437795448293], [96.14547729492188, 27.95680404117228], [96.11801147460938, 27.955591004642553], [96.09329223632811, 27.967720756531097], [96.05758666992188, 27.977423576428517], [96.01364135742188, 28.00895171255095], [95.9820556640625, 28.006526798752308], [95.95321655273436, 28.01865082183306], [95.91201782226562, 28.045318867211485], [95.83511352539062, 28.07198030177986], [95.77056884765625, 28.11801628757283], [95.69229125976562, 28.15676811058399], [95.625, 28.108326142212604], [95.56182861328125, 28.06592146554172], [95.50689697265625, 28.023500048883022], [95.44647216796874, 27.990763528690582], [95.38055419921875, 27.945886221761945], [95.30364990234375, 27.887639217136517], [95.18692016601562, 27.84514767491011], [95.0592041015625, 27.77591152683427], [94.98504638671875, 27.761329874505233], [94.9383544921875, 27.761329874505233], [94.866943359375, 27.737022779516813], [94.75433349609375, 27.668934069896217], [94.66094970703125, 27.639740194861723], [94.45770263671875, 27.559416878865445], [94.2901611328125, 27.55454690781033], [94.10614013671875, 27.42785192271138], [93.90838623046875, 27.244862521497282], [93.812255859375, 27.137368359795584], [93.834228515625, 27.078691552927534], [93.70788574218749, 27.012643405861162], [93.66943359374999, 26.966141794817037], [93.4716796875, 26.939211027894675], [93.25469970703125, 26.953901335053224], [93.01025390625, 26.924518806384913], [92.8289794921875, 27.017537193890004], [92.669677734375, 27.02243076878952], [92.59552001953125, 26.95634953341189], [92.449951171875, 26.946556420812623], [92.37030029296875, 26.9196209739275], [92.2906494140625, 26.904926201064484], [92.197265625, 26.88777988202911], [92.1148681640625, 26.897578097333927], [92.1148681640625, 26.985723763197157], [92.076416015625, 27.034663773424224], [92.0050048828125, 27.09336363811584], [92.04345703125, 27.1618079465197], [92.0819091796875, 27.235094607795503], [92.04071044921875, 27.257071207882763], [92.07092285156249, 27.27904346606827], [92.10113525390625, 27.269278554175017], [92.120361328125, 27.28880751983314], [92.0654296875, 27.32541507519441], [92.04620361328125, 27.3742063539611], [92.04071044921875, 27.432727501179993], [92.021484375, 27.464413510962768], [91.9940185546875, 27.47172437423024], [91.96929931640624, 27.461976448778174], [91.93359375, 27.47416122087989], [91.88140869140625, 27.464413510962768], [91.8511962890625, 27.48147143746536], [91.82922363281249, 27.47416122087989], [91.77978515625, 27.47172437423024], [91.72760009765624, 27.479034752500656], [91.71661376953125, 27.486344645687222], [91.69189453125, 27.508271413876017], [91.65069580078125, 27.486344645687222], [91.60125732421875, 27.537500308359462], [91.56280517578125, 27.576460076262716], [91.56005859375, 27.630007171411226], [91.62597656249999, 27.702983735525834], [91.63288700400005, 27.75944366500002], [91.65283410700005, 27.91674672500008], [91.62172489400012, 27.950723979000088], [91.43648287109386, 27.9893751070378], [91.34143192600004, 28.030564067000086], [91.29016890500003, 28.091413066000115], [91.1758606360001, 28.057487488000106], [91.09255822800003, 27.971678772000104], [90.97514937400013, 27.98209157300002], [90.90952030400013, 28.03265696300005], [90.75527753601477, 28.055173214985984], [90.6839010010001, 28.08707224500006], [90.47523156719149, 28.07234446286344], [90.48566935150171, 28.124657352778286], [90.59760193815339, 28.20037645551335], [90.58772553344886, 28.23329780452852], [90.35398395544087, 28.299140502558913], [90.29147017500009, 28.2613510140001], [90.22559069428155, 28.35839893078625], [90.1762086707588, 28.325477581771082], [90.07086035391018, 28.345230391180195], [89.86291752100004, 28.295793356000047], [89.75584395400011, 28.18437896700007], [89.56148889100012, 28.13464040100007], [89.41736367794573, 27.98865402703089], [89.33602461800007, 27.869075216000113], [89.22492028800008, 27.807812806000072], [89.20584326503484, 27.747435047507736], [89.12465494572712, 27.61485158915056], [89.1023514366355, 27.623610835838264], [89.05095371551772, 27.608281690950236], [88.97295541963888, 27.51765939342627], [88.95105955131027, 27.433144260415162], [88.99701872918376, 27.330869457273195], [88.89233077000011, 27.315543111000125], [88.77357832900003, 27.40850901300007], [88.7410221770001, 27.54570994100007], [88.80566939300007, 27.655108948000077], [88.85388350400007, 27.84367624900011], [88.81068200700014, 27.92785715800008], [88.81771000200013, 27.994726461000056], [88.73564782700004, 28.05526540200009], [88.61048750800012, 28.10583079000014], [88.50207035300008, 28.028884583000035], [88.3787703860001, 27.98263417600006], [88.11573734600012, 27.94726165800006], [88.1182178140001, 27.8608845010001], [87.82588423700014, 27.90656646700009], [87.77984053500012, 27.83943878200006], [87.67852882492275, 27.813351022215926], [87.57334151200013, 27.80502227800011], [87.53158695500008, 27.83680328400004], [87.36911625200014, 27.803937073000014], [87.38534265100009, 27.84941233400008], [87.29051639800008, 27.81608103500011], [87.15579593900009, 27.825796204000056], [86.98209267116988, 27.950674405099903], [86.89307295800012, 27.954186300000032], [86.84046634900011, 28.01477691700009], [86.73980065900014, 28.021494853000036], [86.73173913600004, 28.076917826000084], [86.66197595200009, 28.106838481000125], [86.54415368700012, 28.093015036000054], [86.51676433500307, 27.971432200267827], [86.4388371170001, 27.910855611000073], [86.20303755700013, 28.002581279000083], [86.1559603280001, 28.156525371000015], [86.06873050900003, 28.076762797000043], [86.11286218300012, 27.926797791000098], [86.05459969401034, 27.888013072172782], [85.98026045800009, 27.885172424000075], [85.84827885000004, 28.158928325000062], [85.7566048590001, 28.203240866000016], [85.69293949400003, 28.335222473000073], [85.61180749500005, 28.251144918000108], [85.43156010000013, 28.297059428000097], [85.3453638100001, 28.261247660000066], [85.25958093300005, 28.266932068000102], [85.08186710189273, 28.331702005121713], [85.07757653800013, 28.435681457000072], [85.16801029400011, 28.583191833000058], [85.05494226100006, 28.638692322000026], [84.91872318600014, 28.53567535400012], [84.79914392100005, 28.546630758000106], [84.67775598100008, 28.604405009000118], [84.68297530100011, 28.650758769000106], [84.6072176510001, 28.698197734000104], [84.45084476800014, 28.733880310000075], [84.3540031330001, 28.86128855400011], [84.2252905098747, 28.914115306188222], [84.2314266360001, 29.02598134300007], [84.17546106000009, 29.0574006140001], [84.13225956200006, 29.14380360900006], [84.16166345300007, 29.192534485000095], [84.09913496900009, 29.24700144500011], [83.88343754100009, 29.282012228000013], [83.71972660300008, 29.233591411000077], [83.65499238884388, 29.160413574963343], [83.51705163600013, 29.191707662000084], [83.49338383000008, 29.27614695200012], [83.4372115480001, 29.305240784000034], [83.32796757000006, 29.48502309200009], [83.26394047000014, 29.473008321000123], [83.25257165600004, 29.55519968700014], [83.16208622200014, 29.625169576000047], [83.07955896000004, 29.57964264000009], [82.9758960370001, 29.664030253000107], [82.89972497600007, 29.68842152900004], [82.83657637600004, 29.659792786000054], [82.61850183100006, 29.83983347600008], [82.54181400500005, 29.923239238000036], [82.39443282100007, 30.003131002000146], [82.14452559400007, 30.06943186500007], [82.15568770300013, 30.18136301700008], [82.09589807100008, 30.213454082000084], [82.08876672400004, 30.33008778900009], [81.96903243000008, 30.328279114000082], [81.84438887500005, 30.37117055300004], [81.77901818800007, 30.358044739000093], [81.59158776800007, 30.414268697000068], [81.48306726100009, 30.331896464000067], [81.38751753800011, 30.373909403000084], [81.37692386900011, 30.24120432500004], [81.26790264609514, 30.07205300527093], [81.19450606300006, 30.00447458900001], [81.08445364615943, 30.02787577407392], [80.99601688700011, 30.196969300000035], [80.97601810700007, 30.255208638000056], [80.78166304500007, 30.32099273700001], [80.7230619720001, 30.392047832000117], [80.57526737500012, 30.466255188000076], [80.52514123600008, 30.458607076000106], [80.32587691200013, 30.546508687000085], [80.1798393150001, 30.559479472000106], [80.16692020700009, 30.661902161000057], [80.23141239400007, 30.724947408000077], [80.16929732200009, 30.785253804000064], [80.06253381400012, 30.78478871700014], [80.00558638600012, 30.847265524000107], [79.90316369700008, 30.890208639000065], [79.83350386600006, 30.961522115000065], [79.73903934800012, 30.97924713100008], [79.57780887900009, 30.93837107400006], [79.47641971900003, 31.014025371000116], [79.40159224500013, 31.023637187000134], [79.37234338400009, 31.094072165000057], [79.29565555900012, 31.12414784700013], [79.26609663900012, 31.212307842000087], [79.21555708800008, 31.243727112000045], [79.19840051300008, 31.32491078700008], [79.06331831900013, 31.433638001000133], [79.01463912000008, 31.42547312500011], [78.97619185400004, 31.320001526000055], [78.91810754400007, 31.35441803000009], [78.87887626591356, 31.29955077012596], [78.78447229000005, 31.28827219700014], [78.73848026600012, 31.334987691000038], [78.76256148300007, 31.445110169000145], [78.69951623500009, 31.510015768000073], [78.81888879400009, 31.607374166000028], [78.7313489180001, 31.668042298000017], [78.67088749200008, 31.770516663000052], [78.74457808500011, 31.96419993100008], [78.64928674300012, 32.03644358300002], [78.51306766800008, 32.207570089000114], [78.45798059100014, 32.2296617640001], [78.45219283000006, 32.416782125000054], [78.38098270679342, 32.528041484263525], [78.44754195200011, 32.56625620500006], [78.63016646300014, 32.57801259400006], [78.7132621670001, 32.63751800600005], [78.77144982900012, 32.46166310600006], [78.9112862550001, 32.354744568000086], [79.07530725100014, 32.37079010000005], [79.11292769400006, 32.472385967000065], [79.21524703000011, 32.50791351300012], [79.27601851500009, 32.490188497000105], [79.47641971900003, 32.645424500000075], [79.49998417100005, 32.74683949800004], [79.41275435400013, 32.8865467330001], [79.33420617700011, 32.95682668100008], [79.37864790900011, 33.16428171800007], [79.15364872200013, 33.22691355400008], [78.97329797400005, 33.30957000800004], [78.82426314300005, 33.461059469000105], [78.7813717040001, 33.552785136000125], [78.79408410700006, 33.74391042100004], [78.77031294800008, 33.87235219300004], [78.7211169840001, 33.9943860890001], [78.73010868400007, 34.07926462900008], [78.90322473100008, 34.15812286400009], [78.97619185400004, 34.217163188000114], [78.95693951587305, 34.33996090528569], [79.20449913922386, 34.43944855440728], [79.33839277480666, 34.430818589905954], [79.51264570493532, 34.4716946483893], [79.71733605301642, 34.41278351544685], [79.79397220205544, 34.431025296380284], [79.95628787578482, 34.68475657855325], [79.88383751778724, 34.91960012554537], [80.00098799010362, 34.968408514741185], [80.04692833877186, 35.017707831251414], [80.01416547995296, 35.08592072226352], [80.1761710962191, 35.253249010233674], [80.26288414878445, 35.43566681597082], [80.25962853372982, 35.514163316084165], [80.31921146024064, 35.50925405553028], [80.48602298427335, 35.40424754518804], [80.65609012156182, 35.38430044191179], [80.76610924704408, 35.3434243843279], [80.85845503057521, 35.34714508737588], [80.97886111794622, 35.29340159830508], [81.0368937517452, 35.3107907167182], [81.06092329327538, 35.38856374821836], [81.21021650588705, 35.316914374099014], [81.3573393090619, 35.33239146639309], [81.46177737772376, 35.31024811525825], [81.54507978740224, 35.25177623098827], [81.71142622344144, 35.24565257450672], [82.00220950736292, 35.319446520540424], [82.0860286800795, 35.44799164509831], [82.28916873634807, 35.54496247014188], [82.3189343607321, 35.63374258115513], [82.42817833895919, 35.689759833349655], [82.71043501206611, 35.65017568605899], [82.78459069240648, 35.68454051443322], [82.9358992857234, 35.67407603637997], [82.97842898970606, 35.60077301676134], [82.97176272996603, 35.49044383381582], [83.0986800483455, 35.41277415600251], [83.24611290898355, 35.421249090872834], [83.45261193219494, 35.39355052313812], [83.56480146711402, 35.36071015085281], [83.87067426970174, 35.37453359584876], [83.98441409733272, 35.41602977105711], [84.13319054600686, 35.377530829384256], [84.21468427875641, 35.38895132094666], [84.56344852143212, 35.559483548027345], [84.77764733315786, 35.600488796820514], [84.92363325387157, 35.68932058377791], [85.14976932199664, 35.7498078478539], [85.26025353367362, 35.73040334693687], [85.3893412623894, 35.75670665069134], [85.52385501469712, 35.71626984357846], [85.56188886927589, 35.657410387479445], [85.71686648969671, 35.75926463555447], [85.92992841986063, 35.76169342740974], [85.99323205031885, 35.78484446889718], [86.0874381858236, 35.87558828377226], [86.2123401216993, 36.1159353705209], [86.39951216015811, 36.17004059479757], [86.45940514503138, 36.219443264095304], [86.71385989761615, 36.231458034860424], [86.78698205008152, 36.260267645735325], [87.0008191257021, 36.274091090731275], [87.19383060070169, 36.30396006880207], [87.34560428291132, 36.37405915020963], [87.57091352693772, 36.333803209350634], [87.92453535422317, 36.382559923501674], [88.00008629764454, 36.428371080061254], [88.27676191572976, 36.44857656485661], [88.45923139831035, 36.44888662411833], [88.52237999913763, 36.41431509016934], [88.71172244703325, 36.36840057992279], [88.82809777209445, 36.37367157658193], [88.95827070462929, 36.28729441990154], [89.22362918483901, 36.2635749367339], [89.67781334810746, 36.081958115774455]]]
                }
            }, {
                type: "Feature",
                properties: {id: "65", name: "新疆", latitude: 41.122, longitude: 85.4253},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[91.01429189287836, 46.689843915032384], [90.99592329900008, 46.59462473600007], [91.04749637900011, 46.5664094040001], [90.93577193200014, 46.34386484800004], [90.89618778500005, 46.30203277600006], [90.94879439300007, 46.16829417000014], [90.99592329900008, 46.11372385700011], [91.00243452900003, 46.02184316000006], [90.71077274600009, 45.75219553700009], [90.65113814300008, 45.49314158100009], [90.73795454900011, 45.44172353100004], [90.79655562400012, 45.29284373000007], [90.85443322800012, 45.27062286400013], [90.87324344900003, 45.1861835740001], [90.97514937400013, 45.21486399400007], [91.1350362550001, 45.19786244700006], [91.24913781800007, 45.12970123300005], [91.3665466710001, 45.11424998000004], [91.45605025300011, 45.13745269800006], [91.52178267400006, 45.077456361000145], [91.66296268700012, 45.059524638000084], [92.00940149000013, 45.076216126000105], [92.19367964700012, 45.01451446500005], [92.47510949800011, 44.99746124300012], [92.75271529200012, 45.037975566000114], [92.86102909400012, 45.0378722130001], [92.94505497300014, 45.005832825000084], [93.07594097799694, 45.00519247602597], [93.34099979700005, 44.9848521940001], [93.52527795500004, 44.951262513000074], [93.71400028500011, 44.87457468700012], [93.9274239500001, 44.67293324800005], [94.19500451700009, 44.65432973300008], [94.33845829300009, 44.51211619100013], [94.43013228400008, 44.50446807900008], [94.58805546100007, 44.43610015900009], [94.69822961400013, 44.343495992000044], [95.03681359900003, 44.25497426400008], [95.37942834500012, 44.28711700500011], [95.32144738800014, 44.148417460000104], [95.32754520700013, 44.00666900700011], [95.51027307200013, 43.97912546800012], [95.5892346600001, 43.869493918000046], [95.69248417200009, 43.630542094000106], [95.83283736200008, 43.4089018760001], [95.85495487500009, 43.28454254200011], [95.90849165900005, 43.21454681400007], [96.29430790200007, 42.93327199400005], [96.33719934100003, 42.8664802050001], [96.36633990098284, 42.722922619141826], [96.0909102719915, 42.58690989857294], [96.04378136581732, 42.499886785846456], [96.01783979726883, 42.138720201476076], [96.03582319488447, 41.99529226292756], [95.86394738156645, 41.85501658844473], [95.77191165639778, 41.82972097414367], [95.49198042235855, 41.856024277898115], [95.05826012630376, 41.78856069571958], [94.58092492064856, 41.58521393477531], [94.01103722498789, 41.10402883576222], [93.75994144114458, 40.82332245536699], [93.66914594942597, 40.68335683924673], [93.57747195766473, 40.58796214533666], [93.28632693943672, 40.46926138030838], [93.03683312424931, 40.48985443783204], [92.94154178312675, 40.47256867130713], [92.9258838236795, 40.42290762049029], [92.91952762230193, 40.11806834577749], [92.77741743426719, 39.905523180450416], [92.7724048200264, 39.810541896791136], [92.9479496604485, 39.45247589784444], [92.93596072810516, 39.152855942947355], [92.3331034689499, 39.049864814209826], [92.24856082582141, 38.9890416533496], [92.1227287130597, 38.94064667440455], [91.88062462802412, 38.87548269287197], [91.62865034413801, 38.825666612424214], [91.49160444538887, 38.81726919191965], [91.29440718024716, 38.7451288931839], [91.01246056460332, 38.69867178057822], [90.8949483579803, 38.700997218746664], [90.65351606561393, 38.67407379826719], [90.63599775599164, 38.6243093937635], [90.47822960761027, 38.53250621169232], [90.31245161325131, 38.46579193834722], [90.15091108587785, 38.43279653643103], [90.19349246580464, 38.32567129169675], [90.43926557794407, 37.99607900594131], [90.45135786307486, 37.93675446184892], [90.41006839434095, 37.84699249890471], [90.4364750508829, 37.77857290321691], [90.56897342338482, 37.73196076098034], [90.83448693232606, 37.60778229371783], [90.95721845876483, 37.519415594753895], [91.07374881435624, 37.48794464802705], [91.15167687368876, 37.323251858386556], [91.23497928336718, 37.19540436491951], [91.31631798738522, 37.118974921455475], [91.28758589087619, 37.01350332311986], [91.19136437376682, 37.00146271393311], [91.05499026858604, 36.94513540337613], [90.89112430214487, 36.939476833988664], [90.80777021742159, 36.910563870326314], [90.71237552261232, 36.82149953937221], [90.68813927640645, 36.6984837920933], [90.71046349469447, 36.63616201446533], [90.80528974782356, 36.55851817507366], [91.00672448085015, 36.50348277391089], [91.0610364116011, 36.313546047711924], [91.13576053272243, 36.14063670472012], [91.11131758004228, 36.07392243137514], [90.87500125470416, 36.00364248281434], [90.62266523561209, 36.1111294618552], [90.29245283403111, 36.11554779689331], [90.16569054618179, 36.12924205247873], [90.01376183524053, 36.25277456279585], [89.97200727671441, 36.10492829010852], [89.8667940607973, 36.06560252523636], [89.67781334810746, 36.081958115774455], [89.22362918483901, 36.2635749367339], [88.95827070462929, 36.28729441990154], [88.82809777209445, 36.37367157658193], [88.71172244703325, 36.36840057992279], [88.52237999913763, 36.41431509016934], [88.45923139831035, 36.44888662411833], [88.27676191572976, 36.44857656485661], [88.00008629764454, 36.428371080061254], [87.92453535422317, 36.382559923501674], [87.57091352693772, 36.333803209350634], [87.34560428291132, 36.37405915020963], [87.19383060070169, 36.30396006880207], [87.0008191257021, 36.274091090731275], [86.78698205008152, 36.260267645735325], [86.71385989761615, 36.231458034860424], [86.45940514503138, 36.219443264095304], [86.39951216015811, 36.17004059479757], [86.2123401216993, 36.1159353705209], [86.0874381858236, 35.87558828377226], [85.99323205031885, 35.78484446889718], [85.92992841986063, 35.76169342740974], [85.71686648969671, 35.75926463555447], [85.56188886927589, 35.657410387479445], [85.52385501469712, 35.71626984357846], [85.3893412623894, 35.75670665069134], [85.26025353367362, 35.73040334693687], [85.14976932199664, 35.7498078478539], [84.92363325387157, 35.68932058377791], [84.77764733315786, 35.600488796820514], [84.56344852143212, 35.559483548027345], [84.21468427875641, 35.38895132094666], [84.13319054600686, 35.377530829384256], [83.98441409733272, 35.41602977105711], [83.87067426970174, 35.37453359584876], [83.56480146711402, 35.36071015085281], [83.45261193219494, 35.39355052313812], [83.24611290898355, 35.421249090872834], [83.0986800483455, 35.41277415600251], [82.97176272996603, 35.49044383381582], [82.97842898970606, 35.60077301676134], [82.9358992857234, 35.67407603637997], [82.78459069240648, 35.68454051443322], [82.71043501206611, 35.65017568605899], [82.42817833895919, 35.689759833349655], [82.3189343607321, 35.63374258115513], [82.28916873634807, 35.54496247014188], [82.0860286800795, 35.44799164509831], [82.00220950736292, 35.319446520540424], [81.71142622344144, 35.24565257450672], [81.54507978740224, 35.25177623098827], [81.46177737772376, 35.31024811525825], [81.3573393090619, 35.33239146639309], [81.21021650588705, 35.316914374099014], [81.06092329327538, 35.38856374821836], [81.0368937517452, 35.3107907167182], [80.97886111794622, 35.29340159830508], [80.85845503057521, 35.34714508737588], [80.76610924704408, 35.3434243843279], [80.65609012156182, 35.38430044191179], [80.48602298427335, 35.40424754518804], [80.31921146024064, 35.50925405553028], [80.25962853372982, 35.514163316084165], [80.26288414878445, 35.43566681597082], [80.1761710962191, 35.253249010233674], [80.01416547995296, 35.08592072226352], [80.04692833877186, 35.017707831251414], [80.00098799010362, 34.968408514741185], [79.88383751778724, 34.91960012554537], [79.95628787578482, 34.68475657855325], [79.79397220205544, 34.431025296380284], [79.71733605301642, 34.41278351544685], [79.51264570493532, 34.4716946483893], [79.33839277480666, 34.430818589905954], [79.20449913922386, 34.43944855440728], [78.95693951587305, 34.33996090528569], [78.80173221800004, 34.415006409000085], [78.75067590400005, 34.47128204400008], [78.6073254800001, 34.54647125300011], [78.37943241400006, 34.57866567000005], [78.2731856690001, 34.65886749300006], [78.21138065600013, 34.848261617000105], [78.14812870300005, 34.94313954700007], [78.13004195100012, 35.055432434000096], [78.0011609290001, 35.268907776000106], [78.0556278900001, 35.452875875000075], [77.98586470600009, 35.494165344000095], [77.88313195800004, 35.43106842000006], [77.80034631400014, 35.495405579000135], [77.66061324100008, 35.45809519500011], [77.41277307100012, 35.469412333000065], [77.25081913300005, 35.53070058200012], [77.10529829900008, 35.53798695900011], [77.03904911300009, 35.58501251200008], [76.89642216000004, 35.589611715000046], [76.77735074100008, 35.646111714000114], [76.67669397000003, 35.71379018200008], [76.57075728400014, 35.751255595000146], [76.53716760300011, 35.90251251300006], [76.4031189370001, 35.83099233000013], [76.16602746600012, 35.8062393190001], [76.11466109200012, 35.94178660100002], [76.06143436700006, 35.991602682000064], [75.9223214110001, 36.03165191700003], [75.89431278500007, 36.09738433900009], [76.01440881400009, 36.23039947500004], [75.96883020000013, 36.301971334000086], [75.97658166500014, 36.46263336200013], [75.87477909400013, 36.61947133400005], [75.79054650900008, 36.68783925400004], [75.64977990700004, 36.754036764000034], [75.5705082610001, 36.76674916600007], [75.49258020000013, 36.720705465000066], [75.41051802600003, 36.7473188270001], [75.39449833200007, 36.86426259400008], [75.35129683500014, 36.91578399700006], [75.19513065600012, 36.94888275200006], [75.10014937300008, 36.99412546800005], [74.91049686700006, 36.96255116800006], [74.87235966000009, 36.90710235600011], [74.79257124800012, 37.01515777600008], [74.66244999200006, 37.05448354100005], [74.54235396300004, 37.02166900600014], [74.38257043400012, 37.12657216400004], [74.36830774000003, 37.167060649000035], [74.45667443900004, 37.17731842000012], [74.48726688600004, 37.225945943000056], [74.6232792560001, 37.23080352800005], [74.7214644770001, 37.297776185000146], [74.78326949100011, 37.21966725700014], [74.89230676300014, 37.23111358700004], [74.93292443900003, 37.2725064090001], [75.06842004400005, 37.31214223300006], [75.09177779200013, 37.37844309500008], [75.16412479700006, 37.40063812300011], [74.89189335200012, 37.599204814000046], [74.88610559100005, 37.65346506800009], [74.9651705330001, 37.767463278000065], [74.88321171100006, 37.84386688300012], [74.89282352800006, 37.99401275700012], [74.79071089700011, 38.08144928000007], [74.77107385300008, 38.29153981600007], [74.83825321400013, 38.37941558800014], [74.83287886600004, 38.46364817300014], [74.77634484900011, 38.51067372700001], [74.33420129400008, 38.66699493400009], [74.1090987550001, 38.66229237900009], [74.03726851400012, 38.59847198600008], [74.02889693200012, 38.5272360240001], [73.93288212100003, 38.529664815000075], [73.79738651500008, 38.602838644000144], [73.73640832600006, 38.721668600000044], [73.73589156100013, 38.80042348300012], [73.68369836500011, 38.85494211900004], [73.7399223220001, 38.9269273890001], [73.80958215300012, 38.932663473000076], [73.81599003200006, 38.993770854000076], [73.69816776600004, 39.07841685000008], [73.60225630700012, 39.235771587000016], [73.64132369000009, 39.33527455700005], [73.63264204900014, 39.44834259000007], [73.82074426200006, 39.46818634100006], [73.9267843020001, 39.59288157200007], [73.89350468000004, 39.71039377900007], [73.82952925700005, 39.74698069200011], [73.82301802600006, 39.80568512000008], [74.00398889100006, 40.06081166600009], [74.16759647600009, 40.10639027900007], [74.36985803300007, 40.105821839000015], [74.70575484200003, 40.33128611300009], [74.8621277260001, 40.326170146000095], [74.78740360500012, 40.420738017000076], [74.83231214194598, 40.50811611803226], [75.03906783100007, 40.44109853100011], [75.13807987500007, 40.46388783800012], [75.19389042200004, 40.44125356100005], [75.48183150200009, 40.61411122700011], [75.58766483600004, 40.61194081700003], [75.61081587700005, 40.512877096000125], [75.66693648300009, 40.45024526000009], [75.64016809100013, 40.367304586000074], [75.68181929600013, 40.29170196600012], [75.92149458900013, 40.30911692400005], [75.96242232300006, 40.357331034000055], [76.07611047400007, 40.39195424400006], [76.1513513590001, 40.368131409000085], [76.24416223100013, 40.44120188400004], [76.31351200400007, 40.34332672100007], [76.44911096200013, 40.41551869700007], [76.55639123500004, 40.56569041000006], [76.62419071400006, 40.62754709900008], [76.6308052980001, 40.72888458300011], [76.77084843000011, 40.86711903900007], [76.76681766800004, 40.94468536400004], [76.86097212800013, 41.013208313000064], [77.00773319500007, 41.044214173000086], [77.11883752500006, 41.011658021000045], [77.33298466000014, 41.02064971900009], [77.4748881430001, 40.982047425000104], [77.66557417800004, 41.001271058000015], [77.86669885300006, 41.064057922000075], [78.07495487500006, 41.0395116170001], [78.23133510991369, 41.17285589614133], [78.35969201700004, 41.28745513900009], [78.35989872300007, 41.377527161000046], [78.51038049400006, 41.45442169200004], [78.61921106000005, 41.47808949900008], [78.67212772700003, 41.53844757100006], [78.97619185400004, 41.64180043500005], [79.30413049300012, 41.78755381300007], [79.41099735600005, 41.77858795200012], [79.61098514800011, 41.86762644500001], [79.7475142830001, 41.87974456800001], [79.84290897700004, 42.00183013900008], [79.93086226400004, 42.02327585900011], [80.18190637200013, 42.020976258000076], [80.2565271410001, 42.084357401000005], [80.21032841000005, 42.189518941000074], [80.26841272000013, 42.23796559700014], [80.19472212700003, 42.44629913400004], [80.21208540900011, 42.47875193300007], [80.14004846200004, 42.62295501800014], [80.22748498600004, 42.790980937000086], [80.55449344900006, 42.89893300400013], [80.40773238100007, 42.954691874000076], [80.36814823400005, 43.02845998200013], [80.5758874920001, 43.11941050200005], [80.66001672300013, 43.13282053600008], [80.73153690600009, 43.10109120700005], [80.7878642170001, 43.12804046700009], [80.73546431500012, 43.28888336200009], [80.64286014800007, 43.32621958500002], [80.71272668500006, 43.458872986000074], [80.47615197800008, 43.91024078400011], [80.3451005450001, 44.1030972290001], [80.37300581900007, 44.27021881200011], [80.33290490700006, 44.41739329100011], [80.38375451700006, 44.60280833000007], [80.35584924300008, 44.65288279300009], [80.49196496600007, 44.701717021000064], [80.47615197800008, 44.73541005400011], [80.21828658100003, 44.81809234600007], [79.99173710100007, 44.79364939400003], [79.86864384000012, 44.84935658800006], [79.8582052000001, 44.903720195000034], [80.06170699100005, 45.01895863900006], [80.21901005100011, 45.026038310000075], [80.40638879400012, 45.0566307580001], [80.42509566300009, 45.09213246700003], [80.69712040200011, 45.14365387000004], [80.85385502200012, 45.126497295000064], [81.1441732180001, 45.20468373600002], [81.54203007000007, 45.2933088180001], [81.66522668500005, 45.34798248300007], [81.73927901200011, 45.33806060800006], [81.80728519700006, 45.18871571900007], [81.95011885600007, 45.14448069300005], [82.19175785300013, 45.22220204700008], [82.29459395300006, 45.228196513000114], [82.47582320100008, 45.11569692000003], [82.58522220800012, 45.17683014000005], [82.63384973100005, 45.3393525190001], [82.61571130400011, 45.43541900700009], [82.36265181500005, 45.48120432600004], [82.29713742587586, 45.554544910959464], [82.37221195500007, 45.73416046200009], [82.48894901500006, 45.901695455000095], [82.56827233900003, 46.19650950100001], [82.67436405500013, 46.33112660700007], [82.83895349200009, 46.73244578100011], [82.98550785300012, 46.94251047800009], [83.01351648000008, 47.19458811500007], [83.1503556720001, 47.21153798500009], [83.35339237500006, 47.14497874000011], [83.52449304200013, 47.06710235700004], [83.90534834800013, 46.973955587000034], [84.06962772600014, 46.96442128500004], [84.15907963100005, 46.993256735000074], [84.42180261300012, 46.99310170500004], [84.5210213630001, 46.96979563400001], [84.6635449630001, 46.983851624000124], [84.73165450100004, 46.947755636000124], [84.76710453300007, 46.81807362900008], [84.91603601100013, 46.85055226600011], [85.16739017800012, 46.992998352000114], [85.2051139730001, 47.03371938100008], [85.49863610900013, 47.0518319710001], [85.55682377100004, 47.17874928800009], [85.65965987200008, 47.20652537000012], [85.67035689300008, 47.384343974000046], [85.57997481300004, 47.52376698900011], [85.59542606600013, 47.62407094400007], [85.51537927200008, 47.92028025300007], [85.58638269000005, 48.14124867700011], [85.71867435700011, 48.35883229600012], [85.78368330900008, 48.407589010000066], [86.00599532100006, 48.42955149400004], [86.19203047700012, 48.41823435500007], [86.33383060700004, 48.49040049300007], [86.43062056500014, 48.48587880500014], [86.5650826420001, 48.52732330300009], [86.62109989400011, 48.60315846800009], [86.74450321400013, 48.70353993700007], [86.7391805420001, 48.7835350550001], [86.78946171100006, 48.83913889600012], [86.71804488100014, 48.91251943000006], [86.7275016690001, 48.99034413700011], [86.88733687400003, 49.10682281600006], [86.97544519000007, 49.09240509000003], [87.11631514500004, 49.129767151000095], [87.32379602100013, 49.0852737430001], [87.40043217000004, 49.071011048000116], [87.52528243000006, 49.119793600000065], [87.81632409700006, 49.165837301000096], [87.82190515100007, 49.02873972600014], [87.87259973200014, 48.96801991800004], [87.7568961990001, 48.9203742470001], [87.73787927300003, 48.869369609000046], [87.80588545800003, 48.80058827800005], [87.97548750900012, 48.75599151600002], [88.06385420800012, 48.682610982000085], [87.94282800400003, 48.59948944100012], [88.01662194900007, 48.539803162000084], [88.23562666800007, 48.49319102000004], [88.4167008880001, 48.394101461000105], [88.50269047100005, 48.39255116800007], [88.56511560100012, 48.342993470000124], [88.58077356000007, 48.21199371400013], [88.8054110110001, 48.10595367500011], [88.9323283280001, 48.096961975000056], [89.04555139200005, 47.992988994000115], [89.24398889200006, 47.980224915000065], [89.33426761900012, 48.032366435000114], [89.54180017100009, 48.03102284800005], [89.65528161700013, 47.89981638600011], [89.75129642700011, 47.824317119000085], [89.88906579600012, 47.824317119000085], [89.96316980000006, 47.88865427700006], [90.04461185800011, 47.879765931000065], [90.08285241700008, 47.756104228000055], [90.20971805800013, 47.69574615600007], [90.34480025200008, 47.658642477000086], [90.32743697200004, 47.623037415000084], [90.44122847500006, 47.493045350000074], [90.46872033700004, 47.308922221000046], [90.71211633400009, 47.014702454000115], [90.82818160000011, 46.982301331000116], [90.9327746990001, 46.8747885140001], [90.92533329300011, 46.81313853000006], [91.01429189287836, 46.689843915032384]]]
                }
            }, {
                type: "Feature",
                properties: {id: "46", name: "海南", latitude: 19.1865, longitude: 109.825},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[111.01050866000003, 19.683783270000077], [110.87647545700008, 19.539780992000118], [110.82178795700003, 19.56777578300003], [110.79623457100013, 19.484605210000097], [110.66968834700003, 19.381740627000084], [110.58033287900008, 19.155178127000028], [110.56324303500003, 19.055650132000068], [110.50993899800005, 18.96434153900009], [110.5133569670001, 18.906398830000086], [110.43148847700013, 18.821478583000044], [110.49284915500004, 18.793117580000114], [110.49366295700003, 18.876044012000108], [110.53443444100003, 18.785630601000037], [110.46900475400008, 18.777167059000107], [110.42676842500003, 18.680894273000092], [110.27084394600013, 18.66815827000005], [110.10328209700009, 18.53937409100004], [110.05258222700013, 18.39020416900007], [109.96859785200007, 18.389837958000044], [109.99252363400012, 18.443060614000018], [109.83545983200008, 18.38226959800008], [109.74610436300003, 18.39590078300003], [109.72657311300009, 18.30377838700005], [109.56120853000004, 18.16933828300006], [109.56120853000004, 18.258734442000076], [109.50961347700007, 18.23078034100004], [109.43995201900009, 18.28896719000008], [109.21810957100013, 18.30565013200004], [109.16260826900009, 18.287827867000146], [109.09164472700013, 18.36859772300005], [109.00074303500003, 18.36717357000009], [108.79558353000004, 18.48655833500007], [108.6949975920001, 18.504828192000048], [108.67408287900003, 18.554836330000057], [108.69361412900003, 18.719875393000052], [108.62745201900003, 18.835882880000014], [108.65381920700003, 18.92104726800011], [108.61524498800009, 19.101629950000103], [108.66309655000009, 19.15623607000009], [108.62696373800003, 19.2749697940001], [108.68653405000003, 19.377875067000076], [108.7706811860001, 19.394354559000078], [108.94076582100013, 19.514105536000073], [109.01587975400003, 19.601263739000075], [109.15650475400003, 19.649644273000007], [109.20492597700007, 19.71857330900005], [109.30738366000008, 19.711127020000077], [109.27320397200009, 19.79364655200007], [109.17017662900003, 19.724798895000106], [109.16684004000012, 19.80548737200013], [109.30372155000003, 19.921698309000135], [109.46501712300011, 19.834051825000103], [109.52702884200005, 19.86196523600006], [109.52702884200005, 19.951361395000077], [109.59571373800003, 19.99315013200001], [109.71900475400003, 20.010646877000056], [109.83545983200008, 19.930853583000015], [109.94263756600009, 19.990912177000013], [109.99008222700007, 19.905951239000075], [110.01368248800003, 19.957505601000037], [110.1149194670001, 20.001939195000062], [110.15699303500008, 20.06736888200004], [110.26099694100009, 20.033148505000042], [110.32496178500008, 20.06122467700004], [110.38648522200003, 20.00189850500007], [110.38298587300005, 20.081040757000068], [110.56413821700005, 19.984523830000086], [110.59310957100013, 20.10732656500008], [110.67790774800011, 20.16356028900006], [110.71094811300009, 20.07518138200001], [110.78834069100003, 20.01040273600009], [110.93458092500003, 19.995062567000048], [110.97706139400009, 19.86587148600006], [111.01050866000003, 19.683783270000077]]]
                }
            }, {
                type: "Feature",
                properties: {id: "64", name: "宁夏", latitude: 37.1762, longitude: 106.038},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[107.65764611237813, 37.85293528913229], [107.60674482631265, 37.765731310151835], [107.50943810358558, 37.764284369328124], [107.43605756960119, 37.66346365002741], [107.31720177584123, 37.590186468830495], [107.32216271413796, 37.52763214810511], [107.27002119282372, 37.42784495757877], [107.2380334821595, 37.3013668887709], [107.28598921063355, 37.26180857990204], [107.32696862190437, 37.15535513053484], [107.28547244669602, 37.068461209017585], [107.18780398966243, 37.11706289353771], [106.93293582592759, 37.107192694687114], [106.7906706082619, 37.18966828116629], [106.64406456902458, 37.18165843428932], [106.63393598775559, 36.997897040515966], [106.57481815013756, 36.93133779590258], [106.64902550732126, 36.8341861028064], [106.60215498266632, 36.7258206237228], [106.50236779213986, 36.70651947739199], [106.48469445198737, 36.534049383971904], [106.43084760922972, 36.50232005482667], [106.495391473138, 36.4367426621441], [106.49658003064394, 36.26835500697797], [106.6038603050091, 36.27783763310023], [106.74493696516885, 36.206575833507856], [106.81366662011845, 36.21164012279348], [106.9447697286401, 36.07694550243298], [106.91371219306319, 35.952612006438926], [106.84322553892741, 35.882202867568225], [106.91340213380147, 35.78882355436352], [106.85511111938263, 35.73456330045596], [106.72845218342155, 35.677047431493776], [106.5948686062012, 35.72743195182309], [106.46960493422034, 35.72743195182309], [106.4292973174172, 35.69944916414764], [106.50546837756355, 35.553644111486534], [106.41327762276404, 35.54589264612869], [106.49658003064394, 35.47478587526794], [106.464850702398, 35.33236562797137], [106.37777591372742, 35.2606645779079], [106.31338707855087, 35.27360952376057], [106.21065433133236, 35.39515249269334], [106.11241743441701, 35.42465973645773], [105.90788211506754, 35.40440257391967], [105.91242964131493, 35.450549628162804], [106.06043094273383, 35.463856310120605], [105.93614912268384, 35.52480866129068], [105.82938561405484, 35.49364777292638], [105.72494754359423, 35.60366689750927], [105.68696536675827, 35.68128489847925], [105.72556766211795, 35.7100686709324], [105.5630969578583, 35.69999176740612], [105.43183881970577, 35.756422430750604], [105.31809899297417, 35.9332075064213], [105.35148196761867, 36.0576443552028], [105.43741987472742, 36.10668528929466], [105.44594648644119, 36.254583237926056], [105.39277143815133, 36.38439443615428], [105.26874799962047, 36.550224107356684], [105.22048221188453, 36.69295441301577], [105.32166466729058, 36.78072683457572], [105.18017459508144, 36.97213633912071], [104.92241255059872, 37.096754055055584], [104.8553882179919, 37.218193671200964], [104.76474775590418, 37.25049144112714], [104.70888553334066, 37.2150155714115], [104.62139733262075, 37.249277045199506], [104.7224247583959, 37.33932322808454], [104.68950687084538, 37.41192861571304], [104.46450768428224, 37.440247301072134], [104.35851932200904, 37.40123159456249], [104.4252335962534, 37.49858999323354], [104.52238528934959, 37.5299575871729], [104.64697716686271, 37.50659984011051], [104.94432335773678, 37.54571889940763], [105.08488325395899, 37.660673122966244], [105.3544275252101, 37.75263133376896], [105.53410647983014, 37.72498444287777], [105.65869835824259, 37.73981557912566], [105.78809614532082, 37.805057075023996], [105.82473473501994, 38.005484116798556], [105.75564334486444, 38.135502021501026], [105.82809370286213, 38.22681427715713], [105.8227193543147, 38.346135158910414], [105.84121951676724, 38.57128937420518], [105.89661665223667, 38.73618887032012], [106.06027591400226, 38.97906810171153], [106.11319257987361, 39.12081655543966], [106.24078169182155, 39.12665599198047], [106.2834147476924, 39.156524970051265], [106.30206993977589, 39.28948843054664], [106.49694176584978, 39.28579356502101], [106.61409223816622, 39.358321438283724], [106.78912031465075, 39.36095693571397], [106.80824059472769, 39.19905467403399], [106.91185184108957, 39.06919179896235], [106.97784264492208, 39.03560211784347], [106.93174726842165, 38.92113882070004], [106.70442264189137, 38.63722850209365], [106.6449947450115, 38.45920319297295], [106.47012169815781, 38.290686347497], [106.82916954993476, 38.150384832793804], [107.06083499623804, 38.114934801499885], [107.16263756657042, 38.138602606924735], [107.3241780948432, 38.06594554335217], [107.39275272016192, 37.98522695605914], [107.40468997566182, 37.9216649440819], [107.65764611237813, 37.85293528913229]]]
                }
            }, {
                type: "Feature",
                properties: {id: "61", name: "陕西", latitude: 33.7713, longitude: 108.363},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[111.11004520082531, 39.38519318281914], [111.22487023317473, 39.31054657606356], [111.11800337085884, 39.06743480157485], [110.99501346200162, 39.0038469511758], [110.98033735628394, 38.816649075194675], [110.87181684756939, 38.621363837071414], [110.89941206341592, 38.545451158444166], [110.85279992117944, 38.45723948821177], [110.77425174422257, 38.426233629478475], [110.67120893774222, 38.31698965125136], [110.57968997561187, 38.28732737875555], [110.51121870308066, 38.20219045732375], [110.5150427589162, 37.95499624278236], [110.58930179204407, 37.919132799439126], [110.65338056795883, 37.813196113110166], [110.74293582622744, 37.76487864853078], [110.70536705874275, 37.713667304102756], [110.77916100477654, 37.67837230154046], [110.78877282120874, 37.56142853389966], [110.74634647001358, 37.480296536356065], [110.63028120331484, 37.39663239237095], [110.687383661127, 37.35722911223371], [110.66500776599554, 37.2822724471157], [110.52785851355958, 37.14450307885403], [110.42745120720741, 37.01027354648696], [110.36957360214001, 36.89123688377515], [110.41799441860746, 36.81615102834721], [110.38021894734658, 36.77002981252579], [110.44124881378167, 36.726544094134624], [110.39380984924514, 36.68238658307433], [110.4831584010393, 36.593012192858424], [110.49612918531363, 36.48407827389323], [110.45897382987835, 36.34940949195445], [110.47318484940126, 36.26372996726417], [110.4472432799534, 36.141876939069476], [110.51096032066226, 35.88685374570383], [110.56041466680341, 35.84918162723031], [110.57560753825732, 35.7125491405304], [110.61984256368339, 35.597259020187636], [110.49654259556428, 35.4040925164565], [110.33541548113948, 35.19800690439513], [110.25965783124394, 34.94476654683868], [110.23743696484405, 34.80139028603287], [110.25226810109194, 34.66325918256521], [110.33603559786457, 34.615846056450295], [110.32766401578164, 34.47980784805375], [110.37406945244322, 34.403688462952175], [110.45370283411847, 34.3812608909773], [110.47866255073609, 34.32638052034474], [110.43380740768566, 34.2613974068648], [110.6182922709715, 34.162462877060136], [110.5936426127164, 34.06533702238565], [110.64237348844574, 33.980303452842094], [110.59379764234734, 33.87974111595966], [110.74924034986225, 33.80279490855821], [110.79213178905076, 33.70512645152451], [110.96824507025383, 33.59882802998956], [111.01061974460555, 33.50015188170403], [111.0155806820029, 33.37444896105072], [110.97460127163134, 33.266471056494055], [110.90013553292846, 33.20520864516283], [110.81755659366183, 33.194899196740494], [110.7528577010221, 33.097980048540336], [110.60449466439724, 33.153893947947296], [110.5473922056857, 33.2453353948126], [110.43225711497382, 33.17306590396828], [110.23443973220782, 33.15632273980259], [110.09429324803494, 33.21332184482728], [109.95993452355941, 33.21412283050424], [109.87534020358748, 33.24342336689483], [109.65969445193741, 33.26409394058291], [109.51567223508562, 33.23706716641661], [109.45314375188258, 33.148157864194076], [109.75725955618356, 33.08007416439116], [109.78118574402686, 33.044830837772935], [109.73958621603106, 32.93000580542352], [109.83580773314031, 32.895873521046155], [109.89911136269916, 32.9144253612414], [110.09584353984746, 32.84125153283199], [110.15496137926425, 32.72957876185032], [110.16829389874442, 32.62235016522794], [110.0738293799219, 32.61656240553057], [110.0008622579868, 32.55194102635724], [109.87952599462898, 32.591628526435386], [109.6348380881073, 32.59064667450443], [109.57944095263781, 32.54121816678497], [109.56130252539117, 32.40502492875743], [109.48699181541997, 32.35458873068541], [109.54765994664916, 32.23361420343275], [109.60099002456991, 32.21330536584989], [109.66630903483411, 32.043005682765994], [109.61018842985209, 31.927302151273295], [109.59396202962392, 31.737597968171656], [109.3359932795662, 31.705248521402126], [109.25258751799959, 31.744005846392668], [109.18887047729072, 31.84030487696853], [109.05590701679535, 31.940634670753468], [108.78930830313567, 32.04533112183378], [108.51836876790429, 32.19756989203688], [108.47940473823809, 32.25027985323257], [108.2367322124216, 32.2626563583043], [108.05178226114242, 32.22661204690846], [108.00305138631239, 32.14989838350357], [107.84352623874491, 32.22816234051962], [107.77293623272095, 32.3107154404652], [107.65919640508997, 32.388617662275294], [107.45962202403717, 32.4086422799173], [107.44830488526219, 32.522227077917336], [107.37053185376203, 32.51982412448379], [107.28412885865993, 32.452928982186705], [107.20217003791686, 32.452773953455164], [107.06998172377752, 32.52292470990747], [107.09623335158784, 32.669246528304626], [107.06533084474273, 32.708313909859044], [106.71258751839923, 32.73782115272397], [106.60396365779661, 32.67552521441709], [106.36397830625384, 32.63867991824361], [106.22894778910916, 32.59196442321954], [106.11489790221646, 32.64883433703503], [106.05650353411079, 32.71355906809657], [106.10249555872309, 32.85975169528453], [106.03934695789576, 32.87243825871872], [105.87548099235391, 32.84471385346154], [105.80597619014901, 32.75505524330484], [105.72448245560088, 32.759783636705464], [105.63327355273225, 32.70746124913737], [105.56826460173, 32.73045726189309], [105.4985530948494, 32.90739736629541], [105.6393196957473, 32.88548655915733], [105.88648807186706, 32.97801321074107], [105.9105692893412, 33.031730862289436], [105.91273969877801, 33.233682359253436], [105.74716840999412, 33.29398875617616], [105.71797122639094, 33.388659980573635], [105.7853056173604, 33.40633331982687], [105.83243452443372, 33.49754222269539], [105.95165205339953, 33.553197740583244], [105.99294152213355, 33.61063609517964], [106.07345340385154, 33.61750906049474], [106.17060509604835, 33.56224111623459], [106.30703087807257, 33.6123672550448], [106.39265872591949, 33.61882680920988], [106.49554650276883, 33.543585924151046], [106.55947024905277, 33.59862132441461], [106.48174889529531, 33.700888984539034], [106.45875288343876, 33.82393056934029], [106.49089562373405, 33.85558238411974], [106.42433637912058, 33.8987580432491], [106.51373660685891, 34.10660065449662], [106.58742719920588, 34.137451484498456], [106.55404422366195, 34.28082774530418], [106.65600182542386, 34.2542143822879], [106.69057335757441, 34.2912922233574], [106.67362348783365, 34.384671536562195], [106.61409223816622, 34.45872386321574], [106.49833702983, 34.52021881854367], [106.36837080287029, 34.52021881854367], [106.3177278992232, 34.583341580049876], [106.4915157413584, 34.740954697900946], [106.549703403889, 34.862575182098965], [106.50081749942808, 34.92624054596442], [106.4912056820965, 35.03011017474469], [106.56458621608095, 35.07961619683002], [106.77020674014898, 35.095170803489765], [106.91484907372575, 35.08904714610895], [107.05153323816836, 35.038145860043386], [107.21085167836225, 34.89177236570208], [107.32076745015769, 34.94220856377419], [107.4968807313607, 34.92577545797096], [107.5696411477208, 34.96541128210495], [107.71004601431213, 34.951406969056364], [107.83034874889563, 34.976728420879965], [107.67046186702152, 35.22797923435422], [107.73040652873829, 35.2518537462534], [107.74167199066977, 35.318361314023434], [107.92284956295697, 35.26689158807628], [107.96408735574681, 35.2232766793752], [108.1549800963544, 35.29055939440059], [108.2767814468063, 35.26283498824415], [108.49263390493076, 35.272498481519676], [108.6172257833432, 35.39282705272626], [108.60373823423208, 35.547856349990525], [108.50999718582142, 35.700870266549515], [108.52317467657008, 35.77595612197743], [108.49309899292422, 35.88119517721566], [108.67711876821659, 36.00524445236957], [108.69975304576644, 36.1255471869531], [108.64993696531866, 36.22649709746301], [108.70368045528875, 36.35896963154323], [108.60652876219262, 36.43198843032184], [108.44126753087181, 36.46128896671243], [108.35636315343675, 36.54603831631525], [108.04170535671688, 36.59774058715834], [108.03302371627149, 36.65437795697716], [107.96548261882776, 36.66913157795992], [107.88652103072098, 36.75537954433051], [107.69547326138195, 36.82509105121099], [107.6172868178324, 36.82421255116833], [107.44287885897211, 36.8863792991653], [107.281958449223, 36.91490469009935], [107.28547244669602, 37.068461209017585], [107.32696862190437, 37.15535513053484], [107.28598921063355, 37.26180857990204], [107.2380334821595, 37.3013668887709], [107.27002119282372, 37.42784495757877], [107.32216271413796, 37.52763214810511], [107.31720177584123, 37.590186468830495], [107.43605756960119, 37.66346365002741], [107.50943810358558, 37.764284369328124], [107.60674482631265, 37.765731310151835], [107.65764611237813, 37.85293528913229], [107.92874067634108, 37.78534251574453], [108.03870812408064, 37.632509467238066], [108.33295372863165, 37.6335946719565], [108.49635460797873, 37.66860545547735], [108.64993696531866, 37.66284353330241], [108.76434858561868, 37.68188629811419], [108.78047163305939, 37.90528351512208], [108.83633385562291, 37.98835337990454], [108.95425947519459, 37.9255406758615], [109.00097497021864, 37.988482571113735], [109.02795006664223, 38.11095571513414], [108.9534843279394, 38.19906403347835], [108.98635053864638, 38.335205592863815], [109.15998335205006, 38.5421438674455], [109.3131522973406, 38.62048533792796], [109.42394656827952, 38.76905508102712], [109.5379964542729, 38.78520396599026], [109.63530317610065, 38.905816758936226], [109.67426720576697, 39.01121084200679], [109.8205631857424, 39.0544640164012], [109.96334516824493, 39.18127798109393], [110.1768721864023, 39.28519928581835], [110.10917606022701, 39.42839468037019], [110.22524132692564, 39.424053859697864], [110.33810265541325, 39.31814301179051], [110.49416548055251, 39.37431529451524], [110.63787763904185, 39.24509837548965], [110.84566857344595, 39.46518829970023], [111.01310021420346, 39.56487213833856], [111.12058719324432, 39.58078847930483], [111.12265424989374, 39.52758759169399], [111.04100548661387, 39.4229686549794], [111.11004520082531, 39.38519318281914]]]
                }
            }, {
                type: "Feature",
                properties: {id: "14", name: "山西", latitude: 37.7586, longitude: 112.389},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[113.72104861939818, 36.35586904611952], [113.67288618355053, 36.22145864480055], [113.68714887901751, 36.05573232728503], [113.62756595340602, 35.95323212316393], [113.63252688990406, 35.8181757684969], [113.5943896834371, 35.80784048075358], [113.58472619016158, 35.68686595350093], [113.60994428919759, 35.64606741028271], [113.43036868736499, 35.48938446751919], [113.30484663296568, 35.46584585240416], [113.27285892140213, 35.419182034223525], [113.12956017496208, 35.352286891926525], [113.01979943189832, 35.32859324807998], [112.90275231326859, 35.240588284321916], [112.80761600087772, 35.24198354830207], [112.68245568168436, 35.31117829034588], [112.52597944539508, 35.22027944583971], [112.33498335200005, 35.21867747718383], [112.05846276264634, 35.23449046536271], [112.03815392506357, 35.04576813419203], [111.95769372018901, 35.09416311313717], [111.8294328146726, 35.08256175442145], [111.6829301291221, 35.00794098608759], [111.55766645714124, 34.8634020052983], [111.39426557779416, 34.823275254749234], [111.33127200659777, 34.84092275648001], [111.23293175689503, 34.80077016930787], [111.13867394364758, 34.819218654916995], [111.10942508320096, 34.768679104057384], [110.9734127141254, 34.71689931884842], [110.91083255407904, 34.73250560235161], [110.88380577991279, 34.66610138646979], [110.76582848529637, 34.66134715374815], [110.70862267469664, 34.62096202257925], [110.5305456887325, 34.583677476834055], [110.4831584010393, 34.61582021712931], [110.39990766820426, 34.5925658228544], [110.33603559786457, 34.615846056450295], [110.25226810109194, 34.66325918256521], [110.23743696484405, 34.80139028603287], [110.25965783124394, 34.94476654683868], [110.33541548113948, 35.19800690439513], [110.49654259556428, 35.4040925164565], [110.61984256368339, 35.597259020187636], [110.57560753825732, 35.7125491405304], [110.56041466680341, 35.84918162723031], [110.51096032066226, 35.88685374570383], [110.4472432799534, 36.141876939069476], [110.47318484940126, 36.26372996726417], [110.45897382987835, 36.34940949195445], [110.49612918531363, 36.48407827389323], [110.4831584010393, 36.593012192858424], [110.39380984924514, 36.68238658307433], [110.44124881378167, 36.726544094134624], [110.38021894734658, 36.77002981252579], [110.41799441860746, 36.81615102834721], [110.36957360214001, 36.89123688377515], [110.42745120720741, 37.01027354648696], [110.52785851355958, 37.14450307885403], [110.66500776599554, 37.2822724471157], [110.687383661127, 37.35722911223371], [110.63028120331484, 37.39663239237095], [110.74634647001358, 37.480296536356065], [110.78877282120874, 37.56142853389966], [110.77916100477654, 37.67837230154046], [110.70536705874275, 37.713667304102756], [110.74293582622744, 37.76487864853078], [110.65338056795883, 37.813196113110166], [110.58930179204407, 37.919132799439126], [110.5150427589162, 37.95499624278236], [110.51121870308066, 38.20219045732375], [110.57968997561187, 38.28732737875555], [110.67120893774222, 38.31698965125136], [110.77425174422257, 38.426233629478475], [110.85279992117944, 38.45723948821177], [110.89941206341592, 38.545451158444166], [110.87181684756939, 38.621363837071414], [110.98033735628394, 38.816649075194675], [110.99501346200162, 39.0038469511758], [111.11800337085884, 39.06743480157485], [111.22487023317473, 39.31054657606356], [111.11004520082531, 39.38519318281914], [111.19944542856365, 39.427154446020836], [111.34269249905952, 39.44441437412402], [111.42118899917295, 39.52213572878085], [111.42537479021439, 39.62538523993686], [111.48991865412256, 39.65215363258406], [111.67486860630117, 39.63592723235587], [111.7611682477164, 39.59804840830739], [111.92146853984127, 39.688843899126624], [112.09897708502444, 40.00543956218607], [112.16507124164451, 40.05931224246595], [112.27927615816822, 40.22896596950389], [112.39921715664639, 40.28834219043969], [112.5958459819065, 40.23777680115845], [112.7013692570855, 40.174757392439716], [112.8081327657145, 40.19821849228961], [112.96140506379265, 40.35585744946175], [113.0864620301985, 40.40443329556015], [113.22986413032532, 40.41665477100091], [113.33414717025562, 40.3187279324481], [113.51832197517899, 40.34373932590913], [113.6766068865985, 40.428540351456036], [113.80848514237545, 40.43422475836593], [113.89612837092756, 40.469158027520905], [114.04376793803988, 40.48799408585833], [114.07554894402847, 40.55018667317648], [114.02697309793007, 40.63516856497725], [114.15409712098534, 40.7425780305517], [114.15172000507411, 40.67358999318357], [114.2575533386156, 40.549979966702125], [114.28576867118721, 40.37856924137736], [114.43366661981858, 40.36053416601892], [114.51066450406356, 40.324980781038235], [114.08536746603573, 40.18501516401864], [114.06082116056803, 40.086674913416516], [113.9959672382974, 40.13181427730706], [113.93591922379318, 40.0157231721866], [114.08598758276071, 39.91691783269184], [114.23321373872304, 39.87642934783621], [114.38281701059663, 39.86105561012829], [114.40545128814648, 39.826509915500196], [114.40214399624841, 39.65845815711822], [114.5409468932844, 39.53123078127555], [114.42033410033841, 39.29997874612228], [114.39397911974055, 39.16934072469465], [114.21631554582572, 39.06903677023085], [114.08908816908371, 39.07435944283401], [114.01271040156371, 39.118827013156135], [113.85334028542587, 39.07229238528532], [113.76021935374018, 38.909201565200135], [113.82512495285425, 38.810267035395356], [113.68094770727083, 38.66776927283368], [113.60896243726671, 38.64446320171541], [113.5344966976644, 38.53728628193639], [113.5180119159171, 38.37760610653663], [113.53945763596107, 38.25213572898073], [113.67598676987353, 38.212241523327606], [113.79065677259194, 38.1528653023918], [113.89147749189277, 37.94946686550347], [113.98713056822118, 37.83903432887118], [114.0263529812051, 37.75077098179534], [114.1004053078587, 37.69819021270814], [114.09632286960476, 37.5995399028443], [114.05312137295297, 37.50057953551722], [113.88672326096966, 37.29612173143282], [113.85768110609808, 37.20894358997472], [113.75432824125534, 37.11494415914558], [113.77603234281833, 36.89061676705015], [113.6792423849281, 36.87159983976082], [113.6077738788614, 36.76907379811726], [113.45393314000245, 36.736620999459575], [113.4587390477688, 36.635800279259456], [113.54736413005048, 36.54851878501387], [113.53511681528886, 36.483380641903125], [113.63082156756124, 36.438086249281], [113.72104861939818, 36.35586904611952]]]
                }
            }, {
                type: "Feature",
                properties: {id: "42", name: "湖北", latitude: 30.9857, longitude: 112.264},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[115.37402265791923, 31.417539985382007], [115.38037886019617, 31.35051565187581], [115.4366028179657, 31.32622772882661], [115.54998091039067, 31.182696438389883], [115.59555952385296, 31.161741644761065], [115.6687333522624, 31.21721629549566], [115.76836551315785, 31.143551541570417], [115.87693769691714, 31.129366360469135], [115.94644249912204, 31.03404918092494], [116.03537763886692, 31.030948595501343], [116.0359977555919, 30.988883979512053], [115.85864424003955, 30.860958970779876], [115.86220991435607, 30.784839586577647], [115.77529015531644, 30.75481557887585], [115.76784874922032, 30.68815298147493], [115.83306440579776, 30.594050197858365], [115.88050337123354, 30.578418076832747], [115.9460290870727, 30.445868028386798], [115.87678266818557, 30.38979909934892], [115.91202599480386, 30.315591742165196], [116.04049360589516, 30.221437283503775], [116.08085289864232, 30.046796779747638], [116.07806237158115, 29.9687136907842], [116.12555301296123, 29.904686590813526], [116.14725711542354, 29.788776352846384], [115.99899742978761, 29.744127916270287], [115.85590538892262, 29.73859853809202], [115.70516523638656, 29.86081329969403], [115.48621219283837, 29.864275621222987], [115.41686242116378, 29.711700955135], [115.2720650570567, 29.614652614826298], [115.08633996032091, 29.65700145075641], [115.14018680217919, 29.58752248787252], [115.11393517526813, 29.506907254266423], [115.06308556514671, 29.556568305083175], [114.97275516232082, 29.559953111347], [114.93224083904346, 29.50006012647367], [114.88604210795688, 29.52452891757548], [114.81824262899408, 29.393865057726202], [114.70868859330392, 29.389524237953253], [114.46953006406119, 29.31792654157661], [114.2893860214478, 29.358440863954712], [114.2465462591025, 29.248912664887513], [114.06345665889768, 29.203153185171345], [113.902381220417, 29.066339830418826], [113.77282840370782, 29.125302639305346], [113.7112300955925, 29.072928574893808], [113.65490278503552, 29.12403656743365], [113.64136355998028, 29.22175670041139], [113.5877234227977, 29.293793647259037], [113.72936852373834, 29.437092393698975], [113.67412641789991, 29.531350206047165], [113.64942508280132, 29.67627676046405], [113.53615034406317, 29.685733547265443], [113.59030724518323, 29.879959418192584], [113.41584761037882, 29.764565945062316], [113.12790652856336, 29.462853095094317], [113.04884158676975, 29.454274807436406], [113.0081205588167, 29.518095200932777], [112.92781538267377, 29.49522838028554], [112.90848839702193, 29.600803331408628], [113.01742231688638, 29.724620063465153], [113.01292646658322, 29.772989203089224], [112.93629031844347, 29.693304145469938], [112.8861641787338, 29.791773587281256], [112.64814253105294, 29.626899928688744], [112.4439172709653, 29.641369329730793], [112.28191165559838, 29.536931261068844], [112.21767785005272, 29.669145412730558], [112.17003217994113, 29.64904328072288], [112.12631391755326, 29.707153428887608], [111.92363895107673, 29.85639496555521], [111.76860965381246, 29.91959524232658], [111.58489993688261, 29.90435069402926], [111.49472456278829, 29.93620921528307], [111.4149878283256, 29.92579641407326], [111.24616092268843, 30.03173310040222], [110.94354373605461, 30.06351410639087], [110.74185062060963, 30.096173611522943], [110.7155989927993, 30.0296402044319], [110.5433614442752, 30.055013333098827], [110.46315962091973, 30.013982244984675], [110.50057335787415, 29.862570298880172], [110.59116214401769, 29.77136139601157], [110.52553307539114, 29.725240180190156], [110.42745120720741, 29.722165432288875], [110.3616671080506, 29.65010264701951], [110.22513797413819, 29.73733246532106], [110.10390506356777, 29.78541738500428], [109.7832011247321, 29.73492951098811], [109.70000206874045, 29.65573537888463], [109.69085534120097, 29.604911607184903], [109.61049848821466, 29.618915921132867], [109.43231815036233, 29.533908189111628], [109.38095177630339, 29.395337836072258], [109.32834516789512, 29.353712470554086], [109.33816368990239, 29.289685370583385], [109.26922733027709, 29.24234975793496], [109.20659549428666, 29.104244492889023], [109.07730105999593, 29.214134426262746], [109.01415246006798, 29.307487901045818], [108.9205664412882, 29.34898407625414], [108.87204227113386, 29.501610419185482], [108.87204227113386, 29.63896637629722], [108.69603234271847, 29.698161729180413], [108.65836022334565, 29.81701752383961], [108.61303999230176, 29.858022773532156], [108.52100426623383, 29.727152208107924], [108.44684858589352, 29.73578217170987], [108.40044315013125, 29.831073512832347], [108.53821251839304, 29.88546295794913], [108.55035648036721, 30.00925385248331], [108.52999596594111, 30.112968450733405], [108.53201134574698, 30.315488390276982], [108.38059939964262, 30.39969513572194], [108.43320600805077, 30.48728668922928], [108.57314578664875, 30.497854519170716], [108.66998742138236, 30.57384471306301], [108.73251590368596, 30.519713650364736], [108.8684249208734, 30.5513654651441], [108.96464643798276, 30.607486070126015], [109.17925866085852, 30.566790879695304], [109.28648725838025, 30.601543280797756], [109.39418094299612, 30.583740750335323], [109.63979902640398, 30.717944444280675], [109.74857791483885, 30.835353298116274], [109.8706893245527, 30.888580024148837], [109.99672814288942, 30.826232408099145], [110.06623294509433, 30.828480332801178], [110.12767622267955, 30.906408393032876], [110.13759809837347, 31.000175278965884], [110.1076257666158, 31.12233836552312], [110.17485680479768, 31.18866506613989], [110.14674482591295, 31.331111151858153], [110.10824588424015, 31.398032130778205], [109.92949710470765, 31.51872243898933], [109.73260989792846, 31.56112295176277], [109.72449669826403, 31.636079616880778], [109.6587642759506, 31.71811595288895], [109.59396202962392, 31.737597968171656], [109.61018842985209, 31.927302151273295], [109.66630903483411, 32.043005682765994], [109.60099002456991, 32.21330536584989], [109.54765994664916, 32.23361420343275], [109.48699181541997, 32.35458873068541], [109.56130252539117, 32.40502492875743], [109.57944095263781, 32.54121816678497], [109.6348380881073, 32.59064667450443], [109.87952599462898, 32.591628526435386], [110.0008622579868, 32.55194102635724], [110.0738293799219, 32.61656240553057], [110.16829389874442, 32.62235016522794], [110.15496137926425, 32.72957876185032], [110.09584353984746, 32.84125153283199], [109.89911136269916, 32.9144253612414], [109.83580773314031, 32.895873521046155], [109.73958621603106, 32.93000580542352], [109.78118574402686, 33.044830837772935], [109.75725955618356, 33.08007416439116], [109.45314375188258, 33.148157864194076], [109.51567223508562, 33.23706716641661], [109.65969445193741, 33.26409394058291], [109.87534020358748, 33.24342336689483], [109.95993452355941, 33.21412283050424], [110.09429324803494, 33.21332184482728], [110.23443973220782, 33.15632273980259], [110.43225711497382, 33.17306590396828], [110.5473922056857, 33.2453353948126], [110.60449466439724, 33.153893947947296], [110.7528577010221, 33.097980048540336], [110.81755659366183, 33.194899196740494], [110.90013553292846, 33.20520864516283], [110.97460127163134, 33.266471056494055], [111.00266157367264, 33.20753408512988], [111.10880496557667, 33.14802867298479], [111.21634362236023, 32.97648875645089], [111.21014244971428, 32.93021251099859], [111.36331139500481, 32.824766751084695], [111.50743696464417, 32.68206228294801], [111.53162153490592, 32.61108470329637], [111.62908328726382, 32.62645844190351], [111.71119713763773, 32.600232652514904], [111.77925499901897, 32.52036672594363], [112.0533467956181, 32.45484101010456], [112.14460737533017, 32.39463796596934], [112.28578738827736, 32.350635484539936], [112.53393761632793, 32.37675792114115], [112.75087527917071, 32.349782822918996], [113.04584435413358, 32.42523041445207], [113.11240359874711, 32.38156382890756], [113.21870202028197, 32.41027008699487], [113.33631757969249, 32.31435862914739], [113.52767540919274, 32.296685288994894], [113.61640384336266, 32.38567210558321], [113.72921349500677, 32.4192617858028], [113.78275027940191, 32.359368800929474], [113.7816650737841, 32.19371999777971], [113.75236453739342, 32.13759939189842], [113.79437747563998, 31.972519029529593], [113.88579308498294, 31.84482656479412], [113.95958703011729, 31.831829942098096], [113.97198937361065, 31.74656382945713], [114.08547081882318, 31.78379669925829], [114.14396854061556, 31.847539578388876], [114.26737186062286, 31.808730577454185], [114.36183637944538, 31.73426483785198], [114.49531660387817, 31.759198716947168], [114.55567467674484, 31.737675483436874], [114.54787153544294, 31.572879340109523], [114.63820193916808, 31.56802175549967], [114.76656619657263, 31.49048126889548], [114.99885175960094, 31.477613837408654], [115.07688317262023, 31.51554433919995], [115.12855960504169, 31.5945317648291], [115.21346398337607, 31.545594184424004], [115.21852827356088, 31.44748647691938], [115.28622439973623, 31.395138250929477], [115.37402265791923, 31.417539985382007]]]
                }
            }, {
                type: "Feature",
                properties: {id: "43", name: "湖南", latitude: 27.6667, longitude: 111.712},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[113.902381220417, 29.066339830418826], [113.9051717465789, 28.955984809051756], [114.01209028483873, 28.912912502709815], [114.14272830626629, 28.788501492350008], [114.11280765225126, 28.615514634992422], [114.05694542878854, 28.564277452142676], [114.17704145689771, 28.50730418553971], [114.17161543240633, 28.43971141215195], [114.22685753824476, 28.40896393493759], [114.18448286299372, 28.29307953539228], [114.09187869704425, 28.257707018464117], [114.02821333227939, 28.183525498802737], [114.0137956080809, 28.106475937714322], [113.91648888625309, 28.021183987551012], [113.7368099298343, 27.98157400183871], [113.70595909983251, 27.93772654914096], [113.70099816333448, 27.81894826884752], [113.61097781797184, 27.699472358362613], [113.56209191261172, 27.590564276919878], [113.60012576719032, 27.368226427107885], [113.66746015815977, 27.329546617382505], [113.78275027940191, 27.370784410172348], [113.85096316861535, 27.345902207920517], [113.82357466014247, 27.22867422123835], [113.7540181819935, 27.141857814986196], [113.89240766787958, 26.945332343412872], [113.83163618386277, 26.827484239106354], [113.86470910014492, 26.65586680820661], [114.08505740767316, 26.577499498403057], [114.06841759629509, 26.45370860386899], [114.02061689655255, 26.399241645285628], [113.99860273572773, 26.283098863321896], [113.92537723227343, 26.17036672604351], [114.06283654217259, 26.17778229371791], [114.16215864470564, 26.221371364896584], [114.21352501786521, 26.169772446840966], [114.04144249897212, 26.068848374752747], [114.01829145658542, 25.934618842385674], [113.90718712818341, 25.749772243893972], [113.91793582617748, 25.660191148102996], [113.98242801324216, 25.58166881046722], [113.9275476417103, 25.44811106987001], [113.8280705104456, 25.356747138269824], [113.71386559482127, 25.360907090889512], [113.58245242703788, 25.325947984212064], [113.52343794220724, 25.385582587566347], [113.42163537007627, 25.383799749958513], [113.30867068880121, 25.46382070616059], [113.2829358258276, 25.517590032753887], [113.2174617859327, 25.505575262888073], [113.08976932209646, 25.41415965444446], [112.90807498587185, 25.320108546772076], [112.85236779203987, 25.327653307454185], [112.88910973542596, 25.24145701792699], [113.01478681765747, 25.245616970546706], [112.96905317636299, 25.18058218022344], [112.95876956636229, 25.056145331441954], [112.9888969259523, 24.963928738220716], [112.80782270735199, 24.942844754281964], [112.71408165894144, 24.999507962522472], [112.66333540160747, 25.113144436466513], [112.45838667200724, 25.164252428107062], [112.2637732283518, 25.175517890038634], [112.18274458179701, 25.152573554126263], [112.12099124584927, 24.949278469126057], [112.16476118418137, 24.911993923380834], [112.14476240406168, 24.79355154077095], [112.06636925673581, 24.796574611828873], [111.99655439706777, 24.735673935703602], [111.92596439014443, 24.774870510265856], [111.79703169195903, 24.76042694854482], [111.6671171409433, 24.779676418931516], [111.61575076688436, 24.706967678515625], [111.51694542918818, 24.64265635770468], [111.4281653181749, 24.681026109067673], [111.47364057795025, 24.792853908780856], [111.42971561088672, 24.943413194163526], [111.46185835208126, 25.019480903321067], [111.42692508292618, 25.10619395588637], [111.31814619269264, 25.11200755490468], [111.27437625525994, 25.147664293572262], [111.12575483621669, 25.044466458360404], [111.07903934119264, 24.944240017362944], [111.03061852382575, 24.91801422797417], [110.95460249241103, 25.025346178283485], [110.99320478687144, 25.15076487899597], [111.11376590387334, 25.238640652444133], [111.16420210194548, 25.364937852300073], [111.25375735931465, 25.39912181172221], [111.31582075362485, 25.503198146976928], [111.30496870284338, 25.639158840108422], [111.44661380378395, 25.92671234829625], [111.31737104723601, 25.909013169721987], [111.27851037035731, 25.861057441247937], [111.19432946243475, 25.957511502354052], [111.23169152164638, 26.062905585424375], [111.25189700734103, 26.2797140570581], [111.12327436661869, 26.305991523290245], [110.94726443910255, 26.389888211271867], [110.87894819530297, 26.275218206754815], [110.72402225082618, 26.27431387008903], [110.68862389457703, 26.33232066546644], [110.55411014226928, 26.34123484990846], [110.53654015490423, 26.224859523947856], [110.48455366412031, 26.1715552844488], [110.34166832883028, 26.11274750429385], [110.24699710533218, 25.978207913564347], [110.13821821509856, 26.05166596101523], [110.03362511590632, 26.036498927983132], [110.06204715405289, 26.149928697251568], [109.92732669527078, 26.197083441847383], [109.83844323057059, 26.045025539696894], [109.78134077365777, 26.02376068770549], [109.77203901558812, 25.908160509000226], [109.67659264483473, 25.889066067345112], [109.67225182506158, 25.98531342197687], [109.6031604349061, 26.05267365226726], [109.45670942619901, 26.03885020637189], [109.39929691002442, 26.269947210994985], [109.29656416190653, 26.312528590921687], [109.31501264931433, 26.42572581619342], [109.40255252507893, 26.537295234387585], [109.37723107325536, 26.646151638087645], [109.29403201726376, 26.727309474952335], [109.39707482284473, 26.754672145902788], [109.51985802612694, 26.85836090752983], [109.44384199381295, 26.900993964299943], [109.50714562427117, 26.97636404146735], [109.49918745333832, 27.062482814830076], [109.43820926284718, 27.131031601727074], [109.23057335807403, 27.151986396255182], [109.15564253137774, 27.079716905410862], [109.0954911640859, 27.13444224731188], [109.0077962586904, 27.0940571152436], [108.95017703694072, 27.026903591427583], [108.87421268057074, 27.018118598194718], [108.79132368384091, 27.08312755009638], [108.89684695812059, 27.147206326011116], [108.90010257407448, 27.188805854006944], [109.0149276064239, 27.26218638799142], [109.20638878781233, 27.444759223359398], [109.27687544194805, 27.43853221319111], [109.31842329310047, 27.500621445922945], [109.41836551325781, 27.559506741343057], [109.44725263939773, 27.65001801222155], [109.41340457586051, 27.738953151966427], [109.35878258674694, 27.7607347678952], [109.30927656466173, 27.897806505066143], [109.30989668228608, 27.970308539007874], [109.36327843615089, 28.057486681365248], [109.300129836223, 28.051466375872565], [109.35428673734299, 28.265174262082496], [109.26385298083034, 28.322225043051304], [109.25837527859625, 28.505908922458815], [109.28509199439998, 28.58463796656895], [109.21321007718325, 28.62879547852853], [109.28121626172111, 28.729125271414176], [109.24674808235807, 28.785530097236204], [109.24550784710942, 28.931257636430814], [109.27480838439936, 29.049260769468873], [109.20659549428666, 29.104244492889023], [109.26922733027709, 29.24234975793496], [109.33816368990239, 29.289685370583385], [109.32834516789512, 29.353712470554086], [109.38095177630339, 29.395337836072258], [109.43231815036233, 29.533908189111628], [109.61049848821466, 29.618915921132867], [109.69085534120097, 29.604911607184903], [109.70000206874045, 29.65573537888463], [109.7832011247321, 29.73492951098811], [110.10390506356777, 29.78541738500428], [110.22513797413819, 29.73733246532106], [110.3616671080506, 29.65010264701951], [110.42745120720741, 29.722165432288875], [110.52553307539114, 29.725240180190156], [110.59116214401769, 29.77136139601157], [110.50057335787415, 29.862570298880172], [110.46315962091973, 30.013982244984675], [110.5433614442752, 30.055013333098827], [110.7155989927993, 30.0296402044319], [110.74185062060963, 30.096173611522943], [110.94354373605461, 30.06351410639087], [111.24616092268843, 30.03173310040222], [111.4149878283256, 29.92579641407326], [111.49472456278829, 29.93620921528307], [111.58489993688261, 29.90435069402926], [111.76860965381246, 29.91959524232658], [111.92363895107673, 29.85639496555521], [112.12631391755326, 29.707153428887608], [112.17003217994113, 29.64904328072288], [112.21767785005272, 29.669145412730558], [112.28191165559838, 29.536931261068844], [112.4439172709653, 29.641369329730793], [112.64814253105294, 29.626899928688744], [112.8861641787338, 29.791773587281256], [112.93629031844347, 29.693304145469938], [113.01292646658322, 29.772989203089224], [113.01742231688638, 29.724620063465153], [112.90848839702193, 29.600803331408628], [112.92781538267377, 29.49522838028554], [113.0081205588167, 29.518095200932777], [113.04884158676975, 29.454274807436406], [113.12790652856336, 29.462853095094317], [113.41584761037882, 29.764565945062316], [113.59030724518323, 29.879959418192584], [113.53615034406317, 29.685733547265443], [113.64942508280132, 29.67627676046405], [113.67412641789991, 29.531350206047165], [113.72936852373834, 29.437092393698975], [113.5877234227977, 29.293793647259037], [113.64136355998028, 29.22175670041139], [113.65490278503552, 29.12403656743365], [113.7112300955925, 29.072928574893808], [113.77282840370782, 29.125302639305346], [113.902381220417, 29.066339830418826]]]
                }
            }, {
                type: "Feature",
                properties: {id: "51", name: "四川", latitude: 30.5431, longitude: 102.384},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[105.4985530948494, 32.90739736629541], [105.56826460173, 32.73045726189309], [105.63327355273225, 32.70746124913737], [105.72448245560088, 32.759783636705464], [105.80597619014901, 32.75505524330484], [105.87548099235391, 32.84471385346154], [106.03934695789576, 32.87243825871872], [106.10249555872309, 32.85975169528453], [106.05650353411079, 32.71355906809657], [106.11489790221646, 32.64883433703503], [106.22894778910916, 32.59196442321954], [106.36397830625384, 32.63867991824361], [106.60396365779661, 32.67552521441709], [106.71258751839923, 32.73782115272397], [107.06533084474273, 32.708313909859044], [107.09623335158784, 32.669246528304626], [107.06998172377752, 32.52292470990747], [107.20217003791686, 32.452773953455164], [107.28412885865993, 32.452928982186705], [107.37053185376203, 32.51982412448379], [107.44830488526219, 32.522227077917336], [107.45962202403717, 32.4086422799173], [107.65919640508997, 32.388617662275294], [107.77293623272095, 32.3107154404652], [107.84352623874491, 32.22816234051962], [108.00305138631239, 32.14989838350357], [108.05178226114242, 32.22661204690846], [108.2367322124216, 32.2626563583043], [108.47940473823809, 32.25027985323257], [108.51836876790429, 32.19756989203688], [108.36116906120316, 32.167184150028476], [108.41920169500219, 32.10000478779068], [108.34473595629936, 32.0735464544054], [108.26778974799845, 31.972906603157185], [108.28696170491878, 31.922160345823244], [108.50069542865106, 31.790824693304927], [108.5161983575681, 31.708271593359342], [108.44963911295469, 31.6529002963116], [108.4067993506095, 31.566032213216033], [108.32318688436726, 31.49936961491582], [108.22308963367965, 31.46789866818898], [108.1940474788081, 31.330930283805543], [108.03312706905899, 31.222228908837053], [108.00677208936037, 31.038622544694675], [107.93168623303325, 30.948783067384596], [107.92951582179768, 30.872663683182395], [107.81153852718126, 30.798017076426902], [107.72151818181857, 30.889225979295446], [107.67966027230369, 30.85333669753058], [107.5075777534106, 30.821994941113672], [107.45667646734512, 30.760861720991613], [107.47760542165287, 30.60950145083129], [107.37213382421663, 30.49986989987596], [107.22873172408981, 30.238154609247744], [107.032929722029, 30.057855536104142], [106.77036176977981, 30.03656484569106], [106.71729007427746, 30.05927663850602], [106.61781294211352, 30.268695379987776], [106.53854129384564, 30.341119900463013], [106.44867597901322, 30.32388580988217], [106.40831668536674, 30.27192515752006], [106.30486046773638, 30.262881781868685], [106.23902469263544, 30.22024872509857], [106.12471642512287, 30.342334296390675], [105.99883263641698, 30.385122381892415], [105.79171349468203, 30.423362942046168], [105.73445600813824, 30.28711802807456], [105.65373742084529, 30.28145945868701], [105.64831139455521, 30.213918362142692], [105.55720584537346, 30.147591661525922], [105.73890018069875, 30.032637437068047], [105.70996137861476, 29.86750539785578], [105.55751590373592, 29.80391754835611], [105.54836917529724, 29.736634833330925], [105.41168501175383, 29.70317434342124], [105.29107221880787, 29.584783636755418], [105.31484337791954, 29.46959686920013], [105.40517378074532, 29.429961045965484], [105.41246015810981, 29.34394562449097], [105.50583947131452, 29.291468207291956], [105.64459069240655, 29.269660752941377], [105.70804935069691, 29.29095144335446], [105.70060794460096, 29.223694565851503], [105.74530805891976, 28.994767971564613], [105.79512413936754, 28.936528632190686], [105.87796146015324, 28.920043850443392], [106.00844445194986, 28.973399766785775], [106.26031538304852, 28.869323432430434], [106.25736982635635, 28.793850003374928], [106.29803917836534, 28.672436224751948], [106.38242679186294, 28.572494005493894], [106.33865685443033, 28.48012238174249], [106.26868696513134, 28.556629340471687], [106.18879520103764, 28.584612128147143], [105.98441491131905, 28.753542384773226], [105.89191409725777, 28.60931346324574], [105.68319298686686, 28.58344940816366], [105.62056115087643, 28.482421983287935], [105.65575280155053, 28.441106676132136], [105.6504818048914, 28.340027574413], [105.86602420465334, 28.25835297271155], [105.89175906762682, 28.153889064728617], [106.00896121588738, 28.140246486885815], [106.10942020088152, 28.17471466714815], [106.19933719255738, 28.124252631553674], [106.21525353442308, 28.056091417385005], [106.29896935435215, 28.00043589949715], [106.34537479011442, 27.83494212507904], [106.24760298119259, 27.77523000735897], [106.10358076434073, 27.788071601323338], [106.03919192916413, 27.756807359272273], [105.87594608034726, 27.745206000556436], [105.63110314329538, 27.682238267781855], [105.47979454997846, 27.7838858102819], [105.29696333219198, 27.721744899807277], [105.2281303235556, 27.855793565021003], [105.28239057836248, 28.000745957859692], [105.191646762588, 28.009660143201046], [105.17190636578619, 28.061672472406684], [105.05573774629994, 28.088130804892756], [104.96618248893071, 28.047797350567294], [104.9582759948413, 27.95653676995596], [104.89740115803704, 27.901113796064806], [104.7023743023322, 27.88294953129588], [104.60475752214194, 27.845845851804626], [104.4824910827972, 27.890985215695167], [104.3753658389623, 27.961678575405898], [104.3338179869105, 28.0467379833712], [104.44461225784943, 28.09988719323934], [104.3765027196248, 28.282304998976485], [104.26849897664641, 28.333800564244626], [104.25005049013805, 28.530791123811298], [104.43996137881453, 28.605360216201007], [104.41422651584105, 28.640112616404167], [104.04784061075554, 28.63360138629494], [103.95260094557722, 28.614972031733913], [103.85105675676391, 28.66812124340072], [103.79524621014446, 28.53117869743889], [103.88030561721047, 28.32573904142359], [103.7089465678298, 28.215874946471615], [103.6437825871966, 28.27049693468578], [103.57179731719248, 28.243185940578655], [103.45903934059311, 28.13476878555096], [103.44121097170898, 28.042397161799585], [103.48921837792574, 28.037746282764715], [103.50854536267832, 27.86452688230972], [103.41475263922291, 27.742906399011076], [103.28612999939992, 27.63371409852678], [103.28504479378222, 27.580849106800827], [103.21812381396279, 27.56687063217393], [103.12076541529166, 27.41225474695898], [102.97741499200828, 27.388896999896588], [102.9548323913018, 27.42078135777348], [102.88946170509365, 27.29148692528139], [102.9138529809303, 27.112298896177123], [102.87819624226279, 27.031967882511765], [102.90134728375011, 26.92473928499001], [102.97529625941479, 26.831127427788545], [103.05782352093877, 26.536287543135558], [102.99581180167326, 26.485412096391144], [103.00325320776926, 26.400352688425784], [102.95142174661635, 26.345136420109668], [102.87819624226279, 26.3650576849642], [102.66782148637247, 26.22586721430045], [102.60994388220433, 26.26020620425288], [102.62648034079507, 26.345136420109668], [102.56813764863352, 26.378648586862766], [102.40055097914433, 26.311805121409208], [102.35833133262486, 26.262583320164083], [102.2520845888327, 26.228864447835946], [102.1125582213848, 26.08442881893484], [101.92156212798983, 26.09887238245446], [101.84952518114216, 26.034845282483758], [101.7756795591643, 26.106520494125533], [101.76374230276502, 26.17633535379352], [101.6766158390497, 26.227701727852462], [101.59491539892656, 26.208684801462397], [101.57998090989105, 26.306921699277012], [101.64364627465585, 26.34947723988273], [101.54416914339123, 26.49497223597993], [101.41244591724524, 26.569670517780168], [101.49466312130602, 26.705579534967598], [101.48055545457055, 26.787124946359143], [101.40944868370974, 26.729454046866778], [101.34242435110292, 26.871047471863363], [101.1414547060698, 27.04486115242028], [101.17282230000916, 27.191053778708977], [101.00384036743901, 27.197513332874053], [100.99174808140884, 27.330812690153465], [100.94084679624262, 27.434733994878002], [100.86694949742133, 27.494652818173023], [100.87211714129302, 27.561987210041764], [100.6609155622034, 27.875094713150446], [100.62541385316678, 27.897263901807634], [100.55926801970332, 27.8245293238692], [100.40950971909825, 27.828999334851375], [100.34915164623146, 27.746730454846613], [100.29747521381, 27.76107066557873], [100.29592492109816, 27.852615465231537], [100.20208051990011, 27.898788356997102], [100.05883344940412, 28.066142483388916], [100.04689619300484, 28.187091173119143], [100.16203128461609, 28.236261298420203], [100.14306603417009, 28.341577867124812], [100.00095584523609, 28.45619619389916], [99.93387983578583, 28.569367580749287], [99.84561648960926, 28.603809923489194], [99.82840823834948, 28.672565415961145], [99.73234174997174, 28.745015773958755], [99.71885420086068, 28.842270819842412], [99.62867882676647, 28.814623928051844], [99.53436933757484, 28.680807806834792], [99.50289839084809, 28.5793669699097], [99.39313764868348, 28.54278005615464], [99.38864179927964, 28.334317328182124], [99.41644371890254, 28.25476146087277], [99.38151045064677, 28.184533189155303], [99.27474694201777, 28.277318224056813], [99.16255740799795, 28.438161119440167], [99.16948205015649, 28.602492173874708], [99.11770226404826, 28.70871308014449], [99.0992537784391, 28.85604258889441], [99.1210612327896, 28.96466644949706], [99.10881391802786, 29.223772081116635], [99.0625118350531, 29.30828888582343], [99.04199629099605, 29.562459418467398], [98.98675418515751, 29.650903631797206], [99.01765669110341, 29.85334605607565], [99.05631066330642, 29.91533193602001], [99.03408979690664, 30.05532339146137], [98.98675418515751, 30.144361883993753], [98.96070926292208, 30.459975694222862], [98.93275231276903, 30.490697333015504], [98.90536380429614, 30.663813381582287], [98.95430138470113, 30.747865099194996], [98.77508751807454, 30.90222260199144], [98.80304446822765, 30.990976874583083], [98.69312869733153, 31.124741318956694], [98.60378014463794, 31.16975149253733], [98.63793826743705, 31.309277859085967], [98.68269005680071, 31.315918281303652], [98.76780114071005, 31.230367946923195], [98.88495161302654, 31.354081326192244], [98.59215294839987, 31.59882090955736], [98.55871829601256, 31.677110704095668], [98.42565148272968, 31.813407294011427], [98.45298831615781, 31.984094549823624], [98.30958621603105, 32.12871104587808], [98.22018598829271, 32.252191881150424], [98.2057682640941, 32.355648097881414], [98.08055626805731, 32.40468903287254], [98.01415205307472, 32.46450450338011], [97.7157206556837, 32.544189560999484], [97.43067345641487, 32.70032990230317], [97.38416466696577, 32.77918813672312], [97.36096194863501, 32.897036241029724], [97.40028771440649, 32.957704373158236], [97.5044157247059, 33.02669241052635], [97.47645877455278, 33.12030426682844], [97.50053999202703, 33.19435659438136], [97.61567508273885, 33.32837942207263], [97.7242989442409, 33.406126614251804], [97.53929731611828, 33.45372060841933], [97.47738895143897, 33.56224111623459], [97.3905208683434, 33.61138540311384], [97.3835445502408, 33.86987091710907], [97.61024905824746, 33.93087494602193], [97.63892947791305, 33.99957876254982], [97.69567020141864, 34.00523733193728], [97.74507286981708, 33.86485830286841], [97.81907352142582, 33.86418651019926], [98.03492597865096, 33.95978790878502], [98.21181440620984, 33.939453232780465], [98.30167972194164, 33.84584137647835], [98.45794925265585, 33.84010529182575], [98.64584476062714, 33.676161811018716], [98.62786136301145, 33.615881253417086], [98.7357100772582, 33.4897649198152], [98.7729171077383, 33.30272207346488], [98.8520854023194, 33.17487457909857], [99.10064904241938, 33.07245189114187], [99.22529259587657, 32.99891632752647], [99.28937137179133, 32.88714020375744], [99.50940962095723, 32.83543793381361], [99.69854536327784, 32.744616604572656], [99.72893110618554, 32.75766490321274], [99.7692903989327, 32.92176341454987], [99.84096561057441, 32.9570067411681], [99.86024092028225, 33.02764842403559], [99.95082970642585, 32.94413930878201], [100.04689619300484, 32.93548350675843], [100.13660648000501, 32.847504381422084], [100.15862063993058, 32.78226288552375], [100.11903649264002, 32.67087433538231], [100.22316450383875, 32.63689708153504], [100.25499718577151, 32.72580638285831], [100.3994328146726, 32.75838837272519], [100.4984965347872, 32.669091497774446], [100.56092166520273, 32.5633356803973], [100.47302005423205, 32.48527842895629], [100.53120771676265, 32.40339712257915], [100.60303795803532, 32.451223659844004], [100.67471316877766, 32.68309581082303], [100.83485843307022, 32.66345876680862], [100.90219282403956, 32.63046336489239], [101.04947065594598, 32.675602728782934], [101.17080691930391, 32.68834096906048], [101.23659101756135, 32.807506822082104], [101.23194013942583, 32.857710476157564], [101.13142947758831, 32.93835154908473], [101.16414065956377, 33.12808156970863], [101.32428592295696, 33.202340602836614], [101.37425703303563, 33.17864695898996], [101.44515709832143, 33.235852768690336], [101.59196984313377, 33.12955434805468], [101.64364627465585, 33.1277715113462], [101.72694868433427, 33.26778880520919], [101.66514367064383, 33.32039541271811], [101.69108524009175, 33.42028595603202], [101.7660677427321, 33.47121308051922], [101.77753991113792, 33.53004669909589], [101.79536828002205, 33.605080878579685], [101.88399336140452, 33.54632477526815], [101.9232157743885, 33.40638499577091], [101.83216190025149, 33.26920990671178], [101.85278079619678, 33.122087104436304], [102.00424441914458, 33.21879954706148], [102.09938073063614, 33.2222360301686], [102.13095503104978, 33.28466116058408], [102.27874962779305, 33.37775625294876], [102.4818380072183, 33.46503774719426], [102.4818380072183, 33.540149441043894], [102.35600589355715, 33.60939585993103], [102.34313846207033, 33.72517690668886], [102.24738203295442, 33.79767894152988], [102.26422854990767, 33.82615265651987], [102.17121097190886, 33.941752835225174], [102.31936730295865, 33.9873572862098], [102.37197391226618, 33.97596263306903], [102.44060021442834, 34.059730129841626], [102.61764367071879, 34.08350128805395], [102.57480390837361, 34.13951854114768], [102.78181969642179, 34.27418732398584], [102.93059614509599, 34.295581367186315], [103.00056603439498, 34.21398427985062], [103.12009362172324, 34.16861237196338], [103.15239139164942, 34.108512682414386], [103.1421077816488, 33.96154490797116], [103.19316409734517, 33.883771878269556], [103.18417239763806, 33.822096055788364], [103.27197065582106, 33.76517446512946], [103.43630171115507, 33.76972199227612], [103.55861982644387, 33.80687734591277], [103.52275638220124, 33.714118150332354], [103.65944054574459, 33.710526638493576], [103.74512007043484, 33.67603261980952], [103.91513553267868, 33.683293157852916], [104.0930058130678, 33.668539536870156], [104.15630944172733, 33.62402029150326], [104.17465457634756, 33.49015249344279], [104.2928902533825, 33.363571071847446], [104.38291059784581, 33.32649323257658], [104.28059126177726, 33.272052109717094], [104.32823693188885, 33.14035472289217], [104.40585493375818, 33.06327932428141], [104.3775879252425, 32.95876374035433], [104.32126061378625, 32.9527175973393], [104.28885949107269, 32.8478919541503], [104.40569990412729, 32.809367174055836], [104.55840376232374, 32.68834096906048], [104.64542687415093, 32.657877712686286], [104.8409704937933, 32.63981679890611], [104.89833133312447, 32.611834011230656], [105.03181155755732, 32.63867991824361], [105.08829389864451, 32.59997427009651], [105.21304080578858, 32.66335541402114], [105.2699882339698, 32.641702989301535], [105.43721316915247, 32.74645111722529], [105.38522667836855, 32.874221096326465], [105.4985530948494, 32.90739736629541]]]
                }
            }, {
                type: "Feature",
                properties: {id: "53", name: "云南", latitude: 24.4603, longitude: 101.661},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[105.29696333219198, 27.721744899807277], [105.19738284724059, 27.398638007537983], [105.08255781489117, 27.412513129377373], [104.87089114780821, 27.30975454373717], [104.78340294798767, 27.332207953234473], [104.59421552882361, 27.31378530514769], [104.44368208186262, 27.347219957535003], [104.34441165617295, 27.441193549043078], [104.17434451708573, 27.271513984482795], [103.98112633741056, 27.39951650578209], [103.9113114768432, 27.390369778242643], [103.85932498605928, 27.315387274703], [103.69540734277467, 27.151702175415068], [103.59644697544758, 27.076073716728644], [103.63711632655719, 27.01842865745664], [103.7008850441095, 27.052431748826137], [103.77829634040381, 26.955874334932616], [103.77829634040381, 26.88001333314878], [103.72961714061853, 26.856500556455472], [103.73736860597637, 26.736146145028528], [103.77209516775775, 26.74046112727916], [103.75783247319004, 26.629434312343648], [103.7865645687998, 26.577111924775465], [103.91580732624709, 26.517787379783726], [104.02040042543922, 26.51419586794495], [104.1533638859346, 26.65124176669417], [104.21806277857439, 26.626617946860705], [104.35851932200904, 26.647831122008625], [104.42988447528825, 26.71253001644712], [104.46621300662497, 26.613466295433142], [104.55943729019873, 26.584708360502418], [104.62651329964899, 26.49765941025359], [104.67550255689741, 26.379268704487117], [104.54517459473169, 26.270412298988447], [104.50497033071622, 26.14742239013114], [104.49897586544387, 26.030788683550924], [104.39293582632729, 25.94787384750009], [104.42058271721862, 25.856923326150564], [104.36704593282349, 25.7504957143058], [104.2995048362792, 25.760831000250477], [104.30622277196329, 25.664764512772024], [104.42244306829298, 25.579265855235008], [104.43267500234941, 25.506815497237426], [104.53504601436208, 25.508055732486042], [104.56584516841974, 25.38119009005061], [104.66888797400082, 25.296828314974732], [104.7782353050153, 25.26174001708813], [104.71973758322287, 25.210942083810124], [104.68904178285203, 25.10125885691076], [104.70051395125785, 24.998965359263906], [104.54563968272521, 24.81342112878204], [104.53985192302781, 24.74177175556207], [104.49463504387217, 24.698208522805146], [104.50186974529248, 24.578190009061643], [104.59917646712023, 24.40251597743037], [104.66702762202709, 24.33975495023074], [104.72872928293006, 24.364197902910817], [104.69942874564, 24.448740546039417], [104.75265547077339, 24.46832591410964], [104.96106652190247, 24.41641693769148], [105.11299523284364, 24.40982819321654], [105.17624718555913, 24.30991181148096], [105.16994266192427, 24.167362372075814], [105.28290734319927, 24.074060574136183], [105.28631798698547, 24.124341742577286], [105.44718672079054, 24.037602850691073], [105.52046390198745, 24.11622854291292], [105.61849409422706, 24.135322984568035], [105.64086998935846, 24.08248383216315], [105.78799279163405, 24.020652980950274], [105.8722253764, 24.024709580782442], [105.9105692893412, 24.08150198023219], [106.02110517786161, 24.110905870309637], [106.01516238763406, 24.059436143463216], [106.15742760619898, 23.973730781250552], [106.19375613843505, 23.869396064476774], [106.13412153508074, 23.796739000004862], [106.15215661043919, 23.750411077709003], [106.12812706890912, 23.540656440342474], [105.98301964733889, 23.46903290554411], [105.84804080613827, 23.519391588351112], [105.70169315021869, 23.359298000902086], [105.6289327329593, 23.34728323013701], [105.6188041516902, 23.28465139414658], [105.52132535803946, 23.16314776222964], [105.43085616100012, 23.267805685000013], [105.33225752800013, 23.31795766200014], [105.3121553960001, 23.365810039000053], [105.21753584900011, 23.265351055000053], [105.06105961100008, 23.232459005000095], [104.9452010500001, 23.159827779000068], [104.87006351800005, 23.163548482000095], [104.79792321800005, 23.085568746000007], [104.82360640500013, 22.924131572000135], [104.72821171100003, 22.839098002000128], [104.57922855600003, 22.80886729000011], [104.55354537000005, 22.836049093000014], [104.3619112807906, 22.692535545889484], [104.24948124200006, 22.72832957000014], [104.21325606300013, 22.825016175000115], [104.07331628500009, 22.782667339000085], [104.02381026300003, 22.71918284100005], [103.9853629970001, 22.52715321900007], [103.9595247800001, 22.50710276300012], [103.86681726100011, 22.57541900700008], [103.64693404200005, 22.799048768000148], [103.59003829000011, 22.768017070000013], [103.54992302181512, 22.648662168162218], [103.5036352950001, 22.581413473000026], [103.44751469000005, 22.618258769000136], [103.4017293710001, 22.737838033000116], [103.30964196800011, 22.787938334000046], [103.25248783400008, 22.678565165000123], [103.14174524000009, 22.607044983000094], [103.14200362100013, 22.53779856400007], [102.9890930580001, 22.43759796200004], [102.8936983640001, 22.48736236600007], [102.8451741940001, 22.585237529000068], [102.58668868000007, 22.716082256000107], [102.44271814000012, 22.765174866000052], [102.38432377100008, 22.62885243700009], [102.32464904379646, 22.56511846157042], [102.25254886900007, 22.495475566000067], [102.2180290120001, 22.41067454000003], [102.11865523300008, 22.397548726000053], [102.01457889800014, 22.446072896000146], [101.89164066600011, 22.429691467000083], [101.86792118300008, 22.378841858000072], [101.7848771570001, 22.472221171000058], [101.7131502680001, 22.491548157000096], [101.65454919500007, 22.44612457300005], [101.60612837700012, 22.28484242700003], [101.51822676600005, 22.228205058000043], [101.56153161700013, 22.176115214000106], [101.55543379800014, 22.090332337000092], [101.60680017100003, 21.967600810000135], [101.67366947500011, 21.93137563100001], [101.7510807700001, 21.816137187000095], [101.72854984500009, 21.7175385540001], [101.80384240700005, 21.625916239000105], [101.73475101700006, 21.554396057000076], [101.72250370300009, 21.304230448000084], [101.8214903342058, 21.221071138011382], [101.76845334907142, 21.16044957714314], [101.71790450000009, 21.134473369000062], [101.58395918800011, 21.224390360000115], [101.4951274010001, 21.242838847000115], [101.27529585800005, 21.17410919200006], [101.20899499500013, 21.245526021000046], [101.23478153500014, 21.363658345000147], [101.17142622900013, 21.403397522000148], [101.18656742400003, 21.535327454000083], [101.15902388500007, 21.552690735000112], [101.17385502100007, 21.61191192600009], [101.11887129800004, 21.759809876000077], [100.87749068200009, 21.67733429000006], [100.79703047700008, 21.626122946000066], [100.70396122300014, 21.516413879000055], [100.57182458500012, 21.455073955000074], [100.45668949400005, 21.455022278000058], [100.38367069500009, 21.52783437100007], [100.32651656100006, 21.52426869800007], [100.18714522300007, 21.42789215100001], [100.08999353000007, 21.52891957700004], [100.14632084200008, 21.64922231000014], [99.99671757100003, 21.686119283000068], [99.95026045800012, 21.721155904000085], [99.92018477400006, 21.85200063100004], [99.96566003400011, 21.9630016080001], [99.94240564000012, 22.045528869000123], [99.84783776900008, 22.055037333000087], [99.82101770100013, 22.01777862600008], [99.73916223200007, 22.066767884000086], [99.68386844900004, 22.039017639000036], [99.63353560400009, 22.08475128200007], [99.43861210200009, 22.124232076000084], [99.25288700400006, 22.10278635700007], [99.14446984900007, 22.153532613000067], [99.24368859900005, 22.341221416000053], [99.24306848200007, 22.393156230000073], [99.35779016200013, 22.495475566000067], [99.35499963400008, 22.608543600000075], [99.30797408000012, 22.745176087000118], [99.41442753200005, 22.856900533000072], [99.41339400300006, 22.930746155000037], [99.53803755700011, 22.926431173000054], [99.49307906100012, 23.057379252000146], [99.40326542100013, 23.06833465600002], [99.31407189900006, 23.1264706420001], [99.21661014900008, 23.057379252000146], [99.1993502200001, 23.092260844000123], [99.0749133710001, 23.101665955000072], [99.02644087800013, 23.16044789700004], [98.85900923700012, 23.179387309000077], [98.91068566900009, 23.297597148000108], [98.85322147600004, 23.33498504700006], [98.88960168400013, 23.406789449000087], [98.78087447100012, 23.53285410600003], [98.8573555910001, 23.60434845000006], [98.77787723800009, 23.769299621000073], [98.66367232300013, 23.79694651300008], [98.66325891200012, 23.96954579700008], [98.85621871000006, 24.083802388000038], [98.86572717300004, 24.14568491700004], [98.7161755780001, 24.121345317000134], [98.58522749900004, 24.07571502700003], [98.50326867700005, 24.12126780200009], [98.39557499200009, 24.12806325300005], [98.33066939300005, 24.099486186000092], [98.18153120900013, 24.1186581420001], [97.88997277800013, 24.022617493000013], [97.64734483094963, 23.86852441523476], [97.51645552600013, 23.942829081000127], [97.70765832500012, 24.125298564000104], [97.71840702300011, 24.27766652400001], [97.64450972500003, 24.302393698000117], [97.68957157400007, 24.346473694000082], [97.6398588460001, 24.4392845670001], [97.51955611200009, 24.430783794000007], [97.53609257000011, 24.745028178000098], [97.66394006400003, 24.829777527000118], [97.77297733600005, 24.854685568000093], [97.70331750500003, 24.9604155480001], [97.7036275640001, 25.07392283100006], [97.73752730300009, 25.090510967000057], [97.82362023900009, 25.261611633000143], [97.88893925000013, 25.205646057000138], [98.04489872300013, 25.31194447900012], [98.10835738100008, 25.38889068600011], [98.09946903500008, 25.49332875600001], [98.1400867110001, 25.61146108000011], [98.2766158450001, 25.55244659400006], [98.3326330970001, 25.566967672000118], [98.46130741400009, 25.794654033000086], [98.50946984900008, 25.83806223600007], [98.61003218700006, 25.800596822000102], [98.69240441900007, 25.878989971000095], [98.5824369720001, 25.982291159000056], [98.54553999900008, 26.10564280300008], [98.62574182200012, 26.14434845000008], [98.64444869000005, 26.09789133700008], [98.7055302330001, 26.174940898000102], [98.6421749270001, 26.254522604000044], [98.7172091060001, 26.408725077000042], [98.72113651600006, 26.5388980110001], [98.7555530190001, 26.6250426230001], [98.74924849500013, 26.771441956000075], [98.71452193200008, 26.862030741000098], [98.71266158100008, 26.995149231000056], [98.73777632600007, 27.048686015000015], [98.67256066900006, 27.175603332000094], [98.70418664600004, 27.304174296000042], [98.67442102100006, 27.386598206000116], [98.67927860500009, 27.577335918000045], [98.5784062090001, 27.591727804000072], [98.5221822520001, 27.6562975060001], [98.4102510990001, 27.684254456000104], [98.38327600100007, 27.555786845000085], [98.29470259600009, 27.536614889000077], [98.20437219300004, 27.727300924000104], [98.17667362500003, 27.898117371000097], [98.10711714700011, 27.97307403600007], [98.11500227621701, 28.14388835708101], [98.23015953993087, 28.20287832287633], [98.29976769402384, 28.354807033817593], [98.40999352418174, 28.250601508253055], [98.48988528827545, 28.248069362710908], [98.5758231953842, 28.317548326494006], [98.64041873613576, 28.42413096796986], [98.58920739080844, 28.670291652837506], [98.67814253055332, 28.757056383145596], [98.63871341289365, 28.878651028022517], [98.6648100119724, 28.974174913141752], [98.7850093928692, 29.000245672899467], [98.85069013923851, 28.820075791864326], [98.94561974515511, 28.842012437424017], [98.90887780176911, 28.91236990035057], [98.93244225530577, 28.986344713537733], [99.00628787638436, 29.073161118890482], [98.99016482984302, 29.201990465187862], [99.10881391802786, 29.223772081116635], [99.1210612327896, 28.96466644949706], [99.0992537784391, 28.85604258889441], [99.11770226404826, 28.70871308014449], [99.16948205015649, 28.602492173874708], [99.16255740799795, 28.438161119440167], [99.27474694201777, 28.277318224056813], [99.38151045064677, 28.184533189155303], [99.41644371890254, 28.25476146087277], [99.38864179927964, 28.334317328182124], [99.39313764868348, 28.54278005615464], [99.50289839084809, 28.5793669699097], [99.53436933757484, 28.680807806834792], [99.62867882676647, 28.814623928051844], [99.71885420086068, 28.842270819842412], [99.73234174997174, 28.745015773958755], [99.82840823834948, 28.672565415961145], [99.84561648960926, 28.603809923489194], [99.93387983578583, 28.569367580749287], [100.00095584523609, 28.45619619389916], [100.14306603417009, 28.341577867124812], [100.16203128461609, 28.236261298420203], [100.04689619300484, 28.187091173119143], [100.05883344940412, 28.066142483388916], [100.20208051990011, 27.898788356997102], [100.29592492109816, 27.852615465231537], [100.29747521381, 27.76107066557873], [100.34915164623146, 27.746730454846613], [100.40950971909825, 27.828999334851375], [100.55926801970332, 27.8245293238692], [100.62541385316678, 27.897263901807634], [100.6609155622034, 27.875094713150446], [100.87211714129302, 27.561987210041764], [100.86694949742133, 27.494652818173023], [100.94084679624262, 27.434733994878002], [100.99174808140884, 27.330812690153465], [101.00384036743901, 27.197513332874053], [101.17282230000916, 27.191053778708977], [101.1414547060698, 27.04486115242028], [101.34242435110292, 26.871047471863363], [101.40944868370974, 26.729454046866778], [101.48055545457055, 26.787124946359143], [101.49466312130602, 26.705579534967598], [101.41244591724524, 26.569670517780168], [101.54416914339123, 26.49497223597993], [101.64364627465585, 26.34947723988273], [101.57998090989105, 26.306921699277012], [101.59491539892656, 26.208684801462397], [101.6766158390497, 26.227701727852462], [101.76374230276502, 26.17633535379352], [101.7756795591643, 26.106520494125533], [101.84952518114216, 26.034845282483758], [101.92156212798983, 26.09887238245446], [102.1125582213848, 26.08442881893484], [102.2520845888327, 26.228864447835946], [102.35833133262486, 26.262583320164083], [102.40055097914433, 26.311805121409208], [102.56813764863352, 26.378648586862766], [102.62648034079507, 26.345136420109668], [102.60994388220433, 26.26020620425288], [102.66782148637247, 26.22586721430045], [102.87819624226279, 26.3650576849642], [102.95142174661635, 26.345136420109668], [103.00325320776926, 26.400352688425784], [102.99581180167326, 26.485412096391144], [103.05782352093877, 26.536287543135558], [102.97529625941479, 26.831127427788545], [102.90134728375011, 26.92473928499001], [102.87819624226279, 27.031967882511765], [102.9138529809303, 27.112298896177123], [102.88946170509365, 27.29148692528139], [102.9548323913018, 27.42078135777348], [102.97741499200828, 27.388896999896588], [103.12076541529166, 27.41225474695898], [103.21812381396279, 27.56687063217393], [103.28504479378222, 27.580849106800827], [103.28612999939992, 27.63371409852678], [103.41475263922291, 27.742906399011076], [103.50854536267832, 27.86452688230972], [103.48921837792574, 28.037746282764715], [103.44121097170898, 28.042397161799585], [103.45903934059311, 28.13476878555096], [103.57179731719248, 28.243185940578655], [103.6437825871966, 28.27049693468578], [103.7089465678298, 28.215874946471615], [103.88030561721047, 28.32573904142359], [103.79524621014446, 28.53117869743889], [103.85105675676391, 28.66812124340072], [103.95260094557722, 28.614972031733913], [104.04784061075554, 28.63360138629494], [104.41422651584105, 28.640112616404167], [104.43996137881453, 28.605360216201007], [104.25005049013805, 28.530791123811298], [104.26849897664641, 28.333800564244626], [104.3765027196248, 28.282304998976485], [104.44461225784943, 28.09988719323934], [104.3338179869105, 28.0467379833712], [104.3753658389623, 27.961678575405898], [104.4824910827972, 27.890985215695167], [104.60475752214194, 27.845845851804626], [104.7023743023322, 27.88294953129588], [104.89740115803704, 27.901113796064806], [104.9582759948413, 27.95653676995596], [104.96618248893071, 28.047797350567294], [105.05573774629994, 28.088130804892756], [105.17190636578619, 28.061672472406684], [105.191646762588, 28.009660143201046], [105.28239057836248, 28.000745957859692], [105.2281303235556, 27.855793565021003], [105.29696333219198, 27.721744899807277]]]
                }
            }, {
                type: "Feature",
                properties: {id: "13", name: "河北", latitude: 38.5205, longitude: 115.314},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[118.64873628100005, 39.044651167], [118.51430835400001, 38.91944503100002], [118.47069796600007, 38.970550754], [118.4881931580002, 39.05049224800014], [118.55971776100014, 39.003125154000045], [118.64873628100005, 39.044651167]]], [[[116.87563642807865, 39.68646678321552], [116.928708123581, 39.801395169251705], [116.78143029167461, 39.889658515428124], [116.75941613174905, 40.012622585863596], [116.82938602104804, 40.03667796491612], [116.98767093336693, 40.03435252494904], [117.2390767755727, 40.0926177027448], [117.14750613839746, 39.94800120669042], [117.17964887869286, 39.8794007429499], [117.2548897637516, 39.86195994679407], [117.18429975772764, 39.808784898504214], [117.20290327386695, 39.76160431638617], [117.15277713415745, 39.61840892183433], [116.87563642807865, 39.68646678321552]]], [[[119.23099653476226, 41.27339834195985], [119.16350711506126, 41.176401679394004], [119.04775190582578, 41.09439118090826], [118.96475955630856, 41.0747024600504], [118.9397481628474, 41.0218374701232], [119.00832278906549, 40.9990998397857], [118.90217939716135, 40.9566218117473], [118.85468875488223, 40.82060944357103], [119.06154951419867, 40.65136912678385], [119.19099897722097, 40.700410060875626], [119.1897587419725, 40.62010488473261], [119.29362837075266, 40.530704657893736], [119.56368940594129, 40.540058091907454], [119.59986290944565, 40.47693533040122], [119.58012251174446, 40.37340159840501], [119.63831017517444, 40.269893703931345], [119.63474450085803, 40.209070543071206], [119.74259321510473, 40.205194811291605], [119.73804568885734, 40.09951650738084], [119.85018964900021, 39.98631419500005], [119.77442467500023, 39.95050690300006], [119.53559238800008, 39.890825588], [119.530698935, 39.81470221200014], [119.4667951800001, 39.814847782000086], [119.33961022200018, 39.715562242000104], [119.25642455900001, 39.49311137600007], [119.3050753810002, 39.43297778700018], [119.25566027300013, 39.36552154900015], [119.18480422500025, 39.35481411000016], [119.01563561300017, 39.189764716000084], [118.94019616, 39.13886139500009], [118.94556725400017, 39.19212474200005], [118.85897871200021, 39.207505600999994], [118.79599059200021, 39.151777127000074], [118.61935987000007, 39.16104245200002], [118.34426958599997, 39.03070861800013], [118.23528462200008, 39.05309756600006], [118.14052807300007, 39.17283510700018], [118.00956331411479, 39.218551812035386], [118.00791873556116, 39.34266347883654], [117.89712446462224, 39.398680731930156], [117.8927836448494, 39.56461375592012], [117.75015669197788, 39.57975495142985], [117.73000288312667, 39.53818126095645], [117.61889855382512, 39.58892751739104], [117.6366235699218, 39.637580877855314], [117.53311567634748, 39.75041636792109], [117.50128299441465, 39.98872223644203], [117.61564293787123, 39.96466685649024], [117.76555626810725, 39.964072577287666], [117.74974327992848, 40.06347219508571], [117.65011111903303, 40.08318675436517], [117.62251590408559, 40.12390778321763], [117.45105350101832, 40.22669220638018], [117.3567956886701, 40.25702627244448], [117.25054894397852, 40.3378223741033], [117.2379398949102, 40.45019277617561], [117.18414472899599, 40.49727000640564], [117.24310753788257, 40.570159613974965], [117.41177941298957, 40.59736725529453], [117.48593509332994, 40.66193695672516], [117.30346561074936, 40.661807766415336], [117.19918256991957, 40.690023098087465], [117.05800255697238, 40.677207343444195], [116.91041466670345, 40.749218450970744], [116.67580366370811, 40.94013703089922], [116.65265262312005, 41.03101003698359], [116.49720991380639, 40.953211167961], [116.4540600930988, 40.90282664583302], [116.35582319528424, 40.901586412382954], [116.45886600086527, 40.79156728780015], [116.29143436100694, 40.739890855378704], [116.2073051290285, 40.750381170954256], [116.13035892072759, 40.6579837105798], [115.99470828685787, 40.595971992213634], [115.87445722911781, 40.610234686781325], [115.72816124914237, 40.53959300391395], [115.94520226387328, 40.29371653898704], [115.84500166219684, 40.160572211338476], [115.57762780218124, 40.09631256827048], [115.42709435432096, 39.96257396141917], [115.49644412599557, 39.923635769275435], [115.51091352703764, 39.83849884694425], [115.56243492982807, 39.80749298821091], [115.45071048380166, 39.77948436121436], [115.46342288565756, 39.643213608820986], [115.6184521829218, 39.60373281521724], [115.75591149282104, 39.50895823803222], [115.94540897034773, 39.57538829233576], [116.0005994002421, 39.557611599395784], [116.21040571535136, 39.57190013328453], [116.24978315616778, 39.505805975765185], [116.38662234934196, 39.44214061100038], [116.45902103139548, 39.45397451371281], [116.4282735541812, 39.521412258369], [116.6043868353841, 39.61117422131332], [116.79341922401795, 39.60231171281529], [116.79124881368173, 39.492938544278346], [116.85346723762294, 39.341423245386565], [116.83620731041898, 39.190941474369524], [116.89336144417533, 39.16378550899411], [116.89181115056422, 39.10252309856223], [116.7121838727875, 39.011830960530474], [116.68060957237381, 38.91594534020537], [116.7108402847513, 38.820524806974234], [116.88075239510707, 38.699395250090745], [117.02105390801145, 38.70823192016705], [117.0948995299893, 38.611752021538635], [117.18941572475595, 38.605809231311], [117.27132286955472, 38.55924876591784], [117.54354902418416, 38.62132396011633], [117.5659707130001, 38.612507449000034], [117.71608248499999, 38.37851093200011], [117.83715902947196, 38.2709075820285], [117.76865685443025, 38.21926951827358], [117.77981896357423, 38.164440822685876], [117.68731815041238, 38.07266347903631], [117.56866906132817, 38.048918159245616], [117.42061608306577, 37.8466824414415], [116.80241092282589, 37.840326240064016], [116.65730350125554, 37.71118683540409], [116.5809774105791, 37.610727851309335], [116.4206771175549, 37.47879791868907], [116.35008711063162, 37.62090810852247], [116.2199141789961, 37.46236481378513], [116.25557091676436, 37.38733063430125], [116.20678836509106, 37.35508454031931], [116.1150110214414, 37.368107001437025], [115.97501956600016, 37.321701564775324], [115.90722008703736, 37.20646312127609], [115.85182295066878, 37.05722158550786], [115.77301639219289, 36.94570384415711], [115.62641035385482, 36.79356842674157], [115.47784061075563, 36.75357086830091], [115.34162153520575, 36.59975596786366], [115.27573408416063, 36.47420807504271], [115.36001834487084, 36.300781969012675], [115.44885013182815, 36.249157213434714], [115.46032230023386, 36.15787079530104], [115.35789961137789, 36.08722911243359], [115.29599124579931, 36.086841538806], [115.24524498936483, 36.161358954352266], [115.10608035712278, 36.18456167358232], [114.97771609881886, 36.06092580777977], [114.91890831866402, 36.061235867041574], [114.89317345569049, 36.11957855920318], [114.70724165158094, 36.15278066669447], [114.5483883002799, 36.139034736064275], [114.34307783367507, 36.24471303997484], [114.15626753132142, 36.24667674383667], [114.06314659963581, 36.27706248584512], [113.98930097855725, 36.359021308386644], [113.72104861939818, 36.35586904611952], [113.63082156756124, 36.438086249281], [113.53511681528886, 36.483380641903125], [113.54736413005048, 36.54851878501387], [113.4587390477688, 36.635800279259456], [113.45393314000245, 36.736620999459575], [113.6077738788614, 36.76907379811726], [113.6792423849281, 36.87159983976082], [113.77603234281833, 36.89061676705015], [113.75432824125534, 37.11494415914558], [113.85768110609808, 37.20894358997472], [113.88672326096966, 37.29612173143282], [114.05312137295297, 37.50057953551722], [114.09632286960476, 37.5995399028443], [114.1004053078587, 37.69819021270814], [114.0263529812051, 37.75077098179534], [113.98713056822118, 37.83903432887118], [113.89147749189277, 37.94946686550347], [113.79065677259194, 38.1528653023918], [113.67598676987353, 38.212241523327606], [113.53945763596107, 38.25213572898073], [113.5180119159171, 38.37760610653663], [113.5344966976644, 38.53728628193639], [113.60896243726671, 38.64446320171541], [113.68094770727083, 38.66776927283368], [113.82512495285425, 38.810267035395356], [113.76021935374018, 38.909201565200135], [113.85334028542587, 39.07229238528532], [114.01271040156371, 39.118827013156135], [114.08908816908371, 39.07435944283401], [114.21631554582572, 39.06903677023085], [114.39397911974055, 39.16934072469465], [114.42033410033841, 39.29997874612228], [114.5409468932844, 39.53123078127555], [114.40214399624841, 39.65845815711822], [114.40545128814648, 39.826509915500196], [114.38281701059663, 39.86105561012829], [114.23321373872304, 39.87642934783621], [114.08598758276071, 39.91691783269184], [113.93591922379318, 40.0157231721866], [113.9959672382974, 40.13181427730706], [114.06082116056803, 40.086674913416516], [114.08536746603573, 40.18501516401864], [114.51066450406356, 40.324980781038235], [114.43366661981858, 40.36053416601892], [114.28576867118721, 40.37856924137736], [114.2575533386156, 40.549979966702125], [114.15172000507411, 40.67358999318357], [114.15409712098534, 40.7425780305517], [114.06014936699972, 40.81365896299076], [114.0186015158472, 40.9236005723086], [113.82279951378649, 41.094184475333236], [113.89835045810713, 41.15593781218027], [113.96382449800223, 41.15335398979482], [113.98490848194086, 41.24089386735807], [113.90889244962688, 41.294017238804514], [113.92796105375953, 41.41835073479854], [114.02728315629258, 41.53128957855117], [114.19709191296133, 41.59358551685811], [114.21352501786521, 41.76690827099989], [114.25569298664198, 41.860080877730354], [114.41971398271409, 41.95630239483964], [114.48131229082946, 42.07526154228631], [114.59634402875383, 42.141278185439916], [114.75194176589966, 42.139857083037995], [114.80485843267047, 42.178407701554136], [114.92030358264418, 41.93687205729955], [114.93131066305665, 41.8386093210633], [114.87581017479971, 41.81166006126276], [114.88898766464905, 41.61004446108302], [115.09739871577807, 41.61616811846383], [115.22586632686944, 41.585834052399576], [115.34131147684315, 41.615858059202], [115.33976118413122, 41.72083873112258], [115.57793785964441, 41.791092841261616], [115.85879926967056, 41.92746694644242], [115.93734744662731, 41.92746694644242], [116.03785810756551, 41.800627143327944], [116.12989383273418, 41.872896633273], [116.20715010029684, 41.88400706647302], [116.37752729684723, 42.00968415050312], [116.46610070228553, 41.94762075529363], [116.51999922098724, 41.96710277057642], [116.59973595634932, 41.92372040497273], [116.85811811665769, 42.019502672510356], [116.87889204313316, 42.22021393512496], [116.82659549398679, 42.30816722293899], [116.88710859558509, 42.395371201919446], [117.05593550032307, 42.46283478499731], [117.24388268423849, 42.48226512343666], [117.41239952971443, 42.458080553174966], [117.4504333842932, 42.54928945604357], [117.5293949732993, 42.62024119727343], [117.59362877794567, 42.55158905668954], [117.7874670761446, 42.60962169048864], [117.80048953726222, 42.568823147270464], [118.02424848767754, 42.38263296254115], [118.04130171110506, 42.27824656802471], [117.98931522032112, 42.22160919910523], [118.08600182542384, 42.18166331570943], [118.13390587795396, 42.021905625943845], [118.2678511903801, 42.07386627920542], [118.32216312113107, 41.863543199259155], [118.27823815316827, 41.752697252376265], [118.16806399985364, 41.79011098933066], [118.15938235940834, 41.71913340877988], [118.24439008963094, 41.592345283408065], [118.31363650941734, 41.56955597622735], [118.29472293491557, 41.46062205726216], [118.3325500830199, 41.446566067370156], [118.34981001202249, 41.33623688442461], [118.4372465349995, 41.348329169555555], [118.7279264670328, 41.34729564078127], [118.79712120997578, 41.38031688111914], [118.86714277611816, 41.33654694278715], [119.15265506427983, 41.31220734289451], [119.23828291212675, 41.31982961704318], [119.23099653476226, 41.27339834195985]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "41", name: "河南", latitude: 33.9055, longitude: 113.484},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[115.46032230023386, 36.15787079530104], [115.4239937679979, 35.99459910716308], [115.33387006984782, 35.93114044887261], [115.33107954278665, 35.77373403569712], [115.41639733317044, 35.82375682171994], [115.44931521982159, 35.902098294001036], [115.738703240662, 35.96860586177107], [115.82872358602458, 36.031030992186516], [115.92690880699581, 36.02198761743455], [116.07728722522518, 36.103119614978226], [116.03367231742345, 35.9658153347099], [115.9657178079305, 35.985917466717694], [115.86345014870545, 35.925042629913406], [115.87378543464999, 35.86551138024602], [115.7613375182118, 35.84918162723031], [115.61798709492854, 35.73125600855792], [115.50424726819685, 35.722832750531055], [115.49205163027858, 35.678184312156276], [115.34162153520566, 35.55545278571745], [115.34503217989118, 35.496257432834284], [115.22653812133723, 35.41623647753144], [115.06835656090658, 35.38011465087047], [114.94174930178889, 35.21883250591537], [114.85157392769457, 35.178163153906354], [114.83421064680385, 35.01618337696124], [114.99776655488262, 35.0077859564567], [115.17449995281049, 34.9441722685354], [115.21604780486228, 34.83572927508601], [115.31764367141827, 34.84283478439774], [115.42926476375783, 34.7797120219922], [115.43577599476635, 34.675713202002726], [115.5417126810953, 34.57752798103152], [115.68501142843473, 34.59773346582679], [115.81642459531872, 34.57143016207232], [116.0847286322205, 34.61615611391355], [116.15128787593477, 34.566727607093384], [116.15671390222474, 34.447303372552625], [116.40098839669713, 34.2750141462858], [116.55209028533835, 34.28684804899822], [116.57508629809416, 34.19212514955598], [116.54294355689962, 34.12091502500846], [116.64118045471412, 33.95322500273164], [116.44532677581003, 33.845014553279015], [116.42067711755487, 33.79083181373721], [116.18203535404831, 33.71832977979548], [116.07961266519226, 33.778351955878094], [115.97067874622718, 33.90480418626424], [115.96137698815744, 34.000147203330755], [115.84112593041732, 34.006916815858375], [115.73296715690867, 34.06556956638235], [115.65364383269673, 34.04841299106664], [115.58615441299571, 33.97957998332953], [115.56134972510972, 33.898137926524015], [115.62992435132782, 33.83876170468892], [115.57354536302813, 33.750188300149915], [115.63473025909417, 33.59182587346527], [115.44259728413732, 33.548081773555], [115.34208662319912, 33.50074616090657], [115.3156799657578, 33.373983873057256], [115.34534223825375, 33.25060639147176], [115.28575931174288, 33.14823537945912], [115.1428222996094, 33.0842599554326], [114.96918948800442, 33.12374074993568], [114.88655887279367, 33.08340729381155], [114.87984093621014, 32.99341278687055], [114.92521284409753, 32.95824697551754], [115.18473188686698, 32.859054063294394], [115.1993046406966, 32.59147349680447], [115.36673628055485, 32.55951162456185], [115.45691165644769, 32.50739594256871], [115.56476036979518, 32.40244110817062], [115.64661583865, 32.40244110817062], [115.69384809761158, 32.49181549748724], [115.79006961472095, 32.470705675126794], [115.87089155480135, 32.53243317355211], [115.86065962074491, 32.43200002697969], [115.91481652186502, 32.250021470814175], [115.92814904224451, 32.02458303557859], [115.90132897275384, 31.794493720408838], [115.6629455907663, 31.78395172798983], [115.53153242388225, 31.73638357224408], [115.38973229420992, 31.511746120886755], [115.37402265791923, 31.417539985382007], [115.28622439973623, 31.395138250929477], [115.21852827356088, 31.44748647691938], [115.21346398337607, 31.545594184424004], [115.12855960504169, 31.5945317648291], [115.07688317262023, 31.51554433919995], [114.99885175960094, 31.477613837408654], [114.76656619657263, 31.49048126889548], [114.63820193916808, 31.56802175549967], [114.54787153544294, 31.572879340109523], [114.55567467674484, 31.737675483436874], [114.49531660387817, 31.759198716947168], [114.36183637944538, 31.73426483785198], [114.26737186062286, 31.808730577454185], [114.14396854061556, 31.847539578388876], [114.08547081882318, 31.78379669925829], [113.97198937361065, 31.74656382945713], [113.95958703011729, 31.831829942098096], [113.88579308498294, 31.84482656479412], [113.79437747563998, 31.972519029529593], [113.75236453739342, 32.13759939189842], [113.7816650737841, 32.19371999777971], [113.78275027940191, 32.359368800929474], [113.72921349500677, 32.4192617858028], [113.61640384336266, 32.38567210558321], [113.52767540919274, 32.296685288994894], [113.33631757969249, 32.31435862914739], [113.21870202028197, 32.41027008699487], [113.11240359874711, 32.38156382890756], [113.04584435413358, 32.42523041445207], [112.75087527917071, 32.349782822918996], [112.53393761632793, 32.37675792114115], [112.28578738827736, 32.350635484539936], [112.14460737533017, 32.39463796596934], [112.0533467956181, 32.45484101010456], [111.77925499901897, 32.52036672594363], [111.71119713763773, 32.600232652514904], [111.62908328726382, 32.62645844190351], [111.53162153490592, 32.61108470329637], [111.50743696464417, 32.68206228294801], [111.36331139500481, 32.824766751084695], [111.21014244971428, 32.93021251099859], [111.21634362236023, 32.97648875645089], [111.10880496557667, 33.14802867298479], [111.00266157367264, 33.20753408512988], [110.97460127163134, 33.266471056494055], [111.0155806820029, 33.37444896105072], [111.01061974460555, 33.50015188170403], [110.96824507025383, 33.59882802998956], [110.79213178905076, 33.70512645152451], [110.74924034986225, 33.80279490855821], [110.59379764234734, 33.87974111595966], [110.64237348844574, 33.980303452842094], [110.5936426127164, 34.06533702238565], [110.6182922709715, 34.162462877060136], [110.43380740768566, 34.2613974068648], [110.47866255073609, 34.32638052034474], [110.45370283411847, 34.3812608909773], [110.37406945244322, 34.403688462952175], [110.32766401578164, 34.47980784805375], [110.33603559786457, 34.615846056450295], [110.39990766820426, 34.5925658228544], [110.4831584010393, 34.61582021712931], [110.5305456887325, 34.583677476834055], [110.70862267469664, 34.62096202257925], [110.76582848529637, 34.66134715374815], [110.88380577991279, 34.66610138646979], [110.91083255407904, 34.73250560235161], [110.9734127141254, 34.71689931884842], [111.10942508320096, 34.768679104057384], [111.13867394364758, 34.819218654916995], [111.23293175689503, 34.80077016930787], [111.33127200659777, 34.84092275648001], [111.39426557779416, 34.823275254749234], [111.55766645714124, 34.8634020052983], [111.6829301291221, 35.00794098608759], [111.8294328146726, 35.08256175442145], [111.95769372018901, 35.09416311313717], [112.03815392506357, 35.04576813419203], [112.05846276264634, 35.23449046536271], [112.33498335200005, 35.21867747718383], [112.52597944539508, 35.22027944583971], [112.68245568168436, 35.31117829034588], [112.80761600087772, 35.24198354830207], [112.90275231326859, 35.240588284321916], [113.01979943189832, 35.32859324807998], [113.12956017496208, 35.352286891926525], [113.27285892140213, 35.419182034223525], [113.30484663296568, 35.46584585240416], [113.43036868736499, 35.48938446751919], [113.60994428919759, 35.64606741028271], [113.58472619016158, 35.68686595350093], [113.5943896834371, 35.80784048075358], [113.63252688990406, 35.8181757684969], [113.62756595340602, 35.95323212316393], [113.68714887901751, 36.05573232728503], [113.67288618355053, 36.22145864480055], [113.72104861939818, 36.35586904611952], [113.98930097855725, 36.359021308386644], [114.06314659963581, 36.27706248584512], [114.15626753132142, 36.24667674383667], [114.34307783367507, 36.24471303997484], [114.5483883002799, 36.139034736064275], [114.70724165158094, 36.15278066669447], [114.89317345569049, 36.11957855920318], [114.91890831866402, 36.061235867041574], [114.97771609881886, 36.06092580777977], [115.10608035712278, 36.18456167358232], [115.24524498936483, 36.161358954352266], [115.29599124579931, 36.086841538806], [115.35789961137789, 36.08722911243359], [115.46032230023386, 36.15787079530104]]]
                }
            }, {
                type: "Feature",
                properties: {id: "21", name: "辽宁", latitude: 41.386, longitude: 123.07},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[122.39747155000012, 39.165838934000035], [122.32129967500023, 39.16596100500003], [122.40259850400005, 39.21381256700012], [122.39747155000012, 39.165838934000035]]], [[[122.68441816500004, 39.262193101000136], [122.58619225400005, 39.258002020000006], [122.50505618600002, 39.29694245000009], [122.68441816500004, 39.262193101000136]]], [[[121.35254967500023, 39.48240794500008], [121.42253665500007, 39.47451406500001], [121.43360436300006, 39.38580963700004], [121.29615319100012, 39.39142487200003], [121.265879754, 39.43357982000008], [121.35254967500023, 39.48240794500008]]], [[[125.70408969199292, 40.859194624916114], [125.64481612100013, 40.810585023000016], [125.68264327000009, 40.76888214100009], [125.56006677300007, 40.77833892900014], [125.5330916750001, 40.721804912000096], [125.41515982613254, 40.65268487995172], [125.27718998200024, 40.64361847000002], [125.25610599800021, 40.61504140200013], [125.02511234500005, 40.53437449200011], [125.02630090400018, 40.457376607000086], [124.89550785400004, 40.483628235000126], [124.71246993000003, 40.31030548100013], [124.64260339400013, 40.29428578699999], [124.36996504000015, 40.09829336100013], [124.364024285, 40.02090078300016], [124.28671308700021, 39.929348049000126], [124.11817467500012, 39.83315664300001], [123.98568769600016, 39.810248114000004], [123.80762780000006, 39.83759186400009], [123.72006269600016, 39.83055247600011], [123.6309513680001, 39.903998114000004], [123.59140058700021, 39.78432851800001], [123.53321373800011, 39.79661692900005], [123.410411004, 39.73517487200017], [123.38672936300011, 39.789618231000176], [123.20639082100004, 39.734686591000084], [123.26587975400017, 39.701076565000065], [123.17432701900023, 39.66575755400014], [123.00912519600016, 39.68048737200003], [122.96412194100017, 39.61163971600017], [122.84864342500012, 39.61786530200011], [122.58790123800023, 39.46698639500015], [122.39633222699999, 39.4110375020001], [122.25147545700011, 39.32367584800001], [122.24024498800011, 39.28563060100011], [122.11500084700018, 39.20075104400014], [122.12745201900012, 39.14199453300016], [121.92318769599999, 39.00897858300014], [121.82691491000017, 39.03628164300004], [121.89527428500006, 38.98102448100009], [121.85987389400023, 38.94464752800003], [121.77247155000018, 39.021958726000136], [121.63575280000012, 38.995306708], [121.59213300899998, 38.94867584800009], [121.704844597, 38.873114325000174], [121.55274498800011, 38.85814036700005], [121.4849552740001, 38.80988190300012], [121.34473717500023, 38.814642645000006], [121.153086785, 38.72760651200015], [121.11133873800006, 38.84027741100009], [121.14852949300004, 38.899074611000074], [121.11793053500006, 38.94342682500012], [121.33432050900015, 38.96857330900018], [121.33423912900017, 39.02659739800005], [121.42807050900015, 39.014715887000094], [121.67408287900005, 39.08803945500013], [121.68100019600004, 39.136419989000146], [121.59262128999998, 39.19220612200003], [121.77979576900006, 39.371486721000124], [121.5489201180001, 39.36188385600015], [121.49195397200018, 39.388983466000084], [121.43604576900012, 39.508612372000115], [121.30616295700005, 39.50177643400009], [121.22339928500006, 39.528631903000175], [121.30616295700005, 39.59796784100003], [121.44980538500013, 39.61509802500005], [121.54737389400023, 39.67316315300003], [121.457286004, 39.748480536], [121.535899285, 39.86176178600009], [121.61609295800022, 39.87170050600004], [121.7071232430001, 39.926947333], [121.77442467500012, 39.920843817000005], [121.87378991, 39.991400458000086], [121.93311608200011, 40.101385809000035], [121.99566779300002, 40.12389527500015], [121.99146569100017, 40.1869977890001], [122.09164569300017, 40.22720738800005], [122.10611612, 40.31012281700011], [122.2110294930001, 40.38060130400011], [122.20362389400006, 40.4272321640001], [122.30184980600004, 40.502346096000124], [122.13758565700002, 40.624020286000174], [122.04908287900005, 40.74607982000013], [121.85108483200005, 40.83226146], [121.82593834700018, 40.94818756700006], [121.7777090380001, 40.934971529000094], [121.73955232000012, 40.84907871800014], [121.57504316500015, 40.841498114000146], [121.36133873800011, 40.93964264500012], [121.29932701900017, 40.899603583], [121.17579186300023, 40.922308661000145], [121.07992597700004, 40.86298248900009], [121.04985010700014, 40.797400734000135], [120.99097741, 40.831284898000106], [120.93954511800021, 40.74054596600011], [121.02073790800014, 40.719330067], [120.82532081500008, 40.67403348000009], [120.7984318370001, 40.59967682500012], [120.54566491000017, 40.402411200000145], [120.591152897, 40.36729769300008], [120.50175764500003, 40.326909952000065], [120.50489342500012, 40.24909088700004], [120.43604576900023, 40.194484768000095], [120.30902673000017, 40.17966794800019], [120.2613224620001, 40.14671458500014], [119.9502769200001, 40.056502132999995], [119.85018964900021, 39.98631419500005], [119.73804568885734, 40.09951650738084], [119.74259321510473, 40.205194811291605], [119.63474450085803, 40.209070543071206], [119.63831017517444, 40.269893703931345], [119.58012251174446, 40.37340159840501], [119.59986290944565, 40.47693533040122], [119.56368940594129, 40.540058091907454], [119.29362837075266, 40.530704657893736], [119.1897587419725, 40.62010488473261], [119.19099897722097, 40.700410060875626], [119.06154951419867, 40.65136912678385], [118.85468875488223, 40.82060944357103], [118.90217939716135, 40.9566218117473], [119.00832278906549, 40.9990998397857], [118.9397481628474, 41.0218374701232], [118.96475955630856, 41.0747024600504], [119.04775190582578, 41.09439118090826], [119.16350711506126, 41.176401679394004], [119.23099653476226, 41.27339834195985], [119.36163455618973, 41.3749942085159], [119.3897465350745, 41.47255931186268], [119.35558841407396, 41.608339137840915], [119.31559085473407, 41.65781932240381], [119.29864098499343, 41.77734690973213], [119.33078372618797, 41.86754812314737], [119.32174034963742, 41.96539744733431], [119.36587202407469, 42.10047964132232], [119.24525923112861, 42.191946925710084], [119.33574466358527, 42.289408678067986], [119.47366906057869, 42.332170925148034], [119.51170291605678, 42.394518541197726], [119.56275923085377, 42.37183258680446], [119.6294218282548, 42.25054800118926], [119.82145145132333, 42.20861257640924], [119.80822228373128, 42.12022003812429], [119.87571170523103, 42.070326443310705], [119.89188642771637, 41.99945221644663], [119.96015099467263, 41.97175364781262], [120.03032759044595, 41.86059764346652], [120.0362187029308, 41.70742869727661], [120.10758385621006, 41.70652435971141], [120.14076012617892, 41.789284166131324], [120.34017947760077, 41.96581085938362], [120.46880211832305, 42.03800283496297], [120.50916141196953, 42.14869375311419], [120.62786217699784, 42.16037262619574], [120.7350907736203, 42.22786204679602], [120.91259931880347, 42.2965658642232], [121.03424563962454, 42.26010814077813], [121.36885053872126, 42.49999013953338], [121.54444705598675, 42.535233466151524], [121.64609459758753, 42.45358470287172], [121.72366092261345, 42.4576671411257], [121.87776004389082, 42.539574285924516], [121.9182743671683, 42.64659617787132], [122.04503665591687, 42.72085521099919], [122.29938805571419, 42.63646759750159], [122.42553022683842, 42.67496653917445], [122.36687747631447, 42.79909332869414], [122.39204389940642, 42.85356028907606], [122.47637983606057, 42.84963288045304], [122.72794070879667, 42.741009019850395], [122.89278852806808, 42.74493642847332], [122.97454064323614, 42.78793122044942], [123.13127526284302, 42.82637848617813], [123.18186648964678, 42.94409739837619], [123.29979210831914, 43.01649608042979], [123.3544140974326, 43.01231028938838], [123.61196943634042, 43.08135000270045], [123.69625369705051, 43.353478095437765], [123.74870527582777, 43.47228221325352], [123.80653120315242, 43.45422130037272], [124.00641564256784, 43.310121568255795], [124.2818510281025, 43.22599233717659], [124.29580366430764, 43.15656505023685], [124.41889692595242, 43.08186676753732], [124.36970096222953, 43.01233612691068], [124.4348649437622, 42.94306387050116], [124.38566898003933, 42.884772854283796], [124.48049523316843, 42.85126068842999], [124.63118370976036, 42.95709402107218], [124.69929324798497, 43.05923248998745], [124.76569746296752, 43.10558624890632], [124.87184085487155, 43.11783356456732], [124.88842899030561, 43.08672435214706], [124.86031701142085, 42.88769257345355], [124.87519982271363, 42.815991523390124], [124.94212080343237, 42.80369253178495], [124.98248009707885, 42.72467926683473], [124.95917402596046, 42.65295237924889], [125.01891198120288, 42.64685456028975], [125.09575483581699, 42.57667796541577], [125.10195600756373, 42.49386648215241], [125.20871951709194, 42.405835679972625], [125.17936730385793, 42.33328196918757], [125.2694910011088, 42.3090457220824], [125.33238122041695, 42.16466177002465], [125.48053755056742, 42.151432604231246], [125.45821333227951, 42.10544057871974], [125.29543256965741, 41.95723257082645], [125.28628584211793, 41.825922756729824], [125.32819542937557, 41.74737457887369], [125.30628462133814, 41.68037608468859], [125.44953169183412, 41.67993683511685], [125.46989220626028, 41.57456859046809], [125.65075971928556, 41.28626577434598], [125.73767947832522, 41.245234687131045], [125.76641157393504, 41.13947886795532], [125.72910118976802, 41.11991933920615], [125.69173912965715, 41.004060777183156], [125.57644900931425, 40.91261933031781], [125.68801842660906, 40.89274974230676], [125.70408969199292, 40.859194624916114]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "37", name: "山东", latitude: 36.3271, longitude: 118.114},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[119.28028405000012, 35.07660553600009], [119.17559940019228, 35.10591950148388], [119.07627729675986, 35.04982473402423], [118.86678104091229, 35.03631134739079], [118.84228641228825, 34.934560452103156], [118.77665734276215, 34.83363638001494], [118.759449090603, 34.74862864799381], [118.68074588401541, 34.6838522409882], [118.59635826961832, 34.70749420799133], [118.47719241659686, 34.689200751113745], [118.42272545801362, 34.578483995440095], [118.39104780481236, 34.44373769823615], [118.34278201707636, 34.41857127514429], [118.16542850062493, 34.39924429039168], [118.13235558524204, 34.484303697457776], [118.15039065970123, 34.54750397422903], [118.09421837787582, 34.57096507407901], [118.05044844044326, 34.65147695579681], [117.91469445198746, 34.67695343725141], [117.79005089673151, 34.65116689743435], [117.77330773256571, 34.52654918149959], [117.65321170535586, 34.52610993102856], [117.59068322215299, 34.47159129470252], [117.46903690043271, 34.47533783617219], [117.33695193908076, 34.588612575809705], [117.27390669194031, 34.56367869671452], [117.23545942621152, 34.46125600785855], [117.18181928902894, 34.45014557555781], [117.06058637935806, 34.70945791275254], [116.99325198838861, 34.77400177756], [116.94142052633632, 34.87962840372789], [116.82762902186201, 34.95830577189385], [116.72468956906832, 34.929082749868954], [116.63187869664458, 34.93794525836695], [116.47002811090866, 34.89825775828892], [116.42021202956144, 34.83425649673994], [116.37721723758551, 34.63953970029695], [116.26688805463999, 34.57670115783219], [116.15128787593477, 34.566727607093384], [116.0847286322205, 34.61615611391355], [115.81642459531872, 34.57143016207232], [115.68501142843473, 34.59773346582679], [115.5417126810953, 34.57752798103152], [115.43577599476635, 34.675713202002726], [115.42926476375783, 34.7797120219922], [115.31764367141827, 34.84283478439774], [115.21604780486228, 34.83572927508601], [115.17449995281049, 34.9441722685354], [114.99776655488262, 35.0077859564567], [114.83421064680385, 35.01618337696124], [114.85157392769457, 35.178163153906354], [114.94174930178889, 35.21883250591537], [115.06835656090658, 35.38011465087047], [115.22653812133723, 35.41623647753144], [115.34503217989118, 35.496257432834284], [115.34162153520566, 35.55545278571745], [115.49205163027858, 35.678184312156276], [115.50424726819685, 35.722832750531055], [115.61798709492854, 35.73125600855792], [115.7613375182118, 35.84918162723031], [115.87378543464999, 35.86551138024602], [115.86345014870545, 35.925042629913406], [115.9657178079305, 35.985917466717694], [116.03367231742345, 35.9658153347099], [116.07728722522518, 36.103119614978226], [115.92690880699581, 36.02198761743455], [115.82872358602458, 36.031030992186516], [115.738703240662, 35.96860586177107], [115.44931521982159, 35.902098294001036], [115.41639733317044, 35.82375682171994], [115.33107954278665, 35.77373403569712], [115.33387006984782, 35.93114044887261], [115.4239937679979, 35.99459910716308], [115.46032230023386, 36.15787079530104], [115.44885013182815, 36.249157213434714], [115.36001834487084, 36.300781969012675], [115.27573408416063, 36.47420807504271], [115.34162153520575, 36.59975596786366], [115.47784061075563, 36.75357086830091], [115.62641035385482, 36.79356842674157], [115.77301639219289, 36.94570384415711], [115.85182295066878, 37.05722158550786], [115.90722008703736, 37.20646312127609], [115.97501956600016, 37.321701564775324], [116.1150110214414, 37.368107001437025], [116.20678836509106, 37.35508454031931], [116.25557091676436, 37.38733063430125], [116.2199141789961, 37.46236481378513], [116.35008711063162, 37.62090810852247], [116.4206771175549, 37.47879791868907], [116.5809774105791, 37.610727851309335], [116.65730350125554, 37.71118683540409], [116.80241092282589, 37.840326240064016], [117.42061608306577, 37.8466824414415], [117.56866906132817, 38.048918159245616], [117.68731815041238, 38.07266347903631], [117.77981896357423, 38.164440822685876], [117.76865685443025, 38.21926951827358], [117.83715902947196, 38.2709075820285], [117.94169775100013, 38.23394647100018], [118.0848087900001, 38.13873932500003], [118.21583092500023, 38.144964911], [118.44892844400013, 38.107787122000005], [118.54297936300023, 38.068345445000105], [118.65487094300025, 38.14569459600007], [118.84009850400017, 38.15257396000011], [118.95003676100023, 38.09726186800019], [118.92481530000006, 38.057766018000066], [118.99659264400006, 37.96312083500008], [119.09249331000004, 37.91277311500001], [119.11694226300014, 37.853270747000025], [119.24308307099997, 37.769482336000024], [119.25566353600001, 37.6718665770001], [119.120140997, 37.737507864000165], [119.03712772600008, 37.72208882600016], [118.9766544930001, 37.610907294000086], [118.944590691, 37.37811920800006], [118.97242272200006, 37.280666408000016], [119.14551842500012, 37.178859768000066], [119.28711998800023, 37.13727448100009], [119.44117272200018, 37.120550848000065], [119.77059980600004, 37.15184153900013], [119.89730879000004, 37.24941640800013], [119.85889733200011, 37.360174872000115], [120.059825066, 37.44041575700014], [120.29761803500017, 37.59788646], [120.30640709700006, 37.66518789300012], [120.21998131600006, 37.68626536700005], [120.3685001960001, 37.69472890800007], [120.46338951900012, 37.74774811400012], [120.55616295700023, 37.761379299000154], [120.73804772200006, 37.83397044500008], [120.92579186300011, 37.81928131700006], [121.03256269599999, 37.710394598000065], [121.137950066, 37.70115794500002], [121.13436933700015, 37.61054108300006], [121.19149824300021, 37.57518138200005], [121.37452233200017, 37.61054108300006], [121.38168378999998, 37.566107489000146], [121.47689863400015, 37.46800364800005], [121.59164472700004, 37.42446523600013], [121.73243248800023, 37.461737372000115], [121.93783613399998, 37.464260158000016], [121.95728600400011, 37.42381419499999], [122.02564537900017, 37.528021552000055], [122.121836785, 37.56273021000014], [122.12989342500023, 37.48346588700018], [122.18319746200021, 37.41815827000009], [122.22421308700021, 37.45799388200008], [122.2964787120001, 37.41815827000009], [122.57056725400017, 37.401556708000115], [122.68824303500006, 37.40981679900004], [122.57081139400012, 37.34479401200015], [122.56006920700011, 37.274725653000175], [122.62891686300017, 37.19281647300012], [122.51002037900017, 37.15521881700015], [122.40919030000012, 37.006293036], [122.54004967500023, 37.027736721000124], [122.52540123800011, 36.94448476800001], [122.40219160200004, 36.914496161000145], [122.43637129000004, 36.870672919000086], [122.31983483200011, 36.82294342700014], [122.185313347, 36.849920966000084], [122.26587975400017, 36.89801666900014], [122.0943302740001, 36.95091380400011], [122.03305097700016, 36.89801666900014], [122.03964277400021, 36.98460521000011], [121.92628014400006, 36.99359772300015], [121.94979902400021, 36.93891022300001], [121.78598066500004, 36.89118073100006], [121.73715254000004, 36.839178778000175], [121.637461785, 36.83136627800009], [121.63428795700023, 36.74656810100011], [121.52588951900023, 36.75397370000009], [121.52222741000017, 36.812160549000126], [121.45297285199999, 36.81639232000005], [121.453379754, 36.757391669000114], [121.15772545700023, 36.66860586100016], [121.032481316, 36.589504299000154], [120.94467207100004, 36.59121328300016], [120.85059655000012, 36.650946356000034], [120.77084394600016, 36.61717357000005], [120.7422794930001, 36.55585358300014], [120.86459394600016, 36.597723700000145], [120.949961785, 36.45917389500012], [120.867442254, 36.377183335], [120.83204186300011, 36.45526764500012], [120.75058027400004, 36.45917389500012], [120.68653405000006, 36.387152411], [120.72217858200023, 36.330552475999994], [120.6436466810002, 36.322495835000055], [120.69678795700011, 36.143988348000065], [120.55160566499998, 36.11371491100006], [120.35352623800023, 36.040838934000035], [120.29200280000006, 36.06195709800015], [120.36158287900017, 36.19163646000014], [120.28646894600016, 36.26382070500013], [120.28451582100004, 36.17597077000006], [120.21908613400015, 36.221909898000135], [120.11727949300021, 36.209662177000055], [120.10018964900004, 36.09609609600015], [120.16846764400006, 36.06195709800015], [120.17530358200011, 35.993638414000074], [120.28077233200005, 35.998236395000006], [120.28443444100006, 35.962591864000146], [120.17530358200011, 35.89004140800013], [120.18897545700023, 35.94525788000006], [120.03882897200018, 35.84284088700015], [120.00294030000006, 35.72776927299999], [119.93775475400017, 35.76113515800016], [119.90455162900005, 35.62457916900017], [119.81161543100004, 35.647894598000065], [119.743907097, 35.57591380400014], [119.73251386800004, 35.62083567900014], [119.64795983200023, 35.583929755000085], [119.55152428500006, 35.380031643000066], [119.42872155000018, 35.321478583000115], [119.35800214900021, 35.09711334800012], [119.28028405000012, 35.07660553600009]]]
                }
            }, {
                type: "Feature",
                properties: {id: "12", name: "天津", latitude: 39.3708, longitude: 117.347},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[118.00956331411479, 39.218551812035386], [117.88559003999998, 39.201117255000085], [117.75733483200005, 39.114447333000115], [117.77526394499998, 38.981058362000155], [117.708750847, 38.98102448100009], [117.58399498800006, 38.81159088700012], [117.54354902418416, 38.62132396011633], [117.27132286955472, 38.55924876591784], [117.18941572475595, 38.605809231311], [117.0948995299893, 38.611752021538635], [117.02105390801145, 38.70823192016705], [116.88075239510707, 38.699395250090745], [116.7108402847513, 38.820524806974234], [116.68060957237381, 38.91594534020537], [116.7121838727875, 39.011830960530474], [116.89181115056422, 39.10252309856223], [116.89336144417533, 39.16378550899411], [116.83620731041898, 39.190941474369524], [116.85346723762294, 39.341423245386565], [116.79124881368173, 39.492938544278346], [116.79341922401795, 39.60231171281529], [116.87563642807865, 39.68646678321552], [117.15277713415745, 39.61840892183433], [117.20290327386695, 39.76160431638617], [117.18429975772764, 39.808784898504214], [117.2548897637516, 39.86195994679407], [117.17964887869286, 39.8794007429499], [117.14750613839746, 39.94800120669042], [117.2390767755727, 40.0926177027448], [117.31059695758347, 40.11047191005065], [117.37204023606796, 40.20064728414488], [117.3567956886701, 40.25702627244448], [117.45105350101832, 40.22669220638018], [117.62251590408559, 40.12390778321763], [117.65011111903303, 40.08318675436517], [117.74974327992848, 40.06347219508571], [117.76555626810725, 39.964072577287666], [117.61564293787123, 39.96466685649024], [117.50128299441465, 39.98872223644203], [117.53311567634748, 39.75041636792109], [117.6366235699218, 39.637580877855314], [117.61889855382512, 39.58892751739104], [117.73000288312667, 39.53818126095645], [117.75015669197788, 39.57975495142985], [117.8927836448494, 39.56461375592012], [117.89712446462224, 39.398680731930156], [118.00791873556116, 39.34266347883654], [118.00956331411479, 39.218551812035386]]]
                }
            }, {
                type: "Feature",
                properties: {id: "36", name: "江西", latitude: 27.6397, longitude: 116.017},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[118.17473025869447, 29.407869370774904], [118.13235558524204, 29.297927761457075], [118.05199873315496, 29.275319322328926], [118.00078738782756, 29.143931992967126], [118.0639359877556, 29.050552679762376], [118.22904219034476, 28.954537869127407], [118.30288781142326, 28.835785427255615], [118.37166914321631, 28.798604234297983], [118.4255159850747, 28.695199693511057], [118.41585249179906, 28.60404246748587], [118.45791710778832, 28.517381089965284], [118.47626224240861, 28.332250271532814], [118.44644494028168, 28.288687038775763], [118.34887983603556, 28.219802354195252], [118.36779340963813, 28.09970632608608], [118.1307019388434, 28.04053681072523], [118.06130049032524, 27.979016017875026], [117.94647545797596, 27.973202419755864], [117.8234338731746, 27.937261461147457], [117.74555748888696, 27.81328970035935], [117.60525597508314, 27.866154690286663], [117.50893110608564, 27.970825303844663], [117.34966434093653, 27.86597382313336], [117.28424197788496, 27.857033800269733], [117.28713585773363, 27.77262034835033], [117.22512413936755, 27.723450222150007], [117.11226281088005, 27.567619941007507], [117.1246651552726, 27.429928087111634], [117.10110070173596, 27.346651515854774], [117.15381066293173, 27.276397407514366], [117.0401225121442, 27.109534207537678], [116.92343712782116, 27.021012478043446], [116.6697058447489, 26.98690603298705], [116.54526899596738, 26.86786937117455], [116.50496137916429, 26.689301458795256], [116.5423234401745, 26.562797553364405], [116.61947635315124, 26.49207835523191], [116.59446495969007, 26.39508169176662], [116.52170454332995, 26.412470811079075], [116.39897301599188, 26.28754303588235], [116.4192818535746, 26.15287425394365], [116.39726769364904, 26.06145864550004], [116.32321536699561, 25.955108547121682], [116.18017500207469, 25.907230333013416], [116.13516483029261, 25.86632843700768], [116.16110639884118, 25.780364692376622], [116.02757449756501, 25.63636831304717], [116.04452436730577, 25.574589137778418], [116.00018598819281, 25.497177843282884], [115.9787402690481, 25.350830186463924], [115.90799523339331, 25.238278917238233], [115.84283125186079, 25.194741522902945], [115.87523237457432, 25.07100230611151], [115.88753136617956, 24.916773992725595], [115.75839196241913, 24.829130764173442], [115.74909020434936, 24.747740383312035], [115.7970459328235, 24.564134019169614], [115.70578535401086, 24.545711371082916], [115.59917687411334, 24.60906667748516], [115.5411442403144, 24.68547028252752], [115.42058312421182, 24.78455984106384], [115.23966393434304, 24.746112576234353], [115.13910159656143, 24.684152532913032], [115.04696251770599, 24.706657620153038], [114.9446431816375, 24.669967352711097], [114.86268436089449, 24.587827663915533], [114.7404695983933, 24.625241400869953], [114.71158247315265, 24.554548041159137], [114.64192264221623, 24.58526967995178], [114.49810713093933, 24.555839952351903], [114.42488162568642, 24.499590156160835], [114.2480965518144, 24.644671739309302], [114.16913496280822, 24.66957977998284], [114.30163333531013, 24.758644110937], [114.38359215695243, 24.884682929273794], [114.41351281096738, 24.97969005045549], [114.54823326974952, 25.054465847520817], [114.73070275322945, 25.12942251173952], [114.68305708221851, 25.16345144332942], [114.70693159411769, 25.289567776032044], [114.58047936373163, 25.360054430167793], [114.56931725458753, 25.40687327708008], [114.42922244725816, 25.385970160294676], [114.38436730420773, 25.335301419125244], [114.27884402902868, 25.29181570073399], [114.11497806168813, 25.308429673690483], [114.02604292194323, 25.267656968893945], [114.01209028483873, 25.435114448073307], [113.9275476417103, 25.44811106987001], [113.98242801324216, 25.58166881046722], [113.91793582617748, 25.660191148102996], [113.90718712818341, 25.749772243893972], [114.01829145658542, 25.934618842385674], [114.04144249897212, 26.068848374752747], [114.21352501786521, 26.169772446840966], [114.16215864470564, 26.221371364896584], [114.06283654217259, 26.17778229371791], [113.92537723227343, 26.17036672604351], [113.99860273572773, 26.283098863321896], [114.02061689655255, 26.399241645285628], [114.06841759629509, 26.45370860386899], [114.08505740767316, 26.577499498403057], [113.86470910014492, 26.65586680820661], [113.83163618386277, 26.827484239106354], [113.89240766787958, 26.945332343412872], [113.7540181819935, 27.141857814986196], [113.82357466014247, 27.22867422123835], [113.85096316861535, 27.345902207920517], [113.78275027940191, 27.370784410172348], [113.66746015815977, 27.329546617382505], [113.60012576719032, 27.368226427107885], [113.56209191261172, 27.590564276919878], [113.61097781797184, 27.699472358362613], [113.70099816333448, 27.81894826884752], [113.70595909983251, 27.93772654914096], [113.7368099298343, 27.98157400183871], [113.91648888625309, 28.021183987551012], [114.0137956080809, 28.106475937714322], [114.02821333227939, 28.183525498802737], [114.09187869704425, 28.257707018464117], [114.18448286299372, 28.29307953539228], [114.22685753824476, 28.40896393493759], [114.17161543240633, 28.43971141215195], [114.17704145689771, 28.50730418553971], [114.05694542878854, 28.564277452142676], [114.11280765225126, 28.615514634992422], [114.14272830626629, 28.788501492350008], [114.01209028483873, 28.912912502709815], [113.9051717465789, 28.955984809051756], [113.902381220417, 29.066339830418826], [114.06345665889768, 29.203153185171345], [114.2465462591025, 29.248912664887513], [114.2893860214478, 29.358440863954712], [114.46953006406119, 29.31792654157661], [114.70868859330392, 29.389524237953253], [114.81824262899408, 29.393865057726202], [114.88604210795688, 29.52452891757548], [114.93224083904346, 29.50006012647367], [114.97275516232082, 29.559953111347], [115.06308556514671, 29.556568305083175], [115.11393517526813, 29.506907254266423], [115.14018680217919, 29.58752248787252], [115.08633996032091, 29.65700145075641], [115.2720650570567, 29.614652614826298], [115.41686242116378, 29.711700955135], [115.48621219283837, 29.864275621222987], [115.70516523638656, 29.86081329969403], [115.85590538892262, 29.73859853809202], [115.99899742978761, 29.744127916270287], [116.14725711542354, 29.788776352846384], [116.23619225516842, 29.78133494675035], [116.38951622919058, 29.876057847991262], [116.4925073588276, 29.88471365001493], [116.65048221188454, 30.0506725124265], [116.79140384331271, 30.02201793118263], [116.88679853722277, 29.920422065525912], [116.79791507432122, 29.755935981460368], [116.67497684140807, 29.70800609050866], [116.64846683207861, 29.62741669442491], [116.72468956906835, 29.5528476020352], [116.88834882993456, 29.56052155212791], [116.95506310417892, 29.6539008653327], [117.0790865418104, 29.710202338367168], [117.10668175675767, 29.78637339941281], [117.06709761036643, 29.84058197737633], [117.1251819192102, 29.910551865775943], [117.19236128144792, 29.9264682067423], [117.22853478405295, 29.84727407553808], [117.40630171075537, 29.8311768665192], [117.40216759655738, 29.773066718354357], [117.5273795916948, 29.622352403340727], [117.64918094304613, 29.60586762069414], [117.70767866393919, 29.555638129096366], [117.89857140544603, 29.54897186935625], [117.98590457563563, 29.572019558056184], [118.11344201074019, 29.518663641713687], [118.1196431815876, 29.446781725396335], [118.17473025869447, 29.407869370774904]]]
                }
            }, {
                type: "Feature",
                properties: {id: "32", name: "江苏", latitude: 32.9844, longitude: 119.942},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[119.90137780000006, 32.082464911], [119.79200280000006, 32.121771552], [119.81934655000018, 32.203762111000046], [119.71615644600016, 32.272650458000086], [119.78532962300002, 32.291693427000084], [119.83285566500004, 32.25214264500012], [119.90137780000006, 32.082464911]]], [[[121.34091230600015, 31.49095286700019], [121.18679446819007, 31.457511705400933], [121.13558312376225, 31.374416002196668], [121.12628136569239, 31.27695425073803], [121.06127241379076, 31.266618963894174], [121.06297773613355, 31.153680121040807], [120.8652120302111, 31.1357225609474], [120.90934370284961, 31.011724961737528], [120.6920959816442, 30.976559150384517], [120.70945926343424, 30.891086331269136], [120.5778910669192, 30.845791937747762], [120.49097130698036, 30.763703924896262], [120.44694298712923, 30.88969106728895], [120.36167687358883, 30.938757838903243], [120.21341718975142, 30.92054189729079], [120.12861616420454, 30.943176173941353], [119.94309777214451, 31.086578274068145], [119.93193566300042, 31.15003693325791], [119.74011274640614, 31.176495265743895], [119.6297835625613, 31.132880357042907], [119.36277143775158, 31.192359930766145], [119.34892215433393, 31.285816759235985], [119.23606082584644, 31.264887804028888], [119.16288699833626, 31.287444566313667], [119.07472700404804, 31.238842881793545], [118.81608646042179, 31.226337185512705], [118.755728387555, 31.28080414499533], [118.75102583167683, 31.357957057971845], [118.82724856956577, 31.397541205262428], [118.88094038269242, 31.52244314203739], [118.86047651637804, 31.627372138013826], [118.66787845342785, 31.65421804502678], [118.68436323517514, 31.700856024785807], [118.47688235913353, 31.790230414102354], [118.48106815017496, 31.858701687532857], [118.35198042235854, 31.946680812869275], [118.40283003068132, 32.00324066832222], [118.38314131072283, 32.05396108723444], [118.4990515477906, 32.13767690716347], [118.51439944887551, 32.19976613989539], [118.65036014200689, 32.237877508839944], [118.68405317591333, 32.33924083139925], [118.66787845342785, 32.453213202127486], [118.61180952438997, 32.47768199322945], [118.55181318582981, 32.57444611269787], [118.75867394424708, 32.61266083443003], [118.89132734637991, 32.59568512626751], [119.0805147637453, 32.44608185529337], [119.19937055930387, 32.59372142240568], [119.15653079605931, 32.81825552007618], [119.00894290579038, 32.909541938209856], [118.99297488798058, 32.96204519293134], [118.85737593005518, 32.97230296540948], [118.79774132670087, 32.86507436788773], [118.74823530461566, 32.83853852013658], [118.72017500167505, 32.73213674581416], [118.39910932763334, 32.73089651146488], [118.29968387321216, 32.77740530001451], [118.23901574108356, 32.92370127999007], [118.29885705001274, 32.96305288328402], [118.2484208519408, 33.01341156699024], [118.21803510993232, 33.17991303176103], [118.08073082876473, 33.14955312817435], [117.99644656805464, 33.167820745730836], [117.93185102730297, 33.235129299177856], [118.06331587103062, 33.489015610981625], [118.11282189311584, 33.47948130981459], [118.12150353356122, 33.611256211904646], [118.17674564029903, 33.69262075524367], [118.12367394389727, 33.76600128832884], [117.92554650276881, 33.73396189992168], [117.72690229680347, 33.72791575780596], [117.74555748888696, 33.88227326150181], [117.68752485598725, 33.88759593410509], [117.62385949122245, 34.008260402995205], [117.57238976437611, 33.9904578725328], [117.50345340385155, 34.04975657820356], [117.39172895692582, 34.031256414851725], [117.3212939796334, 34.07885040901921], [117.15944339389756, 34.09117523904604], [117.03392134039751, 34.1555382349016], [117.01950361529953, 34.237574570909686], [116.96953250522085, 34.27540171991339], [116.9494820500565, 34.38929657627604], [116.80225589409415, 34.40007111269172], [116.76954471211877, 34.45182506037821], [116.62485070169856, 34.485001329447755], [116.41990197209824, 34.64264028572062], [116.37721723758551, 34.63953970029695], [116.42021202956144, 34.83425649673994], [116.47002811090866, 34.89825775828892], [116.63187869664458, 34.93794525836695], [116.72468956906832, 34.929082749868954], [116.82762902186201, 34.95830577189385], [116.94142052633632, 34.87962840372789], [116.99325198838861, 34.77400177756], [117.06058637935806, 34.70945791275254], [117.18181928902894, 34.45014557555781], [117.23545942621152, 34.46125600785855], [117.27390669194031, 34.56367869671452], [117.33695193908076, 34.588612575809705], [117.46903690043271, 34.47533783617219], [117.59068322215299, 34.47159129470252], [117.65321170535586, 34.52610993102856], [117.77330773256571, 34.52654918149959], [117.79005089673151, 34.65116689743435], [117.91469445198746, 34.67695343725141], [118.05044844044326, 34.65147695579681], [118.09421837787582, 34.57096507407901], [118.15039065970123, 34.54750397422903], [118.13235558524204, 34.484303697457776], [118.16542850062493, 34.39924429039168], [118.34278201707636, 34.41857127514429], [118.39104780481236, 34.44373769823615], [118.42272545801362, 34.578483995440095], [118.47719241659686, 34.689200751113745], [118.59635826961832, 34.70749420799133], [118.68074588401541, 34.6838522409882], [118.759449090603, 34.74862864799381], [118.77665734276215, 34.83363638001494], [118.84228641228825, 34.934560452103156], [118.86678104091229, 35.03631134739079], [119.07627729675986, 35.04982473402423], [119.17559940019228, 35.10591950148388], [119.28028405000012, 35.07660553600009], [119.22120201900006, 35.064032294000086], [119.19288170700023, 35.00043366100003], [119.19223066499998, 34.71820709800012], [119.24179121200021, 34.76166413000006], [119.34669030000023, 34.78082916900003], [119.44223066500004, 34.746039130000085], [119.45655358200023, 34.68455638200011], [119.64096113400015, 34.55052317900014], [119.82618248800006, 34.47040436400006], [119.93995201900023, 34.457912502000156], [120.11817467500012, 34.35960521000011], [120.25709069100006, 34.31183502800015], [120.371348504, 34.0360375020001], [120.40707441500015, 33.859767971000096], [120.49830162900005, 33.753322658000016], [120.48373457100004, 33.64996979400006], [120.6277775400001, 33.47801341400013], [120.66195722700016, 33.33803945500013], [120.75025475400005, 33.269598700000145], [120.73023522200006, 33.204901434000035], [120.80697675900004, 33.13776276200018], [120.833750847, 33.02562083500011], [120.89576256600006, 33.01357656500004], [120.9078068370001, 32.84389883000007], [120.85238691499998, 32.75600820500004], [120.86386823800015, 32.67105755700014], [121.1202091810002, 32.50739166900014], [121.35413965600017, 32.414822759000074], [121.38940888400023, 32.38494757500008], [121.41928144599999, 32.25031159100014], [121.36670983200005, 32.238959052000084], [121.44336998800023, 32.11432526200012], [121.65536543100009, 32.062933661000116], [121.8219451160002, 31.952486444000144], [121.92205718300025, 31.754378129000187], [121.91484204100001, 31.706434259000062], [121.81730624900015, 31.69094942500014], [121.67555427200003, 31.723572594000032], [121.28641836400001, 31.890589166000055], [121.11508706100003, 31.79633360300015], [120.97781679200003, 31.814365316000035], [120.94483483200011, 31.884588934000092], [120.810801629, 32.02260976800015], [120.6343764760002, 32.07700959800009], [120.49075762900017, 32.08245338200011], [120.36158287900017, 32.02558014500006], [120.26710045700023, 31.948675848000065], [120.13135826900023, 31.943182684000035], [119.99203535199999, 32.01585521000011], [119.90845787900005, 32.13886139500015], [119.87427819100006, 32.26512278900013], [119.81836998800011, 32.31370677299999], [119.69239342500023, 32.31976959800009], [119.64527428500006, 32.19521719000001], [119.69044030000012, 32.23533763200011], [119.78858483200005, 32.198635158000016], [119.78492272200006, 32.11432526200012], [119.8555607430001, 32.08698151200015], [120.00639553200008, 31.950304999000124], [120.22999108200023, 31.908880927000084], [120.45578104300014, 31.982518923], [120.45541233499998, 32.0214284420001], [120.75035387400024, 31.97833627600015], [120.82479860100014, 31.828702466000053], [120.74838300900015, 31.802232164000046], [121.0137643640002, 31.743034257000133], [121.1444022900001, 31.684658291000076], [121.34091230600015, 31.49095286700019]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "31", name: "上海", latitude: 31.0909, longitude: 121.409},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[121.85108483200005, 31.293931381999997], [121.79420006600006, 31.368801174000154], [121.86784915500019, 31.366197007000054], [121.85108483200005, 31.293931381999997]]], [[[121.78003991, 31.325181382000054], [121.59880618600008, 31.429144598000093], [121.72559655000012, 31.40273672100001], [121.78003991, 31.325181382000054]]], [[[121.34091230600015, 31.49095286700019], [121.54623457100004, 31.36611562700007], [121.72516399500003, 31.281567150000157], [121.87702454800015, 31.09913587800004], [121.97738292300008, 30.914923435999995], [121.90739924100009, 30.85708552400017], [121.63113225500015, 30.836555533000066], [121.41059758600014, 30.7673880950001], [121.2747994319482, 30.691279405320373], [121.25614423986488, 30.744066880881846], [121.10437055855434, 30.834345607763638], [120.98101891539054, 30.83204600711757], [120.96918501177893, 31.00945119951335], [120.90934370284961, 31.011724961737528], [120.8652120302111, 31.1357225609474], [121.06297773613355, 31.153680121040807], [121.06127241379076, 31.266618963894174], [121.12628136569239, 31.27695425073803], [121.13558312376225, 31.374416002196668], [121.18679446819007, 31.457511705400933], [121.34091230600015, 31.49095286700019]]], [[[121.91288969500025, 31.456332207000017], [121.85137350400024, 31.439178905000162], [121.31446373800017, 31.65558502800009], [121.17628760400012, 31.784322892000077], [121.26406453299998, 31.841076794000017], [121.4753040210002, 31.770769919000102], [121.66322259500012, 31.652351670000158], [121.84407535199998, 31.60794696800015], [121.98008567500003, 31.540295811000064], [121.97785060400022, 31.47777100200001], [121.91288969500025, 31.456332207000017]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "33", name: "浙江", latitude: 29.1084, longitude: 119.97},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[121.28535242000012, 28.101945631000078], [121.15157280200017, 28.041232470000082], [121.12037194100017, 28.13568756700009], [121.23058760400025, 28.21973251800007], [121.28535242000012, 28.101945631000078]]], [[[121.95834394600016, 29.10187409100017], [121.93531334700018, 29.06289297100001], [121.86817467500012, 29.147406317000147], [121.94320722700016, 29.161118882000082], [121.95834394600016, 29.10187409100017]]], [[[122.14323978000007, 29.73338450700014], [122.18685957100016, 29.673407294000114], [122.12745201900012, 29.669012762000037], [122.14323978000007, 29.73338450700014]]], [[[122.31470787900017, 29.783677475999994], [122.23170006600017, 29.836249091000028], [122.31202233200011, 29.829046942000005], [122.31470787900017, 29.783677475999994]]], [[[122.34644616000006, 29.94940827000012], [122.40674889400006, 29.95270416900017], [122.38282311300011, 29.86473216400013], [122.34644616000006, 29.94940827000012]]], [[[121.88965905000023, 29.983954169000143], [121.82740319100006, 30.00421784100014], [121.84766686300017, 30.083156643000095], [121.90919030000012, 30.044989325000117], [121.88965905000023, 29.983954169000143]]], [[[122.17359459700006, 30.102240302000084], [122.32252037900017, 30.03192780200014], [122.29363040500007, 29.93378327000015], [122.18474368600008, 29.994452216000113], [122.01050866000017, 30.00031159100014], [121.97461998800006, 30.14801666900017], [122.08741295700005, 30.14752838700018], [122.17359459700006, 30.102240302000084]]], [[[122.21452884200008, 30.24730052300002], [122.0735783210001, 30.291408596000096], [122.21143639400006, 30.346625067000033], [122.21452884200008, 30.24730052300002]]], [[[122.290782097, 30.471665757000082], [122.36915123800006, 30.476996161000145], [122.42310631600017, 30.414943752000013], [122.28541100400017, 30.42206452000015], [122.290782097, 30.471665757000082]]], [[[120.90934370284961, 31.011724961737528], [120.96918501177893, 31.00945119951335], [120.98101891539054, 30.83204600711757], [121.10437055855434, 30.834345607763638], [121.25614423986488, 30.744066880881846], [121.2747994319482, 30.691279405320373], [121.13086998800023, 30.59975820500013], [120.97775867700003, 30.543317594000158], [120.93954511800021, 30.421942450000174], [120.83179130300007, 30.30525044600016], [120.78743319500009, 30.293625282000093], [120.6981482260002, 30.393950619000137], [120.61919297100005, 30.406095993000164], [120.430315379, 30.38984006200012], [120.38472004300016, 30.249588166000095], [120.45049431400005, 30.368860059000056], [120.65167061600019, 30.359270455000043], [120.73440116100008, 30.232213143000095], [120.89281215100019, 30.16979639900002], [120.99439537900005, 30.21108633000007], [121.14969672600003, 30.325753330000154], [121.25410242800015, 30.348393234000028], [121.37738414700007, 30.325063579000087], [121.50684671500008, 30.22002600900008], [121.6777559220001, 30.00064095200004], [121.91487649700005, 29.918695843000066], [121.93555748800011, 29.887355861000103], [122.13641456400015, 29.884535001000117], [121.98303901000006, 29.82317576300015], [121.70411217500006, 29.57200755400008], [121.53082229500015, 29.51001492200011], [121.44336998800023, 29.52423737200003], [121.44259289400023, 29.41536925200016], [121.479746941, 29.47475820500007], [121.50892998500004, 29.398349478000128], [121.56964134800015, 29.474573824000018], [121.72461998800023, 29.53847890800013], [121.77838131000007, 29.469423078000162], [121.8448185560002, 29.53620026200015], [121.74496504000004, 29.54466380400011], [121.79612041300001, 29.600591156000135], [121.91578209700012, 29.64085521000014], [121.96631920700011, 29.60248444200012], [121.91041100400005, 29.52456289300015], [121.97095787900005, 29.449123440000037], [121.9157293640001, 29.39070356600017], [121.9058537120001, 29.284613348000093], [121.94296308700021, 29.195868231000034], [121.78534674400007, 29.168085488000074], [121.7996525400001, 29.373968817000005], [121.74569746200004, 29.201605536000002], [121.652457796, 29.183020241000136], [121.58871503999998, 29.291489975999994], [121.52588951900023, 29.27777741100006], [121.49097741, 29.17597077000012], [121.40170332100016, 29.106512762000094], [121.62142988400004, 29.11326732000005], [121.61475670700005, 29.05805084800012], [121.68978925899998, 29.017075914000102], [121.6841740240001, 28.914699611000103], [121.497813347, 28.949652411000002], [121.62671959700018, 28.880845445000134], [121.66993248800011, 28.825344143000066], [121.6055607430001, 28.724676825000174], [121.45484459700018, 28.689520575000117], [121.51012813400015, 28.65705930900019], [121.58161920600017, 28.5046902590001], [121.58377693300005, 28.442946184000093], [121.65634199300015, 28.33930084800015], [121.58554121200021, 28.25682200700014], [121.58057701900006, 28.300848700000145], [121.47308608900019, 28.330602852000155], [121.39551842500012, 28.284084377000127], [121.36817467500012, 28.162014065000093], [121.33008873800023, 28.147528387000037], [121.26169450400013, 28.225790679000127], [121.18409264400023, 28.382147528000033], [121.12180321299999, 28.28436223600012], [121.11946677900008, 28.218936170000106], [121.0093782180002, 28.103132635000136], [120.96522777500016, 27.987144917000037], [120.81959069100017, 27.989243882000082], [120.7310490240001, 28.035834052], [120.58895918100004, 28.02667877800009], [120.70728600400017, 28.009711005000113], [120.83529707100016, 27.95595937700007], [120.85227198200019, 27.85819188600003], [120.80748625600009, 27.834826693000153], [120.6801805490002, 27.68637929900011], [120.66648375600002, 27.625357910000005], [120.59657442500006, 27.57028277800005], [120.6768498060002, 27.494614976000136], [120.63526451900023, 27.37970612200003], [120.54590905000012, 27.40326569200009], [120.517832879, 27.201605536000145], [120.41920006600006, 27.20636627800006], [120.40580854712678, 27.29686127382878], [120.3440035343356, 27.37964691777104], [120.24891889878828, 27.41016185188802], [120.14773644428149, 27.400214137772295], [120.06443403460295, 27.34362844479692], [119.97865115802446, 27.357942817107315], [119.93069542865126, 27.3247923855602], [119.77008507726444, 27.31587820111814], [119.69339725138198, 27.41104035103139], [119.686575962011, 27.51129263045057], [119.61040490096539, 27.609968776937578], [119.61583092725553, 27.66557261798188], [119.55144209207876, 27.674564316789727], [119.4673128601004, 27.525296943499157], [119.39036665269887, 27.51261037916568], [119.26561974465542, 27.424114488093167], [119.18583133334928, 27.41992869705176], [119.11694664876885, 27.46111481389765], [118.91907759005866, 27.47682444928894], [118.88946699440638, 27.722158310957255], [118.81980716436922, 27.90995046614104], [118.74813195182819, 27.97320241975585], [118.76642540870554, 28.1905793321704], [118.7960876812015, 28.239930325524185], [118.73521284439724, 28.325971585420334], [118.49889651905917, 28.262435410965523], [118.44644494028168, 28.288687038775763], [118.47626224240861, 28.332250271532814], [118.45791710778832, 28.517381089965284], [118.41585249179906, 28.60404246748587], [118.4255159850747, 28.695199693511057], [118.37166914321631, 28.798604234297983], [118.30288781142326, 28.835785427255615], [118.22904219034476, 28.954537869127407], [118.0639359877556, 29.050552679762376], [118.00078738782756, 29.143931992967126], [118.05199873315496, 29.275319322328926], [118.13235558524204, 29.297927761457075], [118.17473025869447, 29.407869370774904], [118.3732194359282, 29.4528278675121], [118.46959598176909, 29.52393463837285], [118.55692915285803, 29.625220444767805], [118.64808637888322, 29.658293361949163], [118.72374067599137, 29.73020111668815], [118.7413106633563, 29.828360501036386], [118.82011722183219, 29.88003693345776], [118.89396284381024, 29.982588813522966], [118.85272505102029, 30.159270535506806], [118.90946577362647, 30.22221242896036], [118.88109541232333, 30.324350897875675], [118.9346838726625, 30.352126979976106], [119.05751875188886, 30.31187103911718], [119.24732628777792, 30.304584661752727], [119.33109378455049, 30.372384142514193], [119.392382033404, 30.36843089457021], [119.32081017544917, 30.51816335675359], [119.24153852808064, 30.550848700307228], [119.27228600529492, 30.608261217381312], [119.38354536332778, 30.685259100726867], [119.44312828983865, 30.6392154001705], [119.50054080601328, 30.769388332705333], [119.57495486877218, 30.847058010518765], [119.6297835625613, 31.132880357042907], [119.74011274640614, 31.176495265743895], [119.93193566300042, 31.15003693325791], [119.94309777214451, 31.086578274068145], [120.12861616420454, 30.943176173941353], [120.21341718975142, 30.92054189729079], [120.36167687358883, 30.938757838903243], [120.44694298712923, 30.88969106728895], [120.49097130698036, 30.763703924896262], [120.5778910669192, 30.845791937747762], [120.70945926343424, 30.891086331269136], [120.6920959816442, 30.976559150384517], [120.90934370284961, 31.011724961737528]]]]
                }
            }, {
                type: "Feature",
                properties: {id: "22", name: "吉林", latitude: 43.2978, longitude: 126.466},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[131.25284846284325, 43.46916859112878], [131.28090621000007, 43.3802214560001], [131.23770471200015, 43.2658356740001], [131.16721805900016, 43.18155141200003], [131.18396122300015, 43.12080576600002], [131.0854659430001, 43.042102560000046], [131.10303592900004, 42.91043101000005], [130.9924483650001, 42.8487293500001], [130.76951623600013, 42.865808411000046], [130.73096561700004, 42.82588836700009], [130.5864783130001, 42.81725840300004], [130.40716109200008, 42.73537709600009], [130.40375044800015, 42.677551168000065], [130.50389937400007, 42.67780955100005], [130.58451460800006, 42.56890146900005], [130.53077111900006, 42.53048004200011], [130.484158976, 42.61001007100003], [130.4521536794858, 42.549558760438416], [130.4204936120001, 42.604273987000056], [130.32478885900008, 42.65029185000006], [130.24303674300006, 42.74336110500005], [130.2390059820001, 42.90224029600003], [130.0987561450001, 42.92151560500005], [130.12149377400016, 42.98184784000006], [129.9813472900001, 42.96673248400006], [129.93411503100003, 43.008409526000065], [129.8517427980001, 42.96190073600013], [129.76130904200016, 42.74604827900009], [129.78652714100014, 42.68473419200012], [129.74156864400004, 42.62900116000009], [129.72885624200006, 42.47585805300008], [129.70332808500012, 42.44237172400008], [129.59170699100002, 42.447952779000104], [129.53517297400003, 42.3695596310001], [129.43409387200012, 42.441105653000136], [129.34014611800006, 42.44547231100012], [129.2430977790001, 42.37870636100007], [129.2111617430001, 42.21995636000014], [129.119797812, 42.14936635300006], [128.96383833800013, 42.088517355000135], [128.88317189713268, 42.03040885704158], [128.72095910700006, 42.047589621000014], [128.50236779900007, 41.99609405500013], [128.2619690350001, 42.03286183700001], [128.03459273300012, 41.99374277800007], [128.0399670820001, 41.87958953900008], [128.09102339800006, 41.84173655200007], [128.15913293500006, 41.71182200100009], [128.2509102790001, 41.66011973100004], [128.30300012200007, 41.583406067000084], [128.1856946210001, 41.40445058200007], [128.14611047400007, 41.376338603000136], [128.02384403500002, 41.41147857700008], [128.0014164630001, 41.47085479800012], [127.84886763600008, 41.43132232700006], [127.63833785000014, 41.42987538700007], [127.54289147900016, 41.49131866500008], [127.42734297800013, 41.48310211200004], [127.26905806500014, 41.50496124300008], [127.20709802300013, 41.545940653000116], [127.10467533400009, 41.5374140430001], [127.17970951300009, 41.585163066000064], [127.09723392800004, 41.61244822200007], [127.07661503100013, 41.680790303000066], [126.9996179553043, 41.75202545790856], [126.92980228700009, 41.801041362000035], [126.78862227400009, 41.69590566100007], [126.61788334200008, 41.665933330000115], [126.50130131100002, 41.43437123600009], [126.52212691200009, 41.35194732700009], [126.44089156100011, 41.34838165300005], [126.26069584200008, 41.14312286400008], [126.14742110200007, 41.09227325500004], [126.01533614200008, 40.90913197900008], [125.70408969199292, 40.859194624916114], [125.68801842660906, 40.89274974230676], [125.57644900931425, 40.91261933031781], [125.69173912965715, 41.004060777183156], [125.72910118976802, 41.11991933920615], [125.76641157393504, 41.13947886795532], [125.73767947832522, 41.245234687131045], [125.65075971928556, 41.28626577434598], [125.46989220626028, 41.57456859046809], [125.44953169183412, 41.67993683511685], [125.30628462133814, 41.68037608468859], [125.32819542937557, 41.74737457887369], [125.28628584211793, 41.825922756729824], [125.29543256965741, 41.95723257082645], [125.45821333227951, 42.10544057871974], [125.48053755056742, 42.151432604231246], [125.33238122041695, 42.16466177002465], [125.2694910011088, 42.3090457220824], [125.17936730385793, 42.33328196918757], [125.20871951709194, 42.405835679972625], [125.10195600756373, 42.49386648215241], [125.09575483581699, 42.57667796541577], [125.01891198120288, 42.64685456028975], [124.95917402596046, 42.65295237924889], [124.98248009707885, 42.72467926683473], [124.94212080343237, 42.80369253178495], [124.87519982271363, 42.815991523390124], [124.86031701142085, 42.88769257345355], [124.88842899030561, 43.08672435214706], [124.87184085487155, 43.11783356456732], [124.76569746296752, 43.10558624890632], [124.69929324798497, 43.05923248998745], [124.63118370976036, 42.95709402107218], [124.48049523316843, 42.85126068842999], [124.38566898003933, 42.884772854283796], [124.4348649437622, 42.94306387050116], [124.36970096222953, 43.01233612691068], [124.41889692595242, 43.08186676753732], [124.29580366430764, 43.15656505023685], [124.2818510281025, 43.22599233717659], [124.00641564256784, 43.310121568255795], [123.80653120315242, 43.45422130037272], [123.74870527582777, 43.47228221325352], [123.69625369705051, 43.353478095437765], [123.60592329332536, 43.36505361573177], [123.378133579701, 43.453161933176716], [123.36139041643457, 43.53977163295443], [123.41864790297825, 43.618268133967234], [123.49419884729895, 43.58945852309236], [123.52215579565342, 43.6969713414542], [123.3222713562381, 44.041859850551646], [123.35906497556812, 44.15133637097668], [123.25757246269899, 44.20407217149355], [123.16817223496065, 44.366827093895296], [123.11654747938258, 44.4064887564509], [123.09882246328596, 44.531494046013364], [122.95531701127095, 44.44684804919811], [122.71538333477304, 44.33556285274341], [122.3766443223775, 44.2199626740381], [122.25406782377104, 44.245930081008396], [122.28186974519264, 44.428657945108085], [122.08818647662451, 44.61967987692478], [122.04596683190368, 44.69494660130459], [122.02255740799797, 44.84672028351426], [122.03806033691501, 44.934363512066426], [122.01077518122969, 45.118331611414675], [122.19184939982983, 45.20103974099126], [122.2340173686066, 45.28705516246578], [122.13645226436057, 45.449086616254334], [122.02705325740186, 45.484510810025824], [121.96390465657464, 45.56750316044253], [121.9820430847206, 45.64227895840719], [121.93439741370963, 45.689950466041125], [121.72898359611605, 45.68217316316094], [121.64950524317237, 45.74095510489417], [121.74200605723365, 45.79865184190899], [121.81476647269449, 45.913709418254996], [121.77368371043485, 46.01034434741368], [121.99599572182501, 45.98029450129016], [122.23980512920332, 45.81348297815691], [122.2937553238491, 45.83441193336401], [122.3985551286163, 45.94918528887001], [122.49787723204867, 45.82542023455619], [122.64696373908527, 45.72506460234953], [122.70840701667044, 45.714987697923874], [122.77341596857212, 45.788471584695856], [122.8005977723692, 45.9130634631083], [122.79873742129496, 46.089331773042915], [123.06890180927098, 46.1086587586947], [123.16166100485151, 46.220073147257864], [123.25834760995417, 46.26508331993932], [123.35611941887606, 46.235162665025], [123.76172773694543, 46.25991567606755], [123.95659956301938, 46.29076650696868], [123.9585632668813, 46.19268463788569], [124.0340625352577, 46.01848338549985], [123.97298099197917, 45.951949978408805], [124.06196780766811, 45.87167064068751], [124.02191857328353, 45.76260753051315], [124.10310224767056, 45.709690863742395], [124.14103275036115, 45.63220205308227], [124.22356001188501, 45.63550934498028], [124.2841764671702, 45.54551483803931], [124.36308637933291, 45.52564525002822], [124.3766772812316, 45.457380683072046], [124.4557938989692, 45.46358185481873], [124.56307417243511, 45.41526439113869], [124.58953250492112, 45.457380683072046], [124.87246097159652, 45.44859568893989], [124.89788577710692, 45.527298896426856], [125.0277486512793, 45.49836009434287], [125.10350630117483, 45.39531728786247], [125.30742150290001, 45.41696971348151], [125.37480756981353, 45.39846955012959], [125.43247846930592, 45.477250271083136], [125.52120690257647, 45.47102326091476], [125.69933556538399, 45.5120026721855], [125.70491662040575, 45.35971222603834], [125.84072228390625, 45.23481028926338], [126.15047081917294, 45.14117259453957], [126.24291995729016, 45.15610708357505], [126.42104861919836, 45.228454087885865], [126.55933475139761, 45.246747544763366], [126.78898481699571, 45.14933747014817], [126.95269575380598, 45.13419627553762], [127.07661583865001, 44.93400177686047], [126.97827558804795, 44.8261013857703], [127.03227746043643, 44.73055166312872], [127.04498986229225, 44.598234157780155], [127.14725752241668, 44.654690660445624], [127.27112593041727, 44.61381460196236], [127.37520226477261, 44.64882538548309], [127.5592737160091, 44.57379120510004], [127.51302330897852, 44.51826487932075], [127.49281782418313, 44.41090709148901], [127.61761640817065, 44.272233384762956], [127.60981326686874, 44.22009186524738], [127.71471642532276, 44.161490789768095], [127.74437869691934, 44.085629787984374], [127.84959191283644, 44.05591583954438], [128.05206017463735, 44.12578237605578], [128.042965123042, 44.340704658193346], [128.15525800984926, 44.35300364799994], [128.20693444227066, 44.44049184782051], [128.35870812358104, 44.501676743886605], [128.4187561380852, 44.450103665152085], [128.45069217280547, 44.3155382351014], [128.4459379418825, 44.15394603088458], [128.52877526266826, 44.08010040980602], [128.63150800988677, 43.91217784353262], [128.74741824785383, 43.80218455737142], [128.76447147038203, 43.70906362568576], [128.8828621770478, 43.55615306281359], [129.014895460657, 43.5396682810663], [129.22893924365115, 43.60839793601593], [129.2157100769585, 43.73826081018822], [129.24924808213325, 43.78616486271821], [129.53491539902643, 43.870319933118395], [129.75242150265012, 43.87416982737565], [129.80213423120978, 43.96548208303176], [129.9129285021486, 44.02160268801359], [130.0001066427074, 43.98356883433419], [130.0331795589895, 43.85561798807967], [130.1036145371811, 43.845437729967244], [130.16800337055912, 43.91000743319654], [130.28019290637747, 43.96444855425736], [130.33419477786663, 44.04775096303652], [130.33279951388636, 43.927809964558236], [130.41408654196027, 43.669169420032716], [130.58870120729478, 43.62772492076843], [130.7978357279365, 43.511452949394084], [130.83721316875267, 43.44923452455359], [130.9165881689088, 43.45047475800365], [130.99461958192813, 43.50773224544673], [131.14949384956157, 43.43610870974911], [131.25284846284325, 43.46916859112878]]]
                }
            }, {
                type: "Feature",
                properties: {id: "15", name: "内蒙古", latitude: 41.5938, longitude: 111.623},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[121.41327478505161, 53.31733482412142], [121.60718224476477, 53.240729885275954], [121.69281009261164, 53.12727427848509], [121.76541548113948, 53.09495067013731], [121.80019371976425, 53.02358551685808], [121.69151818231819, 52.908347073358726], [121.50274417520347, 52.77468598087333], [121.17392703670339, 52.594981187831564], [121.49091027159176, 52.444680283967955], [121.69234500461823, 52.388533841463584], [121.83125125534116, 52.26936798844193], [122.01790652896307, 52.28311391907212], [122.17365929573992, 52.47963939154465], [122.3386104677989, 52.453697822096785], [122.50190799435836, 52.28595612207735], [122.73073123585783, 52.248904120328916], [122.77512129091474, 52.20001821586797], [122.64494835838008, 52.13593943905386], [122.63766198101558, 52.09496002958167], [122.75419233570773, 51.84748159420025], [122.71445315968549, 51.70167654153914], [122.83553104062503, 51.567757065735975], [122.83894168531054, 51.510551256035626], [122.95624718635855, 51.38606273130995], [123.08812544213538, 51.31247549085123], [123.17886925701055, 51.31635122353009], [123.27168012943434, 51.26669017181396], [123.50257042938176, 51.2597655305548], [123.56964643793282, 51.203903307091906], [123.66240563441255, 51.19966583920714], [123.78875451111173, 51.232816270754284], [123.86626915929423, 51.31343150525973], [124.00440026276198, 51.30172679285715], [124.16206505655703, 51.328365994295154], [124.35078738772768, 51.27862742821324], [124.50188927636901, 51.36058624895625], [124.66622033080353, 51.33526479803194], [124.82062951134287, 51.36585724471604], [124.94026045055938, 51.445206407349815], [124.95452314692568, 51.48920888877919], [125.06061486198621, 51.53437409109145], [125.06826297365728, 51.594370428752256], [125.12753584180564, 51.615738634430386], [125.33331139460518, 51.58274323251419], [125.48663537042592, 51.507398993768504], [125.57691409730774, 51.389318346364576], [125.7194893742352, 51.25371938753966], [125.84340945907928, 51.206228746159695], [125.8706946147646, 51.14475963015278], [125.98438276555214, 51.104219469352955], [126.05626468276887, 50.98027354608723], [125.98055870971672, 50.87040945113523], [125.95167158357668, 50.89260447911343], [125.82403079568462, 50.766798203873975], [125.75400923134094, 50.754344184436576], [125.80940636591112, 50.56223704700207], [125.64667728103171, 50.45268301041253], [125.54203250499609, 50.40658763301283], [125.50632409128377, 50.31413849489556], [125.41842247941389, 50.1946109084667], [125.26442671092394, 50.10572744376648], [125.29522586498166, 50.01446686495382], [125.18660200437898, 49.95167999933247], [125.24499637338386, 49.877033393476296], [125.21616092318806, 49.79814931883598], [125.21957156787352, 49.668131415032775], [125.12521040273782, 49.656581733160465], [125.24003543508724, 49.540904039189996], [125.267372267616, 49.43848135033406], [125.22287885977153, 49.22004507072347], [125.15812829028835, 49.1511087101988], [124.86393436078208, 49.175396633248], [124.82155968643036, 49.060881660160504], [124.62183027574656, 48.74198639645499], [124.61624922072485, 48.66757233279691], [124.53806277897405, 48.571686713371065], [124.52069949808339, 48.36903758441693], [124.56224734923569, 48.236177476709145], [124.48235558514205, 48.11158559829673], [124.39264529814193, 48.26366933886891], [124.32717125914627, 48.33219228824356], [124.30076460170494, 48.49187246454258], [124.2340503283599, 48.53083649420881], [124.07793582637726, 48.44830923088628], [123.72694949832072, 48.191063951240324], [123.57755293202223, 48.05432811085356], [123.4873775570286, 48.00756093988542], [123.29328087820994, 47.94565257430685], [123.20682620716366, 47.81382599537338], [123.0954118186005, 47.754940700852615], [122.79734215731469, 47.64355215071117], [122.56536665264889, 47.5311559111164], [122.49472496978149, 47.41023305890852], [122.4052213892557, 47.33168488195176], [122.57404829309422, 47.131128648068625], [122.79734215731469, 47.03371857435272], [122.99624474479918, 46.84029368820319], [123.18682742704402, 46.76164215845881], [123.33048790869003, 46.83264557653209], [123.37999393077524, 46.89806793958377], [123.46846398342615, 46.87465851477867], [123.48939293773395, 46.81729767544729], [123.57067996580776, 46.873289090119385], [123.60871382038653, 46.77463878025546], [123.53610843275794, 46.691982327522396], [123.39725385977772, 46.59782786706242], [123.29152387902383, 46.58635569955587], [123.09417158425117, 46.621960761379995], [123.00399621015703, 46.585942288405846], [122.98890669239, 46.40657339124897], [123.16166100485151, 46.220073147257864], [123.06890180927098, 46.1086587586947], [122.79873742129496, 46.089331773042915], [122.8005977723692, 45.9130634631083], [122.77341596857212, 45.788471584695856], [122.70840701667044, 45.714987697923874], [122.64696373908527, 45.72506460234953], [122.49787723204867, 45.82542023455619], [122.3985551286163, 45.94918528887001], [122.2937553238491, 45.83441193336401], [122.23980512920332, 45.81348297815691], [121.99599572182501, 45.98029450129016], [121.77368371043485, 46.01034434741368], [121.81476647269449, 45.913709418254996], [121.74200605723365, 45.79865184190899], [121.64950524317237, 45.74095510489417], [121.72898359611605, 45.68217316316094], [121.93439741370963, 45.689950466041125], [121.9820430847206, 45.64227895840719], [121.96390465657464, 45.56750316044253], [122.02705325740186, 45.484510810025824], [122.13645226436057, 45.449086616254334], [122.2340173686066, 45.28705516246578], [122.19184939982983, 45.20103974099126], [122.01077518122969, 45.118331611414675], [122.03806033691501, 44.934363512066426], [122.02255740799797, 44.84672028351426], [122.04596683190368, 44.69494660130459], [122.08818647662451, 44.61967987692478], [122.28186974519264, 44.428657945108085], [122.25406782377104, 44.245930081008396], [122.3766443223775, 44.2199626740381], [122.71538333477304, 44.33556285274341], [122.95531701127095, 44.44684804919811], [123.09882246328596, 44.531494046013364], [123.11654747938258, 44.4064887564509], [123.16817223496065, 44.366827093895296], [123.25757246269899, 44.20407217149355], [123.35906497556812, 44.15133637097668], [123.3222713562381, 44.041859850551646], [123.52215579565342, 43.6969713414542], [123.49419884729895, 43.58945852309236], [123.41864790297825, 43.618268133967234], [123.36139041643457, 43.53977163295443], [123.378133579701, 43.453161933176716], [123.60592329332536, 43.36505361573177], [123.69625369705051, 43.353478095437765], [123.61196943634042, 43.08135000270045], [123.3544140974326, 43.01231028938838], [123.29979210831914, 43.01649608042979], [123.18186648964678, 42.94409739837619], [123.13127526284302, 42.82637848617813], [122.97454064323614, 42.78793122044942], [122.89278852806808, 42.74493642847332], [122.72794070879667, 42.741009019850395], [122.47637983606057, 42.84963288045304], [122.39204389940642, 42.85356028907606], [122.36687747631447, 42.79909332869414], [122.42553022683842, 42.67496653917445], [122.29938805571419, 42.63646759750159], [122.04503665591687, 42.72085521099919], [121.9182743671683, 42.64659617787132], [121.87776004389082, 42.539574285924516], [121.72366092261345, 42.4576671411257], [121.64609459758753, 42.45358470287172], [121.54444705598675, 42.535233466151524], [121.36885053872126, 42.49999013953338], [121.03424563962454, 42.26010814077813], [120.91259931880347, 42.2965658642232], [120.7350907736203, 42.22786204679602], [120.62786217699784, 42.16037262619574], [120.50916141196953, 42.14869375311419], [120.46880211832305, 42.03800283496297], [120.34017947760077, 41.96581085938362], [120.14076012617892, 41.789284166131324], [120.10758385621006, 41.70652435971141], [120.0362187029308, 41.70742869727661], [120.03032759044595, 41.86059764346652], [119.96015099467263, 41.97175364781262], [119.89188642771637, 41.99945221644663], [119.87571170523103, 42.070326443310705], [119.80822228373128, 42.12022003812429], [119.82145145132333, 42.20861257640924], [119.6294218282548, 42.25054800118926], [119.56275923085377, 42.37183258680446], [119.51170291605678, 42.394518541197726], [119.47366906057869, 42.332170925148034], [119.33574466358527, 42.289408678067986], [119.24525923112861, 42.191946925710084], [119.36587202407469, 42.10047964132232], [119.32174034963742, 41.96539744733431], [119.33078372618797, 41.86754812314737], [119.29864098499343, 41.77734690973213], [119.31559085473407, 41.65781932240381], [119.35558841407396, 41.608339137840915], [119.3897465350745, 41.47255931186268], [119.36163455618973, 41.3749942085159], [119.23099653476226, 41.27339834195985], [119.23828291212675, 41.31982961704318], [119.15265506427983, 41.31220734289451], [118.86714277611816, 41.33654694278715], [118.79712120997578, 41.38031688111914], [118.7279264670328, 41.34729564078127], [118.4372465349995, 41.348329169555555], [118.34981001202249, 41.33623688442461], [118.3325500830199, 41.446566067370156], [118.29472293491557, 41.46062205726216], [118.31363650941734, 41.56955597622735], [118.24439008963094, 41.592345283408065], [118.15938235940834, 41.71913340877988], [118.16806399985364, 41.79011098933066], [118.27823815316827, 41.752697252376265], [118.32216312113107, 41.863543199259155], [118.2678511903801, 42.07386627920542], [118.13390587795396, 42.021905625943845], [118.08600182542384, 42.18166331570943], [117.98931522032112, 42.22160919910523], [118.04130171110506, 42.27824656802471], [118.02424848767754, 42.38263296254115], [117.80048953726222, 42.568823147270464], [117.7874670761446, 42.60962169048864], [117.59362877794567, 42.55158905668954], [117.5293949732993, 42.62024119727343], [117.4504333842932, 42.54928945604357], [117.41239952971443, 42.458080553174966], [117.24388268423849, 42.48226512343666], [117.05593550032307, 42.46283478499731], [116.88710859558509, 42.395371201919446], [116.82659549398679, 42.30816722293899], [116.87889204313316, 42.22021393512496], [116.85811811665769, 42.019502672510356], [116.59973595634932, 41.92372040497273], [116.51999922098724, 41.96710277057642], [116.46610070228553, 41.94762075529363], [116.37752729684723, 42.00968415050312], [116.20715010029684, 41.88400706647302], [116.12989383273418, 41.872896633273], [116.03785810756551, 41.800627143327944], [115.93734744662731, 41.92746694644242], [115.85879926967056, 41.92746694644242], [115.57793785964441, 41.791092841261616], [115.33976118413122, 41.72083873112258], [115.34131147684315, 41.615858059202], [115.22586632686944, 41.585834052399576], [115.09739871577807, 41.61616811846383], [114.88898766464905, 41.61004446108302], [114.87581017479971, 41.81166006126276], [114.93131066305665, 41.8386093210633], [114.92030358264418, 41.93687205729955], [114.80485843267047, 42.178407701554136], [114.75194176589966, 42.139857083037995], [114.59634402875383, 42.141278185439916], [114.48131229082946, 42.07526154228631], [114.41971398271409, 41.95630239483964], [114.25569298664198, 41.860080877730354], [114.21352501786521, 41.76690827099989], [114.19709191296133, 41.59358551685811], [114.02728315629258, 41.53128957855117], [113.92796105375953, 41.41835073479854], [113.90889244962688, 41.294017238804514], [113.98490848194086, 41.24089386735807], [113.96382449800223, 41.15335398979482], [113.89835045810713, 41.15593781218027], [113.82279951378649, 41.094184475333236], [114.0186015158472, 40.9236005723086], [114.06014936699972, 40.81365896299076], [114.15409712098534, 40.7425780305517], [114.02697309793007, 40.63516856497725], [114.07554894402847, 40.55018667317648], [114.04376793803988, 40.48799408585833], [113.89612837092756, 40.469158027520905], [113.80848514237545, 40.43422475836593], [113.6766068865985, 40.428540351456036], [113.51832197517899, 40.34373932590913], [113.33414717025562, 40.3187279324481], [113.22986413032532, 40.41665477100091], [113.0864620301985, 40.40443329556015], [112.96140506379265, 40.35585744946175], [112.8081327657145, 40.19821849228961], [112.7013692570855, 40.174757392439716], [112.5958459819065, 40.23777680115845], [112.39921715664639, 40.28834219043969], [112.27927615816822, 40.22896596950389], [112.16507124164451, 40.05931224246595], [112.09897708502444, 40.00543956218607], [111.92146853984127, 39.688843899126624], [111.7611682477164, 39.59804840830739], [111.67486860630117, 39.63592723235587], [111.48991865412256, 39.65215363258406], [111.42537479021439, 39.62538523993686], [111.42118899917295, 39.52213572878085], [111.34269249905952, 39.44441437412402], [111.19944542856365, 39.427154446020836], [111.11004520082531, 39.38519318281914], [111.04100548661387, 39.4229686549794], [111.12265424989374, 39.52758759169399], [111.12058719324432, 39.58078847930483], [111.01310021420346, 39.56487213833856], [110.84566857344595, 39.46518829970023], [110.63787763904185, 39.24509837548965], [110.49416548055251, 39.37431529451524], [110.33810265541325, 39.31814301179051], [110.22524132692564, 39.424053859697864], [110.10917606022701, 39.42839468037019], [110.1768721864023, 39.28519928581835], [109.96334516824493, 39.18127798109393], [109.8205631857424, 39.0544640164012], [109.67426720576697, 39.01121084200679], [109.63530317610065, 38.905816758936226], [109.5379964542729, 38.78520396599026], [109.42394656827952, 38.76905508102712], [109.3131522973406, 38.62048533792796], [109.15998335205006, 38.5421438674455], [108.98635053864638, 38.335205592863815], [108.9534843279394, 38.19906403347835], [109.02795006664223, 38.11095571513414], [109.00097497021864, 37.988482571113735], [108.95425947519459, 37.9255406758615], [108.83633385562291, 37.98835337990454], [108.78047163305939, 37.90528351512208], [108.76434858561868, 37.68188629811419], [108.64993696531866, 37.66284353330241], [108.49635460797873, 37.66860545547735], [108.33295372863165, 37.6335946719565], [108.03870812408064, 37.632509467238066], [107.92874067634108, 37.78534251574453], [107.65764611237813, 37.85293528913229], [107.40468997566182, 37.9216649440819], [107.39275272016192, 37.98522695605914], [107.3241780948432, 38.06594554335217], [107.16263756657042, 38.138602606924735], [107.06083499623804, 38.114934801499885], [106.82916954993476, 38.150384832793804], [106.47012169815781, 38.290686347497], [106.6449947450115, 38.45920319297295], [106.70442264189137, 38.63722850209365], [106.93174726842165, 38.92113882070004], [106.97784264492208, 39.03560211784347], [106.91185184108957, 39.06919179896235], [106.80824059472769, 39.19905467403399], [106.78912031465075, 39.36095693571397], [106.61409223816622, 39.358321438283724], [106.49694176584978, 39.28579356502101], [106.30206993977589, 39.28948843054664], [106.2834147476924, 39.156524970051265], [106.24078169182155, 39.12665599198047], [106.11319257987361, 39.12081655543966], [106.06027591400226, 38.97906810171153], [105.89661665223667, 38.73618887032012], [105.84121951676724, 38.57128937420518], [105.8227193543147, 38.346135158910414], [105.82809370286213, 38.22681427715713], [105.75564334486444, 38.135502021501026], [105.82473473501994, 38.005484116798556], [105.78809614532082, 37.805057075023996], [105.65869835824259, 37.73981557912566], [105.53410647983014, 37.72498444287777], [105.3544275252101, 37.75263133376896], [105.08488325395899, 37.660673122966244], [104.94432335773678, 37.54571889940763], [104.64697716686271, 37.50659984011051], [104.52238528934959, 37.5299575871729], [104.4252335962534, 37.49858999323354], [104.35851932200904, 37.40123159456249], [104.2624528336313, 37.3903278669375], [104.10850874198485, 37.46184804894827], [103.86366580583223, 37.62643748580132], [103.67871585455305, 37.7750330673222], [103.43816206312869, 37.842393296713254], [103.38746748263816, 37.99910207789861], [103.38808760026257, 38.101989853848664], [103.52167117658354, 38.13984284127409], [103.4876680852139, 38.330322170731534], [103.44348473483262, 38.39331574192792], [103.47123497941078, 38.43589712185471], [103.79431603415765, 38.59077138948797], [103.87343265189537, 38.64268036590613], [103.97952436695596, 38.7589781757022], [104.04256961499567, 38.8740615913693], [104.17155399002456, 38.95950857206296], [104.22478071515786, 39.090689194950386], [104.05998457183051, 39.307833564267554], [104.06060469035413, 39.427386990017595], [104.02396609885636, 39.44110708312536], [103.74925418463295, 39.4248806828972], [103.46379357331472, 39.35718455672196], [103.28395958906378, 39.292976590497204], [102.96537438372081, 39.11936961551535], [102.8305505721512, 39.130221666296904], [102.59345909955778, 39.177919013251824], [102.47238121861835, 39.231972561584456], [102.393109572149, 39.23719188140015], [102.01519982271361, 39.120144761871245], [101.85526126489549, 39.091205959787175], [101.82549563961209, 39.06443756803935], [102.03121951736676, 38.8791775583976], [101.83107669463374, 38.68983511050192], [101.58018761636538, 38.68823314094669], [101.31043663863994, 38.768848375452166], [101.33591312099372, 38.806623846713165], [101.20636030518398, 38.93080231397556], [101.17995364774265, 39.02064179128564], [101.04854048085855, 39.00082388011796], [100.88855024619687, 39.105158595992435], [100.85196333244181, 39.16748037451967], [100.83315311072744, 39.380077215790806], [100.78953820202634, 39.407879137212376], [100.54345503062518, 39.408860989143335], [100.45498497887365, 39.495574041708636], [100.3068286478238, 39.54983429651557], [100.28662316302854, 39.62734894469807], [100.18885135320733, 39.694890042141765], [100.0434855492187, 39.72765290006129], [99.68614301978448, 39.876015936686144], [99.43086144400041, 39.87880646374728], [99.53250898560123, 40.00078868315117], [99.62702518126707, 40.06918244131654], [99.89935997868008, 40.204781399242165], [99.95661746612313, 40.27325267177338], [100.01418501192876, 40.40249542922069], [100.14001712379127, 40.518095607926], [100.20378584224284, 40.61695262336488], [100.17603559766468, 40.735084946712874], [100.07547326078236, 40.85900503245625], [100.01118777929253, 40.896289578201475], [99.76665490060321, 40.90985464077903], [99.66454227100894, 40.901276354020496], [99.49602542463361, 40.84288198501565], [99.1574414409697, 40.83631907806301], [98.82567874577745, 40.72655833589849], [98.64584476062714, 40.56754995406706], [98.51520674009896, 40.533546860898895], [98.24581749937812, 40.52452932456873], [98.23481041896565, 40.541685898985065], [98.32653608577169, 40.855671902136606], [98.2939282565838, 40.91665009172837], [98.2037528833888, 40.95124746409917], [98.01802778485433, 41.08999868429183], [97.95053836515336, 41.119815986418644], [97.70848595606202, 41.34941437427395], [97.6476111192577, 41.455531927756255], [97.6795988299221, 41.50232493714611], [97.84687544104878, 41.61926870388754], [97.19067973399132, 42.78706149219707], [97.84999217484966, 42.723044566226775], [99.47447554500013, 42.56419891400009], [99.62190342895008, 42.59744260619564], [99.97155114800012, 42.67628509500014], [100.01697473100006, 42.67651763900008], [101.21871016400007, 42.52983408700004], [101.41073978700013, 42.544871929000124], [101.63759932500011, 42.515442200000024], [101.73537113500004, 42.46115610800007], [101.88647302300012, 42.278014832000025], [102.03416426600012, 42.18460968100004], [103.07348067300012, 42.00451731400011], [103.6914274500001, 41.75923512800006], [103.72098636900006, 41.755566101000056], [104.50078373200012, 41.87059783900011], [104.49799320500006, 41.665778300000085], [104.60124271700005, 41.64544362400005], [104.8923360600001, 41.64477183000005], [105.01480920400013, 41.59614430800005], [105.20089603700006, 41.74347381600009], [105.40274418100012, 41.81153167800008], [105.86860721900007, 41.99348439500011], [106.76782881800011, 42.28661895800005], [108.04968016695312, 42.43911960504292], [108.17735518400008, 42.454308981000025], [108.3197754310001, 42.43255320200009], [108.53645471300007, 42.435111186000114], [108.7968522540001, 42.39836924300002], [108.99446293200009, 42.44952891100013], [109.25341353400006, 42.425938620000096], [109.48513065600014, 42.44929636700007], [109.66734175700003, 42.548980204000145], [109.91270145700008, 42.62882029300005], [110.07486210100006, 42.64352223800003], [110.13987105300009, 42.68261545800004], [110.4067281500001, 42.768605041000114], [110.44941288300004, 42.837334696000084], [110.60816288300003, 42.94466664700005], [110.68009647600007, 43.05765716600007], [110.79698856600004, 43.14891774500006], [110.93372440600012, 43.287772319000084], [111.09609175600013, 43.36665639300011], [111.33855757600008, 43.43817657500006], [111.42868127500009, 43.48393605600009], [111.59724979700007, 43.523391012000104], [111.75382938700005, 43.66320160000009], [111.93335331300011, 43.69663625100006], [111.94430871600008, 43.786372376000145], [111.83878544100003, 43.93879201300007], [111.63445682800011, 44.06594187500011], [111.51942508900004, 44.188570048000116], [111.4905896410001, 44.28262115500007], [111.39643518100013, 44.34659657800006], [111.4063570560001, 44.416463115000056], [111.5438163660001, 44.601258036000075], [111.55136112500003, 44.69319041000006], [111.73853316300011, 44.966300354000055], [111.84333296700004, 45.03952585900004], [111.98463721186897, 45.087154137876695], [112.10760624200014, 45.06737945600011], [112.37963098200015, 45.070738424000126], [112.44133264200002, 45.052393290000055], [112.58602665200016, 44.92382232700001], [112.74849735600009, 44.86527293000009], [113.10485803200004, 44.79437286400014], [113.47320764200009, 44.770705058000004], [113.6350582280001, 44.746262105000056], [113.88930627500014, 44.90826772100007], [114.05529097500005, 44.94056549100014], [114.1636047770001, 45.040145976000105], [114.41888635300006, 45.20147979700005], [114.53371138500006, 45.38549957300006], [114.73731652900005, 45.42503204400009], [114.93885461400015, 45.37376902300005], [115.12633671100008, 45.39443959600007], [115.33727990800008, 45.39469797800004], [115.63783003800006, 45.444359030000044], [116.0119674070001, 45.67855662000008], [116.16989058400009, 45.709097392000075], [116.25164270100004, 45.803251852000045], [116.21319543500016, 45.90815500900007], [116.3571659750001, 46.10555898100009], [116.5251143800001, 46.22679189100003], [116.58195926320468, 46.29801243811178], [116.72200158700002, 46.32869781500011], [116.80458052600017, 46.38290639300004], [117.30170780500015, 46.35014353500014], [117.3530741780001, 46.379495748000124], [117.40547408100014, 46.510805563000105], [117.39379520700004, 46.57137034100006], [117.55626591000009, 46.60160105500006], [117.69620568900012, 46.5122525030001], [117.81702518700007, 46.52747121200011], [117.8783134360001, 46.59638173500005], [118.00554081200005, 46.626974182000055], [118.2382914640001, 46.715392558000076], [118.33554650900015, 46.722162171000036], [118.43517867100002, 46.6911563110001], [118.60937992400005, 46.70578074200009], [118.7200708420001, 46.676738587000074], [118.81624068200006, 46.758180644000106], [118.89055139200002, 46.71353220600008], [118.9672392170001, 46.74045562800009], [119.06237552900012, 46.66095143700008], [119.31693363500011, 46.611677958000115], [119.45294600400013, 46.6274909470001], [119.62347823100009, 46.61632883700008], [119.68011560100007, 46.59162750300007], [119.90418461200017, 46.70893300400013], [119.88310062700009, 46.75301300100011], [119.89291914900008, 46.90551015200003], [119.7701359460001, 46.992998352000114], [119.75396122200004, 47.09443918900007], [119.69995935100013, 47.15952565500007], [119.47599369300008, 47.30920644200003], [119.28189701300005, 47.41485890700005], [119.31011234600015, 47.47609548000008], [119.15756351700009, 47.51766917000006], [119.08345951400014, 47.66156219500007], [118.76740645400008, 47.75615590400008], [118.5422522390001, 47.96624644000005], [118.47279911300012, 47.98944915800007], [118.28004602100015, 47.99813079900011], [118.18248091600003, 48.02820648200009], [117.97277795400015, 47.99789825500005], [117.81516483600006, 48.004822896000036], [117.7416809500001, 47.97758941700005], [117.360825643, 47.650865174000074], [117.31710738200002, 47.65406911200003], [117.06968062300007, 47.81015777600004], [116.8532597250001, 47.87211781800008], [116.75166386000006, 47.87413319900011], [116.49968957600004, 47.83635772800005], [116.24389123600014, 47.86289357500007], [116.08431441300007, 47.80692799900007], [115.97290002500011, 47.70905283700006], [115.8527006430001, 47.705564678000115], [115.59989953600012, 47.887414043000035], [115.56186568200013, 47.93319936200007], [115.51453007100014, 48.12210256000009], [115.53644087800001, 48.149155172000064], [115.77084517400016, 48.224085999000096], [115.80929244000004, 48.273953756000054], [115.78655481000015, 48.47301137400004], [115.8004040940001, 48.530372213000135], [116.02819380800014, 48.76746368500005], [116.0378056240001, 48.87014475500004], [116.68427779200016, 49.82326487300011], [117.05758833800013, 49.672886454000064], [117.25292525200007, 49.622450256000064], [117.47286014900016, 49.61428538100003], [117.75883752500016, 49.51274119100006], [117.87376591000015, 49.51320627900006], [117.89381636600001, 49.54664093100007], [118.16863163300007, 49.67149119100009], [118.39373417100006, 49.82000925800011], [118.47703658100016, 49.83597727500006], [118.52127160700002, 49.894061585000145], [118.64436486800003, 49.954574687000104], [119.09167606600016, 49.986562398000075], [119.20851648000013, 50.01513946600005], [119.31621016500009, 50.09265411400011], [119.35290043100014, 50.34550689700012], [119.2507878020001, 50.34250966500011], [119.14123376500004, 50.37661611000007], [119.24365645400007, 50.44550079300009], [119.29357588700015, 50.599238179000054], [119.49666426700003, 50.73705922500011], [119.5179549560001, 50.904800924000085], [119.68321618700008, 51.016060283000115], [119.74827681500011, 51.083394674000004], [119.8196419680001, 51.27472666500009], [119.91565677900007, 51.33074391700012], [119.977203411, 51.487013449000074], [120.05290938400009, 51.552203268000085], [120.10820316600007, 51.66519378700008], [120.15378178000009, 51.663979390000065], [120.31930139200011, 51.77603973400011], [120.56631473800013, 51.90533416800014], [120.64760176600015, 51.91101857500007], [120.70578942900016, 51.9799549360001], [120.70563440000001, 52.06103525800003], [120.77916996300007, 52.117595114000096], [120.75808597900004, 52.23740692200005], [120.626156047, 52.346805929000084], [120.69038985300006, 52.43912587500006], [120.72397953300009, 52.54216868100008], [120.4299406340001, 52.63609059700008], [120.17595096800011, 52.583742371000056], [120.05642338100012, 52.60051137400012], [120.0329622800001, 52.760656637000125], [120.2801823320001, 52.86592153000004], [120.45030114700006, 53.00834177700003], [120.65220096800016, 53.122830913000115], [120.714057658, 53.18504933700004], [120.8742545980001, 53.28015981100009], [121.05486372900009, 53.29000417100005], [121.20348514900007, 53.27674916600006], [121.35763594600013, 53.3240589400001], [121.41327478505161, 53.31733482412142]]]
                }
            }, {
                type: "Feature",
                properties: {id: "23", name: "黑龙江", latitude: 46.8451, longitude: 127.97},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[130.62528639987386, 48.87435952823475], [130.67432824800005, 48.87081654900004], [130.53325158700005, 48.63579213500006], [130.60766565000006, 48.57672597300012], [130.63929162700003, 48.47724884100009], [130.74429813700016, 48.49732513500004], [130.73830367100004, 48.42980987600001], [130.8221228430001, 48.3337692260001], [130.75277307200008, 48.189617819000034], [130.6633728440001, 48.11644399000005], [130.68238977100015, 48.05034983400009], [130.90697554600007, 47.88426178000009], [130.94170210800013, 47.82059641500007], [130.94180546100011, 47.71796702100008], [131.0233508710001, 47.68228444500011], [131.41836552000012, 47.74261667900009], [131.57742557800015, 47.66856435200006], [131.68356897000007, 47.694609274000044], [131.89430546100004, 47.670011292000055], [132.02535689300015, 47.69786488900013], [132.16167932100012, 47.6900100710001], [132.33241825400006, 47.73651886000005], [132.5246545820001, 47.707528381000145], [132.6588066010001, 47.86981821800006], [132.6746195890001, 47.950614319000096], [132.82065718600012, 47.94237192800006], [133.09195845600004, 48.106780497000045], [133.18518273900008, 48.124815573000035], [133.46371871000014, 48.08952056900006], [133.55994022700008, 48.11329172800001], [133.60551884000012, 48.17163442000006], [133.72127404800005, 48.244756572000114], [133.9824467370001, 48.285167542000096], [134.05717085800012, 48.3271804820001], [134.3863497318517, 48.381337382904704], [134.45311568300008, 48.344182027000045], [134.542619263, 48.35730784100011], [134.6113489180001, 48.285425924000066], [134.700852499, 48.261525574000075], [134.68297245300005, 48.13551259400003], [134.5672172450001, 48.040376282000096], [134.59904992700007, 47.910694275000054], [134.64576542200012, 47.89630238900014], [134.69651167900014, 47.79506825800004], [134.77257938700012, 47.71073232100011], [134.69289432900013, 47.64890146900012], [134.68266239500014, 47.587845764000036], [134.48463830600014, 47.430180970000094], [134.29281539000016, 47.40971710300005], [134.18357141100006, 47.32749989900009], [134.15411584500015, 47.25789174400009], [134.22728967300014, 47.117745260000106], [134.12424686700007, 47.07051300100008], [134.06915979000007, 46.98124196400002], [134.02048059100002, 46.83404164600012], [134.044665162, 46.77200409000008], [133.99849762088434, 46.63770422488511], [133.90245162000008, 46.57364410400007], [133.84932824800006, 46.4802906300001], [133.92601607300008, 46.3713050340001], [133.86338423700016, 46.339291484000086], [133.90245162000008, 46.25898630800009], [133.83661584500015, 46.200436910000064], [133.7935177010001, 46.214286194000124], [133.68737430900006, 46.14183583600004], [133.71931034400012, 46.07930735300005], [133.65812544800008, 45.93450999000001], [133.58588179500015, 45.87632232700011], [133.51436161300006, 45.879267884000114], [133.47725793500007, 45.82009836900002], [133.51136438100002, 45.77855051700004], [133.44304813700006, 45.709665833000116], [133.49152063000014, 45.67338897800008], [133.4251680910001, 45.58042307500011], [133.2021326090001, 45.5112800090001], [133.14022424400008, 45.43541900700009], [133.0975395100001, 45.24354441300008], [133.11541955600006, 45.12303497300013], [132.95336226400008, 45.02438466400011], [132.83977746600016, 45.05916290300007], [131.969649699, 45.23382924400005], [131.87074100800015, 45.32633005800008], [131.81803104700015, 45.33278961200003], [131.72315311800003, 45.21532908200001], [131.62775842400004, 45.198482565000035], [131.60905155500012, 45.08970367400008], [131.41950240100005, 44.95896230100004], [131.32948205600007, 44.96764394200011], [131.15801965400016, 44.901704814000084], [131.05156620300016, 44.909042867000096], [130.93343387900006, 44.84170847600009], [131.06582889900005, 44.682028301000116], [131.2644731040001, 44.05421132500004], [131.21775761000004, 44.01607411700007], [131.2173441980001, 43.90848378600003], [131.17031864400013, 43.781101380000024], [131.19202274600002, 43.58863250700003], [131.1669080000001, 43.52106557300007], [131.25284846284325, 43.46916859112878], [131.14949384956157, 43.43610870974911], [130.99461958192813, 43.50773224544673], [130.9165881689088, 43.45047475800365], [130.83721316875267, 43.44923452455359], [130.7978357279365, 43.511452949394084], [130.58870120729478, 43.62772492076843], [130.41408654196027, 43.669169420032716], [130.33279951388636, 43.927809964558236], [130.33419477786663, 44.04775096303652], [130.28019290637747, 43.96444855425736], [130.16800337055912, 43.91000743319654], [130.1036145371811, 43.845437729967244], [130.0331795589895, 43.85561798807967], [130.0001066427074, 43.98356883433419], [129.9129285021486, 44.02160268801359], [129.80213423120978, 43.96548208303176], [129.75242150265012, 43.87416982737565], [129.53491539902643, 43.870319933118395], [129.24924808213325, 43.78616486271821], [129.2157100769585, 43.73826081018822], [129.22893924365115, 43.60839793601593], [129.014895460657, 43.5396682810663], [128.8828621770478, 43.55615306281359], [128.76447147038203, 43.70906362568576], [128.74741824785383, 43.80218455737142], [128.63150800988677, 43.91217784353262], [128.52877526266826, 44.08010040980602], [128.4459379418825, 44.15394603088458], [128.45069217280547, 44.3155382351014], [128.4187561380852, 44.450103665152085], [128.35870812358104, 44.501676743886605], [128.20693444227066, 44.44049184782051], [128.15525800984926, 44.35300364799994], [128.042965123042, 44.340704658193346], [128.05206017463735, 44.12578237605578], [127.84959191283644, 44.05591583954438], [127.74437869691934, 44.085629787984374], [127.71471642532276, 44.161490789768095], [127.60981326686874, 44.22009186524738], [127.61761640817065, 44.272233384762956], [127.49281782418313, 44.41090709148901], [127.51302330897852, 44.51826487932075], [127.5592737160091, 44.57379120510004], [127.37520226477261, 44.64882538548309], [127.27112593041727, 44.61381460196236], [127.14725752241668, 44.654690660445624], [127.04498986229225, 44.598234157780155], [127.03227746043643, 44.73055166312872], [126.97827558804795, 44.8261013857703], [127.07661583865001, 44.93400177686047], [126.95269575380598, 45.13419627553762], [126.78898481699571, 45.14933747014817], [126.55933475139761, 45.246747544763366], [126.42104861919836, 45.228454087885865], [126.24291995729016, 45.15610708357505], [126.15047081917294, 45.14117259453957], [125.84072228390625, 45.23481028926338], [125.70491662040575, 45.35971222603834], [125.69933556538399, 45.5120026721855], [125.52120690257647, 45.47102326091476], [125.43247846930592, 45.477250271083136], [125.37480756981353, 45.39846955012959], [125.30742150290001, 45.41696971348151], [125.10350630117483, 45.39531728786247], [125.0277486512793, 45.49836009434287], [124.89788577710692, 45.527298896426856], [124.87246097159652, 45.44859568893989], [124.58953250492112, 45.457380683072046], [124.56307417243511, 45.41526439113869], [124.4557938989692, 45.46358185481873], [124.3766772812316, 45.457380683072046], [124.36308637933291, 45.52564525002822], [124.2841764671702, 45.54551483803931], [124.22356001188501, 45.63550934498028], [124.14103275036115, 45.63220205308227], [124.10310224767056, 45.709690863742395], [124.02191857328353, 45.76260753051315], [124.06196780766811, 45.87167064068751], [123.97298099197917, 45.951949978408805], [124.0340625352577, 46.01848338549985], [123.9585632668813, 46.19268463788569], [123.95659956301938, 46.29076650696868], [123.76172773694543, 46.25991567606755], [123.35611941887606, 46.235162665025], [123.25834760995417, 46.26508331993932], [123.16166100485151, 46.220073147257864], [122.98890669239, 46.40657339124897], [123.00399621015703, 46.585942288405846], [123.09417158425117, 46.621960761379995], [123.29152387902383, 46.58635569955587], [123.39725385977772, 46.59782786706242], [123.53610843275794, 46.691982327522396], [123.60871382038653, 46.77463878025546], [123.57067996580776, 46.873289090119385], [123.48939293773395, 46.81729767544729], [123.46846398342615, 46.87465851477867], [123.37999393077524, 46.89806793958377], [123.33048790869003, 46.83264557653209], [123.18682742704402, 46.76164215845881], [122.99624474479918, 46.84029368820319], [122.79734215731469, 47.03371857435272], [122.57404829309422, 47.131128648068625], [122.4052213892557, 47.33168488195176], [122.49472496978149, 47.41023305890852], [122.56536665264889, 47.5311559111164], [122.79734215731469, 47.64355215071117], [123.0954118186005, 47.754940700852615], [123.20682620716366, 47.81382599537338], [123.29328087820994, 47.94565257430685], [123.4873775570286, 48.00756093988542], [123.57755293202223, 48.05432811085356], [123.72694949832072, 48.191063951240324], [124.07793582637726, 48.44830923088628], [124.2340503283599, 48.53083649420881], [124.30076460170494, 48.49187246454258], [124.32717125914627, 48.33219228824356], [124.39264529814193, 48.26366933886891], [124.48235558514205, 48.11158559829673], [124.56224734923569, 48.236177476709145], [124.52069949808339, 48.36903758441693], [124.53806277897405, 48.571686713371065], [124.61624922072485, 48.66757233279691], [124.62183027574656, 48.74198639645499], [124.82155968643036, 49.060881660160504], [124.86393436078208, 49.175396633248], [125.15812829028835, 49.1511087101988], [125.22287885977153, 49.22004507072347], [125.267372267616, 49.43848135033406], [125.24003543508724, 49.540904039189996], [125.12521040273782, 49.656581733160465], [125.21957156787352, 49.668131415032775], [125.21616092318806, 49.79814931883598], [125.24499637338386, 49.877033393476296], [125.18660200437898, 49.95167999933247], [125.29522586498166, 50.01446686495382], [125.26442671092394, 50.10572744376648], [125.41842247941389, 50.1946109084667], [125.50632409128377, 50.31413849489556], [125.54203250499609, 50.40658763301283], [125.64667728103171, 50.45268301041253], [125.80940636591112, 50.56223704700207], [125.75400923134094, 50.754344184436576], [125.82403079568462, 50.766798203873975], [125.95167158357668, 50.89260447911343], [125.98055870971672, 50.87040945113523], [126.05626468276887, 50.98027354608723], [125.98438276555214, 51.104219469352955], [125.8706946147646, 51.14475963015278], [125.84340945907928, 51.206228746159695], [125.7194893742352, 51.25371938753966], [125.57691409730774, 51.389318346364576], [125.48663537042592, 51.507398993768504], [125.33331139460518, 51.58274323251419], [125.12753584180564, 51.615738634430386], [125.06826297365728, 51.594370428752256], [125.06061486198621, 51.53437409109145], [124.95452314692568, 51.48920888877919], [124.94026045055938, 51.445206407349815], [124.82062951134287, 51.36585724471604], [124.66622033080353, 51.33526479803194], [124.50188927636901, 51.36058624895625], [124.35078738772768, 51.27862742821324], [124.16206505655703, 51.328365994295154], [124.00440026276198, 51.30172679285715], [123.86626915929423, 51.31343150525973], [123.78875451111173, 51.232816270754284], [123.66240563441255, 51.19966583920714], [123.56964643793282, 51.203903307091906], [123.50257042938176, 51.2597655305548], [123.27168012943434, 51.26669017181396], [123.17886925701055, 51.31635122353009], [123.08812544213538, 51.31247549085123], [122.95624718635855, 51.38606273130995], [122.83894168531054, 51.510551256035626], [122.83553104062503, 51.567757065735975], [122.71445315968549, 51.70167654153914], [122.75419233570773, 51.84748159420025], [122.63766198101558, 52.09496002958167], [122.64494835838008, 52.13593943905386], [122.77512129091474, 52.20001821586797], [122.73073123585783, 52.248904120328916], [122.50190799435836, 52.28595612207735], [122.3386104677989, 52.453697822096785], [122.17365929573992, 52.47963939154465], [122.01790652896307, 52.28311391907212], [121.83125125534116, 52.26936798844193], [121.69234500461823, 52.388533841463584], [121.49091027159176, 52.444680283967955], [121.17392703670339, 52.594981187831564], [121.50274417520347, 52.77468598087333], [121.69151818231819, 52.908347073358726], [121.80019371976425, 53.02358551685808], [121.76541548113948, 53.09495067013731], [121.69281009261164, 53.12727427848509], [121.60718224476477, 53.240729885275954], [121.41327478505161, 53.31733482412142], [121.51214847800014, 53.329820862000076], [121.64102950100005, 53.38490793900013], [121.88897302300012, 53.43058990500006], [122.02505194204679, 53.42982336587792], [122.16869755100004, 53.469140523000135], [122.33783451400006, 53.49130971300005], [122.40160323100014, 53.450950419000094], [122.47121138500012, 53.46474802700004], [122.85966312700015, 53.47394643200005], [123.0025484630001, 53.5073294070001], [123.15359867400002, 53.513117167000075], [123.25255904200003, 53.56779083300003], [123.54189538600014, 53.51409902000006], [123.6142940680001, 53.563346660000036], [123.73216801000007, 53.50376373300014], [123.85019698100012, 53.494978740000136], [123.97055139200012, 53.455187887000136], [124.12180830900002, 53.352687684000074], [124.23270593300003, 53.381652323000054], [124.40819909700014, 53.235692241000095], [124.6786735440001, 53.19933787000011], [124.72016971900007, 53.14882415800008], [124.80135339400016, 53.155154521000014], [124.8962313240001, 53.11766327000004], [124.88041833500012, 53.17251780200013], [125.01942793800009, 53.210732524000036], [125.12743168100013, 53.20654673300007], [125.42808516500014, 53.09469309500008], [125.52130944900006, 53.042422384000076], [125.62135502200016, 53.06213694300004], [125.73354455600014, 52.98165090000006], [125.64708988500007, 52.900906474000124], [125.6686906330001, 52.8779621380001], [125.83736250800013, 52.906720073000116], [125.86743819200001, 52.849359233000115], [125.97694055200014, 52.76499745800001], [126.06670251500015, 52.78318756200014], [126.06861454300014, 52.67988637300007], [125.97316817300015, 52.631568909000066], [126.00923832300015, 52.56839447100009], [126.08277388500011, 52.593354187000074], [126.21232670100011, 52.53304779100009], [126.20033776900004, 52.46708282500006], [126.27599206600013, 52.46328460800004], [126.34368819200012, 52.39137685200009], [126.31573124200008, 52.31621348100006], [126.43928959200008, 52.275285747000055], [126.31221724500006, 52.22795013400008], [126.31671309500007, 52.199760641000125], [126.53117028800006, 52.15265757200012], [126.514427125, 52.04253509600011], [126.44605920400011, 51.9825387570001], [126.64790734900015, 51.74126149600005], [126.71358809500009, 51.72317474400003], [126.72371667500016, 51.63589325000004], [126.67514082900004, 51.58837677000011], [126.8074324960001, 51.53421986900008], [126.80030114800007, 51.418955587000085], [126.9019486900001, 51.4009980270001], [126.80898278900014, 51.28906687500009], [126.98116866100014, 51.30885894800008], [126.9163147380001, 51.2327654020001], [126.93176599200007, 51.06378346800008], [127.14425948100012, 50.90350901300013], [127.2207406010001, 50.78816721600009], [127.287351522, 50.7510118620001], [127.29494795800014, 50.666417542000005], [127.36481449400009, 50.55474477200008], [127.28895349200008, 50.46601633700007], [127.35850997000006, 50.41511505100004], [127.33065637200008, 50.328195292000004], [127.40481205300006, 50.27595041900011], [127.57839318800006, 50.22055328400006], [127.57017663600004, 50.130222880000105], [127.48666752200006, 50.025629782000095], [127.53400313300011, 49.92248362200007], [127.5081132410001, 49.82233469700006], [127.64428064000009, 49.76714426700008], [127.7220019940001, 49.64859853100006], [127.83088423700008, 49.59387318900008], [127.99159794100007, 49.5987307740001], [128.09247033800006, 49.54157664000007], [128.3447546800001, 49.547984518000106], [128.38351200400012, 49.57935211300014], [128.62866499800015, 49.57532135000014], [128.66618208900007, 49.60947947200003], [128.79692346200005, 49.57247914600006], [128.75020796700005, 49.48452585800007], [128.879192342, 49.47971995100008], [129.0145845950001, 49.431092428000056], [129.08786177600012, 49.3520791630001], [129.19390181500006, 49.38969960500003], [129.3620569260001, 49.349805400000065], [129.40339807200013, 49.430679017000045], [129.50241011600014, 49.41078359000005], [129.57175988900008, 49.279835510000055], [129.71118290200008, 49.27415110300012], [129.75562463400007, 49.18428578700011], [129.82466434700012, 49.17415720600005], [129.8415108640001, 49.109199931000006], [129.9206791590001, 49.08186309900006], [129.91344445800013, 49.03954010000007], [130.24934126800008, 48.864512024000106], [130.38680057800008, 48.896293030000066], [130.4866394450001, 48.863685202000084], [130.62528639987386, 48.87435952823475]]]
                }
            }, {
                type: "Feature",
                properties: {id: "71", name: "台湾", cp: [121.0254, 23.5986]},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[121.58765709700006, 22.013861395000006], [121.56690514400023, 22.007757880000113], [121.53891035200004, 22.018215236000017], [121.51319420700005, 22.035060940000008], [121.498301629, 22.048041083], [121.5027775400001, 22.057562567000005], [121.50261478000013, 22.066555080000015], [121.49878991, 22.07477448100012], [121.49203535200016, 22.082180080000015], [121.5665796230002, 22.082180080000015], [121.5665796230002, 22.075995184000035], [121.56462649800008, 22.072170315000037], [121.56137129000004, 22.063666083], [121.56006920700011, 22.05353424700003], [121.56348717500012, 22.044623114000004], [121.58106530000023, 22.032212632000054], [121.58887780000023, 22.023504950000174], [121.58765709700006, 22.013861395000006]]], [[[121.49634850400017, 22.63849518400015], [121.49610436300011, 22.634670315000122], [121.49317467500012, 22.635402736000074], [121.48658287900005, 22.635402736000074], [121.48316491, 22.636135158000016], [121.48145592500012, 22.63808828300013], [121.47144616000006, 22.641791083], [121.460703972, 22.659002997000115], [121.45541425900015, 22.673814195000162], [121.45753014400023, 22.6759300800001], [121.49577884200019, 22.678534247000087], [121.50001061300011, 22.676255601000108], [121.5027775400001, 22.669501044000086], [121.49976647200018, 22.655666408000073], [121.49634850400017, 22.65005117400007], [121.49496503999998, 22.644191799000126], [121.49634850400017, 22.63849518400015]]], [[[120.01954186300023, 23.438381252000127], [120.0076562850002, 23.432593713000088], [120.02186078900016, 23.451644407000018], [120.07493184000012, 23.500818171000006], [120.11525123000015, 23.547911555], [120.12476993200019, 23.550453797000117], [120.09030090900015, 23.49939595000002], [120.07344997300018, 23.483814315000146], [120.06227206400015, 23.47127909000004], [120.04791202000004, 23.45808471300016], [120.0365953850002, 23.45080878100005], [120.01954186300023, 23.438381252000127]]], [[[119.60840905000006, 23.594875393000123], [119.60629316500015, 23.590399481000148], [119.62159264400023, 23.594671942000062], [119.63331139400012, 23.593491929000052], [119.64185631600006, 23.594061591000028], [119.64795983200023, 23.603461005000142], [119.66578209700012, 23.573309637000122], [119.67066491000017, 23.559230861000074], [119.66846764400006, 23.548814195000162], [119.66114342500006, 23.55573151200018], [119.65137780000023, 23.561590887000037], [119.64063561300011, 23.56354401200018], [119.62566165500019, 23.555812893000066], [119.61500084700006, 23.554632880000142], [119.60971113399998, 23.551947333000058], [119.60678144600016, 23.546820380000057], [119.60271243600019, 23.53261953300013], [119.60010826900012, 23.528387762000122], [119.58236738400004, 23.5189476580001], [119.56397545700005, 23.516587632000054], [119.54558353000002, 23.523098049000126], [119.52711022200018, 23.53998444200012], [119.53199303500017, 23.548814195000162], [119.54216556100019, 23.537583725999994], [119.55738366000017, 23.534613348000065], [119.57374108200011, 23.538763739000032], [119.58716881600012, 23.548814195000162], [119.57789147200006, 23.55198802300005], [119.57056725400005, 23.556057033000016], [119.5646264980002, 23.56167226800001], [119.55925540500007, 23.56932200700014], [119.55713951900023, 23.56610748900009], [119.55713951900023, 23.565008856000034], [119.556407097, 23.564398505000085], [119.55241946700002, 23.562486070000105], [119.55152428500006, 23.576483466000084], [119.55241946700002, 23.590399481000148], [119.55925540500007, 23.590399481000148], [119.56723066500004, 23.588527736000103], [119.59546959700018, 23.60472239800005], [119.61312910199999, 23.610296942000062], [119.60840905000006, 23.594875393000123]]], [[[119.45655358200023, 23.562486070000105], [119.44239342500012, 23.562486070000105], [119.44483483200023, 23.56976959800012], [119.44947350400017, 23.574123440000122], [119.45655358200023, 23.57615794500005], [119.46615644599999, 23.576808986000017], [119.4744572270001, 23.579738674000126], [119.47681725400005, 23.5868187520001], [119.47706139400006, 23.603461005000142], [119.48943118600013, 23.639634507000082], [119.50131269600016, 23.650376695000162], [119.51734459700006, 23.637600002000127], [119.50782311300017, 23.632391669000143], [119.50123131600017, 23.619818427000055], [119.49073326900012, 23.590399481000148], [119.49024498800023, 23.582464911000002], [119.49284915500002, 23.575751044000143], [119.49170983200011, 23.571030992000047], [119.48023522200006, 23.56932200700014], [119.47193444100017, 23.569037177000027], [119.466075066, 23.568060614000117], [119.46119225400005, 23.565985419000114], [119.45655358200023, 23.562486070000105]]], [[[119.58513431100008, 23.62474192900011], [119.57683353000019, 23.62250397300012], [119.57260175900015, 23.627671617000047], [119.56934655000012, 23.639715887000065], [119.56177819100017, 23.649847723000008], [119.54525800899998, 23.664943752000013], [119.56641686300011, 23.679185289000102], [119.578868035, 23.673081773000135], [119.59107506600017, 23.66351959800012], [119.59620201900012, 23.653265692000033], [119.58692467500023, 23.645005601000108], [119.59066816499998, 23.63279857000005], [119.58513431100008, 23.62474192900011]]], [[[118.44958993900005, 24.5055278330001], [118.46735474900007, 24.461827610000014], [118.46335554600003, 24.43152308400012], [118.44878503900023, 24.415513445000116], [118.42290052900003, 24.430303610000024], [118.4036242120001, 24.4360098370001], [118.37285610500012, 24.433201267000143], [118.34576026800002, 24.417579187000158], [118.33099387900015, 24.396482454000036], [118.31821764600014, 24.390544350000155], [118.30323326900023, 24.39704010600009], [118.29297936300011, 24.397650458000143], [118.28394616000011, 24.401271877000013], [118.279551629, 24.408433335000055], [118.28109785200016, 24.411037502000127], [118.28939863400004, 24.42059967700014], [118.29200280000012, 24.424994208000115], [118.29273522200006, 24.432074286000088], [118.29232832100016, 24.440619208], [118.28956139400012, 24.455633856000034], [118.282969597, 24.47003815300009], [118.28207441500004, 24.477362372000087], [118.28785241000017, 24.480454820000162], [118.31665681500013, 24.493348759000142], [118.35480862500006, 24.47056171800007], [118.38141414600014, 24.473511031000115], [118.38539271199997, 24.503817045000133], [118.39421634200008, 24.522691148000106], [118.42259661300002, 24.527968322000035], [118.44958993900005, 24.5055278330001]]], [[[121.63599694100006, 25.22280508000007], [121.64966881600017, 25.197088934000035], [121.65414472700016, 25.198797919000057], [121.6643986340001, 25.20136139500015], [121.67611738400015, 25.202582098000065], [121.68441816500015, 25.20050690300006], [121.68392988400015, 25.19745514500015], [121.67994225400017, 25.19301992400007], [121.67611738400015, 25.1869164080001], [121.67644290500019, 25.179388739000117], [121.68051191500015, 25.17503489800005], [121.69459069100017, 25.166083075000117], [121.697520379, 25.162583726000108], [121.70386803500006, 25.15688711100013], [121.71851647200006, 25.15200429900007], [121.892832879, 25.113674221000124], [121.90512129000015, 25.106594143000066], [121.89893639400012, 25.093980209999998], [121.89722741000011, 25.083889065000122], [121.89991295700005, 25.06598541900017], [121.90919030000012, 25.036037502000013], [121.919200066, 25.022040106000063], [121.92725670700023, 25.018703518000038], [121.95386803500017, 25.02236562700007], [121.96753991, 25.02106354400017], [121.98357181100019, 25.01715729400017], [121.99773196700002, 25.010687567000062], [122.00538170700005, 25.001898505000028], [121.92676842500023, 24.96662018400015], [121.90577233200011, 24.9501000020001], [121.83472741000006, 24.871527411000088], [121.82349694100006, 24.85492584800012], [121.8146264980002, 24.831732489000004], [121.80884850400005, 24.805161851000136], [121.8068139980002, 24.77875397300015], [121.80779056100019, 24.753119208000086], [121.82032311300011, 24.69965241100006], [121.81959069100006, 24.685980536000116], [121.81421959700012, 24.672308661000088], [121.81495201900023, 24.64435455900015], [121.82797285200004, 24.622788804000052], [121.85271243600019, 24.60887278900016], [121.88184655000023, 24.603989975999994], [121.88184655000023, 24.597805080000043], [121.86947675900004, 24.598944403000147], [121.85775800900004, 24.597845770000035], [121.847911004, 24.594916083], [121.84083092500023, 24.59031810100005], [121.85084069100006, 24.57298411700016], [121.85596764400023, 24.55052317900008], [121.85279381600017, 24.530991928999995], [121.83008873800023, 24.519232489000004], [121.82837975400005, 24.510728257000082], [121.83130944100006, 24.500392971000068], [121.83773847700016, 24.49103424700003], [121.84001712300002, 24.48135000200007], [121.83041425900015, 24.473130600999994], [121.8068139980002, 24.46063873900006], [121.78003991, 24.432684637000037], [121.77914472700004, 24.421779690000065], [121.78077233200023, 24.39760976800015], [121.77637780000023, 24.388332424000012], [121.77149498800011, 24.380560614000004], [121.76840254000004, 24.369370834999998], [121.76644941500015, 24.34735748900009], [121.76433353000007, 24.341701565000008], [121.76050866000006, 24.337103583000058], [121.75855553500017, 24.33234284100014], [121.76254316500015, 24.326605536000002], [121.76335696700008, 24.325791734000077], [121.76587975400011, 24.32318756700009], [121.76929772200012, 24.31806061400006], [121.77198326900006, 24.31293366100006], [121.772715691, 24.309230861000017], [121.76742597700004, 24.30093008000013], [121.74529056100008, 24.281236070000162], [121.72144616000017, 24.251166083000143], [121.70386803500006, 24.238348700000117], [121.69825280000023, 24.231512762000094], [121.700938347, 24.224188544000086], [121.69776451900023, 24.218980209999998], [121.67237389400023, 24.20148346600014], [121.66285241000006, 24.193101303999995], [121.65219160199999, 24.172186591000028], [121.64128665500002, 24.12986888200011], [121.61304772200006, 24.09210846600014], [121.60743248800017, 24.076849677], [121.60816491000017, 24.060492255000085], [121.615000847, 24.042303778000175], [121.62077884200008, 24.034613348000065], [121.625743035, 24.030951239000004], [121.62891686300006, 24.026190497000115], [121.62916100400005, 24.014960028000118], [121.62501061300011, 24.002386786000116], [121.611094597, 23.98248932500003], [121.60816491000017, 23.970363674000126], [121.60670006600006, 23.948065497000087], [121.59449303500006, 23.89150625200007], [121.57032311300023, 23.83209870000003], [121.539805535, 23.692816473000065], [121.52149498800023, 23.65867747600005], [121.47950280000018, 23.43520742400007], [121.46216881600017, 23.343003648000106], [121.45362389400023, 23.32599518400015], [121.42676842500018, 23.293117580000157], [121.41675866000017, 23.276068427000027], [121.40886478000013, 23.254584052000084], [121.40333092500006, 23.214748440000008], [121.40381920700005, 23.179266669000114], [121.40007571700002, 23.14549388200011], [121.38160241, 23.11066315300009], [121.37370853000007, 23.103216864000004], [121.35547936300006, 23.091009833000115], [121.34742272200006, 23.083319403000118], [121.34343509200008, 23.075384833000058], [121.33708743600002, 23.055080471000153], [121.31885826900023, 23.02553945500007], [121.30762780000023, 22.979803778000147], [121.29957116, 22.95917389500015], [121.26050866000006, 22.907294012000065], [121.25562584700018, 22.897772528000147], [121.20281009200019, 22.856512762000094], [121.19027753999998, 22.8431664080001], [121.18848717500012, 22.833929755000113], [121.19092858200023, 22.811957098000008], [121.19027753999998, 22.802150783000073], [121.18555748800011, 22.790961005000085], [121.17741946700008, 22.778631903000033], [121.15935306100008, 22.75747304900004], [121.14144941499998, 22.741766669000143], [121.08025149800008, 22.704087632000082], [121.03907311300011, 22.662420966000028], [121.029063347, 22.657538153000147], [121.02100670700005, 22.647894598000093], [121.00114993600008, 22.600775458], [120.99122155000018, 22.58307526200018], [120.96062259200002, 22.547796942000147], [120.94825280000012, 22.526800848000008], [120.94109134200008, 22.483628647999993], [120.92286217500006, 22.42475006700012], [120.8865666020001, 22.365952867000132], [120.88135826900006, 22.345933335000055], [120.87501061300017, 22.28925202000009], [120.87598717500023, 22.237697658000016], [120.87924238399998, 22.05581289300001], [120.87330162900005, 22.029974677], [120.86361738399998, 22.00893789300015], [120.85084069100006, 22.000230210000055], [120.83570397200006, 21.987250067000062], [120.83619225400005, 21.957709052000027], [120.84156334700012, 21.92548248900006], [120.84034264400006, 21.904608466000084], [120.8230900400001, 21.928615627000127], [120.79737389400012, 21.946763414000046], [120.76742597700016, 21.959295966000056], [120.73731530000012, 21.966131903000147], [120.736094597, 21.94281647300015], [120.72730553500006, 21.93447500200007], [120.71436608200023, 21.937486070000162], [120.70036868600008, 21.948431708000058], [120.69955488400015, 21.956691799000126], [120.70435631600006, 21.98139069200012], [120.683360222, 22.013861395000006], [120.68165123800011, 22.022528387000094], [120.68189537900005, 22.02960846600017], [120.683360222, 22.04120514500009], [120.683360222, 22.07904694200012], [120.68555748800011, 22.09015534100014], [120.69483483200017, 22.10260651200015], [120.69695071700008, 22.113226630000113], [120.62126712300008, 22.29507070500013], [120.61500084700006, 22.304999091000028], [120.5939233730002, 22.329169012000037], [120.57732181100008, 22.36383698100012], [120.56967207100004, 22.373846747000087], [120.53874759200008, 22.396429755000085], [120.52637780000023, 22.403021552000055], [120.52222741, 22.40428294500005], [120.51807701900017, 22.406968492000047], [120.51441491, 22.420070705000015], [120.51197350400017, 22.42475006700012], [120.49529056100002, 22.434759833], [120.45720462300002, 22.451605536000002], [120.43995201900023, 22.46259186400006], [120.42172285200016, 22.477362372000144], [120.41325931100013, 22.482326565000008], [120.40211022200012, 22.48680247600005], [120.39600670700011, 22.48647695500013], [120.38900800900004, 22.484076239000004], [120.38086998800011, 22.483872789000046], [120.33122806100019, 22.51972077000015], [120.28516686300017, 22.580064195000162], [120.33366946700002, 22.52594635600009], [120.32797285200016, 22.551703192000147], [120.31991621200021, 22.565822658000073], [120.31348717500012, 22.57705312700007], [120.29330488399998, 22.59829336100016], [120.25896243600002, 22.627590236000074], [120.24577884200008, 22.642523505000113], [120.23959394600004, 22.6590843770001], [120.247813347, 22.67523834800015], [120.2521264980002, 22.68964264500012], [120.24634850400005, 22.70990631700012], [120.23617597699999, 22.729885158000016], [120.21753991, 22.7567406270001], [120.19996178500017, 22.79246653900013], [120.19605553500017, 22.808335679000052], [120.19646243600019, 22.818589585000083], [120.20215905000006, 22.831244208000058], [120.2034611340001, 22.839667059000092], [120.20134524800008, 22.844142971000068], [120.19646243600019, 22.847479559000092], [120.19141686300017, 22.852036851000136], [120.18921959700018, 22.860174872000144], [120.17847741000006, 22.877346096000068], [120.17554772200006, 22.884100653000118], [120.16749108200011, 22.931870835000055], [120.16382897200006, 22.95384349200016], [120.15691165500007, 22.966538804000137], [120.14210045700005, 22.98029205900015], [120.16016686300011, 22.992132880000113], [120.17025800900015, 23.013373114000004], [120.1661889980002, 23.03172435100005], [120.14210045700005, 23.03489817900011], [120.13746178500006, 23.028387762000037], [120.13347415500007, 23.016546942000062], [120.12671959700006, 23.007147528000033], [120.11410566500015, 23.007635809000035], [120.10914147200012, 23.01544830900012], [120.11101321700008, 23.039984442000147], [120.10792076900006, 23.048570054000052], [120.09245853000007, 23.05475495000003], [120.08375084700018, 23.047552802], [120.07667076900012, 23.037420966000028], [120.06625410200004, 23.03489817900011], [120.05518639400006, 23.04368724200016], [120.05241946700002, 23.055812893000066], [120.05494225400005, 23.067775783000016], [120.05941816500004, 23.075873114000117], [120.07056725400005, 23.08120351800001], [120.08472741000006, 23.082953192000005], [120.09644616000006, 23.086411850999994], [120.10043379000004, 23.096991278000147], [120.09498131600017, 23.10248444200009], [120.05941816500004, 23.11066315300009], [120.05941816500004, 23.117499091000113], [120.08920332100004, 23.117743231000063], [120.08627363399998, 23.126939195000105], [120.07007897200006, 23.139797268000123], [120.05941816500004, 23.15102773600013], [120.06202233200011, 23.165025132000025], [120.07154381600012, 23.169989325000145], [120.08187910199999, 23.173163153000033], [120.08692467500023, 23.182033596000068], [120.08383222700016, 23.195746161000002], [120.07862389400017, 23.20697663], [120.08215891700016, 23.217292379000085], [120.08744371300011, 23.230287823000097], [120.09609750400014, 23.23949089200012], [120.09424889400023, 23.247503973000036], [120.09603925900004, 23.255357164000102], [120.10889733200017, 23.286688544000143], [120.11491946700008, 23.292710679000052], [120.12468509200019, 23.29498932500003], [120.11049353800016, 23.303698714000078], [120.11652721700014, 23.317897404000078], [120.13117971100021, 23.318810078000112], [120.14356530000023, 23.323879299000126], [120.14893639400006, 23.322251695000105], [120.145762566, 23.333319403000147], [120.13734148200004, 23.32773406000014], [120.13028443700003, 23.329334817000145], [120.12094160200016, 23.329738674000097], [120.12077884200019, 23.34125397300012], [120.13014916000012, 23.36096024400011], [120.14416428100006, 23.361854371999996], [120.16457738900024, 23.36171145600018], [120.15064537900011, 23.39813873900006], [120.13477623800006, 23.42625560100005], [120.14210045700005, 23.438950914000102], [120.14210045700005, 23.445786851000136], [120.13054446700002, 23.450995184000035], [120.13209069100017, 23.456976630000142], [120.13868248800017, 23.464260158000158], [120.14210045700005, 23.47308991100003], [120.15754360400004, 23.491475714999993], [120.12502924700007, 23.489611410000023], [120.12426153300024, 23.52002055000004], [120.14168913100016, 23.537946590000004], [120.14086753400014, 23.595262518000183], [120.14360900800003, 23.63803570200004], [120.15422991400013, 23.672211863000186], [120.17080496100019, 23.69890152000012], [120.17554772200006, 23.733832098000065], [120.1844181650001, 23.76439036700019], [120.18921959700018, 23.774807033000073], [120.21265709700006, 23.803168036000116], [120.21656334700006, 23.81264883000013], [120.21949303500017, 23.817938544000114], [120.24073326900023, 23.832831122000144], [120.24675540500007, 23.843410549000012], [120.25294030000012, 23.868068752000013], [120.25749759200008, 23.878404039000102], [120.28443444100006, 23.902004299000154], [120.292246941, 23.91193268400015], [120.30250084700006, 23.938869533000016], [120.31812584700006, 23.965806381999997], [120.34009850400005, 24.021795966000028], [120.35035241000017, 24.038072007000054], [120.36182701900012, 24.048529364000146], [120.37126712300002, 24.054348049000097], [120.37956790500013, 24.05801015800013], [120.38550866000006, 24.063055731000176], [120.38786868600019, 24.073309637000094], [120.39234459700006, 24.08291250200007], [120.41187584700006, 24.09690989800005], [120.41635175900004, 24.10748932500009], [120.41863040500007, 24.142523505], [120.42204837300008, 24.15216705900015], [120.43230228000013, 24.161078192000005], [120.47543379000004, 24.20709870000006], [120.47779381600017, 24.209662177000055], [120.48064212300014, 24.22109609600001], [120.49317467500012, 24.230658270000006], [120.50163821700008, 24.252875067000147], [120.51197350400017, 24.295558986000074], [120.54737389400006, 24.351548570000105], [120.55811608200011, 24.385891018000066], [120.57081139400023, 24.40493398600016], [120.62134850400017, 24.456000067000147], [120.64893639400006, 24.483872789000188], [120.65601647200006, 24.49787018400015], [120.65935306100008, 24.520697333000058], [120.667735222, 24.540025131999997], [120.69019616000006, 24.576117255000142], [120.69629967500012, 24.59772370000006], [120.70215905000023, 24.607001044000086], [120.72787519600004, 24.613918361000103], [120.73511803500006, 24.621242580000015], [120.73943118600002, 24.630357164000188], [120.74463951900023, 24.63882070500013], [120.76059004000004, 24.653957424000126], [120.77808678500017, 24.665716864000004], [120.79932701900006, 24.670803127000127], [120.82667076900023, 24.66608307500003], [120.82300866000011, 24.685044664000046], [120.83334394599999, 24.697821356000176], [120.84750410200004, 24.710842190000065], [120.85450280000012, 24.73065827000009], [120.85767662900017, 24.737005927000112], [120.871348504, 24.74323151200015], [120.87696373800011, 24.76190827000015], [120.89812259200019, 24.801174221000068], [120.9064233730002, 24.81146881700009], [120.90919030000023, 24.816880601000108], [120.90902753999998, 24.82273997600008], [120.90650475400017, 24.829087631999997], [120.90235436300023, 24.836818752000013], [120.90805097700004, 24.84707265800013], [120.9146427740001, 24.853420315000065], [120.91488691500004, 24.853705145000006], [120.92058353000013, 24.86139557500003], [120.92286217500006, 24.874660549000154], [120.92603600400005, 24.884711005000113], [120.93392988400004, 24.89459870000003], [120.94402103000019, 24.902044989000117], [120.95362389400017, 24.905015367000132], [120.95281009200008, 24.909247137000065], [120.95533287900017, 24.919378973000008], [120.96387780000006, 24.94041575700014], [120.97169030000006, 24.95176829600011], [121.00554446700008, 25.000677802], [121.03199303500006, 25.029242255000085], [121.059336785, 25.05023834800012], [121.12940514400006, 25.071112372000087], [121.14576256600012, 25.08038971600014], [121.15984134200002, 25.091620184000035], [121.17693118600019, 25.100043036000002], [121.21094811300011, 25.111151434000035], [121.28744550900004, 25.123683986000017], [121.3302514980002, 25.130682684000092], [121.34831790500002, 25.13711172100001], [121.37175540500019, 25.154771226000136], [121.3787541020001, 25.157945053999995], [121.38738040500019, 25.159328518000066], [121.39893639400012, 25.159491278000033], [121.41228274800014, 25.155462958000058], [121.41944420700005, 25.146389065000065], [121.42408287900011, 25.136908270000063], [121.43002363400004, 25.13157786700019], [121.44320722700016, 25.13641998900009], [121.42945397200006, 25.155991929000052], [121.40739993600008, 25.17621491100006], [121.39576256600006, 25.182806708000143], [121.39909915500007, 25.19212474200016], [121.40601647200018, 25.197333075000174], [121.41325931100019, 25.200425523000078], [121.416270379, 25.203599351000136], [121.4241642590001, 25.221340236000017], [121.43628991000017, 25.241441148000078], [121.46127363399998, 25.26190827000012], [121.497813347, 25.27875397300012], [121.53972415500002, 25.287420966000028], [121.58082116, 25.283026434000064], [121.59791100400017, 25.271429755000113], [121.63599694100006, 25.22280508000007]]]]
                }
            }, {
                type: "Feature",
                id: "81",
                properties: {name: "香港", cp: [114.2578, 22.3242], childNum: 1},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[114.6094, 22.4121], [114.5215, 22.1484], [114.3457, 22.1484], [113.9063, 22.1484], [113.8184, 22.1924], [113.9063, 22.4121], [114.1699, 22.5439], [114.3457, 22.5439], [114.4336, 22.5439], [114.4336, 22.4121], [114.6094, 22.4121]]]
                }
            }, {
                type: "Feature",
                id: "82",
                properties: {name: "澳门", cp: [113.5547, 22.1484], childNum: 1},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[113.5986, 22.1649], [113.6096, 22.1265], [113.5547, 22.11], [113.5437, 22.2034], [113.5767, 22.2034], [113.5986, 22.1649]]]
                }
            }, {
                type: "Feature",
                properties: {id: "", name: "南海诸岛", cp: [135.3516, 22.9179]},
                geometry: {
                    type: "MultiPolygon",
                    coordinates: [[[[139.581334765625, 28.149645608859288], [139.19681328125, 27.699238903029467], [139.581334765625, 28.149645608859288]]], [[[138.636510546875, 26.790388555483403], [138.328893359375, 26.311256152273366], [138.636510546875, 26.790388555483403]]], [[[138.175084765625, 25.29244785584266], [138.1640984375, 24.805552853862395], [138.175084765625, 25.29244785584266]]], [[[138.120153125, 23.278269200968115], [137.889440234375, 22.729121079863013], [138.120153125, 23.278269200968115]]], [[[136.73587578125, 21.277078718179503], [136.373326953125, 20.87415043558951], [136.73587578125, 21.277078718179503]]], [[[135.04398125, 19.157417045455464], [134.505651171875, 18.971011867664146], [135.04398125, 19.157417045455464]]], [[[132.769811328125, 20.30121805583805], [132.7313591796875, 20.814192659072916], [132.769811328125, 20.30121805583805]]], [[[133.6542107421875, 22.901631020973895], [133.78330009765625, 23.396427418506743], [133.6542107421875, 22.901631020973895]]], [[[133.549840625, 24.86388879773785], [133.27243583984375, 25.382162494865337], [133.549840625, 24.86388879773785]]], [[[132.0117546875, 28.53637847702573], [140.2734734375, 28.53637847702573], [132.0117546875, 28.53637847702573]]], [[[140.2734734375, 28.53637847702573], [140.2734734375, 18.53214263092646], [140.2734734375, 28.53637847702573]]], [[[140.2734734375, 18.53214263092646], [132.0117546875, 18.53214263092646], [140.2734734375, 18.53214263092646]]], [[[132.0117546875, 18.53214263092646], [132.0117546875, 28.53637847702573], [132.0117546875, 18.53214263092646]]], [[[132.0117546875, 28.53637847702573], [135.85693359375, 28.53637847702573], [135.6097412109375, 28.231809851211853], [135.208740234375, 28.23664944401447], [135.098876953125, 28.159189634046733], [134.967041015625, 28.028349057505775], [134.901123046875, 28.134971934813155], [134.6539306640625, 28.183401855246004], [134.4781494140625, 28.105903469076186], [133.9837646484375, 27.98955087395581], [133.92333984375, 27.839076094777816], [133.8189697265625, 27.829360859789794], [133.7200927734375, 27.766190642387496], [133.90136718749997, 27.561851783388512], [133.8519287109375, 27.464413510962768], [133.6871337890625, 27.410785702577023], [133.57177734375, 27.49365405370312], [133.4783935546875, 27.702983735525834], [133.505859375, 27.97014654331592], [133.604736328125, 28.028349057505775], [133.17626953125, 28.00895171255095], [133.2037353515625, 28.081673729044283], [133.0169677734375, 28.120438687101064], [132.835693359375, 28.086520114600717], [132.35778808593747, 28.05259082333986], [132.17102050781247, 28.231809851211853], [132.0117546875, 28.28019589809702], [132.0117546875, 28.53637847702573]]], [[[133.3685662109375, 27.220295883911263], [133.26419609375, 27.238374107596407], [133.18454521484375, 27.166036480398372], [133.21201103515625, 27.09622009524193], [132.9400994140625, 26.95640544718932], [132.92087333984375, 26.82413779204657], [132.93185966796875, 26.70205660056707], [132.9510857421875, 26.52511428697665], [133.1268669921875, 26.454755872148233], [133.39328544921875, 26.366074839955303], [133.49765556640625, 26.40260152612486], [133.5058953125, 26.48863932933064], [133.63773125, 26.48082125242414], [133.7091423828125, 26.582400694227626], [133.82175224609375, 26.6136315959633], [133.88767021484375, 26.665657531168513], [133.90414970703125, 26.800774398294507], [133.97556083984375, 26.992676859480078], [134.132116015625, 27.109153649360742], [134.09091728515625, 27.287422722670684], [133.99753349609375, 27.295164449512356], [133.9618279296875, 27.35964913532347], [133.8959099609375, 27.310645614803192], [133.83823173828125, 27.308065632597227], [133.69540947265625, 27.310645614803192], [133.60751884765625, 27.24612065305777], [133.57181328125, 27.27968023368513], [133.472936328125, 27.292583958611395], [133.407018359375, 27.277099234742753], [133.3685662109375, 27.220295883911263]]], [[[138.7964630126953, 28.53637847702573], [139.0972137451172, 28.53637847702573], [139.06288146972653, 28.452996148032607], [139.06356811523435, 28.30075331555794], [139.0381622314453, 28.229389972499913], [138.9722442626953, 28.24330352568552], [138.9708709716797, 28.338834503784177], [138.9049530029297, 28.468691297348148], [138.7964630126953, 28.53637847702573]]]]
                }
            }]
        }
    }, H0LS: function (u, n) {
    }, H8iS: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("Vp57"), C = m.n(a), o = m("BNWl"), A = m.n(o), F = function () {
            function u(u, n) {
                for (var m = 0; m < n.length; m++) {
                    var s = n[m];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                }
            }

            return function (n, m, s) {
                return m && u(n.prototype, m), s && u(n, s), n
            }
        }(), i = function (u) {
            function n(u) {
                s(this, n);
                var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                return m.state = {
                    data: u.data,
                    forceFit: !0,
                    width: 100,
                    height: 500,
                    plotCfg: {margin: [10, 50, 80, 100]}
                }, m.Chart = r()(function (u) {
                    m.chart = u, u.col("price", {alias: "销售金额(元)"}), u.on("tooltipchange", function (u) {
                        var n = u.items[0];
                        n.value = parseFloat(n.value).toLocaleString("en-US")
                    }), u.axis("price", {
                        formatter: function (u) {
                            return parseFloat(u).toLocaleString("en-US")
                        }
                    }), u.col("shop", {alias: "店铺名称"}), u.interval().position("shop*price"), u.render()
                }), m
            }

            return e(n, u), F(n, [{
                key: "render", value: function () {
                    return C.a.createElement(this.Chart, this.state)
                }
            }]), n
        }(a.Component);
        i.propTypes = {data: A.a.array.isRequired}, n.a = i
    }, IVYL: function (u, n) {
    }, L8oC: function (u, n) {
        u.exports = [{day: "2016/10", price: "15779563", num: "12821"}, {
            day: "2016/11",
            price: "5203695",
            num: "2132"
        }, {day: "2016/12", price: "1724084", num: "1576"}, {
            day: "2016/4",
            price: "6746461",
            num: "3592"
        }, {day: "2016/5", price: "4844540", num: "2706"}, {
            day: "2016/7",
            price: "7564577",
            num: "2643"
        }, {day: "2016/8", price: "4648314", num: "2358"}, {
            day: "2016/9",
            price: "19294453",
            num: "10130"
        }, {day: "2017/1", price: "5388673", num: "2175"}, {
            day: "2017/2",
            price: "5800123",
            num: "2723"
        }, {day: "2017/3", price: "12256578", num: "4020"}, {
            day: "2017/4",
            price: "13460720",
            num: "7419"
        }, {day: "2017/5", price: "2122281", num: "1096"}, {
            day: "2017/6",
            price: "8383660",
            num: "3428"
        }, {day: "2017/7", price: "6146331.770000002", num: "3094"}, {
            day: "2017/8",
            price: "13904179.48",
            num: "6361"
        }, {day: "2017/9", price: "2787139", num: "1334"}]
    }, "LkL+": function (u, n) {
        u.exports = [{province: "上海", price: "3715007.7", num: "2301"}, {
            province: "云南",
            price: "715591.87",
            num: "485"
        }, {province: "内蒙古", price: "297293.18", num: "234"}, {
            province: "北京",
            price: "4216178.64",
            num: "2686"
        }, {province: "台湾", price: "799", num: "1"}, {province: "吉林", price: "581154.66", num: "407"}, {
            province: "四川",
            price: "2035951.18",
            num: "1547"
        }, {province: "天津", price: "680912.81", num: "495"}, {
            province: "天津",
            price: "29913",
            num: "9"
        }, {province: "宁夏", price: "80551", num: "53"}, {
            province: "安徽",
            price: "908815.52",
            num: "684"
        }, {province: "山东", price: "1293697.07", num: "980"}, {
            province: "山西",
            price: "436978.38",
            num: "284"
        }, {province: "广东", price: "3906021.66", num: "2798"}, {
            province: "广西",
            price: "544987.55",
            num: "454"
        }, {province: "新疆", price: "320526.08", num: "255"}, {
            province: "江苏",
            price: "2927851.32",
            num: "2144"
        }, {province: "江西", price: "442265.23", num: "345"}, {
            province: "河北",
            price: "741014.53",
            num: "565"
        }, {province: "河南", price: "701499.92", num: "536"}, {
            province: "浙江",
            price: "3500889.29",
            num: "2363"
        }, {province: "海南", price: "266136.11", num: "236"}, {
            province: "湖北",
            price: "1303793.25",
            num: "968"
        }, {province: "湖南", price: "973373.53", num: "694"}, {
            province: "甘肃",
            price: "286667.85",
            num: "189"
        }, {province: "福建", price: "911823.73", num: "778"}, {
            province: "西藏",
            price: "68487.25",
            num: "54"
        }, {province: "贵州", price: "837245.41", num: "631"}, {
            province: "辽宁",
            price: "1291206.35",
            num: "999"
        }, {province: "重庆", price: "1003685.08", num: "818"}, {
            province: "重庆",
            price: "7776",
            num: "6"
        }, {province: "陕西", price: "825796.16", num: "603"}, {
            province: "青海",
            price: "68015.99",
            num: "53"
        }, {province: "香港", price: "1099", num: "1"}, {province: "黑龙江", price: "689884.57", num: "505"}]
    }, MlBk: function (u, n) {
        u.exports = [{category: "未知", price: "25595531.63", num: "18511"}, {
            category: "料材",
            price: "500",
            num: "40"
        }, {category: "服饰", price: "4085148.2", num: "3766"}, {
            category: "箱包",
            price: "7271545.12",
            num: "3688"
        }, {category: "腰带", price: "3208062.25", num: "2124"}, {category: "配件", price: "74354.66", num: "99"}]
    }, MylA: function (u, n) {
        u.exports = [{brand: "ADIDAS", price: "60020", num: "35"}, {
            brand: "ALBERTO PREMI",
            price: "337224",
            num: "168"
        }, {brand: "ALEXANDER MCQUEEN", price: "18678", num: "24"}, {
            brand: "ALEXANDER WANG",
            price: "108050",
            num: "19"
        }, {brand: "ARMANI COLLOZIONI", price: "447875", num: "530"}, {
            brand: "ARMANI JEANS",
            price: "880313",
            num: "1529"
        }, {brand: "BALLY", price: "2130091", num: "945"}, {
            brand: "BUILDING BLOCK",
            price: "104440",
            num: "37"
        }, {brand: "BURBERRY", price: "9702383", num: "3940"}, {
            brand: "BUSCEMI",
            price: "368801",
            num: "71"
        }, {brand: "BVLGARI", price: "327400", num: "42"}, {
            brand: "CASBIA",
            price: "358224",
            num: "166"
        }, {brand: "CHLOE", price: "545640", num: "82"}, {
            brand: "CHRISTIAN DIOR",
            price: "45870",
            num: "5"
        }, {brand: "CHURCH'S", price: "25130", num: "7"}, {
            brand: "DOLCE&GABBANA",
            price: "1755259",
            num: "325"
        }, {brand: "DUNHILL", price: "2596700", num: "1328"}, {
            brand: "DUVETICA",
            price: "520266",
            num: "156"
        }, {brand: "EA7", price: "2788265", num: "4956"}, {
            brand: "EMPORIO ARMANI",
            price: "1848195",
            num: "2073"
        }, {brand: "FENDI", price: "12943092", num: "2659"}, {
            brand: "FURLA",
            price: "3410492.6999999965",
            num: "1993"
        }, {brand: "FUTURE GLORY", price: "54484", num: "48"}, {
            brand: "GEDEBE",
            price: "59850",
            num: "20"
        }, {brand: "GIANNI VERSACE", price: "556570", num: "291"}, {
            brand: "GIANNICO",
            price: "263569",
            num: "111"
        }, {brand: "GIVENCHY", price: "369220", num: "297"}, {
            brand: "GOLDEN GOOSE",
            price: "40980",
            num: "17"
        }, {brand: "GUCCI", price: "18992953", num: "3970"}, {
            brand: "HUGO BOSS",
            price: "2038496",
            num: "2886"
        }, {brand: "J W ANDERSON", price: "311010", num: "54"}, {
            brand: "JIMMY CHOO",
            price: "1793858",
            num: "572"
        }, {brand: "JOSHUA SANDERS", price: "401300", num: "248"}, {
            brand: "KARL LAGERFELD",
            price: "164320",
            num: "153"
        }, {brand: "KENZO", price: "939760", num: "774"}, {brand: "L4K3", price: "255760", num: "227"}, {
            brand: "LOEWE",
            price: "8900",
            num: "1"
        }, {brand: "LOUIS LEEMAN", price: "694540", num: "210"}, {
            brand: "MARNI",
            price: "431247",
            num: "194"
        }, {brand: "MCM", price: "290250", num: "70"}, {
            brand: "MELI MELO",
            price: "425730",
            num: "140"
        }, {brand: "MICHAEL KORS", price: "12959940.55", num: "8875"}, {
            brand: "MINNA PARIKKA",
            price: "862245",
            num: "523"
        }, {brand: "MSGM", price: "758386", num: "568"}, {
            brand: "PAUL SMITH",
            price: "317587",
            num: "245"
        }, {brand: "PIERRE HARDY", price: "47780", num: "13"}, {
            brand: "PLAYNOMORE",
            price: "281800",
            num: "264"
        }, {brand: "PRADA", price: "6803115", num: "1918"}, {
            brand: "PRADA LR",
            price: "219030",
            num: "70"
        }, {brand: "SALVATORE FERRAGAMO", price: "35449410", num: "12152"}, {
            brand: "SANTONI",
            price: "529364",
            num: "172"
        }, {brand: "SOPHIE HULME", price: "1068809", num: "390"}, {
            brand: "STUART WEITZMAN",
            price: "237676",
            num: "98"
        }, {brand: "VERSACE COLLECTION", price: "819898", num: "492"}, {
            brand: "VERSACE JEANS",
            price: "4424487",
            num: "4450"
        }, {brand: "VERSUS", price: "992816", num: "800"}, {
            brand: "Y3 YAMAMOTO",
            price: "815245",
            num: "364"
        }, {brand: "Z ZEGNA", price: "1049610", num: "632"}, {brand: "ZEGNA", price: "1452105", num: "1166"}]
    }, OF1Z: function (u, n, m) {
        "use strict";
        var s = m("4n1A"), k = m.n(s), e = m("8cvD"), t = m.n(e), r = m("MlBk"), a = m.n(r), C = m("dtKw"), o = m.n(C),
            A = m("31aq"), F = m.n(A), i = m("AJSF"), S = m.n(i), c = m("LkL+"), L = m.n(c), M = m("MylA"), E = m.n(M),
            p = m("L8oC"), N = m.n(p), T = m("vnza"), P = m.n(T), l = m("4V5s"), O = m.n(l),
            B = Object.assign || function (u) {
                for (var n = 1; n < arguments.length; n++) {
                    var m = arguments[n];
                    for (var s in m) Object.prototype.hasOwnProperty.call(m, s) && (u[s] = m[s])
                }
                return u
            };
        n.a = {
            all: {
                sales: 178739651.11,
                profits: 35747930.222,
                orderQuantity: 41975,
                customerNumber: 22752,
                customerPrice: 1425.36,
                brandData: k.a.filter(function (u) {
                    return !E.a.find(function (n) {
                        return n.brand === u.brand
                    })
                }).concat(E.a.map(function (u) {
                    var n = k.a.find(function (n) {
                        return n.brand === u.brand
                    });
                    return u.price = parseFloat(u.price), u.num = parseFloat(u.num), n && (u.price = parseFloat(u.price) + parseFloat(n.price), u.num = parseFloat(u.num) + parseFloat(n.num)), u
                })),
                monthData: t.a.filter(function (u) {
                    return !N.a.find(function (n) {
                        return n.brand === u.brand
                    })
                }).concat(N.a.map(function (u) {
                    var n = t.a.find(function (n) {
                        return n.day === u.day
                    });
                    return u.price = parseFloat(u.price), u.num = parseFloat(u.num), n && (u.price = parseFloat(u.price) + parseFloat(n.price), u.num = parseFloat(u.num) + parseFloat(n.num)), u
                })),
                categoryData: a.a.filter(function (u) {
                    return !P.a.find(function (n) {
                        return n.brand === u.brand
                    })
                }).concat(P.a.map(function (u) {
                    var n = a.a.find(function (n) {
                        return n.category === u.category
                    });
                    return u.price = parseFloat(u.price), u.num = parseFloat(u.num), n && (u.price = parseFloat(u.price) + parseFloat(n.price), u.num = parseFloat(u.num) + parseFloat(n.num)), u
                })),
                shopData: o.a.filter(function (u) {
                    return !O.a.find(function (n) {
                        return n.brand === u.brand
                    })
                }).concat(O.a.map(function (u) {
                    var n = o.a.find(function (n) {
                        return n.shop === u.shop
                    });
                    return u.price = parseFloat(u.price), u.num = parseFloat(u.num), n && (u.price = parseFloat(u.price) + parseFloat(n.price), u.num = parseFloat(u.num) + parseFloat(n.num)), u
                }))
            },
            toB: {
                sales: 138504509.25,
                profits: 27700901.85,
                orderQuantity: 13747,
                customerNumber: 1,
                customerPrice: 10075.25,
                brandData: E.a.map(function (u) {
                    return B({}, u, {num: parseFloat(u.num)})
                }),
                monthData: N.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                }),
                categoryData: P.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                }),
                shopData: O.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                })
            },
            toC: {
                sales: 40235141.86,
                profits: 8047028.372,
                orderQuantity: 28228,
                customerNumber: 22752,
                customerPrice: 1425.36,
                brandData: k.a.map(function (u) {
                    return B({}, u, {num: parseFloat(u.num)})
                }),
                monthData: t.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                }),
                categoryData: a.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                }),
                shopData: o.a.map(function (u) {
                    return B({}, u, {price: parseFloat(u.price)})
                }),
                skuData: F.a.map(function (u) {
                    return B({}, u, {num: parseFloat(u.num)})
                }),
                rebuyBrandData: S.a.map(function (u) {
                    return B({}, u, {num: parseFloat(u.num)})
                }),
                provinceData: L.a.map(function (u) {
                    return B({}, u, {num: parseFloat(u.num), price: parseFloat(u.price)})
                })
            }
        }
    }, P5ny: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("nPfA"), r = (m.n(t), m("OtPS")), a = m.n(r), C = m("Vp57"), o = m.n(C), A = m("H0LS"),
            F = (m.n(A), m("OF1Z")), i = m("lp6G"), S = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), c = a.a.TabPane, L = function (u) {
                function n() {
                    return s(this, n), k(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }

                return e(n, u), S(n, [{
                    key: "render", value: function () {
                        return o.a.createElement(a.a, {
                            defaultActiveKey: "1",
                            tabBarStyle: {backgroundColor: "#fff", marginBottom: "10px"}
                        }, o.a.createElement(c, {
                            tab: "全部数据",
                            key: "1"
                        }, o.a.createElement(i.a, F.a.all)), o.a.createElement(c, {
                            tab: "TO C 数据",
                            key: "2"
                        }, o.a.createElement(i.a, F.a.toC)), o.a.createElement(c, {
                            tab: "TO B 数据",
                            key: "3"
                        }, o.a.createElement(i.a, F.a.toB)))
                    }
                }]), n
            }(C.Component);
        n.a = L
    }, Smss: function (u, n) {
    }, UhQw: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("Vp57"), r = m.n(t), a = function () {
            function u(u, n) {
                for (var m = 0; m < n.length; m++) {
                    var s = n[m];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                }
            }

            return function (n, m, s) {
                return m && u(n.prototype, m), s && u(n, s), n
            }
        }(), C = function (u) {
            function n() {
                return s(this, n), k(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
            }

            return e(n, u), a(n, [{
                key: "render", value: function () {
                    return r.a.createElement("div", null, "详细页")
                }
            }]), n
        }(t.Component);
        n.a = C
    }, XdTm: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("0zgj"), r = (m.n(t), m("1UwH")), a = m.n(r), C = m("Vp57"), o = m.n(C), A = m("3vYS"), F = m("Smss"),
            i = (m.n(F), m("P5ny")), S = m("UhQw"), c = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), L = function (u) {
                function n() {
                    var u, m, e, t;
                    s(this, n);
                    for (var r = arguments.length, a = Array(r), C = 0; C < r; C++) a[C] = arguments[C];
                    return m = e = k(this, (u = n.__proto__ || Object.getPrototypeOf(n)).call.apply(u, [this].concat(a))), e.itemRender = function (u, n, m, s) {
                        return m.indexOf(u) === m.length - 1 ? o.a.createElement("span", null, u.breadcrumbName) : o.a.createElement(A.a, {to: s.join("/")}, u.breadcrumbName)
                    }, t = m, k(e, t)
                }

                return e(n, u), c(n, [{
                    key: "render", value: function () {
                        return o.a.createElement(A.b, null, o.a.createElement("div", {className: "layout"}, o.a.createElement(a.a, {itemRender: this.itemRender}), o.a.createElement("div", null, o.a.createElement(A.c, null, o.a.createElement(A.d, {
                            exact: !0,
                            path: "/",
                            component: i.a
                        }), o.a.createElement(A.d, {path: "/detail", component: S.a})))))
                    }
                }]), n
            }(C.Component);
        n.a = L
    }, a4tX: function (u, n) {
    }, aqgM: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("Vp57"), C = m.n(a), o = m("BNWl"), A = m.n(o), F = function () {
            function u(u, n) {
                for (var m = 0; m < n.length; m++) {
                    var s = n[m];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                }
            }

            return function (n, m, s) {
                return m && u(n.prototype, m), s && u(n, s), n
            }
        }(), i = function (u) {
            function n(u) {
                s(this, n);
                var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                return m.state = {
                    data: u.data,
                    forceFit: !0,
                    width: 100,
                    height: 500,
                    plotCfg: {margin: [10, 50, 50, 100]}
                }, m.Chart = r()(function (u) {
                    m.chart = u, u.col("price", {alias: "销售金额(元)"}), u.on("tooltipchange", function (u) {
                        var n = u.items[0];
                        n.value = parseFloat(n.value).toLocaleString("en-US")
                    }), u.axis("price", {
                        formatter: function (u) {
                            return parseFloat(u).toLocaleString("en-US")
                        }
                    }), u.col("day", {alias: "月份"}), u.line().position("day*price").size(2), u.render()
                }), m
            }

            return e(n, u), F(n, [{
                key: "render", value: function () {
                    return C.a.createElement(this.Chart, this.state)
                }
            }]), n
        }(a.Component);
        i.propTypes = {data: A.a.array.isRequired}, n.a = i
    }, cHU6: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("Vp57"), C = m.n(a), o = m("BNWl"), A = m.n(o), F = function () {
            function u(u, n) {
                for (var m = 0; m < n.length; m++) {
                    var s = n[m];
                    s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                }
            }

            return function (n, m, s) {
                return m && u(n.prototype, m), s && u(n, s), n
            }
        }(), i = function (u) {
            function n(u) {
                s(this, n);
                var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                return m.state = {
                    data: u.data,
                    forceFit: !0,
                    width: 100,
                    height: 500,
                    plotCfg: {margin: [10, 50, 80, 200]}
                }, m.Chart = r()(function (u) {
                    m.chart = u, u.axis("sku", {title: null}), u.col("num", {alias: "销售数量(个)"}), u.coord("rect").transpose(), u.interval().position("sku*num"), u.render()
                }), m
            }

            return e(n, u), F(n, [{
                key: "render", value: function () {
                    return C.a.createElement(this.Chart, this.state)
                }
            }]), n
        }(a.Component);
        i.propTypes = {data: A.a.array.isRequired}, n.a = i
    }, dtKw: function (u, n) {
        u.exports = [{shop: "万奢城旗舰店", price: "13409330.81", num: "11321"}, {
            shop: "京东万奢城店",
            price: "5697",
            num: "3"
        }, {shop: "京东万奢城旗舰店", price: "9918669.69", num: "6620"}, {
            shop: "京东奢侈品专营店",
            price: "2087253.49",
            num: "2097"
        }, {shop: "京东奢品专卖店", price: "40411", num: "20"}, {
            shop: "小红书顶秀店",
            price: "1745595",
            num: "1080"
        }, {shop: "顶秀考拉店", price: "13028184.87", num: "7087"}]
    }, hdLT: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("anjx"), C = (m.n(a), m("Vp57")), o = m.n(C), A = m("BNWl"), F = m.n(A),
            i = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), S = function (u) {
                function n(u) {
                    s(this, n);
                    var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                    return m.state = {
                        data: u.data,
                        forceFit: !0,
                        width: 100,
                        height: 250,
                        plotCfg: {margin: [10, 50, 80, 100]}
                    }, m.Chart = r()(function (u) {
                        m.chart = u, u.coord("theta", {radius: .8}), u.legend("brand", {
                            position: "bottom",
                            itemWrap: !0
                        }), u.tooltip({
                            title: null,
                            map: {num: "num"}
                        }), u.intervalStack().position(a.Stat.summary.percent("num")).color("brand").label("brand*..percent", function (u, n) {
                            return n = (100 * n).toFixed(2) + "%", u + " " + n
                        }), u.render();
                        var n = u.getGeoms()[0], s = n.getData();
                        n.setSelected(s[1])
                    }), m
                }

                return e(n, u), i(n, [{
                    key: "render", value: function () {
                        return o.a.createElement(this.Chart, this.state)
                    }
                }]), n
            }(C.Component);
        S.propTypes = {data: F.a.array.isRequired}, n.a = S
    }, lp6G: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("Vp57"), r = m.n(t), a = m("BNWl"), C = m.n(a), o = m("H0LS"), A = (m.n(o), m("0KPF")), F = m("aqgM"),
            i = m("pjZA"), S = m("H8iS"), c = m("cHU6"), L = m("hdLT"), M = m("6x2d"), E = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), p = function (u) {
                function n() {
                    return s(this, n), k(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments))
                }

                return e(n, u), E(n, [{
                    key: "render", value: function () {
                        var u = this.props, n = u.sales, m = u.orderQuantity, s = u.customerPrice, k = u.monthData,
                            e = u.brandData, t = u.shopData, a = u.skuData, C = u.provinceData, o = u.categoryData,
                            E = u.rebuyBrandData;
                        return r.a.createElement("div", {className: "index"}, r.a.createElement("ul", {className: "brief"}, r.a.createElement("li", {className: "brief__item"}, r.a.createElement("p", {className: "brief__title"}, "总销售额"), r.a.createElement("p", {className: "brief__num"}, n.toLocaleString("en-US"), " ", r.a.createElement("span", {className: "brief__unit"}, "元"))), r.a.createElement("li", {className: "brief__item"}, r.a.createElement("p", {className: "brief__title"}, "总订单量"), r.a.createElement("p", {className: "brief__num"}, m, " ", r.a.createElement("span", {className: "brief__unit"}, "个"))), r.a.createElement("li", {className: "brief__item"}, r.a.createElement("p", {className: "brief__title"}, "客单价"), r.a.createElement("p", {className: "brief__num"}, s.toLocaleString("en-US"), " ", r.a.createElement("span", {className: "brief__unit"}, "元")))), r.a.createElement("ul", {className: "l-chart"}, r.a.createElement("li", {className: "l-chart__row"}, r.a.createElement("div", {className: "l-chart__col chart"}, r.a.createElement("h2", null, "历史销售统计"), r.a.createElement(F.a, {data: k})), r.a.createElement("div", {className: "l-chart__col chart"}, r.a.createElement("h2", null, "Top 10 品牌销量排名"), r.a.createElement(A.a, {
                            data: e.sort(function (u, n) {
                                return u.num - n.num
                            }).slice(-10)
                        }))), r.a.createElement("li", {className: "l-chart__row"}, r.a.createElement("div", {className: "l-chart__col chart"}, r.a.createElement("h2", null, "店铺销售统计"), r.a.createElement(S.a, {
                            data: t.sort(function (u, n) {
                                return u.price - n.price
                            })
                        })), r.a.createElement("div", {className: "l-chart__col chart"}, r.a.createElement("h2", null, "Top 10 爆款商品排名"), r.a.createElement(c.a, {
                            data: a.sort(function (u, n) {
                                return u.num - n.num
                            }).slice(-10)
                        }))), r.a.createElement("li", {className: "l-chart__row"}, r.a.createElement("div", {className: "l-chart__col chart"}, r.a.createElement("h2", null, "区域销售额统计"), r.a.createElement(M.a, {
                            data: C.map(function (u) {
                                return {name: u.province, value: u.price}
                            })
                        })), r.a.createElement("div", {className: "l-chart__col"}, r.a.createElement("div", {className: "chart"}, r.a.createElement("h2", null, "品类销售额统计"), r.a.createElement(i.a, {
                            data: o.sort(function (u, n) {
                                return u.price - n.price
                            }).slice(-10)
                        })), r.a.createElement("div", {className: "chart"}, r.a.createElement("h2", null, "品类重复购买率"), r.a.createElement(L.a, {
                            data: E.sort(function (u, n) {
                                return u.num - n.num
                            }).slice(-10)
                        }))))))
                    }
                }]), n
            }(t.Component);
        p.propTypes = {
            sales: C.a.number,
            orderQuantity: C.a.number,
            customerPrice: C.a.number,
            monthData: C.a.array,
            brandData: C.a.array,
            shopData: C.a.array,
            skuData: C.a.array,
            provinceData: C.a.array,
            categoryData: C.a.array,
            rebuyBrandData: C.a.array
        }, p.defaultProps = {
            sales: 40235141.86,
            profits: 0,
            orderQuantity: 28228,
            customerNumber: 22752,
            customerPrice: 1425.36,
            monthData: [],
            brandData: [],
            shopData: [],
            skuData: [],
            provinceData: [],
            categoryData: [],
            rebuyBrandData: []
        }, n.a = p
    }, nra0: function (u, n) {
    }, pjZA: function (u, n, m) {
        "use strict";

        function s(u, n) {
            if (!(u instanceof n)) throw new TypeError("Cannot call a class as a function")
        }

        function k(u, n) {
            if (!u) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !n || "object" != typeof n && "function" != typeof n ? u : n
        }

        function e(u, n) {
            if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
            u.prototype = Object.create(n && n.prototype, {
                constructor: {
                    value: u,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(u, n) : u.__proto__ = n)
        }

        var t = m("WEP/"), r = m.n(t), a = m("anjx"), C = (m.n(a), m("Vp57")), o = m.n(C), A = m("BNWl"), F = m.n(A),
            i = function () {
                function u(u, n) {
                    for (var m = 0; m < n.length; m++) {
                        var s = n[m];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(u, s.key, s)
                    }
                }

                return function (n, m, s) {
                    return m && u(n.prototype, m), s && u(n, s), n
                }
            }(), S = function (u) {
                function n(u) {
                    s(this, n);
                    var m = k(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, u));
                    return m.state = {
                        data: u.data,
                        forceFit: !0,
                        width: 100,
                        height: 250,
                        plotCfg: {margin: [10, 50, 80, 100]}
                    }, m.Chart = r()(function (u) {
                        m.chart = u, u.coord("theta", {radius: .8}), u.legend("category", {
                            position: "bottom",
                            itemWrap: !0
                        }), u.tooltip({
                            title: null,
                            map: {price: "price"}
                        }), u.intervalStack().position(a.Stat.summary.percent("price")).color("category").label("category*..percent", function (u, n) {
                            return n = (100 * n).toFixed(2) + "%", u + " " + n
                        }), u.render();
                        var n = u.getGeoms()[0], s = n.getData();
                        n.setSelected(s[1])
                    }), m
                }

                return e(n, u), i(n, [{
                    key: "render", value: function () {
                        return o.a.createElement(this.Chart, this.state)
                    }
                }]), n
            }(C.Component);
        S.propTypes = {data: F.a.array.isRequired}, n.a = S
    }, uPXS: function (u, n) {
    }, vnza: function (u, n) {
        u.exports = [{category: " ", price: "2579440.55"}, {
            category: "BACKPACK",
            price: "3513753.5999999996"
        }, {category: "BARRETTE", price: "35780"}, {category: "BELT", price: "15294306"}, {
            category: "BOOTIES",
            price: "152074"
        }, {category: "BOOTS", price: "608191"}, {category: "BRACELET", price: "270927"}, {
            category: "BRIEFCASE",
            price: "2199083"
        }, {category: "BUMBAG", price: "17325"}, {category: "CARD CASE", price: "3014"}, {
            category: "CARD HOLDER",
            price: "312220"
        }, {category: "CLUTCH", price: "1919581.4"}, {category: "COSMETIC BAG", price: "12030"}, {
            category: "CROSSBODY",
            price: "7749356.270000001"
        }, {category: "CUFFLINK", price: "25400"}, {category: "DUFFLE BAG", price: "41375"}, {
            category: "EARRINGS",
            price: "46763"
        }, {category: "FLATS & LOAFERS", price: "4333278"}, {category: "GLOVES", price: "49350"}, {
            category: "HANDBAG",
            price: "30808651.229999997"
        }, {category: "HAT", price: "219180"}, {
            category: "HIGH HEALS & WEDGES",
            price: "4840381"
        }, {category: "JACKETS & COATS", price: "2507433"}, {
            category: "KEY CASE",
            price: "63244"
        }, {category: "KEY CHAIN", price: "601842.2"}, {category: "LACE UPS", price: "3663642"}, {
            category: "LUGGAGE",
            price: "2751992"
        }, {category: "MESSENGER BAG", price: "1283889"}, {
            category: "MINI BAG",
            price: "311530"
        }, {category: "MOCCASINS & LOAFERS", price: "7178383"}, {
            category: "NECKLACE",
            price: "14097"
        }, {category: "PASSPORT HOLDER", price: "73080"}, {category: "POLOS", price: "292014"}, {
            category: "PUFFERS",
            price: "143430"
        }, {category: "RING", price: "60647"}, {category: "SANDALS", price: "155297"}, {
            category: "SATCHEL",
            price: "8670"
        }, {category: "SCARVE", price: "2904994"}, {category: "SHIRTS", price: "2755299"}, {
            category: "SHOES",
            price: "79700"
        }, {category: "SHOULDER BAG", price: "6201505"}, {category: "SLIPPERS", price: "80459"}, {
            category: "SNEAKERS",
            price: "5849310"
        }, {category: "SOCKS", price: "101534"}, {category: "SPORT SHOES", price: "926384"}, {
            category: "SWEATERS",
            price: "628113"
        }, {category: "SWEATSHIRTS", price: "468889"}, {category: "T-SHIRTS", price: "1004855"}, {
            category: "TIE",
            price: "220054"
        }, {category: "TROUSERS & JEANS", price: "1126504"}, {
            category: "UNDERWEARS",
            price: "38300"
        }, {category: "WALLET", price: "21977959"}]
    }
}, ["DVmc"]);