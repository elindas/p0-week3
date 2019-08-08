
function dataHandling(argumen){
    
  var displayData= '';
    
  for(var i=0; i<=argumen.length-1; i++){
    
    console.log('Nomor ID : '+argumen[i][0]);
    console.log('Nama Lengkap : '+argumen[i][1]);
    console.log('TTL : '+argumen[i][2]+' '+argumen[i][3]);
    console.log('Hobi : '+argumen[i][4]);
    console.log('\n');
  }
  return displayData;
  
}


console.log(dataHandling([
                  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
              ]));

/*  Output

  Nomor ID:  0001
  Nama Lengkap:  Roman Alamsyah
  TTL:  Bandar Lampung 21/05/1989
  Hobi:  Membaca
  
  Nomor ID:  0002
  Nama Lengkap:  Dika Sembiring
  TTL:  Medan 10/10/1992
  Hobi:  Bermain Gitar
  
  Nomor ID:  0003
  Nama Lengkap:  Winona
  TTL:  Ambon 25/12/1965
  Hobi:  Memasak
  
  Nomor ID:  0004
  Nama Lengkap:  Bintang Senjaya
  TTL:  Martapura 6/4/1970
  Hobi:  Berkebun

  */
  


