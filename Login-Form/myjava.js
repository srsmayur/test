
var editor;

$(document).ready(function() {
    $("#btn").click(function(e){
        var jsonData = {};
   
      var formData = $("#myform").serializeArray();
     // console.log(formData);
   
      $.each(formData, function() {
           if (jsonData[this.name]) {
              if (!jsonData[this.name].push) {
                  jsonData[this.name] = [jsonData[this.name]];
              }
              jsonData[this.name].push(this.value || '');
          } else {
              jsonData[this.name] = this.value || '';
          }
   
   
      });
      console.log(jsonData);
       $.ajax(
       {
           url : "people.json",
           type: "POST",
           data : jsonData,
   
       });
       e.preventDefault(); 
   });


  editor = new $.fn.dataTable.Editor( {
        ajax: "people.json",
        table: "#userdata",
        fields: [ {
                label: "First name:",
                name: "first_name"
            }, {
                label: "Second name:",
                name: "last_name"
            }, {
                label: "Position:",
                name: "position"
            },{
                label: "Salary:",
                name: "salary"
            }
        ]
    } );
      
  $('#userdata').on( 'click', 'tbody td:not(:first-child)', function (e) {
    editor.inline( this );
} );

$('#userdata').DataTable( {
  dom: "Tfrtip",
  ajax: "people.json",
  columns: [    
      { data: null, defaultContent: '', orderable: false },
      { data: "first_name" },
      { data: "last_name" },
      { data: "position" },
      { data: "salary", render: $.fn.dataTable.render.number( ',', '.', 0, 'Rs.' ) }
  ],
  order: [ 1, 'asc' ],
  tableTools: {
      sRowSelect: "os",
      sRowSelector: 'td:first-child',
      aButtons: [
          { sExtends: "editor_create", editor: editor },
          { sExtends: "editor_edit",   editor: editor },
          { sExtends: "editor_remove", editor: editor }
      ]
  }
} );
} );
