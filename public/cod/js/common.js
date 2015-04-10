

        function InsertTable(kwargs)
        {
            /*REQUEST DATA FROM THE SERVER*/
            $.post("/search", 
                {
                    "by": kwargs["by"],
                    "value": kwargs["value"],
                    "collection": kwargs["collection"],
                    "cols": kwargs["cols"]
                }, 
                function(data)
                {
                    result = JSON.parse(data);
                    
                    /*El resultado es un string con la tabla en html*/
                    var table = Table({cols:kwargs["cols"],
                                        values:result,
                                        class:kwargs["class"],
                                        tableid:kwargs["itemid"]
                                        });
                    
                    $("#" + kwargs["itemid"]).replaceWith(table);
                    
                }
            );           
        }
        
        function Table(kwargs)
        {
            html = "<table class='"+ kwargs["class"] + "' id='" + kwargs["tableid"] + "'><thead>";
        
            for(col in kwargs['cols'])
            {
                if(col[0] == '@')
                {
                    html += "<td>" + kwargs['cols'][col] + "</td>";
                    continue;
                }
                
                if(typeof kwargs['cols'][col] == "object")
                    for(var it in kwargs['cols'][col])
                        html += "<td>" + kwargs['cols'][col][it] + "</td>";
                else
                    html += "<td>" + kwargs['cols'][col] + "</td>";
            }
            
            html += "</thead>";
            
            /*TABLE CONTENTS*/
            for(row in kwargs['values'])
            {
                html += "<tr>";
            
                for(col in kwargs['cols'])
                {
                    if(col[0] == '@')
                    {
                        temp = col.replace('@', '');
                        html += "<td>" + temp.replace('%', kwargs['values'][row]['objectId']) + "</td>";
                    }
                    else
                    {
                        html += "<td>" + kwargs['values'][row][col] + "</td>";
                    }
                    
                }
                    
                html += "</tr>";
            }
            
            html += "</table>";
            
            return html;
        }
        
        function Import(filename)
        {
            return "FILECONTENTS";
        }
