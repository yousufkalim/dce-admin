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
          Catalogues: "Catalogues",
          Complaints: "Complaints",

          //basic
          CLIENT: "CLIENT",
          DESIGNER: "DESIGNER",
          ARTICLES: "ARTICLES",
          DASHBOARD: "DASHBOARD",
          ORDERS: "ORDERS",
          QUOTES: "QUOTES",
          CATALOGUES: "CATALOGUES",
          COMPLAINTS: "COMPLAINTS",
          Save: "Save",
          Cancel: "Cancel",
          Update: "Update",

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
          "Designer edited successfully": "Designer edited successfully",

          //orders
          "View Order": "View Order",
          CATEGORY: "CATEGORY",
          TYPE: "TYPE",
          Type: "Type",
          Client: "Client",
          Designer: "Designer",
          Gender: "Gender",
          Category: "Category",
          RATING: "RATING",
          Block: "Block",
          Unblock: "Unblock",
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
          "Enter Zip Code here": "Enter Zip Code here",
          "Zip Code": "Zip Code",

          //quotes
          "View Quote": "View Quote",
          ORDER: "ORDER",
          PRICE: "PRICE",
          Price: "Price",

          //catalog
          "View catalogue": "View catalogue",

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

          //toasts
          "Please enter user's name": "Please enter user's name",
          "Article added successfully": "Article added successfully",
          "An error occurred": "An error occurred",
          "Article deleted successfully": "Article deleted successfully",
          "An error occurred while deleting":
            "An error occurred while deleting",
          "Article updated successfully": "Article updated successfully",
          "User deleted successfully": "User deleted successfully",
          "Please enter a valid email": "Please enter a valid email",
          "Password is required": "Password is required",
          "Passwords should be of atleast 8 letters":
            "Passwords should be of atleast 8 letters",
          "Contact no. is required": "Contact no. is required",
          "Client added successfully": "Client added successfully",
          "User edited successfully": "User edited successfully",
          "Complaint deleted successfully": "Complaint deleted successfully",
          "Designer added successfully": "Designer added successfully",
          "Designer deleted successfully": "Designer deleted successfully",
          "ZIP CODE": "ZIP CODE",
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
          Update: "Mise à jour",

          //dashboard/header data
          TRAFFIC: "CIRCULATION",
          CLICKS: "CLICS",
          VIEWS: "VUES",
          PERFORMANCE: "PERFORMANCE",
          "Since last month": "Depuis le mois dernier",
          "Since last week": "Depuis la semaine dernière",
          "Since yesterday": "Depuis hier",
          "Designer edited successfully": "Designer édité avec succès",

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
          Type: "Taper",

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
          RATING: "ÉVALUATION",
          //quotes
          "View Quote": "Voir le devis",
          ORDER: "COMMANDE",
          PRICE: "LE PRIX",
          Price: "Prix",

          //catalog
          "View catalogue": "Voir le catalogue",

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

          //toasts
          "Please enter user's name": "Veuillez entrer le nom de l'utilisateur",
          "Article added successfully": "Article ajouté avec succès",
          "An error occurred": "Une erreur s'est produite",
          "Article deleted successfully": "Article supprimé avec succès",
          "An error occurred while deleting":
            "Une erreur s'est produite lors de la suppression",
          "Article updated successfully": "Article mis à jour avec succès",
          "User deleted successfully": "Utilisateur supprimé avec succès",
          "Please enter a valid email": "Veuillez entrer un email valide",
          "Password is required": "Mot de passe requis",
          "Passwords should be of atleast 8 letters":
            "Les mots de passe doivent comporter au moins 8 lettres",
          "Contact no. is required": "Le numéro de contact est requis",
          "Client added successfully": "Client ajouté avec succès",
          "User edited successfully": "Utilisateur modifié avec succès",
          "Complaint deleted successfully": "Plainte supprimée avec succès",
          "Designer added successfully":
            "Le concepteur a été ajouté avec succès",
          "Designer deleted successfully": "Designer supprimé avec succès",
          Block: "Bloc",
          Unblock: "Débloquer",
          "Zip Code": "Code postal",
          "ZIP CODE": "CODE POSTAL",

          "Enter Zip Code here": "Entrez le code postal ici",
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
