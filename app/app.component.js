/**
 * Created by rxf on 15/12/17.
 */
(function(app){


    var  mockData = [{
        id : 1,
        name : "book1",
        price : "$20.5"
    },{
        id : 2,
        name : "book2",
        price : "$35"
    },{
        id : 3,
        name : "book3",
        price : "$50"
    }];

    app.AppComponent = ng.core
        .Component({
            selector : "my-app",
            templateUrl : "app/app.component.html"
        })
        .Class({
            constructor : function(){
                this.message = "yelingfeng";
                this.books = mockData;
                this.bookInfo = "";
            },
            lookInfo : function(book){

                this.bookInfo = "选择了"+book.name+",价格是:"+book.price;
            }
        });



})(window.app||(window.app= {}));