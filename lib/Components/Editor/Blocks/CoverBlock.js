import React from 'react';
export default {
    name: 'Cover',
    fields: [{ type: 'image', name: 'image', label: 'image' }],
    preview: function (data) {
        var _a, _b;
        return (React.createElement("section", { className: "text-gray-600 body-font" },
            React.createElement("div", { className: "container px-5 py-24 mx-auto flex flex-col" },
                React.createElement("div", { className: "lg:w-4/6 mx-auto" },
                    React.createElement("div", { className: "rounded-lg h-64 overflow-hidden" },
                        React.createElement("img", { alt: "content", className: "object-cover object-center h-full w-full", src: "https://".concat((_a = data === null || data === void 0 ? void 0 : data.image) === null || _a === void 0 ? void 0 : _a.bucket, ".s3.ap-southeast-2.amazonaws.com/").concat((_b = data === null || data === void 0 ? void 0 : data.image) === null || _b === void 0 ? void 0 : _b.key) })),
                    React.createElement("div", { className: "flex flex-col sm:flex-row mt-10" },
                        React.createElement("div", { className: "sm:w-1/3 text-center sm:pr-8 sm:py-8" },
                            React.createElement("div", { className: "w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400" },
                                React.createElement("svg", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", className: "w-10 h-10", viewBox: "0 0 24 24" },
                                    React.createElement("path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }),
                                    React.createElement("circle", { cx: "12", cy: "7", r: "4" }))),
                            React.createElement("div", { className: "flex flex-col items-center text-center justify-center" },
                                React.createElement("h2", { className: "font-medium title-font mt-4 text-gray-900 text-lg" }, "Phoebe Caulfield"),
                                React.createElement("div", { className: "w-12 h-1 bg-blue-500 rounded mt-2 mb-4" }),
                                React.createElement("p", { className: "text-base" }, "Raclette knausgaard hella meggs normcore williamsburg enamel pin sartorial venmo tbh hot chicken gentrify portland."))),
                        React.createElement("div", { className: "sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left" },
                            React.createElement("p", { className: "leading-relaxed text-lg mb-4" }, "Meggings portland fingerstache lyft, post-ironic fixie man bun banh mi umami everyday carry hexagon locavore direct trade art party. Locavore small batch listicle gastropub farm-to-table lumbersexual salvia messenger bag. Coloring book flannel truffaut craft beer drinking vinegar sartorial, disrupt fashion axe normcore meh butcher. Portland 90's scenester vexillologist forage post-ironic asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst before they sold out four loko. 3 wolf moon brooklyn."),
                            React.createElement("a", { className: "text-blue-500 inline-flex items-center" },
                                "Learn More",
                                React.createElement("svg", { fill: "none", stroke: "currentColor", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-width": "2", className: "w-4 h-4 ml-2", viewBox: "0 0 24 24" },
                                    React.createElement("path", { d: "M5 12h14M12 5l7 7-7 7" })))))))));
    },
};
