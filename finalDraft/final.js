// Table code found at https://www.w3schools.com/howto/howto_js_filter_table.asp 

function myFunction() { 
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      } 
    }
    
  }
$(document).ready(function(){

$('#bodyTable').hide();
$('#home').hide();
 
  $('#Adderall').click(function(){
    $('h1').text("Adderall")
    $('#bodyTable').show()
    $('#home').show();
    //Bodymap
    //Table Info
    $('#p').text("Description to be written")
    
    $('#t1').text("Brain")
    $('#g1').text("VMAT2")
    $('#c1').text("****")

    $('#t2').text("Blood Platelet")
    $('#g2').text("VMAT2 ")
    $('#c2').text("****")

    $('#t3').text("Lung")
    $('#g3').text("TAAR1")
    $('#c3').text("****")

    $('#t4').text("Uterus")
    $('#g4').text("VMAT2")
    $('#c4').text("****")

  })

  $('#Advil').click(function(){
    $('#p').text("Description to be written")
    $('h1').text("Ibuprofen")
    $('#bodyTable').show()

    $('#t1').text("Uterine adenocarcinoma cell")
    $('#g1').text("COX2")
    $('#c1').text("****")

    $('#t2').text("Placenta")
    $('#g2').text("COX1")
    $('#c2').text("****")

    $('#t3').text("Liver")
    $('#g3').text("COX2")
    $('#c3').text("****")

    $('#t4').text("Cardiac muscle")
    $('#g4').text("COX1")
    $('#c4').text("****")
   
  })
  $('#Alchohol').click(function(){
    $('h1').text("Alchohol")
    $('#p').text("Description to be written")
    $('#bodyTable').show()

    $('#t1').text("Brain, Frontal Lobe, Hypothamalus ")
    $('#g1').text("GABAa")
    $('#c1').text("****")

    $('#t2').text("Brain, Hippocampus")
    $('#g2').text("AMPA")
    $('#c2').text("****")

    $('#t3').text("Testis")
    $('#g3').text("GABAa")
    $('#c3').text("****")

    $('#t4').text("Rectal cancer cell")
    $('#g4').text("KLH2")
    $('#c4').text("***")
   
    
  })
  $('#Caffeine').click(function(){
    $('h1').text("Caffeine")
    $('#p').text("Description to be written")
    $('#bodyTable').show()
  })
  $('#Cannabis').click(function(){
    $('h1').text("Cannabis")
    $('#p').text("Description to be written")
    $('#bodyTable').show()

    $('#t1').text("Brain")
    $('#g1').text("CB1 receptor, CB2 receptor")
    $('#c1').text("****")

    $('#t2').text("Eye")
    $('#g2').text("CB1 receptor")
    $('#c2').text("****")

    $('#t3').text("Blood")
    $('#g3').text("CB2 receptor")
    $('#c3').text("****")

    $('#t4').text("Kidney")
    $('#g4').text("CB1")
    $('#c4').text("****")

 
  })
  $('#Cocaine').click(function(){
    $('h1').text("Cocaine")
    $('#p').text("Description to be written")
    $('#bodyTable').show()

    $('#t1').text("Brain, Amygdala, Hippocampus")
    $('#g1').text("5-HT3A,5-HT3B")
    $('#c1').text("****")

    $('#t2').text("Small Intestine")
    $('#g2').text("5-HT3B")
    $('#c2').text("****")

    $('#t3').text("Blood")
    $('#g3').text("5-HT3A")
    $('#c3').text("****")

    $('#t4').text("Lung")
    $('#g4').text("5-HT3A")
    $('#c4').text("****")
   
    
  
  })
  $('#DMT').click(function(){
    $('h1').text("DMT")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Ecstasy').click(function(){
    $('h1').text("Ecstasy")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Fantanyl').click(function(){
    $('h1').text("Fantanyl")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Heroin').click(function(){
    $('h1').text("Heroin")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Ketamine').click(function(){
    $('h1').text("Ketamine")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Morphine').click(function(){
    $('h1').text("Morphine")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Nicotine').click(function(){
    $('h1').text("Nicotine")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Steroids').click(function(){
    $('h1').text("Steroids")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#Tylenol').click(function(){
    $('h1').text("Tylenol")
    $('#bodyTable').show()
    loadDrug()
  })
  $('#home').click(function(){
    $('#home').hide();
  })
});