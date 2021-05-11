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
$('#bodyContainer').hide();
$('#bodyTable').hide();
$('#home').hide();

 
  $('#Adderall').click(function(){
    $('p').hide()
    $('h1').text("Adderall")
    $('#bodyContainer').show();
    $('#body').attr("src","adderall.jpg")
    $('#bodyTable').show()
    $('#home').show();
    //Bodymap
    //Table Info
    
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
    $('h1').text("Ibuprofen")
    $('#bodyContainer').show();
    $('#body').attr("src","ibuprofen.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()

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
    $('#bodyContainer').show();
    $('#body').attr("src","alchohol.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()

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
    $('#bodyContainer').show();
    $('#body').attr("src","caffeine.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Brain")
    $('#g1').text("ADORA2A")
    $('#c1').text("****")

    $('#t2').text("Hippocampus")
    $('#g2').text("ADORA2A ")
    $('#c2').text("****")

    $('#t3').text("Thymus")
    $('#g3').text("ADORA2A")
    $('#c3').text("****")

    $('#t4').toggle()
    $('#g4').toggle()
    $('#c4').toggle()

  })

  $('#Cannabis').click(function(){
    $('h1').text("Cannabis")
    $('#bodyContainer').show();
    $('#body').attr("src","cannabis.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()

    $('#t1').text("Brain")
    $('#g1').text("CB1 receptor, CB2 receptor")
    $('#c1').text("****")

    $('#t2').text("Eye")
    $('#g2').text("CB1 receptor")
    $('#c2').text("****")

    $('#t3').text("Blood")
    $('#g3').text("CB2 receptor")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Kidney")
    $('#g4').text("CB1")
    $('#c4').text("****")

 
  })

  $('#Cocaine').click(function(){
    $('h1').text("Cocaine")
    $('#bodyContainer').show();
    $('#body').attr("src","cocaine.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()

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
    $('#bodyContainer').show();
    $('#body').attr("src","dmt.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Brain")
    $('#g1').text("dopamine D1 ")
    $('#c1').text("****")

    $('#t2').text("Placenta")
    $('#g2').text("HTR1B -4, 5-HT1D ")
    $('#c2').text("****")

    $('#t3').text("eye")
    $('#g3').text("HT1D 4")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Colon")
    $('#g4').text("HT2B r")
    $('#c4').text("****")

  })

  $('#Ecstasy').click(function(){
    $('h1').text("Ecstasy")
    $('#bodyContainer').show();
    $('#body').attr("src","esctasy.jpg")
    $('#bodyTable').show()
    $('#home').show();
    //Bodymap
    //Table Info
    $('#p').text("Description to be written")
    
    $('#t1').text("Blood platelet")
    $('#g1').text("VMAT2")
    $('#c1').text("****")

    $('#t2').text("Brain")
    $('#g2').text("VMAT2")
    $('#c2').text("****")

    $('#t3').text("Uterus")
    $('#g3').text("VMAT2")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Left ventricle")
    $('#g4').text("MAO-A")
    $('#c4').text("***")
  })

  $('#Fantanyl').click(function(){
    $('h1').text("Fantanyl")
    $('#bodyContainer').show();
    $('#body').attr("src","fentanyl.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Hippocampus")
    $('#g1').text("G-protein receptor")
    $('#c1').text("****")

    $('#t2').text("Placenta")
    $('#g2').text("G-protein receptor")
    $('#c2').text("****")

    $('#t3').text("Cerebral cortex")
    $('#g3').text("OPRD1")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Kidney")
    $('#g4').text("OPRD1")
    $('#c4').text("****")
  })

  $('#Heroin').click(function(){
    $('h1').text("Heroin")
    $('#bodyContainer').show();
    $('#body').attr("src","heroin.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Hippocampus")
    $('#g1').text("G-protein receptor")
    $('#c1').text("****")

    $('#t2').text("Placenta")
    $('#g2').text("G-protein receptor")
    $('#c2').text("****")

    $('#t3').text("Blood")
    $('#g3').text("MOR")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Brain")
    $('#g4').text("MOR")
    $('#c4').text("****")
  })

  $('#Ketamine').click(function(){
    $('h1').text("Ketamine")
    $('#bodyContainer').show();
    $('#body').attr("src","ketamine.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Brain")
    $('#g1').text("NMDAR,AMPA")
    $('#c1').text("****")

    $('#t2').text("Cerebellum")
    $('#g2').text("NMDAR,AMPA")
    $('#c2').text("****")

    $('#t3').text("Leukocyte ")
    $('#g3').text("BDNF")
    $('#c3').text("****")

    $('#t4').hide()
    $('#g4').hide()
    $('#c4').hide()
  })

  $('#Morphine').click(function(){
    $('h1').text("Morphine")
    $('#bodyContainer').show();
    $('#body').attr("src","morphone.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Heart")
    $('#g1').text("GPCR RECEPTOR")
    $('#c1').text("****")

    $('#t2').text("Lung")
    $('#g2').text("GPCR RECEPTOR")
    $('#c2').text("****")

    $('#t3').text("Trachea")
    $('#g3').text("GPCR RECEPTOR")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("Gastroesophageal cancer cell")
    $('#g4').text("GPCR RECEPTOR")
    $('#c4').text("****")
  })
  $('#Nicotine').click(function(){
    $('h1').text("Nicotine")
    $('#bodyContainer').show();
    $('#body').attr("src","nicotine.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Hippocampus")
    $('#g1').text("NACHR")
    $('#c1').text("****")

    $('#t2').text("Brain")
    $('#g2').text("NACHR")
    $('#c2').text("****")

    $('#t3').hide()
    $('#g3').hide()
    $('#c3').hide()

    $('#t4').hide()
    $('#g4').hide()
    $('#c4').hide()
  })
  $('#Steroids').click(function(){
    $('h1').text("Steroids")
    $('#bodyContainer').show();
    $('#body').attr("src","steroids.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Blood")
    $('#g1').text("ARr")
    $('#c1').text("****")

    $('#t2').text("Brain")
    $('#g2').text("AR")
    $('#c2').text("****")

    $('#t3').text("Liver")
    $('#g3').text("AR")
    $('#c3').text("****")

    $('#t4').text("Prostate gland epithelium")
    $('#g4').text("AR")
    $('#c4').text("****")
  })
  $('#Tylenol').click(function(){
    $('h1').text("Tylenol")
    $('#bodyContainer').show();
    $('#body').attr("src","tylenol.jpg")
    $('#bodyTable').show()
    $('#home').show();
    $('p').hide()
    
    $('#t1').text("Adrenal gland")
    $('#g1').text("COX-2")
    $('#c1').text("****")

    $('#t2').text("Cervical carcinoma cell")
    $('#g2').text("COX-2")
    $('#c2').text("****")


    $('#t3').text("Placenta")
    $('#g3').text("AM404")
    $('#c3').text("****")

    $('#t4').show()
    $('#g4').show()
    $('#c4').show()

    $('#t4').text("T-cell chronic lymphocytic leukemia cell")
    $('#g4').text("AM404")
    $('#c4').text("****(")
  })
  $('#home').click(function(){
    $('#home').hide();
  })
});