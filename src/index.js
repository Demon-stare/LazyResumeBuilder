import "./styles.css";

var docDefinition = {
  content: [
    {
      text: "John Doe",
      style: "name"
    },
    {
      text: "Software Developer",
      style: "title"
    },
    {
      text: "123 Main Street, Anytown USA 12345",
      style: "address"
    },
    {
      text: "john.doe@email.com",
      style: "email"
    },
    {
      text: "555-555-5555",
      style: "phone"
    },
    {
      text: "Summary",
      style: "sectionHeader"
    },
    {
      text:
        "A highly motivated and skilled software developer with over 5 years of experience in developing web applications and mobile apps. Proficient in JavaScript, HTML, CSS, and various frameworks and libraries. Strong problem-solving skills and ability to work independently or as part of a team."
    },
    {
      text: "Skills",
      style: "sectionHeader"
    },
    {
      table: {
        widths: [150, "*"],
        body: [
          ["JavaScript", "Proficient"],
          ["HTML", "Proficient"],
          ["CSS", "Proficient"],
          ["React", "Proficient"],
          ["Angular", "Proficient"],
          ["Node.js", "Proficient"],
          ["Express.js", "Proficient"],
          ["MongoDB", "Proficient"],
          ["MySQL", "Proficient"],
          ["Git", "Proficient"],
          ["AWS", "Familiar"]
        ]
      }
    },
    {
      text: "Experience",
      style: "sectionHeader"
    },
    {
      text: "Software Developer, XYZ Company",
      style: "jobTitle"
    },
    {
      text: "May 2018 - Present",
      style: "jobDate"
    },
    {
      ul: [
        "Developed and maintained web applications using React and Node.js",
        "Designed and implemented RESTful APIs using Express.js",
        "Collaborated with UX designers to create user-friendly interfaces",
        "Managed project timelines and worked closely with project managers to ensure timely delivery of products"
      ]
    },
    {
      text: "Software Developer, ABC Company",
      style: "jobTitle"
    },
    {
      text: "Jan 2016 - Apr 2018",
      style: "jobDate"
    },
    {
      ul: [
        "Developed and maintained mobile applications using Angular and Ionic",
        "Implemented secure authentication and authorization using JSON Web Tokens",
        "Worked closely with QA team to ensure the quality of the products",
        "Participated in code reviews and provided feedback to other developers"
      ]
    },
    {
      text: "Education",
      style: "sectionHeader"
    },
    {
      text: "Bachelor of Science in Computer Science, University of Anytown",
      style: "education"
    }
  ],
  styles: {
    name: {
      fontSize: 24,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    title: {
      fontSize: 18,
      margin: [0, 0, 0, 10]
    },
    address: {
      margin: [0, 0, 0, 10]
    },
    email: {
      margin: [0, 0, 0, 10]
    },
    phone: {
      margin: [0, 0, 0, 10]
    },
    sectionHeader: {
      fontSize: 16,
      bold: true,
      margin: [0, 20, 0, 5]
    },
    jobTitle: {
      bold: true,
      margin: [0, 10, 0, 5]
    },
    jobDate: {
      italics: true,
      margin: [0, 0, 0, 10]
    },
    education: {
      margin: [0, 0, 0, 10]
    }
  }
};

// Define the PDF download function
function downloadPDF() {
  pdfMake.createPdf(docDefinition).download("sample.pdf");
}

// Attach the download function to the button click event
document.getElementById("download-btn").addEventListener("click", downloadPDF);
