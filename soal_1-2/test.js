//1
//Filter karyawan yang tidak dipilih (tidak ada dalam selected_employees) dari daftar semua karyawan (employees).
const employees = [
    { "nik": "1", "name": "ABIYYU" },
    { "nik": "2", "name": "ADHIKA" },
    { "nik": "3", "name": "AFRIE" },
    { "nik": "4", "name": "ALAM" }
];
  
const selected_employees = [
  { "nik": "1", "name": "ABIYYU" },
  { "nik": "2", "name": "ADHIKA" }
];


//Menggunakan metode filter() untuk mendapatkan karyawan yang tidak terpilih  
const unselected_employees = employees.filter(employee => {
  return !selected_employees.some(selectedEmployee => 
    selectedEmployee.nik === employee.nik && selectedEmployee.name === employee.name
  );
});
  
console.log(unselected_employees);

//2 
// Menggandakan nilai amount pada objek-objek dalam benefit berdasarkan kriteria yang diberikan dalam kriteria.
const benefit = [
  {
    id: 1,
    name: "Gaji Pokok",
    amount: 3000000,
    unit: 12
  },
  {
    id: 2,
    name: "Tunjangan Hari Raya (THR)",
    amount: 0,
    unit: 1
  },
  {
    id: 3,
    name: "Uang makan",
    amount: 100000,
    unit: 12
  },
  {
    id: 4,
    name: "Tunjangan shift",
    amount: 0,
    unit: 0.2
  },
];

const kriteria = [{'Gaji Pokok':['Tunjangan Hari Raya (THR)','Tunjangan shift']}];

// Fungsi untuk mengkopi jumlah benefit berdasarkan kriteria yang diberikan
function copyAmountBasedOnCriteria(benefit, kriteria) {
  const copiedBenefit = [...benefit];

  kriteria.forEach(criteria => {
    const sourceBenefitName = Object.keys(criteria)[0];
    const targetBenefitNames = criteria[sourceBenefitName];

    // Mencari benefit yang menjadi sumber jumlah
    const sourceBenefit = copiedBenefit.find(item => item.name === sourceBenefitName);
    if (!sourceBenefit) return;

    const sourceAmount = sourceBenefit.amount;

    // Mengganti jumlah benefit pada benefit-target dengan jumlah dari benefit-sumber
    targetBenefitNames.forEach(targetBenefitName => {
      const targetBenefit = copiedBenefit.find(item => item.name === targetBenefitName);
      if (targetBenefit) {
        targetBenefit.amount = sourceAmount;
      }
    });
  });

  return copiedBenefit;
}

const output = copyAmountBasedOnCriteria(benefit, kriteria);
console.log(output);
