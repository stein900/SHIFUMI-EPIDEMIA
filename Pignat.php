<?php
session_start();

// Vérifiez si l'utilisateur est déjà connecté
if (isset($_SESSION['id_Personnel'])) {
    header("Location: authentification.php"); // Redirigez vers la page d'authentification si l'utilisateur est déjà connecté
    exit();
}

// Traitement du formulaire de connexion
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Incluez la connexion à la base de données ici
    // Remplacez les valeurs suivantes par les informations de votre base de données
    $servername = "localhost";
    $dbusername = "votre_nom_d_utilisateur";
    $dbpassword = "votre_mot_de_passe";
    $dbname = "votre_base_de_donnees";

    $conn = new mysqli($servername, $dbusername, $dbpassword, $dbname);

    if ($conn->connect_error) {
        die("La connexion à la base de données a échoué : " . $conn->connect_error);
    }

    // Évitez les attaques par injection SQL en utilisant des requêtes préparées
    $stmt = $conn->prepare("SELECT id_Personnel, login, qualite FROM personnel WHERE login = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id_Personnel, $login, $qualite);
        $stmt->fetch();
        $_SESSION['id_Personnel'] = $id_Personnel;
        $_SESSION['login'] = $login;
        $_SESSION['qualite'] = $qualite;
        header("Location: authentification.php");
    } else {
        $error_message = "Identifiant ou mot de passe incorrect.";
    }

    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion</h1>
    <?php if (isset($error_message)) { ?>
        <p><?php echo $error_message; ?></p>
    <?php } ?>
    <form method="POST" action="login.php">
        <label for="username">Nom d'utilisateur :</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Mot de passe :</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" name="login" value="Se connecter">
    </form>
</body>
</html>
