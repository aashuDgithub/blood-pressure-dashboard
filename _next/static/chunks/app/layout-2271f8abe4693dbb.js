(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185], {
        3771: function(e, a, n) {
            Promise.resolve().then(n.bind(n, 8612)), Promise.resolve().then(n.t.bind(n, 8877, 23)), Promise.resolve().then(n.t.bind(n, 6007, 23)), Promise.resolve().then(n.t.bind(n, 8575, 23)), Promise.resolve().then(n.t.bind(n, 636, 23))
        },
        8612: function(e, a, n) {
            "use strict";
            n.d(a, {
                default: function() {
                    return r
                }
            });
            var s = n(7437),
                t = n(1169);
            let i = [{
                name: "Overview",
                icon: "/home_overview.png",
                path: "#1"
            }, {
                name: "Patients",
                icon: "/patients.png",
                path: "/"
            }, {
                name: "Schedule",
                icon: "/calendar.png",
                path: "#2"
            }, {
                name: "Message",
                icon: "/messages.png",
                path: "#3"
            }, {
                name: "Transactions",
                icon: "/transactions.png",
                path: "#4"
            }];
            var r = function() {
                let e = (0, t.usePathname)();
                return (0, s.jsxs)("div", {
                    className: 'mt-[18px] px-8 mx-[18px] py-[5px] bg-background rounded-[70px] flex items-center justify-between className="min-w-[1251.2px]"',
                    children: [(0, s.jsx)("div", {
                        children: (0, s.jsx)("a", {
                            href: "/",
                            children: (0, s.jsx)("img", {
                                src: "/logo.png",
                                alt: "tech care logo",
                                className: "h-12"
                            })
                        })
                    }), (0, s.jsx)("div", {
                        className: "flex ",
                        children: i.map((a, n) => (0, s.jsx)("a", {
                            href: a.path,
                            children: (0, s.jsxs)("div", {
                                className: "flex gap-2 mx-4 my-[11px] px-4 py-[11px]\n        hover:bg-activeState_1 hover:text-white rounded-[41px] cursor-pointer items-center justify-center\n        ".concat(e == a.path && "bg-activeState_1", "\n        "),
                                children: [(0, s.jsx)("img", {
                                    src: "".concat(a.icon),
                                    className: "h-[17px]"
                                }), (0, s.jsx)("h2", {
                                    className: "emphasized",
                                    children: a.name
                                })]
                            })
                        }, a.name))
                    }), (0, s.jsx)("div", {
                        children: (0, s.jsxs)("div", {
                            id: "container",
                            className: "gap-2 flex items-center",
                            children: [(0, s.jsx)("div", {
                                id: "avatar",
                                className: "min-h-11 min-w-11 bg-user_avatar bg-contain rounded-full"
                            }), (0, s.jsx)("div", {
                                className: "flex flex-col pr-3 border-r border-border mr-1",
                                children: (0, s.jsxs)("div", {
                                    id: "username",
                                    children: [(0, s.jsx)("h4", {
                                        className: "emphasized",
                                        children: "Dr. Joe Simmons"
                                    }), (0, s.jsx)("h4", {
                                        className: "secondary",
                                        children: " General Practitioner"
                                    })]
                                })
                            }), (0, s.jsx)("img", {
                                src: "/settings.png",
                                alt: "settings",
                                className: "h-5 mr-3"
                            }), (0, s.jsx)("img", {
                                src: "/options.png",
                                alt: "options",
                                className: "h-5 "
                            })]
                        })
                    })]
                })
            }
        },
        8877: function() {},
        636: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Handjet_009e5c', '__Handjet_Fallback_009e5c'",
                    fontWeight: 400,
                    fontStyle: "normal"
                },
                className: "__className_009e5c"
            }
        },
        8575: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_36bd41', '__Inter_Fallback_36bd41'",
                    fontStyle: "normal"
                },
                className: "__className_36bd41",
                variable: "__variable_36bd41"
            }
        },
        6007: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Manrope_da1155', '__Manrope_Fallback_da1155'",
                    fontStyle: "normal"
                },
                className: "__className_da1155",
                variable: "__variable_da1155"
            }
        }
    },
    function(e) {
        e.O(0, [370, 971, 526, 744], function() {
            return e(e.s = 3771)
        }), _N_E = e.O()
    }
]);