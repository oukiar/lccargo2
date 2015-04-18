function InsertForm(kwargs)
{
    /*REQUEST DATA FROM THE SERVER*/
    $.post("/getrendered", 
        kwargs,
        function(result)
        {
            $("#" + kwargs["itemid"]).replaceWith(result);
        }
    );      
}

function InsertTable(kwargs)
{
    /*REQUEST DATA FROM THE SERVER*/
    $.post("/getrendered", 
        kwargs, 
        function(data)
        {
            $("#" + kwargs["itemid"]).replaceWith(data);
        }
    );           
}
    
function SaveForm(kwargs)
{
    /*REQUEST DATA FROM THE SERVER*/
    $.post("/extends", 
        kwargs, 
        function(data)
        {
            $("#" + kwargs["itemid"]).replaceWith(data);
        }
    );      
}

function GetRendered(kwargs)
{
    /*REQUEST DATA FROM THE SERVER*/
    $.post("/getrenderedby", 
        kwargs, 
        function(data)
        {
            $("#" + kwargs["itemid"]).replaceWith(data);
        }
    );      
}

      
function date_condition()
{
    if($("#filterdate").val() == "Today")
    {
        var nowbegin = new Date();
        var nowend = new Date();
                
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowbegin ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowend ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else if($("#filterdate").val() == "Yesterday")
    {
        var yesterday = new Date();
        yesterday.setDate(yesterday.getDate()-1);
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( yesterday ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( yesterday ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else if($("#filterdate").val() == "This week")
    {
        
        var now = new Date();
        now.setHours(0,0,0);
        
        //dia de la semana
        var nday = now.getDay();  //index zero based
        
        var difftime = nday * (24 * 3600 * 1000); // number of day to substract to current date
        
        nowbegin = new Date(now.getTime() - difftime );
        
        var time = (24 * 3600 * 1000)-1000;
        var nowend = new Date(now.getTime() + (time) );
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowbegin ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowend ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else if($("#filterdate").val() == "This month")
    {
        nowbegin = new Date();
        nowbegin.setDate(1);
        
        var nowend = new Date();
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowbegin ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowend ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else if($("#filterdate").val() == "Last month")
    {
        var nowend = new Date();
        nowend.setDate(0);
        
        var nowbegin = new Date();
        nowbegin.setDate(1);
        nowbegin.setMonth(nowend.getMonth() );
        
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowbegin ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowend ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else if($("#filterdate").val() == "Current year")
    {
        var now = new Date();
        now.setHours(0,0,0);
        
        nowbegin = new Date(now.getTime() - (1000) );
        nowbegin.setDate( 1 );
        nowbegin.setMonth(0);
        
        var nowend = new Date(now.getTime() );
        nowend.setHours(23,59,59);
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowbegin ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( nowend ).format("MM[/]DD[/]YYYY")}}
                };
    }
    
    return {};
}

function filter_conditions()
{
    //DATE INTERVAL
    if($("#filterby").val() == "Date")
    {
        var begindate = new Date($("#searchtext").val());
        var enddate = new Date($("#filterdate").val());
        
        return {
                greaterThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( begindate ).format("MM[/]DD[/]YYYY")}},
                lessThanOrEqualTo: {'ReceiptDate' : {__type:"Date", iso:moment( enddate ).format("MM[/]DD[/]YYYY")}}
                };
    }
    else
    { 
        return date_condition();
    }    
}

function filter_like()
{
    var filter = $("#filterby").val();
    
    if($("#filterby").val() == "Shipper" || $("#filterby").val() == "Consignee")
    {
        var dic = {};
        dic[$("#filterby").val()] = {"Name":$("#searchtext").val()};
        return dic;
    }
    else
    {
        var dic = {};
        dic[$("#filterby").val()] = $("#searchtext").val();
        return dic;
    }
    
    
}


