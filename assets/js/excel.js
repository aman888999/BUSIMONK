document.getElementById('fileForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  const fileInput = document.getElementById('fileUpload');
  const newContentInput = document.getElementById('newContent');

  const file = fileInput.files[0];
  const newContent = newContentInput.value;

  if (!file || !newContent) {
      alert("Please provide both a text file and new content.");
      return;
  }

  // Read the uploaded text file
  const reader = new FileReader();
  reader.onload = function(event) {
      const fileContent = event.target.result;

      // Modify the content by appending new content
      const modifiedContent = fileContent + "\n" + newContent;

      // Create a Blob from the modified content
      const blob = new Blob([modifiedContent], { type: 'text/plain' });

      // Create a download link for the modified file
      const downloadLink = document.getElementById('downloadLink');
      downloadLink.href = URL.createObjectURL(blob);
      downloadLink.download = 'modified_file.txt'; // Filename for the modified file
      downloadLink.style.display = 'block'; // Show the download link
      downloadLink.textContent = "Download Modified File";
  };

  reader.readAsText(file); // Read the file as text
});
