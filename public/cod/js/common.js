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
