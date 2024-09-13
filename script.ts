document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-input-form") as HTMLFormElement;
    const resumeContent = document.getElementById("resume-content") as HTMLDivElement;
    const copyLinkButton = document.getElementById("copyLinkButton") as HTMLButtonElement;
    const downloadPdfButton = document.getElementById("downloadPdfButton") as HTMLButtonElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Gather form data
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const username = (document.getElementById("username") as HTMLInputElement).value;
        const degree = (document.getElementById("degree") as HTMLInputElement).value;
        const university = (document.getElementById("university") as HTMLInputElement).value;
        const graduationYear = (document.getElementById("graduation-year") as HTMLInputElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
        const company = (document.getElementById("company") as HTMLInputElement).value;
        const workYears = (document.getElementById("work-years") as HTMLInputElement).value;
        const jobDescription = (document.getElementById("job-description") as HTMLTextAreaElement).value;

        // Create resume content
        const resumeText = `
            Name: ${name}
            Email: ${email}
            Phone: ${phone}
            Username: ${username}
            Degree: ${degree}
            University: ${university}
            Graduation Year: ${graduationYear}
            Skills: ${skills}
            Job Title: ${jobTitle}
            Company: ${company}
            Years Worked: ${workYears}
            Job Description: ${jobDescription}
        `;

        // Display resume content
        resumeContent.innerText = resumeText;

        // Handle PDF download
        downloadPdfButton.addEventListener("click", () => {
            const doc = new (window as any).jspdf.jsPDF();
            doc.text(resumeText, 10, 10);
            doc.save("resume.pdf");
        });

        // Handle copy link
        copyLinkButton.addEventListener("click", () => {
            const resumeUrl = window.location.href.split('?')[0] + "?username=" + encodeURIComponent(username);
            navigator.clipboard.writeText(resumeUrl).then(() => {
                alert("Link copied to clipboard!");
            });
        });
    });
});



