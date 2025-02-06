document.getElementById('downloadPdf').addEventListener('click', async () => {
    try {
        // Fetch the existing PDF file
        const response = await fetch('./Resume.pdf'); // Ensure this path points to your PDF
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        // Convert the response to a blob
        const blob = await response.blob();

        // Create a URL for the blob and trigger a download
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Resume.pdf'; // File name for the download
        document.body.appendChild(link);
        link.click();

        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error downloading the PDF:", error);
        alert("Failed to download the PDF. Please check if the file exists.");
    }
});

let menuIcon =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


ScrollReveal({ 
    distance:'80px',
    duration:2000,
    delay:200,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, portfolio-box',{origin:bottom});
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});