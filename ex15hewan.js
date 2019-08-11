function groupAnimals(animals) {

    var output = [];
    var index = 0;   // variabel untuk indeks array terluar dari output
    animals.sort();
    
    
    for (var i = 0; i < animals.length; i++) {
      
      if (output.length === 0) { // jika array masih kosong
        output.push([animals[i]]);
     
      } else if (output[index][0][0] === animals[i][0]) { // jika karakter pertama dari nama hewan sama
        output[index].push(animals[i]); //push ke indeks array yang sama
      
      } else {
        output.push([animals[i]]);  // push ke indeks array baru
        
        index++; // indeks array output ditambah 1
      }
    }
    return output;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kancil', 'kuda'], ['unta'] ]