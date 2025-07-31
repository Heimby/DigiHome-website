# Digihome - Car Sales Management System

A comprehensive car dealership management system with React frontend and .NET backend.

## Key Features

### Opportunity Management

- [x] Add agents with email address without connecting to user, such that when they register they are automatically connected to the agent
- [x] Assign agents to opportunities
- [x] Upload images and documents to opportunities
- [x] Image approval workflow for public listings
- [x] Ensure agents can insert chat messages to all conversations
- [x] Connect opportunities to cars
- [x] Connect opportunities to owners or organizations

### Authentication & Authorization

- JWT-based authentication with role-based access control
- Roles: Admin, Agent, Owner
- Secure document access with proper permission checks

### File Management Features

- **Upload**: Drag & drop interface with file validation (up to 50MB per file)
- **Storage**: S3-compatible storage with MinIO client
- **Security**: Role-based access control for document management
- **Performance**: Response caching for downloads, direct S3 URLs for images
- **Management**: Download, delete, and organize files by opportunity

## Technology Stack

### Backend

- .NET 8 with ASP.NET Core
- Entity Framework Core with PostgreSQL
- MinIO client for S3-compatible storage
- JWT authentication with Identity framework
- OpenAPI/Swagger documentation

### Frontend

- React with TypeScript
- React Router v7 for routing
- TailwindCSS + DaisyUI for styling
- OpenAPI client generation

### Storage & Infrastructure

- Hetzner Object Storage (S3-compatible)
- PostgreSQL database
- Response caching for optimal performance

### Customer (owner) portal

- [x] Support organizations as well, so multiple users can be linked to the same organization which will read multiple opportunities
- [x] When logging in first time, automatically link the user to existing owner based on email and phone number
- [x] View their own opportunities (use the dashboard view that agents use, but with limited functionality)

  - [x] View details of a specific opportunity (Use CarDetail page but with limited functionality)
  - [x] Upload documents and images to an opportunity
  - [x] Add comments and messages to an opportunity
  - [x] View the status of their opportunities
  - [ ] Add receiving bank account number (currently Norwegian only)
  - [x] Perform a self certification of the opportunity

    - [ ] View the history of changes made to the opportunity
    - [ ] Does the car have any damages, and if so, what are they?
    - [ ] Winter tires or summer tires?
    - [ ] Is the car registered?
    - [ ] Has service intervals been performed?
    - [ ] Is the car accident free?
    - [ ] Is the car still under warranty?
    - [ ] Check list (look for damages, functionality, etc. if anything is found, note it down and upload images):

      - Utvendig sjekk:
        - Felger og dekk
        - Bakside: lykter, støtfanger, sensorer, bakrute
        - Førerside: Speil, vinduer, dører
        - Framside: Lykter, støtfanger, panser, frontrute
        - Passasjerside: Speil, vinduer, dører
        - Tak: Tak, takrails, takluke
        - Bremser: Se etter rust, synlig slitasje og skader
      - Innvendig sjekk:

        - Seter
        - Gulv og matter
        - Dører
        - Taktrekk
        - Bagasjerom
        - Ratt
        - Instrumentpanel: Skjermer, knapper, brytere

      - Funksjonalitet:

        - Klimaanlegg
        - Mediasystem
        - Varsellamper
        - Lys
        - Vindusviskere
        - Vinduer
        - Dører
        - Låser
        - Speil
        - Setejustering og varme/ventilasjon i seter
        - Fløyte virker
        - Hengerfeste
        - Parkeringassistent

      - Kjøring:
        - Lyder under kjøring
        - Bremser
        - Ratt
        - Gir

- [x] Unit test frontend Wizard for self certification
- [x] Unit test backend SelfCertificateService
- [x] Unit test backend SelfCertificateController
- [x] Manage their profile
  - [x] Update personal information
  - [x] Change contact information (exists in profile view)
  - [x] Change password (use existing password change functionality in profile view)
- [ ] Future: View and manage contracts and agreements
  - [ ] Future: View contract details
  - [ ] Future: Download contracts
  - [ ] Future: Sign contracts electronically
- [ ] Future: Order klargjøring from Bilpleieproffen.no (Oslo)
  - https://bilpleieproffen.simplybook.it/v2/booking/time-slots/?from=2025-07-17&to=2025-07-17&location=&category=&provider=5&service=4&count=1
- [ ] Future: Order klargjøring from other places
