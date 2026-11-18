const container = document.getElementById('carsContainer');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const statsBar = document.getElementById('statsBar');

let currentBrand = 'ALL';

// Fallback SVG generator for when images cannot be loaded (Rasm qo'ying)
function getFallbackSvg(brand, name) {
    const cleanBrand = (brand || 'Avtomobil').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const cleanName = (name || 'Model').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="600" height="360" viewBox="0 0 600 360">
        <defs>
            <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#0b111a"/>
                <stop offset="50%" stop-color="#141c2b"/>
                <stop offset="100%" stop-color="#070a0e"/>
            </linearGradient>
            <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#00a8ff" stop-opacity="0.8"/>
                <stop offset="100%" stop-color="#e50914" stop-opacity="0.8"/>
            </linearGradient>
        </defs>
        <rect width="600" height="360" fill="url(#bg)"/>
        <circle cx="300" cy="180" r="140" fill="none" stroke="#2f3542" stroke-width="1.5" stroke-dasharray="6,6" opacity="0.4"/>
        <path d="M160 200 L210 150 L390 150 L440 200 Z" fill="none" stroke="url(#glow)" stroke-width="3" opacity="0.85"/>
        <circle cx="220" cy="215" r="26" fill="#151922" stroke="#00a8ff" stroke-width="3"/>
        <circle cx="380" cy="215" r="26" fill="#151922" stroke="#00a8ff" stroke-width="3"/>
        <circle cx="220" cy="215" r="10" fill="#00a8ff"/>
        <circle cx="380" cy="215" r="10" fill="#00a8ff"/>
        <line x1="140" y1="200" x2="460" y2="200" stroke="url(#glow)" stroke-width="3"/>
        <text x="300" y="75" text-anchor="middle" fill="#00a8ff" font-family="Segoe UI, sans-serif" font-weight="bold" font-size="20" letter-spacing="2">${cleanBrand.toUpperCase()}</text>
        <rect x="200" y="260" width="200" height="36" rx="18" fill="#e50914" opacity="0.9"/>
        <text x="300" y="284" text-anchor="middle" fill="#ffffff" font-family="Segoe UI, sans-serif" font-weight="bold" font-size="15">📷 Rasm qo'ying</text>
        <text x="300" y="325" text-anchor="middle" fill="#a4b0be" font-family="Segoe UI, sans-serif" font-size="14">${cleanName}</text>
    </svg>`;
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg.trim());
}

function handleImageError(img, brand, name) {
    img.onerror = null;
    img.src = getFallbackSvg(brand, name);
}

function updateFilterCounts() {
    filterBtns.forEach(btn => {
        const brand = btn.getAttribute('data-brand');
        let count = 0;
        if (brand === 'ALL') {
            count = carsData.length;
        } else {
            count = carsData.filter(c => c.brand === brand).length;
        }
        const label = btn.getAttribute('data-label') || btn.innerText.split('(')[0].trim();
        btn.setAttribute('data-label', label);
        btn.innerText = `${label} (${count})`;
    });
}

function renderCars() {
    const rawQuery = searchInput.value.toLowerCase().trim();
    const queryTerms = rawQuery ? rawQuery.split(/\s+/) : [];
    container.innerHTML = '';

    const filtered = carsData.filter(car => {
        const matchesBrand = currentBrand === 'ALL' || car.brand === currentBrand;
        
        if (!matchesBrand) return false;
        if (queryTerms.length === 0) return true;

        const searchableText = [
            car.name,
            car.brand,
            car.type,
            car.year,
            car.engine,
            car.power,
            car.accel,
            car.maxSpeed,
            car.transmission,
            car.fuel,
            car.desc
        ].join(' ').toLowerCase();

        return queryTerms.every(term => searchableText.includes(term));
    });

    statsBar.innerText = `Ko'rsatilayotgan modellar soni: ${filtered.length} ta (Jami katalogda: ${carsData.length} ta afsonaviy, tarixiy va eng yangi modellar)`;

    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color: var(--text-muted); padding: 40px 0; font-size: 1.1rem;">Hech qanday avtomobil topilmadi. Boshqa so\'z yoki brend tanlab ko\'ring.</p>';
        return;
    }

    filtered.forEach((car) => {
        const globalIndex = carsData.indexOf(car);
        const card = document.createElement('div');
        card.className = 'car-card';
        
        const imgSrc = car.image || getFallbackSvg(car.brand, car.name);
        const safeBrand = (car.brand || '').replace(/'/g, "\\'");
        const safeName = (car.name || '').replace(/'/g, "\\'");

        card.innerHTML = `
            <div class="card-image-box">
                <img src="${imgSrc}" alt="${car.name}" loading="lazy" class="card-img" onerror="handleImageError(this, '${safeBrand}', '${safeName}')">
            </div>
            <div class="card-content">
                <div class="card-header">
                    <span class="badge">${car.brand}</span>
                    <span class="year-badge">${car.year}</span>
                    <span class="type-badge">${car.type}</span>
                </div>
                <h3 class="car-title">${car.name}</h3>
                <p class="car-desc">${car.desc}</p>
                <div class="specs">
                    <div class="spec-item"><span>Dvigatel:</span><strong>${car.engine}</strong></div>
                    <div class="spec-item"><span>Quvvati:</span><strong>${car.power}</strong></div>
                    <div class="spec-item"><span>Tezlanish:</span><strong>${car.accel}</strong></div>
                    <div class="spec-item"><span>Maks. tezlik:</span><strong>${car.maxSpeed}</strong></div>
                </div>
                <div class="card-actions">
                    <button class="btn btn-view" onclick="openModal(${globalIndex})">To'liq tarixi va fotosurati</button>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentBrand = btn.getAttribute('data-brand');
        renderCars();
    });
});

searchInput.addEventListener('input', renderCars);

function openModal(index) {
    const car = carsData[index];
    if (!car) return;
    
    const modalImg = document.getElementById('modalImg');
    if (modalImg) {
        const safeBrand = (car.brand || '').replace(/'/g, "\\'");
        const safeName = (car.name || '').replace(/'/g, "\\'");
        modalImg.onerror = function() { handleImageError(this, safeBrand, safeName); };
        modalImg.src = car.image || getFallbackSvg(car.brand, car.name);
        modalImg.alt = car.name;
    }

    document.getElementById('modalBrand').innerText = car.brand;
    document.getElementById('modalType').innerText = car.type;
    document.getElementById('modalYear').innerText = car.year;
    document.getElementById('modalTitle').innerText = car.name;
    document.getElementById('modalDesc').innerText = car.desc;
    document.getElementById('modalSpecs').innerHTML = `
        <div class="spec-item"><span>Brend:</span><strong>${car.brand}</strong></div>
        <div class="spec-item"><span>Ishlab chiqarilgan yili:</span><strong>${car.year}</strong></div>
        <div class="spec-item"><span>Kuzov / Turi:</span><strong>${car.type}</strong></div>
        <div class="spec-item"><span>Dvigatel:</span><strong>${car.engine}</strong></div>
        <div class="spec-item"><span>Quvvati:</span><strong>${car.power}</strong></div>
        <div class="spec-item"><span>Tezlanish:</span><strong>${car.accel}</strong></div>
        <div class="spec-item"><span>Maksimal tezlik:</span><strong>${car.maxSpeed}</strong></div>
        <div class="spec-item"><span>Uzatmalar qutisi:</span><strong>${car.transmission}</strong></div>
        <div class="spec-item"><span>Yoqilg'i turi:</span><strong>${car.fuel}</strong></div>
    `;
    document.getElementById('carModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('carModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('carModal');
    if (event.target === modal) {
        closeModal();
    }
};

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

updateFilterCounts();
renderCars();
