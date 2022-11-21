/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

const randomLastName = faker.name.lastName();
const randomFirstname = faker.name.firstName();
const randomMail = faker.internet.email();
const randomAge = faker.datatype.number({ min: 18, max: 99 });

describe("Kata01_Cypress", () => {
  it("Scénario_1", () => {
    cy.visit("Quizz.html");
    console.log("Scénario 1");

    cy.get('[for="lastName"]').should("be.visible", "Nom");
    cy.get("#lastName").type(randomLastName);
    cy.get("#lastName").should("be.visible", randomLastName);

    cy.get('[for="firstName"]').should("be.visible", "Prénom");
    cy.get("#firstName").type(randomFirstname);
    cy.get("#firstName").should("be.visible", randomFirstname);

    cy.get('[for="email"]').should("be.visible", "Email");
    cy.get("#email").type(randomMail);
    cy.get("#email").should("be.visible", randomMail);

    cy.get('[for="age"]').should("be.visible", "Age");
    cy.get('[type="text"]').type(randomAge);
    cy.get('[type="text"]').should("be.visible", randomAge);

    cy.get(":nth-child(10)").should(
      "be.visible",
      "Est-ce que tu recommanderais Automation Tester Academy à un ami ?"
    );
    cy.get(".radio > :nth-child(1) > input").click();
    cy.get(".radio > :nth-child(1) > input").should("be.checked");

    cy.get(":nth-child(12)").should(
      "be.visible",
      "Frameworks d'automatisation de tests que vous connaissez "
    );
    cy.get(".checkbox > label:nth-child(1) > input:nth-child(1)").click();
    cy.get(".checkbox > label:nth-child(2) > input:nth-child(1)").click();
    cy.get(".checkbox > label:nth-child(4) > input:nth-child(1)").click();
    cy.get("input:nth-child(1)").should(
      "be.visible",
      "Cypress",
      "Appium",
      "Selenium Webdriver"
    );

    cy.get('[for="level"]').should("be.visible", "Comment trouvez vous HTML");
    cy.get("select:nth-child(15)").select("Moyen");
    cy.get("select:nth-child(15) > option:nth-child(2)").should(
      "be.visible",
      "Moyen"
    );

    cy.get('[for="suggestion"]').should(
      "be.visible",
      "Vos suggestions pour la formation"
    );
    cy.get("#suggestions").type("plus de point de synchro");
  });

  it("scénario_2", () => {
    cy.visit("Quizz.html");
    console.log("Scénario 2");

    cy.get("#lastName").type(randomLastName);
    cy.get("#firstName").type(randomFirstname);
    cy.get("#email").type(randomMail);
    cy.get('[type="text"]').type(randomAge);
    cy.get("select:nth-child(15)").select("Facile");
    // cy.get('[type="submit"]').click();
    console.log("je dois être deeplink sur ma boite mail");
  });

  it("scénario 3", () => {
    cy.visit("Quizz.html");
    console.log("Scénario 3");
    cy.get("#lastName").type(randomLastName);
    cy.get("#firstName").type(randomFirstname);
    cy.get("#email").type(randomMail);
    cy.get("select:nth-child(15)").select("Facile");
    //cy.get('[type="submit"]').click();
    console.log("une pop up d erreur doit apparaitre dans le champs Age");
  });
});
