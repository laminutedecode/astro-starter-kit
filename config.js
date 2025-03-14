import inquirer from 'inquirer';
import fs from 'fs/promises';

const FILES_TO_UPDATE = [
  'astro.config.mjs',
  './Studio/sanity.config.ts',
  './Studio/sanity.cli.ts',
  'sanity.config.ts'
];

// 🔹 Fonction pour demander les informations à l'utilisateur
async function askForConfig() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'SANITY_PROJECT_ID',
      message: 'Quel est votre SANITY_PROJECT_ID ?',
    },
    {
      type: 'input',
      name: 'SANITY_DATASET',
      message: 'Quel est votre SANITY_DATASET ?',
    }
  ]);

  console.log('🔹 Mise à jour des fichiers de configuration...');

  for (const file of FILES_TO_UPDATE) {
    try {
      // 🔸 Lire le contenu actuel du fichier
      let configContent = await fs.readFile(file, 'utf8');

      // 🔸 Modifier les valeurs du `projectId` et du `dataset`
      configContent = configContent.replace(
        /projectId:\s*['"]<YOUR-PROJECT-ID>['"]/,
        `projectId: '${answers.SANITY_PROJECT_ID}'`
      ).replace(
        /dataset:\s*['"]<YOUR-DATASET-NAME>['"]/,
        `dataset: '${answers.SANITY_DATASET}'`
      );

      // 🔸 Écrire le fichier mis à jour
      await fs.writeFile(file, configContent, 'utf8');

      console.log(`✅ ${file} mis à jour avec succès !`);
    } catch (error) {
      console.error(`❌ Erreur lors de la mise à jour de ${file} :`, error);
    }
  }
}

// Lancer la fonction
askForConfig();
