import inquirer from 'inquirer';
import fs from 'fs/promises';

const FILES_TO_UPDATE = [
  'astro.config.mjs',
  './Studio/sanity.config.ts',
  './Studio/sanity.cli.ts',
];

async function askForConfig() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'SANITY_PROJECT_ID',
      message: 'Quel est votre SANITY_PROJECT_ID ?',
      validate: function(input) {
        const regex = /^[a-z0-9-]+$/;
        if (regex.test(input)) {
          return true;
        }
        return 'Le projectId ne peut contenir que des lettres minuscules (a-z), des chiffres (0-9) et des tirets (-)';
      }
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
      let configContent = await fs.readFile(file, 'utf8');

      configContent = configContent.replace(
        /projectId:\s*['"]<YOUR-PROJECT-ID>['"]/, 
        `projectId: '${answers.SANITY_PROJECT_ID}'`
      ).replace(
        /dataset:\s*['"]<YOUR-DATASET-NAME>['"]/,
        `dataset: '${answers.SANITY_DATASET}'`
      );

      await fs.writeFile(file, configContent, 'utf8');

      console.log(`✅ ${file} mis à jour avec succès !`);
    } catch (error) {
      console.error(`❌ Erreur lors de la mise à jour de ${file} :`, error);
    }
  }
}

askForConfig();
