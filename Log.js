/**
 * License: The MIT License (MIT) - Copyright (c) 2016 YummyLayers
 * Date: 21.02.2016
 */
!function(global){
    'use strict';

    var handlers = [];
    var offTypes = [];

    function callHandler(type, message){
        handlers.forEach(function(handler){
            if(typeof handler.handlerTypes === 'string'){
                if(handler.handlerTypes == type) handler.handlerCallback(message);
            }else if(handler.handlerTypes instanceof Array){
                handler.handlerTypes.forEach(function(handlerType){
                    if(handlerType == type) handler.handlerCallback(message);
                });
            }
        });
    }

    function isOffType(type){
        if(typeof offTypes === 'string'){
            if(offTypes == type || offTypes == 'all') return true;
        }else{
            for(var i in offTypes ){
                if(offTypes[i] == type) return true;
            }
        }
        return false;
    }

    var Log = {

        types: {
            ALL: 'all',
            DEBUG: 'debug', INFO: 'info', WARN: 'warn', WTF: 'wtf', ERROR: 'error',
            ASSERT: 'assert', COUNT: 'count', DIR: 'dir', GROUP: 'group', PROFILE: 'profile', TIME: 'time'
        },

        /*
         * @param {string} message
         */
        d: function(message){
            if(!isOffType('debug')){
                callHandler('debug', Array.prototype.join.call(arguments, " "));
                console.log.apply(console, arguments);
            }
            return this;
        },

        i: function(message){
            if(!isOffType('info')){
                callHandler('info', Array.prototype.join.call(arguments, " "));
                console.info.apply(console, arguments);
            }
            return this;
        },

        w: function(message){
            if(!isOffType('warn')){
                callHandler('warn', Array.prototype.join.call(arguments, " "));
                console.warn.apply(console, arguments);
            }
            return this;
        },

        wtf: function(string){
            if(!isOffType('wtf')){
                callHandler('wtf', string);
                console.log(
                    "%c" + string,
                    'color: #fff; font-size: 20px; padding: 10px; background: #000; border-radius: 3px; line-height: 80px;'
                );
            }
            return this;
        },

        e: function(message){
            if(!isOffType('error')){
                callHandler('error', Array.prototype.join.call(arguments, " "));
                console.error.apply(console, arguments);
            }
            return this;
        },

        addHandler: function(types, callback){
            var obj = {};
            obj.handlerTypes = types;
            obj.handlerCallback = callback;
            handlers.push(obj);
            return this;
        },

        assert: function(expression, message, successLog){
            if(!isOffType('assert')){
                if(!expression) this.e('Assertion failed: ' + message);
                else if(successLog) this.i('Assertion succeeded: ' + message);
            }
            return this;
        },

        count: function(label){
            if(!isOffType('count')) console.count.apply(console, arguments);

            return this;
        },

        clear: function(){
            console.clear();
            return this;
        },

        dir: function(object){
            if(!isOffType('dir')) console.dir(object);
            return this;
        },

        dirxml: function(object){
            if(!isOffType('dir')) console.dirxml(object);

            return this;
        },

        group: function(label){
            if(!isOffType('group')) console.group.apply(console, arguments);
            return this;
        },

        groupCollapsed: function(label){
            if(!isOffType('group')) console.groupCollapsed.apply(console, arguments);
            return this;
        },

        groupEnd: function(){
            if(!isOffType('group')) console.groupEnd();
            return this;
        },

        table: function(data, filterColumns){
            if(!isOffType('group')) console.table(data, filterColumns);
            return this;
        },

        profile: function(label){
            if(!isOffType('profile')) console.profile(label);
            return this;
        },

        profileEnd: function(){
            if(!isOffType('profile')) console.profileEnd();
            return this;
        },

        trace: function(object){
            if(!isOffType('profile')) console.trace(object);
            return this;
        },

        time: function(timerName){
            if(!isOffType('time')) console.time(timerName);
            return this;
        },

        timeStamp: function(timerName){
            if(!isOffType('time')) console.timeStamp(timerName);
            return this;
        },

        timeEnd: function(timerName){
            if(!isOffType('time')) console.timeEnd(timerName);
            return this;
        },

        functionTime: function(timerName, callback){
            if(!isOffType('time')) this.time(timerName);
            callback();
            this.timeEnd(timerName);
        },

        off: function(types){
            if(typeof types !== 'string'){
                types.forEach(function(offType){
                    if(offType == 'all'){
                        types = 'all';
                        return;
                    }
                });
            }
            offTypes = types;
        }

    };

    // AMD
    if (typeof define === 'function' && define.amd) define(Log);
    // CommonJS
    else if (typeof module !== 'undefined' && module.exports) module.exports = Log;
    else {
        Log._previous = global.Log;

        Log.noConflict = function () {
            global.Log = Log._previous;
            return Log;
        };

        global.Log = Log;
    }

}(this);