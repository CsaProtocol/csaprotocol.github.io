---
title: "TortoiseHospital"
summary: "Java app that helps manage the care and recovery of sea turtles at National Recovery Centers. It includes a GUI and a database, and allows staff to track turtle admissions, medical records, and generate monthly/annual stats."
date: "02/28/2024"
draft: false
tags:
- Java
- JavaFX
- Maven
- PostgreSQL
- PL/pgSQL
- GitHub
highlights: []
repoUrl: https://github.com/CsaProtocol/TortoiseHospital

---

The TortoiseHospital project is a college assignment for our Object-Oriented Programming course. It’s an information system that helps manage the care and rehabilitation of sea turtles at National Recovery Centers. The system uses a relational database and a Java application with a GUI built using JavaFX.

Each staff member gets a unique ID that links them to the center’s activities. When a turtle is admitted, it’s given an internal ID and a name. There are two types of admissions: first-time admission for turtles without tags and re-admission for those that already have tags. A vet creates a medical record for the turtle, which includes details like species, size, weight, where it was found, and its health condition. Every turtle is also placed in a tank with a unique code.

The system generates monthly and yearly reports that show how many turtles were admitted and their health progress. This data is useful for spotting trends and helping with future decisions about how to improve care for the turtles.
