document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-input-form");
    var resumeContent = document.getElementById("resume-content");
    var copyLinkButton = document.getElementById("copyLinkButton");
    var downloadPdfButton = document.getElementById("downloadPdfButton");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Gather form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var username = document.getElementById("username").value;
        var degree = document.getElementById("degree").value;
        var university = document.getElementById("university").value;
        var graduationYear = document.getElementById("graduation-year").value;
        var skills = document.getElementById("skills").value;
        var jobTitle = document.getElementById("job-title").value;
        var company = document.getElementById("company").value;
        var workYears = document.getElementById("work-years").value;
        var jobDescription = document.getElementById("job-description").value;
        // Create resume content
        var resumeText = "\n            Name: ".concat(name, "\n            Email: ").concat(email, "\n            Phone: ").concat(phone, "\n            Username: ").concat(username, "\n            Degree: ").concat(degree, "\n            University: ").concat(university, "\n            Graduation Year: ").concat(graduationYear, "\n            Skills: ").concat(skills, "\n            Job Title: ").concat(jobTitle, "\n            Company: ").concat(company, "\n            Years Worked: ").concat(workYears, "\n            Job Description: ").concat(jobDescription, "\n        ");
        // Display resume content
        resumeContent.innerText = resumeText;
        // Handle PDF download
        downloadPdfButton.addEventListener("click", function () {
            var doc = new window.jspdf.jsPDF();
            doc.text(resumeText, 10, 10);
            doc.save("resume.pdf");
        });
        // Handle copy link
        copyLinkButton.addEventListener("click", function () {
            var resumeUrl = window.location.href.split('?')[0] + "?username=" + encodeURIComponent(username);
            navigator.clipboard.writeText(resumeUrl).then(function () {
                alert("Link copied to clipboard!");
            });
        });
    });
});
