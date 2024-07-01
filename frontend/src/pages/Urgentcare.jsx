import React, { useState } from 'react';

function Urgentcare() {
  const [selectedDisease, setSelectedDisease] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState('cattle'); // Default to cattle diseases
  const diseases = {
    cattle: [
      {
        name: 'Foot and Mouth Disease',
        details: {
          description: 'Foot and Mouth Disease (FMD) is a highly contagious viral disease that affects cloven-hoofed animals, including cattle, sheep, goats, and pigs. It is characterized by fever and blister-like sores on the tongue, lips, mouth, teats, and between the hooves.',
          causes: 'FMD is caused by the Foot-and-Mouth Disease Virus (FMDV), which can spread through direct contact with infected animals, contaminated feed, water, equipment, and even by wind over short distances.',
          signsSymptoms: 'The signs and symptoms of FMD include fever, loss of appetite, reduced milk production, lameness, blisters on the tongue, lips, gums, inside of the mouth, and between the toes and above the hooves, drooling or frothing at the mouth, and reluctance to move or stand.',
          treatment: 'There is no specific treatment for FMD. Management practices include isolation of infected animals, strict biosecurity measures to prevent spread, and supportive care such as hydration and pain relief. Vaccination programs are also implemented in endemic areas to control outbreaks.',
          prevention: 'Good management practices to prevent FMD include implementing strict biosecurity measures, quarantining new animals before introducing them to the herd, regularly disinfecting equipment and facilities, avoiding sharing equipment with other farms, and ensuring proper vaccination of animals.'
        }
      },
      {
        name: 'Bovine Tuberculosis',
        details: {
          description: 'Bovine Tuberculosis (TB) is a chronic disease of cattle caused by the bacterium Mycobacterium bovis. It can affect other animals and humans, leading to significant health issues.',
          causes: 'TB is primarily spread through inhalation of aerosols from infected animals, but can also be transmitted through ingestion of contaminated feed or water, or direct contact with infected bodily fluids.',
          signsSymptoms: 'Symptoms of TB in cattle include persistent coughing, weight loss, lethargy, and enlarged lymph nodes. In advanced stages, animals may develop respiratory distress and other severe health issues.',
          treatment: 'There is no effective treatment for bovine TB in animals. Control measures include testing and culling infected animals, implementing strict biosecurity practices, and movement restrictions to prevent the spread of the disease.',
          prevention: 'Preventive measures for TB include regular testing of cattle, culling of infected animals, maintaining closed herds to avoid introducing the disease, and ensuring proper sanitation and biosecurity practices on the farm.'
        }
      },
      {
        name: 'Bovine Viral Diarrhea (BVD)',
        details: {
          description: 'Bovine Viral Diarrhea (BVD) is a viral infection that affects cattle and can lead to significant economic losses in the livestock industry.',
          causes: 'BVD is caused by the Bovine Viral Diarrhea Virus (BVDV) and is spread through direct contact with infected animals, contaminated feed, water, and equipment.',
          signsSymptoms: 'Symptoms include fever, diarrhea, nasal discharge, mouth ulcers, and immunosuppression, which can lead to secondary infections.',
          treatment: 'There is no specific treatment for BVD. Management includes supportive care and prevention of secondary infections. Vaccination and biosecurity measures are crucial for control.',
          prevention: 'Preventive measures include vaccination, maintaining closed herds, regular testing, and implementing strict biosecurity practices.'
        }
      },
      {
        name: 'Mastitis',
        details: {
          description: 'Mastitis is an inflammation of the mammary gland, usually caused by bacterial infection. It is one of the most common and costly diseases in dairy cattle.',
          causes: 'Mastitis is caused by bacteria entering the udder through the teat canal. Poor milking hygiene, teat injuries, and environmental factors can increase the risk.',
          signsSymptoms: 'Symptoms include swelling, heat, redness, and pain in the udder, as well as abnormal milk (e.g., clots, discoloration). Severe cases can lead to systemic illness.',
          treatment: 'Treatment involves antibiotics and anti-inflammatory drugs. Severe cases may require supportive care. Early detection and proper milking hygiene are critical.',
          prevention: 'Preventive measures include maintaining good milking hygiene, regular udder health checks, proper management of bedding and environment, and ensuring optimal cow nutrition.'
        }
      },
      {
        name: 'Anaplasmosis',
        details: {
          description: 'Anaplasmosis is a bacterial disease affecting cattle, caused by the parasite Anaplasma marginale. It primarily targets red blood cells, leading to anemia and other health complications.',
          causes: 'The disease is transmitted by blood-sucking insects such as ticks and biting flies, which spread the Anaplasma marginale parasite between cattle.',
          signsSymptoms: 'Symptoms include pale mucous membranes (due to anemia), fever, decreased milk production, weight loss, and in severe cases, jaundice (yellow discoloration of the skin and whites of the eyes).',
          treatment: 'Treatment involves antibiotics effective against Anaplasma species, blood transfusions for severely affected animals, and management practices to control vector populations.',
          prevention: 'Preventive measures include tick control, regular monitoring of cattle for signs of infection, and vaccination in endemic areas.'
        }
      },
      {
        name: 'Blackleg',
        details: {
          description: 'Blackleg is a highly fatal bacterial disease affecting cattle, caused by Clostridium chauvoei. It leads to sudden death due to severe muscle and tissue damage.',
          causes: 'The disease is caused by spores of Clostridium chauvoei, which can remain dormant in soil for long periods. Infection occurs when cattle ingest or inhale these spores, leading to rapid onset of symptoms.',
          signsSymptoms: 'Symptoms include sudden onset of lameness, swelling, and crepitus (gas bubbles under the skin) in affected areas. High fever and depression may also be observed.',
          treatment: 'Treatment is often ineffective once symptoms appear. Prevention through vaccination and minimizing exposure to contaminated soil are crucial.',
          prevention: 'Preventive measures include vaccination with Clostridial vaccines, avoiding grazing in areas with a history of Blackleg, and prompt disposal of carcasses to prevent spore contamination.'
        }
      },
      {
        name: 'Bovine Respiratory Disease (BRD)',
        details: {
          description: 'Bovine Respiratory Disease (BRD) is a complex, multifactorial respiratory disease in cattle, involving viral and bacterial pathogens.',
          causes: 'BRD is caused by various viruses (e.g., Bovine Respiratory Syncytial Virus, Bovine Herpesvirus-1) and bacteria (e.g., Mannheimia haemolytica, Pasteurella multocida). Stress factors such as transport, weaning, and poor environmental conditions contribute to disease development.',
          signsSymptoms: 'Symptoms include coughing, nasal discharge, fever, rapid breathing, decreased appetite, and depression. Severe cases can lead to pneumonia and death.',
          treatment: 'Treatment involves antibiotics effective against bacterial pathogens, anti-inflammatory drugs, and supportive care. Early intervention is crucial for successful treatment.',
          prevention: 'Preventive measures include vaccination against common pathogens, minimizing stress during handling and transport, providing good ventilation, and maintaining optimal herd health.'
        }
      },
      {
        name: 'Brucellosis',
        details: {
          description: 'Brucellosis, caused by Brucella abortus, is a bacterial disease affecting cattle and other livestock. It can also infect humans (zoonotic disease), causing significant health and economic impacts.',
          causes: 'Cattle become infected through contact with aborted fetuses, placental fluids, or contaminated materials. The bacterium can also spread through ingestion of contaminated feed or water.',
          signsSymptoms: 'Symptoms in cattle include abortion (late-term), retained placenta, orchitis (inflammation of the testicles in bulls), and reduced fertility. In some cases, infected animals may show no clinical signs.',
          treatment: 'There is no treatment for Brucellosis in cattle. Eradication programs focus on testing and culling infected animals, vaccination in some regions, and strict biosecurity measures.',
          prevention: 'Preventive measures include vaccination (where applicable), testing and removal of infected animals, proper disposal of aborted fetuses and placental materials, and maintaining good hygiene and biosecurity practices.'
        }
      }
  
    ],
    goats: [
      {
        name: 'Caprine Arthritis Encephalitis',
        details: {
          description: 'Caprine Arthritis Encephalitis (CAE) is a viral disease affecting goats. It can lead to arthritis in adults and encephalitis in kids, causing significant health issues and economic losses.',
          causes: 'CAE is caused by a retrovirus transmitted through colostrum, milk from infected does, and direct contact with infected bodily fluids.',
          signsSymptoms: 'Signs of CAE include swollen joints, lameness, poor body condition, and neurological symptoms such as ataxia and paralysis in kids.',
          treatment: 'There is no cure for CAE. Management practices include regular testing, culling of infected animals, and preventing transmission through feeding CAE-free colostrum and milk to kids.',
          prevention: 'Good management practices to prevent CAE include regular testing of the herd, isolating and culling infected animals, providing CAE-free colostrum and milk to kids, and maintaining proper hygiene and biosecurity practices.'
        }
      },
      {
        name: 'Enterotoxemia',
        details: {
          description: 'Enterotoxemia, also known as "overeating disease," is caused by toxins produced by the bacterium Clostridium perfringens in the intestines of goats. It often leads to sudden death in affected animals.',
          causes: 'The disease is triggered by overeating high-energy feeds, which leads to rapid bacterial growth and toxin production in the intestines.',
          signsSymptoms: 'Symptoms include sudden death, abdominal discomfort, diarrhea, and neurological signs such as convulsions and incoordination.',
          treatment: 'Immediate treatment with antitoxins and supportive care can be attempted, but prevention through proper feeding practices and regular vaccination is the most effective approach.',
          prevention: 'To prevent enterotoxemia, implement proper feeding practices, avoid sudden changes in diet, ensure regular vaccination of goats, and maintain good hygiene and sanitation on the farm.'
        }
      },
      {
        name: 'Johne\'s Disease',
        details: {
          description: 'Johne\'s Disease, also known as paratuberculosis, is a chronic, contagious bacterial infection that affects the intestines of ruminants, including goats.',
          causes: 'The disease is caused by Mycobacterium avium subspecies paratuberculosis (MAP). It is spread through ingestion of contaminated feed, water, or feces.',
          signsSymptoms: 'Symptoms include weight loss, diarrhea, and decreased milk production. Infected goats may appear healthy for years before showing signs.',
          treatment: 'There is no effective treatment for Johne\'s Disease. Control measures focus on preventing the spread of the disease and culling infected animals.',
          prevention: 'Preventive measures include regular testing of the herd, culling of infected animals, and maintaining good hygiene and biosecurity practices.'
        }
      },
      {
        name: 'Caseous Lymphadenitis (CL)',
        details: {
          description: 'Caseous Lymphadenitis (CL) is a chronic bacterial infection that causes abscesses in the lymph nodes and internal organs of goats.',
          causes: 'CL is caused by the bacterium Corynebacterium pseudotuberculosis. It spreads through direct contact with abscesses, contaminated equipment, and the environment.',
          signsSymptoms: 'Symptoms include abscesses on the body, especially around the head and neck, weight loss, and decreased milk production.',
          treatment: 'Treatment involves lancing and draining abscesses, followed by antibiotic therapy. However, complete eradication is difficult.',
          prevention: 'Preventive measures include isolating infected animals, proper sanitation, and regular herd health checks to detect and manage abscesses early.'
        }
      },
      {
        name: 'Contagious Agalactia',
        details: {
          description: 'Contagious Agalactia is a contagious bacterial disease affecting goats, primarily causing mastitis, arthritis, and keratoconjunctivitis.',
          causes: 'The disease is caused by Mycoplasma agalactiae, which spreads through direct contact with infected animals, contaminated milk, and fomites.',
          signsSymptoms: 'Symptoms include mastitis (inflammation of the udder), arthritis (joint inflammation), keratoconjunctivitis (inflammation of the eyes), reduced milk production, lameness, and conjunctival discharge.',
          treatment: 'Treatment involves antibiotics effective against Mycoplasma species, supportive care, and management practices to prevent transmission.',
          prevention: 'Preventive measures include testing and culling of infected animals, maintaining good hygiene practices, and avoiding introduction of infected animals into the herd.'
        }
      },
      {
        name: 'Pneumonia',
        details: {
          description: 'Pneumonia is an inflammatory condition affecting the lungs of goats, commonly caused by bacterial or viral infections.',
          causes: 'Pneumonia can be caused by various bacteria (e.g., Mannheimia haemolytica, Pasteurella spp.) and viruses (e.g., Caprine Respiratory Syncytial Virus). Stress factors, overcrowding, and poor ventilation can predispose goats to the disease.',
          signsSymptoms: 'Symptoms include fever, coughing, nasal discharge, rapid breathing, reduced appetite, lethargy, and in severe cases, respiratory distress.',
          treatment: 'Treatment involves antibiotics, anti-inflammatory drugs, supportive care (e.g., rest, good ventilation), and addressing underlying management issues.',
          prevention: 'Preventive measures include vaccination against common pathogens, maintaining good ventilation and hygiene, minimizing stress factors, and separating sick goats from the herd.'
        }
      },
      {
        name: 'Toxoplasmosis',
        details: {
          description: 'Toxoplasmosis is a parasitic disease affecting goats and other mammals. It is caused by the parasite Toxoplasma gondii.',
          causes: 'Goats become infected by ingesting food, water, or soil contaminated with Toxoplasma oocysts or by consuming infected meat.',
          signsSymptoms: 'Symptoms vary depending on the stage of infection. Acute toxoplasmosis may cause fever, lethargy, loss of appetite, and respiratory symptoms. Chronic infection can lead to reproductive issues and neurologic symptoms.',
          treatment: 'Treatment may include antibiotics and supportive care. Prevention is crucial through good hygiene practices, proper feed management, and avoiding contact with potential sources of contamination.',
          prevention: 'Preventive measures include keeping feed and water sources clean, minimizing exposure to potentially contaminated environments, and preventing contact with infected animals.'
        }
      },
      {
        name: 'Scrapie',
        details: {
          description: 'Scrapie is a fatal neurodegenerative disease affecting goats and sheep. It belongs to a group of diseases known as transmissible spongiform encephalopathies (TSEs).',
          causes: 'Scrapie is caused by prions, abnormal proteins that accumulate in the nervous system. The disease can spread through direct contact with infected animals or their environment.',
          signsSymptoms: 'Symptoms include behavioral changes (e.g., agitation, anxiety), itching or rubbing against objects, progressive weight loss, tremors, and eventually, paralysis and death.',
          treatment: 'There is no treatment or cure for Scrapie. Control measures focus on preventing the spread of the disease through strict biosecurity practices, testing, and culling of affected animals.',
          prevention: 'Preventive measures include avoiding introduction of infected animals into the herd, maintaining strict biosecurity measures, and participating in Scrapie eradication programs where available.'
        }
      }
    ],
    chickens: [
      {
        name: 'Newcastle Disease',
        details: {
          description: 'Newcastle Disease (ND) is a highly contagious viral disease affecting many domestic and wild avian species. It can cause severe respiratory distress and high mortality in poultry flocks.',
          causes: 'ND is caused by the Newcastle Disease Virus (NDV), which spreads through direct contact with infected birds, contaminated feed, water, equipment, and aerosols.',
          signsSymptoms: 'Symptoms include respiratory distress, coughing, sneezing, nasal discharge, greenish diarrhea, and neurological signs such as tremors, paralysis, and twisted necks.',
          treatment: 'There is no specific treatment for ND. Control measures include strict biosecurity practices, culling of infected birds, and vaccination to prevent outbreaks.',
          prevention: 'Good management practices to prevent ND include implementing strict biosecurity measures, vaccinating birds, maintaining proper hygiene and sanitation, and avoiding contact with wild birds.'
        }
      },
      {
        name: 'Marek\'s Disease',
        details: {
          description: 'Marek\'s Disease is a viral disease in chickens caused by a herpesvirus. It leads to the formation of tumors and paralysis, significantly impacting poultry health and productivity.',
          causes: 'The disease is transmitted through inhalation of feather dust from infected birds. The virus can remain in the environment for extended periods.',
          signsSymptoms: 'Symptoms include paralysis of legs, wings, and neck, weight loss, irregular pupils, and formation of tumors in various organs.',
          treatment: 'There is no cure for Marek\'s Disease. Prevention is primarily through vaccination of chicks at an early age and maintaining good hygiene and biosecurity practices.',
          prevention: 'Preventive measures for Marek\'s Disease include vaccinating chicks at hatch, maintaining proper hygiene and biosecurity practices, and reducing stress factors for the birds.'
        }
      },
      {
        name: 'Avian Influenza (Bird Flu)',
        details: {
          description: 'Avian Influenza is a highly contagious viral infection affecting birds, including chickens. It can cause severe respiratory and digestive tract issues, leading to high mortality rates.',
          causes: 'The disease is caused by influenza viruses that infect the respiratory and intestinal tracts of birds. Transmission occurs through direct contact with infected birds or their droppings, contaminated feed, water, or equipment.',
          signsSymptoms: 'Symptoms include respiratory signs (e.g., coughing, sneezing), decreased egg production, diarrhea, swelling of the head, cyanosis (blue discoloration) of the comb and wattles, and sudden death.',
          treatment: 'There is no specific treatment for Avian Influenza. Control measures include quarantine, culling infected birds, strict biosecurity measures, and vaccination.',
          prevention: 'Preventive measures include vaccination of birds, strict biosecurity practices, monitoring for early signs of infection, and avoiding contact with wild birds and their droppings.'
        }
      },
      {
        name: 'Infectious Bronchitis (IB)',
        details: {
          description: 'Infectious Bronchitis is a highly contagious viral disease affecting chickens. It primarily targets the respiratory system but can also affect egg production and quality.',
          causes: 'IB is caused by the Infectious Bronchitis Virus (IBV), which spreads through respiratory droplets and aerosols. Infected birds shed the virus in their saliva, nasal secretions, and feces.',
          signsSymptoms: 'Symptoms include respiratory distress, coughing, sneezing, nasal discharge, reduced egg production, and poor egg quality (e.g., soft-shelled eggs, misshapen eggs).',
          treatment: 'There is no specific treatment for IB. Supportive care, such as maintaining optimal environmental conditions and nutrition, is crucial. Vaccination can help prevent outbreaks.',
          prevention: 'Preventive measures include vaccination of chickens, strict biosecurity practices, isolation of new birds, and disinfection of equipment and facilities.'
        }
      },
      {
        name: 'Fowl Cholera',
        details: {
          description: 'Fowl Cholera is a bacterial disease affecting chickens and other poultry species. It can lead to acute septicemia and chronic localized infections, causing significant economic losses.',
          causes: 'The disease is caused by the bacterium Pasteurella multocida, which spreads through direct contact with infected birds, contaminated feed, water, or equipment.',
          signsSymptoms: 'Symptoms vary from acute to chronic forms and include sudden death (acute), swollen wattles and joints, respiratory distress, diarrhea, and decreased egg production.',
          treatment: 'Treatment involves antibiotics effective against Pasteurella multocida. Supportive care and sanitation measures are also crucial for recovery and prevention of spread.',
          prevention: 'Preventive measures include vaccination, maintaining strict biosecurity practices, regular sanitation of facilities and equipment, and prompt isolation and treatment of sick birds.'
        }
      },
      {
        name: 'Infectious Bursal Disease (Gumboro)',
        details: {
          description: 'Infectious Bursal Disease (IBD), also known as Gumboro disease, is a highly contagious viral infection affecting young chickens, primarily targeting the immune system and bursa of Fabricius.',
          causes: 'IBD is caused by the Infectious Bursal Disease Virus (IBDV), which spreads through oral-fecal transmission. Infected birds shed the virus in their feces, contaminating the environment.',
          signsSymptoms: 'Symptoms include immunosuppression, swollen bursa (immune organ), diarrhea, ruffled feathers, and increased susceptibility to secondary infections.',
          treatment: 'There is no specific treatment for IBD. Prevention through vaccination, maintaining good biosecurity practices, and early detection are essential to control outbreaks.',
          prevention: 'Preventive measures include vaccination of chicks, strict biosecurity protocols, disinfection of facilities, and monitoring for early signs of infection.'
        }
      }
    ]
  };



  const handleDiseaseChange = (e) => {
    setSelectedDisease(e.target.value);
  };

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
    setSelectedDisease(''); // Reset selected disease when changing animal type
  };

  const renderDiseaseDetails = () => {
    for (let animal in diseases) {
      if (animal === selectedAnimal) {
        for (let disease of diseases[animal]) {
          if (disease.name === selectedDisease) {
            return (
              <div key={disease.name} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold"><strong>Description:</strong> {disease.details.description}</p>
                <p className="text-lg"><strong>Causes:</strong> {disease.details.causes}</p>
                <p className="text-lg"><strong>Signs and Symptoms:</strong> {disease.details.signsSymptoms}</p>
                <p className="text-lg"><strong>Treatment:</strong> {disease.details.treatment}</p>
                <p className="text-lg"><strong>Prevention:</strong> {disease.details.prevention}</p>
              </div>
            );
          }
        }
      }
    }
    return <p className="text-lg text-gray-500 mt-4">Select a disease to view details.</p>;
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Urgent Care</h1>
      <div className="mb-4">
        <label htmlFor="animal-select" className="block text-lg font-medium mb-2">Select Animal Type:</label>
        <select id="animal-select" onChange={(e) => handleAnimalChange(e.target.value)} className="block w-full p-2 border border-gray-300 rounded-lg mb-4">
          <option value="cattle">Cattle</option>
          <option value="goats">Goats</option>
          <option value="chickens">Chickens</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="disease-select" className="block text-lg font-medium mb-2">Select a Disease:</label>
        <select id="disease-select" onChange={handleDiseaseChange} className="block w-full p-2 border border-gray-300 rounded-lg mb-4">
          <option value="">--Please choose a disease--</option>
          {diseases[selectedAnimal].map((disease) => (
            <option key={disease.name} value={disease.name}>
              {disease.name}
            </option>
          ))}
        </select>
      </div>
      {renderDiseaseDetails()}
    </div>
  );
}

export default Urgentcare;
