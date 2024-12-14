document.getElementById('saveData').addEventListener('click', function () {
    // Get email value
    const email = document.getElementById('mail').value;

    if (email === "") {
        alert("Please enter your email!");
        return;
    }

    // Prepare data for the Excel sheet
    const data = [
        ["Email"],  // Column headers
        [email]     // User email
    ];

    // Create a new workbook and worksheet
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.aoa_to_sheet(data);

    // Append worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Newsletter");

    // Save the file
    XLSX.writeFile(workbook, "Newsletter_Data.xlsx");
    
    // alert("Data saved locally to Excel sheet!");
});