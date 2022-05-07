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
          None: "None",
          Complaints: "Complaints",
          "Please enter a valid phone number":
            "Please enter a valid phone number",

          //basic
          WOMEN: "WOMEN",
          MAN: "MAN",
          CHILD: "CHILD",
          Other: "Other",
          accepted: "accepted",
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
          rejected: "rejected",

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
          in_progress: "In progress",
          completed: "completed",
          discarded: "discarded",

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
        },
      },
      fr: {
        translations: {
          // sidebar
          Dashboard: "Tableau de bord",
          Articles: "Articles",
          Clients: "Clients",
          Designers: "Couturiers",
          Orders: "Commandes",
          Quotes: "Devis",
          Catalogs: "Catalogues",
          Complaints: "Plaintes",
          None: "Aucune",
          //basic
          CLIENT: "CLIENT",
          DESIGNER: "COUTURIER",
          ARTICLES: "ARTICLES",
          DASHBOARD: "TABLEAU DE BORD",
          ORDERS: "COMMANDES",
          QUOTES: "DEVIS",
          CATALOGS: "CATALOGUES",
          COMPLAINTS: "PLAINTES",
          Save: "Sauvegarder",
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
          "Designer edited successfully": "Couturier édité avec succès",

          //article
          "Create Article": "Créer un article",
          "Add Article": "Ajouter un article",
          Title: "Titre",
          Description: "Description",
          "Featured image": "Image mise en avant",
          Article: "Article",
          "no file selected": "Aucun fichier sélectionné",
          Featured: "Mis en avant",
          "Enter title here": "Entrez le titre ici",
          "Enter description here...": "Entrez la description ici...",
          TITLE: "TITRE",
          DESCRIPTION: "DESCRIPTION",
          STATUS: "STATUT",
          "CREATED AT": "CRÉÉ LE",
          "UPDATED AT": "MISE À JOUR LE",
          published: "Publié",
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
          "Enter user's contact here":
            "Entrez le numéro de téléphone de l'utilisateur ici",
          "Enter user's address here": "Entrez l'adresse de l'utilisateur ici",
          "Enter user's city here": "Entrez la ville de l'utilisateur ici",
          "Enter user's country here": "Saisissez ici le pays de l'utilisateur",
          "Please enter a valid phone number":
            "S'il vous plaît entrer un numéro de téléphone valide",

          Name: "Nom",
          Email: "E-mail",
          Password: "Mot de passe",
          "Contact no.": "N° de téléphone",
          Address: "Adresse",
          City: "Ville",
          Country: "Pays",
          NAME: "NOM",
          EMAIL: "E-MAIL",
          "CONTACT NO": "N° DE TÉLÉPHONE",
          CITY: "VILLE",
          COUNTRY: "PAYS",
          accepted: "accepté",
          rejected: "rejeté",

          //designer
          "Add a designer": "Ajouter un couturier",
          "Add designer": "Ajouter un couturier",
          "Edit a designer": "Modifier un couturier",
          "View designer": "Voir le couturier",
          EXPERIENCE: "EXPÉRIENCE",
          WOMEN: "FEMMES",
          MAN: "HOMME",
          CHILD: "ENFANT",
          Other: "Autre",
          //orders
          "View Order": "Voir la commande",
          CATEGORY: "CATÉGORIE",
          TYPE: "TYPE",
          Type: "Type",

          Client: "Client",
          Designer: "Couturier",
          Gender: "Sexe",
          Category: "Catégorie",
          Cut: "Coupe",
          Measurements: "Mesures",
          Color: "Couleur",
          Fabric: "Tissu",
          Date: "Date",
          Note: "Note",
          "Delivery Type": "Moyen de livraison",
          "Budget Type": "Type de budget",
          "Budget Note": "Note budgétaire",
          "Min Price": "Prix ​​minimum",
          "Max Price": "Prix ​​maximum",
          "Rating Count": "Nombre d'évaluation",
          "Rating Value": "Évaluation",
          Attachment: "Pièce jointe",
          Status: "Statut",
          pending: "en attendant",
          in_progress: "en cours",
          completed: "terminé",
          discarded: "annulé",
          RATING: "ÉVALUATION",
          //quotes
          "View Quote": "Voir le devis",
          ORDER: "COMMANDE",
          PRICE: "PRIX",
          Price: "Prix",

          //catalog
          "View catalogue": "Voir le catalogue",

          //complaint
          "View Complaint": "Voir la plainte",
          REASON: "RAISON",
          DETAILS: "DÉTAILS",
          ATTACHMENT: "PIÈCE JOINTE",
          Reason: "Raison",
          Attachments: "Pièces jointes",
          Details: "Détails",

          // footer
          "Developed by": "Développé par",
          "- All rights reserved.": "- Tous droits réservés.",

          //toasts
          "Please enter user's name": "Veuillez entrer le nom de l'utilisateur",
          "Article added successfully": "L'article a été ajouté avec succès",
          "An error occurred": "Une erreur s'est produite",
          "Article deleted successfully":
            "L'article a été supprimé avec succès",
          "An error occurred while deleting":
            "Une erreur s'est produite lors de la suppression",
          "Article updated successfully":
            "L'article a été mis à jour avec succès",
          "User deleted successfully":
            "L'utilisateur a été supprimé avec succès",
          "Please enter a valid email": "Veuillez entrer un email valide",
          "Password is required": "Mot de passe requis",
          "Passwords should be of atleast 8 letters":
            "Le mots de passe doit comporter au moins 8 lettres",
          "Contact no. is required": "Le numéro de téléphone est requis",
          "Client added successfully": "Le client a été ajouté avec succès",
          "User edited successfully": "L'utilisateur a été modifié avec succès",
          "Complaint deleted successfully":
            "La plainte a été supprimée avec succès",
          "Designer added successfully":
            "Le couturier a été ajouté avec succès",
          "Designer deleted successfully":
            "Le couturier a été supprimé avec succès",
          Block: "Bloquer",
          Unblock: "Débloquer",
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
