

# Projet Argent Bank

Ce projet comprend à la fois l'API backend et le client frontend pour l'application Argent Bank.

## Documentation de l'API

Ce code source contient tout le nécessaire pour faire fonctionner le backend d'Argent Bank.

### Démarrage

#### Prérequis

Argent Bank utilise la pile technologique suivante :

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Assurez-vous d'avoir les bonnes versions et téléchargez ces deux paquets. Vous pouvez vérifier cela en utilisant les commandes suivantes dans votre terminal :

```bash
# Vérifier la version de Node.js
node --version

# Vérifier la version de Mongo
mongo --version
```

#### Instructions

1. Forkez ce dépôt
2. Clonez le dépôt sur votre ordinateur
3. Ouvrez une fenêtre de terminal dans le projet cloné
4. Exécutez les commandes suivantes :

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement local
npm run dev:server

# Peupler la base de données avec deux utilisateurs
npm run populate-db
```

Votre serveur devrait maintenant être en cours d'exécution à l'adresse http://localhost:3001 et vous aurez deux utilisateurs dans votre base de données MongoDB !

### Données de la Base de Données Peupler

Une fois que vous avez exécuté le script `populate-db`, vous devriez avoir deux utilisateurs dans votre base de données :

#### Tony Stark

- Prénom : `Tony`
- Nom : `Stark`
- Email : `tony@stark.com`
- Mot de passe : `password123`

#### Steve Rogers

- Prénom : `Steve`
- Nom : `Rogers`
- Email : `steve@rogers.com`
- Mot de passe : `password456`

### Documentation de l'API

Pour en savoir plus sur le fonctionnement de l'API, une fois que vous avez démarré votre environnement local, vous pouvez visiter : [Documentation de l'API](http://localhost:3001/api-docs)

### Points de Terminaison de l'API

- **POST** `/user/login` : API de connexion
- **POST** `/user/signup` : API d'inscription
- **POST** `/user/profile` : Récupérer le profil utilisateur
- **PUT** `/user/profile` : Mettre à jour le profil utilisateur
- **GET** `/accounts/{accountId}/transactions/` : Récupérer les transactions par compte et mois
- **GET** `/accounts/{accountId}/transactions/{transactionId}/transactiondetails` : Récupérer les détails d'une transaction
- **PUT** `/accounts/{accountId}/transactions/{transactionId}/transactiondetails` : Mettre à jour une transaction

## Documentation du Client

La partie cliente de l'application Argent Bank est développée avec Vite.

### Démarrage avec le Client

1. Naviguez dans le répertoire `client` du projet :
   ```bash
   cd client
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

L'application cliente devrait maintenant être en cours d'exécution, et vous pouvez y accéder via [http://localhost:5173](http://localhost:5173).

### Connexion

Pour connecter le client à l'API backend, assurez-vous que le serveur API est en cours d'exécution à l'adresse http://localhost:3001. L'application cliente interagira avec cette API pour effectuer des opérations telles que la connexion, la récupération des profils utilisateurs, et la gestion des transactions.



