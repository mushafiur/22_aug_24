/*  ======= JQ =======  */ 

$(document).ready(function(){

// ex1
	$( "#draggable" ).draggable();

// ex2
	$('#draggable1').draggable({axis: "y"});

// ex3
$( "#draggable2" ).draggable();
$( "#droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
       }
  });

  // ex4

  $('#resizable').resizable({
  	animate: true
  });	

// ex5

  $( "#selectable" ).selectable();

// ex6

  $( "#sortable" ).sortable();

// ex7

  $( "#accordion" ).accordion({
      collapsible: true
    });

// ex8

var availableTags = [
	"HTML",
	"CSS",
	"bootstrap",
	"javaScript",
	"jQuery",

	];


  $( "#tags" ).autocomplete({
      source: availableTags
    });


  // ex9

   // $( ".controlgroup" ).controlgroup()
   //  $( ".controlgroup-vertical" ).controlgroup({
   //    "direction": "vertical"
   //  });

   // ex10

    $( "#datepicker" ).datepicker();
    $( "#anim" ).on( "change", function() {
      $( "#datepicker" ).datepicker( "option", "showAnim", $( this ).val() );
    });


// ex11

     $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });
 
    $( "#opener" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });

    // ex12

     var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );

    // ex13

     $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    $( "#number" )
      .selectmenu()
      .selectmenu( "menuWidget" )
        .addClass( "overflow" );
 
    $( "#salutation" ).selectmenu();

    // ex14

    $( "#slider" ).slider();

    // ex15

    var spinner = $( "#spinner" ).spinner();
 
    $( "#disable" ).on( "click", function() {
      if ( spinner.spinner( "option", "disabled" ) ) {
        spinner.spinner( "enable" );
      } else {
        spinner.spinner( "disable" );
      }
    });
    $( "#destroy" ).on( "click", function() {
      if ( spinner.spinner( "instance" ) ) {
        spinner.spinner( "destroy" );
      } else {
        spinner.spinner();
      }
    });
    $( "#getvalue" ).on( "click", function() {
      alert( spinner.spinner( "value" ) );
    });
    $( "#setvalue" ).on( "click", function() {
      spinner.spinner( "value", 5 );
    });
 
    $( "button" ).button();


});