        function show5(){
        if (!document.layers&&!document.all&&!document.getElementById)
        return

        var Digital=new Date()
        var hours=Digital.getHours()
        var minutes=Digital.getMinutes()
        var seconds=Digital.getSeconds()

        var dn="PM"
        if (hours<12)
        dn="AM"
        if (hours>12)
        hours=hours-12
        if (hours==0)
        hours=12

        if (minutes<=9)
        minutes="0"+minutes
        if (seconds<=9)
        seconds="0"+seconds
        myclock="<font size='10' face='Arial'><b><font size='6'>&nbsp;&nbsp;&nbsp;</font>"+hours+":"+minutes+":"
        +seconds+" "+dn+"</b></font>"
        if (document.layers){
        document.layers.liveclock.document.write(myclock)
        document.layers.liveclock.document.close()
        }
        else if (document.all)
        liveclock.innerHTML=myclock
        else if (document.getElementById)
        document.getElementById("relojvivo").innerHTML=myclock
        setTimeout("show5()",1000)
        }


        window.onload=show5
        //-->