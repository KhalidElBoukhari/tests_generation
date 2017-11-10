var ann_fns = require("annotated_functions.js");
var assert = require("chai").assert;

describe("Generated tests", function(){

    describe("Generated tests for testfunction1", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction1(1,"test"), "String");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction1(1), "String");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction1("test",1), "String");
        });

    });
    describe("Generated tests for testfunction2", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction2(1,1), "Number");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction2(1), "Number");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction2("test","test"), "Number");
        });

    });
    describe("Generated tests for testfunction3", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction3(true,true), "undefined");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction3(true), "undefined");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction3("test","test"), "undefined");
        });

    });
    describe("Generated tests for testfunction4", function(){
        it("with correct parameters", function(){
            assert.typeOf(ann_fns.testfunction4({},"test",1), "Array");
        });
        it("with missing parameters", function(){
            assert.typeOf(ann_fns.testfunction4({}), "Array");
            assert.typeOf(ann_fns.testfunction4({},"test"), "Array");
        });
        it("with fake parameters", function(){
            assert.typeOf(ann_fns.testfunction4("test",1,"test"), "Array");
        });

    });
});