<%@ Page Language="C#" AutoEventWireup="false" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>JavaScript Module Pattern</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <input type="button" id="btnLucky" value="Get My Lucky Number" /><br />
        Your lucky Number is:
        <label id="luckyNum">
        </label> <br />
          <input type="button" id="btnColor" value="Get My Lucky Color" /><br />
        Your lucky Color is:
        <label id="lblColor">
        </label>
    </div>
    </form>
</body>
</html>

<script src="jquery-1.5.1.js" type="text/javascript"></script>

<script src="module.pattern.js" type="text/javascript"></script>

<script type="text/javascript">
    $(function () {
        $("#btnLucky").click(function(){
            $("#luckyNum").text(SearchEngine.getYourLuckyNumber());
        });
        
        $("#btnColor").click(function(){
            $("#lblColor").text(SearchEngine.subSearch.getYourLuckyColor());
        });
        
     });
</script>

