/**
 *  Validation Helper Singleton object
 * @return {Object} [Will return singleton object for Validate]
 */
var validate = (function() {
    'use strict';
    var instance;

    /**
     *  REGEX CONTANTS
     */
    var ALPHABET_REGEX = /^([a-zA-Z])+$/,
        ALPHANUMERIC_REGEX = /^[a-zA-Z0-9]+$/,
        AMOUNT_REGEX = /^\d+(\.?\d{0,2})$/,
        BASE64_REGEX = /[^a-zA-Z0-9\/\+=]/i,
        CREDITCARDNO_REGEX = /^\d{8,16}$/,
        CREDITCARDNAME_REGEX = /^[a-zA-Z\s\b]*$/,
        EMAILID_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        IP_REGEX = /^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i,
        NAME_REGEX = /^[0-9a-zA-Z-_\.\s]+$/,
        NUMBERIC_REGEX = /^[0-9]+$/,
        PHONE_REGEX = /^[0-9-+]+$/,
        PHONEWITHEXTENSION_REGEX = /^[0-9-\s-]+$/,
        URL_REGEX = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
        ZIP_REGEX = /^[0-9a-zA-Z-\s]+$/;

    function Validator(options) {
        var _options = function() {
            var valid = "valid",
                invalid = "invalid";

            this.setValid = function(value) {
                _setValid(value);
            };

            function _setValid(value) {
                valid = value;
            }
            this.getValid = function() {
                return valid;
            };
            this.setInvalid = function(value) {
                _setInvalid(value);
            };

            function _setInvalid(value) {
                invalid = value;
            }
            this.getInvalid = function() {
                return invalid;
            };
            _createCSSSelector('.mycssclass', 'display:none');
        };

        function init() {
            configure(options);
        }

        /**
         * [amount description]
         * @param  {[type]} amount [description]
         * @return {[type]}        [description]
         */
        function amount(value) {
                var payAmountinvalid = /^\d+\.$/;
                if (payAmountinvalid.test(value)) return false;
                if (AMOUNT_REGEX.test(value)) return true;
                else
                    return false;
            }
            /**
             * [alphabet - Method will return false if the i/p is character else true]
             * @param  {[type]} event [description]
             * @return {[type]}       [description]
             */
        function alphabet(event) {
                return ALPHABET_REGEX.test(String.fromCharCode(event.which));
            }
            /**
             * [alphanumeric description]
             * @param  {[type]} value [description]
             * @return {[type]}       [description]
             */
        function alphanumeric(value) {
                return value ? ALPHANUMERIC_REGEX.test(value.trim()) : false;
            }
            /**
             * [base64 Method to validate base64 value ]
             * @param  {String} value base64 as String
             * @return {[type]}       [description]
             */
        function base64(value) {
                return value ? BASE64_REGEX.test(value.trim()) : false;
            }
            /**
             * [checkForCardName description]
             * @param  {[type]} event [description]
             * @return {[type]}       [description]
             */
        function checkForCardName(event) {
                return CREDITCARDNAME_REGEX.test(String.fromCharCode(event.which));
            }
            /**
             * [configure - Method to configure valid and invalid class names ]
             * @param  {[Object]} options = { validClass : "valid" ,invaildClass : "invalid"}
             * @return {Boolean} return true if it's configured successfully else false.
             */
        function configure(options) {
                if (!options || !options.validClass || !options.invalidClass) return "Failed";
                _options.setValid(options.validClass);
                _options.setInvalid(options.invalidClass);
                return "Success";
            }
            /**
             * [creditCardNumber description]
             * @param  {[type]} cardNumber [description]
             * @return {[type]}            [description]
             */
        function creditCardNumber(cardNumber) {
                return cardNumber ? CREDITCARDNO_REGEX.test(cardNumber.trim()) : false;
            }
            /**
             * [email description]
             * @param  {[type]} login [description]
             * @return {[type]}       [description]
             */
        function email(value) {
                return value ? EMAILID_REGEX.test(value.trim()) : false;
            }
            /**
             * [emails description]
             * @param  {String or [String]} login [description]
             * @return {[type]}       [description]
             */
        function emails(value) {
                if (!value || typeof value === 'object') return false;
                if ((typeof value === 'string' && value.indexOf(',') === -1))
                    return email(value);
                else {
                    var list = Array.isArray(value) ? value : value.split(',');
                    for (var i = list.length - 1; i >= 0; i--) {
                        if (!EMAILID_REGEX.test(list[i])) return false;
                    }
                    return true;
                }
            }
            /**
             * [ipAddress Method to validate IP address if valid return true else false]
             * @param  {String or [String]} value [description]
             * @return {[type]}       [description]
             */
        function ipaddress(value) {
                if (!value || typeof value === 'object') return false;
                if ((typeof value === 'string' && value.indexOf(',') === -1))
                    return IP_REGEX.test(value.trim());
                else {
                    var list = Array.isArray(value) ? value : value.split(',');
                    for (var i = list.length - 1; i >= 0; i--) {
                        if (!IP_REGEX.test(value.trim())) return false;
                    }
                    return true;
                }
            }
            /**
             * [name description]
             * @param  {String} name [description]
             * @return {[type]}      [description]
             */
        function name(value) {
                return value ? NAME_REGEX.test(value.trim()) : false;
            }
            /**
             * [password description]
             * @param  {[type]} password [description]
             * @return {[type]}          [description]
             */
        function password(value) {
                return value ? value.trim().length > 6 && value.trim().length < 20 : false;
            }
            /**
             * [phone description]
             * @param  {[type]} txtPhone [description]
             * @return {[type]}          [description]
             */
        function phone(txtPhone) {
                return txtPhone ? PHONE_REGEX.test(txtPhone.trim()) : false;
            }
            /**
             * [variable description]
             * @param  {[type]} variable [description]
             * @return {[type]}          [description]
             */
        function variable(value) {
                return (value !== undefined && value !== '' && value !== null && value != 'null' && value != 'NULL');
            }
            /**
             * [number description]
             * @param  {[type]} value [description]
             * @return {[type]}       [description]
             */
        function number(value) {
            return value ? NUMBERIC_REGEX.test(value.trim()) : false;
        }

        /**
         * [text description]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        function text(value) {
            return value ? true : false;
        }

        /**
         * [url description]
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        function url(value) {
                if (!value || typeof value === 'object') return false;
                return URL_REGEX.test(value.trim());
            }
            /**
             * [urls description]
             * @param  {[type]} value [description]
             * @return {[type]}       [description]
             */
        function urls(value) {
                if (!value || typeof value === 'object') return false;
                if ((typeof value === 'string' && value.indexOf(',') === -1))
                    return URL_REGEX.test(value.trim());
                else {
                    var list = Array.isArray(value) ? value : value.split(',');
                    for (var i = list.length - 1; i >= 0; i--) {
                        if (!URL_REGEX.test(value.trim())) return false;
                    }
                    return true;
                }
            }
            /**
             * [zip description]
             * @param  {[type]} zip [description]
             * @return {[type]}     [description]
             */
        function zip(value) {
                return value ? ZIP_REGEX.test(value.trim()) : false;
            }
            /**
             * [phonewithextension description]
             * @param  {[type]} txtPhone [description]
             * @return {[type]}          [description]
             */
        function phonewithextension(txtPhone) {
            return txtPhone ? PHONEWITHEXTENSION_REGEX.test(txtPhone.trim()) : false;
        }

        function page(options) {
            return _validateProccesor(document, options);
        }

        function _basedOnId(id, options) {
                try {
                    if (!id) throw "Form/Div ID required!.";
                    var domObject = document.getElementById(id);
                    return _validateProccesor(domObject, options);
                } catch (e) {
                    console.error("Exception :", e);
                    return false;
                }
            }
            /**
             * [_validateProccesor description]

             * @param  {[type]} dom     [description]
             * @param  {[type]} options [description]
             * @return {[type]}         [description]
             */
        function _validateProccesor(dom, options) {
            try {
                var inputList, valid = true;
                if (dom) {
                    inputList = _getInputElements(dom);
                    if (!inputList.length) throw "Not found validation required input fields";
                    for (var ind in inputList) {
                        var domObject = inputList[ind];
                        if (typeof domObject !== 'object') break;
                        if (!_updateClass(domObject, _isValid(domObject), options)) valid = false;
                    }
                }
                return valid;
            } catch (e) {
                console.error("Exception :", e);
                return false;
            }
        }

        function _getInputElements(dom) {
            if (dom)
                if (dom.querySelectorAll) return dom.querySelectorAll('[data-type]');
                else {
                    var inputList, domObjects = dom.getElementByTagName('input');
                    for (var prop in domObjects) {
                        if (isNaN(Number(prop))) break;
                        if (domObjects[prop].dataset && domObjects[prop].dataset.type) inputList[prop] = domObjects[prop];
                    }
                    return inputList;
                }
        }

        function _updateClass(domObject, valid, options) {
            var opt = options || {},
                validClass = opt.validClass || _options.getValid(),
                invalidClass = opt.invalidClass || _options.getInvalid();
            if (domObject.classList) {
                domObject.classList.add(valid ? validClass : invalidClass);
                domObject.classList.remove(valid ? invalidClass : validClass);
            } else if (domObject.className) {
                domObject.className = domObject.className.replace(valid ? validClass : invalidClass, '');
                if (domObject.className.indexOf(valid ? validClass : invalidClass) === -1)
                    domObject.className += ' ' + valid ? validClass : invalidClass;
            }
            return valid;
        }

        function _isValid(domObject) {
            var dataset = domObject.dataset || '';
            if (dataset.type && dataset.required && instance.hasOwnProperty(dataset.type)) return instance[dataset.type.toLowerCase()](domObject.value);
            else if (dataset.type && instance.hasOwnProperty(dataset.type)) return domObject.value ? instance[dataset.type.toLowerCase()](domObject.value) : true;
            else console.error('Invalid Type : ', domObject);
        }

        function _createCSSSelector(selector, style) {
            if (!document.styleSheets) return;
            if (document.getElementsByTagName("head").length === 0) return;
            var styleSheet, mediaType, i, media;

            if (document.styleSheets.length > 0) {
                for (i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].disabled) continue;

                    media = document.styleSheets[i].media;
                    mediaType = typeof media;

                    if (mediaType === "string" && (media === "" || (media.indexOf("screen") != -1)))
                        styleSheet = document.styleSheets[i];
                    else if (mediaType == "object" && (media.mediaText === "" || (media.mediaText.indexOf("screen") != -1)))
                        styleSheet = document.styleSheets[i];

                    if (typeof styleSheet != "undefined") {
                        break;
                    }
                }
            }

            if (typeof styleSheet == "undefined") {
                var styleSheetElement = document.createElement("style");
                styleSheetElement.type = "text/css";

                document.getElementsByTagName("head")[0].appendChild(styleSheetElement);

                for (i = 0; i < document.styleSheets.length; i++) {
                    if (document.styleSheets[i].disabled) {
                        continue;
                    }
                    styleSheet = document.styleSheets[i];
                }

                media = styleSheet.media;
                mediaType = typeof media;
            }

            if (mediaType == "string") {
                for (i = 0; i < styleSheet.rules.length; i++) {
                    if (styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                        styleSheet.rules[i].style.cssText = style;
                        return;
                    }
                }

                styleSheet.addRule(selector, style);
            } else if (mediaType == "object") {
                var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
                for (i = 0; i < styleSheetLength; i++) {
                    if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
                        styleSheet.cssRules[i].style.cssText = style;
                        return;
                    }
                }

                styleSheet.insertRule(selector + "{" + style + "}", styleSheetLength);
            }
        }

        function _on(event, handler) {
            if (event && handler) {
                if (document.addEventListener)
                    document.addEventListener(event, handler);
                else if (document.attachEvent)
                    document.attachEvent(event, handler);
                else
                    throw "Event Listener is not support in your browswer";
            } else {
                throw "Event and handler required to bind events"
            }
        }
        var instance = {

            base64: function(value) {
                return base64(value);
            },
            creditCardNumber: function(value) {
                return creditCardNumber(value);
            },
            configure: function(options) {
                return configure(options);
            },
            email: function(value) {
                return email(value);
            },
            emails: function(value) {
                return emails(value);
            },
            formordiv: function(id, options) {
                return _basedOnId(id, options);
            },
            ipaddress: function(value) {
                return ipaddress(value);
            },
            name: function(value) {
                return name(value);
            },
            numberic: function(value) {
                return number(value);
            },
            page: function(options) {
                return page(options);
            },
            password: function(value) {
                return password(value);
            },
            phone: function(value) {
                return phone(value);
            },
            phonewithextension: function(value) {
                return phonewithextension(value);
            },
            text: function(value) {
                return text(value);
            },
            url: function(value) {
                return url(value);
            },
            urls: function(value) {
                return urls(value);
            },
            zip: function(value) {
                return zip(value);
            }
        };

        init();
        return instance;
    }

    function createInstance(options) {
        return new Validator(options);
    }
    return {
        getInstance: function(options) {
            if (!instance) instance = createInstance(options);
            else instance.configure(options);
            return instance;
        }
    };

})();
