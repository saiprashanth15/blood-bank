
const sampleDonors = [
    {
        name: "John ",
        bloodGroup: "A+",
        distance: 2.5,
        phone: "+1 234 567 890",
        location: "Downtown, City",
        lastDonation: "3 months ago",
        available: true
    },
    {
        name: "Smith",
        bloodGroup: "O-",
        distance: 3.8,
        phone: "+1 234 567 891",
        location: "Uptown, City",
        lastDonation: "6 months ago",
        available: true
    },
    {
        name: "sai",
        bloodGroup: "B+",
        distance: 1.5,
        phone: "+1 234 567 892",
        location: "Midtown, City",
        lastDonation: "2 months ago",
        available: false
    }
];


function searchDonors() {
    const location = document.getElementById('location')?.value;
    const bloodGroup = document.getElementById('bloodGroup')?.value;
    const distance = document.getElementById('distance')?.value;
    
    const resultsContainer = document.getElementById('resultsContainer');
    const noResults = document.getElementById('noResults');

    if (!resultsContainer || !noResults) return;

    
    resultsContainer.innerHTML = '';

   
    const filteredDonors = sampleDonors.filter(donor => {
        if (bloodGroup && donor.bloodGroup !== bloodGroup) return false;
        if (distance && donor.distance > parseInt(distance)) return false;
        return true;
    });

    if (filteredDonors.length === 0) {
        resultsContainer.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    
    resultsContainer.classList.remove('hidden');
    noResults.classList.add('hidden');

    filteredDonors.forEach(donor => {
        const donorCard = createDonorCard(donor);
        resultsContainer.appendChild(donorCard);
    });
}


function createDonorCard(donor) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md p-6';
    card.innerHTML = `
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
                <div class="bg-red-100 text-red-600 font-bold rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    ${donor.bloodGroup}
                </div>
                <div>
                    <h3 class="text-lg font-semibold">${donor.name}</h3>
                    <p class="text-gray-600">${donor.distance} km away</p>
                </div>
            </div>
            <div class="${donor.available ? 'text-green-600' : 'text-gray-600'}">
                <i class="fas ${donor.available ? 'fa-check-circle' : 'fa-clock'}"></i>
                ${donor.available ? 'Available' : 'Unavailable'}
            </div>
        </div>
        <div class="space-y-2 text-sm text-gray-600">
            <p><i class="fas fa-phone mr-2"></i>${donor.phone}</p>
            <p><i class="fas fa-map-marker-alt mr-2"></i>${donor.location}</p>
            <p><i class="fas fa-calendar mr-2"></i>Last donation: ${donor.lastDonation}</p>
        </div>
        <button class="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
            Contact Donor
        </button>
    `;
    return card;
}


document.addEventListener('DOMContentLoaded', function() {
   
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registration successful! Thank you for becoming a donor.');
            registrationForm.reset();
        });
    }


    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful!');
            loginForm.reset();
        });
    }

   
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! We will get back to you soon.');
            contactForm.reset();
        });
    }

  
    const mobileMenuButton = document.querySelector('.md\\:hidden button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            alert('Mobile menu functionality will be implemented soon!');
        });
    }
});


if (document.getElementById('searchForm')) {
    searchDonors();
}
