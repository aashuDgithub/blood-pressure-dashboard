(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [931], {
        193: function(s, e, l) {
            Promise.resolve().then(l.bind(l, 8052))
        },
        8052: function(s, e, l) {
            "use strict";
            l.r(e), l.d(e, {
                default: function() {
                    return v
                },
                runtime: function() {
                    return h
                }
            });
            var i = l(7437),
                a = l(2265),
                d = function(s) {
                    let {
                        patientsData: e
                    } = s;
                    return (0, i.jsxs)("div", {
                        className: "",
                        children: [(0, i.jsxs)("div", {
                            className: "px-5 flex justify-between mb-5",
                            children: [(0, i.jsx)("h2", {
                                children: "Patients"
                            }), (0, i.jsx)("img", {
                                src: "/search.svg"
                            })]
                        }), (0, i.jsx)("div", {
                            className: "overflow-y-scroll max-h-[941px] mt-5",
                            children: null == e ? void 0 : e.map((s, e) => (0, i.jsxs)("div", {
                                id: "container",
                                className: "flex justify-between items-center py-4 pl-5 pr-4 hover:bg-activeState_2 ".concat("Jessica Taylor" === s.name && "bg-activeState_2"),
                                children: [(0, i.jsxs)("div", {
                                    className: "flex gap-3 items-center",
                                    children: [(0, i.jsx)("img", {
                                        src: "".concat(null == s ? void 0 : s.profile_picture),
                                        className: "h-12 rounded-full"
                                    }), (0, i.jsx)("div", {
                                        className: "flex flex-col",
                                        children: (0, i.jsxs)("div", {
                                            id: "username",
                                            children: [(0, i.jsx)("h4", {
                                                className: "emphasized",
                                                children: s.name
                                            }), (0, i.jsxs)("h4", {
                                                className: "secondary",
                                                children: [" ", "".concat(s.gender, ", ").concat(s.age)]
                                            })]
                                        })
                                    })]
                                }), (0, i.jsx)("img", {
                                    src: "/patient_options.svg",
                                    alt: "options",
                                    className: "w-[18px] color-kebab"
                                })]
                            }, e))
                        })]
                    })
                },
                c = function(s) {
                    let {
                        patientsData: e
                    } = s;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-col items-center",
                            children: [(0, i.jsx)("img", {
                                src: "/jess_avatar.png",
                                className: "h-[200px] w-[200px] rounded-full mt-8"
                            }), (0, i.jsx)("h2", {
                                className: "mt-6",
                                children: null == e ? void 0 : e.name
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "flex flex-col gap-6",
                            children: [(0, i.jsx)("div", {
                                className: "flex gap-4 items-center pl-5 mt-8",
                                children: (0, i.jsxs)("div", {
                                    className: "flex justify-start gap-4",
                                    children: [(0, i.jsx)("img", {
                                        src: "/dob.png",
                                        className: "h-[42px] w-[42px]"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsx)("h4", {
                                            className: "right_card_title",
                                            children: "date of birth"
                                        }), (0, i.jsx)("p", {
                                            className: "right_card_info",
                                            children: null == e ? void 0 : e.date_of_birth
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex gap-4 items-center pl-5",
                                children: (0, i.jsxs)("div", {
                                    className: "flex justify-start gap-4",
                                    children: [(0, i.jsx)("img", {
                                        src: "/dob.png",
                                        className: "h-[42px] w-[42px]"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsx)("h4", {
                                            className: "right_card_title",
                                            children: "gender"
                                        }), (0, i.jsx)("p", {
                                            className: "right_card_info",
                                            children: null == e ? void 0 : e.gender
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex gap-4 items-center pl-5",
                                children: (0, i.jsxs)("div", {
                                    className: "flex justify-start gap-4",
                                    children: [(0, i.jsx)("img", {
                                        src: "/dob.png",
                                        className: "h-[42px] w-[42px]"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsx)("h4", {
                                            className: "right_card_title",
                                            children: "contact info."
                                        }), (0, i.jsx)("p", {
                                            className: "right_card_info",
                                            children: null == e ? void 0 : e.phone_number
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex gap-4 items-center pl-5",
                                children: (0, i.jsxs)("div", {
                                    className: "flex justify-start gap-4",
                                    children: [(0, i.jsx)("img", {
                                        src: "/dob.png",
                                        className: "h-[42px] w-[42px]"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsx)("h4", {
                                            className: "right_card_title",
                                            children: "emergency contacts"
                                        }), (0, i.jsx)("p", {
                                            className: "right_card_info",
                                            children: null == e ? void 0 : e.emergency_contact
                                        })]
                                    })]
                                })
                            }), (0, i.jsx)("div", {
                                className: "flex gap-4 items-center pl-5",
                                children: (0, i.jsxs)("div", {
                                    className: "flex justify-start gap-4",
                                    children: [(0, i.jsx)("img", {
                                        src: "/dob.png",
                                        className: "h-[42px] w-[42px]"
                                    }), (0, i.jsxs)("div", {
                                        className: "flex flex-col gap-1",
                                        children: [(0, i.jsx)("h4", {
                                            className: "right_card_title",
                                            children: "insurance provider"
                                        }), (0, i.jsx)("p", {
                                            className: "right_card_info",
                                            children: null == e ? void 0 : e.insurance_type
                                        })]
                                    })]
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, i.jsx)("button", {
                                className: "emphasized px-10 py-[11px] rounded-[41px] bg-activeState_1 mb-8 mt-10",
                                children: "Show All Information"
                            })
                        })]
                    })
                },
                n = function(s) {
                    var e, l;
                    let {
                        patientsData: a
                    } = s;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("div", {
                            className: "mb-4",
                            children: (0, i.jsx)("h2", {
                                children: "Lab Results"
                            })
                        }), (0, i.jsx)("div", {
                            className: "overflow-y-scroll max-h-[207px]",
                            children: (0, i.jsxs)("div", {
                                className: "pl-0.5",
                                children: [null == a ? void 0 : null === (e = a.lab_results) || void 0 === e ? void 0 : e.map((s, e) => (0, i.jsx)("div", {
                                    className: "flex flex-col gap-[5px]",
                                    children: (0, i.jsxs)("div", {
                                        className: "flex justify-between items-center px-4 py-[11px] hover:bg-[#F6F7F8] ".concat(1 === e && "bg-[#F6F7F8]", " "),
                                        children: [(0, i.jsx)("p", {
                                            children: s
                                        }), (0, i.jsx)("img", {
                                            src: "/download_icon.svg",
                                            className: "h-4"
                                        })]
                                    })
                                }, e)), null == a ? void 0 : null === (l = a.lab_results) || void 0 === l ? void 0 : l.map((s, e) => (0, i.jsx)("div", {
                                    children: (0, i.jsx)("div", {
                                        className: "flex flex-col gap-[5px]",
                                        children: (0, i.jsxs)("div", {
                                            className: "flex justify-between items-center px-4 py-[11px] hover:bg-[#F6F7F8]",
                                            children: [(0, i.jsx)("p", {
                                                children: s
                                            }), (0, i.jsx)("img", {
                                                src: "/download_icon.svg",
                                                className: "h-4"
                                            })]
                                        })
                                    })
                                }, e))]
                            })
                        })]
                    })
                },
                r = function(s) {
                    var e, l;
                    let {
                        patientsData: a
                    } = s;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("h2", {
                            className: "mb-8",
                            children: "Diagnostic List"
                        }), (0, i.jsxs)("table", {
                            className: "w-full text-left",
                            children: [(0, i.jsx)("thead", {
                                className: "mb-2.5 bg-[#F6F7F8] flex w-full rounded-3xl px-4",
                                children: (0, i.jsxs)("tr", {
                                    className: "flex w-full ",
                                    children: [(0, i.jsx)("th", {
                                        className: "emphasized py-3.5 w-2/6",
                                        children: "Problem/Diagnosis"
                                    }), (0, i.jsx)("th", {
                                        className: "emphasized py-3.5 w-3/6",
                                        children: "Description"
                                    }), (0, i.jsx)("th", {
                                        className: "emphasized py-3.5 w-1/6 mr-2.5",
                                        children: "Status"
                                    })]
                                })
                            }), (0, i.jsxs)("tbody", {
                                className: "flex flex-col items-center justify-start overflow-y-scroll max-h-[178px] w-full divide-y devide-gray-400 px-4",
                                children: [null == a ? void 0 : null === (e = a.diagnostic_list) || void 0 === e ? void 0 : e.map((s, e) => (0, i.jsxs)("tr", {
                                    className: "flex w-full items-center",
                                    children: [(0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "pb-2.5 " : "py-[11px]", " w-1/3"),
                                        children: s.name
                                    }), (0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "py-5" : "py-[14.5px]", " w-1/2"),
                                        children: s.description
                                    }), (0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "py-5" : "py-[11px]", " w-1/6"),
                                        children: s.status
                                    })]
                                }, e)), null == a ? void 0 : null === (l = a.diagnostic_list) || void 0 === l ? void 0 : l.map((s, e) => (0, i.jsxs)("tr", {
                                    className: "flex w-full items-center",
                                    children: [(0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "pb-2.5 " : "py-[11px]", " w-1/3"),
                                        children: s.name
                                    }), (0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "py-5" : "py-[14.5px]", " w-1/2"),
                                        children: s.description
                                    }), (0, i.jsx)("td", {
                                        className: "".concat(0 === e ? "py-5" : "py-[11px]", " w-1/6"),
                                        children: s.status
                                    })]
                                }, e))]
                            })]
                        })]
                    })
                },
                o = l(7346),
                t = l(5211);
            t.kL.register(t.uw, t.f$, t.od, t.jn, t.Dx, t.u, t.De, t.QL);
            var x = function(s) {
                var e, l, a, d, c, n, r, t, x, h, v, m, p, u, j, g, f, N, b, _, y, w, F, D, C, E, k;
                let {
                    patientsData: B
                } = s, A = {
                    labels: null == B ? void 0 : null === (l = B.diagnosis_history) || void 0 === l ? void 0 : null === (e = l.map((s, e) => {
                        var l;
                        return "".concat(null === (l = s.month) || void 0 === l ? void 0 : l.substring(0, 3), ", ").concat(s.year)
                    })) || void 0 === e ? void 0 : e.slice(0, 6).reverse(),
                    datasets: [{
                        data: null == B ? void 0 : null === (d = B.diagnosis_history) || void 0 === d ? void 0 : null === (a = d.map((s, e) => {
                            var l, i;
                            return null === (i = s.blood_pressure) || void 0 === i ? void 0 : null === (l = i.systolic) || void 0 === l ? void 0 : l.value
                        })) || void 0 === a ? void 0 : a.slice(0, 6).reverse(),
                        borderColor: "#C26EB4",
                        pointBackgroundColor: "#C26EB4",
                        pointBorderColor: "white",
                        pointRadius: 7,
                        tension: .4,
                        borderWidth: 2
                    }, {
                        data: null == B ? void 0 : null === (n = B.diagnosis_history) || void 0 === n ? void 0 : null === (c = n.map((s, e) => {
                            var l, i;
                            return null === (i = s.blood_pressure) || void 0 === i ? void 0 : null === (l = i.diastolic) || void 0 === l ? void 0 : l.value
                        })) || void 0 === c ? void 0 : c.slice(0, 6).reverse(),
                        borderColor: "#7E6CAB",
                        pointBackgroundColor: "#7E6CAB",
                        pointBorderColor: "white",
                        pointRadius: 7,
                        tension: .4,
                        borderWidth: 2
                    }]
                };
                return (0, i.jsxs)("div", {
                    children: [(0, i.jsx)("h2", {
                        children: "Diagnosis History"
                    }), (0, i.jsxs)("div", {
                        className: "h-[298px] w-full bg-[#F4F0FE] px-4 py-4 rounded-xl mt-10 gap-2 flex relative",
                        children: [(0, i.jsxs)("div", {
                            className: "w-[70%]",
                            children: [(0, i.jsxs)("div", {
                                className: "mb-6 max-w-full flex justify-between",
                                children: [(0, i.jsx)("h3", {
                                    children: "Blood Pressure"
                                }), (0, i.jsxs)("div", {
                                    className: "flex gap-4 items-center mt-[5px] mr-8",
                                    children: [(0, i.jsx)("p", {
                                        children: "Last 6 months"
                                    }), (0, i.jsx)("img", {
                                        src: "/expand.svg",
                                        alt: "expand",
                                        className: "h-1.5 w-auto"
                                    })]
                                })]
                            }), (0, i.jsx)("div", {
                                className: "h-full w-full relative",
                                children: (0, i.jsx)(o.x1, {
                                    options: {
                                        font: {
                                            family: "Manrope",
                                            size: 24
                                        },
                                        plugins: {
                                            legend: {
                                                display: !1
                                            },
                                            title: {
                                                display: !1
                                            }
                                        },
                                        scales: {
                                            x: {
                                                grid: {
                                                    display: !1
                                                },
                                                ticks: {
                                                    color: "#072635",
                                                    font: {
                                                        family: "'Manrope', 'Helvetica', 'Arial', sans-serif",
                                                        size: 12
                                                    }
                                                }
                                            },
                                            y: {
                                                ticks: {
                                                    color: "#072635",
                                                    font: {
                                                        family: "'Manrope', 'Helvetica', 'Arial', sans-serif",
                                                        size: 12
                                                    }
                                                }
                                            }
                                        }
                                    },
                                    data: A
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: "w-[30%]",
                            children: (0, i.jsxs)("div", {
                                className: "flex flex-col flex-wrap w-full divide-y devide-[#CBC8D4]",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, i.jsx)("div", {
                                            className: "h-3.5 w-3.5 rounded-full bg-[#E66FD2] border border-white"
                                        }), (0, i.jsx)("p", {
                                            className: "font-bold",
                                            children: "Systolic"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        className: "text-bp font-bold",
                                        children: null == B ? void 0 : null === (x = B.diagnosis_history) || void 0 === x ? void 0 : null === (t = x[0].blood_pressure) || void 0 === t ? void 0 : null === (r = t.systolic) || void 0 === r ? void 0 : r.value
                                    }), (0, i.jsxs)("div", {
                                        className: "flex gap-2 mb-4",
                                        children: [(0, i.jsx)("img", {
                                            src: "/ArrowUp.svg",
                                            alt: "high blood pressure",
                                            className: "w-2.5"
                                        }), (0, i.jsx)("p", {
                                            children: null == B ? void 0 : null === (m = B.diagnosis_history) || void 0 === m ? void 0 : null === (v = m[0].blood_pressure) || void 0 === v ? void 0 : null === (h = v.systolic) || void 0 === h ? void 0 : h.levels
                                        })]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-col gap-2 pt-4",
                                    children: [(0, i.jsxs)("div", {
                                        className: "flex items-center gap-1",
                                        children: [(0, i.jsx)("div", {
                                            className: "h-3.5 w-3.5 rounded-full bg-[#8C6FE6] border border-white"
                                        }), (0, i.jsx)("p", {
                                            className: "font-bold",
                                            children: "Diastolic"
                                        })]
                                    }), (0, i.jsx)("p", {
                                        className: "text-bp font-bold",
                                        children: null == B ? void 0 : null === (j = B.diagnosis_history) || void 0 === j ? void 0 : null === (u = j[0].blood_pressure) || void 0 === u ? void 0 : null === (p = u.diastolic) || void 0 === p ? void 0 : p.value
                                    }), (0, i.jsxs)("div", {
                                        className: "flex gap-2 mb-4",
                                        children: [(0, i.jsx)("img", {
                                            src: "/ArrowDown.svg",
                                            alt: "high blood pressure",
                                            className: "w-2.5"
                                        }), (0, i.jsx)("p", {
                                            children: null == B ? void 0 : null === (N = B.diagnosis_history) || void 0 === N ? void 0 : null === (f = N[0].blood_pressure) || void 0 === f ? void 0 : null === (g = f.diastolic) || void 0 === g ? void 0 : g.levels
                                        })]
                                    })]
                                })]
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "mt-5 flex gap-[21px] h-[242px] w-full",
                        children: [(0, i.jsxs)("div", {
                            className: "w-1/3 p-4 h-full rounded-xl bg-[#E0F3FA]",
                            children: [(0, i.jsx)("img", {
                                src: "/respiratory_rate.svg",
                                className: "h-24 w-24 bg-contain rounded-full"
                            }), (0, i.jsx)("h3", {
                                className: "diagnosis_heading mt-4",
                                children: "Respiratory Rate"
                            }), (0, i.jsx)("p", {
                                className: "diagnosis_info",
                                children: "".concat((null == B ? void 0 : null === (b = B.diagnosis_history) || void 0 === b ? void 0 : b[0].respiratory_rate.value) === void 0 ? "" : null == B ? void 0 : null === (_ = B.diagnosis_history) || void 0 === _ ? void 0 : _[0].respiratory_rate.value, " bpm")
                            }), (0, i.jsx)("p", {
                                className: "mt-[17px]",
                                children: null == B ? void 0 : null === (y = B.diagnosis_history) || void 0 === y ? void 0 : y[0].respiratory_rate.levels
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "w-1/3 p-4 h-full rounded-xl bg-[#FFE6E9]",
                            children: [(0, i.jsx)("img", {
                                src: "/temperature.svg",
                                className: "h-24 w-24 bg-contain rounded-full"
                            }), (0, i.jsx)("h3", {
                                className: "diagnosis_heading mt-4",
                                children: "Temperature"
                            }), (0, i.jsx)("p", {
                                className: "diagnosis_info",
                                children: "".concat((null == B ? void 0 : null === (w = B.diagnosis_history) || void 0 === w ? void 0 : w[0].temperature.value) === void 0 ? "" : null == B ? void 0 : null === (F = B.diagnosis_history) || void 0 === F ? void 0 : F[0].temperature.value, " \xb0F")
                            }), (0, i.jsx)("p", {
                                className: "mt-[17px]",
                                children: null == B ? void 0 : null === (D = B.diagnosis_history) || void 0 === D ? void 0 : D[0].temperature.levels
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "w-1/3 p-4 h-full rounded-xl bg-[#FFE6F1]",
                            children: [(0, i.jsx)("img", {
                                src: "/HeartBPM.svg",
                                className: "h-24 w-24 bg-contain rounded-full"
                            }), (0, i.jsx)("h3", {
                                className: "diagnosis_heading mt-4",
                                children: "Heart Rate"
                            }), (0, i.jsx)("p", {
                                className: "diagnosis_info",
                                children: "".concat((null == B ? void 0 : null === (C = B.diagnosis_history) || void 0 === C ? void 0 : C[0].heart_rate.value) === void 0 ? "" : null == B ? void 0 : null === (E = B.diagnosis_history) || void 0 === E ? void 0 : E[0].heart_rate.value, " bpm")
                            }), (0, i.jsxs)("div", {
                                className: "flex gap-2 mt-[17px]",
                                children: [(0, i.jsx)("img", {
                                    src: "/ArrowDown.svg",
                                    className: "h-auto w-2.5"
                                }), (0, i.jsx)("p", {
                                    children: null == B ? void 0 : null === (k = B.diagnosis_history) || void 0 === k ? void 0 : k[0].heart_rate.levels
                                })]
                            })]
                        })]
                    })]
                })
            };
            let h = "edge";

            function v() {
                let s = btoa("".concat("coalition", ":").concat("skills-test")),
                    [e, l] = (0, a.useState)([]),
                    [o, t] = (0, a.useState)({});
                return (0, a.useEffect)(() => {
                    (async () => {
                        let e = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
                                headers: {
                                    Authorization: "Basic ".concat(s)
                                }
                            }).catch(function(s) {
                                console.log(s)
                            }),
                            i = await (null == e ? void 0 : e.json());
                        l(i), t(await (null == i ? void 0 : i.find(s => {
                            let {
                                name: e
                            } = s;
                            return "Jessica Taylor" === e
                        })))
                    })()
                }, []), (0, i.jsxs)("div", {
                    className: "px-[18px] pb-[19px] w-full flex gap-8 min-w-[1400px]",
                    children: [(0, i.jsx)("div", {
                        className: "card w-1/4  bg-card_bg py-5 mt-8 min-w-[293.6px]",
                        children: (0, i.jsx)(d, {
                            patientsData: e
                        })
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col w-1/2 gap-8 mt-8 min-w-[612.8px]",
                        children: [(0, i.jsx)("div", {
                            className: "card h-[673px] bg-card_bg p-5",
                            children: (0, i.jsx)(x, {
                                patientsData: o
                            })
                        }), (0, i.jsx)("div", {
                            className: "card h-[349px] bg-card_bg p-5",
                            children: (0, i.jsx)(r, {
                                patientsData: o
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "flex flex-col w-1/4 gap-8 mt-[18px] min-w-[293.6px]",
                        children: [(0, i.jsx)("div", {
                            className: "card h-[740px] bg-card_bg",
                            children: (0, i.jsx)(c, {
                                patientsData: o
                            })
                        }), (0, i.jsx)("div", {
                            className: "card h-[296px] bg-card_bg p-5",
                            children: (0, i.jsx)(n, {
                                patientsData: o
                            })
                        })]
                    })]
                })
            }
        }
    },
    function(s) {
        s.O(0, [674, 746, 971, 526, 744], function() {
            return s(s.s = 193)
        }), _N_E = s.O()
    }
]);