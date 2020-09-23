'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

// based on React lazy() and Suspense
function lazyImport(props) {
    var action = props.action, loading = props.loading;
    var LazyComponent = React__default['default'].lazy(function () { return action; });
    return function (porps) {
        return (React__default['default'].createElement("div", null,
            React__default['default'].createElement(React.Suspense, { fallback: loading || React__default['default'].createElement("div", null, "Loading...") },
                React__default['default'].createElement(LazyComponent, __assign({}, porps)))));
    };
}
// based on import().then()
function AsyncImport(props) {
    var action = props.action, loading = props.loading;
    var AsyncComponent = /** @class */ (function (_super) {
        __extends(AsyncComponent, _super);
        function AsyncComponent(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                component: null,
            };
            return _this;
        }
        AsyncComponent.prototype.componentDidMount = function () {
            var _this = this;
            action &&
                action.then(function (cm) {
                    _this.setState({
                        component: cm.default ? cm.default : cm,
                    });
                });
        };
        AsyncComponent.prototype.render = function () {
            if (this.state.component) {
                var Current = this.state.component;
                return React__default['default'].createElement(Current, __assign({}, this.props));
            }
            return loading || React__default['default'].createElement("div", null, "loading...");
        };
        return AsyncComponent;
    }(React__default['default'].Component));
    return AsyncComponent;
}

exports.AsyncImport = AsyncImport;
exports.lazyImport = lazyImport;
