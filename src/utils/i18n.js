import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // fallbackLng: ["fr", "en"],
    // we init with resources
    resources: {
      en: {
        translations: {
          // sidebar
          Dashboard: "Dashboard",
          Articles: "Articles",
          Clients: "Clients",
          Designers: "Designers",
          Orders: "Orders",
          Quotes: "Quotes",
          Catalogs: "Catalogs",
          Complaints: "Complaints",

          //basic
          CLIENT: "CLIENT",
          DESIGNER: "DESIGNER",
          ARTICLES: "ARTICLES",
          DASHBOARD: "DASHBOARD",
          ORDERS: "ORDERS",
          QUOTES: "QUOTES",
          CATALOGS: "CATALOGS",
          COMPLAINTS: "COMPLAINTS",
          Save: "Save",
          Cancel: "Cancel",

          //dashboard/header data
          TRAFFIC: "TRAFFIC",
          CLICKS: "CLICKS",
          VIEWS: "VIEWS",
          PERFORMANCE: "PERFORMANCE",
          "Since last month": "Since last month",
          "Since last week": "Since last week",
          "Since yesterday": "Since yesterday",

          //article
          "Create Article": "Create Article",
          "Add Article": "Add Article",
          Title: "Title",
          Description: "Description",
          "Featured image": "Featured image",
          Article: "Article",
          "no file selected": "no file selected",
          Featured: "Featured",
          "Enter title here": "Enter title here",
          "Enter description here...": "Enter description here...",
          TITLE: "TITLE",
          DESCRIPTION: "DESCRIPTION",
          STATUS: "STATUS",
          "CREATED AT": "CREATED AT",
          "UPDATED AT": "UPDATED AT",
          published: "published",
          View: "View",
          Edit: "Edit",
          Delete: "Delete",
          "Edit Article": "Edit Article",

          //client
          "Add a client": "Add a client",
          "Add client": "Add client",
          "Edit a client": "Edit a client",
          "View client": "View client",
          "Enter user's name here": "Enter user's name here",
          "Enter user's email here": "Enter user's email here",
          "Enter user's contact here": "Enter user's contact here",
          "Enter user's address here": "Enter user's address here",
          "Enter user's city here": "Enter user's city here",
          "Enter user's country here": "Enter user's country here",

          Name: "Name",
          Email: "Email",
          Password: "Password",
          "Contact no.": "Contact no.",
          Address: "Address",
          City: "City",
          Country: "Country",
          NAME: "NAME",
          EMAIL: "EMAIL",
          "CONTACT NO": "CONTACT NO",
          CITY: "CITY",
          COUNTRY: "COUNTRY",

          //designer
          "Add a designer": "Add a designer",
          "Add designer": "Add designer",
          "Edit a designer": "Edit a designer",
          "View designer": "View designer",
          EXPERIENCE: "EXPERIENCE",

          //orders
          "View Order": "View Order",
          CATEGORY: "CATEGORY",
          TYPE: "TYPE",
          Client: "Client",
          Designer: "Designer",
          Gender: "Gender",
          Category: "Category",
          Cut: "Cut",
          Measurements: "Measurements",
          Color: "Color",
          Fabric: "Fabric",
          Date: "Date",
          Note: "Note",
          "Delivery Type": "Delivery Type",
          "Budget Type": "Budget Type",
          "Budget Note": "Budget Note",
          "Min Price": "Min Price",
          "Max Price": "Max Price",
          "Rating Count": "Rating Count",
          "Rating Value": "Rating Value",
          Attachment: "Attachment",
          Status: "Status",
          pending: "pending",
          in_progress: "in_progress",
          completed: "completed",
          discarded: "discarded",

          //quotes
          "View Quote": "View Quote",
          ORDER: "ORDER",
          PRICE: "PRICE",
          Price: "Price",

          //catalog
          "View catalog": "View catalog",

          //complaint
          "View Complaint": "View Complaint",
          REASON: "REASON",
          DETAILS: "DETAILS",
          ATTACHMENT: "ATTACHMENT",
          Reason: "Reason",
          Attachments: "Attachments",
          Details: "Details",

          // footer
          "Developed by": "Developed by",
          "- All rights reserved.": "- All rights reserved.",
        },
      },
      fr: {
        translations: {
          // sidebar
          Dashboard: "Tableau de bord",
          Articles: "Des articles",
          Clients: "Clients",
          Designers: "Créateurs",
          Orders: "Ordres",
          Quotes: "Devis",
          Catalogs: "Catalogues",
          Complaints: "Plaintes",

          //basic
          CLIENT: "CLIENT",
          DESIGNER: "DESIGNER",
          ARTICLES: "ARTICLES",
          DASHBOARD: "TABLEAU DE BORD",
          ORDERS: "ORDRES",
          QUOTES: "DEVIS",
          CATALOGS: "CATALOGUES",
          COMPLAINTS: "PLAINTES",
          Save: "Sauver",
          Cancel: "Annuler",

          //dashboard/header data
          TRAFFIC: "CIRCULATION",
          CLICKS: "CLICS",
          VIEWS: "VUES",
          PERFORMANCE: "PERFORMANCE",
          "Since last month": "Depuis le mois dernier",
          "Since last week": "Depuis la semaine dernière",
          "Since yesterday": "Depuis hier",

          //article
          "Create Article": "Créer un article",
          "Add Article": "Ajouter un article",
          Title: "Titre",
          Description: "La description",
          "Featured image": "L'image sélectionnée",
          Article: "Article",
          "no file selected": "aucun fichier sélectionné",
          Featured: "Mis en exergue",
          "Enter title here": "Entrez le titre ici",
          "Enter description here...": "Entrez la description ici...",
          TITLE: "TITRE",
          DESCRIPTION: "LA DESCRIPTION",
          STATUS: "STATUT",
          "CREATED AT": "CRÉÉ À",
          "UPDATED AT": "MISE À JOUR À",
          published: "publié",
          View: "Voir",
          Edit: "Modifier",
          Delete: "Supprimer",
          "Edit Article": "Modifier l'article",

          //client
          "Add a client": "Ajouter un client",
          "Add client": "Ajouter un client",
          "Edit a client": "Modifier un client",
          "View client": "Afficher le client",
          "Enter user's name here": "Entrez le nom de l'utilisateur ici",
          "Enter user's email here": "Entrez l'e-mail de l'utilisateur ici",
          "Enter user's contact here": "Entrez le contact de l'utilisateur ici",
          "Enter user's address here": "Entrez l'adresse de l'utilisateur ici",
          "Enter user's city here": "Entrez la ville de l'utilisateur ici",
          "Enter user's country here": "Saisissez ici le pays de l'utilisateur",

          Name: "Nom",
          Email: "E-mail",
          Password: "Mot de passe",
          "Contact no.": "N° de contact",
          Address: "Adresse",
          City: "Ville",
          Country: "Pays",
          NAME: "NOM",
          EMAIL: "E-MAIL",
          "CONTACT NO": "N° DE CONTACT",
          CITY: "VILLE",
          COUNTRY: "PAYS",

          //designer
          "Add a designer": "Ajouter un concepteur",
          "Add designer": "Ajouter un concepteur",
          "Edit a designer": "Modifier un concepteur",
          "View designer": "Voir le concepteur",
          EXPERIENCE: "VIVRE",

          //orders
          "View Order": "Voir l'ordre",
          CATEGORY: "CATÉGORIE",
          TYPE: "TAPER",
          Client: "Client",
          Designer: "Designer",
          Gender: "Le sexe",
          Category: "Category",
          Cut: "Couper",
          Measurements: "Des mesures",
          Color: "Couleur",
          Fabric: "Tissu",
          Date: "Date",
          Note: "Noter",
          "Delivery Type": "Type de livraison",
          "Budget Type": "Type de budget",
          "Budget Note": "Note budgétaire",
          "Min Price": "Prix ​​minimum",
          "Max Price": "Prix ​​maximum",
          "Rating Count": "Nombre de notes",
          "Rating Value": "Valeur de notation",
          Attachment: "Attachement",
          Status: "Statut",
          pending: "en attendant",
          in_progress: "en cours",
          completed: "terminé",
          discarded: "mis au rebut",

          //quotes
          "View Quote": "Voir le devis",
          ORDER: "COMMANDE",
          PRICE: "LE PRIX",
          Price: "Prix",

          //catalog
          "View catalog": "Voir le catalogue",

          //complaint
          "View Complaint": "Voir la plainte",
          REASON: "RAISON",
          DETAILS: "DES DÉTAILS",
          ATTACHMENT: "ATTACHEMENT",
          Reason: "Raison",
          Attachments: "Pièces jointes",
          Details: "Des détails",

          // footer
          "Developed by": "Développé par",
          "- All rights reserved.": "- Tous droits réservés.",
        },
      },
    },

    fallbackLng: "fr",
    debug: true,

    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
