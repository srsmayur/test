
$(document).ready(function() {
    
    var col_name = ["id","first_name","last_name","position","email","office","extn","age","salary","start_date"];
    data_table= $("#table-4").dataTable({
      //  "bDestroy": true,
      //  "bProcessing": true,
      //  "bServerSide": true,
        "sAjaxSource": "data_tbl.json",
        "iDisplayLength": parseInt('10'),
        "sPaginationType": "bootstrap",
        "sDom": "<'row'<'col-xs-6 col-left'l><'col-xs-6 col-right'<'export-data'T>f>r>t<'row'<'col-xs-6 col-left'i><'col-xs-6 col-right'p>>",
        "aaSorting": [[5, 'desc']],
        "aoColumns": [
        {
            "bVisible": false,
            "bSortable": true, //id
        },    
        {
            "bSortable": true, //first_name
        },
        {
            "bSortable": true, //last_name
        },
        {
            "bVisible": false,
            "bSortable": true, //position
        },
        {
            "bSortable": true, //email
        },
        {
        //  "bVisible": false,
            "bSortable": true, //office
        },
        {
            "bVisible": false,
            "bSortable": true, //extn
        },
        {
            "bSortable": true, //age
        },
        {
            "bSortable": true, //salary
        },
        {
            "bVisible": false,
            "bSortable": true, //start_date
        },
        {
            "bSortable": false, //Action

            "mRender": function(data, type, full) {
                var action,edit_,show_,delete_;
                action = '<div class = "hiddenRowData">';

                for(var i=0; i< col_name.length; i++ ){

                    action += '<input type = "hidden"  name = "' + col_name[i] + '"       value = "' + full[i] + '" / >';
                }
                action += '</div>';

                action += ' <a data-name = "'+full[0]+'" data-id="'+ data +'" title="Edit" class="edit-billing_subscription btn btn-default btn-sm tooltip-primary" data-original-title="Edit" title="" data-placement="top" data-toggle="tooltip">Edit</i>&nbsp;</a>';

                return action;
            }
        },
        {
            "bSortable": false, //Remove

            "mRender": function(data, type, full) {
                var action,edit_,show_,delete_;
                action = '<div class = "hiddenRowData">';

                for(var i=0; i< col_name.length; i++ ){

                    action += '<input type = "hidden"  name = "' + col_name[i] + '"       value = "' + full[i] + '" / >';
                }
                action += '</div>';

                action += ' <a data-name = "'+full[0]+'" data-id="'+ data +'" title="Remove" class="edit-billing_subscription btn btn-default btn-sm tooltip-primary" data-original-title="Remove" title="" data-placement="top" data-toggle="tooltip">Remove</i>&nbsp;</a>';

                return action;
            }
        },
        ]
    });   
    $('#add-new-billing_subscription').click(function(ev){
        ev.preventDefault();
        $('#add-new-billing_subscription-form').trigger("reset");
        
        $('#add-new-modal-billing_subscription h4').html('Add New data');
        $('#add-new-modal-billing_subscription').modal('show');
       
    });

    $('table tbody').on('click','.edit-billing_subscription',function(e){
        e.preventDefault();
        e.stopPropagation();

        $('#add-new-billing_subscription-form').trigger("reset");
        $('#add-new-modal-billing_subscription').modal('show');

        var $this = $(this);
        $.each(col_name, function(index,col_name) {
            var val = $this.prev("div.hiddenRowData").find("input[name='"+col_name+"']").val();
            $("#add-new-billing_subscription-form [name='"+col_name+"']").val(val!='null'?val:'');
            
        });
       
        $("#add-new-billing_subscription-form [name='id']").val(0);

        $('#add-new-modal-billing_subscription h4').html('Edit Details');

    });

    $(".pagination a").click(function (ev) {
        replaceCheckboxes();
    });

    $("#billing_subscription-update").click(function(e){
        var jsonData = {};
   
      var formData = $("#add-new-billing_subscription-form").serializeArray();
        console.log(formData);
   
      
   });

   var table = $('#table-4').dataTable();

   $('#table-4 tbody').on('click','img.icon-delete',function(){
       table 
       .row( $(this).parents('tr'))
       .remove()
       .draw();
   });
   
   $(".del").bind( "click", function(event) {
    var target_row = $(this).closest("tr").get(0); // this line did the trick
    var aPos = oTable.fnGetPosition(target_row); 

    oTable.fnDeleteRow(aPos);
});
       
});