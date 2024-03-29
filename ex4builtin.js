function dataHandling2(input) {
  // OUTPUT 1

  input.splice(1, 1, "Roman Alamsyah Elsharawy");
  input.splice(2, 1, "Provinsi Bandar Lampung");
  input.splice(4, 1, "Pria", "SMA International Metro");
  console.log(input);

  // OUTPUT 2

  var tanggal = input[3];
  var splitTanggal = tanggal.split("/");

  switch (splitTanggal[1]) {
    case "01": {
      console.log(" Januari ");
      break;
    }
    case "02": {
      console.log(" Februari ");
      break;
    }
    case "03": {
      console.log(" Maret ");
      break;
    }
    case "04": {
      console.log(" April ");
      break;
    }
    case "05": {
      console.log(" Mei ");
      break;
    }
    case "06": {
      console.log(" Juni ");
      break;
    }
    case "07": {
      console.log(" Juli ");
      break;
    }
    case "08": {
      console.log(" Agustus ");
      break;
    }
    case "09": {
      console.log(" September ");
      break;
    }
    case "10": {
      console.log(" Oktober ");
      break;
    }
    case "11": {
      console.log(" November ");
      break;
    }
    case "12": {
      console.log(" Desember ");
      break;
    }
    default: {
      console.log(" Bulan Invalid ");
    }
  }

  // OUTPUT 3
  var sortTanggal = splitTanggal.sort(function(a, b) {
    return b - a;
  });
  console.log(sortTanggal);

  var joinTanggal = tanggal.split("/").join("-");
  console.log(joinTanggal);

  var nama = input.splice(1, 1);
  console.log(nama[0].slice(0, 15));
}


// Test Case
var input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
