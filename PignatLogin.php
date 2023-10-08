<?php
session_start();

// Vérifiez si l'utilisateur est connecté en tant que préparateur
if (!isset($_SESSION['id_Personnel']) || $_SESSION['qualite'] !== 'PREPARATEUR') {
    header("Location: login.php"); // Redirigez vers la page de connexion si l'utilisateur n'est pas un préparateur
    exit();
}

// Incluez la connexion à la base de données ici
// Remplacez les valeurs suivantes par les informations de votre base de données
$servername = "localhost";
$username = "votre_nom_d_utilisateur";
$password = "votre_mot_de_passe";
$dbname = "votre_base_de_donnees";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("La connexion à la base de données a échoué : " . $conn->connect_error);
}

// Le code pour gérer les ordres de fabrication et les formules sera ajouté ici

// Déconnexion de l'utilisateur
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.php");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Tableau de bord du préparateur</title>
</head>
<body>
    <h1>Bienvenue, <?php echo $_SESSION['login']; ?></h1>
    <p><a href="authentification.php?logout=true">Déconnexion</a></p>

    <!-- Ajoutez ici le code HTML et PHP pour gérer les ordres de fabrication et les formules -->
</body>
</html>
