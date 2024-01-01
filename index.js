
const businesses = [
{ name: "Bhojdwar Family Restaurant", category: "restaurants", neighborhood: "downtown", reviews: 4.5, Phone: '9912546873' },
{ name: "George Medical Shop", category: "medical-services", neighborhood: "jamianagar", reviews: 4.2, Phone: '9912546873' },
{ name: "Hotel Diplomat", category: "restaurants", neighborhood: "jamianagar", reviews: 4.9, Phone: '9912546873' },
{ name: "Kapoor & Son's Auto Services", category: "auto-services", neighborhood: "downtown", reviews: 4.3, Phone: '9912546873' },
{ name: "3-D Restaurant", category: "restaurants", neighborhood: "kirti-nagar", reviews: 4.7, Phone: '9912546873' },
{ name: "King Medical Shop", category: "medical-services", neighborhood: "jamianagar", reviews: 4.2, Phone: '9912546873' },
{ name: "Petbhar Dhaba", category: "restaurants", neighborhood: "kirti-nagar", reviews: 4.2, Phone: '9912546873' },
{ name: "Kapoor & Son's Auto Services", category: "auto-services", neighborhood: "kirti-nagar", reviews: 4.3, Phone: '9912546873' },
{ name: "Mahyashaym Restaurant", category: "restaurants", neighborhood: "kirti-nagar", reviews: 4.7, Phone: '9912546873' },
{ name: "Neta Dhaba", category: "restaurants", neighborhood: "downtown", reviews: 4.0, Phone: 9912546873 },
{ name: "New Star Home Services", category: "home-services", neighborhood: "jamianagar", reviews: 4.8, Phone: '9912546873' },
{ name: "Instant Home Service", category: "home-services", neighborhood: "jamianagar", reviews: 4.9, Phone: '9912546873' },
{ name: "Star Home Service", category: "home-services", neighborhood: "kirti-nagar", reviews: 4.0, Phone: '9912546873' },
{ name: "Naushad Auto Service", category: "auto-services", neighborhood: "jamianagar", reviews: 4.8, Phone: '9912546873' },
{ name: "Glory Auto Parts", category: "auto-services", neighborhood: "kirti-nagar", reviews: 4.1, Phone: '9912546873' },
{ name: "Galaxy Home Service", category: "home-services", neighborhood: "downtown", reviews: 4.2, Phone: '9912546873' },
{ name: "Usman Medical Shop", category: "medical-services", neighborhood: "kirti-nagar", reviews: 4.3, Phone: '8912546873' },
{ name: "Spare Parts Services", category: "auto-services", neighborhood: "downtown", reviews: 4.8, Phone: '6712546873' },
{ name: "Dastarkhan Dhaba", category: "restaurants", neighborhood: "downtown", reviews: 4.3, Phone: '7812546873' },
{ name: "Medicare Medical Shop", category: "medical-services", neighborhood: "kirti-nagar", reviews: 4.9, Phone: '6412546873' },
{ name: "Fast Home Service", category: "home-services", neighborhood: "jamianagar", reviews: 4.0, Phone: '6912546873' },
{ name: "Mishra Garage", category: "auto-services", neighborhood: "downtown", reviews: 4.4, Phone: '7712546873' },
{ name: "Philip Medical Store", category: "medical-services", neighborhood: "downtown", reviews: 4.4, Phone: '6312546873' },
{ name: "Al-Madina Hotel", category: "restaurants", neighborhood: "jamianagar", reviews: 4.7, Phone: '7512546873' },
{ name: "New Home Service", category: "home-services", neighborhood: "kirti-nagar", reviews: 4.4, Phone: '8712546873' },
{ name: "Localaity Home Services", category: "home-services", neighborhood: "kirti-nagar", reviews: 4.4, Phone: '7112546873' }
];

const businessContainer = document.getElementById("business-container");
const categorySelect = document.getElementById("category");
const neighborhoodSelect = document.getElementById("neighborhood");

showBusinesses(businesses);

categorySelect.addEventListener("change", filterBusinesses);
neighborhoodSelect.addEventListener("change", filterBusinesses);

function showBusinesses(businessArray) {

  const sortedBusinesses = businessArray.sort((a, b) => b.reviews - a.reviews);
  businessContainer.innerHTML = "";

  sortedBusinesses.forEach((business) => {
    const businessCard = document.createElement("div");
    businessCard.className = "business-card";
    businessCard.setAttribute("data-category", business.category);
    businessCard.setAttribute("data-neighborhood", business.neighborhood);

    businessCard.innerHTML = `
          <h2>${business.name}</h2>
          <p>Customer Reviews: ${business.reviews}/5</p>
          <p>Address: ${business.neighborhood}, City</p>
          <p>Phone: ${business.Phone}</p>
        `;
    businessContainer.appendChild(businessCard);
  });
}

function filterBusinesses() {
  const selectedCategory = categorySelect.value;
  const selectedNeighborhood = neighborhoodSelect.value;
  const filteredBusinesses = businesses.filter((business) => {
    const categoryMatch = selectedCategory === "all" || selectedCategory === business.category;
    const neighborhoodMatch = selectedNeighborhood === "all" || selectedNeighborhood === business.neighborhood;
    return categoryMatch && neighborhoodMatch;
  });
  showBusinesses(filteredBusinesses);
}