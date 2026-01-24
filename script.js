// Tarifs moyens par type de travaux (€/m²)
const tarifsMoyens = {
    "Peinture & Revêtements": { min: 25, max: 50 },
    "Plomberie": { min: 50, max: 120 },
    "Électricité": { min: 60, max: 130 },
    "Aménagement Intérieur": { min: 80, max: 200 },
    "Gros Œuvre": { min: 150, max: 400 },
    "Rénovation Complète": { min: 500, max: 1500 },
    "Autre": { min: 30, max: 100 }
};

function updateEstimation() {
    const typeTravaux = document.getElementById('type-travaux').value;
    const surface = parseFloat(document.getElementById('surface').value);
    const estimationBox = document.getElementById('estimation-box');
    const estimationPrice = document.getElementById('estimation-price');

    // Vérifier que les deux champs sont remplis
    if (typeTravaux && surface > 0) {
        const tarif = tarifsMoyens[typeTravaux];
        
        // Calculer la fourchette de prix
        const prixMin = Math.round(tarif.min * surface);
        const prixMax = Math.round(tarif.max * surface);

        // Formater les prix
        const prixMinFormate = prixMin.toLocaleString('fr-FR');
        const prixMaxFormate = prixMax.toLocaleString('fr-FR');

        // Afficher l'estimation
        estimationPrice.textContent = `${prixMinFormate}€ - ${prixMaxFormate}€`;
        estimationBox.style.display = 'block';

        // Scroll vers l'estimation
        setTimeout(() => {
            estimationBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        // Cacher l'estimation si les champs ne sont pas remplis
        estimationBox.style.display = 'none';
    }
}

// Message de confirmation après envoi
const form = document.querySelector('.contact-form');
form.addEventListener('submit', function(e) {
    // Le formulaire s'envoie normalement à Formspree
    // Optionnel : afficher un message de confirmation
    setTimeout(() => {
        alert('✅ Votre demande de devis a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.');
    }, 100);
});