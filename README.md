# MVP

# 📋 Vue d'ensemble du projet
Objectif : Créer un MVP permettant aux neuropsychologues de générer automatiquement des bilans à partir de leurs notes brutes et résultats de tests.

Stack technique :

Frontend : Next.js + React + Tailwind CSS + Shadcn/ui\n
Backend : NestJS\n
Base de données : PostgreSQL + Prisma ORM\n
IA : OpenAI GPT API\n
Stockage fichiers : AWS S3 ou local\n

# Faire fonctionner le projet

1. Démarrer les services Docker
docker-compose up -d

2. Backend - générer le client Prisma et migrer
cd backend
npm run db:generate
npm run db:migrate

3. Démarrer le backend
npm run start:dev

4. Dans un autre terminal - Frontend
cd ../frontend
npm run dev
Urls de développement

Frontend : http://localhost:3000
Backend API : http://localhost:3001
Swagger docs : http://localhost:3001/api
Prisma Studio : npm run db:studio (port 5555)


